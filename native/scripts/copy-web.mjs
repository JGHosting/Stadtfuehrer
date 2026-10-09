// Kopiert die Web-App (aus dem Repo-Hauptordner) nach native/www, damit Capacitor sie in die iOS-App packt.
// Die KI-Audios werden NICHT mitkopiert – die App lädt sie von GitHub Pages (siehe content/config.js → webBase).
import fs from 'node:fs'; import path from 'node:path'; import url from 'node:url';
const here = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.resolve(here, '..', '..');
const out = path.resolve(here, '..', 'www');
const items = ['index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png', 'content', 'vendor', 'legal'];
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const it of items) {
  const src = path.join(root, it);
  if (!fs.existsSync(src)) { console.warn('fehlt:', it); continue; }
  fs.cpSync(src, path.join(out, it), { recursive: true });
}
console.log('Web-App nach native/www kopiert.');
