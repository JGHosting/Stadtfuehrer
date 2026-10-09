/* Verzeichnis aller Städte.
   Neue Stadt hinzufügen:
   1. Datei content/<id>.js nach dem Muster von augsburg.js anlegen  ->  CITY_DATA.<id> = {...}
   2. Hier einen Eintrag ergänzen.
   Die App lädt nur die Datei der gerade gewählten Stadt. Die KI-Audios entstehen automatisch beim Deploy. */
globalThis.CITIES = [
  { id:'augsburg', name:'Augsburg', tagline:'gegründet 15 v. Chr.', center:[48.3687,10.8986], radius:12000, file:'content/augsburg.js' },
  { id:'muenchen', name:'München',  tagline:'erstmals erwähnt 1158', center:[48.1374,11.5755], radius:18000, file:'content/muenchen.js' },
];
