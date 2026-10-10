// Cacht die App selbst (Netz zuerst, damit Updates sofort ankommen) und bereits gehörte KI-Audios.
// Karte, Routing und Wikipedia kommen immer live aus dem Netz.
const CACHE = 'stadtfuehrer-v7';
const AUDIO_CACHE = 'stadtfuehrer-audio-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png',
  './content/config.js', './content/cities.js', './content/phrases.js', './content/augsburg.js', './content/muenchen.js',
  './vendor/maplibre/maplibre-gl.js', './vendor/maplibre/maplibre-gl.css', './vendor/fonts/fonts.css'];
self.addEventListener('install', e => {
  // einzelne fehlende Dateien sollen die Installation nicht verhindern
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {})))));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== AUDIO_CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  // KI-Audios haben Hash-Namen und ändern sich nie: aus dem Cache, sonst laden und merken.
  // Range-Anfragen (Safari beim Abspielen) gehen direkt ans Netz.
  if (url.pathname.endsWith('.mp3')) {
    if (req.headers.has('range')) return;
    e.respondWith(caches.open(AUDIO_CACHE).then(c => c.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok && r.status === 200) { const copy = r.clone(); e.waitUntil(c.put(req, copy)); } return r;
    }))));
    return;
  }
  // Alles andere (inkl. Audio-Manifest): Netz zuerst, offline aus dem Cache
  e.respondWith(fetch(req).then(r => {
    if (r.ok && r.status === 200) { const copy = r.clone(); e.waitUntil(caches.open(r.url.includes('/audio/') ? AUDIO_CACHE : CACHE).then(c => c.put(req, copy))); }
    return r;
  }).catch(() => caches.match(req, {ignoreSearch: true}).then(hit => hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
