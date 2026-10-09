#!/usr/bin/env bash
# Aktualisiert die OpenStreetMap-Daten und baut die Routing-Daten neu.
# Auf dem VPS z. B. jeden Montag um 3 Uhr:  0 3 * * 1  /opt/stadtfuehrer-routing/update-osm.sh >> /var/log/osm-update.log 2>&1
set -euo pipefail
cd "$(dirname "$0")"
echo "$(date) – OSM-Update startet"
docker compose stop valhalla
rm -rf valhalla_data/valhalla_tiles valhalla_data/valhalla_tiles.tar valhalla_data/*.osm.pbf
docker compose up -d valhalla
echo "$(date) – Neuaufbau läuft im Hintergrund (docker compose logs -f valhalla)"
