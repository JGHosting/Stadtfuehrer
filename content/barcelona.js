/* Inhalte: Barcelona
   Koordinaten sind Näherungswerte und werden beim Start über die Wikipedia-API präzisiert.
   Änderst du Texte hier, erzeugt GitHub beim nächsten Deploy automatisch neue KI-Audios.
   Faktenstand: Oktober 2026 (Sagrada Família: Jesusturm im Februar 2026 vollendet, gesegnet am 10. Juni 2026). */
(globalThis.CITY_DATA = globalThis.CITY_DATA || {}).barcelona = {
  id:'barcelona', name:'Barcelona', tagline:'gegründet als römisches Barcino', center:[41.3851,2.1734],
  starts:[ {id:'catalunya', name:'Plaça de Catalunya', ll:[41.3870,2.1700]}, {id:'sagradastart', name:'Sagrada Família', ll:[41.4040,2.1752]}, {id:'barcelonetastart', name:'Barceloneta', ll:[41.3805,2.1890]} ],
  /* Kategorien: „Must-See“ enthält die bekanntesten Sehenswürdigkeiten. Jede Liste ist nach Berühmtheit sortiert –
     die Tourplanung nimmt die vorderen Einträge zuerst. Ein Ort darf in mehreren Kategorien stehen. */
  categories:[
    {id:'mustsee',  label:'Must-See',                        stops:['sagrada','batllo','rambla','pedrera','catedral','boqueria']},
    {id:'gaudi',    label:'Gaudí & Modernisme',              stops:['sagrada','batllo','pedrera','palaumusica','palauguell','placareial']},
    {id:'gotik',    label:'Gotisches Viertel & Geschichte',  stops:['catedral','santamaria','santjaume','placareial','colom','arctriomf']},
    {id:'kunst',    label:'Kunst & Musik',                   stops:['picasso','palaumusica','palauguell','arctriomf']},
    {id:'genuss',   label:'Märkte & Flanieren',              stops:['boqueria','rambla','placareial','barceloneta','santamaria']},
    {id:'meer',     label:'Meer & Parks',                    stops:['barceloneta','ciutadella','colom','arctriomf']},
  ],
  /* Begrüßung und Abschied auf Katalanisch */
  dialect:{hello:'Hola', bye:'adéu'},
  intro:'Hola und herzlich willkommen in Barcelona! Schon die Römer hatten hier eine kleine Stadt namens Barcino, und ihre Spuren findest du bis heute mitten in der Altstadt. Im Mittelalter wurde Barcelona eine reiche Handelsstadt am Mittelmeer, und um 1900 erfand sie sich mit Antoni Gaudí und dem Modernisme noch einmal ganz neu. Hier spricht man Katalanisch und Spanisch, und auf Schildern und in den Gassen wirst du vor allem Katalanisch begegnen.',
  stops:[
  { id:'sagrada', name:'Sagrada Família', wiki:'Sagrada Família', ll:[41.4036,2.1744], dwell:20,
    teaser:'Gaudís Lebenswerk und seit Kurzem die höchste Kirche der Welt.',
    story:[
      'Vor dir steht die Sagrada Família, die wohl berühmteste Baustelle der Welt. Der Grundstein wurde am 19. März 1882 gelegt, damals noch nach Plänen des Architekten Francisco de Paula del Villar, der eine ziemlich gewöhnliche neugotische Kirche bauen wollte. Schon nach etwa einem Jahr gab er auf, und ein junger Architekt übernahm: Antoni Gaudí. Er warf die Pläne um und machte die Kirche zu seinem Lebenswerk. Über vierzig Jahre hat er daran gearbeitet, und in seinen letzten Lebensjahren kümmerte er sich um fast nichts anderes mehr.',
      'Am 7. Juni 1926 wurde Gaudí auf seinem täglichen Weg zur Beichte in die Kirche Sant Felip Neri von einer Straßenbahn erfasst. Er war schlicht gekleidet und hatte keine Papiere dabei, deshalb erkannte ihn zunächst niemand, und man hielt ihn für einen armen Mann. Drei Tage später, am 10. Juni, ist er gestorben. Begraben liegt er hier, in der Krypta seiner eigenen Kirche. Im Jahr 2025 hat ihn die katholische Kirche zum Ehrwürdigen erklärt, ein erster Schritt auf dem langen Weg zu einer möglichen Seligsprechung.',
      'Und jetzt wird es spannend: Im Februar 2026 wurde das letzte Stück des Kreuzes auf den Jesusturm gesetzt, den mittleren und höchsten Turm. Mit 172,5 Metern ist die Sagrada Família seitdem die höchste Kirche der Welt, rund elf Meter höher als das Ulmer Münster. Gaudí soll den Turm bewusst etwas niedriger geplant haben als den Hausberg Montjuïc, denn Menschenwerk sollte Gottes Werk nicht übertreffen. Am 10. Juni 2026, genau hundert Jahre nach Gaudís Tod, hat Papst Leo der Vierzehnte den Turm gesegnet. Fertig ist die Kirche trotzdem noch nicht: Vor allem die große Hauptfassade, die Glorienfassade, fehlt noch.'],
    fact:'Jahrzehntelang wurde hier ohne gültige Baugenehmigung gebaut. Erst 2019 hat die Stadt Barcelona eine offizielle Genehmigung erteilt.',
    look:'Die Geburtsfassade, die noch zu Gaudís Lebzeiten entstand. Schau ganz unten an die Säulen am Mittelportal: Sie stehen auf zwei Schildkröten, einer vom Land und einer aus dem Meer.' },

  { id:'batllo', name:'Casa Batlló', wiki:'Casa Batlló', ll:[41.3916,2.1649], dwell:12,
    teaser:'Das Haus der Knochen, mit einem Drachen auf dem Dach.',
    story:[
      'Du stehst am Passeig de Gràcia, der Prachtstraße des Eixample, der großen Stadterweiterung des 19. Jahrhunderts. Das schillernde Haus vor dir war ursprünglich ein ganz gewöhnliches Wohnhaus aus dem Jahr 1877. Der Textilfabrikant Josep Batlló ließ es von 1904 bis 1906 von Gaudí umbauen, und der machte daraus eines der fantasievollsten Häuser Europas.',
      'In Barcelona nennt man es auch Casa dels ossos, das Haus der Knochen. Schau dir die Säulen an den unteren Fenstern an, sie erinnern an Knochen, und die Balkone sehen aus wie Masken. Eine beliebte Deutung sagt: Das gewölbte Dach ist der Rücken eines Drachen, und das Türmchen mit dem Kreuz ist die Lanze des heiligen Georg, auf Katalanisch Sant Jordi, des Schutzpatrons von Katalonien.',
      'Gaudí war hier übrigens nicht allein. In diesem Häuserblock stehen gleich mehrere Stars des Modernisme nebeneinander, darunter die Casa Amatller von Josep Puig i Cadafalch und die Casa Lleó Morera von Lluís Domènech i Montaner. Weil die Architekten sich hier gegenseitig übertrumpfen wollten, so scheint es, heißt das Stück Straße Illa de la Discòrdia, der Block der Zwietracht.'],
    fact:'Seit 1993 gehört das Haus der Familie Bernat, die mit dem Lutscher Chupa Chups bekannt geworden ist.',
    look:'Das Dach mit seinen schimmernden Keramikschuppen und dem kleinen Turm mit dem Kreuz obendrauf.' },

  { id:'rambla', name:'La Rambla', wiki:'La Rambla (Barcelona)', ll:[41.3832,2.1717], dwell:10,
    teaser:'Die berühmteste Flaniermeile Spaniens, auf einem alten Bachbett.',
    story:[
      'Willkommen auf der Rambla, der berühmtesten Straße Barcelonas. Sie ist rund 1,2 Kilometer lang und führt von der Plaça de Catalunya hinunter bis zum Hafen. Das Wort Rambla stammt aus dem Arabischen und bezeichnet ein Bachbett, das meist trocken ist und nur nach starkem Regen Wasser führt. Genau so etwas lief hier früher entlang, vor der mittelalterlichen Stadtmauer. Erst als die Stadt wuchs und der Bach umgeleitet wurde, entstand nach und nach eine Straße.',
      'Eigentlich ist die Rambla gar nicht eine Straße, sondern fünf. Jeder Abschnitt hat seinen eigenen Namen: Canaletes, Estudis, Sant Josep, auch Rambla de les Flors genannt, dann Caputxins und Santa Mònica. Deshalb sagen viele Leute in Barcelona auch Les Rambles, in der Mehrzahl. Wenn du in Richtung Meer schaust, liegt links das Barri Gòtic und rechts der Raval.',
      'Der Dichter Federico García Lorca soll die Rambla die einzige Straße der Welt genannt haben, von der er sich wünschte, sie würde nie enden. Heute schieben sich hier Einheimische, Straßenkünstler und Menschen aus aller Welt aneinander vorbei. Lass dich treiben, aber halt im Gedränge deine Tasche gut fest.'],
    fact:'Ganz oben an der Rambla steht der Brunnen von Canaletes. Der Legende nach kommt jeder, der daraus trinkt, wieder nach Barcelona zurück.',
    look:'Auf halber Strecke, auf dem Pla de l’Os, liegt ein rundes Bodenmosaik von Joan Miró. Die meisten laufen achtlos darüber.' },

  { id:'pedrera', name:'Casa Milà', wiki:'Casa Milà', ll:[41.3953,2.1619], dwell:12,
    teaser:'Ein Haus wie ein Steinbruch, mit Kriegern auf dem Dach.',
    story:[
      'Dieses wellige Haus ist die Casa Milà, Gaudís letztes großes Wohnhaus, bevor er sich ganz der Sagrada Família widmete. Gebaut hat er es ab 1906 für das Ehepaar Pere Milà und Roser Segimon. Vielen Leuten in Barcelona war die wuchtige, unregelmäßige Steinfassade damals viel zu seltsam, und sie tauften das Haus spöttisch La Pedrera, den Steinbruch. Der Spitzname ist bis heute geblieben.',
      'Technisch war das Haus seiner Zeit weit voraus. Die Steinfassade trägt sich selbst, im Inneren gibt es keine tragenden Wände, und so konnte man die Wohnungen ganz frei aufteilen. Im Keller war sogar schon Platz für Autos vorgesehen. Eine große Marienfigur, die oben auf die Fassade sollte, wurde allerdings nie aufgestellt: Nach den kirchenfeindlichen Unruhen der Tragischen Woche von 1909 verzichteten die Bauherren darauf.',
      'Das Highlight ist das Dach. Treppenaufgänge, Lüftungsschächte und Schornsteine hat Gaudí in Skulpturen verwandelt, die aussehen wie Wächter mit Helmen. Der Dichter Pere Gimferrer nannte das Dach deshalb den Garten der Krieger. Seit 1984 gehört die Casa Milà zusammen mit anderen Werken Gaudís zum Weltkulturerbe. Von oben hast du außerdem einen tollen Blick über das schachbrettartige Eixample, und wenn du genau hinschaust, entdeckst du in der Ferne sogar die Türme der Sagrada Família.'],
    fact:'Gaudí und Milà stritten sich vor Gericht ums Honorar. Gaudí gewann 1916, und das Geld, 105.000 Peseten, spendete er für wohltätige Zwecke.',
    look:'Die schmiedeeisernen Balkongitter. Sie sehen aus wie wild wuchernde Pflanzen oder Seetang, und keines gleicht genau dem anderen.' },

  { id:'catedral', name:'Kathedrale von Barcelona', wiki:'Kathedrale von Barcelona', ll:[41.3839,2.1764], dwell:12,
    teaser:'Gotische Kathedrale mit dreizehn Gänsen im Kreuzgang.',
    story:[
      'Vor dir steht die Kathedrale vom Heiligen Kreuz und der heiligen Eulalia, mitten im Barri Gòtic. Mit dem gotischen Bau hat man 1298 begonnen, auf den Fundamenten älterer Kirchen. Der Kreuzgang war 1448 fertig, rund 150 Jahre später. Ganz schön viel Geduld für eine einzige Kirche.',
      'Die prächtige Fassade, die du gerade anschaust, ist übrigens viel jünger, als sie aussieht. Jahrhundertelang hatte die Kathedrale vorne nur eine schlichte, unfertige Front. Erst Ende des 19. Jahrhunderts bekam sie ihr neugotisches Gesicht, bezahlt vor allem von einem reichen Bankier und seiner Familie, und der Mittelturm wurde sogar erst 1913 vollendet.',
      'Die Stadtpatronin Eulalia war der Überlieferung nach ein Mädchen von dreizehn Jahren, das in der Römerzeit wegen seines christlichen Glaubens gefoltert und getötet wurde. Ihre Gebeine ruhen in der Krypta unter dem Altar. Und im Kreuzgang leben bis heute dreizehn weiße Gänse, eine für jedes Lebensjahr der Heiligen.'],
    fact:'Zu Fronleichnam tanzt im Kreuzgang ein Ei auf dem Wasserstrahl des Brunnens. Der alte Brauch heißt L’ou com balla, das tanzende Ei.',
    look:'Die dreizehn weißen Gänse im Kreuzgang, zwischen Palmen und einem kleinen Brunnen.' },

  { id:'boqueria', name:'Mercat de la Boqueria', wiki:'Mercat de la Boqueria', ll:[41.3818,2.1718], dwell:15,
    teaser:'Der berühmteste Markt der Stadt, mit einer Geschichte von über achthundert Jahren.',
    story:[
      'Hier an der Rambla wird schon sehr lange gehandelt. Bereits 1217 ist von Verkaufstischen die Rede, an denen vor dem alten Stadttor Fleisch verkauft wurde. Damals lag dieser Ort noch vor der Stadtmauer, und die Bauern aus dem Umland boten hier ihre Waren an. Aus diesem kleinen Markt vor dem Tor wurde mit der Zeit der berühmteste Markt der Stadt.',
      'Die heutige Markthalle steht auf dem Gelände eines früheren Klosters, das dem heiligen Josef geweiht war. Es wurde bei Unruhen im Jahr 1835 in Brand gesteckt und später abgerissen. Am Josefstag 1840 begannen dann die Arbeiten am Markt, und deshalb heißt er offiziell Mercat de Sant Josep. Das große Metalldach, unter dem du stehst, kam 1914 dazu.',
      'Drinnen ist es ein Fest für alle Sinne: Berge von Obst, Schinken, Käse, Fischstände mit Tintenfischen und Meeresfrüchten. An den kleinen Theken in der Halle bekommst du frisch gekochte Gerichte direkt vom Markt. Am entspanntesten ist es oft vormittags, wenn auch noch Leute aus der Nachbarschaft hier einkaufen.'],
    fact:'Der offizielle Name Mercat de Sant Josep steht sogar über dem Eingang, aber kaum jemand benutzt ihn. Für alle ist das einfach die Boqueria.',
    look:'Das große Eingangstor zur Rambla mit dem Schriftzug Mercat de Sant Josep.' },

  { id:'santamaria', name:'Santa Maria del Mar', wiki:'Santa Maria del Mar', ll:[41.3836,2.1820], dwell:10,
    teaser:'Die Kathedrale des Meeres, gebaut für die Seeleute und Händler des Viertels.',
    story:[
      'Santa Maria del Mar ist die Kirche des alten Hafenviertels La Ribera. Sie war keine Bischofskirche, sondern die Kirche der Seeleute, Kaufleute und Handwerker, die hier wohnten. Am 25. März 1329 wurde der Grundstein gelegt, und im November 1383 setzte man den letzten Stein. Für eine gotische Kirche ist das rasend schnell, und deshalb wirkt sie so einheitlich, wie aus einem Guss.',
      'Eine besondere Rolle spielten die Lastenträger des Hafens, die Bastaixos. Sie schleppten beim Bau die schweren Steine herbei. Der Schriftsteller Ildefonso Falcones hat ihnen mit seinem Roman Die Kathedrale des Meeres ein Denkmal gesetzt, und das Buch wurde später auch als Fernsehserie verfilmt. Die Kirche gehörte den Menschen des Viertels, und genau das spürst du hier bis heute.',
      'Im Juli 1936, zu Beginn des Spanischen Bürgerkriegs, wurde die Kirche angezündet, und sie soll elf Tage lang gebrannt haben. Fast die ganze Ausstattung ging verloren. Gerade deshalb ist der Innenraum heute so schlicht, und du siehst die schlanken achteckigen Säulen und die weiten Bögen in ihrer ganzen Klarheit.'],
    fact:'Die Säulen im Inneren stehen rund dreizehn Meter auseinander. Damit gehören die Bögen hier zu den weitesten der ganzen Gotik.',
    look:'Die Bronzetüren am Hauptportal. Darauf sind die Lastenträger zu sehen, die Steine auf dem Rücken tragen.' },

  { id:'santjaume', name:'Plaça de Sant Jaume', ll:[41.3827,2.1770], dwell:6,
    teaser:'Seit der Römerzeit das Herz der Stadt, mit Regierung und Rathaus Auge in Auge.',
    story:[
      'Du stehst auf der Plaça de Sant Jaume, dem politischen Herzen Barcelonas. Hier, im Zentrum des römischen Barcino, schlug schon vor rund zweitausend Jahren das Herz der Stadt. Ihren Namen hat der Platz von einer mittelalterlichen Kirche, die dem heiligen Jakob geweiht war. Sie wurde 1823 abgerissen, um den Platz zu vergrößern.',
      'Zwei mächtige Gebäude schauen sich hier an. Auf der einen Seite steht der Palau de la Generalitat, der Sitz der katalanischen Regierung, mit seiner Renaissancefassade von 1596. Er gehört zu den wenigen mittelalterlichen Gebäuden in Europa, in denen bis heute die Institution sitzt, die sie einst gebaut hat. Gegenüber steht die Casa de la Ciutat, das Rathaus von Barcelona.',
      'Wenn in Barcelona gefeiert wird, ist dieser Platz oft mittendrin. Bei großen Stadtfesten bauen hier die Castellers ihre berühmten Menschentürme, Stockwerk für Stockwerk, bis ganz oben ein Kind hinaufklettert und die Hand hebt. Erst wenn der Turm danach auch wieder heil abgebaut ist, gilt er als gelungen. Die Menschentürme gehören seit 2010 zum immateriellen Kulturerbe der Menschheit, und wenn du das Glück hast, eine solche Vorführung zu erleben, wirst du die Spannung auf dem ganzen Platz spüren.'],
    fact:'Am Sankt-Georgs-Tag, dem 23. April, schenkt man sich in Katalonien traditionell Rosen und Bücher. Sant Jordi ist der Schutzpatron Kataloniens, und an der Generalitat begegnest du ihm gleich mehrfach.',
    look:'Die Renaissancefassade des Palau de la Generalitat. Über dem Balkon kämpft der heilige Georg mit dem Drachen.' },

  { id:'placareial', name:'Plaça Reial', wiki:'Plaça Reial', ll:[41.3800,2.1751], dwell:8,
    teaser:'Palmen, Arkaden und Laternen vom jungen Gaudí.',
    story:[
      'Nur ein paar Schritte von der Rambla öffnet sich die Plaça Reial, der königliche Platz. Wo du jetzt stehst, war früher ein Kapuzinerkloster. Es wurde in den Unruhen von 1835 zerstört und danach abgerissen, wie mehrere Klöster in dieser Gegend, die bei Unruhen im Jahr 1835 in Brand gesteckt wurden. Auf den frei gewordenen Flächen entstanden später neue Plätze, Märkte und Theater, so auch das Opernhaus Liceu gleich um die Ecke.',
      'Den Platz entwarf danach der Architekt Francesc Daniel Molina, gebaut wurde er zwischen 1848 und 1859. Ringsum laufen Arkaden mit gleichförmigen Fassaden, ganz streng und klassizistisch. In der Mitte stehen hohe Palmen und ein gusseiserner Brunnen mit den drei Grazien. Abends füllen sich die Arkaden mit Restaurants und Bars, und der Platz wird zu einem der lebendigsten Treffpunkte der Altstadt.',
      'Und jetzt schau dir die beiden Laternen genauer an: Sie stammen von Antoni Gaudí. Den Auftrag der Stadt bekam er 1878, ganz am Anfang seiner Karriere, gerade als er sein Architekturstudium abgeschlossen hatte. Es ist eines der wenigen Werke, die Gaudí je für den öffentlichen Raum geschaffen hat, lange bevor ihn irgendjemand kannte.'],
    fact:'Die Laternen sind dem Gott Merkur gewidmet, dem Gott des Handels. Damit wollte Gaudí die Kaufmannsstadt Barcelona ehren.',
    look:'Die Laternen mit ihren sechs Armen. Ganz oben sitzt ein geflügelter Helm, das Zeichen des Merkur.' },

  { id:'palaumusica', name:'Palau de la Música Catalana', wiki:'Palau de la Música Catalana', ll:[41.3875,2.1755], dwell:10,
    teaser:'Ein Konzertsaal wie ein gläserner Garten.',
    story:[
      'Dieser Konzertpalast ist das Meisterwerk von Lluís Domènech i Montaner, neben Gaudí einem der ganz großen Architekten des Modernisme. Gebaut wurde er von 1905 bis 1908 für den Chor Orfeó Català und eröffnet am 9. Februar 1908. Die Fassade ist übersät mit Mosaiken, Säulen und Skulpturen, und man weiß kaum, wo man zuerst hinschauen soll.',
      'Drinnen wird es noch prächtiger. Über dem Saal hängt ein riesiges Oberlicht aus buntem Glas: eine umgedrehte Kuppel in Gold, umgeben von Blau, wie eine Sonne am Himmel. Tagsüber fällt so viel Licht herein, dass der Saal als einziger Konzertsaal Europas gilt, der ganz mit Tageslicht beleuchtet werden kann.',
      'Hinter der Bühne tauchen achtzehn Frauenfiguren aus der Wand auf, die Musen, und jede spielt ein anderes Instrument. Seit 1997 gehört der Palau de la Música zum Weltkulturerbe, zusammen mit dem Krankenhaus Sant Pau, das ebenfalls von Domènech i Montaner stammt. Bis heute ist der Palau ein lebendiger Konzertsaal, hier wird gesungen und musiziert wie vor über hundert Jahren.'],
    fact:'Die Musen hinter der Bühne sind halb Mosaik und halb Skulptur: Ihre Körper liegen flach in der Wand, Köpfe und Oberkörper treten plastisch heraus.',
    look:'Die große Skulpturengruppe an der Hausecke. Sie steht für das katalanische Lied und die Musik des Landes.' },

  { id:'picasso', name:'Museu Picasso', wiki:'Museu Picasso', ll:[41.3852,2.1809], dwell:12,
    teaser:'Der junge Picasso, in fünf mittelalterlichen Palästen.',
    story:[
      'Die Carrer de Montcada war im Mittelalter eine der vornehmsten Straßen der Stadt, hier bauten reiche Kaufleute ihre Paläste. Fünf dieser Paläste bilden heute zusammen das Picasso-Museum. Eröffnet wurde es am 9. März 1963. Bevor du hineingehst, lohnt sich schon ein Spaziergang durch die Straße selbst. Hinter den schweren Toren verbergen sich gotische Innenhöfe, und an den mächtigen Fassaden erkennst du, wie reich die Familien hier einmal waren. Heute findest du hier neben dem Museum auch Galerien und kleine Cafés.',
      'Pablo Picasso war dreizehn, als seine Familie nach Barcelona zog. Hier ging er auf die Kunstschule, und hier fand er seine ersten Freunde unter den Künstlern der Stadt. Das Museum zeigt deshalb besonders viel aus seinen frühen Jahren, und du kannst sehen, wie verblüffend gut der Teenager schon zeichnen und malen konnte.',
      'Bei der Eröffnung gab es ein Problem: Picasso war ein entschiedener Gegner des Diktators Franco. Deshalb eröffnete das Museum offiziell als Sammlung Sabartés, benannt nach Picassos Freund und Sekretär Jaume Sabartés, der den Grundstock gestiftet hatte. Ein Höhepunkt ist heute die Serie Las Meninas von 1957, Picassos Variationen über das berühmte Gemälde von Velázquez.'],
    fact:'Die Serie Las Meninas umfasst 58 Bilder, 45 davon sind Variationen über ein einziges Gemälde von Velázquez. Dazu kommen Tauben, Landschaften und ein Porträt seiner Frau Jacqueline.',
    look:'Die Innenhöfe der gotischen Paläste in der Carrer de Montcada, mit ihren offenen Steintreppen.' },

  { id:'palauguell', name:'Palau Güell', wiki:'Palau Güell', ll:[41.3789,2.1742], dwell:10,
    teaser:'Gaudís Stadtpalast im Raval, mit einem Sternenhimmel unter der Kuppel.',
    story:[
      'Du bist jetzt im Raval, in der Carrer Nou de la Rambla. Hier ließ sich Eusebi Güell, Gaudís großer Förderer, ab 1886 einen Stadtpalast bauen. Für den jungen Gaudí war das einer der ersten großen Aufträge, und er durfte sich richtig austoben. Güell war ein reicher Industrieller, und er ließ seinem Architekten viel Freiheit. Das Grundstück war eng und lag mitten in einem dicht bebauten Viertel, und gerade deshalb ist es spannend zu sehen, wie viel Raum Gaudí hier hineingezaubert hat.',
      'Schon der Eingang ist ungewöhnlich: zwei große Tore, durch die die Kutschen direkt ins Haus fahren konnten. Die Pferde wurden über eine Rampe hinunter in die Ställe im Untergeschoss geführt. Oben liegt der große Festsaal, über dem sich eine hohe Kuppel wölbt. Hier fanden Konzerte und Feste statt, und eine kleine Kapelle für Gottesdienste war ebenfalls in den Saal eingebaut.',
      'In der Kuppel sind kleine Öffnungen. Abends hängte man draußen Laternen davor, und dann sah die Decke aus wie ein Sternenhimmel. Seit 1984 gehört der Palast zum Weltkulturerbe, und seit 2011 ist er nach langer Restaurierung wieder vollständig zu besichtigen. Wer hinaufsteigt, landet auf einer Dachterrasse mit einem wunderbaren Blick über die Dächer des Raval.'],
    fact:'Auf dem Dach stehen bunte Schornsteine, verkleidet mit Mosaiken aus Keramikscherben. Diese Technik, Trencadís genannt, wurde später zu einem Markenzeichen von Gaudí.',
    look:'Die beiden großen Eingangstore mit ihrem kunstvoll geschmiedeten Eisen.' },

  { id:'colom', name:'Port Vell und Kolumbus-Säule', ll:[41.3758,2.1778], dwell:10,
    teaser:'Wo die Rambla aufs Meer trifft, wacht Kolumbus über den alten Hafen.',
    story:[
      'Am unteren Ende der Rambla stehst du vor der Kolumbus-Säule. Das Denkmal ist rund sechzig Meter hoch, gebaut wurde es für die Weltausstellung von 1888. Es erinnert daran, dass Kolumbus nach seiner ersten Reise nach Amerika hier in Barcelona vom spanischen Königspaar Isabella und Ferdinand empfangen wurde.',
      'Viele glauben, Kolumbus zeige mit seinem ausgestreckten Arm nach Amerika. Tatsächlich zeigt er ungefähr nach Südsüdost, also eher Richtung Nordafrika. Wahrscheinlich sollte er einfach hinaus aufs Meer weisen. Im Inneren der Säule fährt übrigens ein kleiner Aufzug hinauf zu einer Aussichtsplattform direkt unter seinen Füßen.',
      'Vor dir liegt der Port Vell, der alte Hafen. Vor den Olympischen Spielen 1992 war hier vieles grau und heruntergekommen, mit Lagerhallen und Bahngleisen. Heute kannst du über die Rambla de Mar, einen Holzsteg mit einer drehbaren Brücke, direkt aufs Wasser hinausspazieren. Damit Boote durchfahren können, lässt sich die Brücke zur Seite schwenken. Am anderen Ende liegt das Einkaufszentrum Maremagnum, und rundherum schaukeln Segelboote und Jachten im Hafenbecken.'],
    fact:'Die Statue von Kolumbus allein ist gut sieben Meter groß. Von unten wirkt sie viel kleiner, weil sie so hoch oben steht.',
    look:'Die Löwen am Sockel der Säule. Auf jeder Seite einer Treppe sitzt einer, und sie sind ein beliebtes Fotomotiv.' },

  { id:'barceloneta', name:'Barceloneta und Strand', wiki:'Barceloneta', ll:[41.3790,2.1920], dwell:15,
    teaser:'Das alte Fischerviertel und der Stadtstrand.',
    story:[
      'Die Barceloneta ist ein Viertel mit einer ungewöhnlichen Geschichte. Nach dem Fall Barcelonas 1714 ließ der spanische König eine riesige Festung bauen, die Ciutadella, und dafür musste ein großer Teil des Viertels La Ribera weichen. Für viele der Menschen, die ihr Zuhause verloren hatten, entstand ab 1754 hier am Hafen ein neues Viertel, geplant vom Militäringenieur Juan Martín Cermeño.',
      'Deshalb sind die Straßen so schnurgerade und schmal, mit langen Reihen schmaler Häuser. Hier wohnten Fischer, Seeleute und Hafenarbeiter, oft in winzigen Wohnungen. Bis heute hängt hier Wäsche an den Balkonen, und in den kleinen Bars gibt es Fisch und Meeresfrüchte. Wenn du hier durch die Gassen bummelst, achte auf die Nachbarn, die auf ihren Stühlen vor der Tür sitzen und sich unterhalten. Die Barceloneta hat sich bei allem Trubel ein Stück Dorfleben bewahrt.',
      'Der Strand, wie du ihn heute kennst, ist ziemlich jung. Vor den Olympischen Spielen 1992 versperrten Industrie und Bahngleise vielerorts den Weg zum Meer. Die Stadt baute die Küste um, legte die Strände und die Promenade neu an und riss dabei auch die alten Strandlokale ab, die Chiringuitos.'],
    fact:'Die Künstlerin Rebecca Horn hat der alten Barceloneta 1992 ein Denkmal gesetzt: vier rostige, schief übereinander gestapelte Würfel, rund zehn Meter hoch.',
    look:'Die gestapelten Würfel von Rebecca Horn am Strand. Sie heißen L’Estel ferit, der verwundete Stern.' },

  { id:'ciutadella', name:'Parc de la Ciutadella', wiki:'Parc de la Ciutadella', ll:[41.3881,2.1875], dwell:15,
    teaser:'Wo einst eine verhasste Festung stand, liegt heute der grüne Stadtpark.',
    story:[
      'Am 11. September 1714 endete die lange Belagerung Barcelonas mit dem Sieg von König Philipp dem Fünften. Um die Stadt unter Kontrolle zu halten, ließ er hier eine gewaltige Zitadelle bauen. Für die Menschen in Barcelona war sie über hundert Jahre lang ein Symbol der Unterdrückung, und der 11. September ist bis heute der katalanische Nationalfeiertag.',
      'Erst 1869 bekam die Stadt das Gelände, und die Festung verschwand. Der Architekt Josep Fontserè machte daraus einen Park, und 1888 fand hier die erste Weltausstellung Barcelonas statt. Von der alten Festung sind nur wenige Gebäude geblieben. Im früheren Arsenal tagt heute das katalanische Parlament.',
      'Das Prunkstück des Parks ist die Cascada, ein großer Brunnen mit Wasserfall, goldenen Figuren und Grotten. Daran soll übrigens als Student auch ein gewisser Antoni Gaudí mitgearbeitet haben. Heute ist der Park das Wohnzimmer der Stadt, mit Picknickdecken, Musikern und Ruderbooten auf dem kleinen See. Im hinteren Teil des Parks liegt übrigens auch der Zoo von Barcelona. An Wochenenden ist hier besonders viel los, und du kannst den Menschen beim Jonglieren, Tanzen und Musizieren zuschauen.'],
    fact:'Mitten im Park steht ein Mammut in Lebensgröße, eine Steinskulptur des Bildhauers Miquel Dalmau von 1907.',
    look:'Die Cascada mit dem goldenen Viergespann ganz oben.' },

  { id:'arctriomf', name:'Arc de Triomf', wiki:'Arc de Triomf', ll:[41.3910,2.1806], dwell:5,
    teaser:'Ein Triumphbogen ohne Krieg, als Tor zur Weltausstellung.',
    story:[
      'Dieser Triumphbogen aus rotem Backstein war das Haupttor zur Weltausstellung von 1888. Entworfen hat ihn der Architekt Josep Vilaseca, und er ist rund dreißig Meter hoch. Durch ihn gingen die Besucher über die breite Allee hinunter zum Ausstellungsgelände im heutigen Parc de la Ciutadella. Am anderen Ende dieser Allee kannst du von hier aus schon die Bäume des Parks sehen.',
      'Ungewöhnlich ist, was hier gefeiert wird: kein Feldherr und kein gewonnener Krieg. Der Bogen feiert den Fortschritt, die Wissenschaft, die Kunst, die Industrie und den Handel. Der Stil erinnert an maurische Bauten in Spanien, Fachleute nennen das Neomudéjar. Typisch dafür ist der rote Backstein mit seinen Mustern und Verzierungen. Rund um den Bogen stehen zwölf Frauenfiguren, die den Ruhm darstellen. Die Weltausstellung sollte zeigen, dass Barcelona eine moderne, selbstbewusste Stadt geworden war.',
      'Ganz oben auf der Vorderseite siehst du einen langen Fries des Bildhauers Josep Reynés. Er zeigt die Stadt Barcelona, die die Nationen der Welt zur Ausstellung empfängt. Heute ist der Bogen ein beliebter Treffpunkt, und auf der Allee davor wird Skateboard gefahren, jongliert und Musik gemacht.'],
    fact:'Auf der Rückseite des Bogens gibt es einen zweiten Fries. Er zeigt die Preisverleihung an die besten Aussteller der Weltausstellung.',
    look:'Den Fries ganz oben auf der Vorderseite, mit der Figur der Stadt Barcelona in der Mitte.' },
  ],

  /* „Schöne Wege“: Parks, Ufer, Gassen – ohne Ansage, nur damit die Route dort entlangführt */
  scenic:[
    {id:'rambla_mar',      name:'Rambla de Mar und Port Vell',   ll:[41.3750,2.1810], weight:1.4},
    {id:'moll_fusta',      name:'Moll de la Fusta',              ll:[41.3780,2.1815], weight:1.3},
    {id:'passeig_gracia',  name:'Passeig de Gràcia',             ll:[41.3935,2.1635], weight:1.3},
    {id:'ciutadella_park', name:'Parc de la Ciutadella',         ll:[41.3870,2.1860], weight:1.5},
    {id:'lluis_companys',  name:'Passeig de Lluís Companys',     ll:[41.3893,2.1822], weight:1.3},
    {id:'carrer_bisbe',    name:'Gassen des Barri Gòtic',        ll:[41.3834,2.1767], weight:1.2},
    {id:'passeig_maritim', name:'Strandpromenade',               ll:[41.3800,2.1925], weight:1.5},
  ],
  wayside:[
    { id:'canaletes', name:'Font de Canaletes', ll:[41.3855,2.1699],
      text:'Der Brunnen von Canaletes am oberen Ende der Rambla. Der Legende nach kehrt jeder, der hier trinkt, nach Barcelona zurück. Und wenn der FC Barcelona einen Titel gewinnt, feiern die Fans genau hier.' },
    { id:'miro', name:'Mosaik von Joan Miró', ll:[41.3812,2.1733],
      text:'Unter deinen Füßen liegt ein rundes Bodenmosaik von Joan Miró, eingeweiht im Dezember 1976. Es sollte alle begrüßen, die vom Meer her in die Stadt kommen.' },
    { id:'pontbisbe', name:'Pont del Bisbe', ll:[41.3834,2.1767],
      text:'Die verzierte Brücke über der Carrer del Bisbe sieht mittelalterlich aus, stammt aber erst von 1928. Unter dem Bogen soll ein Totenkopf mit einem Dolch versteckt sein, und der Sage nach geht Barcelona unter, wenn jemand den Dolch herauszieht.' },
    { id:'augustus', name:'Säulen des Augustustempels', ll:[41.3836,2.1773],
      text:'Versteckt in einem Innenhof in der Carrer del Paradís stehen vier römische Säulen. Sie gehörten zum Tempel des römischen Barcino, der auf dem kleinen Hügel Mont Tàber stand, dem höchsten Punkt der Altstadt.' },
    { id:'fossar', name:'Fossar de les Moreres', ll:[41.3835,2.1824],
      text:'Der kleine Platz neben Santa Maria del Mar war früher ein Friedhof. Hier wurden Verteidiger der Stadt aus der Belagerung von 1714 begraben. Seit 2001 brennt hier eine ewige Flamme zu ihrer Erinnerung.' },
    { id:'quatregats', name:'Els Quatre Gats', wiki:'Els Quatre Gats', ll:[41.3856,2.1738],
      text:'In diesem Lokal trafen sich um 1900 die Künstler der Stadt, nach dem Vorbild des Pariser Kabaretts Le Chat Noir. Hier hatte der junge Picasso eine seiner allerersten Ausstellungen.' },
    { id:'santacaterina', name:'Mercat de Santa Caterina', ll:[41.3861,2.1786],
      text:'Schau mal nach oben: Der Markt von Santa Caterina hat ein wellenförmiges Dach aus bunter Keramik. Entworfen haben es die Architekten Enric Miralles und Benedetta Tagliabue, fertig war der Umbau 2005.' },
    { id:'liceu', name:'Gran Teatre del Liceu', wiki:'Gran Teatre del Liceu', ll:[41.3805,2.1736],
      text:'Hinter dieser eher unscheinbaren Fassade an der Rambla liegt die Oper von Barcelona, eröffnet 1847. Sie ist zweimal fast vollständig abgebrannt, zuletzt 1994, und wurde jedes Mal wieder aufgebaut.' },
  ],

  zones:[
    { id:'gotic_z', ll:[41.3830,2.1762], r:250, text:'Du bist im Barri Gòtic, dem ältesten Teil der Stadt. Hier stand schon das römische Barcino, und in den engen Gassen steckt fast an jeder Ecke ein Stück Mittelalter.' },
    { id:'born_z', ll:[41.3850,2.1815], r:200, text:'Du bist im Born, im alten Viertel La Ribera. Früher wohnten hier Kaufleute, Handwerker und Seeleute, heute findest du kleine Läden, Bars und Ateliers.' },
    { id:'raval_z', ll:[41.3800,2.1690], r:350, text:'Du bist im Raval, der alten Vorstadt vor der mittelalterlichen Mauer. Hier ist Barcelona besonders bunt, laut und vielsprachig.' },
    { id:'eixample_z', ll:[41.3925,2.1655], r:400, text:'Du bist im Eixample, der großen Stadterweiterung aus dem 19. Jahrhundert. Typisch sind die abgeschrägten Ecken der Häuserblöcke, die jede Kreuzung zu einem kleinen Platz machen.' },
    { id:'barceloneta_z', ll:[41.3800,2.1890], r:300, text:'Du bist in der Barceloneta, dem alten Fischerviertel. Die schmalen, schnurgeraden Gassen führen dich direkt ans Meer.' },
  ]
};
