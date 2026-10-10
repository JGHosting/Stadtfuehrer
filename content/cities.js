/* Verzeichnis aller Städte.
   Neue Stadt hinzufügen:
   1. Datei content/<id>.js nach dem Muster von augsburg.js anlegen  ->  CITY_DATA.<id> = {...}
   2. Hier einen Eintrag ergänzen.
   Die App lädt nur die Datei der gerade gewählten Stadt. Die KI-Audios entstehen automatisch beim Deploy. */
globalThis.CITIES = [
  { id:'augsburg', name:'Augsburg', tagline:'gegründet 15 v. Chr.', center:[48.3687,10.8986], radius:12000, file:'content/augsburg.js' },
  { id:'muenchen', name:'München',  tagline:'erstmals erwähnt 1158', center:[48.1374,11.5755], radius:18000, file:'content/muenchen.js' },
  { id:'wuerzburg', name:'Würzburg', tagline:'erstmals erwähnt 704',  center:[49.7930,9.9310], radius:9000,  file:'content/wuerzburg.js' },
  /* audio:false → Texte vorerst ohne Sprachausgabe (werden nicht eingesprochen, die App zeigt sie nur an) */
  { id:'london',    name:'London',    tagline:'gegründet als römisches Londinium', center:[51.5070,-0.1080], radius:20000, file:'content/london.js',    audio:false },
  { id:'paris',     name:'Paris',     tagline:'als Lutetia schon bei Caesar erwähnt', center:[48.8575,2.3300], radius:15000, file:'content/paris.js',     audio:false },
  { id:'barcelona', name:'Barcelona', tagline:'gegründet als römisches Barcino', center:[41.3851,2.1734], radius:12000, file:'content/barcelona.js', audio:false },
];
