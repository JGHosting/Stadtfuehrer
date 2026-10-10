// Ergänzt das iOS-Projekt nach "npx cap add ios" um alles, was die Stadtführung braucht:
// Standort-Berechtigungstexte, Hintergrund-Standort und -Audio, Audio-Sitzung für gesprochene Inhalte.
import fs from 'node:fs'; import path from 'node:path'; import url from 'node:url';
const here = path.dirname(url.fileURLToPath(import.meta.url));
const app = path.resolve(here, '..', 'ios', 'App', 'App');

// 1) Info.plist
const plistPath = path.join(app, 'Info.plist');
let plist = fs.readFileSync(plistPath, 'utf8');
const add = (key, xml) => { if (!plist.includes(`<key>${key}</key>`)) plist = plist.replace(/<\/dict>\s*<\/plist>\s*$/, `\t<key>${key}</key>\n\t${xml}\n</dict>\n</plist>\n`); };
add('NSLocationWhenInUseUsageDescription', '<string>Damit die Stadtführung dich zu den Stationen führen und an der richtigen Stelle Geschichten erzählen kann.</string>');
add('NSLocationAlwaysAndWhenInUseUsageDescription', '<string>Damit die Führung auch bei ausgeschaltetem Bildschirm weiterläuft und dir unterwegs Geschichten erzählt.</string>');
add('UIBackgroundModes', '<array>\n\t\t<string>location</string>\n\t\t<string>audio</string>\n\t</array>');
add('ITSAppUsesNonExemptEncryption', '<false/>');
fs.writeFileSync(plistPath, plist);

// 2) AppDelegate: Audio-Kategorie „gesprochene Inhalte, mischbar“ – Musik anderer Apps läuft weiter
//    (aktiviert wird die Sitzung erst beim Abspielen, siehe ios-src/StrolliNative.swift)
const adPath = path.join(app, 'AppDelegate.swift');
let ad = fs.readFileSync(adPath, 'utf8');
ad = ad.replace(/\n\s*\/\/ Stadtführer: gesprochene Inhalte[^\n]*\n[^\n]*setCategory[^\n]*\n[^\n]*setActive\(true\)/, '');   // alte Fassung entfernen
if (!ad.includes('import AVFoundation')) ad = ad.replace('import UIKit', 'import UIKit\nimport AVFoundation');
if (!ad.includes('interruptSpokenAudioAndMixWithOthers')) {
  ad = ad.replace(/(didFinishLaunchingWithOptions[^{]*\{)/, `$1
        // Strolli: gesprochene Inhalte auch im Hintergrund; Musik anderer Apps läuft weiter und wird nur während Ansagen leiser
        try? AVAudioSession.sharedInstance().setCategory(.playback, mode: .spokenAudio, options: [.duckOthers, .interruptSpokenAudioAndMixWithOthers])`);
}
fs.writeFileSync(adPath, ad);

// 2b) Natives Audio-Plugin + Live Activity: Code aus ios-src/StrolliNative.swift an SceneDelegate.swift anhängen
//     (diese Datei ist schon Teil des App-Targets, so muss das Xcode-Projekt nicht umgebaut werden)
const sdPath = path.join(app, 'SceneDelegate.swift');
if (fs.existsSync(sdPath)) {
  let sd = fs.readFileSync(sdPath, 'utf8');
  const native = fs.readFileSync(path.resolve(here, '..', 'ios-src', 'StrolliNative.swift'), 'utf8');
  const B = '// >>> STROLLI (automatisch eingefügt aus native/ios-src/StrolliNative.swift – dort ändern)', E = '// <<< STROLLI';
  sd = sd.replace(new RegExp('\\n?' + B.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[\\s\\S]*?' + E + '\\n?'), '\n');
  for (const imp of ['AVFoundation', 'ActivityKit', 'AppIntents'])
    if (!sd.includes('import ' + imp)) sd = sd.replace('import Capacitor', 'import Capacitor\nimport ' + imp);
  sd = sd.replace('rootViewController = CAPBridgeViewController()', 'rootViewController = StrolliBridgeViewController()');
  sd = sd.trimEnd() + '\n\n' + B + '\n' + native.trim() + '\n' + E + '\n';
  fs.writeFileSync(sdPath, sd);
} else console.warn('SceneDelegate.swift nicht gefunden – natives Audio fehlt.');

// 2c) Live Activities erlauben
add('NSSupportsLiveActivities', '<true/>');
fs.writeFileSync(plistPath, plist);

// 2d) Widget-Erweiterung (Live Activity): wenn das Target „StrolliWidget“ in Xcode angelegt wurde, unsere Dateien hineinkopieren
const widgetDir = path.resolve(app, '..', 'StrolliWidget');
if (fs.existsSync(widgetDir)) {
  for (const f of fs.readdirSync(path.resolve(here, '..', 'ios-src', 'widget')))
    fs.copyFileSync(path.resolve(here, '..', 'ios-src', 'widget', f), path.join(widgetDir, f));
  console.log('Live Activity: Dateien nach ios/App/StrolliWidget kopiert.');
} else console.log('Hinweis: Widget-Target „StrolliWidget“ fehlt noch – Live Activity siehe ANLEITUNG.md, Abschnitt 11.');

// 3) App-Icon und Startbildschirm (Strolli statt Capacitor-Platzhalter)
const res = path.resolve(here, '..', 'resources');
const xc = path.join(app, 'Assets.xcassets');
const setImage = (dir, file, src, json) => {
  if (!fs.existsSync(src)) return;
  fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(src, path.join(dir, file)); fs.writeFileSync(path.join(dir, 'Contents.json'), JSON.stringify(json, null, 2));
};
setImage(path.join(xc, 'AppIcon.appiconset'), 'AppIcon.png', path.join(res, 'icon.png'),
  { images: [{ filename: 'AppIcon.png', idiom: 'universal', platform: 'ios', size: '1024x1024' }], info: { author: 'xcode', version: 1 } });
setImage(path.join(xc, 'Splash.imageset'), 'splash.png', path.join(res, 'splash.png'),
  { images: [{ filename: 'splash.png', idiom: 'universal' }], info: { author: 'xcode', version: 1 } });
console.log('iOS-Projekt angepasst (Info.plist, AppDelegate, Icon, Startbildschirm).');
