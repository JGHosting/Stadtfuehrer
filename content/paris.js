/* Inhalte: Paris
   Koordinaten sind Näherungswerte und werden beim Start über die Wikipedia-API präzisiert.
   Änderst du Texte hier, erzeugt GitHub beim nächsten Deploy automatisch neue KI-Audios. */
(globalThis.CITY_DATA = globalThis.CITY_DATA || {}).paris = {
  id:'paris', name:'Paris', tagline:'als Lutetia schon bei Caesar erwähnt', center:[48.8575,2.3300],
  starts:[ {id:'notredame_start', name:'Notre-Dame', ll:[48.8534,2.3487]}, {id:'louvre_start', name:'Louvre', ll:[48.8610,2.3358]}, {id:'eiffelturm_start', name:'Eiffelturm', ll:[48.8578,2.2952]} ],
  /* Kategorien: „Must-See“ enthält die bekanntesten Sehenswürdigkeiten. Jede Liste ist nach Berühmtheit sortiert –
     die Tourplanung nimmt die vorderen Einträge zuerst. Ein Ort darf in mehreren Kategorien stehen. */
  categories:[
    {id:'mustsee',    label:'Must-See',              stops:['eiffelturm','louvre','notredame','arcdetriomphe','orsay','saintechapelle']},
    {id:'geschichte', label:'Könige & Revolution',   stops:['arcdetriomphe','concorde','invalides','hoteldeville','placedesvosges','pontneuf','pantheon']},
    {id:'kirchen',    label:'Kirchen & Kuppeln',     stops:['notredame','saintechapelle','invalides','pantheon']},
    {id:'kunst',      label:'Kunst & Museen',        stops:['louvre','orsay','pompidou','pontdesarts']},
    {id:'seine',      label:'Seine & Brücken',       stops:['eiffelturm','notredame','pontneuf','orsay','pontdesarts']},
    {id:'gaerten',    label:'Gärten & Plätze',       stops:['tuileries','luxembourg','concorde','placedesvosges','hoteldeville']},
  ],
  /* Begrüßung und Abschied auf Französisch */
  dialect:{hello:'Bonjour', bye:'au revoir'},
  intro:'Bonjour und herzlich willkommen in Paris! Ihren Namen verdankt die Stadt dem keltischen Stamm der Parisii, und schon Julius Caesar erwähnte die Siedlung an der Seine, die die Römer Lutetia nannten. Aus ihr wurde eine Weltstadt mit Kathedralen, Königspalästen und dem wohl berühmtesten Eisenturm der Welt. Unsere Runde folgt der Seine, vom Eiffelturm bis hinüber ins Marais, und Paris entdeckt man am schönsten genau so: zu Fuß und mit vielen kleinen Pausen.',
  stops:[
  { id:'eiffelturm', name:'Eiffelturm', wiki:'Eiffelturm', ll:[48.8583,2.2945], dwell:20,
    teaser:'Gebaut für zwanzig Jahre, geblieben für immer.',
    story:[
      'Vor dir steht die eiserne Dame, wie die Pariser sie gern nennen. Gebaut wurde sie von 1887 bis 1889 für die Weltausstellung, eingeweiht am 31. März 1889. Die erste Skizze stammte übrigens gar nicht von Gustave Eiffel selbst, sondern von zwei Ingenieuren seiner Firma, Maurice Koechlin und Émile Nouguier. Eiffel machte das Projekt dann zu seiner eigenen Sache. Zusammengehalten werden die rund 18.000 Einzelteile von etwa 2,5 Millionen Nieten.',
      'Geliebt wurde der Turm am Anfang überhaupt nicht. Noch während der Bauzeit veröffentlichten berühmte Künstler und Schriftsteller einen wütenden Protest gegen das Bauwerk, unter ihnen Guy de Maupassant. Eigentlich durfte Eiffel den Turm auch nur zwanzig Jahre lang betreiben. Gerettet hat ihn die Technik: Als Antennenträger für die Funktelegrafie war er für das Militär plötzlich viel zu wertvoll, und so wurde die Erlaubnis verlängert.',
      'Ganz oben ließ sich Eiffel ein kleines Arbeitszimmer einrichten. Dort empfing er im September 1889 den Erfinder Thomas Edison. Bis 1930 war der Turm das höchste Bauwerk der Welt, dann überholte ihn das Chrysler Building in New York. Heute misst er mit seinen Antennen 330 Meter. Damit er nicht rostet, wird er im Schnitt etwa alle sieben Jahre neu gestrichen, und jedes Mal gehen rund 60 Tonnen Farbe drauf.'],
    fact:'Maupassant soll später oft im Restaurant des Turms gegessen haben. Seine Begründung, so erzählt man sich: Das sei der einzige Ort in Paris, von dem aus man den Turm nicht sehen müsse.',
    look:'Die goldenen Namen am Fries der ersten Etage. Eiffel ließ dort die Namen von 72 Wissenschaftlern und Ingenieuren anbringen. Und wenn du abends hier bist: Zu jeder vollen Stunde funkelt der Turm fünf Minuten lang mit 20.000 Lichtern.' },

  { id:'louvre', name:'Louvre', wiki:'Louvre', ll:[48.8610,2.3358], dwell:15,
    teaser:'Von der Festung zum größten Kunstmuseum der Welt.',
    story:[
      'Der Louvre war zuerst gar kein Palast, sondern eine Festung. König Philipp August ließ sie um 1190 bauen, um Paris nach Westen hin zu schützen. Ihre mächtigen Grundmauern kannst du bis heute im Untergeschoss des Museums sehen. Über die Jahrhunderte machten die Könige daraus ein prächtiges Schloss. Doch 1682 zog Ludwig der Vierzehnte mit seinem Hof lieber nach Versailles, und der Louvre verlor seine Rolle als Königssitz.',
      'Am 10. August 1793, mitten in der Revolution, wurde er als Museum für alle eröffnet. Heute ist der Louvre das größte und meistbesuchte Kunstmuseum der Welt. Die meisten wollen natürlich zur Mona Lisa. Weltberühmt wurde sie aber erst 1911, als ein italienischer Handwerker namens Vincenzo Peruggia sie einfach von der Wand nahm und aus dem Museum schmuggelte. Über zwei Jahre blieb sie verschwunden, bis sie 1913 in Florenz wieder auftauchte, und da kannte sie plötzlich die ganze Welt.',
      'Und dann ist da natürlich die gläserne Pyramide im Hof. Der Architekt Ieoh Ming Pei entwarf sie als neuen Haupteingang, 1989 wurde sie fertig. Damals fanden viele Pariser die moderne Glasspitze vor dem alten Königsschloss scheußlich. Heute ist sie selbst ein Wahrzeichen und eines der meistfotografierten Motive der Stadt.'],
    fact:'Hartnäckig hält sich das Gerücht, die Pyramide habe genau 666 Glasscheiben, die Zahl des Teufels. Nach Angaben des Louvre sind es 673.',
    look:'Die Glaspyramide, gut 21 Meter hoch. Stell dich an eines der Wasserbecken, dann spiegelt sich die Pyramide darin.' },

  { id:'notredame', name:'Notre-Dame', wiki:'Notre-Dame de Paris', ll:[48.8530,2.3499], dwell:15,
    teaser:'Nach dem großen Brand strahlender als je zuvor.',
    story:[
      'Vor dir steht Notre-Dame, die Kathedrale Unserer Lieben Frau. Den Bau begann man 1163 unter Bischof Maurice de Sully, und fast zweihundert Jahre lang wurde an ihr gearbeitet. Hier krönte sich Napoleon am 2. Dezember 1804 selbst zum Kaiser, während der Papst zuschaute. Dass die Kathedrale im 19. Jahrhundert nicht verfiel, verdanken wir auch einem Roman: Victor Hugos Glöckner von Notre-Dame von 1831 machte die Menschen auf die bröckelnde Kirche aufmerksam. Danach restaurierte sie der Architekt Viollet-le-Duc und setzte ihr einen neuen, schlanken Dachreiter auf.',
      'Am Abend des 15. April 2019 sah die ganze Welt geschockt zu, wie der Dachstuhl aus Eichenholz brannte und der Dachreiter in die Flammen stürzte. Doch die beiden Türme blieben stehen, und die große Orgel überstand das Feuer. Nach fünf Jahren Arbeit wurde Notre-Dame am 7. Dezember 2024 feierlich wiedereröffnet. Der neue Dachreiter ist eine Nachbildung des alten, und auf seiner Spitze sitzt ein neuer goldener Hahn. In ihm stecken Reliquien und ein Dokument mit den Namen von fast 2.000 Menschen, die beim Wiederaufbau mitgeholfen haben.',
      'Seit September 2025 kann man auch wieder auf die Türme steigen. Es sind 424 Stufen bis auf die Plattform des Südturms in 69 Metern Höhe. Unterwegs kommst du an der großen Glocke Emmanuel vorbei, die seit 1686 hier hängt und rund 13 Tonnen wiegt. Und oben warten die Chimären, steinerne Fabelwesen, die nachdenklich über Paris blicken. Die meisten von ihnen stammen aus der Zeit von Viollet-le-Duc.'],
    fact:'Nur vier Tage vor dem Brand hatte ein Kran die sechzehn Kupferfiguren vom Fuß des Dachreiters zur Restaurierung abgeholt. So entgingen sie dem Feuer. Einer der Apostel trägt übrigens die Gesichtszüge von Viollet-le-Duc und schaut hinauf zu seinem Dachreiter.',
    look:'Das mittlere Portal der Westfassade mit dem Jüngsten Gericht. Dort wiegt der Erzengel Michael die Seelen, und ein kleiner Teufel versucht, die Waage heimlich nach unten zu ziehen.' },

  { id:'saintechapelle', name:'Sainte-Chapelle', wiki:'Sainte-Chapelle (Paris)', ll:[48.8554,2.3450], dwell:15,
    teaser:'Eine Schatztruhe aus Glas für die Dornenkrone.',
    story:[
      'Die Sainte-Chapelle versteckt sich zwischen den Mauern des Justizpalastes, und von außen ahnt man kaum, was einen drinnen erwartet. Gebaut hat sie König Ludwig der Neunte, den die Franzosen den heiligen Ludwig nennen. Er hatte vom Kaiser in Konstantinopel die Dornenkrone Christi und weitere Reliquien erworben. Für diese kostbaren Schätze wollte er einen würdigen Schrein, groß genug, um darin zu beten.',
      'Am 26. April 1248 wurde die Kapelle geweiht. Sie hat zwei Stockwerke: In der unteren Kapelle beteten die Höflinge, Diener und Soldaten des Palastes, die obere war der königlichen Familie vorbehalten. Wenn du die enge Wendeltreppe hinaufsteigst, stehst du plötzlich in einem Raum, der fast nur aus Glas zu bestehen scheint. Fünfzehn riesige Fenster erzählen in über tausend Bildfeldern die Geschichten der Bibel.',
      'In der Revolution wurde die Kapelle zweckentfremdet, unter anderem als Mehllager, und später bewahrte man hier Gerichtsakten auf. Im 19. Jahrhundert wurde sie dann aufwendig restauriert. Trotz allem ist ein großer Teil der Glasfenster noch mittelalterlich, ungefähr zwei Drittel der Bildfelder sind Originale aus der Zeit Ludwigs. Die Dornenkrone selbst liegt heute im Schatz von Notre-Dame.'],
    fact:'Für die Reliquien zahlte der König 135.000 Livres. Die ganze Kapelle samt ihren Glasfenstern kostete dagegen nur rund 40.000 Livres, also nicht einmal ein Drittel.',
    look:'Die große Rosette an der Westseite. Sie kam erst gegen Ende des 15. Jahrhunderts dazu und zeigt die Apokalypse, das Ende der Welt.' },

  { id:'arcdetriomphe', name:'Arc de Triomphe', wiki:'Arc de Triomphe de l’Étoile', ll:[48.8738,2.2950], dwell:12,
    teaser:'Napoleons Siegesbogen, durch den einmal ein Flugzeug flog.',
    story:[
      'Den Arc de Triomphe gab Napoleon 1806 in Auftrag, nach seinem Sieg bei Austerlitz. Seine Armee sollte durch einen gewaltigen Bogen heimkehren. Fertig wurde der Bau aber erst 1836, lange nach Napoleons Sturz. Für seine Hochzeit mit Marie-Louise von Österreich im Jahr 1810 ließ er deshalb ein Modell aus Holz und Stuck aufstellen. Durch den echten Bogen kam er erst nach seinem Tod: Im Dezember 1840 zog sein Trauerzug darunter hindurch.',
      'Der Bogen ist knapp 50 Meter hoch und steht in der Mitte eines Sterns aus zwölf Avenuen. Deshalb hieß der Platz früher Place de l’Étoile, Platz des Sterns, heute heißt er Place Charles de Gaulle. In den Bogen sind die Namen von 660 Militärs und von 158 Schlachten eingemeißelt. Das berühmteste Relief zeigt den Auszug der Freiwilligen von 1792, im Volksmund einfach die Marseillaise genannt.',
      'Unter dem Bogen liegt seit dem 28. Januar 1921 ein unbekannter Soldat aus dem Ersten Weltkrieg. Seit 1923 brennt auf seinem Grab eine Flamme, und jeden Abend wird sie in einer kleinen Zeremonie neu entfacht. Er steht stellvertretend für all die Gefallenen, die nie gefunden oder erkannt wurden.'],
    fact:'Am 7. August 1919 flog der Pilot Charles Godefroy mit seinem kleinen Doppeldecker mitten durch den Bogen hindurch. Eine Wochenschau hat den waghalsigen Flug gefilmt.',
    look:'Die Figurengruppe der Marseillaise an der Seite zu den Champs-Élysées. Über den Freiwilligen schwebt mit ausgebreiteten Flügeln eine Figur und ruft sie in den Kampf.' },

  { id:'orsay', name:'Musée d’Orsay', wiki:'Musée d’Orsay', ll:[48.8600,2.3266], dwell:12,
    teaser:'Ein Bahnhof voller Impressionisten.',
    story:[
      'Dieses prächtige Gebäude war ursprünglich ein Bahnhof. Der Architekt Victor Laloux baute ihn für die Weltausstellung 1900, und von hier fuhren die Züge Richtung Orléans. Doch schon nach wenigen Jahrzehnten waren die Bahnsteige zu kurz für die immer längeren Fernzüge, und 1939 war damit Schluss. Danach suchte man lange nach einer neuen Aufgabe. Orson Welles drehte hier seinen Film Der Prozess nach Franz Kafka, und zeitweise drohte sogar der Abriss.',
      'Am 1. Dezember 1986 wurde der Bahnhof dann als Museum eingeweiht. Hier hängt die Kunst aus der Zeit zwischen 1848 und 1914, also genau aus der Epoche zwischen dem Louvre und der modernen Kunst. Weltweit einzigartig ist die Sammlung der französischen Impressionisten.',
      'Du findest hier Bilder, die du garantiert schon einmal gesehen hast: Monet, Renoir, Degas, Cézanne und van Gogh. Manets Frühstück im Grünen hängt hier, das damals einen echten Skandal auslöste, weil darauf eine nackte Frau ganz selbstverständlich mit zwei angezogenen Herren picknickt. Und von Renoir der Tanz im Moulin de la Galette, ein fröhliches Sonntagsfest auf dem Montmartre.'],
    fact:'Das Museum ist aus der alten Bahnhofshalle einfach herausgewachsen. Die gewaltige Halle aus Glas und Eisen ist geblieben, nur stehen dort, wo früher die Gleise lagen, heute Skulpturen.',
    look:'Die großen Uhren an der Fassade zur Seine. Sie erinnern bis heute daran, dass hier einmal Züge pünktlich abfahren mussten.' },

  { id:'pontneuf', name:'Pont Neuf', wiki:'Pont Neuf', ll:[48.8571,2.3412], dwell:8,
    teaser:'Die neue Brücke ist die älteste von Paris.',
    story:[
      'Pont Neuf heißt neue Brücke, und doch ist sie die älteste Seinebrücke von Paris, die noch im Original steht. Den Grundstein legte König Heinrich der Dritte am 31. Mai 1578, fertig wurde sie 1607 unter Heinrich dem Vierten. Mit insgesamt zwölf Bögen springt sie in zwei Abschnitten über die Spitze der Île de la Cité, fünf Bögen auf der einen Seite, sieben auf der anderen.',
      'Die Brücke war damals eine Sensation. Auf den anderen Pariser Brücken standen dicht an dicht Häuser, auf dem Pont Neuf dagegen nicht, und so hatte man zum ersten Mal einen freien Blick auf den Fluss. Außerdem bekam sie Gehwege, die die Fußgänger vor Schlamm und Pferden schützten. Kein Wunder, dass sie sofort zum beliebtesten Treffpunkt der Stadt wurde, mit Gauklern, Händlern und Taschendieben.',
      'In der Mitte steht das Reiterstandbild von Heinrich dem Vierten. Das Original wurde in der Revolution zerstört, das heutige stammt von 1818. Für den Guss nahm man unter anderem die Bronze einer eingeschmolzenen Statue von General Desaix, einem Gefährten Napoleons. Und 1985 verhüllte das Künstlerpaar Christo und Jeanne-Claude die ganze Brücke mit Stoff.'],
    fact:'Unter dem Gesims der Brücke sitzen 381 steinerne Fratzen, die Mascarons, und keine gleicht der anderen. Einige Originale aus der Bauzeit stehen heute im Museum.',
    look:'Die grimassierenden Steingesichter unter dem Brückenrand. Am besten siehst du sie vom Ufer aus oder von einem Boot.' },

  { id:'tuileries', name:'Jardin des Tuileries', wiki:'Jardin des Tuileries', ll:[48.8635,2.3275], dwell:12,
    teaser:'Ein Königsgarten, der seit über 350 Jahren allen offensteht.',
    story:[
      'Der Name klingt edel, bedeutet aber eigentlich Ziegeleien. Hier wurden früher Dachziegel gebrannt, auf Französisch tuiles. 1564 ließ Königin Katharina von Medici an dieser Stelle einen Palast mit Garten anlegen. Ab 1664 gestaltete André Le Nôtre, der Gärtner von Versailles, den Garten völlig neu, mit schnurgeraden Alleen, Terrassen und großen Wasserbecken.',
      'Schon 1667 durfte das Volk hinein, und zwar auf Bitten von Charles Perrault. Ja, genau dem Perrault, der die Märchen vom Gestiefelten Kater und von Aschenputtel aufgeschrieben hat. Er arbeitete damals für Colbert, den Minister des Königs. Ausgeschlossen blieben anfangs nur Bettler, Lakaien und Soldaten.',
      'Den Palast selbst gibt es nicht mehr. Während der Pariser Kommune 1871 setzten Aufständische ihn in Brand, 1883 wurde die Ruine abgerissen. Seitdem öffnet sich der Blick vom Louvre über den Garten und die Place de la Concorde bis hinauf zum Arc de Triomphe. Bei den Olympischen Spielen 2024 schwebte hier übrigens die olympische Flamme, als leuchtender Ballon über dem großen Wasserbecken.'],
    fact:'In der Orangerie am Ende des Gartens hängen die riesigen Seerosenbilder von Claude Monet, in zwei ovalen Sälen mit Tageslicht.',
    look:'Die grünen Metallstühle rund um die Wasserbecken. Schnapp dir einen, lehn dich zurück und mach es wie die Pariser: einfach eine Weile in die Sonne blinzeln.' },

  { id:'concorde', name:'Place de la Concorde', wiki:'Place de la Concorde', ll:[48.8656,2.3212], dwell:8,
    teaser:'Ein uralter Obelisk an dem Ort, an dem die Guillotine stand.',
    story:[
      'Die Place de la Concorde ist der größte Platz von Paris. Angelegt wurde sie im 18. Jahrhundert für ein Reiterstandbild von König Ludwig dem Fünfzehnten, und zuerst hieß sie auch nach ihm. In der Revolution wurde die Statue gestürzt, der Platz hieß nun Place de la Révolution, und hier stand die Guillotine.',
      'Am 21. Januar 1793 wurde auf diesem Platz König Ludwig der Sechzehnte hingerichtet, am 16. Oktober desselben Jahres Königin Marie-Antoinette. In nur zweieinhalb Jahren starben hier weit über tausend Menschen. Als die Schreckenszeit vorbei war, gab man dem Platz 1795 einen versöhnlichen Namen: Concorde, das bedeutet Eintracht.',
      'In der Mitte steht der Obelisk von Luxor, ein Geschenk des ägyptischen Herrschers Muhammad Ali. Er ist über 3.000 Jahre alt, rund 23 Meter hoch und wiegt etwa 230 Tonnen. Die Hieroglyphen rühmen Pharao Ramses den Zweiten. 1836 wurde er hier aufgerichtet, genau an der Stelle, an der früher der König auf seinem Pferd stand.'],
    fact:'Der Obelisk hatte einen Zwilling, der Frankreich ebenfalls geschenkt worden war. Abgeholt wurde er nie, er steht bis heute vor dem Tempel von Luxor. 1981 verzichtete Frankreich offiziell auf ihn.',
    look:'Die goldenen Zeichnungen auf dem Sockel des Obelisken. Sie zeigen, mit welchen Maschinen man ihn transportiert und aufgerichtet hat. Und ganz oben glänzt eine goldene Spitze, die er erst 1998 bekommen hat.' },

  { id:'invalides', name:'Invalidendom', wiki:'Invalidendom', ll:[48.8550,2.3125], dwell:12,
    teaser:'Unter der goldenen Kuppel ruht Napoleon.',
    story:[
      'Den Invalidenkomplex ließ Ludwig der Vierzehnte ab 1670 bauen, als Heim für alte und verwundete Soldaten. Das war damals etwas ganz Neues, denn bis dahin landeten ausgediente Soldaten oft auf der Straße. Dazu kam die prächtige Kirche mit der großen Kuppel, entworfen von Jules Hardouin-Mansart, dem Architekten von Versailles.',
      'Die Kuppel ragt 107 Meter in den Himmel, und sie glänzt golden, weil sie mit Blattgold überzogen ist. Zuletzt wurde sie 1989 neu vergoldet, zum zweihundertsten Jahrestag der Revolution, und dafür brauchte man rund zwölf Kilogramm Gold. Heute gehört zum Komplex auch das große Armeemuseum.',
      'Der berühmteste Bewohner liegt unter der Kuppel: Napoleon. Er war 1821 in der Verbannung auf der Insel Sankt Helena gestorben. 1840 holte Frankreich seine sterblichen Überreste nach Paris zurück. In seinen gewaltigen Sarkophag aus rötlichem Quarzit wurde er aber erst 1861 umgebettet, und darin liegt er in mehreren ineinander geschachtelten Särgen.'],
    fact:'Um Napoleons Sarkophag stehen zwölf große Siegesgöttinnen. Sie erinnern an seine Feldzüge, von Italien bis Moskau.',
    look:'Schau vom Rand der offenen Krypta hinunter auf den Sarkophag. Man sagt, so müsse sich jeder Besucher ein wenig vor dem Kaiser verneigen.' },

  { id:'pantheon', name:'Panthéon', wiki:'Panthéon (Paris)', ll:[48.8462,2.3461], dwell:10,
    teaser:'Ein Dank des Vaterlandes an seine großen Männer und Frauen.',
    story:[
      'Das Panthéon begann als Kirche. König Ludwig der Fünfzehnte war 1744 in Metz schwer krank geworden und gelobte, im Fall seiner Genesung eine neue Kirche für die heilige Genoveva zu bauen, die Schutzpatronin von Paris. Der Architekt Jacques-Germain Soufflot aus Lyon entwarf einen gewaltigen Bau mit einer mächtigen Kuppel. 1764 legte der König den Grundstein.',
      'Kaum war der Bau fertig, kam die Revolution. 1791 machten die Revolutionäre aus der Kirche eine Ruhmeshalle für die großen Persönlichkeiten Frankreichs. Als einer der Ersten zog der Philosoph Voltaire ein, später kamen Jean-Jacques Rousseau, Victor Hugo und Émile Zola dazu.',
      'Lange waren hier nur Männer. Marie Curie wurde 1995 als erste Frau für ihre eigenen Verdienste im Panthéon beigesetzt, gemeinsam mit ihrem Mann Pierre. 2021 wurde auch die Tänzerin und Widerstandskämpferin Joséphine Baker aufgenommen, ihr Grab selbst blieb allerdings in Monaco.'],
    fact:'1851 bewies der Physiker Léon Foucault hier unter der Kuppel mit einem riesigen Pendel, dass sich die Erde dreht. Bis heute schwingt im Panthéon ein Foucaultsches Pendel.',
    look:'Die Inschrift im Giebel über den Säulen: Aux grands hommes la patrie reconnaissante. Auf Deutsch: Den großen Männern das dankbare Vaterland.' },

  { id:'luxembourg', name:'Jardin du Luxembourg', wiki:'Jardin du Luxembourg', ll:[48.8465,2.3372], dwell:15,
    teaser:'Der Lieblingspark der Pariser, mit Spielzeugbooten und Königinnen.',
    story:[
      'Den Jardin du Luxembourg verdanken wir einer Königin mit Heimweh. Maria von Medici, die Witwe von Heinrich dem Vierten, stammte aus Florenz. Ab 1612 ließ sie sich hier einen Palast mit Garten bauen, inspiriert vom Palazzo Pitti in ihrer Heimatstadt. Heute tagt in dem Palast der französische Senat, und der Park gehört ebenfalls zum Senat.',
      'Rund um das große Wasserbecken stehen Statuen von französischen Königinnen und berühmten Frauen. Auf dem Becken selbst lassen Kinder kleine Segelboote über das Wasser gleiten, und das schon seit Generationen. Im Puppentheater spielt seit 1933 der Guignol, der französische Kasper.',
      'Ein besonders schöner Ort ist die Fontaine Médicis, ein romantischer Grottenbrunnen am Ende eines langen, schattigen Wasserbeckens. Und ganz im Südwesten des Parks liegt ein kleiner Obstgarten, wo alte Apfel- und Birnensorten an Spalieren wachsen. Unter den Bäumen spielen Pariser Schach, und es gibt sogar eine kleine Imkerschule mit eigenen Bienenstöcken.'],
    fact:'Im Park steht eine kleine Freiheitsstatue. Sie stammt von Frédéric Auguste Bartholdi, dem Bildhauer der großen Statue in New York.',
    look:'Die grünen Metallstühle am großen Becken. Die Pariser ziehen sie sich immer genau dahin, wo gerade die Sonne scheint.' },

  { id:'pompidou', name:'Centre Pompidou', wiki:'Centre Georges-Pompidou', ll:[48.8606,2.3522], dwell:8,
    teaser:'Ein Kulturzentrum, das sein Innenleben außen trägt.',
    story:[
      'Viele Pariser hielten es anfangs für eine Raffinerie oder eine Baustelle, die jemand vergessen hat. Das Centre Pompidou trägt nämlich all das außen, was andere Gebäude verstecken: Rohre, Leitungen, Treppen und Stahlträger. Entworfen haben es die damals noch jungen Architekten Renzo Piano und Richard Rogers zusammen mit Gianfranco Franchini, die 1971 einen großen Wettbewerb gewannen. Am 31. Januar 1977 wurde es eröffnet.',
      'Die Rohre sind nach Farben sortiert: Grün steht für Wasser, Blau für die Klimaanlage, Gelb für Strom, und Rot für alles, was Menschen bewegt, also Rolltreppen und Aufzüge. Quer über die Fassade läuft eine Rolltreppe in einer Glasröhre. Hier ist eines der wichtigsten Museen für moderne Kunst in Europa zu Hause, mit Werken von Picasso, Matisse oder Kandinsky, die während der Sanierung allerdings an anderen Orten gezeigt werden.',
      'Gleich neben dem Gebäude liegt der Strawinski-Brunnen, ein verspieltes Wasserbecken mit bunten, sich drehenden Figuren von Niki de Saint Phalle und Jean Tinguely. Das Centre Pompidou selbst wird seit 2025 umfassend saniert und soll erst um 2030 wieder öffnen. Von außen lohnt sich ein Blick aber trotzdem.'],
    fact:'Benannt ist das Zentrum nach Präsident Georges Pompidou, der es in Auftrag gab. Die Eröffnung hat er nicht mehr erlebt, er starb 1974.',
    look:'Die bunten Rohre an der Rückseite in der Rue du Renard. Dort siehst du das Farbsystem am besten, sofern die Fassade gerade nicht eingerüstet ist.' },

  { id:'placedesvosges', name:'Place des Vosges', wiki:'Place des Vosges', ll:[48.8556,2.3655], dwell:10,
    teaser:'Der älteste geplante Platz von Paris, mitten im Marais.',
    story:[
      'Willkommen auf dem vielleicht schönsten Platz von Paris. König Heinrich der Vierte ließ ihn ab 1605 anlegen, damals hieß er Place Royale, Königsplatz. Ringsum stehen 36 Häuser aus rotem Ziegel und hellem Stein, alle nach demselben Muster, und unten laufen schattige Arkaden um den ganzen Platz. Heinrich selbst hat die Fertigstellung nicht mehr erlebt, er wurde 1610 ermordet. Eingeweiht wurde der Platz im April 1612 mit prächtigen Reiterspielen.',
      'An dieser Stelle stand früher ein Königsschloss, das Hôtel des Tournelles. Dort starb 1559 König Heinrich der Zweite, nachdem ihn bei einem Turnier ganz in der Nähe eine Lanze am Kopf getroffen hatte. Seine Witwe Katharina von Medici ließ das Schloss danach abreißen.',
      'Seinen heutigen Namen hat der Platz seit 1800. Man ehrte damit das Département Vosges, auf Deutsch die Vogesen, weil es als erstes seine Revolutionssteuer vollständig bezahlt hatte. In der Nummer 6 wohnte von 1832 bis 1848 Victor Hugo. Seine Wohnung ist heute ein Museum.'],
    fact:'Die beiden Häuser in der Mitte der Nordseite und der Südseite sind etwas höher als die anderen. Sie heißen Pavillon der Königin und Pavillon des Königs.',
    look:'Das Reiterstandbild von Ludwig dem Dreizehnten in der Mitte des Gartens, umgeben von Bäumen und Springbrunnen.' },

  { id:'hoteldeville', name:'Hôtel de Ville', wiki:'Hôtel de Ville (Paris)', ll:[48.8564,2.3518], dwell:8,
    teaser:'Das Rathaus, dem die Franzosen ihr Wort für Streik verdanken.',
    story:[
      'Das prächtige Gebäude vor dir sieht aus wie ein Renaissanceschloss, ist aber das Rathaus von Paris. Schon seit dem Mittelalter verwaltet sich die Stadt an dieser Stelle. Das heutige Gebäude ist allerdings jünger, als es aussieht: Im Mai 1871 setzten Aufständische der Pariser Kommune das alte Rathaus in Brand, nur die Fassade blieb übrig, und das Stadtarchiv verbrannte. Von 1874 bis 1882 wurde es im alten Stil neu aufgebaut.',
      'Der Platz davor hieß früher Place de Grève, was so viel wie Sandufer bedeutet, denn hier lief das flache Ufer zur Seine hinunter. Hier versammelten sich Arbeiter, die eine Stelle suchten, und später auch Arbeiter, die die Arbeit niederlegten. Deshalb heißt streiken auf Französisch bis heute faire grève. Weniger schön: Jahrhundertelang wurden auf dem Platz auch öffentliche Hinrichtungen vollstreckt.',
      'Im August 1944 besetzten Kämpfer der Résistance das Rathaus und hielten es gegen die deutschen Truppen. Der große Moment kam dann am 25. August 1944, am Tag der Befreiung von Paris. Charles de Gaulle hielt hier im Rathaus eine berühmte Rede vor einer jubelnden Menge: Paris gedemütigt, Paris zerbrochen, Paris gemartert, aber Paris befreit!'],
    fact:'Der Platz vor dem Rathaus trägt seit 2013 auch den Namen Esplanade de la Libération, zur Erinnerung an die Befreiung von Paris im August 1944.',
    look:'Die vielen Steinfiguren an der Fassade. Sie stellen berühmte Persönlichkeiten aus Paris dar, Künstler, Gelehrte und Politiker. Schau mal, ob du eine erkennst.' },

  { id:'pontdesarts', name:'Pont des Arts', wiki:'Pont des Arts', ll:[48.8583,2.3375], dwell:5,
    teaser:'Die Brücke der Künste und der Liebesschlösser.',
    story:[
      'Der Pont des Arts verbindet den Louvre mit dem Institut de France, dem Sitz der berühmten Académie française. Seinen Namen hat er vom Louvre, der Anfang des 19. Jahrhunderts Palais des Arts genannt wurde. Gebaut wurde die erste Brücke von 1802 bis 1804, und sie gehörte zu den ersten Eisenbrücken Frankreichs. Wer hinüberwollte, musste damals übrigens Brückenzoll bezahlen.',
      'Schiffe rammten die Brücke mehrfach, und 1979 stürzte ein großes Stück ein. Die heutige Brücke wurde deshalb von 1981 bis 1984 neu gebaut, im Stil des Originals, aber mit weniger Bögen. Bis heute gehört sie ganz den Fußgängern. An Sommerabenden sitzen hier Leute mit Wein und Baguette und schauen zu, wie die Sonne hinter den Dächern verschwindet.',
      'Berühmt wurde sie zuletzt durch die Liebesschlösser. Paare hängten Vorhängeschlösser ans Geländer und warfen den Schlüssel in die Seine. Im Juni 2014 brach ein Teil des Geländers unter dem Gewicht zusammen. Danach entfernte die Stadt die Schlösser und baute ein neues Geländer, an dem man keine mehr befestigen kann.'],
    fact:'Insgesamt sollen am Ende rund 45 Tonnen Liebesschlösser am Geländer gehangen haben, so viel wie mehrere Elefanten.',
    look:'Den Blick nach Osten auf die Spitze der Île de la Cité mit dem Pont Neuf. Einer der schönsten Ausblicke in Paris, besonders am Abend.' },
  ],

  /* „Schöne Wege“: Parks, Ufer, Gassen – ohne Ansage, nur damit die Route dort entlangführt */
  scenic:[
    {id:'rives_gauche',     name:'Uferpromenade am Musée d’Orsay',        ll:[48.8615,2.3190], weight:1.5},
    {id:'rives_droite',     name:'Uferpromenade am Hôtel de Ville',       ll:[48.8555,2.3540], weight:1.4},
    {id:'tuileries_park',   name:'Jardin des Tuileries',                  ll:[48.8634,2.3290], weight:1.5},
    {id:'luxembourg_park',  name:'Jardin du Luxembourg',                  ll:[48.8462,2.3371], weight:1.5},
    {id:'champdemars',      name:'Champ de Mars',                         ll:[48.8556,2.2986], weight:1.4},
    {id:'palaisroyal',      name:'Garten des Palais Royal',               ll:[48.8650,2.3375], weight:1.3},
    {id:'francsbourgeois',  name:'Rue des Francs-Bourgeois',              ll:[48.8575,2.3605]},
  ],
  wayside:[
    { id:'pointzero', name:'Point Zéro', ll:[48.8534,2.3488],
      text:'Schau mal auf den Boden vor Notre-Dame: Dort ist eine kleine Messingplatte mit einer Windrose eingelassen, der Point Zéro. Von hier aus werden die Straßenentfernungen von Paris gemessen. Wer sich daraufstellt, so heißt es, kehrt eines Tages nach Paris zurück.' },
    { id:'shakespeare', name:'Shakespeare and Company', wiki:'Shakespeare and Company', ll:[48.8526,2.3471],
      text:'Die Buchhandlung Shakespeare and Company, nur ein paar Schritte von Notre-Dame. George Whitman eröffnete sie 1951 und benannte sie später nach dem legendären Laden von Sylvia Beach. Bis heute dürfen junge Schreibende zwischen den Regalen übernachten, wenn sie im Laden helfen, jeden Tag ein Buch lesen und eine Seite über ihr Leben schreiben.' },
    { id:'conciergerie', name:'Conciergerie', wiki:'Conciergerie (Paris)', ll:[48.8564,2.3456],
      text:'Die Türme an der Seine gehören zur Conciergerie, einem Teil des alten Königspalastes. In der Revolution war sie ein gefürchtetes Gefängnis, hier tagte das Revolutionstribunal. Die berühmteste Gefangene war Königin Marie-Antoinette, die von hier aus 1793 zur Guillotine gebracht wurde.' },
    { id:'vertgalant', name:'Square du Vert-Galant', ll:[48.8576,2.3395],
      text:'Unten an der Spitze der Île de la Cité liegt der kleine Park Square du Vert-Galant. Der Name war der Spitzname von Heinrich dem Vierten, der für seine vielen Geliebten bekannt war. Eine Tafel in der Nähe erinnert daran, dass hier 1314 Jacques de Molay, der letzte Großmeister der Tempelritter, auf dem Scheiterhaufen starb.' },
    { id:'bouquinistes', name:'Bouquinisten', ll:[48.8550,2.3415],
      text:'Siehst du die grünen Kästen auf der Ufermauer? Das sind die Stände der Bouquinisten, der Bücherhändler an der Seine. Auf mehreren Kilometern verkaufen sie hier alte Bücher, Plakate und Postkarten, und das schon seit Jahrhunderten.' },
    { id:'tourstjacques', name:'Tour Saint-Jacques', wiki:'Tour Saint-Jacques', ll:[48.8580,2.3489],
      text:'Der einsame gotische Turm ist alles, was von der Kirche Saint-Jacques-de-la-Boucherie übrig ist. Hier sammelten sich früher Pilger auf dem Weg nach Santiago de Compostela. 1648 soll Blaise Pascal hier oben den Luftdruck gemessen haben, deshalb steht unten seine Statue.' },
    { id:'pontalexandre', name:'Pont Alexandre Trois', wiki:'Pont Alexandre III', ll:[48.8639,2.3135],
      text:'Die prunkvollste Brücke von Paris wurde für die Weltausstellung 1900 gebaut und nach dem russischen Zaren Alexander dem Dritten benannt. Sie überspannt die Seine mit einem einzigen flachen Stahlbogen, damit sie den Blick auf die Kuppel des Invalidendoms nicht verstellt.' },
    { id:'stravinsky', name:'Strawinski-Brunnen', wiki:'Strawinski-Brunnen', ll:[48.8594,2.3515],
      text:'Der Strawinski-Brunnen neben dem Centre Pompidou. Die bunten Figuren von Niki de Saint Phalle und die schwarzen Maschinen von Jean Tinguely drehen sich und spritzen Wasser, eine Hommage an den Komponisten Igor Strawinsky.' },
  ],

  zones:[
    { id:'cite', ll:[48.8545,2.3470], r:300, text:'Du bist auf der Île de la Cité, der Insel, auf der Paris begann. Hier standen jahrhundertelang der Königspalast und die Kathedrale nebeneinander.' },
    { id:'marais', ll:[48.8580,2.3610], r:350, text:'Du bist im Marais. Der Name bedeutet Sumpf, doch im 17. Jahrhundert baute sich hier der Adel prächtige Stadtpaläste. Heute ist es eines der lebendigsten Viertel von Paris, mit kleinen Läden, Galerien und dem alten jüdischen Viertel rund um die Rue des Rosiers.' },
    { id:'quartierlatin', ll:[48.8490,2.3450], r:350, text:'Du bist im Quartier Latin, dem alten Studentenviertel rund um die Sorbonne. Seinen Namen hat es von der lateinischen Sprache, in der an der Universität jahrhundertelang gelehrt und gesprochen wurde.' },
    { id:'stgermain', ll:[48.8540,2.3330], r:250, text:'Du bist in Saint-Germain-des-Prés. In den Cafés hier, im Café de Flore und bei Les Deux Magots, saßen einst Jean-Paul Sartre und Simone de Beauvoir. Bis heute ist es ein Viertel der Buchhandlungen und Galerien.' },
    { id:'champs', ll:[48.8698,2.3075], r:400, text:'Du bist auf den Champs-Élysées, der Prachtstraße zwischen der Place de la Concorde und dem Arc de Triomphe. Der Name bedeutet Elysische Felder, das Paradies der griechischen Sage. Hier enden die großen Paraden am Nationalfeiertag und meist auch die Tour de France.' },
  ]
};
