# Stadtführer Augsburg – Prototyp

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
- Inhalte stehen direkt in `index.html` im Objekt `CITY`. Eine neue Stadt = ein neues Objekt mit gleicher Struktur.
