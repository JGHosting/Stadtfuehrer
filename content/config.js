/* Zentrale Einstellungen der App */
globalThis.APP_CONFIG = {
  /* Routing:
     - 'osrm'     → kostenloser Dienst der FOSSGIS e.V. (nur für Prototyp/Test gedacht)
     - 'valhalla' → eigener Server, siehe server/README.md
     Im Entwicklermodus kann in den Einstellungen eine Server-Adresse eingetragen werden, die das hier überschreibt. */
  routing: { provider: 'osrm', url: 'https://routing.openstreetmap.de' },
  // routing: { provider: 'valhalla', url: 'https://routing.deinedomain.de' },

  /* Öffentliche Adresse der Web-Version. Die native App lädt die KI-Audios von hier,
     damit sie nicht mit in die App gepackt werden müssen. */
  webBase: 'https://jghosting.github.io/Stadtfuehrer/',
};
