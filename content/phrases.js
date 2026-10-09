/* Alle Sätze, die vorgelesen werden – mit festem Schlüssel.
   Die App und der Audio-Generator (tools/texts.mjs) nutzen dieselbe Liste,
   damit zu jedem Schlüssel genau eine fertige KI-Audiodatei existiert. */
globalThis.PHRASES = {
  story: s => `${s.name}. ${s.story.join(' ')} Und noch ein Funfact zum Schluss: ${s.fact}`,
  way: p => p.text ? p.text : `${p.name}. ${p.teaser} ${p.fact}`,
  intro: c => `${c.intro} Ich habe dir eine Tour zusammengestellt. Los geht’s!`,
  first: s => `Unser erster Stopp: ${s.name}.`,
  next: s => `Weiter geht’s zu: ${s.name}.`,
  home: () => 'Das war die letzte Station. Jetzt geht es zurück zum Startpunkt.',
  end: c => `Das war deine Tour durch ${c.name}. Danke fürs Mitkommen und servus!`,
  test: c => `Servus! So klinge ich, wenn ich dir unterwegs Geschichten über ${c.name} erzähle.`,
  turns: {
    'left':'Gleich links abbiegen.', 'right':'Gleich rechts abbiegen.',
    'slight left':'Gleich leicht links halten.', 'slight right':'Gleich leicht rechts halten.',
    'sharp left':'Gleich scharf links abbiegen.', 'sharp right':'Gleich scharf rechts abbiegen.',
    'uturn':'Bitte umdrehen.', 'roundabout':'Gleich in den Kreisverkehr.'
  },
  /* Liste aller Schlüssel + Texte für eine Stadt */
  items(c){
    const P=this, out={};
    out.intro=P.intro(c); out.home=P.home(); out.end=P.end(c); out.test=P.test(c);
    for(const s of c.stops){ out['story:'+s.id]=P.story(s); out['way:'+s.id]=P.way(s); out['first:'+s.id]=P.first(s); out['next:'+s.id]=P.next(s); }
    for(const w of c.wayside) out['way:'+w.id]=P.way(w);
    for(const z of c.zones) out['zone:'+z.id]=z.text;
    for(const [k,t] of Object.entries(P.turns)) out['turn:'+k]=t;
    return out;
  }
};
