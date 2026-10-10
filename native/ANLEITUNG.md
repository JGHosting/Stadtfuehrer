# iOS-App bauen und auf dein iPhone bringen (kostenlos)

Die Web-App wird mit **Capacitor** in eine echte iOS-App verpackt. Vorteile gegenüber der Home-Bildschirm-Version:
- Führung und Erzählungen laufen **auch bei gesperrtem Bildschirm** weiter (Standort und Audio im Hintergrund)
- Die Karte reicht bis unter die Dynamic Island
- Grundlage für den späteren App-Store-Eintrag

Zum Testen reicht deine **kostenlose Apple-ID** – kein Developer-Programm nötig.

> App-Name **Strolli**, Bundle-ID **`com.greimel.strolli`** (in `capacitor.config.json`). Die Bundle-ID lässt sich nach
> dem Anlegen im App Store Connect nicht mehr ändern – bis dahin schon. Vorher Markenlage prüfen (DPMA/EUIPO).

---

## Einmalig: Voraussetzungen
1. **Xcode** (hast du) – einmal öffnen und zusätzliche Komponenten installieren lassen.
2. **Node.js 22 oder neuer**: <https://nodejs.org> → LTS-Version installieren. Prüfen im Terminal: `node -v`
3. **CocoaPods** wird von Capacitor 8 nicht mehr benötigt (Swift Package Manager).
4. Repo auf den Mac holen:
   ```bash
   git clone https://github.com/JGHosting/Stadtfuehrer.git
   cd Stadtfuehrer/native
   ```

## Einmalig: iOS-Projekt erzeugen
```bash
npm install
npm run setup-ios
npm run open
```
`setup-ios` kopiert die Web-App, legt das Xcode-Projekt an und trägt automatisch ein:
Standort-Berechtigungstexte, Hintergrund-Standort, Hintergrund-Audio und die Audio-Einstellung
(gesprochene Inhalte, Musik wird währenddessen leiser).

## In Xcode signieren (kostenlos)
1. Xcode öffnet sich mit dem Projekt **App**. Links oben auf **App** (blaues Symbol) klicken → Reiter **Signing & Capabilities**.
2. Bei **Team**: „Add an Account…“ → mit deiner Apple-ID anmelden → dein Name **(Personal Team)** auswählen.
3. Falls Xcode meckert, dass die Bundle-ID vergeben ist: bei **Bundle Identifier** etwas Eindeutiges eintragen,
   z. B. `com.greimel.strolli.test`.
4. Unter **Background Modes** sollten *Location updates* und *Audio* angehakt sein (macht das Skript, nur kontrollieren).

## Auf dem iPhone starten
1. iPhone per Kabel anschließen, entsperren, „Diesem Computer vertrauen“.
2. Auf dem iPhone: **Einstellungen → Datenschutz & Sicherheit → Entwicklermodus** einschalten (Neustart nötig).
3. In Xcode oben dein iPhone als Ziel wählen → **▶ (Run)**.
4. Beim ersten Mal: Auf dem iPhone **Einstellungen → Allgemein → VPN & Geräteverwaltung** → deinem Entwicklerprofil vertrauen.
5. Die App startet. Bei der Standortfrage für den Test **„Beim Verwenden der App“** und später **„Immer“** erlauben,
   damit die Führung im Hintergrund weiterläuft.

**Hinweis kostenloser Account:** Die App läuft 7 Tage, danach einfach in Xcode erneut auf ▶ drücken.

## Nach Änderungen an der App
Wenn ich am Code etwas ändere (oder du die neuen Inhalte willst):
```bash
cd Stadtfuehrer && git pull
cd native && npm run sync
```
Dann in Xcode erneut ▶. Die KI-Audios lädt die App immer aktuell von GitHub Pages, dafür ist kein Neubau nötig.

## Was du beim Testen besonders prüfen solltest
- Läuft das Vorlesen weiter, wenn du das iPhone sperrst? (Wenn nicht: Bescheid geben, dann stelle ich auf einen nativen Audio-Player um.)
- Kommt die Ankunft an einer Station, während das iPhone in der Tasche ist?
- Akkuverbrauch über eine ganze Tour.
- Der Simulationsmodus funktioniert auch in der App (7× auf „Deine Stadtführung“ tippen).

## Später für den App Store
- Apple Developer Program (99 $/Jahr), endgültiger Name + Bundle-ID
- App-Icon: `native/resources/icon.png` (1024×1024) → `npx @capacitor/assets generate --ios`
- Datenschutzangaben im App Store Connect („Standort: nicht mit Identität verknüpft, nicht zum Tracking“)
- Routing auf eigenen Server umstellen (siehe `server/README.md`), Stimmen auf offizielle, bezahlte Dienste
