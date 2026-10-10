/* Inhalte: London
   Koordinaten sind Näherungswerte und werden beim Start über die Wikipedia-API präzisiert.
   Änderst du Texte hier, erzeugt GitHub beim nächsten Deploy automatisch neue KI-Audios. */
(globalThis.CITY_DATA = globalThis.CITY_DATA || {}).london = {
  id:'london', name:'London', tagline:'gegründet als römisches Londinium', center:[51.5070,-0.1080],
  starts:[ {id:'trafalgar_start', name:'Trafalgar Square', ll:[51.5080,-0.1281]}, {id:'westminster_start', name:'Westminster', ll:[51.5010,-0.1248]}, {id:'towerhill', name:'Tower Hill', ll:[51.5098,-0.0766]} ],
  /* Kategorien: „Must-See“ enthält die bekanntesten Sehenswürdigkeiten. Jede Liste ist nach Berühmtheit sortiert –
     die Tourplanung nimmt die vorderen Einträge zuerst. Ein Ort darf in mehreren Kategorien stehen. */
  categories:[
    {id:'mustsee',    label:'Must-See',              stops:['bigben','towerbridge','buckingham','tower','londoneye','abbey','stpauls']},
    {id:'royals',     label:'Könige & Wachen',       stops:['buckingham','tower','abbey','horseguards','stjamespark','bigben']},
    {id:'themse',     label:'Themse & Brücken',      stops:['towerbridge','londoneye','bigben','tower','millennium','globe']},
    {id:'kultur',     label:'Kunst, Kirchen & Theater', stops:['abbey','stpauls','nationalgallery','globe','coventgarden']},
    {id:'maerkte',    label:'Märkte & Genuss',       stops:['coventgarden','borough','leadenhall']},
    {id:'plaetze',    label:'Parks & Plätze',        stops:['trafalgar','stjamespark','coventgarden','horseguards','buckingham']},
  ],
  /* Begrüßung und Abschied auf Englisch */
  dialect:{hello:'Hello', bye:'cheerio'},
  intro:'Hello und herzlich willkommen in London! Vor fast 2000 Jahren gründeten die Römer hier an der Themse eine Handelsstadt namens Londinium. Daraus wurde die Hauptstadt eines Weltreichs, mit Königspalästen, Kathedralen und einer alten Festung, in der bis heute die Kronjuwelen liegen. Auf dieser Tour kommst du von Westminster, wo Könige gekrönt werden und das Parlament tagt, an der Themse entlang bis in die alte City und zum Tower.',
  stops:[
  { id:'bigben', name:'Big Ben und Parlament', wiki:'Big Ben', ll:[51.5007,-0.1245], dwell:10,
    teaser:'Die berühmteste Glocke der Welt, an einem Palast, der einmal fast komplett abbrannte.',
    story:[
      'Vor dir steht wohl das bekannteste Wahrzeichen Londons. Streng genommen heißt aber nur die große Glocke im Turm Big Ben. Der Turm selbst hieß lange einfach Uhrturm und wurde 2012 zum diamantenen Thronjubiläum von Königin Elisabeth der Zweiten in Elizabeth Tower umbenannt. Woher der Spitzname kommt, weiß niemand genau. Vielleicht von Sir Benjamin Hall, der als zuständiger Minister den Einbau überwachte, vielleicht auch von einem damals berühmten Boxer namens Ben Caunt.',
      'Die Glocke hat eine holprige Geschichte. Die erste, gegossen 1856, bekam schon beim Testen einen Riss und wurde wieder eingeschmolzen. Die zweite, gegossen 1858 in der Whitechapel-Glockengießerei, wiegt rund 13,7 Tonnen und läutete im Juli 1859 zum ersten Mal. Nur zwei Monate später war auch sie gesprungen, vermutlich weil der Hammer viel zu schwer war. Vier Jahre lang schwieg sie, dann drehte man sie ein Stück weiter und gab ihr einen leichteren Hammer. Der Riss ist bis heute da.',
      'Der Turm gehört zum Palace of Westminster, dem Sitz des britischen Parlaments. Der alte Palast brannte am 16. Oktober 1834 fast vollständig ab, ausgerechnet weil man in einem Ofen alte hölzerne Kerbhölzer der Steuerverwaltung verbrannte. Gerettet wurde die Westminster Hall aus dem Jahr 1097. Den Neubau entwarf Charles Barry, und für die vielen gotischen Details holte er sich Augustus Pugin. Der Uhrturm war Pugins letzter Entwurf, bevor er schwer erkrankte und 1852 starb.'],
    fact:'Die Uhr wird mit alten Pennys reguliert. Legt man eine Münze auf eine kleine Ablage am Pendel, geht die Uhr um etwa 0,4 Sekunden pro Tag schneller.',
    look:'Die Laterne ganz oben über den Zifferblättern, das Ayrton Light. Sie leuchtet, wenn eine der beiden Parlamentskammern nach Einbruch der Dunkelheit noch tagt.' },

  { id:'abbey', name:'Westminster Abbey', wiki:'Westminster Abbey', ll:[51.4994,-0.1273], dwell:12,
    teaser:'Hier werden seit 1066 Englands Könige gekrönt.',
    story:[
      'Westminster Abbey ist die Krönungskirche Englands. Schon um das Jahr 960 lebten hier Benediktinermönche. König Eduard der Bekenner ließ eine große Kirche bauen, die Ende Dezember 1065 geweiht wurde. Nur wenige Tage später starb er und wurde hier begraben. Am Weihnachtstag 1066 ließ sich Wilhelm der Eroberer in dieser Kirche krönen, und seitdem finden die Krönungen der englischen und britischen Monarchen hier statt, zuletzt die von König Charles dem Dritten im Mai 2023.',
      'Die Kirche, die du heute siehst, ließ Heinrich der Dritte ab 1245 im gotischen Stil neu bauen. Die beiden Westtürme kamen erst im 18. Jahrhundert dazu, entworfen von Nicholas Hawksmoor. Drinnen steht der hölzerne Krönungsstuhl, der seit dem 14. Jahrhundert bei Krönungen benutzt wird. Jahrhundertelang war darin der Stein von Scone eingelassen, auf dem einst schottische Könige gekrönt wurden. 1996 kam der Stein zurück nach Schottland, seit 2024 liegt er im Museum von Perth und kommt nur noch zu Krönungen nach London.',
      'Mehr als 3300 Menschen sind hier begraben oder werden mit einem Denkmal geehrt: Könige und Königinnen, aber auch Isaac Newton und Charles Darwin. In der Poets’ Corner, der Dichterecke, liegt Geoffrey Chaucer, der um 1400 als erster Dichter hier beigesetzt wurde. Auch Hochzeiten feiert die Königsfamilie gern hier. 2011 gaben sich Prinz William und Catherine Middleton in der Abtei das Jawort, und Millionen Menschen sahen an den Bildschirmen zu.'],
    fact:'Der Sage nach soll der Apostel Petrus einem Fischer erschienen sein, um die erste Kirche hier selbst zu weihen. Deshalb schenkt die Londoner Zunft der Fischhändler der Abtei bis heute jedes Jahr einen Lachs.',
    look:'Wenn du hineingehst: Gleich hinter dem großen Westportal liegt im Boden das Grab des Unbekannten Soldaten. Es ist die einzige Grabplatte in der ganzen Kirche, über die niemand laufen darf.' },

  { id:'buckingham', name:'Buckingham Palace', wiki:'Buckingham Palace', ll:[51.5014,-0.1419], dwell:15,
    teaser:'Das Stadtschloss der Royals, mit dem berühmtesten Balkon der Welt.',
    story:[
      'Buckingham Palace war ursprünglich gar kein Palast. 1703 entstand hier ein Stadthaus für den Herzog von Buckingham. 1761 kaufte König Georg der Dritte das Haus als privates Heim für seine Frau, Königin Charlotte. Erst sein Sohn Georg der Vierte ließ es ab 1826 von dem Architekten John Nash zu einem richtigen Palast ausbauen. Als erste Monarchin zog Königin Victoria 1837 hier ein, und seitdem ist Buckingham Palace der offizielle Londoner Sitz der britischen Monarchen.',
      'Der Palast hat 775 Räume, und dahinter liegt mit rund 16 Hektar der größte private Garten Londons. Die Fassade, auf die du gerade schaust, ist übrigens erst von 1913. Der Architekt Aston Webb hat sie neu gestaltet, und zu ihr gehört auch der berühmte Balkon. Dort zeigt sich die königliche Familie bei großen Anlässen, zum Beispiel nach einer Krönung, nach königlichen Hochzeiten oder nach der Geburtstagsparade für den Monarchen.',
      'Vor dem Palast findet die Wachablösung statt, das Changing of the Guard. Die Gardesoldaten mit ihren hohen schwarzen Bärenfellmützen gehören zu den bekanntesten Fotomotiven der Stadt. Ganz so gut bewacht, wie es aussieht, war der Palast aber nicht immer: 1982 kletterte ein Mann namens Michael Fagan über die Mauer und stand plötzlich im Schlafzimmer von Königin Elisabeth der Zweiten.'],
    fact:'An der Fahne auf dem Dach erkennst du, ob der König zu Hause ist. Dann weht die königliche Standarte. Ist er nicht da, weht der Union Jack. Das gibt es erst seit 1997, vorher wehte bei Abwesenheit einfach gar keine Fahne.',
    look:'Die schwarzen, goldverzierten Gitter und Tore vor dem Vorhof. Dahinter stehen die Wachsoldaten vor ihren Wachhäuschen.' },

  { id:'tower', name:'Tower of London', wiki:'Tower of London', ll:[51.5081,-0.0759], dwell:15,
    teaser:'Festung, Königsburg, Gefängnis und Schatzkammer der Kronjuwelen.',
    story:[
      'Der Tower ist fast 1000 Jahre alt. Wilhelm der Eroberer ließ ihn nach seiner Krönung 1066 bauen, um die frisch eroberte Stadt im Griff zu behalten. Er setzte die Festung in die südöstliche Ecke der alten römischen Stadtmauer, direkt an die Themse. Um 1078 begann man mit dem mächtigen steinernen Turm in der Mitte, dem White Tower. Seine Mauern sind unten fast fünf Meter dick. Den Namen hat er, weil Heinrich der Dritte ihn 1240 weiß tünchen ließ.',
      'Berüchtigt ist der Tower als Gefängnis. Heinrich der Achte ließ hier zwei seiner Ehefrauen hinrichten, Anne Boleyn und Catherine Howard. Auch Lady Jane Grey, die nur wenige Tage Königin war, starb hier auf dem Tower Green. Hinrichtungen innerhalb der Mauern waren aber die Ausnahme, die meisten fanden draußen auf dem Tower Hill statt. Die letzte Hinrichtung im Tower gab es 1941: Der deutsche Spion Josef Jakobs wurde hier erschossen.',
      'Seit dem Mittelalter werden im Tower die Kronjuwelen aufbewahrt. 1671 versuchte ein gewisser Thomas Blood, sie zu stehlen. Er überwältigte mit seinen Komplizen den Wärter und hatte Krone, Zepter und Reichsapfel schon an sich genommen, doch der Sohn des Wärters schlug Alarm. Bewacht wird der Tower von den Yeoman Warders, die man auch Beefeaters nennt. Sie sind ehemalige Berufssoldaten, wohnen mit ihren Familien innerhalb der Festungsmauern und führen Besucher herum.'],
    fact:'Der Sage nach fallen das Königreich und der Tower, wenn die Raben die Festung verlassen. Deshalb leben hier immer mindestens sechs Raben. Die Legende ist aber viel jünger, als sie klingt: Belegt ist sie erst ab dem Jahr 1944.',
    look:'Das Traitors’ Gate, das Verrätertor, an der Themseseite. Durch dieses Wassertor kamen früher Gefangene mit dem Boot in die Festung.' },

  { id:'towerbridge', name:'Tower Bridge', wiki:'Tower Bridge', ll:[51.5055,-0.0754], dwell:10,
    teaser:'Die Klappbrücke, für die bis heute die Schiffe Vorfahrt haben.',
    story:[
      'Die Tower Bridge sieht aus wie aus dem Mittelalter, ist aber ein Kind des Industriezeitalters. Gebaut wurde sie von 1886 bis 1894, und am 30. Juni 1894 eröffnete sie der Prinz von Wales. Den Entwurf lieferten der Stadtarchitekt Horace Jones und der Ingenieur John Wolfe Barry. Hinter der gotischen Steinverkleidung der 65 Meter hohen Türme steckt ein Gerüst aus Stahl. Viele Besucher halten sie übrigens für die London Bridge, doch die ist die schlichte Brücke ein Stück flussaufwärts.',
      'Das Besondere ist die Mitte: Die beiden Brückenhälften lassen sich hochklappen, damit große Schiffe durchfahren können. Früher erledigten das Dampfmaschinen, die Wasser unter hohen Druck setzten, seit den Siebzigerjahren läuft der Antrieb elektrohydraulisch. Bis heute gilt dabei: Schiffe haben Vorfahrt vor Autos. Im ersten Jahr nach der Eröffnung wurde die Brücke über 6000 Mal geöffnet, heute sind es nur noch etwa 500 Mal im Jahr.',
      'Oben zwischen den Türmen verlaufen zwei Fußgängerstege. Über sie sollten Fußgänger den Fluss auch bei geöffneter Brücke überqueren können. Weil aber die meisten lieber unten warteten, als die vielen Treppen hinaufzusteigen, wurden die Stege 1910 geschlossen. Heute gehören sie zu einer Ausstellung, und seit 2014 haben sie sogar einen Glasboden, durch den du tief hinunter auf die Straße und die Themse schaust.'],
    fact:'Am 30. Dezember 1952 begann sich die Brücke zu öffnen, während noch ein Doppeldeckerbus darauf fuhr. Der Fahrer Albert Gunter gab Gas und sprang mit dem Bus über den Spalt auf die andere Seite. Dafür bekam er eine Belohnung von 10 Pfund.',
    look:'Die Farben der Brücke, Blau und Weiß. Zum silbernen Thronjubiläum der Königin 1977 war sie sogar rot, weiß und blau gestrichen.' },

  { id:'stpauls', name:'St Paul’s Cathedral', wiki:'St Paul’s Cathedral', ll:[51.5138,-0.0984], dwell:12,
    teaser:'Wrens Meisterwerk, entstanden aus der Asche des Großen Brandes.',
    story:[
      'Im September 1666 wütete der Große Brand von London und zerstörte weite Teile der Stadt, darunter auch die alte mittelalterliche Kathedrale. Den Neubau übertrug man Christopher Wren, einem Mathematiker und Astronomen, der zum berühmtesten Architekten Englands wurde. 1675 begann der Bau, und Ende 1711 erklärte das Parlament die Kathedrale für vollendet. Wren hat also erlebt, wie sein Lebenswerk fertig wurde, und das war bei so großen Kirchen damals alles andere als selbstverständlich.',
      'Die gewaltige Kuppel ist 111 Meter hoch, und bis 1963 war die Kathedrale das höchste Gebäude Londons. Innen erreichst du über 259 Stufen die Flüstergalerie. Flüsterst du dort dicht an der Wand, kann dich jemand auf der anderen Seite der Kuppel hören. Hier hat die Nation auch große Momente gefeiert und betrauert: 1965 die Trauerfeier für Winston Churchill und 1981 die Hochzeit von Prinz Charles und Lady Diana.',
      'Im Zweiten Weltkrieg wurde die Kuppel zum Symbol des Durchhaltens. Schon im September 1940 entschärften Soldaten eine Bombe, die die Kathedrale getroffen hatte, aber nicht explodiert war. Am Abend des 29. Dezember 1940 stand die Stadt ringsum in Flammen. Der Fotograf Herbert Mason machte in dieser Nacht ein berühmtes Bild: Die Kuppel ragt unversehrt aus Rauch und Feuer heraus. Für viele Briten wurde es zum Zeichen, dass London nicht aufgibt.'],
    fact:'Wren liegt in der Krypta begraben. Auf seiner Grabplatte steht auf Lateinisch: Leser, wenn du sein Denkmal suchst, schau dich um.',
    look:'Über dem Südportal ein Phönix, der aus den Flammen aufsteigt, mit dem Wort Resurgam, ich werde wieder auferstehen. Der Überlieferung nach brachte ein Arbeiter Wren ausgerechnet ein altes Grabsteinstück mit genau diesem Wort, als der die Mitte der neuen Kirche markieren wollte.' },

  { id:'trafalgar', name:'Trafalgar Square', wiki:'Trafalgar Square', ll:[51.5080,-0.1281], dwell:10,
    teaser:'Nelson auf seiner Säule und vier Löwen, die über den Platz wachen.',
    story:[
      'Der Trafalgar Square erinnert an die Seeschlacht von Trafalgar im Jahr 1805. Damals besiegte die britische Flotte unter Admiral Horatio Nelson die Flotten Frankreichs und Spaniens. Nelson selbst wurde in der Schlacht tödlich getroffen. Den Platz entwarf Charles Barry, derselbe Architekt, der nach dem großen Brand auch das Parlament neu baute. Am 1. Mai 1844 wurde der Platz für die Öffentlichkeit freigegeben, und seitdem ist er so etwas wie das Wohnzimmer Londons, ein Ort für Feiern und Kundgebungen.',
      'In der Mitte steht die Nelsonsäule. Im November 1843 kam die Statue des Admirals ganz nach oben, und mit ihr ist das Denkmal rund 52 Meter hoch. Die vier großen Bronzelöwen am Fuß kamen erst 1867 dazu, jeder wiegt etwa sieben Tonnen. In der Nordwestecke steht der vierte Sockel, die Fourth Plinth. Er blieb lange leer, weil das Geld für eine Statue fehlte. Seit 1999 werden darauf wechselnde moderne Kunstwerke gezeigt.',
      'Früher war der Platz berühmt für seine Tauben. Unzählige flatterten hier herum, und Touristen fütterten sie mit Körnern von Verkaufsständen. 2001 wurde der Verkauf eingestellt, 2003 das Füttern ganz verboten. Ein schöner Brauch dagegen ist der Weihnachtsbaum: Seit 1947 schenkt die norwegische Hauptstadt Oslo London jedes Jahr eine große Fichte, als Dank für die britische Hilfe im Zweiten Weltkrieg.'],
    fact:'Am Südende des Platzes steht ein Reiterstandbild von König Karl dem Ersten. An dieser Stelle stand einst das alte Charing Cross, und bis heute werden die Entfernungen nach London von hier aus gemessen.',
    look:'Die Löwen am Fuß der Nelsonsäule. Geschaffen hat sie der Maler und Bildhauer Edwin Landseer.' },

  { id:'nationalgallery', name:'National Gallery', wiki:'National Gallery (London)', ll:[51.5089,-0.1283], dwell:10,
    teaser:'Große europäische Malerei, angefangen mit nur 38 Bildern.',
    story:[
      'Die National Gallery begann 1824 ganz bescheiden. Der Staat kaufte die Sammlung des Bankiers John Julius Angerstein, ganze 38 Gemälde, und zeigte sie zunächst in dessen früherem Stadthaus. 1838 zog die Galerie in diesen Bau von William Wilkins an der Nordseite des Trafalgar Square. Heute umfasst die Sammlung mehr als 2300 Gemälde, von der Mitte des 13. Jahrhunderts bis ungefähr zum Jahr 1900.',
      'Hier hängen Bilder, die du garantiert kennst: die Sonnenblumen von Vincent van Gogh, die Arnolfini-Hochzeit von Jan van Eyck und William Turners Fighting Temeraire, ein altes Kriegsschiff auf seiner letzten Fahrt. Eines der Bilder hat eine dramatische Geschichte: 1914 hackte die Frauenrechtlerin Mary Richardson mit einem Beil auf die Venus vor dem Spiegel von Diego Velázquez ein. Sie protestierte damit gegen die Verhaftung der Frauenrechtlerin Emmeline Pankhurst.',
      'Im Zweiten Weltkrieg waren die Wände leer. Die Gemälde wurden nach Wales gebracht und in einem stillgelegten Schieferbergwerk versteckt. Damit die Londoner trotzdem nicht ganz ohne Kunst blieben, gab die Pianistin Myra Hess in der leeren Galerie an jedem Werktag Mittagskonzerte. Später holte man jeden Monat ein einziges Gemälde aus dem Versteck zurück nach London und stellte es hier aus, als Bild des Monats.'],
    fact:'Prinz Charles verglich 1984 einen geplanten modernen Anbau mit einem monströsen Karbunkel, einem Furunkel im Gesicht eines geliebten Freundes. Der Entwurf wurde verworfen, und der Sainsbury-Flügel, der 1991 eröffnete, sieht ganz anders aus.',
    look:'Die Säulenhalle über der Treppe. Von dort oben schaust du über den ganzen Trafalgar Square und die Straße Whitehall hinunter bis zum Big Ben.' },

  { id:'londoneye', name:'London Eye', wiki:'London Eye', ll:[51.5033,-0.1196], dwell:10,
    teaser:'Ein Riesenrad, das eigentlich nur fünf Jahre bleiben sollte.',
    story:[
      'Das London Eye ist 135 Meter hoch. Entworfen haben es die Architekten David Marks und Julia Barfield, als Beitrag zur Jahrtausendwende. Gebaut wurde das Rad liegend, in Einzelteilen auf Plattformen in der Themse, und dann langsam aufgerichtet. Gehalten wird es nur von einer Seite, von einem riesigen schrägen Gestell in Form eines A. Damit ist es das höchste einseitig gelagerte Aussichtsrad der Welt.',
      'Offiziell eröffnet wurde das Rad am Silvesterabend 1999 vom damaligen Premierminister Tony Blair. Fahrgäste durften aber erst im März 2000 einsteigen, weil es noch technische Probleme mit den Kapseln gab. Eigentlich hatte das Rad nur eine Genehmigung für fünf Jahre. Doch es wurde so beliebt, dass es schon 2002 eine dauerhafte Erlaubnis bekam. Heute kann man sich die Uferpromenade ohne das Rad kaum noch vorstellen.',
      'Die 32 Kapseln stehen symbolisch für die 32 Londoner Stadtbezirke, und jede bietet Platz für bis zu 25 Menschen. Eine Runde dauert etwa eine halbe Stunde. Anhalten muss das Rad dafür nicht: Es dreht sich so langsam, nur gut einen Viertelmeter pro Sekunde, dass man bequem während der Fahrt ein- und aussteigen kann. Bei klarem Wetter schaust du von oben weit über die ganze Stadt.'],
    fact:'Die Kapseln sind von 1 bis 33 durchnummeriert, und trotzdem gibt es nur 32. Die Nummer 13 wurde einfach ausgelassen.',
    look:'Das schräge Stahlgestell am Ufer. Es trägt das ganze Rad, auf der Flussseite gibt es keine einzige Stütze.' },

  { id:'coventgarden', name:'Covent Garden', wiki:'Covent Garden', ll:[51.5119,-0.1227], dwell:15,
    teaser:'Vom Klostergarten zum Marktplatz voller Straßenkünstler.',
    story:[
      'Der Name verrät die Herkunft: Hier lag einmal der ummauerte Garten der Mönche von Westminster Abbey, der Konventsgarten. Ab 1630 ließ der Graf von Bedford hier vom Architekten Inigo Jones einen Platz nach italienischem Vorbild anlegen, mit Arkaden und vornehmen Wohnhäusern. Es war der erste moderne Platz Londons, und er wurde zum Vorbild für viele weitere Plätze in der Stadt.',
      'Bald entstand auf dem Platz ein Markt für Obst, Gemüse und Blumen, der London über Jahrhunderte versorgte. Die Markthalle in der Mitte entwarf Charles Fowler 1830. 1974 zog der Großmarkt an einen neuen Standort im Südwesten der Stadt, und in die alte Halle zogen Läden, Cafés und Kunsthandwerker. In George Bernard Shaws Stück Pygmalion, aus dem später das Musical My Fair Lady wurde, verkauft Eliza Doolittle hier ihre Blumen.',
      'An der Westseite steht die Kirche Saint Paul’s, die Inigo Jones ebenfalls entworfen hat. Man nennt sie die Schauspielerkirche, denn ringsum liegen viele Theater und das Royal Opera House, das schon 1732 als Theater eröffnet wurde. Vor ihrem Säulenvorbau treten heute Straßenkünstler auf. Ganz einfach ist das nicht: Sie brauchen eine Genehmigung, müssen vorher vorspielen und bekommen dann feste Zeiten zugeteilt.'],
    fact:'Im Mai 1662 schrieb der Tagebuchschreiber Samuel Pepys von einem Puppenspiel hier auf dem Platz. Es ist die erste bekannte Erwähnung von Mister Punch in England, der Hauptfigur des englischen Kasperletheaters.',
    look:'Den schlichten Säulenvorbau von Saint Paul’s Church an der Westseite des Platzes. Genau hier spielt die erste Szene von Shaws Pygmalion.' },

  { id:'globe', name:'Shakespeare’s Globe', wiki:'Globe Theatre', ll:[51.5081,-0.0972], dwell:10,
    teaser:'Shakespeares Theater, wiederaufgebaut mit dem ersten Reetdach seit 1666.',
    story:[
      'Das erste Globe hat eine abenteuerliche Entstehungsgeschichte. Shakespeares Schauspieltruppe spielte zuerst in einem Theater im Norden der Stadt. Als der Pachtvertrag für das Grundstück auslief, bauten die Schauspieler und ihre Freunde das Gebäude kurz nach Weihnachten 1598 Balken für Balken ab, während der Grundbesitzer über die Feiertage auf dem Land war. Aus dem Holz entstand 1599 hier am Südufer das Globe. Viele von Shakespeares Stücken waren hier zum ersten Mal zu sehen.',
      'Am 29. Juni 1613 wurde bei einer Aufführung von Shakespeares Heinrich der Achte eine Theaterkanone abgefeuert. Das Strohdach fing Feuer, und das Theater brannte nieder. Ein Zeitgenosse schrieb in einem Brief, verletzt worden sei niemand, außer einem Mann, dessen brennende Hose mit einer Flasche Bier gelöscht wurde. Das Globe wurde wieder aufgebaut, doch 1642 ließen die Puritaner alle Theater schließen, und 1644 wurde es abgerissen.',
      'Dass hier wieder ein Globe steht, verdankt London dem amerikanischen Schauspieler Sam Wanamaker. Als er 1949 nach London kam und das Globe suchte, fand er nur eine schmutzige Gedenktafel an einer Brauereimauer. Den Wiederaufbau machte er zu seinem Lebenswerk. Er starb 1993, vier Jahre bevor das neue Globe eröffnete, etwa 230 Meter vom ursprünglichen Standort entfernt. Gebaut ist es aus englischer Eiche, ganz ohne tragenden Stahl.'],
    fact:'Das Globe hat das erste Reetdach, das in London seit dem Großen Brand von 1666 erlaubt wurde. Zur Sicherheit sind auf dem Dach Sprinkler eingebaut.',
    look:'Das weiße Fachwerk und das Reetdach. Schau mal, wie fremd dieses Haus zwischen den modernen Gebäuden am Ufer wirkt.' },

  { id:'borough', name:'Borough Market', wiki:'Borough Market', ll:[51.5055,-0.0910], dwell:15,
    teaser:'Londons berühmtester Lebensmittelmarkt, seit mindestens 800 Jahren.',
    story:[
      'Borough Market gehört zu den ältesten und größten Lebensmittelmärkten Londons. Gehandelt wird hier mindestens seit dem 12. Jahrhundert, der Markt selbst nennt sogar das Jahr 1014. Kein Wunder: Der Markt liegt am Südende der London Bridge, und jahrhundertelang war sie die einzige Brücke über die Themse im Herzen Londons. Wer von Süden mit Waren in die Stadt wollte, kam genau hier vorbei.',
      'Ursprünglich lag der Markt direkt auf der Straße zur Brücke. 1754 schaffte das Parlament ihn dort ab, und 1756 öffnete ein neuer Markt etwas abseits, genau hier. Die heutigen Hallen stammen von 1851. Der schöne Vorbau aus Eisen und Glas an der Southwark Street ist übrigens zugezogen: Er gehörte einst zur Blumenhalle in Covent Garden und wurde 2004 hier wieder aufgebaut.',
      'Betrieben wird der Markt bis heute von einer gemeinnützigen Stiftung, deren Treuhänder in der Gegend wohnen müssen. Heute findest du hier Käse, Brot, Obst, Fisch und Streetfood aus aller Welt. Auch Filmteams lieben die Kulisse aus Eisen, Ziegeln und Bahnbögen: Hier wurden Szenen für Bridget Jones und für Harry Potter und der Gefangene von Askaban gedreht.'],
    fact:'Über dem Markt verlaufen Eisenbahnbrücken. Wenn es über dir rattert, rollt gerade ein Zug von oder nach London Bridge Station.',
    look:'Den filigranen Vorbau aus Eisen und Glas an der Southwark Street, der früher in Covent Garden stand.' },

  { id:'millennium', name:'Millennium Bridge', wiki:'Millennium Bridge (London)', ll:[51.5100,-0.0984], dwell:6,
    teaser:'Die Brücke, die nach zwei Tagen wieder schließen musste.',
    story:[
      'Die Millennium Bridge ist eine reine Fußgängerbrücke. Sie ist 325 Meter lang und verbindet Saint Paul’s Cathedral am Nordufer mit der Tate Modern und dem Globe am Südufer. Entworfen haben sie das Architekturbüro von Norman Foster, die Ingenieure von Arup und der Bildhauer Anthony Caro. Ihre Idee war eine Klinge aus Licht, die ganz flach über den Fluss gespannt ist.',
      'Am 10. Juni 2000 wurde die Brücke eröffnet, und Tausende Menschen strömten darauf. Sofort begann sie seitlich zu schwingen. Das Problem: Wenn eine Brücke ein klein wenig schwankt, passen Fußgänger ihre Schritte unbewusst an die Bewegung an, und dadurch schaukelt sie sich immer weiter auf. Schon zwei Tage später wurde die Brücke wieder geschlossen. Die Londoner hatten schnell einen Spitznamen für sie: die Wobbly Bridge, die wackelige Brücke.',
      'Fast zwei Jahre lang wurde nachgebessert. Die Ingenieure bauten 37 Flüssigkeitsdämpfer und 52 Schwingungstilger ein, die die Bewegungen schlucken. Im Februar 2002 wurde die Brücke wieder eröffnet, und seitdem steht sie ruhig, auch wenn Massen darüber laufen. Für Ingenieure in aller Welt ist sie seitdem ein Lehrbeispiel dafür, wie stark Menschen und Bauwerke einander beeinflussen können.'],
    fact:'Im Film Harry Potter und der Halbblutprinz zerstören Todesser die Brücke. Ein kleiner Filmfehler: Die Geschichte spielt im Jahr 1996, da gab es die Brücke noch gar nicht.',
    look:'Den Blick vom Südufer über die Brücke direkt auf die Kuppel von Saint Paul’s.' },

  { id:'horseguards', name:'Horse Guards', wiki:'Horse Guards (Gebäude)', ll:[51.5048,-0.1270], dwell:8,
    teaser:'Berittene Wachen in Whitehall und eine Uhr mit einem dunklen Fleck.',
    story:[
      'Vor dir steht Horse Guards, gebaut zwischen 1750 und 1759 nach Plänen von William Kent. Lange war hier das Hauptquartier der britischen Armee, heute sitzt hier die Führung der Household Division, der Garde des Monarchen. Der große Platz dahinter, die Horse Guards Parade, war einst der Turnierplatz des Palace of Whitehall. Dieser riesige Königspalast brannte 1698 fast vollständig ab.',
      'Am Tor zur Straße Whitehall halten tagsüber zwei Reiter der Household Cavalry Wache, hoch zu Ross und fast regungslos. Die Reiter mit roten Röcken gehören zu den Life Guards, die mit blauen zu den Blues and Royals. Abgelöst werden sie jede Stunde. Halte bitte etwas Abstand zu den Pferden, ein Schild warnt sogar davor, dass sie treten oder beißen können.',
      'Einmal im Jahr, im Juni, wird die Horse Guards Parade zur großen Bühne. Bei Trooping the Colour, der offiziellen Geburtstagsparade für den Monarchen, marschieren hier Hunderte Soldaten mit Pferden und Musikkapellen auf. Die Zeremonie beginnt, sobald die Uhr von Horse Guards elf schlägt. Bei den Olympischen Spielen 2012 wurde auf dem Platz übrigens Beachvolleyball gespielt.'],
    fact:'Auf dem Zifferblatt der Uhr ist über der Zwei ein dunkler Fleck. Er soll an die Stunde erinnern, in der König Karl der Erste 1649 gegenüber vor dem Banqueting House hingerichtet wurde.',
    look:'Den Torbogen in der Mitte. Ohne besonderen Ausweis darf nur der Monarch selbst hier hindurchfahren.' },

  { id:'leadenhall', name:'Leadenhall Market', wiki:'Leadenhall Market', ll:[51.5128,-0.0836], dwell:8,
    teaser:'Viktorianische Markthalle über dem Herzen des römischen London.',
    story:[
      'Leadenhall Market liegt mitten in der City of London, dem Finanzviertel, und doch fühlst du dich hier in eine andere Zeit versetzt. Unter deinen Füßen lag einmal das Zentrum des römischen Londinium. Hier stand ein riesiges Forum mit einer Basilika, die als größte nördlich der Alpen gilt. Ein Pfeiler davon ist bis heute im Keller eines Hauses an der Gracechurch Street erhalten.',
      'Einen Markt gibt es hier seit dem 14. Jahrhundert, damals vor allem für Fleisch, Geflügel und Wild. Anfang des 15. Jahrhunderts erwarb Richard Whittington das Gelände und übergab es der Stadt. Whittington ist in England eine Märchenfigur: Der Sage nach kam er als armer Junge nach London und wurde dank seiner Katze reich. Der echte Whittington war tatsächlich mehrmals Lord Mayor, also Bürgermeister der City, die Geschichte mit der Katze ist aber eine Legende.',
      'Die prächtige Halle aus Schmiedeeisen und Glas, die du heute siehst, entwarf 1881 der Stadtarchitekt Horace Jones. Derselbe Mann lieferte übrigens auch den Entwurf für die Tower Bridge. Mit ihren bunten Farben, den Glasdächern und den alten Pubs ist der Markt mittags ein beliebter Treffpunkt für die Leute aus den Büros ringsum. Die Halle steht heute unter Denkmalschutz.'],
    fact:'In Harry Potter und der Stein der Weisen spielte der Markt die Gegend rund um den Tropfenden Kessel, den Eingang zur Winkelgasse.',
    look:'Das Glasdach über der Kreuzung in der Mitte der Halle. Schau mal nach oben, wie fein die Eisenträger verziert sind.' },

  { id:'stjamespark', name:'St James’s Park', wiki:'St. James’s Park', ll:[51.5025,-0.1340], dwell:12,
    teaser:'Ein königlicher Park mit Pelikanen und Postkartenblick auf den Palast.',
    story:[
      'Hier war einmal sumpfiges Wiesenland. 1532 kaufte Heinrich der Achte das Gelände und machte daraus ein eingezäuntes Wildgehege für die Jagd. Gleich daneben ließ er den Saint James’s Palace bauen, zunächst als Jagdschloss. Jakob der Erste ließ den Park später trockenlegen und hielt hier exotische Tiere, darunter Kamele, Krokodile und sogar einen Elefanten. Heute ist der Park rund 23 Hektar groß und eine grüne Oase zwischen Palast und Regierungsviertel.',
      'Nach seinem Exil in Frankreich gestaltete König Karl der Zweite den Park streng und geometrisch um, mit einem langen, schnurgeraden Kanal, und öffnete ihn für die Öffentlichkeit. Seine heutige Form verdankt der Park dem Architekten John Nash. In den Jahren 1826 und 1827 machte er aus dem Kanal einen natürlich geschwungenen See, mit Inseln, gewundenen Wegen und Baumgruppen, ganz im Stil eines englischen Landschaftsgartens.',
      'Berühmt sind die Pelikane des Parks. Die ersten bekam Karl der Zweite 1664 als Geschenk vom russischen Botschafter, und bis heute leben hier Pelikane. Dazu kommen viele Enten, Gänse und Schwäne. Auf Duck Island, einer der beiden Inseln im See, steht übrigens die Technik, die das Wasser für den See und die Brunnen umwälzt und reinigt.'],
    fact:'Von der blauen Brücke über den See hast du zwei Postkartenblicke auf einmal: nach Westen auf den Buckingham Palace und nach Osten auf Horse Guards und die Türmchen von Whitehall.',
    look:'Halte am Ufer Ausschau nach den Pelikanen. Mit ihren riesigen Schnäbeln sind sie kaum zu übersehen.' },
  ],

  /* „Schöne Wege“: Parks, Ufer, Gassen – ohne Ansage, nur damit die Route dort entlangführt */
  scenic:[
    {id:'stjames_see',        name:'St James’s Park',            ll:[51.5027,-0.1340], weight:1.5},
    {id:'queens_walk',        name:'Queen’s Walk an der South Bank', ll:[51.5068,-0.1160], weight:1.5},
    {id:'embankment_gardens', name:'Victoria Embankment Gardens', ll:[51.5083,-0.1225], weight:1.3},
    {id:'bankside_ufer',      name:'Uferweg Bankside',           ll:[51.5084,-0.0990], weight:1.4},
    {id:'queens_walk_ost',    name:'Queen’s Walk an der Tower Bridge', ll:[51.5050,-0.0795], weight:1.4},
    {id:'tower_wharf',        name:'Uferweg am Tower',           ll:[51.5067,-0.0775], weight:1.3},
  ],
  wayside:[
    { id:'downing', name:'Downing Street', wiki:'Downing Street', ll:[51.5035,-0.1266],
      text:'Hinter dem schwarzen Gittertor liegt die Downing Street. Das Haus mit der Nummer 10 ist der Amtssitz des britischen Premierministers. Die schwarze Haustür hat übrigens kein Schlüsselloch, es ist immer jemand drinnen, der öffnet. Und die Ziegel sind eigentlich gelb, sie wurden nur schwarz gestrichen.' },
    { id:'banqueting', name:'Banqueting House', wiki:'Banqueting House', ll:[51.5044,-0.1258],
      text:'Das Banqueting House, gebaut ab 1619 von Inigo Jones, ist der einzige große Rest des Palace of Whitehall. Innen hat Peter Paul Rubens die Decke bemalt. Und vor diesem Gebäude wurde am 30. Januar 1649 König Karl der Erste hingerichtet. Vermutlich stieg er durch ein Fenster hinaus auf das Schafott.' },
    { id:'churchill', name:'Churchill-Statue', ll:[51.5009,-0.1265],
      text:'Auf dem Parliament Square steht Winston Churchill in Bronze und blickt zum Parlament. Schon in den Fünfzigerjahren soll er auf diese Ecke des Platzes gezeigt und gesagt haben, hier komme einmal seine Statue hin. Enthüllt wurde sie 1973 von seiner Witwe Clementine.' },
    { id:'victoriamemorial', name:'Victoria Memorial', wiki:'Victoria Memorial (London)', ll:[51.5018,-0.1407],
      text:'Das Victoria Memorial vor dem Buckingham Palace wurde 1911 enthüllt. Königin Victoria sitzt auf ihrem Thron und blickt die Prachtstraße The Mall hinunter. Ganz oben glänzt eine vergoldete Siegesgöttin mit Flügeln.' },
    { id:'admiralty', name:'Admiralty Arch', wiki:'Admiralty Arch', ll:[51.5068,-0.1287],
      text:'Der Admiralty Arch trennt den Trafalgar Square von der Prachtstraße The Mall. König Eduard der Siebte gab ihn zur Erinnerung an seine Mutter Victoria in Auftrag. Das mittlere Tor öffnet sich nur für königliche Prozessionen. Und im nördlichen Bogen steckt in gut zwei Metern Höhe eine kleine Nase in der Wand, ein Kunstwerk von 1997.' },
    { id:'monument', name:'The Monument', wiki:'Monument (London)', ll:[51.5101,-0.0860],
      text:'Das Monument erinnert an den Großen Brand von 1666. Die Säule ist gut 61 Meter hoch, genau so weit soll sie von der Bäckerei in der Pudding Lane entfernt stehen, in der das Feuer ausbrach. Entworfen haben sie Christopher Wren und Robert Hooke. 311 Stufen führen hinauf, und ganz oben glänzt eine vergoldete Urne mit Flammen.' },
    { id:'goldenhinde', name:'Golden Hinde', ll:[51.5074,-0.0904],
      text:'Im kleinen Dock liegt die Golden Hinde, ein Nachbau in Originalgröße des Schiffs, mit dem Francis Drake von 1577 bis 1580 die Welt umsegelte. Der Nachbau lief 1973 vom Stapel und hat selbst schon die Welt umrundet.' },
    { id:'southwark', name:'Southwark Cathedral', wiki:'Southwark Cathedral', ll:[51.5061,-0.0897],
      text:'Die Southwark Cathedral gilt als erste gotische Kirche Londons, gebaut großteils zwischen 1220 und 1420. Hier liegt Edmund, der jüngere Bruder von William Shakespeare, begraben. Und John Harvard, nach dem die berühmte amerikanische Universität benannt ist, wurde hier 1607 getauft.' },
  ],

  zones:[
    { id:'westminster_z', ll:[51.5005,-0.1265], r:200, text:'Du bist in Westminster. Hier schlägt seit fast tausend Jahren das politische Herz des Landes: Krönungskirche, Parlament und die Ministerien an der Straße Whitehall liegen dicht beieinander.' },
    { id:'stjames_z', ll:[51.5065,-0.1375], r:200, text:'Du bist im Viertel Saint James’s. Rund um den alten Saint James’s Palace liegen elegante Straßen mit traditionsreichen Herrenclubs, Hemdenmachern und Läden, die zum Teil seit Jahrhunderten bestehen.' },
    { id:'southbank_z', ll:[51.5065,-0.1150], r:250, text:'Du bist an der South Bank. Das Südufer der Themse ist heute eine lange Flaniermeile mit Kulturzentren, Bücherständen und Straßenkünstlern, und von hier hast du den schönsten Blick hinüber aufs Nordufer.' },
    { id:'bankside_z', ll:[51.5075,-0.0960], r:250, text:'Du bist in Bankside. Zu Shakespeares Zeit war das Südufer das Vergnügungsviertel Londons, mit Theatern, Wirtshäusern und Arenen für Tierhetzen. Es lag außerhalb der Gerichtsbarkeit der City, und so galten hier lockerere Regeln.' },
    { id:'city_z', ll:[51.5130,-0.0880], r:350, text:'Du bist in der City of London, der Square Mile. Hier gründeten die Römer einst Londinium. Heute ist es eines der wichtigsten Finanzzentren der Welt, mit eigenem Lord Mayor und sogar einer eigenen Polizei.' },
  ]
};
