/* Inhalte: München
   Koordinaten sind Näherungswerte und werden beim Start über die Wikipedia-API präzisiert.
   Änderst du Texte hier, erzeugt GitHub beim nächsten Deploy automatisch neue KI-Audios. */
(globalThis.CITY_DATA = globalThis.CITY_DATA || {}).muenchen = {
  id:'muenchen', name:'München', tagline:'erstmals erwähnt 1158', center:[48.1374,11.5755],
  starts:[ {id:'marienplatz', name:'Marienplatz', ll:[48.1372,11.5756]}, {id:'hbf', name:'Hauptbahnhof', ll:[48.1402,11.5600]}, {id:'odeonsplatz', name:'Odeonsplatz', ll:[48.1423,11.5774]} ],
  /* Kategorien: „Must-See“ enthält die bekanntesten Sehenswürdigkeiten. Jede Liste ist nach Berühmtheit sortiert –
     die Tourplanung nimmt die vorderen Einträge zuerst. Ein Ort darf in mehreren Kategorien stehen. */
  categories:[
    {id:'mustsee',       label:'Must-See',               stops:['marienplatz','frauenkirche','viktualienmarkt','hofbraeuhaus','residenz','alterpeter']},
    {id:'geschichte',    label:'Geschichte',             stops:['feldherrnhalle','siegestor','olympiapark','isartor','bavaria','friedensengel']},
    {id:'wittelsbacher', label:'Könige & Wittelsbacher', stops:['residenz','nymphenburg','feldherrnhalle','theatiner','michaelskirche','hofgarten','glyptothek','monopteros']},
    {id:'kirchen',       label:'Kirchen',                stops:['frauenkirche','alterpeter','asamkirche','theatiner','michaelskirche']},
    {id:'kultur',        label:'Kunst & Museen',         stops:['deutschesmuseum','glyptothek','residenz','asamkirche','isartor']},
    {id:'bier',          label:'Bier & Märkte',          stops:['hofbraeuhaus','viktualienmarkt','chinaturm','bavaria']},
    {id:'natur',         label:'Natur & Isar',           stops:['eisbach','chinaturm','monopteros','olympiapark','hofgarten','friedensengel','nymphenburg']},
  ],
  /* Begrüßung und Abschied im Dialekt der Stadt */
  dialect:{hello:'Servus', bye:'pfiat di'},
  intro:'Servus und grüß Gott in München! Die Stadt ist über achthundert Jahre alt, war jahrhundertelang Residenz der Wittelsbacher und hat zu fast jeder Ecke eine Geschichte, die man sich beim Bier erzählt.',
  stops:[
  { id:'marienplatz', name:'Marienplatz und Neues Rathaus', wiki:'Neues Rathaus (München)', ll:[48.1376,11.5760], dwell:10,
    teaser:'Das Herz der Stadt, mit Ritterturnier und tanzenden Schäfflern.',
    story:[
      'Willkommen am Marienplatz, dem Herzen Münchens. Seinen Namen hat er erst seit 1854, vorher hieß er Schrannenplatz, nach dem Getreidemarkt, der hier stattfand. Die goldene Madonna auf der Mariensäule steht seit 1638 hier, zum Dank dafür, dass die Schweden im Dreißigjährigen Krieg München und Landshut nicht zerstört haben.',
      'Die neugotische Fassade hinter dir gehört zum Neuen Rathaus. Sie wirkt mittelalterlich, ist aber gerade mal gut hundert Jahre alt. Im Turm sitzt das berühmte Glockenspiel mit 43 Glocken und 32 lebensgroßen Figuren. Oben wird die Hochzeit von Herzog Wilhelm dem Fünften mit Renata von Lothringen aus dem Jahr 1568 nachgespielt, inklusive Ritterturnier, das natürlich der bayerische Ritter gewinnt.',
      'Darunter tanzen die Schäffler, die Fassmacher. Der Legende nach tanzten sie nach einer schweren Pest im Jahr 1517 durch die Straßen, um die verängstigten Menschen wieder aus ihren Häusern zu locken. Zum Schluss kräht ein kleiner goldener Hahn dreimal.'],
    fact:'Das Glockenspiel spielt täglich um 11 und um 12 Uhr, von März bis Oktober zusätzlich um 17 Uhr. Die Figuren an den vier Ecken der Mariensäule kämpfen gegen Krieg, Pest, Hunger und Ketzerei.',
    look:'Den kleinen goldenen Hahn ganz oben im Glockenspiel.' },

  { id:'frauenkirche', name:'Frauenkirche', wiki:'Frauenkirche (München)', ll:[48.1386,11.5736], dwell:12,
    teaser:'Zwei Zwiebeltürme, ein Teufelstritt und ein Baurekord.',
    story:[
      'Die Frauenkirche mit ihren zwei Türmen ist das Wahrzeichen Münchens. Baumeister Jörg von Halsbach begann 1468, schon 1488 standen die Türme. Ihre markanten Hauben bekamen sie aber erst 1525, als Renaissance-Kuppeln nach italienischem Vorbild.',
      'Gleich hinter dem Eingang siehst du im Boden einen schwarzen Fußabdruck, den Teufelstritt. Der Sage nach stand der Teufel genau dort und lachte über die Kirche, weil er von dieser Stelle aus kein einziges Fenster sah. Der Baumeister hatte die Säulen so geschickt gesetzt, dass sie die Fenster verdecken. Als der Teufel den Trick bemerkte, stampfte er vor Wut auf, und der Abdruck blieb.',
      'Die Kirche war für rund 20.000 stehende Menschen gedacht, mehr Menschen, als München damals überhaupt Einwohner hatte. In der Gruft liegt unter anderem Kaiser Ludwig der Bayer.'],
    fact:'Die beiden Türme sind fast gleich hoch, rund 98,5 Meter. Der Nordturm ist nur 12 Zentimeter höher, nicht einen ganzen Meter, wie oft behauptet wird.',
    look:'Den Teufelstritt gleich hinter dem Hauptportal. Stell dich hinein und schau, ob du ein Fenster siehst.' },

  { id:'alterpeter', name:'Alter Peter', wiki:'St. Peter (München)', ll:[48.1364,11.5758], dwell:10,
    teaser:'Die älteste Pfarrkirche der Stadt und 306 Stufen zur Aussicht.',
    story:[
      'Die Peterskirche ist die älteste erwähnte Pfarrkirche Münchens, ihre Wurzeln reichen bis zu einer Mönchssiedlung auf dem kleinen Petersbergl zurück. Die Münchner nennen ihren Turm liebevoll den Alten Peter.',
      'Im Zweiten Weltkrieg wurde die Kirche fast vollständig zerstört. Nach dem Krieg war der Abriss schon beschlossen und die Sprenglöcher waren gebohrt. Doch die Münchner retteten ihren Peter, ab 1946 wurde wieder aufgebaut.',
      'Wer fit ist, steigt die 306 Stufen hinauf zur Plattform in 56 Metern Höhe. Bei Föhn reicht der Blick über die Dächer der Altstadt bis zu den Alpen.'],
    fact:'Der Turm hat acht Zifferblätter, auf jeder Seite zwei. Karl Valentin hatte dafür eine typisch münchnerische Erklärung: Damit acht Leute gleichzeitig auf die Uhr schauen können.',
    look:'Die zwei Zifferblätter übereinander an jeder Turmseite.' },

  { id:'viktualienmarkt', name:'Viktualienmarkt', wiki:'Viktualienmarkt', ll:[48.1351,11.5763], dwell:15,
    teaser:'Münchens Bauch, mit Maibaum, Biergarten und Volkssänger-Brunnen.',
    story:[
      'Seit 1807 wird hier gehandelt. Damals ließ König Max Joseph der Erste einen Teil des Marktes vom überfüllten Marienplatz hierher verlegen. Heute verkaufen mehr als hundert Händler Obst, Käse, Blumen und Spezialitäten aus aller Welt.',
      'Im Biergarten in der Mitte gibt es eine schöne Münchner Eigenheit: Das Bier wechselt alle paar Wochen zwischen den sechs großen Münchner Brauereien. Brotzeit darfst du mitbringen, die Getränke kaufst du vor Ort.',
      'Über allem steht der weiß-blaue Maibaum, seit 1962 gestiftet von den Münchner Brauereien. Zwischen den Ständen verstecken sich Brunnen für Münchner Volkssänger und Komiker, darunter Karl Valentin und Liesl Karlstadt.'],
    fact:'Die Figur am Karl-Valentin-Brunnen wurde teilweise aus der Bronze eines Löwen gegossen, der im Zweiten Weltkrieg zerstört worden war.',
    look:'Den Karl-Valentin-Brunnen. Oft steckt jemand der Figur eine frische Blume in die Hand.' },

  { id:'asamkirche', name:'Asamkirche', wiki:'Asamkirche (München)', ll:[48.1350,11.5697], dwell:8,
    teaser:'Eine private Barockkirche, so schmal wie ein Wohnhaus.',
    story:[
      'Von außen übersieht man sie fast, sie ist kaum breiter als die Nachbarhäuser. Doch drinnen explodiert der Barock. Die Brüder Egid Quirin und Cosmas Damian Asam bauten diese Kirche ab 1733 als ihre ganz private Kapelle, ohne Auftraggeber, der ihnen reinredet.',
      'Geweiht ist sie dem heiligen Johann Nepomuk. Der Bildhauer Egid Quirin wohnte direkt nebenan und konnte durch ein Fenster seines Hauses direkt auf den Hochaltar schauen.',
      'Auf nur etwa 22 mal 8 Metern haben die Brüder alles hineingepackt, was sie konnten: Stuck, Gold, Licht und Schatten. Ein Gesamtkunstwerk auf kleinstem Raum.'],
    fact:'Der Altar liegt hier im Westen und nicht, wie in den meisten Kirchen, im Osten.',
    look:'Das Fenster im Altarbereich, durch das Egid Quirin Asam aus seinem Haus in die Kirche blicken konnte.' },

  { id:'hofbraeuhaus', name:'Hofbräuhaus', wiki:'Hofbräuhaus am Platzl', ll:[48.1376,11.5799], dwell:10,
    teaser:'Vom herzoglichen Brauhaus zum berühmtesten Wirtshaus der Welt.',
    story:[
      '1589 gründete Herzog Wilhelm der Fünfte ein eigenes Brauhaus für den Hof. Gebraut wird hier am Platzl längst nicht mehr, die Brauerei zog Ende des 19. Jahrhunderts an den Stadtrand. 1897 wurde das Gebäude zum Wirtshaus umgebaut, nach dem Zweiten Weltkrieg wurde es originalgetreu wieder aufgebaut.',
      'Das Hofbräuhaus hat auch eine dunkle Seite: Im Februar 1920 stellte die NSDAP hier im Festsaal ihr Parteiprogramm vor.',
      'Für viele Stammgäste ist das Hofbräuhaus trotzdem einfach ihr Wohnzimmer. Und wenn die Blaskapelle spielt, singt der halbe Saal mit, egal aus welchem Land die Gäste kommen.'],
    fact:'Stammgäste haben hier ihren eigenen Maßkrug, sicher verschlossen in einem von über 600 Krug-Tresoren. Ein Platz darin lässt sich nicht kaufen, er ist allein den Stammgästen vorbehalten.',
    look:'Die Wand mit den abgeschlossenen Krug-Tresoren der Stammgäste.' },

  { id:'residenz', name:'Residenz', wiki:'Residenz (München)', ll:[48.1414,11.5781], dwell:10,
    teaser:'Deutschlands größtes Innenstadtschloss und Löwen, die Glück bringen.',
    story:[
      'Über 400 Jahre lang regierten die Wittelsbacher von hier aus Bayern, als Herzöge, Kurfürsten und schließlich Könige. Herausgekommen ist das größte Innenstadtschloss Deutschlands, mit weit über hundert Prunkräumen und zehn Innenhöfen.',
      'Der älteste Teil ist das Antiquarium, ein langer Renaissance-Saal. Ursprünglich wurden hier antike Skulpturen gezeigt, später machte Herzog Wilhelm der Fünfte daraus einen Festsaal.',
      'Am Eingang an der Residenzstraße sitzen bronzene Löwen mit Schilden. Viele Münchner reiben im Vorbeigehen über die Schilde, das soll Glück bringen. Du erkennst die Stellen sofort, sie glänzen golden.'],
    fact:'Weil die Residenz über Jahrhunderte immer wieder erweitert wurde, findest du hier Renaissance, Barock, Rokoko und Klassizismus nebeneinander.',
    look:'Die blank geriebenen Stellen an den Schilden der Löwen.' },

  { id:'feldherrnhalle', name:'Feldherrnhalle', wiki:'Feldherrnhalle', ll:[48.1420,11.5772], dwell:8,
    teaser:'Florenz in München und eine Gasse für Drückeberger.',
    story:[
      'König Ludwig der Erste wollte ein Stück Italien in München. Friedrich von Gärtner baute ihm deshalb 1841 bis 1844 diese Halle nach dem Vorbild der Loggia dei Lanzi in Florenz. Sie ehrt das bayerische Heer, mit Statuen der Feldherren Tilly und Wrede.',
      'Am 9. November 1923 endete hier Hitlers Putschversuch im Feuer der bayerischen Landespolizei. Nach 1933 machten die Nationalsozialisten die Halle zur Gedenkstätte, und wer vorbeiging, musste den Hitlergruß zeigen.',
      'Viele Münchner wichen deshalb hinten herum durch die kleine Viscardigasse aus. Im Volksmund hieß sie bald Drückebergergasse. Heute erinnert eine bronzene Spur im Pflaster an diesen stillen Widerstand.'],
    fact:'Die beiden Marmorlöwen auf der Treppe kamen erst 1906 dazu. Der Bildhauer Wilhelm von Rümann soll dafür einen echten Löwen aus dem Tierpark als Modell genommen haben.',
    look:'Die geschwungene bronzene Spur im Pflaster der Viscardigasse hinter der Halle.' },

  { id:'theatiner', name:'Theatinerkirche', wiki:'Theatinerkirche', ll:[48.1424,11.5767], dwell:8,
    teaser:'Ein Dankeschön in Gelb für einen Thronfolger.',
    story:[
      'Kurfürst Ferdinand Maria und seine Frau Henriette Adelaide von Savoyen warteten lange auf einen Erben. Als 1662 endlich Max Emanuel zur Welt kam, stifteten sie aus Dankbarkeit diese Kirche.',
      'Gebaut wurde ab 1663 von italienischen Baumeistern. Mit ihrem warmen Gelb und der Kuppel bringt sie seitdem ein Stück Italien an den Odeonsplatz. Die Rokoko-Fassade kam erst gut hundert Jahre später dazu, von François de Cuvilliés.',
      'In der Fürstengruft liegen viele Wittelsbacher, darunter die Stifter selbst und der Sohn, dem die Kirche ihr Dasein verdankt.'],
    fact:'Die Theatinerkirche gilt als erste Kirche im Stil des italienischen Hochbarocks in Altbayern.',
    look:'Die Farbe der Fassade am Nachmittag, wenn die Sonne darauf fällt.' },

  { id:'hofgarten', name:'Hofgarten', wiki:'Hofgarten (München)', ll:[48.1428,11.5800], dwell:8,
    teaser:'Der Schlossgarten der Residenz, mitten in der Stadt.',
    story:[
      'Der Hofgarten war der Garten der Residenz. Heute ist er ein ruhiger Ort mitten in der Stadt, mit Kieswegen, Brunnen und Linden.',
      'In der Mitte steht der Dianatempel, ein offener Pavillon mit Kuppel. Oft spielen dort Straßenmusiker, weil der Klang unter der Kuppel so schön ist.',
      'An den Arkaden entlang kommst du direkt zur Residenz und zum Englischen Garten.'],
    fact:'Der Dianatempel in der Mitte stammt aus dem frühen 17. Jahrhundert. Ganz oben auf der Kuppel steht eine Bronzefigur der Tellus Bavarica, eine frühe Verkörperung Bayerns.',
    look:'Stell dich unter die Kuppel des Dianatempels und sag etwas. Hör, wie es klingt.' },

  { id:'eisbach', name:'Eisbachwelle', wiki:'Eisbachwelle', ll:[48.1435,11.5877], dwell:10,
    teaser:'Surfen mitten in der Großstadt.',
    story:[
      'Mitten in München, Hunderte Kilometer vom nächsten Meer entfernt, stehen Menschen mit Surfbrettern Schlange. Die stehende Welle im Eisbach entstand in den 1970er Jahren durch Einbauten im Bach, und seitdem wird hier gesurft.',
      'Lange war das Surfen eine Grauzone. Seit 2010 kümmert sich die Stadt um den Spot und hat klare Regeln aufgestellt: Nur erfahrene Surfer dürfen ins Wasser, eine Leine ist Pflicht und ab 22 Uhr ist Schluss.',
      'Von der Brücke aus kannst du in Ruhe zuschauen, wie die Surfer nacheinander in die Welle springen.'],
    fact:'Die Welle liegt am Südrand des Englischen Gartens, direkt beim Haus der Kunst.',
    look:'Wie die Surfer sich am Ufer anstellen und abwechseln.' },

  { id:'chinaturm', name:'Chinesischer Turm', wiki:'Chinesischer Turm (München)', ll:[48.1527,11.5921], dwell:15,
    teaser:'Pagode im Park und einer der größten Biergärten der Stadt.',
    story:[
      'Der Englische Garten entstand ab 1789 auf Anregung von Benjamin Thompson, später Graf Rumford. Mit 3,7 Quadratkilometern gehört er zu den größten Stadtparks der Welt.',
      'Der Chinesische Turm wurde schon 1789 und 1790 gebaut, als China in Europa gerade schwer in Mode war. Die hölzerne Pagode ist 25 Meter hoch.',
      'Rund um den Turm liegt einer der größten Biergärten Münchens mit 7.000 Plätzen. Bei schönem Wetter spielt oben im Turm manchmal eine Blaskapelle.'],
    fact:'Der Turm brannte im Zweiten Weltkrieg ab und wurde danach originalgetreu wieder aufgebaut.',
    look:'Die Musikerempore im ersten Stock des Turms.' },

  { id:'monopteros', name:'Monopteros', wiki:'Monopteros (München)', ll:[48.1494,11.5888], dwell:8,
    teaser:'Ein griechischer Tempel mit Blick auf die Türme der Altstadt.',
    story:[
      'Auf einem künstlich aufgeschütteten Hügel steht ein kleiner Rundtempel im griechischen Stil. Entworfen hat ihn Leo von Klenze, der Lieblingsarchitekt König Ludwigs des Ersten, fertig war er 1836.',
      'Von hier oben hast du einen der schönsten Blicke über die Wiesen des Englischen Gartens hinüber zu den Türmen der Altstadt.',
      'Besonders bei Sonnenuntergang sitzen hier viele Münchner auf den Stufen.'],
    fact:'Der Hügel ist nicht natürlich, er wurde extra für den Tempel aufgeschüttet.',
    look:'Die Türme der Frauenkirche am Horizont.' },

  { id:'siegestor', name:'Siegestor', wiki:'Siegestor', ll:[48.1524,11.5820], dwell:5,
    teaser:'Ein Triumphbogen mit einer Botschaft an die Zukunft.',
    story:[
      'Das Siegestor bildet den Abschluss der Ludwigstraße. Friedrich von Gärtner entwarf es nach dem Vorbild des Konstantinsbogens in Rom, fertig wurde es 1850, nach seinem Tod. Oben thront die Bavaria auf einem Wagen, der von vier Löwen gezogen wird.',
      'Gewidmet war es ursprünglich dem bayerischen Heer. Im Zweiten Weltkrieg wurde es schwer beschädigt.',
      'Beim Wiederaufbau ließ man die Schäden auf der Südseite bewusst sichtbar und setzte eine neue Inschrift darauf: Dem Sieg geweiht, vom Krieg zerstört, zum Frieden mahnend.'],
    fact:'Die restaurierte Quadriga kam erst 1972 wieder auf das Tor zurück, im Jahr der Olympischen Spiele.',
    look:'Die Inschrift auf der Südseite, Richtung Innenstadt.' },

  { id:'glyptothek', name:'Königsplatz und Glyptothek', wiki:'Glyptothek', ll:[48.1462,11.5658], dwell:10,
    teaser:'Ludwigs Griechenland-Traum mitten in München.',
    story:[
      'König Ludwig der Erste schwärmte für die Antike. Leo von Klenze gestaltete ihm deshalb den Königsplatz wie ein antikes Forum, mit Säulen, Tempelfronten und viel Raum.',
      'Die Glyptothek wurde von 1816 bis 1830 gebaut, um Ludwigs Sammlung griechischer und römischer Skulpturen zu zeigen. Sie ist das älteste öffentliche Museum Münchens.',
      'Zu den Stars gehört der Barberinische Faun, ein schlafender Satyr aus der Zeit um 220 vor Christus, und die Giebelfiguren vom Tempel auf der Insel Ägina.'],
    fact:'Die Glyptothek war eines der ersten Museen überhaupt, die nur für antike Skulpturen gebaut wurden.',
    look:'Die Tempelfront der Glyptothek auf der Nordseite des Platzes.' },

  { id:'michaelskirche', name:'St. Michael', wiki:'St. Michael (München)', ll:[48.1389,11.5703], dwell:10,
    teaser:'Ein riesiges Gewölbe und das Grab von König Ludwig dem Zweiten.',
    story:[
      'Herzog Wilhelm der Fünfte ließ die Jesuitenkirche St. Michael von 1583 bis 1597 bauen. Sie gilt als größte Renaissancekirche nördlich der Alpen.',
      'Schau nach oben: Das Tonnengewölbe überspannt 20 Meter, ganz ohne Stützen. Für die damalige Zeit war das eine technische Sensation.',
      'In der Fürstengruft unter der Kirche liegt König Ludwig der Zweite, der Märchenkönig von Neuschwanstein. Sein Herz allerdings ist nicht hier, es wurde nach Altötting gebracht.'],
    fact:'An der Fassade kämpft der Erzengel Michael gegen das Böse. In Augsburg begegnet dir dasselbe Motiv am Zeughaus.',
    look:'Den Erzengel Michael zwischen den beiden Portalen.' },

  { id:'isartor', name:'Isartor', wiki:'Isartor', ll:[48.1353,11.5822], dwell:5,
    teaser:'Ein mittelalterliches Stadttor mit einem Museum für Karl Valentin.',
    story:[
      'Das Isartor ist eines der erhaltenen Tore der mittelalterlichen Stadtmauer. Durch dieses Tor kamen früher Händler und Reisende von der Isar her in die Stadt.',
      'Heute ist im Turm das Valentin-Karlstadt-Musäum untergebracht, ja, mit ä geschrieben. Es ist dem Komiker Karl Valentin und seiner Partnerin Liesl Karlstadt gewidmet.',
      'Karl Valentins schräger Humor gehört zu München wie die Weißwurst.'],
    fact:'Das Museum schreibt sich absichtlich Musäum, ganz im Sinne von Karl Valentin.',
    look:'Das Wandbild an der Torseite.' },

  { id:'deutschesmuseum', name:'Deutsches Museum', wiki:'Deutsches Museum', ll:[48.1299,11.5834], dwell:10,
    teaser:'Eines der größten Technikmuseen der Welt, auf einer Insel.',
    story:[
      'Oskar von Miller gründete das Deutsche Museum 1903. Der große Bau auf der Museumsinsel in der Isar wurde 1925 eröffnet, an Millers 70. Geburtstag.',
      'Heute gilt es als eines der größten Museen für Naturwissenschaft und Technik der Welt. Die Sammlung umfasst über hunderttausend Objekte, rund fünfundzwanzigtausend davon sind ausgestellt.',
      'Du findest hier alles, vom Flugzeug bis zur Raumkapsel. Ein ganzer Tag reicht kaum.'],
    fact:'Jedes Jahr kommen rund anderthalb Millionen Besucher.',
    look:'Den Turm des Museums, der weit über die Isar zu sehen ist.' },

  { id:'olympiapark', name:'Olympiapark', wiki:'Olympiapark (München)', ll:[48.1731,11.5466], dwell:15,
    teaser:'Ein Zeltdach, das die Architektur verändert hat.',
    story:[
      'Für die Olympischen Spiele 1972 entstand hier auf dem ehemaligen Flugfeld Oberwiesenfeld ein ganzer Park. Das berühmte Zeltdach aus Seilnetzen und Acrylglas entwarfen Frei Otto und Günter Behnisch. Es sollte leicht und offen wirken, das Gegenbild zu den Spielen von 1936.',
      'Der Olympiaturm ist gut 291 Meter hoch. Er wird gerade saniert, die Aussichtsplattform ist deshalb vorübergehend geschlossen. Danach siehst du von oben bei klarer Sicht wieder bis zu den Alpen.',
      'Die Spiele von 1972 wurden vom Attentat auf die israelische Mannschaft überschattet. Ein Erinnerungsort im Park gedenkt der Opfer.'],
    fact:'Der Olympiaberg ist ein Trümmerberg: Nach dem Zweiten Weltkrieg wurden hier Trümmer der zerstörten Stadt aufgeschüttet.',
    look:'Wie das Zeltdach scheinbar schwerelos über dem Stadion schwebt.' },

  { id:'nymphenburg', name:'Schloss Nymphenburg', wiki:'Schloss Nymphenburg', ll:[48.1583,11.5033], dwell:15,
    teaser:'Ein Sommerschloss als Geburtsgeschenk und Geburtsort des Märchenkönigs.',
    story:[
      'Auch Schloss Nymphenburg verdankt seine Existenz der Geburt von Max Emanuel 1662. Ab 1664 entstand hier eine Sommerresidenz für die Kurfürstenfamilie, später wurde sie zu dieser riesigen Anlage ausgebaut.',
      'Am 25. August 1845 kam hier König Ludwig der Zweite zur Welt, der spätere Bauherr von Neuschwanstein.',
      'Der Schlosspark mit Kanälen und kleinen Parkschlössern ist perfekt für eine Radpause.'],
    fact:'Die Theatinerkirche am Odeonsplatz und dieses Schloss haben denselben Anlass: die lang ersehnte Geburt des Thronfolgers Max Emanuel.',
    look:'Den langen Kanal vor dem Schloss mit den Schwänen.' },

  { id:'friedensengel', name:'Friedensengel', wiki:'Friedensengel (München)', ll:[48.1414,11.5970], dwell:6,
    teaser:'Ein goldener Engel hoch über der Isar.',
    story:[
      'Hoch über dem Isarhochufer steht auf einer Säule ein vergoldeter Engel. Das Denkmal entstand Ende des 19. Jahrhunderts und erinnert an die Friedensjahre nach dem Krieg von 1870 und 1871.',
      'Von der Terrasse blickst du die Prinzregentenstraße entlang bis in die Stadt.',
      'Im Sommer sitzen hier abends viele Münchner auf den Stufen.'],
    fact:'Errichtet wurde der Friedensengel zwischen 1896 und 1899, zum 25. Jahrestag des Friedens nach dem Krieg von 1870 und 1871.',
    look:'Den Blick vom Engel die Prinzregentenstraße hinunter.' },

  { id:'bavaria', name:'Bavaria und Theresienwiese', wiki:'Bavaria (Statue)', ll:[48.1306,11.5446], dwell:10,
    teaser:'Eine Riesin aus Bronze und der Platz des Oktoberfests.',
    story:[
      'Über der Theresienwiese wacht die Bavaria, fast 19 Meter hoch. Ludwig von Schwanthaler entwarf sie im Auftrag von König Ludwig dem Ersten, 1850 wurde sie enthüllt.',
      'Unten liegt die Theresienwiese. Sie ist nach Prinzessin Therese benannt: Zu ihrer Hochzeit mit Kronprinz Ludwig fand 1810 ein großes Pferderennen statt, aus dem das Oktoberfest wurde.',
      'Außerhalb der Wiesn-Zeit ist die Theresienwiese eine riesige, fast leere Fläche. Kaum vorstellbar, dass hier jeden Herbst Millionen Menschen feiern.'],
    fact:'Die Bavaria ist innen hohl und begehbar. Von Frühling bis Herbst kannst du über eine enge Wendeltreppe bis in ihren Kopf steigen.',
    look:'Die kleinen Öffnungen im Kopf der Bavaria, durch die man von innen hinausschauen kann.' },
  ],

  /* Schöne Wege: Parks, Gassen, Ufer. Die Route führt bevorzugt hier entlang (ohne Ansage). */
  scenic:[
    {id:'eg_eisbach',     name:'Englischer Garten am Eisbach', ll:[48.1458,11.5872]},
    {id:'eg_schoenfeld',  name:'Schönfeldwiese',               ll:[48.1488,11.5860], weight:1.5},
    {id:'eg_mitte',       name:'Englischer Garten Mitte',      ll:[48.1505,11.5905], weight:1.5},
    {id:'hofgarten_ark',  name:'Hofgarten-Arkaden',            ll:[48.1426,11.5787], weight:1.5},
    {id:'fuenfhoefe',     name:'Fünf Höfe',                    ll:[48.1404,11.5757]},
    {id:'altbotgarten',   name:'Alter Botanischer Garten',     ll:[48.1423,11.5666]},
    {id:'isar_prater',    name:'Isarufer an der Praterinsel',  ll:[48.1388,11.5893], weight:1.4},
    {id:'maxanlagen',     name:'Maximiliansanlagen',           ll:[48.1405,11.5955]},
    {id:'sendlinger',     name:'Sendlinger Straße',            ll:[48.1356,11.5710]},
  ],
  wayside:[
    { id:'fischbrunnen', name:'Fischbrunnen', wiki:'Fischbrunnen (München)', ll:[48.1372,11.5753],
      text:'Der Fischbrunnen am Marienplatz. Hier gibt es einen schönen Brauch: Am Aschermittwoch waschen der Oberbürgermeister und viele Münchner ihre Geldbeutel im Brunnen. Das soll dafür sorgen, dass sie nie leer werden.' },
    { id:'julia', name:'Julia-Statue', ll:[48.1362,11.5770],
      text:'Die Bronzefigur der Julia, aus Romeo und Julia, ist ein Geschenk der Partnerstadt Verona aus dem Jahr 1974. Das Original steht in Verona am Haus der Julia.' },
    { id:'valentinbrunnen', name:'Karl-Valentin-Brunnen', ll:[48.1352,11.5759],
      text:'Der Brunnen für Karl Valentin, den großen Münchner Komiker. Er sagte einmal sinngemäß: Kunst ist schön, macht aber viel Arbeit.' },
    { id:'maibaum', name:'Maibaum am Viktualienmarkt', ll:[48.1349,11.5768],
      text:'Der weiß-blaue Maibaum am Viktualienmarkt. Die Schilder an seinen Seiten zeigen Münchner Handwerke und Zünfte. Seit 1962 stiften ihn die Münchner Brauereien.' },
    { id:'wurmeck', name:'Wurmeck', ll:[48.1378,11.5751],
      text:'Schau mal an die Ecke des Neuen Rathauses zur Weinstraße: Dort windet sich ein steinerner Lindwurm. Der Sage nach brachte so ein Drache einst die Pest nach München.' },
    { id:'alterhof', name:'Alter Hof', wiki:'Alter Hof', ll:[48.1384,11.5781],
      text:'Der Alte Hof war die erste Burg der Wittelsbacher in München, lange bevor die Residenz entstand. Hier residierte auch Kaiser Ludwig der Bayer.' },
    { id:'drueckeberger', name:'Viscardigasse', wiki:'Viscardigasse', ll:[48.1416,11.5765],
      text:'Die Viscardigasse, im Volksmund Drückebergergasse. Hier wichen Münchner in der NS-Zeit aus, um an der Feldherrnhalle nicht den Hitlergruß zeigen zu müssen. Die bronzene Spur im Pflaster erinnert daran.' },
    { id:'nationaltheater', name:'Nationaltheater', wiki:'Nationaltheater München', ll:[48.1394,11.5788],
      text:'Das Nationaltheater am Max-Joseph-Platz ist das Haus der Bayerischen Staatsoper. Mit seinen Säulen sieht es aus wie ein griechischer Tempel.' },
    { id:'karlstor', name:'Karlstor', wiki:'Karlstor (München)', ll:[48.1391,11.5662],
      text:'Das Karlstor am Stachus, eines der alten Stadttore. Der Platz davor heißt offiziell Karlsplatz, aber kein Münchner sagt so. Alle sagen Stachus.' },
  ],

  zones:[
    { id:'platzl', ll:[48.1375,11.5800], r:100, text:'Du bist am Platzl, mitten in der Altstadt. Rund um das Hofbräuhaus reiht sich ein Wirtshaus ans nächste.' },
    { id:'kunstareal', ll:[48.1475,11.5690], r:350, text:'Du bist im Kunstareal. Auf wenigen hundert Metern liegen hier die Pinakotheken, die Glyptothek und viele weitere Museen. Kaum irgendwo in Europa ist so viel Kunst so dicht beieinander.' },
    { id:'englischergarten', ll:[48.1530,11.5910], r:450, text:'Du bist im Englischen Garten, einem der größten Stadtparks der Welt. Hier kann man Stunden laufen, ohne viel von der Großstadt zu merken.' },
    { id:'ludwigstrasse', ll:[48.1480,11.5800], r:200, text:'Du bist auf der Ludwigstraße. König Ludwig der Erste ließ sie als Prachtstraße anlegen, schnurgerade vom Odeonsplatz bis zum Siegestor.' },
  ]
};
