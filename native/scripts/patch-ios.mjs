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

// 2) AppDelegate: Audio soll auch bei gesperrtem Bildschirm weiterlaufen und andere Apps (Musik) leiser stellen
const adPath = path.join(app, 'AppDelegate.swift');
let ad = fs.readFileSync(adPath, 'utf8');
if (!ad.includes('AVAudioSession')) {
  ad = ad.replace('import UIKit', 'import UIKit\nimport AVFoundation');
  ad = ad.replace(/(didFinishLaunchingWithOptions[^{]*\{)/, `$1
        // Stadtführer: gesprochene Inhalte auch im Hintergrund, Musik wird währenddessen leiser
        try? AVAudioSession.sharedInstance().setCategory(.playback, mode: .spokenAudio, options: [.duckOthers])
        try? AVAudioSession.sharedInstance().setActive(true)`);
  fs.writeFileSync(adPath, ad);
}
console.log('iOS-Projekt angepasst (Info.plist, AppDelegate).');
