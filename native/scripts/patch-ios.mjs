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

// 2e) Mindest-iOS-Version: Xcode legt neue Targets (Widget) mit der neuesten iOS-Version an. `cap sync` übernimmt die
//     dann ins Swift-Paket der Plugins (z. B. .v27) – das versteht das Paketformat nicht ("'v27' is unavailable").
//     App und Widget einheitlich auf iOS 17 (nötig für die Knöpfe der Live Activity), Plugin-Paket ebenso.
const pbxPath = path.resolve(app, '..', 'App.xcodeproj', 'project.pbxproj');
if (fs.existsSync(pbxPath)) {
  const pbx = fs.readFileSync(pbxPath, 'utf8');
  const fixed = pbx.replace(/IPHONEOS_DEPLOYMENT_TARGET = \d+(\.\d+)?;/g, 'IPHONEOS_DEPLOYMENT_TARGET = 17.0;');
  if (fixed !== pbx) { fs.writeFileSync(pbxPath, fixed); console.log('App und Widget: Mindestversion auf iOS 17 gesetzt.'); }
}
// 2f) AppIntents.framework fest ins App-Target eintragen. Ohne diese Verknüpfung überspringt Xcode das Auslesen der
//     Knopf-Aktionen („no metadata for StrolliToggleAudioIntent“) und die Knöpfe der Live Activity tun nichts.
if (fs.existsSync(pbxPath)) {
  let pbx = fs.readFileSync(pbxPath, 'utf8');
  if (!pbx.includes('AppIntents.framework')) {
    const BF = 'A7C1E0F12E5A000100STRL01'.replace(/[^0-9A-F]/g, 'F'), FR = 'A7C1E0F12E5A000100STRL02'.replace(/[^0-9A-F]/g, 'E');
    pbx = pbx
      .replace('/* Begin PBXBuildFile section */\n', `/* Begin PBXBuildFile section */\n\t\t${BF} /* AppIntents.framework in Frameworks */ = {isa = PBXBuildFile; fileRef = ${FR} /* AppIntents.framework */; };\n`)
      .replace('/* Begin PBXFileReference section */\n', `/* Begin PBXFileReference section */\n\t\t${FR} /* AppIntents.framework */ = {isa = PBXFileReference; lastKnownFileType = wrapper.framework; name = AppIntents.framework; path = System/Library/Frameworks/AppIntents.framework; sourceTree = SDKROOT; };\n`)
      .replace(/(504EC3011FED79650016851F \/\* Frameworks \*\/ = \{[\s\S]*?files = \(\n)/, `$1\t\t\t\t${BF} /* AppIntents.framework in Frameworks */,\n`)
      .replace(/(504EC2FB1FED79650016851F = \{[\s\S]*?children = \(\n)/, `$1\t\t\t\t${FR} /* AppIntents.framework */,\n`);
    if (pbx.split('AppIntents.framework').length - 1 >= 4) { fs.writeFileSync(pbxPath, pbx); console.log('AppIntents.framework ins App-Target eingetragen.'); }
    else console.warn('AppIntents.framework konnte nicht automatisch eingetragen werden – bitte in Xcode unter General → Frameworks hinzufügen.');
  }
}
const pkgPath = path.resolve(app, '..', 'CapApp-SPM', 'Package.swift');
if (fs.existsSync(pkgPath)) {
  const pkg = fs.readFileSync(pkgPath, 'utf8');
  const fixed = pkg.replace(/\.iOS\(\.v\d+\)/, '.iOS(.v17)');
  if (fixed !== pkg) { fs.writeFileSync(pkgPath, fixed); console.log('Plugin-Paket: Mindestversion auf iOS 17 gesetzt.'); }
}

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
