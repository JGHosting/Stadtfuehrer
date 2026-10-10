# Strolli als iPhone-App bauen – Schritt für Schritt

Mit dieser Anleitung kommt Strolli als echte App auf dein iPhone, mit Icon auf dem Home-Bildschirm. Im Unterschied zur
Web-App läuft die Führung auch bei gesperrtem Bildschirm weiter.
Dafür reicht deine **normale, kostenlose Apple-ID**, das Developer-Programm (99 €/Jahr) brauchst du erst für TestFlight
und den App Store.

**Dauer:** beim ersten Mal ca. 45–60 Minuten (davon viel Warten auf Downloads), danach pro Update 2 Minuten.

**Überblick**
1. Mac vorbereiten (Xcode, Node.js) – einmalig
2. Projekt herunterladen und das iOS-Projekt erzeugen – einmalig
3. Im Simulator testen (ohne iPhone, ohne Anmeldung)
4. Mit deiner Apple-ID signieren
5. Auf dem iPhone installieren
6. Updates einspielen
7. Was testen? / 8. Wenn etwas nicht klappt

> In Codeblöcken wie `so einem` stehen Befehle fürs **Terminal**. Du kopierst sie, fügst sie im Terminal ein
> (⌘V) und drückst **Enter**. Zeilen, die mit `#` anfangen, sind nur Erklärungen.

---

## 1. Mac vorbereiten (einmalig)

### 1.1 Xcode
1. Xcode aus dem **App Store** installieren bzw. aktualisieren (Version **26** oder neuer, ca. 10 GB).
2. Xcode einmal öffnen. Beim ersten Start fragt es nach Plattformen: **iOS** anhaken → *Download & Install*.
   Falls diese Frage nicht kommt: **Xcode → Settings… → Components** → bei *iOS* auf **Get** klicken.
3. Lizenz bestätigen, falls gefragt. Xcode danach wieder schließen.

### 1.2 Terminal öffnen
**⌘ + Leertaste** → `Terminal` tippen → Enter. Ein Fenster mit einer Eingabezeile öffnet sich.

### 1.3 Kommandozeilen-Werkzeuge (bringen auch `git` mit)
```bash
xcode-select --install
```
- Kommt ein Fenster → **Installieren** klicken und warten.
- Kommt die Meldung *„command line tools are already installed“* → passt, weiter.

Danach prüfen:
```bash
git --version
```
Es soll so etwas wie `git version 2.x` erscheinen.

### 1.4 Node.js
1. <https://nodejs.org> öffnen → die **LTS**-Version (mindestens 22) für macOS herunterladen (`.pkg`).
2. Installer durchklicken.
3. Terminal **schließen und neu öffnen**, dann prüfen:
```bash
node -v
npm -v
```
Bei `node -v` muss `v22…` oder höher stehen.

---

## 2. Projekt herunterladen und iOS-Projekt erzeugen (einmalig)

### 2.1 Projekt holen
```bash
# Ordner für Programmier-Projekte anlegen und hineinwechseln
mkdir -p ~/Developer && cd ~/Developer
# Strolli herunterladen
git clone https://github.com/JGHosting/Stadtfuehrer.git
# in den Ordner für die iPhone-App wechseln
cd Stadtfuehrer/native
```

### 2.2 Abhängigkeiten installieren
```bash
npm install
```
Dauert 1–2 Minuten. Warnungen (*WARN*, *deprecated*) sind normal. Nur bei *ERR!* abbrechen und mir die Meldung schicken.

### 2.3 iOS-Projekt erzeugen
```bash
npm run setup-ios
```
Das Skript
- kopiert die Web-App in die App,
- legt das Xcode-Projekt im Ordner `native/ios` an,
- trägt automatisch ein: Standort-Texte, Hintergrund-Standort und -Audio, die Audio-Einstellung, das **Strolli-Icon**
  und den Startbildschirm.

Am Ende soll `iOS-Projekt angepasst (Info.plist, AppDelegate, Icon, Startbildschirm).` und `Sync finished` erscheinen.

### 2.4 Xcode öffnen
```bash
npm run open
```
Xcode startet mit dem Projekt **App**. Beim ersten Öffnen lädt Xcode im Hintergrund die Pakete (links unten
*„Resolving Package Graph“* / *„Fetching…“*). **Warten, bis das fertig ist** (1–3 Minuten).

---

## 3. Im Simulator testen (optional, aber empfohlen)
So siehst du, ob alles baut, ohne dass Anmeldung und iPhone mitspielen müssen.

1. Oben in der Mitte der Xcode-Leiste steht das **Ziel** (z. B. *App > iPhone 17*). Draufklicken → ein iPhone-Simulator wählen.
2. Oben links auf **▶** (oder **⌘R**). Der erste Build dauert ein paar Minuten.
3. Der Simulator öffnet sich mit Strolli. Standort im Simulator: Menü **Features → Location → Custom Location…** →
   z. B. Augsburg `48.3687` / `10.8986` oder München `48.1374` / `11.5755`.
4. Zum Durchspielen einer Tour: **7× auf „Deine Stadtführung“** tippen → Entwicklermodus → *Simulation* an.

Klappt das, weiter mit Schritt 4.

---

## 4. Mit deiner Apple-ID signieren (einmalig)
1. In Xcode links in der Dateileiste ganz oben auf **App** (blaues Symbol) klicken.
2. In der Mitte unter **TARGETS** ebenfalls **App** wählen → oben den Reiter **Signing & Capabilities**.
3. **Automatically manage signing** muss angehakt sein.
4. Bei **Team** → *Add an Account…* → mit deiner Apple-ID anmelden → danach im Team-Feld
   **„Jakob Greimel (Personal Team)“** auswählen.
5. **Bundle Identifier** steht auf `com.greimel.strolli`. Zeigt Xcode darunter einen roten Fehler wie
   *„Failed to register bundle identifier“* oder *„is not available“*: auf `com.greimel.strolli.test` ändern.
   (Für den Test egal, im App Store bleibt es bei `com.greimel.strolli`.)
6. Weiter unten bei **Background Modes** kontrollieren: *Location updates* und *Audio, AirPlay, and Picture in Picture*
   sind angehakt (macht das Skript, nur prüfen).

Wenn keine roten Meldungen mehr da sind, ist die Signierung fertig.

---

## 5. Auf dem iPhone installieren

### 5.1 iPhone verbinden
1. iPhone per **Kabel** an den Mac, iPhone entsperren.
2. Frage *„Diesem Computer vertrauen?“* → **Vertrauen** → Code eingeben.
3. In Xcode oben beim Ziel dein iPhone auswählen (steht unter *iOS Device*, z. B. *Jakobs iPhone*).
   Beim ersten Mal bereitet Xcode das iPhone vor (*„Preparing…“*, kann ein paar Minuten dauern).

### 5.2 Entwicklermodus auf dem iPhone einschalten
Den Schalter gibt es erst, **nachdem** das iPhone einmal mit Xcode verbunden war:
1. iPhone: **Einstellungen → Datenschutz & Sicherheit** → ganz unten **Entwicklermodus** → einschalten.
2. iPhone startet neu. Danach die Nachfrage mit **Einschalten** bestätigen und Code eingeben.

### 5.3 App starten
1. In Xcode **▶** drücken.
2. Falls der Mac nach dem **Schlüsselbund-Passwort** fragt: dein Mac-Passwort eingeben → **Immer erlauben**.
3. Beim allerersten Mal startet die App nicht, sondern Xcode meldet *„Untrusted Developer“*. Dann auf dem iPhone:
   **Einstellungen → Allgemein → VPN & Geräteverwaltung** → unter *Entwickler-App* deine Apple-ID antippen →
   **„… vertrauen“** → bestätigen.
4. In Xcode noch einmal **▶**. Strolli startet auf dem iPhone und liegt ab jetzt auch auf dem Home-Bildschirm.

### 5.4 Erster Start in der App
1. Begrüßung (*„Hallo, ich bin Strolli!“*) bestätigen.
2. Standortfrage → **„Beim Verwenden der App erlauben“**.
3. Beim Start der ersten Tour fragt iOS nach dem Hintergrund-Standort. Damit die Führung bei gesperrtem Bildschirm
   weiterläuft: **„Immer erlauben“** (bzw. später unter Einstellungen → Strolli → Standort → *Immer*).

> **Kostenloser Account:** Die App läuft **7 Tage**. Danach startet sie nicht mehr. Dann iPhone anschließen,
> Xcode öffnen, **▶** – fertig, alle Einstellungen bleiben erhalten.

---

## 6. Updates einspielen
**Neue Städte, geänderte Texte und neue Audios** kommen automatisch, dafür musst du nichts tun.
Die App lädt sie beim Start von GitHub Pages.

**Wenn ich Funktionen oder Design ändere**, so aktualisierst du die App:
```bash
cd ~/Developer/Stadtfuehrer
git pull
cd native
npm install
npm run sync
```
Dann in Xcode **▶** (Xcode kann dabei offen bleiben).

---

## 7. Was du beim Testen besonders prüfen solltest
- Läuft das Vorlesen weiter, wenn du das iPhone **sperrst**? (Wenn nicht: Bescheid geben, dann stelle ich auf
  einen nativen Audio-Player um.)
- Kommt die Ankunft an einer Station, während das iPhone in der **Tasche** ist?
- Läuft **Musik** (z. B. Spotify) neben Strolli weiter, und wird sie nur während der Geschichten leiser – oder die ganze Zeit?
- **Akkuverbrauch** über eine ganze Tour.
- Der **Simulationsmodus** funktioniert auch in der App (7× auf „Deine Stadtführung“ tippen).

---

## 8. Wenn etwas nicht klappt

| Meldung / Problem | Lösung |
|---|---|
| `command not found: node` oder `npm` | Node.js (Schritt 1.4) installieren, **Terminal neu öffnen**. |
| `command not found: git` | `xcode-select --install` (Schritt 1.3). |
| `npm install` endet mit *ERR!* | Komplette Meldung kopieren und mir schicken. |
| `npm run setup-ios`: *„ios platform already exists“* | Projekt existiert schon. Stattdessen `npm run sync`. Komplett neu: `rm -rf ios` und dann `npm run setup-ios`. |
| Xcode: *„Missing package product …“* / Pakete laden nicht | **File → Packages → Reset Package Caches**, kurz warten, erneut ▶. |
| Xcode: *„iOS 26.x is not installed“* | **Xcode → Settings → Components** → iOS herunterladen. |
| *„Failed to register bundle identifier“* | Bundle Identifier auf `com.greimel.strolli.test` ändern (Schritt 4.5). |
| *„Untrusted Developer“* | Schritt 5.3 Punkt 3. |
| *„Developer Mode disabled“* | Schritt 5.2. |
| *„Could not launch … device is locked“* | iPhone entsperren, erneut ▶. |
| *„Your maximum App ID limit has been reached“* | Kostenloser Account: max. 10 neue IDs pro Woche. Eine bestehende ID weiterverwenden oder ein paar Tage warten. |
| App startet nach einer Woche nicht mehr | Normal beim kostenlosen Account → iPhone anschließen, ▶. |
| App zeigt weißen Bildschirm | In Xcode unten die **Konsole** (⌘⇧Y) öffnen, Text kopieren und mir schicken. |
| Alles andere | Screenshot von Xcode (rote Meldung anklicken, damit der Text ganz sichtbar ist) an mich. |

---

## 9. Optional: App-Icon im echten Liquid-Glass-Stil (iOS 26)
Das Skript setzt bereits ein fertig gerendertes Glas-Icon. Echtes Liquid Glass (Lichtbrechung, eigene Varianten für
Hell, Dunkel, Getönt und Klar) rechnet iOS selbst aus einem Icon mit Ebenen:
1. In Xcode: Menü **Xcode → Open Developer Tool → Icon Composer**.
2. **File → New**. Die drei Dateien aus `native/resources/icon-composer/` per Drag & Drop in die linke Ebenen-Liste ziehen,
   Reihenfolge von unten nach oben: `layer-1-hintergrund.svg` (als **Background**), darüber `layer-2-weg.svg`,
   ganz oben `layer-3-ziel.svg`.
3. Rechts bei jeder Ebene *Liquid Glass* eingeschaltet lassen. Oben die Vorschau zwischen *Default*, *Dark* und *Mono*
   umschalten und schauen, ob es überall gut aussieht.
4. **File → Save** als `AppIcon.icon`.
5. In Xcode die Datei `AppIcon.icon` links in den gelben Ordner **App** ziehen (*Copy items if needed* anhaken).
6. **TARGETS → App → General → App Icons and Launch Screen**: bei *App Icon* `AppIcon` eintragen. Dann ▶.

> `npm run sync` überschreibt nur das alte Bild-Icon, nicht die `AppIcon.icon`-Datei. Sie bleibt also erhalten.

---

## 10. Später für den App Store
- Apple Developer Program (99 €/Jahr) – erst nötig für TestFlight (Tester einladen) und die Veröffentlichung.
- Name **Strolli**, Bundle-ID **`com.greimel.strolli`**. Die Bundle-ID lässt sich nach dem Anlegen im App Store Connect
  nicht mehr ändern. Vorher Markenlage prüfen (DPMA/EUIPO).
- Datenschutzangaben im App Store Connect („Standort: nicht mit Identität verknüpft, nicht zum Tracking“).
- Routing auf eigenen Server umstellen (siehe `server/README.md`).
