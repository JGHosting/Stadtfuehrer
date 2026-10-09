# Eigener Routing-Server (Valhalla)

Die App nutzt im Moment den kostenlosen Routing-Dienst der FOSSGIS e.V. Der ist für Prototypen okay,
für eine veröffentlichte App aber nicht gedacht. Diese Anleitung bringt deinen **eigenen** Routing-Server
zum Laufen – zuerst kostenlos auf deinem Mac zum Testen, später auf einem gemieteten Server.

Valhalla berechnet Fußgänger- und Fahrradrouten aus OpenStreetMap-Daten (hier: ganz Bayern, also Augsburg
und München) und liefert sie im selben Format wie bisher – die App muss nur die Adresse kennen.

---

## A) Kostenlos testen auf deinem Mac

**Voraussetzungen:** [Docker Desktop](https://www.docker.com/products/docker-desktop/) (kostenlos für private Nutzung),
mind. 8 GB RAM frei, ca. 10 GB Speicherplatz.

1. Ordner `server/` aus dem Repo auf den Mac holen (z. B. Repo klonen oder als ZIP laden).
2. Terminal im Ordner öffnen und starten:
   ```bash
   docker compose up -d valhalla
   docker compose logs -f valhalla     # Fortschritt ansehen, beenden mit Ctrl+C
   ```
   Der erste Start lädt Bayern (~800 MB) und baut die Routing-Daten. Das dauert eine Weile.
   Fertig ist es, wenn im Log steht, dass der Server auf Port 8002 läuft.
3. Testen im Browser: <http://localhost:8002/status> → zeigt eine Versionsangabe.

### Vom iPhone aus erreichbar machen (kostenlos, ohne eigene Domain)
Das iPhone kann `localhost` deines Macs nicht erreichen. Ein kostenloser Cloudflare-Tunnel gibt dem Server eine
öffentliche HTTPS-Adresse, solange das Terminal offen ist:
```bash
brew install cloudflared
cloudflared tunnel --url http://localhost:8002
```
Im Terminal erscheint eine Adresse wie `https://irgendwas-zufaellig.trycloudflare.com`.

### In der App umstellen (ohne Code zu ändern)
1. Entwicklermodus einschalten (7× auf „Deine Stadtführung“ tippen).
2. In den Audio-Einstellungen erscheint unten **„Routing-Server (Entwickler)“** → Tunnel-Adresse eintragen.
3. Tour planen. Unter der Tour steht dann „Route: eigener Server“.
   Leeres Feld = wieder der FOSSGIS-Dienst.

---

## B) Später: eigener Server (für den App-Store-Start)

**Empfehlung:** Hetzner Cloud, z. B. CX32 (4 vCPU, 8 GB RAM) – ca. 7–10 € im Monat. Für ganz Deutschland eher 16 GB RAM.

1. Server mit Ubuntu anlegen, Docker installieren: `curl -fsSL https://get.docker.com | sh`
2. Eine (Sub-)Domain, z. B. `routing.deinedomain.de`, per DNS-A-Eintrag auf die Server-IP zeigen lassen.
3. Ordner `server/` nach `/opt/stadtfuehrer-routing` kopieren, im `Caddyfile` die Domain eintragen.
4. Starten mit HTTPS-Vorschaltung:
   ```bash
   docker compose --profile vps up -d
   ```
5. Wöchentliches Daten-Update per Cron (siehe `update-osm.sh`).
6. In der App die Adresse fest eintragen: `content/config.js` → `routing: { provider: 'valhalla', url: 'https://routing.deinedomain.de' }`.

**Kostenlose Alternative für den Dauerbetrieb:** Oracle Cloud „Always Free“ bietet einen ARM-Server mit bis zu 24 GB RAM gratis.
Die Anmeldung ist etwas zäher und es braucht eine Kreditkarte zur Verifizierung, die Schritte oben funktionieren dort genauso.

---

## Mehr Städte außerhalb Bayerns
In `docker-compose.yml` bei `tile_urls` eine größere Region eintragen, z. B.
`https://download.geofabrik.de/europe/germany-latest.osm.pbf` (ganz Deutschland, ~4 GB, mehr RAM nötig),
dann `./update-osm.sh` ausführen.
