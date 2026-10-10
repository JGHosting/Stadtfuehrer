# Strolli – Stadtführungen zum Hören (Prototyp)

Persönliche Stadtführung als Web-App (PWA): Startpunkt, Zu Fuß/Fahrrad, Zeit und Themen wählen → die App plant eine Tour, navigiert dich hin und erzählt an jedem Stopp und unterwegs Geschichten (zum Lesen oder Anhören).

## Online stellen (GitHub Pages, wie bei Basislager)
1. Auf GitHub ein neues Repo anlegen, z. B. `stadtfuehrer`.
2. Alle Dateien aus diesem Ordner hochladen („Add file → Upload files“).
3. Settings → Pages → Branch `main`, Ordner `/ (root)` → Save.
4. Nach 1–2 Minuten erreichbar unter `https://jghosting.github.io/stadtfuehrer/`.
5. Auf dem iPhone in Safari öffnen → Teilen → „Zum Home-Bildschirm“.

## Dateien
- `index.html` – die App
- `content/` – Städte (`cities.js` + eine Datei pro Stadt), Vorlese-Sätze (`phrases.js`), Einstellungen (`config.js`)
- `server/` – eigener Routing-Server, `native/` – iOS-App mit Capacitor, `legal/` – Impressum & Datenschutz
- `manifest.webmanifest`, `sw.js`, `icon-*.png` – damit sie sich wie eine App installieren lässt

## Verwendete Dienste
- Karte: OpenFreeMap (OpenStreetMap-Daten) mit MapLibre
- Routing: routing.openstreetmap.de (OSRM, betrieben von FOSSGIS) – Fair-Use, für einen Prototyp okay; für die Store-Version eigenen Server aufsetzen
- Fotos & genaue Koordinaten: Wikipedia-API
- Vorlesen: vorab erzeugte KI-Audios (Gemini, Katja/Conrad), Gerätestimme als Ersatz

## Grenzen des Prototyps
- Als Web-App läuft die Standortverfolgung nur bei eingeschaltetem Bildschirm (die App hält ihn wach).

## KI-Stimme
Die Vorlese-Texte stehen in den Stadtdateien (`content/<stadt>.js`) und `content/phrases.js`. Beim Deploy erzeugt GitHub Actions
daraus MP3s im Ordner `audio/` – nur für neue oder geänderte Texte:
- **Gemini** (Hauptstimme, bezahlter Zugang, Schlüssel als Secret `GEMINI_API_KEY`). Kostenbremse: max. 150 Anfragen pro Lauf.
  Lange Erzeugung läuft nachts, per Hand gestartet oder bei Commits mit `[audio]` in der Nachricht.
- **Katja und Conrad** (Microsoft, edge-tts) als Ersatz, falls eine Gemini-Datei fehlt.
Den Stand zeigt die App im Entwicklerbereich unter „KI-Audios“ (`audio/status.json`).

## Neue Stadt hinzufügen
1. `content/<id>.js` nach dem Muster von `content/augsburg.js` anlegen (Startpunkte, Themen, Highlight-Rangfolge, Stopps mit Priorität, Wegesrand, Viertel).
2. In `content/cities.js` einen Eintrag ergänzen (Name, Untertitel, Mittelpunkt, Radius, Datei).
3. Hochladen. GitHub erzeugt die Audios (`audio/manifest-<id>.json`), die App erkennt die Stadt am Standort
   oder man wählt sie oben im Menü aus. Geladen wird immer nur die Datei der gewählten Stadt.

## Entwicklermodus
Sieben Mal schnell auf „Deine Stadtführung“ tippen (oder `?dev=1` an die Adresse hängen) blendet unten den Bereich
„Entwickler“ ein: Stadtauswahl, Simulationsmodus und eigener Routing-Server. Normale Nutzer bekommen automatisch die
Stadt, in der sie gerade sind.

## Tourplanung
Jede Stadt hat in ihrer Datei `categories`: zuerst **Must-See** mit den bekanntesten Sehenswürdigkeiten, dann weitere
Kategorien (Geschichte, Kirchen, …). Jede Liste ist nach Berühmtheit sortiert.
1. Must-See (wenn gewählt) kommen in ihrer Reihenfolge auf die Tour, solange sie in ca. 70 % der Zeit passen.
2. Die anderen gewählten Kategorien im Reißverschluss: von jeder die berühmteste, dann die zweitberühmteste usw.
   Stationen, für die man einen großen Umweg laufen müsste, werden übersprungen.
3. Etwa 15 % der Zeit bleiben für Umwege durch Parks, Gassen und an Sehenswertem vorbei. Kandidaten sind die
   Wegesrand-Geschichten, nicht eingeplante Stationen und die „schönen Wege“ der Stadt (`scenic` in der Stadtdatei:
   Parks, Ufer, Gassen – ohne Ansage, nur damit die Route dort entlangführt). Jede Etappe höchstens ca. 1,75-mal so lang
   wie der direkte Weg. Führt ein Umweg zu doppelt gelaufenen Wegstücken, wird er wieder herausgenommen.

## Dialekt
`dialect` in der Stadtdatei legt Begrüßung und Abschied fest (z. B. Bayern: „Servus“ / „pfiat di“). Ohne Angabe: Hochdeutsch.

## Aussprache
`PHRASES.spoken` schreibt Zahlen und Abkürzungen in Sprechform um. `PHRASES.phonetic` enthält englische Wörter in deutscher
Lautschrift für die rein deutschen Stimmen (z. B. Funfact → Fann-Fäkt). Gemini bekommt den Originaltext.
