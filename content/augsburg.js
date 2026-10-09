/* Inhalte: Augsburg  (Vorlage für jede weitere Stadt: gleiche Struktur, eigene Datei)
   Koordinaten sind Näherungswerte und werden beim Start über die Wikipedia-API präzisiert.
   Änderst du Texte hier, erzeugt GitHub beim nächsten Deploy automatisch neue KI-Audios. */
(globalThis.CITY_DATA = globalThis.CITY_DATA || {}).augsburg = {
  id:'augsburg', name:'Augsburg', tagline:'gegründet 15 v. Chr.', center:[48.3687,10.8986],
  /* Startpunkte zur Auswahl (der erste ist Standard) */
  starts:[ {id:'rathaus', name:'Rathausplatz', ll:[48.3688,10.8986]}, {id:'hbf', name:'Hauptbahnhof', ll:[48.3655,10.8857]} ],
  /* Kategorien: „Must-See“ enthält die bekanntesten Sehenswürdigkeiten. Jede Liste ist nach Berühmtheit sortiert –
     die Tourplanung nimmt die vorderen Einträge zuerst. Ein Ort darf in mehreren Kategorien stehen. */
  categories:[
    {id:'mustsee',    label:'Must-See',            stops:['fuggerei','rathaus','perlach','augustus','ulrich','dom','lechviertel']},
    {id:'geschichte', label:'Geschichte',          stops:['fuggerhaeuser','fronhof','wassertuerme','synagoge','zeughaus','stadtmauer','lueginsland']},
    {id:'fugger',     label:'Fugger & Geld',       stops:['fuggerei','fuggerhaeuser','anna','maxmuseum']},
    {id:'wasser',     label:'Wasser & UNESCO',     stops:['lechviertel','augustus','herkules','wassertuerme','maxmuseum','eiskanal','hochablass']},
    {id:'kirchen',    label:'Kirchen',             stops:['dom','ulrich','anna','synagoge']},
    {id:'kultur',     label:'Kunst & Museen',      stops:['puppenkiste','schaezler','maxmuseum','tim','brecht','mozart','glaspalast']},
    {id:'promis',     label:'Berühmte Augsburger', stops:['fuggerhaeuser','mozart','brecht','anna','schaezler']},
    {id:'natur',      label:'Natur & Aussicht',    stops:['perlach','eiskanal','botgarten','hochablass','lueginsland','fronhof']},
  ],

  /* Begrüßung und Abschied im Dialekt der Stadt */
  dialect:{hello:'Servus', bye:'servus, bis bald'},
  intro:'Servus und willkommen in Augsburg! Diese Stadt ist über zweitausend Jahre alt, war einmal eine der reichsten Städte Europas und hat mehr Geschichten auf Lager, als in eine einzige Tour passen.',
  stops:[
  { id:'rathaus', name:'Rathaus', wiki:'Augsburger Rathaus', ll:[48.3687,10.8986], dwell:10,
    teaser:'Elias Holls Meisterwerk und das Herz der Reichsstadt.',
    story:[
      'Du stehst vor einem der bedeutendsten Renaissancebauten nördlich der Alpen. Zwischen 1615 und 1620 ließ die Reichsstadt Augsburg dieses Rathaus von ihrem Stadtbaumeister Elias Holl errichten. Es war ein Statement: Seht her, wir gehören zu den reichsten Städten Europas.',
      'Schau ganz nach oben auf den Giebel. Dort sitzt eine Zirbelnuss, die Augsburger nennen sie „Stadtpyr“. Sie ist seit Jahrhunderten das Wappenzeichen der Stadt und geht auf die Römerzeit zurück. Darunter prangt der Reichsadler, denn Augsburg war freie Reichsstadt und nur dem Kaiser unterstellt.',
      'Im Februar 1944 brannte das Rathaus nach Bombenangriffen fast vollständig aus. Den berühmten Goldenen Saal hat man über viele Jahre originalgetreu rekonstruiert, seit 1996 erstrahlt er wieder vollständig. Wenn er geöffnet ist: hineingehen und an die Decke schauen.'],
    fact:'Augsburg feiert 15 vor Christus als Gründungsjahr, als römische Truppen das Alpenvorland eroberten. Die römische Stadt hieß Augusta Vindelicum, nach Kaiser Augustus. Damit gehört Augsburg zu den ältesten Städten Deutschlands.',
    look:'Die grüne Zirbelnuss ganz oben auf dem Giebel. Achte mal darauf: Sie begegnet dir in ganz Augsburg immer wieder.' },

  { id:'perlach', name:'Perlachturm', wiki:'Perlachturm', ll:[48.3690,10.8981], dwell:8,
    teaser:'70 Meter Ausblick und ein Erzengel, der einmal im Jahr zusticht.',
    story:[
      'Direkt neben dem Rathaus ragt der Perlachturm rund 70 Meter in die Höhe. Er begann im 10. Jahrhundert als Wachturm. 1614 bis 1616 stockte Elias Holl ihn kräftig auf, damit er neben seinem mächtigen neuen Rathaus nicht wie ein Zwerg aussah.',
      'Einmal im Jahr wird es hier richtig lebhaft: Am 29. September, dem Michaelstag, öffnet sich unten im Turm ein kleines Fenster. Darin sticht der Erzengel Michael bei jedem Stundenschlag mit seiner Lanze auf einen Teufel zu seinen Füßen ein. Die Augsburger nennen die Figur liebevoll „Turamichele“ und feiern drumherum ein Fest für Kinder.',
      'In der warmen Jahreszeit kannst du hinaufsteigen. Oben wartet einer der schönsten Blicke über die Dächer der Altstadt, bei Föhn sogar bis zu den Alpen.'],
    fact:'Bis zur Aussichtsplattform sind es 258 Stufen. Einen Aufzug gibt es nicht, du verdienst dir den Ausblick also ehrlich.',
    look:'Das kleine Fenster unten am Turm. Dort erscheint am Michaelstag der Turamichele.' },

  { id:'augustus', name:'Augustusbrunnen', wiki:'Augustusbrunnen', ll:[48.3684,10.8987], dwell:5,
    teaser:'Der Stadtgründer in Bronze, umgeben von vier Flussgöttern.',
    story:[
      'Der Mann auf dem Sockel ist Kaiser Augustus persönlich, der Namensgeber der Stadt. Der Bildhauer Hubert Gerhard hat den Brunnen geschaffen, 1594 war er fertig.',
      'Um den Kaiser lagern vier Flussgötter. Sie stehen für die Gewässer, die Augsburg groß gemacht haben: Lech, Wertach, Singold und Brunnenbach. Zwei der Figuren sind Männer, zwei sind Frauen.',
      'Wasser war in Augsburg nie nur Dekoration. Über Kanäle, Wasserräder und Wassertürme versorgte sich die Stadt schon im Mittelalter mit sauberem Trinkwasser. Deshalb gehören die drei großen Prachtbrunnen heute zum UNESCO-Welterbe.'],
    fact:'Die Figuren, die du hier siehst, sind Kopien. Die Originale stehen gut geschützt im Maximilianmuseum, nur ein paar Gehminuten entfernt.',
    look:'Die vier Flussgötter am Beckenrand. Achte auf die Dinge, die sie in den Händen halten.' },

  { id:'fuggerei', name:'Fuggerei', wiki:'Fuggerei', ll:[48.3694,10.9043], dwell:25,
    teaser:'Die älteste Sozialsiedlung der Welt. Miete: 88 Cent im Jahr.',
    story:[
      'Willkommen in der ältesten bestehenden Sozialsiedlung der Welt. Ab 1516 ließ Jakob Fugger, der wohl reichste Mann seiner Zeit, diese kleine Stadt in der Stadt für bedürftige Augsburger bauen, 1521 machte er sie per Stiftungsbrief dauerhaft. Das Erstaunliche: Sie funktioniert bis heute nach denselben Regeln.',
      'Die Jahreskaltmiete beträgt seit der Gründung einen rheinischen Gulden, heute umgerechnet 88 Cent. Dafür gibt es Bedingungen: Die Bewohner sprechen täglich drei Gebete für den Stifter und seine Familie, ein Vaterunser, ein Ave Maria und das Glaubensbekenntnis, und übernehmen kleine Aufgaben in der Gemeinschaft. Abends um zehn werden die fünf Tore geschlossen.',
      'Achte auf die Türen. Jeder Klingelzug hat eine andere Form. So konnten die Bewohner ihre Tür auch im Dunkeln ertasten, als es noch keine Straßenbeleuchtung gab. Heute gibt es 67 Häuser mit rund 140 Wohnungen. Für den Besuch zahlst du Eintritt, dafür siehst du eine Museumswohnung und eine Ausstellung im ehemaligen Luftschutzbunker.'],
    fact:'Ein früherer Bewohner war der Maurer Franz Mozart, der Urgroßvater von Wolfgang Amadeus Mozart. Er lebte hier von 1681 bis 1694, eine Gedenktafel erinnert an ihn.',
    look:'Die unterschiedlich geformten Klingelzüge an den Haustüren.' },

  { id:'fuggerhaeuser', name:'Fuggerhäuser', wiki:'Fuggerhäuser', ll:[48.3653,10.8996], dwell:8,
    teaser:'Hier wurde Kaiserpolitik bezahlt und Luther verhört.',
    story:[
      'Diese lange Fassade an der Maximilianstraße war das Stadtpalais der Fugger. Von hier aus lenkte Jakob Fugger ein Handels- und Bankimperium, das von Lissabon bis Ungarn reichte. Er lieh Kaisern und Päpsten Geld, und 1519 finanzierte er maßgeblich die Wahl Karls des Fünften zum Kaiser.',
      'Im Oktober 1518 fand hier ein Treffen statt, das Weltgeschichte schrieb: Martin Luther wurde vom päpstlichen Gesandten Kardinal Cajetan verhört. Luther sollte seine Thesen widerrufen. Er weigerte sich und floh kurz darauf heimlich bei Nacht aus der Stadt.',
      'Wenn das Tor offen ist, geh durch die Einfahrt in den Damenhof. Der Innenhof mit seinen Arkaden wirkt, als wärst du plötzlich in Italien. Die Fuggerhäuser gelten als einer der ersten Renaissancebauten nördlich der Alpen.'],
    fact:'Jakob Fugger erinnerte den Kaiser 1523 schriftlich daran, dass dieser die Krone ohne sein Zutun nicht bekommen hätte. Und forderte sein Geld zurück.',
    look:'Die Toreinfahrt zum Damenhof.' },

  { id:'anna', name:'St. Anna', wiki:'St. Anna (Augsburg)', ll:[48.3678,10.8946], dwell:12,
    teaser:'Fuggerkapelle, Lutherstiege und ein typisch Augsburger Paradox.',
    story:[
      'Von außen eher unscheinbar, innen eine Schatzkiste. In der Kirche liegt die Fuggerkapelle, die Grablege von Jakob Fugger und seinen Brüdern Ulrich und Georg. 1509 vereinbarten die Fugger ihren Bau mit dem Karmelitenkloster. Sie gilt als erster sakraler Renaissancebau in Deutschland.',
      'Während seines Verhörs 1518 wohnte Martin Luther im Karmelitenkloster, das damals zu St. Anna gehörte. Die Treppe, über die er gegangen sein soll, heißt heute Lutherstiege. Dort erzählt seit 1983 ein kleines Museum mit freiem Eintritt die Geschichte der Reformation in Augsburg.',
      'Und hier zeigt sich etwas typisch Augsburgisches: Die Fugger blieben streng katholisch. Ihre Grabkapelle liegt heute aber in einer evangelischen Kirche.'],
    fact:'Jakob Fugger starb 1525 ohne eigene Kinder. Firma und Vermögen übernahm sein Neffe Anton Fugger.',
    look:'Das Lutherporträt im Ostchor. Es stammt vermutlich aus der Werkstatt von Lucas Cranach.' },

  { id:'schaezler', name:'Schaezlerpalais', wiki:'Schaezlerpalais', ll:[48.3636,10.9007], dwell:10,
    teaser:'Rokoko-Ballsaal, in dem Marie Antoinette tanzte.',
    story:[
      'Hinter dieser eher schlichten Fassade versteckt sich einer der prächtigsten Rokoko-Festsäle Deutschlands. Der Bankier Benedikt Adam Liebert von Liebenhofen ließ das Palais von 1765 bis 1770 bauen, Spiegel, Stuck und Gold inklusive.',
      'Der Saal wurde gerade rechtzeitig fertig für einen ganz besonderen Gast: 1770 machte die 14-jährige Erzherzogin Marie Antoinette auf ihrer Brautreise nach Paris in Augsburg Station und tanzte bei der Einweihung des Festsaals. Wenige Jahre später war sie Königin von Frankreich. Wie das endete, weißt du.',
      'Heute ist das Palais ein Museum, seit 1970 mit der Deutschen Barockgalerie. Den Festsaal kannst du im Rahmen des Museumsbesuchs ansehen.'],
    fact:'Seinen Namen hat das Palais von der Bankiersfamilie von Schaezler, die es später übernahm.',
    look:'Die schmale Fassade an der Maximilianstraße. Kaum zu glauben, wie weit das Gebäude nach hinten reicht.' },

  { id:'herkules', name:'Herkulesbrunnen', wiki:'Herkulesbrunnen (Augsburg)', ll:[48.3639,10.9002], dwell:5,
    teaser:'Ein Held, ein Ungeheuer mit vielen Köpfen und viel Wasser.',
    story:[
      'Herkules kämpft hier mit einer flammenden Keule gegen die siebenköpfige Hydra, das Ungeheuer der griechischen Sage. Für jeden Kopf, den er abschlägt, wachsen zwei neue nach. Geschaffen hat die Figuren der Niederländer Adriaen de Vries, 1602 wurde der Brunnen am damaligen Weinmarkt aufgestellt.',
      'Er ist der jüngste der drei großen Prachtbrunnen an der Hauptachse der Altstadt. Augustus, Merkur und Herkules erzählen zusammen, worauf die Stadt stolz war: ihre römische Gründung, den Handel und die Kraft, die nötig war, um das Wasser zu bändigen.',
      'Unten am Sockel sitzen Najaden, Wassernymphen. Schau mal genau hin, woher bei ihnen das Wasser kommt. Für das Jahr 1602 ziemlich gewagt.'],
    fact:'Alle drei Prachtbrunnen sind seit 2019 Teil des UNESCO-Welterbes „Augsburger Wassermanagement-System“.',
    look:'Die Najaden am Sockel.' },

  { id:'ulrich', name:'St. Ulrich und Afra', wiki:'St. Ulrich und Afra (Augsburg)', ll:[48.3612,10.9013], dwell:12,
    teaser:'Zwei Kirchen, zwei Konfessionen, Wand an Wand.',
    story:[
      'Am südlichen Ende der Maximilianstraße steht ein Bauwerk, das Augsburgs Geschichte in sich trägt: die Basilika St. Ulrich und Afra. In ihr liegen die Gräber der beiden Stadtpatrone.',
      'Afra war der Überlieferung nach eine Christin, die um das Jahr 304 in der Verfolgung unter Kaiser Diokletian den Märtyrertod starb. Ulrich war Bischof von Augsburg und verteidigte 955 die Stadt gegen die Ungarn, kurz vor der berühmten Schlacht auf dem Lechfeld.',
      'Und jetzt das Besondere: Direkt neben der katholischen Basilika steht die kleinere evangelische Ulrichskirche, 1709 und 1710 im Barockstil aus der Vorhalle der älteren Kirche umgebaut. Zwei Konfessionen, Wand an Wand. Ein Sinnbild für das Augsburger Miteinander der Konfessionen, das mit dem Religionsfrieden von 1555 hier in der Stadt seinen Anfang nahm.'],
    fact:'Am 8. August feiert Augsburg das Hohe Friedensfest, ein gesetzlicher Feiertag, der nur im Augsburger Stadtgebiet gilt. Es erinnert daran, dass Protestanten 1629 ihre Gottesdienste verboten wurden und sie nach dem Dreißigjährigen Krieg wieder gleichberechtigt waren.',
    look:'Stell dich so hin, dass du beide Kirchen gleichzeitig siehst.' },

  { id:'dom', name:'Dom Mariä Heimsuchung', wiki:'Augsburger Dom', ll:[48.3729,10.8969], dwell:15,
    teaser:'Hier hängen die ältesten Figurenfenster der Welt.',
    story:[
      'Der Augsburger Dom ist die Bischofskirche der Stadt, und Teile von ihm sind über tausend Jahre alt. Von außen wirkt er gotisch, im Kern steckt aber eine romanische Kirche.',
      'Das Highlight siehst du nur drinnen: Hoch oben an der Südseite des Mittelschiffs hängen fünf Prophetenfenster aus der Zeit um 1100. Sie gelten als die ältesten figürlichen Glasfenster der Welt, die noch an ihrem ursprünglichen Platz sind. Jona, Daniel, Hosea, Moses und David schauen hier seit über 900 Jahren herunter.',
      'Ebenfalls aus dem 11. Jahrhundert stammt die bronzene Domtür mit Tieren, Fabelwesen und biblischen Szenen. Die Originalflügel sind heute im Diözesanmuseum direkt nebenan zu sehen.'],
    fact:'Rund um den Dom lag schon das Zentrum der römischen Stadt Augusta Vindelicum. Bei Bauarbeiten taucht hier immer wieder Römisches aus dem Boden auf.',
    look:'Die Prophetenfenster. Nimm dir einen Moment, bis sich die Augen an das Licht gewöhnt haben.' },

  { id:'fronhof', name:'Fronhof & Hofgarten', wiki:'Fronhof (Augsburg)', ll:[48.3721,10.8957], dwell:8,
    teaser:'Wo das wichtigste Bekenntnis der Lutheraner verlesen wurde.',
    story:[
      'Der Fronhof war das Machtzentrum der Augsburger Bischöfe. Das große Gebäude ist die ehemalige fürstbischöfliche Residenz, heute sitzt hier die Regierung von Schwaben.',
      'Am 25. Juni 1530 wurde hier Geschichte geschrieben: In der Kapelle der Bischofsresidenz las der sächsische Kanzler Christian Beyer vor Kaiser Karl dem Fünften und dem Reichstag die „Confessio Augustana“ vor, das Augsburger Bekenntnis. Verfasst hatte sie Philipp Melanchthon. Bis heute ist es die wichtigste Bekenntnisschrift der lutherischen Kirchen weltweit.',
      'Gleich nebenan liegt der Hofgarten, ein kleiner barocker Garten. Ideal für eine kurze Pause im Schatten.'],
    fact:'Durch das Augsburger Bekenntnis tragen lutherische Gemeinden den Namen der Stadt sozusagen um die ganze Welt.',
    look:'Die Gedenktafel am barocken Ostflügel der ehemaligen Residenz.' },

  { id:'mozart', name:'Mozarthaus', wiki:'Mozarthaus (Augsburg)', ll:[48.3762,10.8954], dwell:8,
    teaser:'Geburtshaus von Vater Mozart und die Geschichte vom „Bäsle“.',
    story:[
      'In diesem Haus wurde 1719 Leopold Mozart geboren, der Vater von Wolfgang Amadeus. Leopold ging später nach Salzburg, aber Augsburg blieb für die Familie wichtig.',
      '1756 erschien in Augsburg Leopolds „Versuch einer gründlichen Violinschule“, über Jahrzehnte eines der wichtigsten Lehrbücher für Geiger in Europa. Im selben Jahr kam übrigens Wolfgang zur Welt.',
      'Wolfgang selbst war mehrmals in Augsburg. Hier lebte seine Cousine Maria Anna Thekla, das „Bäsle“. Die Briefe, die er ihr schrieb, sind berühmt, vor allem dafür, wie albern und derb sie sind. Mozart konnte eben nicht nur Klassik.'],
    fact:'In Augsburg probierte Wolfgang die Hammerklaviere des Klavierbauers Johann Andreas Stein aus und schwärmte davon in Briefen an seinen Vater.',
    look:'Die Gedenktafel an der Fassade.' },

  { id:'brecht', name:'Brechthaus', wiki:'Brechthaus', ll:[48.3671,10.9019], dwell:6,
    teaser:'Geburtshaus eines Weltstars, der seine Heimat gern verspottete.',
    story:[
      'In diesem schmalen Haus im Lechviertel kam am 10. Februar 1898 Bertolt Brecht zur Welt, einer der wichtigsten Dramatiker des 20. Jahrhunderts. Das Haus aus dem frühen 18. Jahrhundert steht zwischen zwei Lechkanälen. Im Erdgeschoss arbeitete damals eine Feilenhauerei mit wassergetriebenem Hammerwerk. Der Lärm war vermutlich ein Grund, warum die Familie bald wieder auszog.',
      'Brecht wuchs in Augsburg auf, ging hier zur Schule und schrieb seine ersten Gedichte. Mit seiner Heimatstadt hatte er ein kompliziertes Verhältnis: Er spottete über das Bürgertum, zog nach München und Berlin, später ins Exil. Die Dreigroschenoper machte ihn weltberühmt.',
      'Lange tat sich Augsburg schwer mit seinem berühmtesten Sohn. Heute gibt es ein Museum in seinem Geburtshaus und jedes Jahr ein Brechtfestival.'],
    fact:'Eigentlich hieß er Eugen Berthold Friedrich Brecht. Den Namen „Bertolt“ legte er sich später selbst zu.',
    look:'Den Kanal direkt vor der Haustür.' },

  { id:'puppenkiste', name:'Augsburger Puppenkiste', wiki:'Augsburger Puppenkiste', ll:[48.3600,10.9004], dwell:8,
    teaser:'Jim Knopf, Urmel und Kult aus dem Fernsehen.',
    story:[
      'Jim Knopf, Urmel, Kater Mikesch: Sie alle haben hier ihr Zuhause. Am 26. Februar 1948 eröffnete Walter Oehmichen mit seiner Familie die Augsburger Puppenkiste im ehemaligen Heilig-Geist-Spital.',
      '1953 kam die Puppenkiste zum ersten Mal ins Fernsehen, mit „Peter und der Wolf“, live gesendet aus einem Hochbunker in Hamburg. Danach wurde sie für Generationen von Kindern Kult. Die Marionetten sind von Hand geschnitzt, und gerade dieser handgemachte Charme hat die Filme unsterblich gemacht.',
      'Im Museum „Die Kiste“ siehst du viele Originalfiguren. Und gespielt wird bis heute, Karten am besten vorher reservieren.'],
    fact:'Das Gebäude selbst ist auch ohne Marionetten sehenswert: Das Heilig-Geist-Spital war das letzte große Werk von Elias Holl, dem Baumeister des Rathauses. Fertig wurde es 1631.',
    look:'Den Innenhof des Heilig-Geist-Spitals.' },

  { id:'wassertuerme', name:'Wassertürme am Roten Tor', wiki:'Wassertürme am Roten Tor', ll:[48.3594,10.9007], dwell:8,
    teaser:'Das Wasserwerk, das Ingenieure aus ganz Europa bestaunten.',
    story:[
      'Hier am Roten Tor schlug jahrhundertelang das Herz der Augsburger Wasserversorgung. Wasserräder, angetrieben von Kanälen, pumpten Wasser hoch in die Türme. Von dort floss es mit natürlichem Gefälle durch Leitungen zu den Brunnen und in die Häuser.',
      'Gebaut wurde ab 1416, und 463 Jahre lang versorgte das Wasserwerk die Stadt mit Trinkwasser. Es gilt als ältestes erhaltenes Wasserwerk Mitteleuropas.',
      'Dem mittelalterlichen Roten Tor setzte Elias Holl 1622 ein neues Obergeschoss mit Turmhelm auf. Im Sommer wird im ehemaligen Stadtgraben auf der Freilichtbühne gespielt, eine der schönsten Open-Air-Kulissen Bayerns.'],
    fact:'Seit 2019 ist das Augsburger Wassermanagement-System UNESCO-Welterbe, mit insgesamt 22 Stationen von Kanälen über Wassertürme bis zu den Prachtbrunnen.',
    look:'Die schlanken Türme und das Rote Tor dahinter.' },

  { id:'lechviertel', name:'Lechviertel & Stadtmetzg', wiki:'Stadtmetzg (Augsburg)', ll:[48.3666,10.8995], dwell:8,
    teaser:'Rauschende Kanäle, alte Handwerker und eine Kühlung von 1609.',
    story:[
      'Hier unten, wo die Kanäle durch die Gassen rauschen, lebten früher die Handwerker: Gerber, Färber, Müller und Goldschmiede. Sie alle brauchten fließendes Wasser, als Antrieb, zum Waschen und zum Kühlen.',
      'Das stattliche Gebäude ist die Stadtmetzg, von 1606 bis 1609 von Elias Holl gebaut. Unter dem Haus fließt ein Lechkanal hindurch. So wurde das Fleisch gekühlt und die Abfälle gleich weggespült. Hightech im 17. Jahrhundert.',
      'Die Straßen im Viertel heißen Vorderer, Mittlerer und Hinterer Lech, benannt nach den Kanälen. Die Augsburger behaupten gern, ihre Stadt habe mehr Brücken als Venedig. Nachzählen musst du nicht, genieß einfach das Rauschen.'],
    fact:'Seit über tausend Jahren treiben die Lechkanäle in Augsburg Wasserräder an. Gespeist werden sie vom Lech, der am Hochablass im Süden der Stadt aufgestaut wird.',
    look:'Wo der Kanal unter der Stadtmetzg verschwindet.' },

  { id:'synagoge', name:'Synagoge Augsburg', wiki:'Synagoge Augsburg', ll:[48.3664,10.8921], dwell:10,
    teaser:'Eine Kuppel aus dem Ersten Weltkrieg, die 1938 nur knapp überstand.',
    story:[
      'Hinter dem Eingang an der Halderstraße versteckt sich eine der schönsten Synagogen Europas. Entworfen von Fritz Landauer und Heinrich Lömpel, wurde sie 1917 eingeweiht, mitten im Ersten Weltkrieg. Über dem Hauptraum wölbt sich eine 29 Meter hohe Kuppel.',
      'In der Pogromnacht im November 1938 wurde die Synagoge geplündert, das Innere zerstört und der Betsaal angezündet. Die Feuerwehr löschte, allerdings nur, um die Nachbarhäuser und ein benachbartes Tanklager zu schützen.',
      'Nach der Restaurierung wurde sie 1985 wieder geweiht. Heute ist sie Gotteshaus der jüdischen Gemeinde und beherbergt das Jüdische Museum Augsburg Schwaben. Wenn du Zeit hast, geh hinein. Der Kuppelsaal ist beeindruckend.'],
    fact:'Die Synagoge gilt als eine der schönsten in Europa. Fachleute nennen sie ein Schmuckkästchen unter den deutschen Synagogen.',
    look:'Die Kuppel, die über den Innenhof hinausragt.' },

  { id:'zeughaus', name:'Zeughaus', wiki:'Zeughaus (Augsburg)', ll:[48.3681,10.8925], dwell:5,
    teaser:'Ein Waffenlager mit Stil und ein Erzengel im Kampf.',
    story:[
      'Das Zeughaus war das Waffenlager der Reichsstadt. Elias Holl übernahm 1602 den Umbau eines früheren Kornhauses und vollendete ihn 1607. Schon die Fassade macht klar: Hier ging es um Wehrhaftigkeit, aber auch um Eindruck.',
      'Über dem Portal kämpft der Erzengel Michael gegen Luzifer, eine mächtige Bronzegruppe von Hans Reichle. Michael ist kein Zufall: Er galt als Schutzpatron gegen alle Feinde, passend für ein Waffenlager.',
      'Heute ist das Zeughaus ein Kulturzentrum mit Kino, Volkshochschule und Gastronomie.'],
    fact:'Michael begegnet dir in Augsburg öfter. Auch der Turamichele im Perlachturm ist der Erzengel.',
    look:'Die Bronzegruppe über dem Portal.' },

  { id:'maxmuseum', name:'Maximilianmuseum', wiki:'Maximilianmuseum', ll:[48.3683,10.8958], dwell:10,
    teaser:'Die echten Brunnenfiguren, unter einem Glasdach.',
    story:[
      'Das Maximilianmuseum ist Augsburgs Stadtmuseum. Der Star ist der Viermetzhof, ein Innenhof mit freitragendem Glasdach, in dem die originalen Bronzefiguren der Prachtbrunnen stehen.',
      'Hier begegnest du Augustus, Merkur und Herkules auf Augenhöhe, ohne Verkehrslärm. Die Figuren wurden zum Schutz vor Wind und Wetter ins Museum geholt, draußen stehen Kopien.',
      'Außerdem zeigt das Museum Augsburger Goldschmiedekunst. Vom 16. bis zum 19. Jahrhundert war Augsburg das führende Goldschmiedezentrum Mitteleuropas.'],
    fact:'Hier steht auch die Modellkammer, die Elias Holl 1620 über dem Goldenen Saal einrichtete: Modelle von Gebäuden, Maschinen und Wasseranlagen, einmalig in Deutschland.',
    look:'Den Viermetzhof mit seinem Glasdach.' },

  { id:'stadtmauer', name:'Vogeltor & Fünfgratturm', wiki:'Fünfgratturm', ll:[48.3660,10.9078], dwell:5,
    teaser:'Ein Stück alte Stadtmauer mit ungewöhnlichem Dach.',
    story:[
      'Im Osten der Altstadt ist noch ein Stück der alten Stadtbefestigung erhalten. Durch das Vogeltor kam man früher in die Jakobervorstadt.',
      'Ein paar Schritte weiter steht der Fünfgratturm, benannt nach seinem ungewöhnlichen Dach mit fünf Graten. Entlang der Mauer und des Stadtgrabens lässt es sich gut spazieren.',
      'Augsburg war über Jahrhunderte von Mauern, Gräben und Bastionen umgeben. Vieles wurde im 19. Jahrhundert abgerissen, als die Stadt wuchs und Platz für Eisenbahn und Fabriken brauchte.'],
    fact:'Einige Stadttore sind bis heute erhalten, darunter das Rote Tor, das Vogeltor, das Jakobertor und das Wertachbrucker Tor.',
    look:'Zähl die Grate auf dem Turmdach.' },

  { id:'lueginsland', name:'Bastion Lueginsland', wiki:'Lueginsland (Augsburg)', ll:[48.3757,10.9009], dwell:8,
    teaser:'„Lug ins Land“: ein ruhiger Aussichtspunkt auf der alten Stadtmauer.',
    story:[
      '„Lug ins Land“, schau ins Land: Genau das tat man hier. 1430 begann man auf Rat von Kaiser Sigismund mit einem Wachturm, ab 1532 wurde daraus eine Bastion, bestückt mit bis zu 21 Kanonen.',
      'Seit 1915 ist die Bastion eine öffentliche Grünanlage. Meistens ist es hier herrlich ruhig, obwohl die Altstadt nur ein paar Minuten entfernt ist. Gleich westlich auf der Stadtmauer steht der Hexenbrunnen.',
      'Unterhalb kannst du noch gut erkennen, wo der alte Stadtgraben verlief.'],
    fact:'Bei Föhn und klarer Sicht reicht der Blick von Augsburgs Aussichtspunkten bis zur Alpenkette.',
    look:'Den Verlauf des Stadtgrabens unterhalb der Bastion.' },

  { id:'eiskanal', name:'Eiskanal', wiki:'Eiskanal (Augsburg)', ll:[48.3540,10.9270], dwell:10,
    teaser:'Die erste künstliche Wildwasserstrecke der Welt.',
    story:[
      'Der Eiskanal war 1972 Schauplatz einer Premiere: Bei den Olympischen Spielen von München wurde hier zum ersten Mal Kanuslalom olympisch ausgetragen. Dafür baute man die erste künstliche Wildwasserstrecke der Welt.',
      'Bis heute finden hier internationale Wettkämpfe statt, 2022 sogar die Kanuslalom-Weltmeisterschaft. Mit etwas Glück siehst du Kanuten durch die Tore paddeln.',
      'Der Kanal liegt direkt am Hochablass und war früher Teil des dortigen Wasserwerks. Auch er gehört zum UNESCO-Welterbe.'],
    fact:'Gepaddelt wurde hier schon lange vor Olympia: Kanuten nutzten den Eiskanal bereits seit 1945.',
    look:'Die Slalomtore, die über dem Wasser hängen.' },

  { id:'hochablass', name:'Hochablass', wiki:'Hochablass', ll:[48.3400,10.9330], dwell:10,
    teaser:'Hier beginnt das ganze Augsburger Kanalsystem.',
    story:[
      'Am Hochablass beginnt alles: Hier wird der Lech gestaut und Wasser in die Kanäle abgezweigt, die durch die ganze Stadt fließen. Ohne dieses Wehr gäbe es kein rauschendes Lechviertel, keine Wasserräder und keinen Eiskanal.',
      'Das heutige Wehr entstand bei einem großen Umbau 1912, doch das Wehr ist schon seit über 750 Jahren Teil des Augsburger Wassersystems. Auch der Hochablass ist eine Station des UNESCO-Welterbes.',
      'Rundherum liegt der Siebentischwald, ein riesiges Naherholungsgebiet. Im Biergarten am Hochablass kannst du mit Blick aufs Wasser Pause machen.'],
    fact:'Der Lech entspringt in Vorarlberg in Österreich und mündet nördlich von Augsburg in die Donau.',
    look:'Das Wehr, wenn das Wasser über die Kante schießt.' },

  { id:'tim', name:'Textil- und Industriemuseum', wiki:'Staatliches Textil- und Industriemuseum Augsburg', ll:[48.3637,10.9150], dwell:10,
    teaser:'Wie Augsburg zur Textilstadt wurde.',
    story:[
      'Augsburg war über Jahrhunderte eine Textilstadt. Schon die Fugger kamen als Weber in die Stadt, und im 19. Jahrhundert wurde Augsburg zu einem Zentrum der Industrialisierung in Bayern.',
      'Das Staatliche Textil- und Industriemuseum, kurz tim, steht seit 2010 in der ehemaligen Augsburger Kammgarnspinnerei. Sie wurde 1836 gegründet, war das erste große Industrieunternehmen der Stadt und arbeitete bis 2004. Im Museum siehst du, wie aus Fasern Stoffe und Muster werden, vom Handwebstuhl bis zur Hightech-Maschine.',
      'Rundherum liegt das Textilviertel mit alten Fabrikhallen und Kanälen, die einst die Maschinen antrieben.'],
    fact:'Im Museum lagern rund 1,3 Millionen Stoffmuster der Neuen Augsburger Kattunfabrik, aus über 200 Jahren.',
    look:'Die alten Fabrikfassaden rund um das Museum.' },

  { id:'glaspalast', name:'Glaspalast', wiki:'Glaspalast (Augsburg)', ll:[48.3618,10.9140], dwell:6,
    teaser:'Eine Spinnerei aus Glas, heute voller Kunst.',
    story:[
      'Der Glaspalast wurde 1910 als Baumwollspinnerei fertig, gebaut von Philipp Jakob Manz, mit riesigen Fensterflächen für möglichst viel Tageslicht. Daher der Name.',
      'Heute steht hier Kunst statt Garn: Seit 2006 zeigt das H2 – Zentrum für Gegenwartskunst im Glaspalast zeitgenössische Kunst.'],
    fact:'Tageslicht war für Textilfabriken bares Geld: Je heller die Halle, desto weniger teures Kunstlicht brauchte man.',
    look:'Die großen Fensterreihen der Fassade.' },

  { id:'botgarten', name:'Botanischer Garten', wiki:'Botanischer Garten Augsburg', ll:[48.3426,10.9174], dwell:20,
    teaser:'Japangarten, Rosen und Tropenhaus im Grünen.',
    story:[
      'Der Botanische Garten im Süden der Stadt ist eine echte Oase: Rosengarten, Steingarten, Tropenhaus und ein besonders schöner Japangarten.',
      'Der Garten liegt direkt neben dem Zoo und am Rand des Siebentischwalds. Mit dem Fahrrad ist das ein perfekter Abstecher raus aus der Altstadt.'],
    fact:'Der Eintritt kostet etwas, dafür bekommst du je nach Jahreszeit ein komplett anderes Bild: Im Frühling blühen die Kirschbäume, im Herbst färben sich die Ahorne im Japangarten.',
    look:'Den Japangarten mit seiner Brücke.' },
  ],

  /* Schöne Wege: Kanäle, Gassen, Grünanlagen. Die Route führt bevorzugt hier entlang (ohne Ansage). */
  scenic:[
    {id:'vordererlech',   name:'Vorderer Lech',                ll:[48.3664,10.9013], weight:1.5},
    {id:'hintererlech',   name:'Hinterer Lech',                ll:[48.3652,10.9030], weight:1.4},
    {id:'maxstrasse',     name:'Maximilianstraße',             ll:[48.3650,10.8997]},
    {id:'hofgarten_a',    name:'Hofgarten',                    ll:[48.3716,10.8952], weight:1.4},
    {id:'stadtgraben_o',  name:'Stadtgraben Ost',              ll:[48.3690,10.9088]},
    {id:'rotestor_wall',  name:'Wallanlagen am Roten Tor',     ll:[48.3588,10.9025]},
    {id:'wittelsbacher',  name:'Wittelsbacher Park',           ll:[48.3578,10.8863]},
  ],
  wayside:[
    { id:'merkur', name:'Merkurbrunnen', wiki:'Merkurbrunnen (Augsburg)', ll:[48.3664,10.8990],
      text:'Der Merkurbrunnen. Merkur ist der Götterbote und Schutzgott der Kaufleute. Adriaen de Vries hat ihn 1599 geschaffen. Zu seinen Füßen löst ein Amor seine Sandale: Merkur soll bleiben, und mit ihm Handel und Reichtum in der Stadt.' },
    { id:'moritz', name:'St. Moritz', wiki:'St. Moritz (Augsburg)', ll:[48.3669,10.8986],
      text:'Rechts oder links von dir liegt St. Moritz. Von außen eine klassische Kirche, innen eine Überraschung: Der britische Architekt John Pawson hat den Innenraum 2013 radikal reduziert, fast nur Weiß und Licht. Im Zentrum steht eine barocke Christusfigur von Georg Petel.' },
    { id:'holbein', name:'Holbeinhaus', wiki:'Holbeinhaus (Augsburg)', ll:[48.3670,10.9012],
      text:'Das Holbeinhaus. 1496 kaufte der Maler Hans Holbein der Ältere dieses Haus als Werkstatt und Wohnung. Hier wurde sein Sohn Hans Holbein der Jüngere geboren, der später Hofmaler von Heinrich dem Achten in England wurde.' },
    { id:'weberhaus', name:'Weberhaus', wiki:'Weberhaus (Augsburg)', ll:[48.3672,10.8982],
      text:'Das Weberhaus mit der bemalten Fassade war das Zunfthaus der Weber, einst die größte Zunft der Stadt. Auch die Fugger fingen so an: 1367 kam der Weber Hans Fugger aus dem Dorf Graben nach Augsburg. Im Steuerbuch steht dazu nur: Fucker advenit, Fugger ist angekommen. Der Beginn einer unglaublichen Karriere.' },
    { id:'stadtmarkt', name:'Stadtmarkt', wiki:'Augsburger Stadtmarkt', ll:[48.3667,10.8945],
      text:'Gleich in der Nähe ist der Stadtmarkt, Augsburgs Bauch: Obst, Käse, Metzger und Imbissstände in Hallen und unter freiem Himmel. Perfekt für eine Brezn zwischendurch.' },
    { id:'roemermauer', name:'Römische Mauer', wiki:'Römische Mauer (Augsburg)', ll:[48.3733,10.8980],
      text:'Die Römermauer am Dom wurde 1954 gebaut, dort, wo einst die römische Stadtmauer endete. Auf und vor ihr stehen Abgüsse römischer Steindenkmäler, darunter ein fast sieben Meter hohes Grabmal aus der Zeit um 200 nach Christus.' },
    { id:'jakobertor', name:'Jakobertor', wiki:'Jakobertor', ll:[48.3693,10.9096],
      text:'Das Jakobertor, eines der erhaltenen Stadttore im Osten. Durch dieses Tor führte die Straße hinaus Richtung Friedberg und ins Bayerische, das für die Reichsstadt Augsburg damals Ausland war.' },
    { id:'wertachbrucker', name:'Wertachbrucker Tor', wiki:'Wertachbrucker Tor', ll:[48.3790,10.8872],
      text:'Das Wertachbrucker Tor im Norden. Elias Holl hat es 1605 um zwei Stockwerke erhöht. Der Name verrät es: Von hier ging es zur Brücke über die Wertach.' },
    { id:'hbf', name:'Hauptbahnhof', wiki:'Augsburg Hauptbahnhof', ll:[48.3655,10.8857],
      text:'Der Augsburger Hauptbahnhof wurde 1846 eröffnet. Seine Bahnhofshalle ist eine der ältesten noch erhaltenen in Deutschland.' },
    { id:'fuggerwelser', name:'Fugger und Welser Erlebnismuseum', wiki:'Fugger und Welser Erlebnismuseum', ll:[48.3713,10.8983],
      text:'Hier erzählt ein Museum von den beiden großen Augsburger Handelsfamilien. Die Welser waren so mächtig, dass Kaiser Karl der Fünfte ihnen als Sicherheit für einen Kredit ein Stück Südamerika überließ: Von 1528 bis 1546 beherrschten sie Teile des heutigen Venezuela.' },
    { id:'dioezesan', name:'Diözesanmuseum St. Afra', wiki:'Diözesanmuseum St. Afra', ll:[48.3735,10.8960],
      text:'Im Diözesanmuseum neben dem Dom stehen die originalen Flügel der bronzenen Domtür aus dem 11. Jahrhundert, mit Löwen, Kentauren und biblischen Szenen.' },
    { id:'gignoux', name:'Gignoux-Haus', wiki:'Gignoux-Haus', ll:[48.3652,10.9031],
      text:'Das Gignoux-Haus ist mit der Kattunfabrikanten-Familie Gignoux verbunden. Anna Barbara Gignoux führte ab 1761 eine große Fabrik für bedruckte Baumwollstoffe und war eine der wichtigsten Unternehmerinnen ihrer Zeit. Die Textilindustrie hat Augsburg lange vor den Fabrikschloten geprägt.' },
    { id:'goldsaal', name:'Elias-Holl-Platz', ll:[48.3679,10.8999],
      text:'Du bist am Elias-Holl-Platz, benannt nach dem Stadtbaumeister, dem Augsburg Rathaus, Zeughaus, Stadtmetzg und viele Tore verdankt. Kaum ein Baumeister hat eine deutsche Stadt so geprägt wie er.' },
  ],

  zones:[
    { id:'lech', ll:[48.3668,10.9012], r:150, text:'Du bist jetzt im Lechviertel. Hör mal hin: Das Rauschen kommt von den Kanälen, die hier durch die Gassen fließen. Früher war das hier das Viertel der Handwerker, heute ist es eine der charmantesten Ecken der Stadt.' },
    { id:'max', ll:[48.3652,10.8997], r:110, text:'Du bist auf der Maximilianstraße, der Prachtstraße der Altstadt. Früher hieß ein Teil davon Weinmarkt. Hier wohnten die reichsten Handelsfamilien der Stadt, deshalb reiht sich ein Palais ans nächste.' },
    { id:'dom', ll:[48.3726,10.8966], r:170, text:'Du bist im Domviertel. Auf dieser Hochterrasse zwischen Lech und Wertach lag einst das Zentrum der römischen Stadt Augusta Vindelicum. Später regierten hier die Bischöfe.' },
    { id:'ulrich', ll:[48.3608,10.9012], r:110, text:'Du bist im Ulrichsviertel am südlichen Ende der Altstadt. Die Gassen werden schmaler und ruhiger, und über allem thront die Basilika.' },
    { id:'jakober', ll:[48.3684,10.9070], r:200, text:'Du bist in der Jakobervorstadt. Hier wohnten früher einfache Leute, Weber und Tagelöhner, außerhalb der alten Kernstadt. Kein Zufall, dass Jakob Fugger genau hier seine Fuggerei bauen ließ.' },
    { id:'textil', ll:[48.3625,10.9150], r:330, text:'Du bist im Textilviertel. Im 19. Jahrhundert ratterten hier tausende Webstühle in riesigen Fabriken, angetrieben von der Wasserkraft der Kanäle.' },
  ]
};
