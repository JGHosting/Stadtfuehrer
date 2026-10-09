// Gibt alle Vorlese-Texte aller Städte als JSON aus: { "augsburg": { "story:rathaus": "…", … }, … }
import fs from 'node:fs'; import vm from 'node:vm';
const ctx = vm.createContext({});
const run = f => vm.runInContext(fs.readFileSync(f,'utf8'), ctx, {filename:f});
run('content/cities.js'); run('content/phrases.js');
const out = {};
for (const c of vm.runInContext('CITIES', ctx)) {
  run(c.file);
  out[c.id] = vm.runInContext(`PHRASES.items(CITY_DATA[${JSON.stringify(c.id)}])`, ctx);
}
fs.writeFileSync('city-names.json', JSON.stringify(Object.fromEntries(vm.runInContext('CITIES', ctx).map(c=>[c.id,c.name]))));
process.stdout.write(JSON.stringify(out, null, 1));
