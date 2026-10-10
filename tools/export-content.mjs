// Schreibt die Stadtinhalte zusätzlich als JSON (content/cities.json, content/<id>.json).
// Die iPhone-App lädt diese Dateien von GitHub Pages: neue Städte und Textänderungen kommen so ohne App-Update an.
// Reine Daten, kein Code – deshalb JSON und nicht die .js-Dateien.
import fs from 'node:fs'; import vm from 'node:vm';
const FORMAT = 1;   // erhöhen, wenn sich der Aufbau so ändert, dass alte App-Versionen ihn nicht mehr verstehen
const ctx = vm.createContext({});
const run = f => vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
run('content/cities.js');
const cities = JSON.parse(JSON.stringify(vm.runInContext('CITIES', ctx)));
for (const c of cities) {
  run(c.file);
  const data = JSON.parse(JSON.stringify(vm.runInContext(`CITY_DATA[${JSON.stringify(c.id)}]`, ctx)));
  fs.writeFileSync(`content/${c.id}.json`, JSON.stringify({ format: FORMAT, data }));
}
fs.writeFileSync('content/cities.json', JSON.stringify({ format: FORMAT, cities, built: new Date().toISOString() }));
console.log('JSON für', cities.map(c => c.id).join(', '));
