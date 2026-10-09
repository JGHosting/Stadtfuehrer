/* Inhalte: Augsburg  (Vorlage für jede weitere Stadt: gleiche Struktur, eigene Datei)
   Koordinaten sind Näherungswerte und werden beim Start über die Wikipedia-API präzisiert.
   Änderst du Texte hier, erzeugt GitHub beim nächsten Deploy automatisch neue KI-Audios. */
(globalThis.CITY_DATA = globalThis.CITY_DATA || {}).augsburg = {
  id:'augsburg', name:'Augsburg', tagline:'gegründet 15 v. Chr.', center:[48.3687,10.8986],
  /* Startpunkte zur Auswahl (der erste ist Standard) */
  starts:[ {id:'rathaus', name:'Rathausplatz', ll:[48.3688,10.8986]}, {id:'hbf', name:'Hauptbahnhof', ll:[48.3655,10.8857]} ],
  /* Themen dieser Stadt: id wird in stops[].themes verwendet */
  themes:[
  {id:'geschichte', label:'Geschichte'},
  {id:'fugger',     label:'Fugger & Geld'},
  {id:'wasser',     label:'Wasser & UNESCO'},
  {id:'kirchen',    label:'Kirchen'},
  {id:'kultur',     label:'Kunst & Kultur'},
  {id:'promis',     label:'Berühmte Augsburger'},
  {id:'natur',      label:'Natur & Aussicht'},
],

  intro:'Servus und willkommen in Augsburg! Diese Stadt ist über zweitausend Jahre alt, war einmal eine der reichsten Städte Europas und hat mehr Geschichten auf Lager, als in eine einzige Tour passen.',
  stops:[
  { id:'rathaus', name:'Rathaus', wiki:'Augsburger Rathaus', ll:[48.3687,10.8986], themes:['geschichte','kultur'], prio:3, dwell:10,
    teaser:'Elias Holls Meisterwerk und das Herz der Reichsstadt.',
    story:[
      'Du stehst vor einem der bedeutendsten Renaissancebauten nördlich der Alpen. Zwischen 1615 und 1620 ließ die Reichsstadt Augsburg dieses Rathaus von ihrem Stadtbaumeister Elias Holl errichten. Es war ein Statement: Seht her, wir gehören zu den reichsten Städten Europas.',
      'Schau ganz nach oben auf den Giebel. Dort sitzt eine Zirbelnuss, die Augsburger nennen sie „Stadtpyr“. Sie ist seit Jahrhunderten das Wappenzeichen der Stadt und geht auf die Römerzeit zurück. Darunter prangt der Reichsadler, denn Augsburg war freie Reichsstadt und nur dem Kaiser unterstellt.',
      'Im Februar 1944 brannte das Rathaus nach Bombenangriffen fast vollständig aus. Den berühmten Goldenen Saal hat man in jahrelanger Arbeit rekonstruiert, rechtzeitig zur 2000-Jahr-Feier der Stadt 1985 war er wieder zugänglich. Wenn er geöffnet ist: hineingehen und an die Decke schauen.'],
    fact:'Augsburg wurde 15 vor Christus als römisches Militärlager gegründet und nach Kaiser Augustus benannt. Damit gehört es zu den ältesten Städten Deutschlands.',
    look:'Die grüne Zirbelnuss ganz oben auf dem Giebel. Achte mal darauf: Sie begegnet dir in ganz Augsburg immer wieder.' },

  { id:'perlach', name:'Perlachturm', wiki:'Perlachturm', ll:[48.3690,10.8981], themes:['geschichte','natur'], prio:3, dwell:8,
    teaser:'70 Meter Ausblick und ein Erzengel, der einmal im Jahr zusticht.',
    story:[
      'Direkt neben dem Rathaus ragt der Perlachturm rund 70 Meter in die Höhe. Seine Ursprünge reichen bis ins Mittelalter zurück. Als Elias Holl sein neues Rathaus baute, stockte er den Turm kräftig auf, damit er neben dem mächtigen Neubau nicht wie ein Zwerg aussah.',
      'Einmal im Jahr wird es hier richtig lebhaft: Am 29. September, dem Michaelstag, öffnet sich unten im Turm ein kleines Fenster. Darin sticht der Erzengel Michael bei jedem Stundenschlag mit seiner Lanze auf einen Teufel zu seinen Füßen ein. Die Augsburger nennen die Figur liebevoll „Turamichele“ und feiern drumherum ein Fest für Kinder.',
      'In der warmen Jahreszeit kannst du hinaufsteigen. Oben wartet einer der schönsten Blicke über die Dächer der Altstadt, bei Föhn sogar bis zu den Alpen.'],
    fact:'Bis zur Aussichtsplattform sind es rund 260 Stufen. Einen Aufzug gibt es nicht, du verdienst dir den Ausblick also ehrlich.',
    look:'Das kleine Fenster unten am Turm. Dort erscheint am Michaelstag der Turamichele.' },

  { id:'augustus', name:'Augustusbrunnen', wiki:'Augustusbrunnen', ll:[48.3684,10.8987], themes:['wasser','kultur','geschichte'], prio:2, dwell:5,
    teaser:'Der Stadtgründer in Bronze, umgeben von vier Flussgöttern.',
    story:[
      'Der Mann auf dem Sockel ist Kaiser Augustus persönlich, der Namensgeber der Stadt. Der Brunnen entstand 1594 zum 1600. Geburtstag Augsburgs, geschaffen vom Bildhauer Hubert Gerhard.',
      'Um den Kaiser lagern vier Flussgötter. Sie stehen für die Gewässer, die Augsburg groß gemacht haben: Lech, Wertach, Singold und Brunnenbach. Die beiden Männer verkörpern die wilden Flüsse Lech und Wertach, die beiden Frauen die ruhigeren Bäche.',
      'Wasser war in Augsburg nie nur Dekoration. Über Kanäle, Wasserräder und Wassertürme versorgte sich die Stadt schon im Mittelalter mit sauberem Trinkwasser. Deshalb gehören die drei großen Prachtbrunnen heute zum UNESCO-Welterbe.'],
    fact:'Die Figuren, die du hier siehst, sind Kopien. Die Originale stehen gut geschützt im Maximilianmuseum, nur ein paar Gehminuten entfernt.',
    look:'Die vier Flussgötter am Beckenrand. Erkennst du, wer Fluss und wer Bach ist?' },

  { id:'fuggerei', name:'Fuggerei', wiki:'Fuggerei', ll:[48.3694,10.9043], themes:['fugger','geschichte'], prio:3, dwell:25,
    teaser:'Die älteste Sozialsiedlung der Welt. Miete: 88 Cent im Jahr.',
    story:[
      'Willkommen in der ältesten bestehenden Sozialsiedlung der Welt. 1521 stiftete Jakob Fugger, der wohl reichste Mann seiner Zeit, diese kleine Stadt in der Stadt für bedürftige Augsburger. Das Erstaunliche: Sie funktioniert bis heute nach denselben Regeln.',
      'Die Jahreskaltmiete beträgt seit der Gründung einen rheinischen Gulden, heute umgerechnet 88 Cent. Dafür gibt es eine Bedingung: Die Bewohner sprechen täglich drei Gebete für den Stifter und seine Familie. Abends um zehn werden die Tore geschlossen. Wer später heimkommt, zahlt dem Nachtwächter eine kleine Gebühr.',
      'Achte auf die Türen. Jeder Klingelzug hat eine andere Form. So konnten die Bewohner ihre Tür auch im Dunkeln ertasten, als es noch keine Straßenbeleuchtung gab. Für den Besuch zahlst du übrigens Eintritt, mit Museumswohnung und einem Bunkermuseum.'],
    fact:'Ein früherer Bewohner war der Maurer Franz Mozart, der Urgroßvater von Wolfgang Amadeus Mozart. In der Mittleren Gasse erinnert eine Tafel an ihn.',
    look:'Die unterschiedlich geformten Klingelzüge an den Haustüren.' },

  { id:'fuggerhaeuser', name:'Fuggerhäuser', wiki:'Fuggerhäuser', ll:[48.3653,10.8996], themes:['fugger','promis','geschichte'], prio:2, dwell:8,
    teaser:'Hier wurde Kaiserpolitik bezahlt und Luther verhört.',
    story:[
      'Diese lange Fassade an der Maximilianstraße war das Stadtpalais der Fugger. Von hier aus lenkte Jakob Fugger ein Handels- und Bankimperium, das von Lissabon bis Ungarn reichte. Er lieh Kaisern und Päpsten Geld, und 1519 finanzierte er maßgeblich die Wahl Karls des Fünften zum Kaiser.',
      'Im Oktober 1518 fand hier ein Treffen statt, das Weltgeschichte schrieb: Martin Luther wurde vom päpstlichen Gesandten Kardinal Cajetan verhört. Luther sollte seine Thesen widerrufen. Er weigerte sich und floh kurz darauf heimlich bei Nacht aus der Stadt.',
      'Wenn das Tor offen ist, geh durch die Einfahrt in den Damenhof. Der Innenhof mit seinen Arkaden wirkt, als wärst du plötzlich in Italien. Er gilt als einer der frühesten Renaissance-Höfe in Deutschland.'],
    fact:'Jakob Fugger erinnerte den Kaiser 1523 schriftlich daran, dass dieser die Krone ohne sein Zutun nicht bekommen hätte. Und forderte sein Geld zurück.',
    look:'Die Toreinfahrt zum Damenhof.' },

  { id:'anna', name:'St. Anna', wiki:'St. Anna (Augsburg)', ll:[48.3678,10.8946], themes:['kirchen','fugger','promis'], prio:2, dwell:12,
    teaser:'Fuggerkapelle, Lutherstiege und ein typisch Augsburger Paradox.',
    story:[
      'Von außen eher unscheinbar, innen eine Schatzkiste. Ganz im Westen der Kirche liegt die Fuggerkapelle, die Grablege von Jakob Fugger und seinen Brüdern. Sie wurde ab 1509 gebaut und gilt als erster Renaissancebau in Deutschland.',
      'Während seines Verhörs 1518 wohnte Martin Luther im Karmelitenkloster, das damals zu St. Anna gehörte. Die Treppe, über die er gegangen sein soll, heißt heute Lutherstiege. Dort erzählt ein kleines Museum die Geschichte der Reformation in Augsburg.',
      'Und hier zeigt sich etwas typisch Augsburgisches: Die Fugger blieben streng katholisch. Ihre Grabkapelle liegt heute aber in einer evangelischen Kirche.'],
    fact:'Jakob Fugger starb 1525 ohne eigene Kinder. Firma und Vermögen übernahm sein Neffe Anton Fugger.',
    look:'Die Fuggerkapelle am westlichen Ende des Kirchenschiffs.' },

  { id:'schaezler', name:'Schaezlerpalais', wiki:'Schaezlerpalais', ll:[48.3636,10.9007], themes:['kultur','promis'], prio:2, dwell:10,
    teaser:'Rokoko-Ballsaal, in dem Marie Antoinette tanzte.',
    story:[
      'Hinter dieser eher schlichten Fassade versteckt sich einer der prächtigsten Rokoko-Festsäle Deutschlands. Der Bankier Benedikt Adam Liebert ließ das Palais ab 1765 bauen, Spiegel, Stuck und Gold inklusive.',
      'Der Saal wurde gerade rechtzeitig fertig für einen ganz besonderen Gast: 1770 machte die 14-jährige Erzherzogin Marie Antoinette auf ihrer Brautreise nach Paris in Augsburg Station und tanzte hier auf einem Ball. Wenige Jahre später war sie Königin von Frankreich. Wie das endete, weißt du.',
      'Heute ist das Palais ein Kunstmuseum mit der Deutschen Barockgalerie. Den Festsaal kannst du im Rahmen des Museumsbesuchs ansehen.'],
    fact:'Seinen Namen hat das Palais von der Bankiersfamilie von Schaezler, die es später übernahm.',
    look:'Die schmale Fassade an der Maximilianstraße. Kaum zu glauben, wie weit das Gebäude nach hinten reicht.' },

  { id:'herkules', name:'Herkulesbrunnen', wiki:'Herkulesbrunnen (Augsburg)', ll:[48.3639,10.9002], themes:['wasser','kultur'], prio:2, dwell:5,
    teaser:'Ein Held, ein Ungeheuer mit vielen Köpfen und viel Wasser.',
    story:[
      'Herkules kämpft hier gegen die Hydra, das vielköpfige Ungeheuer der griechischen Sage. Für jeden Kopf, den er abschlägt, wachsen zwei neue nach. Geschaffen hat den Brunnen der Niederländer Adriaen de Vries, fertig wurde er 1602.',
      'Er ist der jüngste der drei großen Prachtbrunnen an der Hauptachse der Altstadt. Augustus, Merkur und Herkules erzählen zusammen, worauf die Stadt stolz war: ihre römische Gründung, den Handel und die Kraft, die nötig war, um das Wasser zu bändigen.',
      'Unten am Sockel sitzen drei Najaden, Wassernymphen. Schau mal genau hin, woher bei ihnen das Wasser kommt. Für das Jahr 1602 ziemlich gewagt.'],
    fact:'Alle drei Prachtbrunnen sind seit 2019 Teil des UNESCO-Welterbes „Augsburger Wassermanagement-System“.',
    look:'Die drei Najaden am Sockel.' },

  { id:'ulrich', name:'St. Ulrich und Afra', wiki:'St. Ulrich und Afra (Augsburg)', ll:[48.3612,10.9013], themes:['kirchen','geschichte'], prio:3, dwell:12,
    teaser:'Zwei Kirchen, zwei Konfessionen, Wand an Wand.',
    story:[
      'Am südlichen Ende der Maximilianstraße steht ein Bauwerk, das Augsburgs Geschichte in sich trägt: die Basilika St. Ulrich und Afra. In ihr liegen die Gräber der beiden Stadtpatrone.',
      'Afra war der Überlieferung nach eine Christin, die um das Jahr 304 in der Verfolgung unter Kaiser Diokletian den Märtyrertod starb. Ulrich war Bischof von Augsburg und verteidigte 955 die Stadt gegen die Ungarn, kurz vor der berühmten Schlacht auf dem Lechfeld.',
      'Und jetzt das Besondere: Vorne an die katholische Basilika angebaut steht die kleinere evangelische Ulrichskirche. Zwei Konfessionen, Wand an Wand. Das ist ein Erbe des Augsburger Religionsfriedens von 1555, der hier in der Stadt beschlossen wurde.'],
    fact:'Deshalb hat Augsburg einen Feiertag, den es sonst nirgends gibt: Am 8. August feiert die Stadt das Hohe Friedensfest. Nur in Augsburg ist dieser Tag arbeitsfrei.',
    look:'Stell dich so hin, dass du beide Kirchen gleichzeitig siehst.' },

  { id:'dom', name:'Dom Mariä Heimsuchung', wiki:'Augsburger Dom', ll:[48.3729,10.8969], themes:['kirchen','geschichte'], prio:3, dwell:15,
    teaser:'Hier hängen die ältesten Figurenfenster der Welt.',
    story:[
      'Der Augsburger Dom ist die Bischofskirche der Stadt, und Teile von ihm sind über tausend Jahre alt. Von außen wirkt er gotisch, im Kern steckt aber eine romanische Kirche.',
      'Das Highlight siehst du nur drinnen: Hoch oben an der Südseite des Mittelschiffs hängen fünf Prophetenfenster aus der Zeit um 1100. Sie gelten als die ältesten figürlichen Glasfenster der Welt, die noch an ihrem ursprünglichen Platz sind. Jona, Daniel, Hosea, Moses und David schauen hier seit über 900 Jahren herunter.',
      'Ebenfalls aus dem 11. Jahrhundert stammt die bronzene Domtür mit Tieren, Fabelwesen und biblischen Szenen. Die Originalflügel sind heute im Diözesanmuseum direkt nebenan zu sehen.'],
    fact:'Rund um den Dom lag schon das Zentrum der römischen Stadt Augusta Vindelicum. Bei Bauarbeiten taucht hier immer wieder Römisches aus dem Boden auf.',
    look:'Die Prophetenfenster. Nimm dir einen Moment, bis sich die Augen an das Licht gewöhnt haben.' },

  { id:'fronhof', name:'Fronhof & Hofgarten', wiki:'Fronhof (Augsburg)', ll:[48.3721,10.8957], themes:['geschichte','natur'], prio:2, dwell:8,
    teaser:'Wo das wichtigste Bekenntnis der Lutheraner verlesen wurde.',
    story:[
      'Der Fronhof war das Machtzentrum der Augsburger Bischöfe. Das große Gebäude ist die ehemalige fürstbischöfliche Residenz, heute sitzt hier die Regierung von Schwaben.',
      'Am 25. Juni 1530 wurde hier Geschichte geschrieben: Vor Kaiser Karl dem Fünften und dem Reichstag verlasen protestantische Fürsten die „Confessio Augustana“, das Augsburger Bekenntnis. Bis heute ist es die wichtigste Bekenntnisschrift der lutherischen Kirchen weltweit.',
      'Gleich nebenan liegt der Hofgarten, ein kleiner barocker Garten. Ideal für eine kurze Pause im Schatten.'],
    fact:'Durch das Augsburger Bekenntnis tragen lutherische Gemeinden den Namen der Stadt sozusagen um die ganze Welt.',
    look:'Den Durchgang vom Fronhof in den Hofgarten.' },

  { id:'mozart', name:'Mozarthaus', wiki:'Mozarthaus (Augsburg)', ll:[48.3762,10.8954], themes:['promis','kultur'], prio:2, dwell:8,
    teaser:'Geburtshaus von Vater Mozart und die Geschichte vom „Bäsle“.',
    story:[
      'In diesem Haus wurde 1719 Leopold Mozart geboren, der Vater von Wolfgang Amadeus. Leopold ging später nach Salzburg, aber Augsburg blieb für die Familie wichtig.',
      '1756 erschien in Augsburg Leopolds „Versuch einer gründlichen Violinschule“, über Jahrzehnte eines der wichtigsten Lehrbücher für Geiger in Europa. Im selben Jahr kam übrigens Wolfgang zur Welt.',
      'Wolfgang selbst war mehrmals in Augsburg. Hier lebte seine Cousine Maria Anna Thekla, das „Bäsle“. Die Briefe, die er ihr schrieb, sind berühmt, vor allem dafür, wie albern und derb sie sind. Mozart konnte eben nicht nur Klassik.'],
    fact:'In Augsburg probierte Wolfgang die Hammerklaviere des Klavierbauers Johann Andreas Stein aus und schwärmte davon in Briefen an seinen Vater.',
    look:'Die Gedenktafel an der Fassade.' },

  { id:'brecht', name:'Brechthaus', wiki:'Brechthaus', ll:[48.3671,10.9019], themes:['promis','kultur'], prio:2, dwell:6,
    teaser:'Geburtshaus eines Weltstars, der seine Heimat gern verspottete.',
    story:[
      'In diesem schmalen Haus im Lechviertel kam am 10. Februar 1898 Bertolt Brecht zur Welt, einer der wichtigsten Dramatiker des 20. Jahrhunderts. Der Kanal rauscht direkt am Haus vorbei, genau wie damals.',
      'Brecht wuchs in Augsburg auf, ging hier zur Schule und schrieb seine ersten Gedichte. Mit seiner Heimatstadt hatte er ein kompliziertes Verhältnis: Er spottete über das Bürgertum, zog nach München und Berlin, später ins Exil. Die Dreigroschenoper machte ihn weltberühmt.',
      'Lange tat sich Augsburg schwer mit seinem berühmtesten Sohn. Heute gibt es ein Museum in seinem Geburtshaus und jedes Jahr ein Brechtfestival.'],
    fact:'Eigentlich hieß er Eugen Berthold Friedrich Brecht. Den Namen „Bertolt“ legte er sich später selbst zu.',
    look:'Den Kanal direkt vor der Haustür.' },

  { id:'puppenkiste', name:'Augsburger Puppenkiste', wiki:'Augsburger Puppenkiste', ll:[48.3600,10.9004], themes:['kultur'], prio:2, dwell:8,
    teaser:'Jim Knopf, Urmel und ein Meer aus Plastikfolie.',
    story:[
      'Jim Knopf, Urmel, Kater Mikesch: Sie alle haben hier ihr Zuhause. 1948 gründete Walter Oehmichen mit seiner Familie die Augsburger Puppenkiste im ehemaligen Heilig-Geist-Spital.',
      'Ab den 1950er Jahren kam die Puppenkiste ins Fernsehen und wurde für Generationen von Kindern Kult. Die Marionetten sind von Hand geschnitzt, und das Meer bei Jim Knopf? Das war raschelnde Plastikfolie. Gerade dieser Charme hat die Filme unsterblich gemacht.',
      'Im Museum „Die Kiste“ siehst du viele Originalfiguren. Und gespielt wird bis heute, Karten am besten vorher reservieren.'],
    fact:'Das Gebäude selbst ist auch ohne Marionetten sehenswert: Das Heilig-Geist-Spital stammt von Elias Holl, demselben Baumeister wie das Rathaus.',
    look:'Den Innenhof des Heilig-Geist-Spitals.' },

  { id:'wassertuerme', name:'Wassertürme am Roten Tor', wiki:'Wassertürme am Roten Tor', ll:[48.3594,10.9007], themes:['wasser','geschichte'], prio:2, dwell:8,
    teaser:'Das Wasserwerk, das Ingenieure aus ganz Europa bestaunten.',
    story:[
      'Hier am Roten Tor schlug jahrhundertelang das Herz der Augsburger Wasserversorgung. Wasserräder, angetrieben von Kanälen, pumpten Wasser hoch in die Türme. Von dort floss es mit natürlichem Gefälle durch Leitungen zu den Brunnen und in die Häuser.',
      'Die ersten Türme entstanden schon im 15. Jahrhundert. Damit gehört die Anlage zu den ältesten erhaltenen Wasserwerken Mitteleuropas. Besucher aus ganz Europa kamen, um sich die Technik anzusehen.',
      'Das Rote Tor selbst hat Elias Holl 1622 umgebaut. Im Sommer wird im ehemaligen Stadtgraben auf der Freilichtbühne gespielt, eine der schönsten Open-Air-Kulissen Bayerns.'],
    fact:'Seit 2019 ist das Augsburger Wassermanagement-System UNESCO-Welterbe, mit insgesamt 22 Stationen von Kanälen über Wassertürme bis zu den Prachtbrunnen.',
    look:'Die schlanken Türme und das Rote Tor dahinter.' },

  { id:'lechviertel', name:'Lechviertel & Stadtmetzg', wiki:'Stadtmetzg (Augsburg)', ll:[48.3666,10.8995], themes:['wasser','geschichte'], prio:2, dwell:8,
    teaser:'Rauschende Kanäle, alte Handwerker und eine Kühlung von 1609.',
    story:[
      'Hier unten, wo die Kanäle durch die Gassen rauschen, lebten früher die Handwerker: Gerber, Färber, Müller und Goldschmiede. Sie alle brauchten fließendes Wasser, als Antrieb, zum Waschen und zum Kühlen.',
      'Das stattliche Gebäude ist die Stadtmetzg, gebaut 1609 von Elias Holl. Unter dem Haus fließt ein Lechkanal hindurch. So wurde das Fleisch gekühlt und die Abfälle gleich weggespült. Hightech im 17. Jahrhundert.',
      'Die Straßen im Viertel heißen Vorderer, Mittlerer und Hinterer Lech, benannt nach den Kanälen. Die Augsburger behaupten gern, ihre Stadt habe mehr Brücken als Venedig. Nachzählen musst du nicht, genieß einfach das Rauschen.'],
    fact:'Die Kanäle werden vom Lech gespeist. Er wird am Hochablass im Süden der Stadt aufgestaut und in die Kanäle abgeleitet.',
    look:'Wo der Kanal unter der Stadtmetzg verschwindet.' },

  { id:'synagoge', name:'Synagoge Augsburg', wiki:'Synagoge Augsburg', ll:[48.3664,10.8921], themes:['geschichte','kultur','kirchen'], prio:2, dwell:10,
    teaser:'Eine Kuppel aus dem Ersten Weltkrieg, die 1938 nur knapp überstand.',
    story:[
      'Hinter dem Eingang an der Halderstraße versteckt sich eine der schönsten Synagogen Europas. Gebaut wurde sie zwischen 1913 und 1917, mitten im Ersten Weltkrieg, mit einer großen Kuppel und Jugendstil-Mosaiken.',
      'In der Pogromnacht im November 1938 wurde die Synagoge geschändet und angezündet. Dass sie nicht vollständig abbrannte, lag an einer Tankstelle direkt nebenan: Weil man fürchtete, das Feuer könnte übergreifen, wurde es schnell wieder gelöscht.',
      'Heute ist sie wieder Gotteshaus der jüdischen Gemeinde und beherbergt das Jüdische Museum Augsburg Schwaben. Wenn du Zeit hast, geh hinein. Der Kuppelsaal ist beeindruckend.'],
    fact:'Jüdisches Leben in Augsburg reicht bis ins Mittelalter zurück. Eine jüdische Gemeinde wird schon im 13. Jahrhundert erwähnt.',
    look:'Die Kuppel, die über den Innenhof hinausragt.' },

  { id:'zeughaus', name:'Zeughaus', wiki:'Zeughaus (Augsburg)', ll:[48.3681,10.8925], themes:['geschichte','kultur'], prio:1, dwell:5,
    teaser:'Ein Waffenlager mit Stil und ein Erzengel im Kampf.',
    story:[
      'Das Zeughaus war das Waffenlager der Reichsstadt. Elias Holl baute es zwischen 1602 und 1607. Schon die Fassade macht klar: Hier ging es um Wehrhaftigkeit, aber auch um Eindruck.',
      'Über dem Portal kämpft der Erzengel Michael gegen Luzifer, eine mächtige Bronzegruppe von Hans Reichle. Michael ist kein Zufall: Er galt als Schutzpatron gegen alle Feinde, passend für ein Waffenlager.',
      'Heute ist das Zeughaus ein Kulturzentrum mit Kino, Volkshochschule und Gastronomie.'],
    fact:'Michael begegnet dir in Augsburg öfter. Auch der Turamichele im Perlachturm ist der Erzengel.',
    look:'Die Bronzegruppe über dem Portal.' },

  { id:'maxmuseum', name:'Maximilianmuseum', wiki:'Maximilianmuseum', ll:[48.3683,10.8958], themes:['kultur','wasser'], prio:2, dwell:10,
    teaser:'Die echten Brunnenfiguren, unter einem Glasdach.',
    story:[
      'Das Maximilianmuseum ist Augsburgs Stadtmuseum. Der Star ist der Viermetzhof, ein überdachter Innenhof, in dem die originalen Bronzefiguren der Prachtbrunnen stehen.',
      'Hier begegnest du Augustus, Merkur und Herkules auf Augenhöhe, ohne Verkehrslärm. Die Figuren wurden zum Schutz vor Wind und Wetter ins Museum geholt, draußen stehen Kopien.',
      'Außerdem zeigt das Museum Augsburger Goldschmiedekunst. Dafür war die Stadt einst in ganz Europa berühmt, Augsburger Silber stand an vielen Fürstenhöfen.'],
    fact:'Das Museum ist in ehemaligen Kaufmannshäusern untergebracht. Wohnen und Handeln lagen in Augsburg oft unter einem Dach.',
    look:'Den Viermetzhof mit seinem Glasdach.' },

  { id:'stadtmauer', name:'Vogeltor & Fünfgratturm', wiki:'Fünfgratturm', ll:[48.3660,10.9078], themes:['geschichte'], prio:1, dwell:5,
    teaser:'Ein Stück alte Stadtmauer mit ungewöhnlichem Dach.',
    story:[
      'Im Osten der Altstadt ist noch ein Stück der alten Stadtbefestigung erhalten. Das Vogeltor stammt aus dem 15. Jahrhundert und gehörte zur Befestigung der Jakobervorstadt.',
      'Ein paar Schritte weiter steht der Fünfgratturm, benannt nach seinem ungewöhnlichen Dach mit fünf Graten. Entlang der Mauer und des Stadtgrabens lässt es sich gut spazieren.',
      'Augsburg war über Jahrhunderte von Mauern, Gräben und Bastionen umgeben. Vieles wurde im 19. Jahrhundert abgerissen, als die Stadt wuchs und Platz für Eisenbahn und Fabriken brauchte.'],
    fact:'Einige Stadttore sind bis heute erhalten, darunter das Rote Tor, das Vogeltor, das Jakobertor und das Wertachbrucker Tor.',
    look:'Zähl die Grate auf dem Turmdach.' },

  { id:'lueginsland', name:'Bastion Lueginsland', wiki:'Lueginsland (Augsburg)', ll:[48.3757,10.9009], themes:['natur','geschichte'], prio:1, dwell:8,
    teaser:'„Lug ins Land“: ein ruhiger Aussichtspunkt auf der alten Stadtmauer.',
    story:[
      '„Lug ins Land“, schau ins Land: Genau das tat man von dieser alten Bastion der Stadtbefestigung aus. Hoch über dem Lechtal hielt man hier Ausschau nach heranrückenden Feinden.',
      'Heute ist die Bastion ein kleiner Park mit Blick über die Stadt und Richtung Osten. Und meistens ist es hier herrlich ruhig, obwohl die Altstadt nur ein paar Minuten entfernt ist.',
      'Unterhalb kannst du noch gut erkennen, wo der alte Stadtgraben verlief.'],
    fact:'Bei Föhn und klarer Sicht reicht der Blick von Augsburgs Aussichtspunkten bis zur Alpenkette.',
    look:'Den Verlauf des Stadtgrabens unterhalb der Bastion.' },

  { id:'eiskanal', name:'Eiskanal', wiki:'Eiskanal (Augsburg)', ll:[48.3540,10.9270], themes:['natur','wasser'], prio:2, dwell:10,
    teaser:'Die erste künstliche Wildwasserstrecke der Welt.',
    story:[
      'Der Eiskanal war 1972 Schauplatz einer Premiere: Bei den Olympischen Spielen von München wurde hier zum ersten Mal Kanuslalom olympisch ausgetragen. Dafür baute man die erste künstliche Wildwasserstrecke der Welt.',
      'Bis heute trainieren hier Spitzensportler, 2022 fand hier die Kanuslalom-Weltmeisterschaft statt. Mit etwas Glück siehst du Kanuten durch die Tore paddeln.',
      'Das Wasser kommt vom Lech und wird am nahegelegenen Hochablass abgezweigt. Auch der Eiskanal gehört zum UNESCO-Welterbe.'],
    fact:'Der Name stammt aus der Zeit, als man über diesen Kanal Treibeis vom Lech ableitete, damit es die Wasserräder in der Stadt nicht beschädigte.',
    look:'Die Slalomtore, die über dem Wasser hängen.' },

  { id:'hochablass', name:'Hochablass', wiki:'Hochablass', ll:[48.3400,10.9330], themes:['wasser','natur'], prio:1, dwell:10,
    teaser:'Hier beginnt das ganze Augsburger Kanalsystem.',
    story:[
      'Am Hochablass beginnt alles: Hier wird der Lech gestaut und Wasser in die Kanäle abgezweigt, die durch die ganze Stadt fließen. Ohne dieses Wehr gäbe es kein rauschendes Lechviertel, keine Wasserräder und keinen Eiskanal.',
      'Das heutige Wehr stammt aus dem frühen 20. Jahrhundert, Wasser abgeleitet wird an dieser Stelle aber schon seit dem Mittelalter. Auch der Hochablass ist eine Station des UNESCO-Welterbes.',
      'Rundherum liegt der Siebentischwald, ein riesiges Naherholungsgebiet. Im Biergarten am Hochablass kannst du mit Blick aufs Wasser Pause machen.'],
    fact:'Der Lech entspringt in Vorarlberg in Österreich und mündet nördlich von Augsburg in die Donau.',
    look:'Das Wehr, wenn das Wasser über die Kante schießt.' },

  { id:'tim', name:'Textil- und Industriemuseum', wiki:'Staatliches Textil- und Industriemuseum Augsburg', ll:[48.3637,10.9150], themes:['kultur','geschichte'], prio:2, dwell:10,
    teaser:'Wie Augsburg zur Textilstadt wurde.',
    story:[
      'Augsburg war über Jahrhunderte eine Textilstadt. Schon die Fugger kamen als Weber in die Stadt, und im 19. Jahrhundert wurde Augsburg zu einem Zentrum der Industrialisierung in Bayern.',
      'Das Staatliche Textil- und Industriemuseum, kurz tim, steht auf dem Gelände der ehemaligen Augsburger Kammgarnspinnerei. Hier laufen historische Maschinen, und du siehst, wie aus Fasern Stoffe und Muster werden.',
      'Rundherum liegt das Textilviertel mit alten Fabrikhallen und Kanälen, die einst die Maschinen antrieben.'],
    fact:'Bedruckte Baumwollstoffe aus Augsburg, der sogenannte Kattun, waren im 18. Jahrhundert in ganz Europa gefragt.',
    look:'Die alten Fabrikfassaden rund um das Museum.' },

  { id:'glaspalast', name:'Glaspalast', wiki:'Glaspalast (Augsburg)', ll:[48.3618,10.9140], themes:['kultur'], prio:1, dwell:6,
    teaser:'Eine Spinnerei aus Glas, heute voller Kunst.',
    story:[
      'Der Glaspalast wurde um 1910 als Spinnerei gebaut, mit riesigen Fensterflächen für möglichst viel Tageslicht. Daher der Name.',
      'Heute steht hier Kunst statt Garn: Im Glaspalast sind das H2 – Zentrum für Gegenwartskunst und weitere Ausstellungen zeitgenössischer Kunst untergebracht.'],
    fact:'Tageslicht war für Textilfabriken bares Geld: Je heller die Halle, desto weniger teures Kunstlicht brauchte man.',
    look:'Die großen Fensterreihen der Fassade.' },

  { id:'botgarten', name:'Botanischer Garten', wiki:'Botanischer Garten Augsburg', ll:[48.3426,10.9174], themes:['natur'], prio:1, dwell:20,
    teaser:'Japangarten, Rosen und Tropenhaus im Grünen.',
    story:[
      'Der Botanische Garten im Süden der Stadt ist eine echte Oase: Rosengarten, Steingarten, Tropenhaus und ein besonders schöner Japangarten mit Teich und Teehaus.',
      'Der Garten liegt direkt neben dem Zoo und am Rand des Siebentischwalds. Mit dem Fahrrad ist das ein perfekter Abstecher raus aus der Altstadt.'],
    fact:'Der Eintritt kostet etwas, dafür bekommst du je nach Jahreszeit ein komplett anderes Bild: Im Frühling blühen die Kirschbäume, im Herbst färben sich die Ahorne im Japangarten.',
    look:'Den Japangarten mit seiner Brücke.' },
  ],

  wayside:[
    { id:'merkur', name:'Merkurbrunnen', wiki:'Merkurbrunnen (Augsburg)', ll:[48.3664,10.8990],
      text:'Der Merkurbrunnen. Merkur ist der Götterbote und Schutzgott der Kaufleute. Adriaen de Vries hat ihn 1599 geschaffen. Für eine Handelsstadt wie Augsburg die perfekte Figur.' },
    { id:'moritz', name:'St. Moritz', wiki:'St. Moritz (Augsburg)', ll:[48.3669,10.8986],
      text:'Rechts oder links von dir liegt St. Moritz. Von außen eine klassische Kirche, innen eine Überraschung: Der britische Architekt John Pawson hat den Innenraum radikal reduziert, fast nur Weiß und Licht. Im Zentrum steht eine barocke Christusfigur von Georg Petel.' },
    { id:'holbein', name:'Holbeinhaus', wiki:'Holbeinhaus (Augsburg)', ll:[48.3670,10.9012],
      text:'Das Holbeinhaus. Hier lebte und arbeitete der Maler Hans Holbein der Ältere. Sein Sohn, Hans Holbein der Jüngere, wurde in Augsburg geboren und später Hofmaler von Heinrich dem Achten in England.' },
    { id:'weberhaus', name:'Weberhaus', wiki:'Weberhaus (Augsburg)', ll:[48.3672,10.8982],
      text:'Das Weberhaus mit der bemalten Fassade war das Zunfthaus der Weber, einst die größte Zunft der Stadt. Auch die Fugger fingen so an: 1367 zog Hans Fugger als Weber vom Land nach Augsburg. Der Beginn einer unglaublichen Karriere.' },
    { id:'stadtmarkt', name:'Stadtmarkt', wiki:'Augsburger Stadtmarkt', ll:[48.3667,10.8945],
      text:'Gleich in der Nähe ist der Stadtmarkt, Augsburgs Bauch: Obst, Käse, Metzger und Imbissstände in Hallen und unter freiem Himmel. Perfekt für eine Brezn zwischendurch.' },
    { id:'roemermauer', name:'Römische Mauer', wiki:'Römische Mauer (Augsburg)', ll:[48.3733,10.8980],
      text:'Hier am Dom sind Nachbildungen römischer Grab- und Weihesteine in einer Mauer zusammengestellt. Sie erinnern an Augusta Vindelicum, die römische Stadt, die hier vor rund 2000 Jahren stand.' },
    { id:'jakobertor', name:'Jakobertor', wiki:'Jakobertor', ll:[48.3693,10.9096],
      text:'Das Jakobertor, eines der erhaltenen Stadttore im Osten. Durch dieses Tor führte die Straße hinaus Richtung Friedberg und ins Bayerische, das für die Reichsstadt Augsburg damals Ausland war.' },
    { id:'wertachbrucker', name:'Wertachbrucker Tor', wiki:'Wertachbrucker Tor', ll:[48.3790,10.8872],
      text:'Das Wertachbrucker Tor im Norden. Elias Holl hat es Anfang des 17. Jahrhunderts umgebaut. Der Name verrät es: Von hier ging es zur Brücke über die Wertach.' },
    { id:'hbf', name:'Hauptbahnhof', wiki:'Augsburg Hauptbahnhof', ll:[48.3655,10.8857],
      text:'Der Augsburger Hauptbahnhof stammt aus den 1840er Jahren und gilt als einer der ältesten noch genutzten Großstadtbahnhöfe Deutschlands.' },
    { id:'fuggerwelser', name:'Fugger und Welser Erlebnismuseum', wiki:'Fugger und Welser Erlebnismuseum', ll:[48.3713,10.8983],
      text:'Hier erzählt ein Museum von den beiden großen Augsburger Handelsfamilien. Die Welser waren so mächtig, dass Kaiser Karl der Fünfte ihnen ein Stück Südamerika überließ: Ab 1528 verwalteten sie Teile des heutigen Venezuela.' },
    { id:'dioezesan', name:'Diözesanmuseum St. Afra', wiki:'Diözesanmuseum St. Afra', ll:[48.3735,10.8960],
      text:'Im Diözesanmuseum neben dem Dom stehen die originalen Flügel der bronzenen Domtür aus dem 11. Jahrhundert, mit Löwen, Kentauren und biblischen Szenen.' },
    { id:'gignoux', name:'Gignoux-Haus', wiki:'Gignoux-Haus', ll:[48.3652,10.9031],
      text:'Das Gignoux-Haus ist ein Rokoko-Palais aus dem 18. Jahrhundert. Gebaut hat es ein Kattunfabrikant, also einer, der mit bedruckten Baumwollstoffen reich wurde. Die Textilindustrie hat Augsburg lange vor den Fabrikschloten geprägt.' },
    { id:'goldsaal', name:'Elias-Holl-Platz', ll:[48.3679,10.8999],
      text:'Du bist am Elias-Holl-Platz, benannt nach dem Stadtbaumeister, dem Augsburg Rathaus, Zeughaus, Stadtmetzg und viele Tore verdankt. Kaum ein Baumeister hat eine deutsche Stadt so geprägt wie er.' },
  ],

  zones:[
    { id:'lech', ll:[48.3668,10.9012], r:150, text:'Du bist jetzt im Lechviertel. Hör mal hin: Das Rauschen kommt von den Kanälen, die hier durch die Gassen fließen. Früher war das hier das Viertel der Handwerker, heute ist es eine der charmantesten Ecken der Stadt.' },
    { id:'max', ll:[48.3652,10.8997], r:110, text:'Du bist auf der Maximilianstraße, der Prachtstraße der Altstadt. Hier wohnten die reichsten Handelsfamilien der Stadt, deshalb reiht sich ein Palais ans nächste.' },
    { id:'dom', ll:[48.3726,10.8966], r:170, text:'Du bist im Domviertel. Auf diesem Hügel zwischen Lech und Wertach lag einst das Zentrum der römischen Stadt Augusta Vindelicum. Später regierten hier die Bischöfe.' },
    { id:'ulrich', ll:[48.3608,10.9012], r:110, text:'Du bist im Ulrichsviertel am südlichen Ende der Altstadt. Die Gassen werden schmaler und ruhiger, und über allem thront die Basilika.' },
    { id:'jakober', ll:[48.3684,10.9070], r:200, text:'Du bist in der Jakobervorstadt. Hier wohnten früher einfache Leute, Weber und Tagelöhner, außerhalb der alten Kernstadt. Kein Zufall, dass Jakob Fugger genau hier seine Fuggerei bauen ließ.' },
    { id:'textil', ll:[48.3625,10.9150], r:330, text:'Du bist im Textilviertel. Im 19. Jahrhundert ratterten hier tausende Webstühle in riesigen Fabriken, angetrieben von der Wasserkraft der Kanäle.' },
  ]
};
