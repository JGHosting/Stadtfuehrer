"""Erzeugt Audios für alle Vorlese-Texte.

1. Gemini-TTS (wenn GEMINI_API_KEY gesetzt ist): ausdrucksstarke Stimme mit Stadtführer-Regieanweisung.
   Das Gratis-Kontingent ist begrenzt. Was heute nicht fertig wird, erzeugt der nächste Lauf
   (der Workflow läuft zusätzlich jede Nacht). Fertige Dateien bleiben im Cache.
2. Microsoft-Neural-Stimmen über edge-tts: immer komplett, dienen auch als Ersatz für fehlende Gemini-Audios.

Dateiname = Hash aus Stimme + Text, geänderte Texte werden also automatisch neu erzeugt."""
import asyncio, base64, hashlib, json, os, subprocess, sys, time, urllib.request, urllib.error

ALL = json.load(open(sys.argv[1], encoding="utf-8"))   # { stadt: { schlüssel: text } }
OUT = sys.argv[2]
os.makedirs(OUT, exist_ok=True)
CITY_NAMES = json.load(open("city-names.json")) if os.path.exists("city-names.json") else {}

# ---------------------------------------------------------------- Gemini
GEMINI_KEY = os.environ.get("GEMINI_API_KEY", "").strip()
GEMINI_MODELS = ["gemini-3.1-flash-tts-preview", "gemini-2.5-flash-preview-tts"]
GEMINI_VOICE = "Aoede"
GEMINI_BUDGET_S = int(os.environ.get("GEMINI_BUDGET_S", "120"))   # bei Updates kurz, nachts lang

STYLE_STORY = ("Lies den folgenden Text auf Deutsch vor wie eine begeisterte, warmherzige Stadtführerin in {city}: "
               "lebendig und natürlich, mit kleinen Pausen vor Pointen und Funfacts, ein Lächeln in der Stimme, "
               "aber nicht übertrieben. Sprich durchgehend mit deutscher Aussprache, auch Namen, lateinische "
               "Begriffe und Fremdwörter so, wie ein deutscher Muttersprachler sie sagt. "
               "Lies nur den Text, ohne etwas hinzuzufügen.\n\nText:\n")
STYLE_SHORT = "Sag freundlich, klar und natürlich auf Deutsch, mit deutscher Aussprache:\n"

def priority(key):
    for i, p in enumerate(["intro", "story:", "way:", "zone:", "first:", "next:", "home", "end", "test", "turn:"]):
        if key.startswith(p): return i
    return 99

def gemini_request(model, prompt):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
    body = {"contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {"responseModalities": ["AUDIO"],
                                 "speechConfig": {"voiceConfig": {"prebuiltVoiceConfig": {"voiceName": GEMINI_VOICE}}}}}
    req = urllib.request.Request(url, data=json.dumps(body).encode(), method="POST",
                                 headers={"Content-Type": "application/json", "x-goog-api-key": GEMINI_KEY})
    with urllib.request.urlopen(req, timeout=180) as r:
        j = json.load(r)
    part = j["candidates"][0]["content"]["parts"][0]["inlineData"]
    rate = 24000
    for bit in part.get("mimeType", "").split(";"):
        if bit.strip().startswith("rate="): rate = int(bit.split("=")[1])
    return base64.b64decode(part["data"]), rate

def pcm_to_mp3(pcm, rate, path):
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "s16le", "-ar", str(rate), "-ac", "1", "-i", "pipe:0",
                    "-codec:a", "libmp3lame", "-b:a", "64k", path], input=pcm, check=True)

def run_gemini(TEXTS, manifest, city_name, state):
    if not GEMINI_KEY:
        print("gemini: kein GEMINI_API_KEY – übersprungen"); return
    m, todo = {}, []
    style_story = STYLE_STORY.replace("{city}", city_name)
    for key in sorted(TEXTS, key=priority):
        text = TEXTS[key]
        fname = "gemini-" + hashlib.sha1(f"{GEMINI_VOICE}|{style_story}|{text}".encode()).hexdigest()[:16] + ".mp3"
        path = os.path.join(OUT, fname)
        if os.path.exists(path) and os.path.getsize(path) > 1000: m[key] = fname
        else: todo.append((key, text, fname, path))
    print(f"gemini: {len(todo)} offen, {len(m)} aus Cache", flush=True)
    models, done = state["models"], 0
    for key, text, fname, path in todo:
        if time.time() - state["t0"] > GEMINI_BUDGET_S: print("gemini: Zeitbudget erreicht, Rest beim nächsten Lauf"); break
        prompt = (style_story if len(text) > 120 else STYLE_SHORT) + text
        ok = False
        for attempt in range(6):
            if not models: break
            try:
                pcm, rate = gemini_request(models[0], prompt)
                pcm_to_mp3(pcm, rate, path); m[key] = fname; ok = True; done += 1
                print(f"  ✓ {key} ({models[0]})", flush=True); break
            except urllib.error.HTTPError as e:
                msg = e.read().decode(errors="ignore")
                if e.code == 404 or (e.code == 400 and "not found" in msg.lower()):
                    print(f"  Modell {models[0]} nicht verfügbar, nächstes …"); models.pop(0); continue
                if e.code == 429:
                    if "PerDay" in msg or "per day" in msg.lower():
                        print("gemini: Tageskontingent aufgebraucht – Rest beim nächsten Lauf"); models.clear(); break
                    wait = 30
                    try:
                        for d in json.loads(msg)["error"].get("details", []):
                            if "retryDelay" in d: wait = int(float(d["retryDelay"].rstrip("s"))) + 2
                    except Exception: pass
                    print(f"  Limit erreicht, warte {wait}s …", flush=True); time.sleep(min(wait, 90)); continue
                print(f"  ✗ {key}: HTTP {e.code} {msg[:200]}"); time.sleep(5)
            except Exception as e:
                print(f"  ✗ {key}: {e}"); time.sleep(5)
        if not models: break
    print(f"gemini: {done} neu erzeugt, {len(m)}/{len(TEXTS)} vorhanden", flush=True)
    manifest["voices"]["gemini"] = m

# ---------------------------------------------------------------- edge-tts
# Rein deutsche Stimmen: Die „Multilingual“-Stimmen raten die Sprache pro Satz und lesen kurze Titel oft englisch.
EDGE_VOICES = {"katja":  ["de-DE-KatjaNeural"],
               "conrad": ["de-DE-ConradNeural"]}

async def run_edge(TEXTS, manifest):
    import edge_tts
    sem = asyncio.Semaphore(4)
    async def render(cands, text, path):
        async with sem:
            last = None
            for v in cands:
                for attempt in range(3):
                    try:
                        await edge_tts.Communicate(text, v, rate="-4%").save(path + ".tmp")
                        os.replace(path + ".tmp", path); return
                    except Exception as e:
                        last = e; await asyncio.sleep(2 + attempt * 3)
            raise RuntimeError(f"edge-tts fehlgeschlagen: {last}")
    for vid, cands in EDGE_VOICES.items():
        m, jobs = {}, []
        for key, text in TEXTS.items():
            fname = f"{vid}-" + hashlib.sha1(f"{cands[0]}|{text}".encode()).hexdigest()[:16] + ".mp3"
            m[key] = fname; path = os.path.join(OUT, fname)
            if not os.path.exists(path) or os.path.getsize(path) < 1000: jobs.append(render(cands, text, path))
        print(f"{vid}: {len(jobs)} neu, {len(m) - len(jobs)} aus Cache", flush=True)
        await asyncio.gather(*jobs)
        manifest["voices"][vid] = m

# Eine Manifest-Datei pro Stadt: audio/manifest-<stadt>.json  (die App lädt nur die der gewählten Stadt)
keep, gstate = set(), {"models": list(GEMINI_MODELS), "t0": time.time()}
for city, TEXTS in ALL.items():
    print(f"=== {city}: {len(TEXTS)} Texte", flush=True)
    manifest = {"voices": {}}
    asyncio.run(run_edge(TEXTS, manifest))
    run_gemini(TEXTS, manifest, CITY_NAMES.get(city, city.capitalize()), gstate)
    keep |= {f for m in manifest["voices"].values() for f in m.values()}
    json.dump(manifest, open(os.path.join(OUT, f"manifest-{city}.json"), "w"), indent=0)
for f in os.listdir(OUT):
    if f.endswith(".mp3") and f not in keep: os.remove(os.path.join(OUT, f))
