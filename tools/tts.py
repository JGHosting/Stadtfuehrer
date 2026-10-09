"""Erzeugt KI-Audios (Microsoft Neural Voices via edge-tts) für alle Texte.
Bereits vorhandene Dateien werden übersprungen (Dateiname = Hash aus Stimme + Text)."""
import asyncio, hashlib, json, os, sys
import edge_tts

VOICES = {
    "seraphina": ["de-DE-SeraphinaMultilingualNeural", "de-DE-KatjaNeural"],
    "florian":   ["de-DE-FlorianMultilingualNeural", "de-DE-ConradNeural"],
}
texts = json.load(open(sys.argv[1], encoding="utf-8"))
out_dir = sys.argv[2]
os.makedirs(out_dir, exist_ok=True)
sem = asyncio.Semaphore(4)
manifest = {"voices": {}}

async def render(candidates, text, path):
    async with sem:
        last = None
        for v in candidates:
            for attempt in range(3):
                try:
                    await edge_tts.Communicate(text, v, rate="-4%").save(path + ".tmp")
                    os.replace(path + ".tmp", path)
                    return v
                except Exception as e:
                    last = e
                    await asyncio.sleep(2 + attempt * 3)
        raise RuntimeError(f"TTS fehlgeschlagen: {last}")

async def main():
    for vid, cands in VOICES.items():
        m = {}; jobs = []
        for key, text in texts.items():
            h = hashlib.sha1(f"{cands[0]}|{text}".encode()).hexdigest()[:16]
            fname = f"{vid}-{h}.mp3"; m[key] = fname
            path = os.path.join(out_dir, fname)
            if not os.path.exists(path) or os.path.getsize(path) < 1000:
                jobs.append(render(cands, text, path))
        print(f"{vid}: {len(jobs)} neu, {len(m) - len(jobs)} aus Cache", flush=True)
        await asyncio.gather(*jobs)
        manifest["voices"][vid] = m
    keep = {f for m in manifest["voices"].values() for f in m.values()}
    for f in os.listdir(out_dir):
        if f.endswith(".mp3") and f not in keep: os.remove(os.path.join(out_dir, f))
    json.dump(manifest, open(os.path.join(out_dir, "manifest.json"), "w"), indent=0)

asyncio.run(main())
