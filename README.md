# Stadtführer – Prototyp

Persönliche Stadtführung als Web-App (PWA): Startpunkt, Zu Fuß/Fahrrad, Zeit und Themen wählen → die App plant eine Tour, navigiert dich hin und erzählt an jedem Stopp und unterwegs Geschichten (zum Lesen oder Anhören).

## Online stellen (GitHub Pages, wie bei Basislager)
1. Auf GitHub ein neues Repo anlegen, z. B. `stadtfuehrer`.
2. Alle Dateien aus diesem Ordner hochladen („Add file → Upload files“).
3. Settings → Pages → Branch `main`, Ordner `/ (root)` → Save.
4. Nach 1–2 Minuten erreichbar unter `https://jghosting.github.io/stadtfuehrer/`.
5. Auf dem iPhone in Safari öffnen → Teilen → „Zum Home-Bildschirm“.

## Dateien
- `index.html` – die ganze App inkl. aller Inhalte (Stopps, Wegesrand-Erzählungen, Viertel)
- `manifest.webmanifest`, `sw.js`, `icon-*.png` – damit sie sich wie eine App installieren lässt

## Verwendete Dienste (alle kostenlos, ohne API-Key)
- Karte: OpenFreeMap (OpenStreetMap-Daten) mit MapLibre
- Routing: routing.openstreetmap.de (OSRM, betrieben von FOSSGIS) – Fair-Use, für einen Prototyp okay; für die Store-Version eigenen Server aufsetzen
- Fotos & genaue Koordinaten: Wikipedia-API
- Vorlesen: Sprachausgabe des Geräts

## Grenzen des Prototyps
- Als Web-App läuft die Standortverfolgung nur bei eingeschaltetem Bildschirm (die App hält ihn wach).
- Die Stimme ist die eingebaute Gerätestimme.

## KI-Stimme
Die Vorlese-Texte stehen in `content/augsburg.js` und `content/phrases.js`. Beim Deploy erzeugt GitHub Actions
daraus MP3s mit Microsoft-Neural-Stimmen Katja und Conrad (edge-tts) im Ordner `audio/` – nur für neue oder geänderte Texte.
Fehlt eine Datei, spricht die Gerätestimme. Für die App-Store-Version auf den offiziellen Azure-Speech-Dienst wechseln.

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
1. Zuerst kommen die Top-Highlights der Stadt in ihrer Rangfolge (`highlights` in der Stadtdatei) auf die Tour, solange sie in etwa 70 % der Zeit passen.
2. Dann wird mit Stopps zu den gewählten Themen aufgefüllt (Priorität 3/2/1 fließt mit ein).
3. Etwa 10 % der Zeit bleiben für kleine Umwege zu Sehenswertem am Wegesrand – nur Punkte, die grob auf dem Weg liegen,
   und jede Etappe höchstens ca. 1,35-mal so lang wie der direkte Weg. Führt ein Umweg dazu, dass Wegstücke doppelt
   gelaufen werden, nimmt die App ihn wieder heraus.
