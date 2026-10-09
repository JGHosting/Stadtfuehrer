// Gibt alle Vorlese-Texte als JSON aus: { "story:rathaus": "…", … }
import fs from 'node:fs'; import vm from 'node:vm';
const ctx = vm.createContext({});
for (const f of ['content/augsburg.js','content/phrases.js']) vm.runInContext(fs.readFileSync(f,'utf8'), ctx, {filename:f});
const items = vm.runInContext('PHRASES.items(CITY)', ctx);
process.stdout.write(JSON.stringify(items, null, 1));
