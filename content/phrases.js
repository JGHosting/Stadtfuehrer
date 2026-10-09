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
  /* Text so umschreiben, wie er auf Deutsch gesprochen wird:
     Jahreszahlen „sechzehnhundertzwanzig“ statt „tausendsechshundertzwanzig“, Ordnungszahlen,
     Abkürzungen. Angezeigt wird weiterhin der Originaltext. */
  spoken(t){
    const ONES=['null','eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf','zwölf','dreizehn','vierzehn','fünfzehn','sechzehn','siebzehn','achtzehn','neunzehn'];
    const TENS=['','','zwanzig','dreißig','vierzig','fünfzig','sechzig','siebzig','achtzig','neunzig'];
    const u100=n=> n<20? ONES[n] : (n%10? (n%10===1?'ein':ONES[n%10])+'und' : '')+TENS[Math.floor(n/10)];
    const u1000=n=>{ const h=Math.floor(n/100), r=n%100; return (h? (h===1?'ein':ONES[h])+'hundert' : '')+(r? u100(r) : (h?'':'null')); };
    const card=n=>{ if(n<1000) return u1000(n); const th=Math.floor(n/1000), r=n%1000;
      return (th===1?'ein':u1000(th))+'tausend'+(r? u1000(r) : ''); };
    const num=n=> (n>=1100 && n<2000) ? u100(Math.floor(n/100))+'hundert'+(n%100? u100(n%100) : '') : card(n);   // Jahreszahl-Stil
    const ord=n=>{ const w=num(n), r=n%100;
      if(r>=1 && r<20){ if(w.endsWith('eins')) return w.slice(0,-4)+'ersten'; if(w.endsWith('drei')) return w.slice(0,-4)+'dritten';
        if(w.endsWith('sieben')) return w.slice(0,-6)+'siebten'; if(w.endsWith('acht')) return w+'en'; return w+'ten'; }
      return w+'sten'; };
    const ORD_NEXT='Januar|Februar|März|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember|Jahrhundert\\w*|Geburtstag|Ausfahrt|Mal|Stock';
    return t
      .replace(/\bSt\.\s/g,'Sankt ')
      .replace(/\s&\s/g,' und ')
      .replace(/\bH2\b/g,'H zwei')
      .replace(/\bz\.\s?B\./g,'zum Beispiel')
      .replace(new RegExp('(\\d+)\\.(?=\\s+(?:'+ORD_NEXT+')\\b)','g'),(m,d)=>ord(+d))
      .replace(/(\d{4})er\b/g,(m,d)=>num(+d)+'er')
      .replace(/\d+/g,d=>num(+d))
      .replace(/([a-zäöüß])-(jährig)/g,'$1$2');
  },
  /* Liste aller Schlüssel + Texte für eine Stadt (bereits in Sprechform) */
  items(c){
    const P=this, raw=this._raw(c), out={};
    for(const [k,t] of Object.entries(raw)) out[k]=P.spoken(t);
    return out;
  },
  _raw(c){
    const P=this, out={};
    out.intro=P.intro(c); out.home=P.home(); out.end=P.end(c); out.test=P.test(c);
    for(const s of c.stops){ out['story:'+s.id]=P.story(s); out['way:'+s.id]=P.way(s); out['first:'+s.id]=P.first(s); out['next:'+s.id]=P.next(s); }
    for(const w of c.wayside) out['way:'+w.id]=P.way(w);
    for(const z of c.zones) out['zone:'+z.id]=z.text;
    for(const [k,t] of Object.entries(P.turns)) out['turn:'+k]=t;
    return out;
  }
};
