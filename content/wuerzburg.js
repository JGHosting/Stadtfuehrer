/* Inhalte: Würzburg
   Koordinaten sind Näherungswerte und werden beim Start über die Wikipedia-API präzisiert.
   Änderst du Texte hier, erzeugt GitHub beim nächsten Deploy automatisch neue KI-Audios. */
(globalThis.CITY_DATA = globalThis.CITY_DATA || {}).wuerzburg = {
  id:'wuerzburg', name:'Würzburg', tagline:'erstmals erwähnt 704', center:[49.7930,9.9310],
  starts:[ {id:'marktplatz', name:'Marktplatz', ll:[49.7952,9.9295]}, {id:'hbf', name:'Hauptbahnhof', ll:[49.8019,9.9359]}, {id:'residenzplatz', name:'Residenzplatz', ll:[49.7929,9.9365]} ],
  /* Kategorien: „Must-See“ enthält die bekanntesten Sehenswürdigkeiten. Jede Liste ist nach Berühmtheit sortiert –
     die Tourplanung nimmt die vorderen Einträge zuerst. Ein Ort darf in mehreren Kategorien stehen. */
  categories:[
    {id:'mustsee',    label:'Must-See',              stops:['residenz','mainbruecke','festung','dom','marienkapelle','kaeppele']},
    {id:'geschichte', label:'Geschichte',            stops:['festung','residenz','mainbruecke','rathaus','roentgen','alterkranen']},
    {id:'kirchen',    label:'Kirchen',               stops:['dom','marienkapelle','kaeppele','neumuenster']},
    {id:'wein',       label:'Wein & Genuss',         stops:['buergerspital','juliusspital','mainbruecke','alterkranen']},
    {id:'kultur',     label:'Kunst & Barock',        stops:['residenz','falkenhaus','neumuenster','marienkapelle','roentgen']},
    {id:'natur',      label:'Gärten & Main',         stops:['hofgarten','kaeppele','festung','mainbruecke','alterkranen']},
  ],
  /* Begrüßung und Abschied im Dialekt der Stadt (Mainfränkisch) */
  dialect:{hello:'Servus', bye:'ade'},
  intro:'Servus und herzlich willkommen in Würzburg! Die Stadt am Main wurde im Jahr 704 zum ersten Mal erwähnt. Jahrhundertelang regierten hier Fürstbischöfe, die gleichzeitig Kirchenoberhaupt und Landesherr waren. Von ihnen stammen die Festung auf dem Berg, die prächtige Residenz und so manches Weingut. Wein spielt hier überhaupt eine große Rolle, das wirst du unterwegs noch merken.',
  stops:[
  { id:'residenz', name:'Residenz', wiki:'Würzburger Residenz', ll:[49.7930,9.9386], dwell:15,
    teaser:'Ein Schloss für Fürstbischöfe, mit dem größten Deckenfresko der Welt.',
    story:[
      'Vor dir steht die Würzburger Residenz, eines der bedeutendsten Barockschlösser Europas und seit 1981 Weltkulturerbe. Bauherr war Fürstbischof Johann Philipp Franz von Schönborn, Die Fürstbischöfe hatten die Festung auf dem Berg gerade verlassen, ihr neues Schlösschen in der Stadt erwies sich aber als baufällig. Also beschloss Schönborn 1720 einen prächtigen Neubau. Die Bauleitung übernahm ein junger Mann, der damals noch kaum bekannt war: Balthasar Neumann. Dieser Bau machte ihn zu einem der berühmtesten Baumeister seiner Zeit.',
      'Das Herzstück ist das Treppenhaus. Neumann überspannte es mit einem riesigen Gewölbe ganz ohne Stützen. Kollegen sollen gewettet haben, dass es einstürzen würde, und Neumann soll angeboten haben, unter dem Gewölbe eine Kanone abfeuern zu lassen. 1752 und 1753 malte der Venezianer Giovanni Battista Tiepolo mit seinen Söhnen das Deckenfresko: die vier damals bekannten Erdteile, die dem Fürstbischof huldigen. Mit rund 580 Quadratmetern gilt es als das größte zusammenhängende Deckenfresko der Welt.',
      'Wie gut Neumann gebaut hat, zeigte sich am 16. März 1945. Bei dem Luftangriff brannte die Residenz aus, der Dachstuhl stürzte ein, aber das Gewölbe über dem Treppenhaus hielt, und Tiepolos Fresko blieb erhalten.'],
    fact:'Napoleon soll die Residenz das schönste Pfarrhaus Europas genannt haben. Halb spöttisch, halb anerkennend, denn schließlich wohnte hier ein Bischof.',
    look:'Im Treppenhaus Tiepolos Selbstporträt: Er hat sich und Balthasar Neumann in das Fresko hineingemalt. Neumann sitzt in Offiziersuniform auf einem Kanonenrohr.' },

  { id:'mainbruecke', name:'Alte Mainbrücke', wiki:'Alte Mainbrücke', ll:[49.7928,9.9267], dwell:12,
    teaser:'Zwölf steinerne Figuren und ein Glas Wein mit Blick auf die Festung.',
    story:[
      'Die Alte Mainbrücke ist die älteste Brücke Würzburgs. Mit dem Bau begann man im späten 15. Jahrhundert, als Ersatz für eine noch ältere romanische Brücke. Fertig war sie erst nach Jahrzehnten, das zeigt, wie wichtig und wie schwierig so eine Brücke über den Main damals war.',
      'Um 1730 bekam sie ihren berühmten Schmuck: zwölf überlebensgroße Figuren aus Sandstein, die meisten davon Heilige. Darunter sind die drei Frankenapostel Kilian, Kolonat und Totnan, Karl der Große und der heilige Nepomuk, der Schutzpatron der Brücken. Wegen dieser Figuren wird sie gern mit der Karlsbrücke in Prag verglichen.',
      'Heute ist die Brücke das Wohnzimmer der Würzburger. An warmen Abenden holt man sich an einem der Weinausschänke ein Glas Frankenwein, den Brückenschoppen, und stellt sich damit an die Brüstung. Vor dir der Main, darüber die Festung Marienberg in der Abendsonne.'],
    fact:'In den letzten Kriegstagen 1945 sprengten deutsche Truppen Teile der Brücke, um die anrückenden Amerikaner aufzuhalten. Nach dem Krieg wurde sie wieder aufgebaut.',
    look:'Die Figur des heiligen Kilian mit Bischofsstab und Schwert, dem Zeichen seines Martyriums.' },

  { id:'festung', name:'Festung Marienberg', wiki:'Festung Marienberg', ll:[49.7899,9.9213], dwell:20,
    teaser:'Fast fünfhundert Jahre Sitz der Fürstbischöfe, hoch über dem Main.',
    story:[
      'Hoch über der Stadt thront die Festung Marienberg. Hier oben stand schon um das Jahr 706 eine erste Marienkirche, die heutige kleine Rundkirche im Burghof stammt in ihren ältesten Teilen aus dem frühen 11. Jahrhundert. Von 1253 bis 1719 wohnten die Würzburger Fürstbischöfe auf dem Berg, sicher über der manchmal aufmüpfigen Bürgerschaft.',
      'Wie nötig das war, zeigte sich 1525 im Bauernkrieg. Aufständische Bauern belagerten die Festung, scheiterten aber an den Mauern. Unter den Würzburger Ratsherren, die mit den Bauern sympathisierten, war ausgerechnet der berühmte Bildhauer Tilman Riemenschneider. Er wurde dafür eingekerkert, und danach hat er kaum noch große Aufträge bekommen.',
      'Weniger Glück hatte die Festung 1631 im Dreißigjährigen Krieg. Die Schweden unter König Gustav Adolf eroberten sie und nahmen die wertvolle Bibliothek der Fürstbischöfe als Kriegsbeute mit. Ein Teil davon steht bis heute in der Universitätsbibliothek von Uppsala.'],
    fact:'Im Fürstengarten der Festung, einem kleinen Barockgarten auf einer früheren Geschützplattform, hast du einen der schönsten Blicke über Würzburg und den Main.',
    look:'Den Blick hinunter auf die Alte Mainbrücke. Von hier oben erkennst du gut die Reihe der Heiligenfiguren.' },

  { id:'dom', name:'Dom St. Kilian', wiki:'Würzburger Dom', ll:[49.7929,9.9310], dwell:10,
    teaser:'Romanischer Dom für die irischen Frankenapostel.',
    story:[
      'Der Dom ist dem heiligen Kilian geweiht. Kilian war ein irischer Wandermönch, der mit seinen Gefährten Kolonat und Totnan im späten 7. Jahrhundert nach Würzburg kam, um die Franken zu missionieren. Der Überlieferung nach wurden die drei um das Jahr 689 ermordet. Bis heute verehrt man sie als Frankenapostel.',
      'Der heutige Bau ist im Kern romanisch, er stammt aus dem 11. und 12. Jahrhundert. Im Inneren mischen sich die Epochen: romanische Mauern, gotische Grabdenkmäler der Fürstbischöfe, barocker Stuck. Balthasar Neumann baute später die Schönbornkapelle an, die Grabkapelle der mächtigen Familie Schönborn.',
      'Am 16. März 1945 brannte auch der Dom aus. Ein Jahr später stürzte die Nordwand des Langhauses ein. Erst 1967 war der Dom wieder vollständig aufgebaut und geweiht.'],
    fact:'Jedes Jahr im Juli feiert Würzburg die Kiliani-Wallfahrtswoche, und die Stadt feiert gleich mit, mit einem großen Volksfest, dem Kiliani.',
    look:'Die Grabdenkmäler der Fürstbischöfe an den Pfeilern im Langhaus. Zwei davon stammen von Tilman Riemenschneider.' },

  { id:'marienkapelle', name:'Marienkapelle', wiki:'Marienkapelle (Würzburg)', ll:[49.7950,9.9293], dwell:8,
    teaser:'Die Bürgerkirche am Markt, mit Adam und Eva am Portal.',
    story:[
      'Die Marienkapelle ist trotz ihres Namens eine stattliche gotische Kirche. Gebaut haben sie nicht die Bischöfe, sondern die Würzburger Bürger. Den Grundstein legte man 1377, der Turm war 1479 fertig. Eine Kirche der Bürger, mitten auf ihrem Marktplatz, das war auch ein selbstbewusstes Zeichen gegenüber dem Bischof auf dem Berg.',
      'Ihre Geschichte hat aber eine dunkle Seite. An dieser Stelle lag bis 1349 das jüdische Viertel mit der Synagoge. Im Pestjahr verbreitete sich das Gerücht, Juden hätten die Brunnen vergiftet. Bei dem Pogrom wurden die Würzburger Juden ermordet und ihr Viertel zerstört. Auf dem Platz der Synagoge entstand danach die erste, hölzerne Marienkapelle.',
      'Am Südportal stehen Adam und Eva. Die Originale schuf Tilman Riemenschneider, sie gehören zu seinen bekanntesten Werken. Hier siehst du Kopien, die Originale sind heute im Museum auf der Festung Marienberg.'],
    fact:'In der Marienkapelle liegt Balthasar Neumann begraben, der Baumeister der Residenz.',
    look:'Adam und Eva am Südportal. Riemenschneider gab ihnen ganz menschliche, fast scheue Gesichter.' },

  { id:'falkenhaus', name:'Falkenhaus', wiki:'Falkenhaus', ll:[49.7954,9.9298], dwell:5,
    teaser:'Die schönste Rokokofassade der Stadt, gestiftet von einer Wirtin.',
    story:[
      'Das Falkenhaus fällt sofort auf, mit seiner gelben Fassade voller weißer Stuckornamente. Dass es so aussieht, verdanken wir keinem Fürsten, sondern einer Wirtin. 1735 kaufte der Gastwirt Franz Thomas Meißner das Haus und machte daraus ein Gasthaus. Seine Witwe Barbara ließ 1751 von Stuckateuren aus Oberbayern diese verspielte Rokokofassade anbringen.',
      'Im 19. Jahrhundert war hier der einzige Konzert- und Tanzsaal der Stadt. Beim Luftangriff 1945 brannte das Haus aus, Teile der Fassade stürzten ein. Nach alten Fotos wurde sie in den Fünfzigerjahren wieder aufgebaut.',
      'Heute sind hier die Stadtbücherei und die Tourist-Information untergebracht. Wenn du also eine Frage zu Würzburg hast, bist du hier genau richtig.'],
    fact:'Schon im Mittelalter stand hier ein wichtiges Haus: Es war die Wohnung des Dompfarrers.',
    look:'Die feinen Stuckranken rund um die Fenster. Schau dir an, wie keine Fensterumrahmung der anderen genau gleicht.' },

  { id:'neumuenster', name:'Neumünster und Lusamgärtchen', wiki:'Neumünster (Würzburg)', ll:[49.7941,9.9312], dwell:8,
    teaser:'Über dem Grab der Frankenapostel, daneben ein Minnesänger.',
    story:[
      'Das Neumünster steht der Überlieferung nach an der Stelle, an der Kilian und seine Gefährten den Märtyrertod starben. In der Krypta werden ihre Gebeine verehrt. Von außen siehst du vor allem die prächtige rote Barockfassade, im Kern ist die Kirche aber deutlich älter.',
      'Gleich hinter der Kirche versteckt sich ein kleiner, stiller Garten, das Lusamgärtchen. Hier soll der berühmteste Dichter des deutschen Mittelalters begraben sein: Walther von der Vogelweide, der um 1230 in Würzburg gestorben ist.',
      'Walther war ein Minnesänger, eine Art Popstar seiner Zeit, der an den Höfen von Fürsten und Königen auftrat. Seine Liebeslieder und politischen Sprüche kennt man bis heute. In der Schule hast du vielleicht sein Gedicht „Under der linden“ gelesen.'],
    fact:'Der Sage nach wünschte sich Walther, dass man auf seinem Grab die Vögel füttert. Deshalb legen Besucher bis heute gern ein paar Krümel auf den Gedenkstein.',
    look:'Den Gedenkstein für Walther im Lusamgärtchen. Oft liegen dort Blumen oder ein paar Körner für die Vögel.' },

  { id:'rathaus', name:'Rathaus Grafeneckart', wiki:'Grafeneckart', ll:[49.7937,9.9281], dwell:6,
    teaser:'Seit 1316 das Rathaus, mit Hochwassermarken am Tor.',
    story:[
      'Das Rathaus mit dem markanten Turm heißt Grafeneckart. Der Name geht auf einen bischöflichen Beamten zurück, der hier im Mittelalter wohnte. Seit 1316 nutzen die Würzburger Bürger den Bau als Rathaus, also schon seit über siebenhundert Jahren.',
      'Schau mal an den Torpfosten am Eingang: Dort sind Hochwassermarken angebracht. Sie erinnern an Hochwasser, bei denen der Main bis weit in die Altstadt stand. Das schlimmste davon war wohl das Magdalenenhochwasser im Sommer 1342, eine der größten Flutkatastrophen in Mitteleuropa.',
      'Direkt vor dem Rathaus steht der Vierröhrenbrunnen, ein Rokokobrunnen, gebaut zwischen 1763 und 1766. Die Figuren auf ihm stellen die vier Kardinaltugenden dar, und ganz oben steht die Franconia, die Figur für Franken.'],
    fact:'Die Hochwassermarken zeigen, wie hoch das Wasser über die Jahrhunderte stand.',
    look:'Die Hochwassermarken am Tor des Grafeneckart.' },

  { id:'kaeppele', name:'Käppele', wiki:'Käppele (Würzburg)', ll:[49.7843,9.9219], dwell:15,
    teaser:'Wallfahrtskirche im Weinberg, über einen langen Kreuzweg erreichbar.',
    story:[
      'Das Käppele, die kleine Kapelle, ist in Wahrheit eine prächtige Barockkirche mit zwei Zwiebeltürmen. Ihre Geschichte beginnt ganz bescheiden: 1640, mitten im Dreißigjährigen Krieg, stellte ein Mainfischer in seinem Weinberg einen Bildstock mit einer Pietà auf, Maria mit dem toten Jesus. Immer mehr Menschen kamen zum Beten, und so entstand erst eine Kapelle, dann diese Kirche.',
      'Den Neubau entwarf, wie könnte es in Würzburg anders sein, Balthasar Neumann. Gebaut wurde er zwischen 1748 und 1750. Die ursprüngliche Pietà aus der Zeit um 1640 steht bis heute auf dem Altar der alten Gnadenkapelle.',
      'Hinauf führt ein langer Treppenweg mit Kreuzwegstationen, angelegt in der zweiten Hälfte des 18. Jahrhunderts. Je nachdem, wie man zählt, sind es rund 250 Stufen, beschattet von alten Platanen. Er gilt als größter Kreuzweg seiner Art in Deutschland.'],
    fact:'Die Stufen lohnen sich auch ohne Kirchenbesuch: Von der Terrasse vor dem Käppele siehst du über den Main auf die Altstadt und hinüber zur Festung.',
    look:'Die kleinen Kapellen mit den Kreuzwegstationen am Treppenweg.' },

  { id:'hofgarten', name:'Hofgarten', ll:[49.7915,9.9420], dwell:12,
    teaser:'Barocker Garten hinter der Residenz, auf den alten Stadtbastionen.',
    story:[
      'Hinter der Residenz liegt der Hofgarten, zusammen mit dem Schloss Teil des Weltkulturerbes. Weil die Residenz direkt an der alten Stadtbefestigung steht, war für einen großen Barockgarten eigentlich kein Platz. Die Gärtner machten aus der Not eine Tugend und nutzten die Bastionen der Stadtmauer: Terrassen, Treppen und Rampen führen hinauf und hinunter.',
      'Überall stehen verspielte Figuren, vor allem kleine Putten, die der Hofbildhauer Johann Peter Wagner geschaffen hat. Es gibt eine Orangerie, Rosenbeete und einen Kräuter- und Obstgarten.',
      'Zur Stadt hin wird es dann plötzlich natürlicher. Dort geht der Garten in einen kleinen englischen Landschaftsgarten über, mit geschwungenen Wegen und großen alten Bäumen. Ein schöner Ort, um nach all dem Barock ein bisschen durchzuatmen.'],
    fact:'Der Hofgarten ist frei zugänglich und kostet keinen Eintritt.',
    look:'Die Putten zwischen den Laubengängen im Ostgarten. Jede hat eine andere Pose.' },

  { id:'juliusspital', name:'Juliusspital', wiki:'Juliusspital', ll:[49.7979,9.9323], dwell:8,
    teaser:'Ein Krankenhaus, das sich mit Wein finanziert.',
    story:[
      'Das Juliusspital ist eine ungewöhnliche Mischung: Spital, Altenheim und eines der größten Weingüter Deutschlands. Gegründet hat es Fürstbischof Julius Echter im 16. Jahrhundert als Stiftung für Kranke, Arme und Alte.',
      'Damit die Stiftung dauerhaft Geld hat, bekam sie Land und Weinberge. Dieses Prinzip funktioniert bis heute: Die Erlöse aus dem Wein helfen, das Spital zu finanzieren. Wer hier ein Glas trinkt, tut also gewissermaßen ein gutes Werk.',
      'Im Innenhof mit seinen Barockflügeln findest du eine Weinstube. Unter dem Gebäude liegen ausgedehnte Weinkeller, in denen die Weine in großen Holzfässern reifen.'],
    fact:'Julius Echter war eine prägende Figur für Würzburg: Er gründete auch die Universität neu und ließ in der Region hunderte Kirchen bauen oder umbauen, an ihren spitzen Türmen erkennt man sie bis heute.',
    look:'Den Garten hinter dem barocken Fürstenbau mit dem Vierströmebrunnen. Ein ruhiger Ort mitten in der Stadt.' },

  { id:'buergerspital', name:'Bürgerspital', wiki:'Bürgerspital Weingut', ll:[49.7961,9.9326], dwell:8,
    teaser:'Seit 1316 Stiftung und Weingut, Heimat des Bocksbeutels.',
    story:[
      'Das Bürgerspital zum Heiligen Geist geht auf das Jahr 1316 zurück. Damals schenkten Johannes von Steren und seine Frau Mergardis der Stadt ihren Besitz, um Kranke, Arme und Bedürftige zu versorgen. Wie beim Juliusspital finanziert sich die Stiftung bis heute auch mit Wein.',
      'Zu den Weinbergen gehört ein Teil des Würzburger Steins, der berühmtesten Weinlage der Stadt. Schon Goethe war ein großer Fan des Steinweins und hat ihn sich regelmäßig nach Weimar kommen lassen.',
      'Und hier hat auch eine typisch fränkische Flasche ihre Wurzeln: der Bocksbeutel, diese bauchige, flache Flasche. 1726 bestimmte der Stadtrat, dass der Steinwein aus dem Bürgerspital in Bocksbeutel abgefüllt und versiegelt werden muss, als Schutz gegen Fälschungen.'],
    fact:'Im Keller des Bürgerspitals lagert noch eine Flasche Steinwein vom Jahrgang 1540. Sie gilt als einer der ältesten Weine Deutschlands.',
    look:'Die Bocksbeutel in der Weinstube. Erkennst du die typische flache Form?' },

  { id:'roentgen', name:'Röntgen-Gedächtnisstätte', wiki:'Röntgen-Gedächtnisstätte', ll:[49.8000,9.9309], dwell:10,
    teaser:'Hier wurden die Röntgenstrahlen entdeckt.',
    story:[
      'In diesem Gebäude, dem früheren Physikalischen Institut der Universität, machte Wilhelm Conrad Röntgen im November 1895 eine Entdeckung, die die Medizin verändert hat. Bei Versuchen mit einer Vakuumröhre bemerkte er, dass ein Schirm in einiger Entfernung zu leuchten begann, obwohl die Röhre abgedeckt war. Er hatte eine neue Art von Strahlen gefunden.',
      'Röntgen nannte sie X-Strahlen, weil er nicht wusste, was sie waren. Wochenlang arbeitete er fast allein und ohne Pause im Labor. Eines der ersten Bilder zeigte die Hand seiner Frau Anna Bertha, mit dem Ehering am Finger.',
      'Schon wenige Monate später wurden die Strahlen in Krankenhäusern genutzt. 1901 bekam Röntgen dafür den allerersten Nobelpreis für Physik. Ein Patent hat er nie angemeldet, die Entdeckung sollte allen zugutekommen.'],
    fact:'In vielen Sprachen heißen die Strahlen bis heute X-Strahlen, so wie Röntgen sie getauft hat. Im Deutschen dagegen sind sie nach ihrem Entdecker benannt.',
    look:'Das historische Labor in der Gedächtnisstätte, in dem Röntgen seine Entdeckung machte.' },

  { id:'alterkranen', name:'Alter Kranen', wiki:'Alter Kranen (Würzburg)', ll:[49.7968,9.9269], dwell:8,
    teaser:'Ein Barockkran am Main, gebaut vom Sohn des Residenz-Baumeisters.',
    story:[
      'Der Alte Kranen am Mainufer war einmal ein Hightech-Gerät. Mit ihm wurden Waren von den Mainschiffen gehoben, vor allem Weinfässer. Gebaut wurde er zwischen 1767 und 1773 von Franz Ignaz Michael Neumann, dem Sohn von Balthasar Neumann.',
      'Angetrieben wurde der Kran ganz ohne Motor: Im Inneren liefen Männer in großen Treträdern, ähnlich wie Hamster im Rad. So konnten sie schwere Lasten anheben und auf die Kaimauer schwenken.',
      'Heute ist der Kran ein Denkmal, und gleich daneben sitzt man in einer Weinstube direkt am Wasser. Ein schöner Ort, um den Schiffen auf dem Main zuzuschauen.'],
    fact:'Am Alten Kranen wird auch der Pegel des Mains gemessen. An der Wand siehst du eine Pegellatte und Marken früherer Hochwasser.',
    look:'Die Hochwassermarken an der Wand des Krans.' },
  ],

  /* „Schöne Wege“: Parks, Ufer, Gassen – ohne Ansage, nur damit die Route dort entlangführt */
  scenic:[
    {id:'hofgarten_park', name:'Hofgarten', ll:[49.7905,9.9418], weight:1.5},
    {id:'ringpark_ost',   name:'Ringpark',                     ll:[49.7962,9.9405], weight:1.4},
    {id:'ringpark_nord',  name:'Ringpark am Bahnhof',          ll:[49.8005,9.9385]},
    {id:'mainkai',        name:'Mainkai',                      ll:[49.7955,9.9265], weight:1.4},
    {id:'domstrasse',     name:'Domstraße',                    ll:[49.7929,9.9300]},
    {id:'hofstrasse',     name:'Hofstraße',                    ll:[49.7929,9.9340]},
  ],
  wayside:[
    { id:'vierroehren', name:'Vierröhrenbrunnen', ll:[49.7934,9.9285],
      text:'Der Vierröhrenbrunnen vor dem Rathaus. Ganz oben steht die Franconia, darunter die vier Kardinaltugenden: Weisheit, Gerechtigkeit, Tapferkeit und Mäßigung. Gebaut wurde er zwischen 1763 und 1766.' },
    { id:'lusam', name:'Lusamgärtchen', ll:[49.7945,9.9310],
      text:'Hinter dem Neumünster liegt das stille Lusamgärtchen. Hier soll Walther von der Vogelweide begraben sein, der berühmteste Minnesänger des Mittelalters.' },
    { id:'frankonia', name:'Frankoniabrunnen', wiki:'Frankoniabrunnen', ll:[49.7926,9.9368],
      text:'Der Frankoniabrunnen vor der Residenz. Unten sitzen drei große Franken: der Dichter Walther von der Vogelweide, der Bildhauer Tilman Riemenschneider und der Maler Matthias Grünewald.' },
    { id:'kiliansbrunnen', name:'Kiliansbrunnen', ll:[49.8011,9.9356],
      text:'Vor dem Bahnhof begrüßt dich der heilige Kilian, der Frankenapostel. Der irische Mönch kam im 7. Jahrhundert hierher und ist bis heute der Schutzpatron der Stadt.' },
    { id:'marktplatz_w', name:'Marktplatz', ll:[49.7952,9.9291],
      text:'Der Würzburger Marktplatz. Hier wird bis heute fast jeden Tag Markt gehalten, mit Obst und Gemüse aus dem Umland.' },
  ],

  zones:[
    { id:'domstrasse_z', ll:[49.7930,9.9300], r:110, text:'Du bist auf der Domstraße, der Achse der Altstadt. Sie verbindet den Dom mit der Alten Mainbrücke, und an ihrem Ende siehst du schon die Festung auf dem Berg.' },
    { id:'mainufer', ll:[49.7960,9.9262], r:120, text:'Du bist am Mainufer. Früher legten hier die Schiffe mit Wein und Waren an, heute ist es eine schöne Promenade zum Spazierengehen.' },
    { id:'ringpark', ll:[49.7975,9.9400], r:250, text:'Du bist im Ringpark. Er zieht sich wie ein grünes Band um die Altstadt, dort, wo früher die Stadtbefestigung verlief.' },
    { id:'mainviertel', ll:[49.7905,9.9240], r:180, text:'Du bist im Mainviertel auf der anderen Mainseite, unterhalb der Festung. Ein ruhiges, altes Viertel, wo früher vor allem Fischer und Schiffer wohnten.' },
  ]
};
