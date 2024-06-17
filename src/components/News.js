import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
  articles = [
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "'I wanted seven kids but instead I became a nun'",
    "description": "Three women explain why they left everyday life to join a religious order.",
    "url": "https://www.bbc.com/news/articles/c255rpwyxr2o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5036/live/ab014830289911efbc7e6b0c5d338cd8.jpg",
    "publishedAt": "20240616T01:08:55Z",
    "content": "By Paul Moseley, BBC News, Norfolk\r\nSister Catherine says she has been on \"an amazing journey\"\r\nWould you give up the chance to have a partner, children and a choice of career?\r\nProbably not, but som… [+7008 chars]"
    },
    {
    "source": {
    "id": "businessinsider",
    "name": "Business Insider"
    },
    "author": "Linette Lopez",
    "title": "Apple is the first tech giant to get AI right",
    "description": "Unlike Google and Microsoft, Apple is using AI to do what the technology has proved it can do rather than unreliable features.",
    "url": "https://www.businessinsider.com/applewinnerbigtechcompanyartificalintelligencegooglemicrosoftopenai20246",
    "urlToImage": "https://i.insider.com/666c54c2ed9a404d829dccba?width=1200&format=jpeg",
    "publishedAt": "20240616T09:57:01Z",
    "content": "Apple's new iPhone features are the first time a Big Tech company has made AI useful for normal people.Apple; Getty Images; Alyssa powell/BI\r\nOn Monday, as part of its Worldwide Developers Conference… [+8275 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Uriel Bederman",
    "title": "Aciertos y errores de ‘Her’, la película que hace más de una década anticipó el boom de los chatbots",
    "description": "La película Her debutó en los cines hace más de una década, en el año 2013. Por entonces, Apple lanzaba el iPhone 5s, Samsung hacía lo propio con el Galaxy S II Plus y, en el terreno de los ordenadores aún restaban dos años para el lanzamiento de Windows 10. …",
    "url": "http://hipertextual.com/2024/06/peliculaherchatbotsanalisis",
    "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wpcontent/uploads/2024/05/peliculaher.jpg?fit=2560%2C1442&quality=55&strip=all&ssl=1",
    "publishedAt": "20240616T08:00:00Z",
    "content": "La película Her debutó en los cines hace más de una década, en el año 2013. Por entonces, Apple lanzaba el iPhone 5s, Samsung hacía lo propio con el Galaxy S II Plus y, en el terreno de los ordenador… [+8985 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Javier Lacort",
    "title": "Apple ha integrado la aplicación Recordatorios en Calendario. Hará falta entender de verdad ambas para no caer en el caos",
    "description": "Una de las características rumoreadas antes de la WWDC 2024 pero no anunciadas por Apple durante la keynote es la integración de la app Recordatorios dentro de Calendario. Siguen siendo aplicaciones independientes, pero la primera se integra en la segunda. Sí…",
    "url": "https://www.xataka.com/aplicaciones/applehaintegradoaplicacionrecordatorioscalendarioharafaltaentenderverdadambasparanocaercaos",
    "urlToImage": "https://i.blogs.es/7f47d8/dest2/840_560.jpeg",
    "publishedAt": "20240616T09:00:51Z",
    "content": "Una de las características rumoreadas antes de la WWDC 2024 pero no anunciadas por Apple durante la keynote es la integración de la app Recordatorios dentro de Calendario. Siguen siendo aplicaciones … [+3825 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Alejandro Alcolea",
    "title": "El truco menos conocido sobre cómo hacer el café en la italiana es al mismo tiempo el más sencillo",
    "description": "Mi compañero Andrés dijo una vez que el mejor truco para hacer café en la cafetera italiana es no hacer el café en la cafetera italiana. De entre todas las máquinas para preparar café, puede que la italiana lleve unos años de capa caída, al menos en España. ¿…",
    "url": "https://www.xataka.com/magnet/trucoconocidocomohacercafeitalianaaltiemposencillo",
    "urlToImage": "https://i.blogs.es/6dccb7/moka_crema1/840_560.jpeg",
    "publishedAt": "20240616T09:30:50Z",
    "content": "Mi compañero Andrés dijo una vez que el mejor truco para hacer café en la cafetera italiana es no hacer el café en la cafetera italiana. De entre todas las máquinas para preparar café, puede que la i… [+9928 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Fran Bouzas",
    "title": "\"Las Quest son mejor producto. Punto\": Zuckerberg critica las Apple Vision Pro. Su argumento es como comparar huevos con limones",
    "description": "Mark Zuckerberg es un gran experto tecnológico. Una mente creativa como pocas, pero también alguien acusado de mezquino. Alguien que ha tenido que disculparse ante el Senado estadounidense, asumir escándalos por el tratamiento de los datos de los usuarios. Na…",
    "url": "https://www.applesfera.com/visionpro/questmejorproductopuntozuckerbergcriticaapplevisionprosuargumentocomocompararhuevoslimones",
    "urlToImage": "https://i.blogs.es/c4ce4c/meta/840_560.jpeg",
    "publishedAt": "20240616T10:00:51Z",
    "content": "Mark Zuckerberg es un gran experto tecnológico. Una mente creativa como pocas, pero también alguien acusado de mezquino. Alguien que ha tenido que disculparse ante el Senado estadounidense, asumir es… [+6571 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Guille Lomener",
    "title": "Esta función de iPadOS 18 me ha sorprendido tanto que ahora no paro de utilizar mi Apple Pencil",
    "description": "Recientemente me compré el iPad Pro M4 junto con el Apple Pencil Pro. Me encanta hacer mapas mentales, apuntar la agenda del día... Afortunadamente pasó la época en la que tenía que tomar largos apuntes en el instituto... porque sí, tengo mala letra. La tiene…",
    "url": "https://www.applesfera.com/ipados/estafunciondeipados18mehasorprendidotantoqueahoranoparodeutilizarmiapplepencil",
    "urlToImage": "https://i.blogs.es/55c763/ipados18/840_560.jpeg",
    "publishedAt": "20240616T08:00:51Z",
    "content": "Recientemente me compré el iPad Pro M4 junto con el Apple Pencil Pro. Me encanta hacer mapas mentales, apuntar la agenda del día... Afortunadamente pasó la época en la que tenía que tomar largos apun… [+2950 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Jesús Quesada",
    "title": "Dejar la casa sola durante el verano ya no es una preocupación con estas cámaras de seguridad en oferta",
    "description": "El verano tiene varias cosas buenas: se hace de noche más tarde, la gente sale más a la calle, los viajes... Pero también tiene sus cosas malas, como que la casa pasa más tiempo sola, a merced de indeseables como ladrones u okupas. Instalar una cámara de segu…",
    "url": "https://www.applesfera.com/seleccion/dejarcasasoladuranteveranonopreocupacionestascamarasseguridadoferta",
    "urlToImage": "https://i.blogs.es/bb9e20/aqarae1/840_560.jpeg",
    "publishedAt": "20240616T09:30:50Z",
    "content": "El verano tiene varias cosas buenas: se hace de noche más tarde, la gente sale más a la calle, los viajes... Pero también tiene sus cosas malas, como que la casa pasa más tiempo sola, a merced de ind… [+3325 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Golem.de"
    },
    "author": "Peter Steinlechner",
    "title": "App Store: Apple drohen millionenschwere DMAStrafen",
    "description": "50 Millionen Euro am Tag: So teuer könnte es für Apple werden, wenn die EUKommission auf Basis des Digital Markets Act gegen den Konzern vorgeht. (DMA, Apple)",
    "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fappstoreappledrohenmillionenschweredmastrafen2406186126.html&referer=https%3A%2F%2Ft.co%2Fe187e3d821",
    "urlToImage": null,
    "publishedAt": "20240616T09:55:01Z",
    "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "HYPEBEAST"
    },
    "author": "info@hypebeast.com (Hypebeast)",
    "title": "Shaquille O'Neal and The Notorious B.I.G.'s \"You Can’t Stop the Reign\" Is Now Available on Streaming",
    "description": "Shaquille O'Neal and The Notorious B.I.G.'s \"You Can't Stop the Reign\" is officially available on streaming services for the first time since its release almost three decades ago.Produced by Chris \"Large\" Jones, the collab was originally released in 1996 and …",
    "url": "https://hypebeast.com/2024/6/shaquilleonealthenotoriousbigyoucantstopthereignsinglestream",
    "urlToImage": "https://imagecdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F06%2F15%2Ftwshaquilleonealthenotoriousbigyoucantstopthereignsinglestream.jpg?w=1080&cbr=1&q=90&fit=max",
    "publishedAt": "20240616T08:58:29Z",
    "content": "Shaquille O’Neal and The Notorious B.I.G.‘s “You Can’t Stop the Reign” is officially available on streaming services for the first time since its release almost three decades ago.\r\nProduced by Chris … [+1013 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "HYPEBEAST"
    },
    "author": "info@hypebeast.com (Hypebeast)",
    "title": "Is Pharrell’s ‘Despicable Me 4’ Soundtrack Cut “Double Life” Also Doubling as a Drake Diss?",
    "description": "About a decade after dropping his biggest hit \"Happy,\" Pharrell Williams returns to the Despicable Me universe with \"Double Life,\" which is set to appear on the soundtrack of the upcoming Despicable Me 4 installment. However, fans are suggesting that the arti…",
    "url": "https://hypebeast.com/2024/6/pharrellwilliamsdoublelifesinglestreamdespicableme4soundtrack",
    "urlToImage": "https://imagecdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F06%2F15%2Ftwpharrellwilliamsdoublelifesinglestreamdespicableme4soundtrack.jpg?w=1080&cbr=1&q=90&fit=max",
    "publishedAt": "20240616T02:53:24Z",
    "content": "About a decade after dropping his biggest hit “Happy,” Pharrell Williams returns to the Despicable Me universe with “Double Life,” which is set to appear on the soundtrack of the upcoming Despicable … [+786 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Les Numériques"
    },
    "author": "Nassim Chentouf",
    "title": "Actualité : Les montres Garmin s'enrichissent d'une nouvelle fonctionnalité avec YouTube Music",
    "description": "Ça y est, YouTube Music intègre enfin les montres connectées de Garmin. L'application est déjà disponible en téléchargement depuis la boutique Connect IQ.",
    "url": "https://www.lesnumeriques.com/montreconnectee/lesmontresgarminsenrichissentdunenouvellefonctionnaliteavecyoutubemusicn222932.html",
    "urlToImage": "https://cdn.lesnumeriques.com/optim/news/22/222932/52d1f3c3lesmontresgarminsenrichissentdunenouvellefonctionnaliteavecyoutubemusic__1200_678__0511400786_wtmk.jpg",
    "publishedAt": "20240616T07:22:00Z",
    "content": "Les utilisateurs de montres connectées Garmin peuvent se réjouir : YouTube Music est désormais disponible dans la boutique Connect IQ. Une présence officialisée par lentreprise dans un communiqué.\r\n1… [+3080 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Caschys Blog"
    },
    "author": "André Westphal",
    "title": "Amazfit Helio Ring: FitnessWearable ist ab sofort in Europa erhältlich",
    "description": "Der Amazfit Helio Ring ist ab sofort in Europa erhältlich. Dahinter verbirgt sich, ähnlich wie beim Samsung Galaxy Ring, ein FitnessWearable, das ihr eben wie einen regulären Ring am Finger tragt. Amazfit kombiniert seinen Ring natürlich mit der hauseigenen …",
    "url": "https://stadtbremerhaven.de/amazfithelioringfitnesswearableistabsofortineuropaerhaeltlich/",
    "urlToImage": "https://stadtbremerhaven.de/wpcontent/uploads/2024/06/AmazfitHelioRing.jpg",
    "publishedAt": "20240616T06:00:48Z",
    "content": "Der Amazfit Helio Ring ist ab sofort in Europa erhältlich. Dahinter verbirgt sich, ähnlich wie beim Samsung Galaxy Ring, ein FitnessWearable, das ihr eben wie einen regulären Ring am Finger tragt. A… [+1640 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Caschys Blog"
    },
    "author": "André Westphal",
    "title": "Immer wieder sonntags KW 24: Reformiertes Postgesetz, Ärger um Windows Recall und mehr",
    "description": "Guten Morgen an alle Frühaufsteher und allen anderen, die später hereinlesen, wünsche ich zumindest noch einen tollen, freien Tag! An dieser Stelle werfe ich mit euch erneut einen kleinen Blick zurück auf einige News der fast verstrichenen Woche. Außerdem gib…",
    "url": "https://stadtbremerhaven.de/immerwiedersonntagskw2411/",
    "urlToImage": "https://stadtbremerhaven.de/wpcontent/uploads/2022/07/KaffeeSonntags.jpg",
    "publishedAt": "20240616T04:30:51Z",
    "content": "Guten Morgen an alle Frühaufsteher und allen anderen, die später hereinlesen, wünsche ich zumindest noch einen tollen, freien Tag! An dieser Stelle werfe ich mit euch erneut einen kleinen Blick zurüc… [+4333 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Caschys Blog"
    },
    "author": "Olli",
    "title": "Turtle Beach Vulcan II TKL Pro ausprobiert",
    "description": "Mein Alltag besteht hauptsächlich aus Arbeit, dem Bloggen hier und was übrig bleibt, wird mit Familie und Schlaf aufgefüllt. Den Großteil der Zeit, die ich wach verbringe, befinde ich mich also am Schreibtisch und bin damit beschäftigt, Dinge in das...Zum Bei…",
    "url": "https://stadtbremerhaven.de/turtlebeachvulcaniitklproausprobiert/",
    "urlToImage": "https://stadtbremerhaven.de/wpcontent/uploads/2024/06/TurtleBeachVulcanIITKLProTest1.jpg",
    "publishedAt": "20240616T09:00:54Z",
    "content": "Mein Alltag besteht hauptsächlich aus Arbeit, dem Bloggen hier und was übrig bleibt, wird mit Familie und Schlaf aufgefüllt. Den Großteil der Zeit, die ich wach verbringe, befinde ich mich also am Sc… [+4654 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Quartz India"
    },
    "author": "Vinamrata Chaturvedi",
    "title": "Tech conferences, earnings, and Juneteenth: What to watch in the markets this week",
    "description": "Last week was eventful and busy, with Apple integrating AI into its iPhones, Tesla’s shareholders approving Elon Musk’s compensation, and the inflation rate decreasing.Read more...",
    "url": "https://qz.com/techconferencesearningsjuneteenthmarketsstocks1851541012",
    "urlToImage": "https://i.kinjaimg.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/787c4222766b058db1ace0c4eb3a1878.jpg",
    "publishedAt": "20240616T09:00:00Z",
    "content": "Last week was eventful and busy, with Apple integrating AI into its iPhones, Teslas shareholders approving Elon Musks compensation, and the inflation rate decreasing.\r\nAlthough the stock market had s… [+2339 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Quartz India"
    },
    "author": "Bruce Gil",
    "title": "Netflix, Disney+ and 6 other streamers, ranked from cheapest to most expensive right now",
    "description": "In their quest to make streaming profitable, media companies have turned to tactics such as passwordsharing crackdowns, advertising, and subscription price hikes. So far this summer, Max and Peacock have raised prices – and on the music front, so has Spotify…",
    "url": "https://qz.com/netflixdisneyhuluprimestreamingpricescheapest1851536448",
    "urlToImage": "https://i.kinjaimg.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/8fd69448b14e5cf80c19e1dd2a3c7113.jpg",
    "publishedAt": "20240616T09:00:00Z",
    "content": "In their quest to make streaming profitable, media companies have turned to tactics such as passwordsharing crackdowns, advertising, and subscription price hikes. So far this summer, Max and Peacock… [+271 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GSMArena.com"
    },
    "author": "Peter",
    "title": "Deals: iPhone 15 Pro and 15 Pro Max prices drop",
    "description": "Did you hear? Only the iPhone 15 Pro and 15 Pro Max are getting the new Apple Intelligence features. These two have more RAM (8GB) and a faster NPU (35 TOPS) than any iPhone before. Will the vanilla iPhone 16 and 16 Plus get Intelligence? That’s unclear. Anyw…",
    "url": "https://www.gsmarena.com/deals_iphone_15_pro_and_15_pro_max_prices_dropnews63284.php",
    "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/06/weeklydeals13/952x498w6/gsmarena_de.jpg",
    "publishedAt": "20240616T05:31:01Z",
    "content": "Did you hear? Only the iPhone 15 Pro and 15 Pro Max are getting the new Apple Intelligence features. These two have more RAM (8GB) and a faster NPU (35 TOPS) than any iPhone before. Will the vanilla … [+3162 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "PCWorld"
    },
    "author": "DealPost Team",
    "title": "Learn something new every day with $240 off Headway",
    "description": "Life is about growth, and one of the best ways to grow is to invest in your own learning. When you’re out of school, it’s not the easiest thing to do. But that’s why an app like Headway Premium is so valuable. This app gives you unlimited access to more than …",
    "url": "https://www.pcworld.com/article/2367410/learnsomethingneweverydaywith240offheadway.html",
    "urlToImage": "https://www.pcworld.com/wpcontent/uploads/2024/06/PCWorldHeadway.jpeg?quality=50&strip=all&w=1024",
    "publishedAt": "20240616T08:00:00Z",
    "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nLife is about growth… [+1094 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Smartworld.it"
    },
    "author": "Antonio Lepore",
    "title": "Ecco un'altra novità di iOS 18: sarà possibile attivare Siri con un altro nome",
    "description": "iOS 18 di Apple includerà diverse novità, come le Scorciatoie Vocali, che permetteranno di chiamare Siri con un altro nome: scoprite tutti i dettagli!\r\nL'articolo Ecco un'altra novità di iOS 18: sarà possibile attivare Siri con un altro nome sembra essere il …",
    "url": "https://www.smartworld.it/news/appleios18nomesiri.html",
    "urlToImage": "https://www.smartworld.it/images/2024/03/24/cosafaresesirinonfunziona_1200x675.jpg",
    "publishedAt": "20240616T05:47:00Z",
    "content": "Apple, recentemente, ha svelato iOS 18, l'ultima versione del suo sistema operativo per iPhone. Si tratta di una release ricca di novità, a partire dalle funzionalità di Apple Intelligence. Tuttavia,… [+1974 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "La Vanguardia"
    },
    "author": "Esteban García Marcos",
    "title": "Esta serie al más puro estilo 'Fallout' nos narra la vida en un refugio nuclear. La puedes ver en streaming y se aproxima la segunda temporada",
    "description": "El fenómeno postapocalíptico es uno de los que más fuerte han pegado en los últimos años. Al fin y al cabo, son un reflejo claro de los miedos de nuestra especie a extinguirnos o a reducir nuestra vida a un nivel profundamente decadente. El fin del mundo es …",
    "url": "https://www.lavanguardia.com/andro4all/series/estaseriealmaspuroestilofalloutnosnarralavidaenunrefugionuclearlapuedesverenstreamingyseaproximalasegundatemporada",
    "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/05/silolaserie.webp?width=1200",
    "publishedAt": "20240616T09:15:11Z",
    "content": "La serie tiene a una protagonista colosal\r\nEl fenómeno postapocalíptico es uno de los que más fuerte han pegado en los últimos años. Al fin y al cabo, son un reflejo claro de los miedos de nuestra e… [+3322 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Clubic"
    },
    "author": "Guillaume Belfiore",
    "title": "Dans la course aux navigateurs, le tsunami promis par l'UE n'éclabousse personne",
    "description": "On penserait presque que le marché des navigateurs est plié. Google Chrome est en pôle position depuis des années et semble simplement écraser ses concurrents. Et pourtant, chez nous, quelques mouvements rebelles apparaissent ici et là.",
    "url": "https://www.clubic.com/actualite527700leuropearelancelacoursedesnavigateurs.html",
    "urlToImage": "https://pic.clubic.com/v1/images/2218644/raw",
    "publishedAt": "20240616T08:29:00Z",
    "content": "On penserait presque que le marché des navigateurs est plié. Google Chrome est en pôle position depuis des années et semble simplement écraser ses concurrents. Et pourtant, chez nous, quelques mouvem… [+11033 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Nextpit.de"
    },
    "author": "Edwin Kee",
    "title": "Top 5 Android & iOSApps der Woche: Mathematik, Animes & mehr",
    "description": "nextpit empfiehlt diese 5 Apps aus dem Google Play Store und dem Apple App Store als Teil Eurer Wochenendroutine. Genießt, was wir serviert haben!",
    "url": "https://www.nextpit.de/top5androidiosappsderwoche202424",
    "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/Top_Apps.jpg",
    "publishedAt": "20240616T08:00:01Z",
    "content": "Solo Leveling: Arise ist ein ActionRollenspiel, das Euren Puls in die Höhe treibt, während Ihr Euren persönlichen Kampfstil entwickelt, um Eure Feinde zu besiegen. Wenn Ihr Matheaufgaben mit einer A… [+10186 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Nextpit.de"
    },
    "author": "Rahul Srinivas",
    "title": "Gorilla Glass: Die Geschichte von Cornings besonders robustem Glas",
    "description": "Sicherlich habt Ihr schon von Gorilla Glass gehört, der Technologie, die Glas widerstandsfähiger gegen Kratzer macht. Wir erklären Euc die Unterschiede.",
    "url": "https://www.nextpit.de/gorillaglassversionenunterschiede",
    "urlToImage": "https://fscl01.fonpit.de/userfiles/7043987/image/news/androidpitbrokenfallensmartphonecracked.jpg",
    "publishedAt": "20240616T10:00:00Z",
    "content": "Zunächst einmal müsst Ihr wissen, dass Gorilla Glass eine Marke für gehärtetes Glas ist, die von einem Unternehmen namens Corning Inc. entwickelt wurde. Corning stellt auch andere Glasarten für ander… [+10171 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Deadline"
    },
    "author": "Glenn Garner",
    "title": "Jon Stewart Explains Apple Had “A Different Agenda” For His Canceled ‘The Problem With Jon Stewart’ Show: They “Don’t Want That Smoke”",
    "description": "Jon Stewart is opening up about the problem with Apple. After his current affairs show The Problem with Jon Stewart was canceled in October following two seasons, the Emmy Award winner explained that he “knew we were in trouble.” “They didn’t censor me, it wa…",
    "url": "http://deadline.com/2024/06/jonstewartappledifferentagendacanceledtheproblemshow1235974672/",
    "urlToImage": "https://deadline.com/wpcontent/uploads/2022/09/The_Problem_with_Jon_Stewart_poster_010301.jpg?w=1024",
    "publishedAt": "20240616T00:05:09Z",
    "content": "Jon Stewart is opening up about the problem with Apple.\r\nAfter his current affairs show The Problem with Jon Stewart was canceled in October following two seasons, the Emmy Award winner explained tha… [+2691 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Googlewatchblog.de"
    },
    "author": "Jens",
    "title": "Mein Gerät finden: Warum dauert das so lange? Googles vorsichtiger Rollout verspielt die Möglichkeiten",
    "description": "Google hat nach mehrfachen Verschiebungen das Mein Gerät findenNetzwerk gestartet, das derzeit für immer mehr Nutzer ausgerollt wird und erst vor knapp zwei Wochen in Deutschland gestartet wurde. Doch auch zwei Monate nach dem Beginn des Rollouts ist das Net…",
    "url": "https://www.googlewatchblog.de/2024/06/meingeraetwarumgoogles/",
    "urlToImage": "https://www.googlewatchblog.de/wpcontent/uploads/googlefindmydevicelogo.jpg",
    "publishedAt": "20240616T07:00:57Z",
    "content": "Google hat nach mehrfachen Verschiebungen das Mein Gerät findenNetzwerk gestartet, das derzeit für immer mehr Nutzer ausgerollt wird und erst vor knapp zwei Wochen in Deutschland gestartet wurde. Do… [+3366 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "Glacier Kwong",
    "title": "Dieser Schauprozess entlarvt Chinas Justiz",
    "description": "Der Prozess gegen den Hongkonger Medienmogul Jimmy Lai sorgt weltweit für Aufsehen. Abgeordnete aus neun Ländern haben angeboten, als Zeugen auszusagen. Aber nicht einer wurde angehört. Das sagt viel über Pekings Verständnis von Rechtsstaatlichkeit.",
    "url": "https://www.welt.de/politik/ausland/article252023952/BriefausHongkongDieserSchauprozessentlarvtChinasJustiz.html",
    "urlToImage": "https://img.welt.de/img/politik/ausland/mobile249293476/8131351877ci16x9w1200/JoshuaWongProDemocracyActivistInHongKongVisitsGermany.jpg",
    "publishedAt": "20240616T05:39:30Z",
    "content": "Jimmy Lai, ein prominenter Hongkonger Medienmogul und Demokratieaktivist, ist Peking schon lange ein Dorn im Auge. Lai war Eigentümer der inzwischen eingestellten prodemokratischen Zeitung Apple Dail… [+3367 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Mark Sparrow, Senior Contributor, \n Mark Sparrow, Senior Contributor\n https://www.forbes.com/sites/marksparrow/",
    "title": "Retro Styling, HiRes Audio And Apple AirPlay... Edifier’s D32 Has Everything",
    "description": "This dualpowered wireless speaker from Edifier has Bluetooth, Apple AirPlay, USB and AUX inputs in a compact form factor that's oozing retro styling.",
    "url": "https://www.forbes.com/sites/marksparrow/2024/06/16/retrostylinghiresaudioandappleairplayedifiersd32haseverything/",
    "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/6662da6347224f6d4999822f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    "publishedAt": "20240616T10:00:00Z",
    "content": "The new Edifier D32 wireless speaker offers a lot for the money. Most people will love it for the ... [+] classic retro styling that could be anywhere inspired by the 1950s to 1970s.\r\nEdifier\r\nToday'… [+6005 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Will Yakowicz, Forbes Staff, \n Will Yakowicz, Forbes Staff\n https://www.forbes.com/sites/willyakowicz/",
    "title": "Honor Thy Father: The Saga Of A Drug Smuggler’s Son",
    "description": "Brady Cobb founded Sunburn Cannabis as a tribute to his dad, a legendary “saltwater cowboy” who once operated a $300 million ring smuggling Colombian weed into Florida.",
    "url": "https://www.forbes.com/sites/willyakowicz/2024/06/14/bradycobbinterviewsunburncannabisbillcobboperationsunburn/",
    "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/666c68fb717953967dd2b533/0x0.jpg?format=jpg&crop=1920,1080,x0,y0,safe&height=900&width=1600&fit=bounds",
    "publishedAt": "20240616T10:00:00Z",
    "content": "Brady Cobb founded Sunburn Cannabis as a tribute to his dad, a legendary saltwater cowboy who once operated a $300 million ring smuggling Colombian weed into Florida. Bill Cobb was sentenced to 20 ye… [+12386 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hdblog.it"
    },
    "author": "HDblog.it",
    "title": "Recensione AmazFit Helio Ring: l'anello che potresti voler al dito senza impegno",
    "description": "AmazFit Helio Ring arriva ufficialmente in Italia e anticipa un trend che in realtà è già iniziato da alcuni anni con prodotti che non hanno raggiunto numeri importanti nel...",
    "url": "https://www.hdblog.it/indossabili/recensioni/n585485/amazfithelioringanellosmarttestprova/",
    "urlToImage": "https://hd2.tudocdn.net/1166790?w=1920",
    "publishedAt": "20240616T08:40:00Z",
    "content": "AmazFit Helio Ring arriva ufficialmente in Italia e anticipa un trend che in realtà è già iniziato da alcuni anni con prodotti che non hanno raggiunto numeri importanti nel nostro mercato, a causa di… [+10093 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "ComputerBase"
    },
    "author": "Frank Hüber",
    "title": "Amazfit Helio Ring: Titanring misst Vitaldaten am Finger",
    "description": "Samsung hat den Galaxy Ring zum MWC 2024 zwar angekündigt, einen Termin für den Marktstart gibt es aber noch nicht. Anders bei Amazfit und dem Helio Ring, denn dieser startet ab heute in den Verkauf und misst Gesundheitsdaten am Finger.",
    "url": "https://www.computerbase.de/202406/amazfithelioringtitanringmisstvitaldatenamfinger/",
    "urlToImage": "https://pics.computerbase.de/1/1/2/8/8/3b1b986158fcd09e2/article1280x720.ed9f1b25.jpg",
    "publishedAt": "20240616T07:00:00Z",
    "content": "Samsung hat den Galaxy Ring zum MWC 2024 zwar angekündigt, einen Termin für den Marktstart gibt es aber noch nicht. Anders bei Amazfit und dem Helio Ring, denn dieser startet ab heute in den Verkauf … [+2805 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "iLounge"
    },
    "author": "Samantha Wiley",
    "title": "Get $50 Off the Apple Pencil 2",
    "description": "The Apple Pencil 2 has a sale price that’s hard to ignore. Today, it’s down to just $79 from its original price of $130 on Amazon. The Apple Pencil 2 may be simplistic at first look, but don’t underestimate its hardware and capabilities. Boasting pixelperfec…",
    "url": "https://www.ilounge.com/news/get50offtheapplepencil2",
    "urlToImage": "https://www.ilounge.com/wpcontent/uploads/2024/06/ApplePencil.png",
    "publishedAt": "20240616T03:18:11Z",
    "content": "The Apple Pencil 2 has a sale price that’s hard to ignore. Today, it’s down to just $79 from its original price of $130 on Amazon.\r\nThe Apple Pencil 2 may be simplistic at first look, but don’t under… [+658 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "iLounge"
    },
    "author": "Samantha Wiley",
    "title": "Shazam widget available on watchOS 11",
    "description": "Apple Watch users can now add a Shazam app when watchOS 11 launches. Several new widgets will be added when watchOS 11 rolls out, and this includes a Shazam widget. Currently, the app is available as a free download on the Apple Watch App Store or through Sir…",
    "url": "https://www.ilounge.com/news/applewatch/shazamwidgetavailableonwatchos11",
    "urlToImage": "https://www.ilounge.com/wpcontent/uploads/2024/06/Shazam.png",
    "publishedAt": "20240616T03:14:08Z",
    "content": "Apple Watch users can now add a Shazam app when watchOS 11 launches.\r\nSeveral new widgets will be added when watchOS 11 rolls out, and this includes a Shazam widget. Currently, the app is available a… [+678 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "iLounge"
    },
    "author": "Samantha Wiley",
    "title": "Live activities now show up on watchOS 11",
    "description": "Live activities that are initiated on iPhones will now show up automatically on the user’s Apple Watch via Smart Stack in watchOS 11. Before, Smart Stacks are usually accessed when the Digital Crown is turned. However, when watchOS 11 rolls out, Smart Stack w…",
    "url": "https://www.ilounge.com/news/liveactivitiesnowshowuponwatchos11",
    "urlToImage": "https://www.ilounge.com/wpcontent/uploads/2024/06/watchOS11.png",
    "publishedAt": "20240616T03:16:48Z",
    "content": "Live activities that are initiated on iPhones will now show up automatically on the user’s Apple Watch via Smart Stack in watchOS 11.\r\nBefore, Smart Stacks are usually accessed when the Digital Crown… [+702 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tinhte.vn"
    },
    "author": "noreply@tinhte.vn (P.W), P.W",
    "title": "Apple có thể sắp nhận án phạt từ EU vì vi phạm đạo luật thị trường số, mỗi ngày bị phạt 5% doanh thu",
    "description": "Hội đồng châu Âu có trụ sở tại Brussels, Bỉ có thể sẽ đưa ra án phạt đối với Apple, sau khi họ đi đến kết luận rằng những quy chế mới phân phối ứng dụng số thông qua App Store là những hành động đối phó với đạo luật DMA…",
    "url": "https://tinhte.vn/thread/applecothesapnhananphattueuviviphamdaoluatthitruongsomoingaybiphat5doanhthu.3798320/",
    "urlToImage": "https://storagetinhte.vncdn.vn/data/attachmentfiles/vnetwork/2024/06/8366278_dd3180ce8a7c418acbf3e8cab3bd9249.jpg",
    "publishedAt": "20240616T08:07:16Z",
    "content": "Epic Games khi kin Apple vào nm 2020, và hin ti hãng game n t nc M này ang ch i quyt nh ca thm phán liên bang ti toà án California a ra quyt nh xem liu Apple có ang tuân th nghiêm túc quy nh ca toà á… [+1692 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Sspai.com"
    },
    "author": "Kostya",
    "title": "具透 | iPadOS 18：史诗级更新「计算器」来了，这些变化也值得一试",
    "description": "今年的 iPadOS 18 更新总算没落下 iOS 18 里的新功能，我们帮你整理出了 iPadOS 18 中这些值得关注的新特性。查看全文",
    "url": "https://sspai.com/post/89644",
    "urlToImage": "https://cdnfile.sspai.com/6/16/2024/article/74d11a822a94a56c34934d46bc036a6f.png",
    "publishedAt": "20240616T02:43:12Z",
    "content": "Apple WWDC 2024 Apple Intelligence Apple iPadOS iPadOS 18 iPad iOS 18 Apple Pencil iPadOS 18 beta beta \r\niPadOS iOS iPadOS 18 iOS 18 iPadOS iPad app Apple app \r\n app\r\niPadOS 18 iOS 18 app iPad iPadOS… [+1237 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tinhte.vn"
    },
    "author": "noreply@tinhte.vn (thanhtung6868), thanhtung6868",
    "title": "THACO Auto công bố giá bán Kia Sonet 2024, khởi điểm từ 539 triệu Đồng",
    "description": "Ngày 15/06/2024, THACO Auto chính thức công bố giá bán đối với 3 mẫu xe Kia New Sonet 2024, được giới thiệu tại thị trường Việt Nam ngày 08/06 vừa qua. Kia New Sonet 2024 được phân phối với 3 phiên bản…",
    "url": "https://tinhte.vn/thread/thacoautocongbogiabankiasonet2024khoidiemtu539trieudong.3798096/",
    "urlToImage": "https://storagetinhte.vncdn.vn/data/attachmentfiles/vnetwork/2024/06/8365768_b0530340f8c2c4fd75f3fa098e31133a.jpg",
    "publishedAt": "20240616T05:29:38Z",
    "content": "Tri nghim thc t cho thy, New Sonet có kh nng cách âm vt tri dù là mu xe SUV c A, phân khúc vn không c ánh giá cao tri nghim cách âm. Bên cnh ó, s cng chc ca khung gm em n cho Sonet s n nh khi cm lái,… [+786 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Daily Beast"
    },
    "author": "The Daily Beast",
    "title": "Trump Reveals the Biggest Threat Facing the U.S.",
    "description": "Photo Illustration by Erin O'Flynn/The Daily Beast/Getty Images\r\nListen to this full episode of The New Abnormal on Apple Podcasts, Spotify, Amazon, and Stitcher.Donald Trump has been caught downplaying the threat of climate change, insisting that sea levels …",
    "url": "https://www.thedailybeast.com/trumpsaysnuclearweaponsnotclimatechangeisthebiggestthreatfacingtheus",
    "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1718469683/240615tnabonustrumpthreathero_gsnxf9",
    "publishedAt": "20240616T03:22:44Z",
    "content": "Listen to this full episode of The New Abnormal on Apple Podcasts, Spotify, Amazon, and Stitcher.\r\nDonald Trump has been caught downplaying the threat of climate change, insisting that sea levels wil… [+1930 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Macitynet.it"
    },
    "author": "Emiliano Contarino",
    "title": "Apple Intelligence per migliorare naviga in Internet",
    "description": "Apple Intelligence non sfrutta le azioni e i dati degli utenti per migliorare la sua precisione, ma scandaglia i siti Internet. La pratica è controversa e all'origine di una causa del New York Times contro OpenAI. Cupertino però potrebbe avere trovato modo di…",
    "url": "https://www.macitynet.it/appleintelligenceaddestramento/",
    "urlToImage": "https://www.macitynet.it/wpcontent/uploads/2024/06/appleintelligence1.jpg",
    "publishedAt": "20240616T09:29:23Z",
    "content": "Apple non utilizzerà i dati degli utenti per addestrare Apple Intelligence, a differenza della politica di OpenAI, che utilizza le sessioni di ChatGPT per migliorare il proprio modello. Lo rivela un … [+2659 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Macitynet.it"
    },
    "author": "Emiliano Contarino",
    "title": "Le novità iOS 18 che non vedremo su iOS 18",
    "description": "Alcune delle funzioni presentate da Apple alla scorsa WWDC24 non arriveranno su iOS 18. Scopriamo quali e perchè per gli Italiani le cose potrebbero andare anche peggio.\n su macitynet.it Le novità iOS 18 che non vedremo su iOS 18",
    "url": "https://www.macitynet.it/lenovitaios18chenonvedremosuios18/",
    "urlToImage": "https://www.macitynet.it/wpcontent/uploads/2024/06/iOS18logo.jpeg",
    "publishedAt": "20240616T07:29:53Z",
    "content": "Quest’anno, la WWDC è stata ricca di novità per tutti i software di Apple. L’azienda ha presentato numerose migliorie che arriveranno questo autunno con iOS 18, visionOS 2, macOS Sequoia e altre novi… [+5430 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hwupgrade.it"
    },
    "author": null,
    "title": "Amazon best seller top 5: idropulitrice a 59, airfryer 61, super PC, AirPods al minimo storico e non solo!",
    "description": "Ecco gli articoli che sono andati per la maggiore nel corso della settimana appena passata, su Amazon. Articoli veramente ottimi e in alcuni casi al prezzo più basso di sempre! Sono occasioni perfette anche per qualche regalo. A voi la scelta.",
    "url": "https://www.hwupgrade.it/news/multimedia/amazonbestsellertop5idropulitricea59airfryer61superpcairpodsalminimostoricoenonsolo_128080.html",
    "urlToImage": "https://www.hwupgrade.it/i/n/amazon_5_top_720.jpg",
    "publishedAt": "20240616T07:08:28Z",
    "content": "Ecco il nostro aggiornamento sui 5 prodotti (o categoria di prodotto) \r\npiù venduti nell'ultimi 7 giorni su Amazon. Gli appassionati se ne sono accorti ed è il motivo per cui sono molto venduti! Ve l… [+3454 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Sapo.pt"
    },
    "author": "Pedro Simões",
    "title": "União Europeia poderá multar a Apple em 47 milhões de euros por dia por falhar DMA",
    "description": "As regras que a União Europeia criou com a DMA não foram bem recebidas pela Apple. A empresa aceitou aplicar estas mudanças, ainda que o tenha feito de forma nem sempre clara ou justa...",
    "url": "https://pplware.sapo.pt/apple/uniaoeuropeiapoderamultaraappleem47milhoesdeeurospordiaporfalhardma/",
    "urlToImage": "https://pplware.sapo.pt/wpcontent/uploads/2024/06/uniao_europeia_apple_1.jpg",
    "publishedAt": "20240616T09:00:26Z",
    "content": "As regras que a União Europeia criou com a DMA não foram bem recebidas pela Apple. A empresa aceitou aplicar estas mudanças, ainda que o tenha feito de forma nem sempre clara ou justa para os program… [+1978 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Iphones.ru"
    },
    "author": "Артём Суровцев",
    "title": "Зачем на iPhone нужен игровой режим (Game Mode). Как работает новая фишка iOS 18",
    "description": "Зачем нужен новый игровой режим в iOS 18, какие преимущества он дает и как работает.",
    "url": "https://www.iphones.ru/iNotes/chtotakoeigrovoyrezhimiphonevios18ikakonrabotaet06152024",
    "urlToImage": "https://www.iphones.ru/wpcontent/plugins/wonderm00nssimplefacebookopengraphtags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwpcontent%2Fuploads%2F2024%2F06%2FiOS18%D0%B8%D0%B3%D1%80%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%D1%80%D0%B5%D0%B6%D0%B8%D0%BC.jpg",
    "publishedAt": "20240616T09:00:38Z",
    "content": "iOS 18. ( ), .\r\n macOS Sonoma, . iOS iPadOS.\r\n , , .\r\n iPhone iPad \r\nGame Mode , iOS 18iPadOS 18. :\r\niPhone SE 2 3 , iPhone XS/XR ;iPad mini 5 ;iPad 7 ;iPad Air 3 ;iPad Pro 12.9″ 3 ;iPad Pro 11… [+288 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Livedoor.jp"
    },
    "author": "itsoku",
    "title": "Apple Watchって全然腕時計マウントから逃れられなくない？",
    "description": "1:以下、5ちゃんねるからVIPがお送りします  2024/06/15(土) 23:12:38.280 ID:k0QE9yNR0  高級時計つけててマウントしたい人がいたら必ずこう言われると思うぞ  ・Apple Watchの合理さ、便利さが羨ましいよ～  ・俺の時計は時間しかわからないしすぐに狂うからさ～  とかっ",
    "url": "http://blog.livedoor.jp/itsoku/archives/61578332.html",
    "urlToImage": "https://livedoor.blogimg.jp/itsoku/imgs/7/3/7312f062s.jpg",
    "publishedAt": "20240616T06:10:31Z",
    "content": "1:5VIP 2024/06/15() 23:12:38.280 ID:k0QE9yNR0\r\nApple Watch \r\n2:5VIP 2024/06/15() 23:12:59.861 ID:vWmhb/CBd\r\n3:5VIP 2024/06/15() 23:13:25.872 ID:Qv393/O/0\r\n4:5VIP 2024/06/15() 23:13:30.584 ID:FrOnHw8m… [+1922 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Livedoor.jp"
    },
    "author": "itsoku",
    "title": "iPhoneが始めてAndroidに普及したもの「SDカード廃止」「イヤホンジャック廃止」「ホームボタン廃止」",
    "description": "1:以下、5ちゃんねるからVIPがお送りします  2024/06/15(土) 20:17:18.062 ID:W8a3dbSu0  あとは？",
    "url": "http://blog.livedoor.jp/itsoku/archives/61578455.html",
    "urlToImage": "https://livedoor.blogimg.jp/itsoku/imgs/d/1/d17ba68fs.png",
    "publishedAt": "20240616T01:10:52Z",
    "content": "1:5VIP 2024/06/15() 20:17:18.062 ID:W8a3dbSu0\r\n2:5VIP 2024/06/15() 20:18:07.714 ID:tAiDZ9P90\r\n5:5VIP 2024/06/15() 20:18:54.593 ID:+bYNT/cd0\r\n7:5VIP 2024/06/15() 20:19:47.068 ID:YJqKD/Y9d\r\n Android3 \r… [+2876 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Giga"
    },
    "author": "Peter Hryciuk",
    "title": "Samsung verändert mit Android 15 die Bedienung eures Handys",
    "description": "Samsung arbeitet für seine Smartphones und Tablets fleißig an Android 15 mit One UI 7. Schon jetzt sind Informationen zu den Neuerungen durchgesickert. Einige davon werden sich hinter einer zusätzlichen App verbergen, mit der die Bedienung eures Handys erweit…",
    "url": "https://www.giga.de/news/samsungveraendertmitandroid15diebedienungeureshandys/",
    "urlToImage": "https://crops.giga.de/ff/97/4d/5f8beea13d11a4bf0b811ab298_YyAyODIweDE0NzMrOTArMTA3AnJlIDEyMDAgNjI3A2Y3NWJhZGFmOGE5.jpg",
    "publishedAt": "20240616T04:00:02Z",
    "content": "Samsung arbeitet für seine Smartphones und Tablets fleißig an Android 15 mit One UI 7. Schon jetzt sind Informationen zu den Neuerungen durchgesickert. Einige davon werden sich hinter einer zusätzlic… [+2133 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Screen Rant"
    },
    "author": "Brennan Klein",
    "title": "The 10 HighestGrossing Kaiju Movies Of All Time (Including Godzilla x Kong)",
    "description": "Godzilla x Kong: The New Empire is the highestgrossing movie in the Monsterverse, but there are many other kaiju movie box office hits.",
    "url": "https://screenrant.com/kaijumovieshighestgrossinggodzillaxkongalltime/",
    "urlToImage": "https://static1.srcdn.com/wordpress/wpcontent/uploads/2024/06/godzillafromgodzillaxkongroaringinfrontofmoney.jpg",
    "publishedAt": "20240616T09:00:10Z",
    "content": "Summary\r\n<ul><li>\r\n The top 10 highestgrossing kaiju movies are all Englishlanguage productions despite the genre's Japanese origins.\r\n </li><li>\r\n Nevertheless, five of the entries feature the ico… [+11397 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hvg.hu"
    },
    "author": "hvg@hvg.hu",
    "title": "Elvitelre #71: Csáknak csá, a piának szia, Delhit elhitték",
    "description": "Elvitelre – a podcast, amelyben az adott hét legjobb HVG hetilapos és hvg360as anyagaiból válogatunk. Csak indítsa el a háttérben, és hallgassa meg szerzőink legjobb írásait! Ezen a héten Csák János, az indiai választás és a fiatalok bulizása kerül a mérlegr…",
    "url": "https://hvg.hu/itthon/20240616_elvitelrecsakjanosindiabudapestfiatalok",
    "urlToImage": "https://img.hvg.hu/Img/7fcefbf8ac484ee6aef532203afa118c/dd24206ab1474a4c8d6fa1d14e39c3bf.jpg",
    "publishedAt": "20240616T04:00:00Z",
    "content": "Újra itt az Elvitelre, a HVG hétzáró podcastja, amelyben az elmúlt hét legjobb HVGs és hvg360as anyagaiból válogatunk  Önnek csak el kell indítania a háttérben.\r\nEzen a héten a kultuszminisztert, M… [+293 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Natalie.mu"
    },
    "author": "音楽ナタリー",
    "title": "TEAM SHACHI、6年ぶりに「TIF」出演",
    "description": "8月2～4日に東京・お台場の青海周辺エリアで開催されるアイドルフェス「TOKYO IDOL FESTIVAL 2024」の出演者第17弾が発表された。",
    "url": "https://natalie.mu/music/news/577975",
    "urlToImage": "https://ogre.natalie.mu/media/news/music/2024/0526/TEAMSHACHI_art202405.jpg?impolicy=twitter_card_face_crop",
    "publishedAt": "20240616T03:19:00Z",
    "content": "202482 202483 202484 \r\n1\r\niLiFE! / Appare! / AMEFURASSHI / / INUWASI / ukka / C;ON / Jams Collection / / DIALOGUE+ / / TIF de Debut2024 supported by Denonbu / Devil ANTHEM. / .inc / / NEO JAPONISM / … [+1216 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "19700101T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "19700101T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "19700101T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "Impress.co.jp"
    },
    "author": null,
    "title": "AirPods(第2世代)の未使用品が14,800円！イオシスで期間限定セール",
    "description": "Appleの完全ワイヤレスイヤホン「AirPods（第2世代）（MV7N2J/A）」未使用品が、イオシス各店にてセール中。価格は14,800円。セール期間は6月23日（日）まで。",
    "url": "https://akibapc.watch.impress.co.jp/docs/news/news/1600302.html",
    "urlToImage": "https://akibapc.watch.impress.co.jp/img/ah/list/1600/302/s1.jpg",
    "publishedAt": "20240616T00:05:00Z",
    "content": "61314\r\n147DELL21.59,980ASUS ROG RYUJIN III 24019,980 \r\n614 22:03"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": null,
    "title": "Apple Stock: Buy, Sell, or Hold?",
    "description": null,
    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_ccsession_4b217be8e218454fa320d06820bdf293",
    "urlToImage": null,
    "publishedAt": "20240616T07:30:00Z",
    "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Securityaffairs.com"
    },
    "author": "Pierluigi Paganini",
    "title": "ASUS fixed critical remote authentication bypass bug in several routers",
    "description": "Taiwanese manufacturer giant ASUS addressed a critical remote authentication bypass vulnerability impacting several router models. ASUS addresses a critical remote authentication bypass vulnerability, tracked as CVE20243080 (CVSS v3.1 score: 9.8), impacting…",
    "url": "https://securityaffairs.com/164549/security/asusroutermodelscriticalrce.html",
    "urlToImage": "https://securityaffairs.com/wpcontent/uploads/2023/06/ASUSLOGO.png",
    "publishedAt": "20240616T07:44:23Z",
    "content": "ASUS fixed critical remote authentication bypass bug in several routers\r\n | London hospitals canceled over 800 operations in the week after Synnovis ransomware attack\r\n | DORA Compliance Strategy for… [+76648 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Index.hu"
    },
    "author": "PapdiPécskői Viktor",
    "title": "Gondban lehet az Apple az uniós piaci szabályok betartásával",
    "description": "Gondban lehet az Apple az uniós piaci szabályok betartásával  Az elsők lehetnek, akiket a digitális piaci törvény megsértése miatt megbírságolnak.",
    "url": "https://index.hu/techtud/2024/06/16/eudmaappledigitalispiacbirsagharmadikfeltechnologiaidij/",
    "urlToImage": "https://kep.cdn.index.hu/1/0/5685/56858/568582/56858231_4204185_43cb0cdb8e84d778e52d5a80f6aa595a_wm.jpg",
    "publishedAt": "20240616T07:30:00Z",
    "content": "Az Európai Unió a következ hetekben bírságot fog kiszabni az Applere a digitális piacokról szóló uniós törvény, a DMA megsértése miatt  értesült a Financial Times.\r\nAz online versenyt és kereskedelm… [+1901 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tuttoandroid.net"
    },
    "author": "Vincenzo Postiglione",
    "title": "Motorola prepara il primo tracker compatibile col nuovo Trova il mio dispositivo di Google",
    "description": "La nuova rete Trova il mio dispositivo di Google è finalmente realtà e Motorola sembra pronta a lanciare un tracker compatibile.\nL'articolo Motorola prepara il primo tracker compatibile col nuovo Trova il mio dispositivo di Google proviene da TuttoAndroid.",
    "url": "https://www.tuttoandroid.net/news/2024/06/16/motorolatagtrackertrovailmiodispositivogoogleleakinfo1047213/",
    "urlToImage": "https://img.tuttoandroid.net/wpcontent/uploads/2024/04/GoogleTrovailmiodispositivoLogo2024TA.jpg",
    "publishedAt": "20240616T08:08:05Z",
    "content": "Sono trascorsi poco più di due mesi dal debutto ufficiale della nuova rete Trova il mio dispositivo di Google per Android nel frattempo arrivata altresì in Italia e adesso apprendiamo che Motorola po… [+1485 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Geeky Gadgets"
    },
    "author": "Roland Hutchinson",
    "title": "Apple Watch Ultra 3 Specs & Details Leaked",
    "description": "The Apple Watch Ultra 3, expected to launch in 2024, is set to prioritize internal upgrades over new camera features. While the absence of a FaceTime or selfie camera may disappoint some users, Apple’s decision to focus on core functionalities and performance…",
    "url": "https://www.geekygadgets.com/?p=430160",
    "urlToImage": "https://www.geekygadgets.com/wpcontent/uploads/2024/06/AppleWatchUltra3.jpg",
    "publishedAt": "20240616T08:46:23Z",
    "content": "The Apple Watch Ultra 3, expected to launch in 2024, is set to prioritize internal upgrades over new camera features. While the absence of a FaceTime or selfie camera may disappoint some users, Apple… [+4649 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Geeky Gadgets"
    },
    "author": "Roland Hutchinson",
    "title": "iPadOS 18 Beta 1 Gets Reviewed (Video)",
    "description": "The release of iPadOS 18 Beta 1 marks another milestone in Apple’s ongoing efforts to enhance the user experience, productivity, and customization options for iPad users. This update introduces a range of new features and improvements that aim to make your da…",
    "url": "https://www.geekygadgets.com/ipados18beta1getsreviewedvideo/",
    "urlToImage": "https://www.geekygadgets.com/wpcontent/uploads/2024/06/iPadOS18Beta1.jpg",
    "publishedAt": "20240616T07:59:54Z",
    "content": "The release of iPadOS 18 Beta 1 marks another milestone in Apple’s ongoing efforts to enhance the user experience, productivity, and customization options for iPad users. This update introduces a ran… [+6477 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Geeky Gadgets"
    },
    "author": "Julian Horsey",
    "title": "What is a Neural Engine and how does it work?",
    "description": "A Neural Engine, specifically Apple’s Neural Engine (ANE), is a specialized hardware component designed to accelerate machine learning tasks on Apple devices. Introduced with the iPhone X and the A11 chipset, it enhances various functionalities such as Face I…",
    "url": "https://www.geekygadgets.com/?p=430149",
    "urlToImage": "https://www.geekygadgets.com/wpcontent/uploads/2024/06/NeuralEngineshowdotheywork.jpg",
    "publishedAt": "20240616T08:32:01Z",
    "content": "A Neural Engine, specifically Apple’s Neural Engine (ANE), is a specialized hardware component designed to accelerate machine learning tasks on Apple devices. Introduced with the iPhone X and the A11… [+4918 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Geeky Gadgets"
    },
    "author": "Roland Hutchinson",
    "title": "50 Features Coming to the Mac with macOS Sequoia",
    "description": "The new macOS Sequoia introduces a wealth of new features and enhancements designed to elevate user experience, boost productivity, and optimize system performance. This update brings a fresh visual experience with dynamic and retro Macintosh wallpapers, allo…",
    "url": "https://www.geekygadgets.com/50featurescomingtothemacwithmacossequoia/",
    "urlToImage": "https://www.geekygadgets.com/wpcontent/uploads/2024/06/macOS2.jpg",
    "publishedAt": "20240616T05:02:22Z",
    "content": "The new macOS Sequoia introduces a wealth of new features and enhancements designed to elevate user experience, boost productivity, and optimize system performance. This update brings a fresh visual … [+6880 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "百亿补贴：Apple 苹果 Watch S9 GPS 铝金属表壳+运动型表带 45mm 午夜色 2299元",
    "description": "拼多多此款目前活动售价2349元，领用商品页面50元券实付2299元近期好价。",
    "url": "https://www.smzdm.com/p/116388356/",
    "urlToImage": "https://y.zdmimg.com/202309/13/6500bc7178db9634.png_d250.jpg",
    "publishedAt": "20240616T04:41:32Z",
    "content": "Apple Watch Series 9 Apple S9 56Series 8 60%GPU30%siriAppleiPhone\r\nApple Watch Series 9200013256G\r\nApple Watch Series 9 3618"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "Apple 苹果 iPhone 15 Pro Max 5G手机 256GB 7478元包邮",
    "description": "玩家之道搭载A17 Pro芯片，更新USBC接口，使用钛合金边框，潜望式长焦镜头~淘宝精选此款目前活动售价8228元，百亿补贴价实付低至7478元，近期好价，感兴趣的值友可以入手。",
    "url": "https://www.smzdm.com/p/116311867/",
    "urlToImage": "https://y.zdmimg.com/202309/13/6500b1c475f644441.png_d250.jpg",
    "publishedAt": "20240616T00:20:10Z",
    "content": "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "Apple 苹果 iPad Air 5 2022款 10.9英寸 iPadOS 平板电脑 3514.05元",
    "description": "立减200元立减活动，参加满1件打9.5折折扣活动，到手价3514.05元，近期好价。叠加活动：立减200元、满1件打9.5折",
    "url": "https://www.smzdm.com/p/116415269/",
    "urlToImage": "https://qny.smzdm.com/202203/09/6227ad2301e85705.jpg_d250.jpg",
    "publishedAt": "20240616T07:56:24Z",
    "content": "iPad Air iPad Pro M1 USBC 2 Apple Pencil \r\n M1 iPad Air 5 CPU 60% 2 iPad Air 5 12MP Center Stage 64GB256GB iPad Air 5 5G \r\n5 Touch ID iPad Air 5  Liquid Retina 500nit iPad Pro"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "Apple 苹果 iPhone 15 Pro Max 5G手机 256GB 蓝色钛金属 7478元",
    "description": "玩家之道搭载A17 Pro芯片，更新USBC接口，使用钛合金边框，潜望式长焦镜头~淘宝精选此款目前活动售价8164元，下单领取686元百亿补贴优惠券，实付低至7478元，近期好价，感兴趣的值友可以入手。",
    "url": "https://www.smzdm.com/p/116366066/",
    "urlToImage": "https://qny.smzdm.com/202310/11/65268ca8d4c711901.jpg_d250.jpg",
    "publishedAt": "20240616T00:20:10Z",
    "content": "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "PLUS会员：Apple 苹果 iPhone 15 Pro 5G手机 128GB 黑色钛金属 6026.61元",
    "description": "玩家之道全新的钛合金边框，有史以来最轻最窄边框的Pro系列，更好更清晰的深度拍照体验。京东此款目前活动售价6479元，下单领取满3000减400元优惠券，plus立减32.29元，叠加大促劵200减20元，实付低至6026.61元，近期好价，感兴趣的值友可以入手。",
    "url": "https://www.smzdm.com/p/116368719/",
    "urlToImage": "https://y.zdmimg.com/202309/13/6500b105fc3444180.png_d250.jpg",
    "publishedAt": "20240616T00:57:38Z",
    "content": "iPhone 15 Pro 6.1 ProMotion Super Retina XDR 120Hz iOS 17 187 \r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 242835mmiPhone 15 Pro… [+106 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "百亿补贴：Apple 苹果 iPhone 15 Plus 5G手机 128GB 5298元（需用券）",
    "description": "玩家之道升级灵动岛设计，主摄升级4800万像素，A16芯片加持~拼多多此款目前活动128GB到手价5298元，256GB到手价6298元，512GB到手价6178元，近期好价~",
    "url": "https://www.smzdm.com/p/116413191/",
    "urlToImage": "https://y.zdmimg.com/202309/13/6500b399073943089.png_d250.jpg",
    "publishedAt": "20240616T06:24:08Z",
    "content": "iPhone 15 Plus IP68 201g7.8mm\r\niPhone 15 Plus 6.7 OLED XDR 2796×1290460ppi2000100%DCIP360HziPhone 15Plus A16 6 CPU5GPU 16 iPhone 14 Plus 263550%LightningUSBC\r\niPhone 15 Plus 4800f1.62400120021200f2… [+12 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "今日必买：Apple 苹果 iPad 9 2021款 10.2英寸平板电脑 64GB WLAN版 1699元",
    "description": "淘宝精选此款目前活动售价1699元，近期好价。",
    "url": "https://www.smzdm.com/p/116286619/",
    "urlToImage": "https://y.zdmimg.com/202109/16/61430dc2858d92299.jpg_d250.jpg",
    "publishedAt": "20240616T00:20:09Z",
    "content": "iPad 100% 10.2 Retina iPad True Tone Retina True Tone iPad 2021 Apple Pecncil \r\niPad A13 20A13 Bionic iPadOS 15 \r\n iPad  iPad Pro Center Stage iPad 12MP Center Stage Center Stage FaceTime iPadCenter … [+8 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "PLUS会员：Apple 苹果 iPhone 15 Plus 5G手机 128GB 粉色 5648.51元",
    "description": "玩家之道升级灵动岛设计，主摄升级4800万像素，A16芯片加持~京东此款目前活动售价6099元，下单领取满3000减400元优惠券，优惠活动，叠加20020补贴券，plus专享立减，实付低至5,648.51元，近期好价。国内今日必买：京东 满200元减20元补贴券 每日领取三张，可叠万...",
    "url": "https://www.smzdm.com/p/116368557/",
    "urlToImage": "https://y.zdmimg.com/202309/13/6500b39daa7d76266.png_d250.jpg",
    "publishedAt": "20240616T00:57:38Z",
    "content": "iPhone 15 Plus IP68 201g7.8mm\r\niPhone 15 Plus 6.7 OLED XDR 2796×1290460ppi2000100%DCIP360HziPhone 15Plus A16 6 CPU5GPU 16 iPhone 14 Plus 263550%LightningUSBC\r\niPhone 15 Plus 4800f1.62400120021200f2… [+12 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "Apple 苹果 iPad 10 2022款 10.9英寸 平板电脑 2679元（需用券）",
    "description": "天猫精选此款目前活动售价2999元，下单领取满2999减250元优惠券，优惠活动，实付低至2749元，近期好价。叠加优惠券：满2999减250元",
    "url": "https://www.smzdm.com/p/116382428/",
    "urlToImage": "https://qny.smzdm.com/202210/19/634f643fcc3601371.jpg_d250.jpg",
    "publishedAt": "20240616T04:20:25Z",
    "content": "iPad 2022iPad ProiPad Air10.9Liquid2360*1640264PPI500nit10.9HomeIDIPad 2022LightningUSBC\r\nA145nm118 20% 10%16A13280%12001200122°12004K240fps\r\n64GB256GBWLAN5GWiFi 6iPad 2022Apple PenciliPadOS 16 iPad"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "官旗好价：Apple 苹果 iPhone 15 Pro Max 5G智能手机 256GB 7949元（分期免息）",
    "description": "玩家之道旗舰店入手，省心方便。天猫AppleStore旗舰店售价9999元，下单减1750元，叠加300元优惠券，实付低至7949元到手，支持免息优惠，具体需要看看银行卡、花呗能支持多少期免息（编辑实际查看，花呗3期免息、中信信用卡3期免息，不排除其他信用卡有更合适免息机会）；Apple...",
    "url": "https://www.smzdm.com/p/116365667/",
    "urlToImage": "https://qny.smzdm.com/202310/30/653f14dcbecca3290.jpg_d250.jpg",
    "publishedAt": "20240616T00:09:55Z",
    "content": "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "Apple 苹果 iPad Pro 2024款 M4版 11英寸 平板电脑 无线局域网机型 256GB 深空黑色 7599元",
    "description": "京东国际此款目前活动售价7599元，近期好价。",
    "url": "https://www.smzdm.com/p/116399456/",
    "urlToImage": "https://qny.smzdm.com/202405/08/663af5b86ede3929.jpg_d250.jpg",
    "publishedAt": "20240616T05:11:54Z",
    "content": "2024572024iPad Pro 11/13100%OLEDOLED1000nitSDRHDR1600nitHDROLED115.3mm135.1mm\r\nM43nm10CPU4610GPU16M2M4iPad Prologo20%\r\niPad Pro1200LiDAR1200Face ID3USB 4USBC"
    },
    {
    "source": {
    "id": null,
    "name": "Caradisiac.com"
    },
    "author": "Jérémy Fdida",
    "title": "Essai Lemmo One Mark II : l’outil pour vélotaf un chouia amélioré, mais plus cher",
    "description": "Seulement quelques mois après sa présentation, Lemmo améliore son modèle : capteur de couple, support smartphone intégré, compatible Find My d’Apple et 290 euros de plus. Le tout dans un poids contenu et avec un mode musculaire. Tienton là le meilleur vélo p…",
    "url": "https://www.caradisiac.com/essailemmoonemarkiiloutilpourvelotafunchouiaamelioremaispluscher209330.htm",
    "urlToImage": "https://images.caradisiac.com/images/9/3/3/0/209330/S7209330804883.jpg",
    "publishedAt": "20240616T08:50:03Z",
    "content": "Lemmo One mark II est la seconde itération du vélo du nouveau constructeur allemand. Vous savez, lAllemagne, lautre pays de la voiture premium et des nouvelles mobilités (qui font un carton làbas). … [+12308 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CBS Sports"
    },
    "author": "Kyle Porter",
    "title": "Who will win U.S. Open 2024? Evaluating odds of Bryson DeChambeau, Rory McIlroy, top of leaderboard",
    "description": "Will McIlroy break his decadelong drought, or will DeChambeau break through with his second major?",
    "url": "https://www.cbssports.com/golf/news/whowillwinusopen2024evaluatingoddsofbrysondechambeaurorymcilroytopofleaderboard/",
    "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/06/16/89bd5c72733547d0adaab521a48878fc/thumbnail/1200x675/c095f5220f2a8d7400cdc116ecce01a5/brysondechambeaur32usopeng.png",
    "publishedAt": "20240616T01:57:36Z",
    "content": "PINEHURST, N.C.  Seconds after his 67th shot of the day found the bottom of the 18th cup at Pinehurst No. 2, Bryson DeChambeau turned to the sprawling infrastructure running up the lefthand side o… [+5439 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Photorumors.com"
    },
    "author": "PR admin",
    "title": "What else is new?",
    "description": "Sigma has no plans to release fullframe lenses for Canon RFmount Additional coverage of the new Canon RFS 3.9mm f/3.5 STM Dual Fisheye lens for Apple Vision Pro Petapixel leaks the Nikon Z6 III camera 4k/120p video capabilities in YouTube hashtags, calls i…",
    "url": "https://photorumors.com/2024/06/15/whatelseisnew725/",
    "urlToImage": "https://photorumors.com/wpcontent/uploads/2016/12/Cameracompanieslogos.png",
    "publishedAt": "20240616T01:38:00Z",
    "content": "FCC disclosure statement: this post may contain affiliate links or promotions that do not cost readers anything but help keep this website alive. As an Amazon Associate, I earn from qualifying purcha… [+253 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Pausaparafeminices.com"
    },
    "author": "Bruna Tavares",
    "title": "100 percent free Quickspin Slots",
    "description": "Content Issues Regarding the Associated Jackpotcity Gambling enterprise Didn’t find The brand new 100 percent free Revolves Bonus You desired? What Day Is best To play Online slots games? Refer A friend Added bonus It’s really easy to begin – the brand new ca…",
    "url": "https://www.pausaparafeminices.com/ppf/100percentfreequickspinslots/",
    "urlToImage": null,
    "publishedAt": "20240616T06:05:16Z",
    "content": "Its really easy to begin the brand new casino app obtain can be acquired via the Apple App Shop. Once you have downloaded the new application, use your current account info in order to join, or youls… [+5713 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Pausaparafeminices.com"
    },
    "author": "Bruna Tavares",
    "title": "Finest Cellular Slots Philippines To own 2024",
    "description": "Blogs Gambling establishment Advice Gamble 100 percent free Slots Zero Down load Necessary Currency Handling of Progressive Slots That is an alternative development book to help you Barcrest game enabling professionals in order to trigger an alternative added…",
    "url": "https://www.pausaparafeminices.com/ppf/finestcellularslotsphilippinestoown2024/",
    "urlToImage": null,
    "publishedAt": "20240616T00:14:36Z",
    "content": "That is an alternative development book to help you Barcrest game enabling professionals in order to trigger an alternative added bonus bullet. BetRivers Gambling enterprise offers online casino slo… [+4830 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Pausaparafeminices.com"
    },
    "author": "Bruna Tavares",
    "title": "Nodeposit Cellular Bonuses United states of america",
    "description": "Posts Bonus Listing And that Gambling establishment Circle Gives the Finest Nodeposit Mobile 100 percent free Spins? Finest Us Nodeposit Incentive Rules and you can Casinos Inside the 2024 Assemble a hundred Nodeposit Revolves In the Pokerstars Local casin…",
    "url": "https://www.pausaparafeminices.com/ppf/nodepositcellularbonusesunitedstatesofamerica/",
    "urlToImage": null,
    "publishedAt": "20240616T06:00:51Z",
    "content": "Make sure that your gambling establishment supporting mobile enjoy and check or no exclusive mobile bonuses come. Most of the bonuses provides wagering requirements that must be fulfilled until the a… [+6974 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ozbargain.com.au"
    },
    "author": "LUXqiu",
    "title": "MUNBYN 401 AirPrint Voice Controlled Thermal Label Printer $307.99 AUD Delivered ($439.99 AUD) @ MUNBYN AU, Use Code Get 12% off",
    "description": "1300Mbps UltraFast WiFi: 3 Times faster than the traditional 2.4GHz connection.\n\nStable Network Connection: The higher frequency band minimizes interference, allowing up to 10 devices to connect without congestion, ensuring a stable and rapid network connec…",
    "url": "https://www.ozbargain.com.au/node/851524",
    "urlToImage": "https://files.ozbargain.com.au/n/24/851524l.jpg?h=092e260a",
    "publishedAt": "20240616T01:30:39Z",
    "content": "1300Mbps UltraFast WiFi: 3 Times faster than the traditional 2.4GHz connection.\r\nStable Network Connection: The higher frequency band minimizes interference, allowing up to 10 devices to connect wi… [+625 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "FREDZONE"
    },
    "author": "Habib ADECHOKAN",
    "title": "Apple adopte enfin le RCS, mais en toute discrétion !",
    "description": "C’était une annonce attendue de longue date par les utilisateurs Android : le support du RCS (Rich Communication Services) dans iOS 18. Voilà une véritable avancée majeure pour l’interopérabilité entre iMessage et son rival sur Android. Et celleci aurait mér…",
    "url": "https://www.fredzone.org/appleadoptercsentoutediscretion/",
    "urlToImage": null,
    "publishedAt": "20240616T05:24:42Z",
    "content": "Un changement de taille pour les échanges interplateformes\r\nPourtant, les implications de ce virage sont considérables. Grâce au RCS, les utilisateurs d’iPhone et d’Android pourront enfin s’échanger… [+1354 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MMA Fighting"
    },
    "author": "Mike Heck",
    "title": "UFC Vegas 93, Silva vs. Sonnen 3, and Tank vs. Martin postfight show: Reaction to Tatsuro Taira, Gervonta Davis’ brutal finishes",
    "description": "MMA Fighting reacts to Tatsuro Taira’s big win at UFC Vegas 93, Gervonta Davis’ brutal knockout of Frank Martin, Anderson Silva vs. Chael Sonnen’s boxing match, and more.",
    "url": "https://www.mmafighting.com/2024/6/16/24179459/ufcvegas93silvavssonnen3davisvsmartinpostfightshowreactiontankdavistatsurotaira",
    "urlToImage": "https://cdn.voxcdn.com/thumbor/9P7Fz4knxcaLBzpUELLaCvrLAtE=/0x65:1920x1070/fitin/1200x630/cdn.voxcdn.com/uploads/chorus_asset/file/25493334/Combat_Spors_Weekend.jpg",
    "publishedAt": "20240616T06:38:38Z",
    "content": "Tatsuro Taira and Gervonta Davis ended their respective main event bouts without the need of the judges, with Taira earning a secondround TKO victory in the main event of UFC Vegas 93, while Davis d… [+820 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Maclife.de"
    },
    "author": "Andreas Donath",
    "title": "Apple Password Manager: Sind jetzt 1Password und Co. am Ende?",
    "description": "Auf dem WWDC hat Apple eine eigene PasswortManagerApp präsentiert. Was heißt das für andere Anbieter wie 1Passwort, LastPass und Co.? Bringt Apple hier wieder einmal per Sherlocking andere Anbieter in Bedrängnis? (Weiterlesen)",
    "url": "https://www.maclife.de/news/applepasswordmanagersindjetzt1passwordcoamende100124095.html",
    "urlToImage": "https://www.maclife.de/media/maclife/styles/tec_frontend_opengraph/public/images/editors/2024_24/image1240954612298.jpg?itok=je0cxH5_",
    "publishedAt": "20240616T07:29:37Z",
    "content": "Mit der Vorstellung seines eigenen Passwortmanagers auf der WWDC 2024 hat Apple die Branche aufhorchen lassen. Doch bedeutet dies das Ende für etablierte Anbieter wie 1Password, LastPass und Co.? Ein… [+2820 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Boston Globe"
    },
    "author": "Jill Cowan",
    "title": "In California, tribal members are reclaiming the ‘land of the flowing water’",
    "description": "In recent years, Native American tribes have reclaimed hundreds of acres of ancestral land, often after decades of advocacy.",
    "url": "https://www.bostonglobe.com/2024/06/16/nation/californiatribalmembersarereclaiminglandflowingwater/",
    "urlToImage": "https://www.bostonglobe.com/pf/resources/images/logobg.jpg?d=478",
    "publishedAt": "20240616T07:01:00Z",
    "content": "But things are changing, tribal members say. They have recently reclaimed corners of the valley, buoyed by growing momentum across the country to return land to Indigenous stewardship, also known as … [+7414 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applech2.com"
    },
    "author": "applech2",
    "title": "iOS 18とiPadOS 18では、macOS 14 Sonomaと同じくAirPodsやワイヤレスゲームコントローラの反応を向上させる「ゲームモード」がサポートされるほか、GIPプロトコルのサポートにより有線接続のXboxコントローラでより低遅延な操作が可能に。",
    "description": "iOS 18やiPadOS 18では、macOS 14 Sonomaと同じくAirPodsやワイヤレスゲームコントローラの反応を向上させる「ゲームモード」がサポートされるほか、GIPプロトコルのサポートによりXboxの […]\nThe post iOS 18とiPadOS 18では、macOS 14 Sonomaと同じくAirPodsやワイヤレスゲームコントローラの反応を向上させる「ゲームモード」がサポートされるほか、GIPプロトコルのサポートにより有線接続のXboxコントローラでより低遅延な操作が可能に。 fi…",
    "url": "https://applech2.com/archives/20240616iosandipados18gamemodeandgip.html",
    "urlToImage": "https://applech2.com/wpcontent/uploads/2024/06/iOSandiPadOS18GameModeforiPhoneiPad.jpg",
    "publishedAt": "20240616T04:47:03Z",
    "content": "iOS 18iPadOS 18macOS 14 SonomaAirPodsGIPXbox\r\nApple20240611WWDC24iOS 18macOS 14 SonomaiPhoneCPUGPU\r\nWWDC24Gaming Mode for iPhone\r\niOS 18iPhoneiPadOS 18iPadAppleOSMicrosoftSonyBluetooth2AirPods*7/*8\r\n… [+1290 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Adslzone.net"
    },
    "author": "Alberto García Méndez",
    "title": "Si tienes router Movistar puedes mejorar tu conexión en las videollamadas con este botón",
    "description": "Si tienes un router Movistar, ya sea el clásico HGU como el Smart WiFi 6, hay una opción que quizás no conocías y que puede mejorar la conexión a Internet durante tus videollamadas. Es muy útil para optimizar el consumo de datos de forma que la videollamada s…",
    "url": "https://www.adslzone.net/noticias/operadores/routermovistarmejorarconexionboton/",
    "urlToImage": "https://www.adslzone.net/app/uploadsadslzone.net/2024/06/movistar.jpg",
    "publishedAt": "20240616T06:00:56Z",
    "content": "Para hacer uso de este truco, que mejorará la calidad de la conexión durante las videollamadas, tenemos que instalar previamente la aplicación Smart WiFi de Movistar, disponible tanto para Android co… [+2562 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Techstage.de"
    },
    "author": "Stefan Schomberg",
    "title": "Top 10: Die besten Smartphones bis 500 Euro – Samsung vor Xiaomi und Google",
    "description": "1000 Euro sind zu viel für ein Smartphone? Kein Problem: Es gibt für 500 Euro fast genauso gute Mobiltelefone ohne Vertrag. Wir sagen, worauf man beim Kauf achten muss.",
    "url": "https://www.techstage.de/bestenliste/top10diebestensmartphonesbis500eurosamsungvorxiaomiundgoogle/y7evzvw#article",
    "urlToImage": "https://ocdn.eu/pulscmstransforms/1/e4iktkpTURBXy80NmMzOWFlYTcyNzEzYWQzYTA1MmEyODE1OWJlNDE5NS5qcGeSlQPNAtLNAp3NCQnNBRaTBc0EsM0Cdg",
    "publishedAt": "20240616T08:30:00Z",
    "content": "Die Topmodelle der namhaften Hersteller stehen natürlich im Rampenlicht. Smartphones wie das Samsung Galaxy S24 Ultra (Testbericht) wecken Begehrlichkeiten, weil sie technisch das Beste vom Besten in… [+16207 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Www.abc.es"
    },
    "author": "(abc)",
    "title": "Las firmas tecnológicas que llevan el cuidado del talento al siguiente nivel",
    "description": "La sede de VocentoABC ha acogido la primera edición del ranking Best Workplaces en Tecnología , organizado por Great Place To Work, con DigitalES (la Asociación Española para la Digitalización) y Vocento como partners. Un proyecto hecho realidad que se incor…",
    "url": "https://www.abc.es/economia/firmastecnologicasllevancuidadotalentosiguientenivel20240616180842nt.html",
    "urlToImage": "https://s2.abcstatics.com/abc/www/multimedia/economia/2024/06/16/bestworkplaces_20240614220727U15711552773hKp1024x512@diario_abc.jpg",
    "publishedAt": "20240616T09:04:41Z",
    "content": "La sede de VocentoABC ha acogido la primera edición del ranking Best Workplaces en Tecnología, organizado por Great Place To Work, con DigitalES (la Asociación Española para la Digitalización) y Voc… [+6802 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Blognone.com"
    },
    "author": "mk",
    "title": "ภาษา Swift มีอายุครบ 10 ปี แอปเปิลบอกเหมาะใช้แทน C++ ที่สุด, Swift 6.0 ออกปีนี้",
    "description": "แอปเปิลเปิดตัวภาษา Swift ครั้งแรกในปี 2014 เพื่อเป็นภาษาหลักสำหรับพัฒนาแอพบน iOS และ macOS แทน ObjectiveC ของเดิม\r\n\nปีนี้ถือเป็นการครบรอบ 10 ปีของภาษา Swift ซึ่งในงาน WWDC 2024 สัปดาห์ที่แล้วก็มีการฉลองกันเล็กๆ น้อยๆ ในเรื่องนี้\r\n\nTed Kremenek ผู้อำนวยการฝ่า…",
    "url": "https://www.blognone.com/node/140410",
    "urlToImage": "https://www.blognone.com/sites/default/files/externals/52e00ab92185e81390c48d2f859254f5.jpeg",
    "publishedAt": "20240616T03:02:09Z",
    "content": "Swift 2014 iOS macOS ObjectiveC \r\n 10 Swift WWDC 2024 \r\nTed Kremenek Languages &amp; Runtimes Platforms State of the Union WWDC Swift C, C++, ObjectiveC Swift 1 Swift Private Cloud Compute Swift \r\n… [+298 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Compradiccion.com"
    },
    "author": "Fran León",
    "title": "Ni Apple ni Samsung, esta tablet Huawei es una bestia y viene con dos regalos y descuento extra",
    "description": "Aunque el iPad es el rey indiscutible en el sector de las tablets, hay otras opciones más económicas y que también tienen buenas características. Un ejemplo de ello es la Huawei MatePad 11 2023 que, ahora, puedes conseguirla por 275,08 euros y dos regalos y t…",
    "url": "https://www.compradiccion.com/tabletsylibroelectronico/applesamsungestatablethuaweibestiavienedosregalosdescuentoextra",
    "urlToImage": "https://i.blogs.es/391962/ofertas_cpa_v3copia19/840_560.jpeg",
    "publishedAt": "20240616T10:00:52Z",
    "content": "Aunque el iPad es el rey indiscutible en el sector de las tablets, hay otras opciones más económicas y que también tienen buenas características. Un ejemplo de ello es la Huawei MatePad 11 2023 que, … [+1569 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hkepc.com"
    },
    "author": "HKEPC Hardware",
    "title": "SAMSUNG 手機超越 Apple iPhone 重返全球智能手機市場龍頭",
    "description": "【果粉呢  ?】市調機構 TrendForce 發表智能手機研究報告，受惠於 AI 旗艦機熱潮，SAMSUNG 在 2024 年 Q1 全球首季智慧型手機品牌產量市佔率中，正式超越了 Apple 重登龍頭寶座。位居第三至第六名的，分別是小米、Oppo、Transsion 和 Vivo 均為中國品牌，並且已佔全球市場超過 42%。",
    "url": "https://www.hkepc.com/22519/SAMSUNG_%E6%89%8B%E6%A9%9F%E8%B6%85%E8%B6%8A_Apple_iPhone__%E9%87%8D%E8%BF%94%E5%85%A8%E7%90%83%E6%99%BA%E8%83%BD%E6%89%8B%E6%A9%9F%E5%B8%82%E5%A0%B4%E9%BE%8D%E9%A0%AD",
    "urlToImage": "https://file1.hkepc.net/2024/06/640x480/16150026dfafd0bea656e8f23f8d8da.jpeg",
    "publishedAt": "20240616T07:00:26Z",
    "content": "【果粉呢  ?】市調機構 TrendForce 發表智能手機研究報告，受惠於 AI 旗艦機熱潮，SAMSUNG 在 2024 年 Q1 全球首季智慧型手機品牌產量市佔率中，正式超越了 Apple 重登龍頭寶座。位居第三至第六名的，分別是小米、Oppo、Transsion 和 Vivo 均為中國品牌，並且已佔全球市場超過 42%。"
    },
    {
    "source": {
    "id": null,
    "name": "ZDNet"
    },
    "author": "Prakhar Khanna",
    "title": "The best iOS 18 features that will make updating your iPhone worthwhile",
    "description": "The upcoming software version delivers a more personalized and customizable experience  including features Android users take for granted.",
    "url": "https://www.zdnet.com/article/thebestios18featuresthatwillmakeupdatingyouriphoneworthwhile/",
    "urlToImage": "https://www.zdnet.com/a/img/resize/78b1e2dc0b1e203baf13fcbe33305b44577bfe7a/2023/09/12/29be3e479f704dbeaa3758719088b48f/oldiphonesapplestore.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "20240616T10:00:22Z",
    "content": "Jason Hiner/ZDNET\r\nApple's iOS 18, unveiled earlier this week during the company's Worldwide Developers Conference, is one of the biggest iOS upgrades in years. \r\nFrom muchawaited features like RCS … [+8341 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "ZDNet"
    },
    "author": "Sabrina Ortiz",
    "title": "This MagSafe accessory lets you use iOS 18's most underrated feature before it's released",
    "description": "Recording calls can be as easy as snapping this accessory to the back of your iPhone. And you don't have to download any software updates to use it.",
    "url": "https://www.zdnet.com/article/thismagsafeaccessoryletsyouuseios18smostunderratedfeaturebeforeitsreleased/",
    "urlToImage": "https://www.zdnet.com/a/img/resize/479214327cf626da9fdb994914021275eac28e3b/2024/06/13/ea41122283184ce9b90a33be641f5361/img4091.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "20240616T10:00:36Z",
    "content": "Sabrina Ortiz/ZDNET\r\nZDNET's key takeaways\r\n<ul><li>The Magmo Pro Magnetic SnapOn Call Recorder is available on Amazon for $129 in Starlight (white), Navy, and Space Black. </li><li>If you want to r… [+5617 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "ZDNet"
    },
    "author": "Kerry Wan",
    "title": "I tested LG's new Mini LED TV for a month, and it beat my G2 OLED in 3 major ways",
    "description": "Exceptional brightness and color accuracy, supported by a snappy new AI processor, make LG's latest Mini LED model a formidable TV in 2024.",
    "url": "https://www.zdnet.com/homeandoffice/homeentertainment/itestedlgsnewminiledtvforamonthanditbeatmyg2oledin3majorways/",
    "urlToImage": "https://www.zdnet.com/a/img/resize/3cbe1cedd364df9b48fdf4aa456fc9f36ce2e5ff/2024/06/11/1763233b04774528b24426ab54b60058/lgqned90t2.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "20240616T10:00:30Z",
    "content": "Kerry Wan/ZDNET\r\nZDNET's key takeaways\r\n<ul><li>The LG QNED90T model features the company's latest Mini LED technology, delivering high brightness and eyepleasing colors.</li><li>New AI features ult… [+6731 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Mediafax.ro"
    },
    "author": "Diana Nunut",
    "title": "FT: Apple ar putea fi primul gigant tehnologic care sar putea confrunta cu sancţiuni din partea UE",
    "description": "Ar fi pentru prima dată când autorităţile de reglementare ale UE folosesc noile norme digitale pentru a viza un mare grup tehnologic.",
    "url": "https://www.mediafax.ro/economic/ftapplearputeafiprimulgiganttehnologiccaresarputeaconfruntacusanctiunidinparteaue22408118",
    "urlToImage": "https://storage0.dms.mpinteractiv.ro/media/1/1/1686/22408118/1/apple.jpg?width=640",
    "publishedAt": "20240616T09:41:09Z",
    "content": "Comisia European a stabilit c productorul iPhone nu respect obligaiile de a permite dezvoltatorilor de aplicaii s îndrepte\" utilizatorii ctre oferte din afara App Store fr a le impune taxe, potrivit … [+1815 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Iphonemania.jp"
    },
    "author": "FT729",
    "title": "iPad mini 7はM1、iPad（第11世代）はA18を搭載？AI戦略から推察",
    "description": "Apple Intelligenceに対応するチップが、Apple MシリーズかAシリーズではA17 Pro以上であることから、今後発表されるであろうiPad mini 7とiPad（第11世代）のチップも対応するものが選択される可能性が高そうです。",
    "url": "https://iphonemania.jp/news581949/",
    "urlToImage": "https://iphonemania.jp/uploads/2024/06/16/143871a54e03d06e97ab88053cb4c462.jpg",
    "publishedAt": "20240616T09:50:07Z",
    "content": "Apple IntelligenceApple MAA17 ProiPad mini 7iPad11\r\niPhone SE4Apple Intelligence\r\nApple IntelligenceApple MA17 Pro\r\niPad mini 6A15 BioniciPad10A14 BionicApple Intelligence\r\nWWDC24GoogleMicrosoftApple… [+338 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Iphonemania.jp"
    },
    "author": "hato",
    "title": "iOS18の新機能Genmoji、他OSでも表示可能？Appleが詳細解説",
    "description": "iOS18やmacOS Sequoiaの人工知能（AI）を活用した新機能Apple Intelligenceでは、既存の絵文字をアレンジしたオリジナルの絵文字を作成できるGenmojiが利用可能となります。Genmojiの利用できる環境について、Appleが詳しく解説しています。",
    "url": "https://iphonemania.jp/news581936/",
    "urlToImage": "https://iphonemania.jp/uploads/2024/06/16/WWDC24AppleGenmoji3.png",
    "publishedAt": "20240616T08:02:55Z",
    "content": "iOS18macOS SequoiaAIApple IntelligenceGenmojiGenmojiApple\r\nGenmojiApple Intelligence\r\nUnicodeGenmojiOS\r\nAppleWWDC24Genmoji\r\nAppleGenojiAPINSAdaptiveImageGlyph\r\nGenmoji\r\nGenmoji\r\nGenmojiUnicode\r\nGenmo… [+130 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Iphonemania.jp"
    },
    "author": "lexi",
    "title": "iOS18では緊急SOSのライブ動画がサポート",
    "description": "今秋正式版がリリース予定のiOS18では、緊急SOS機能がアップデートされており、緊急通報サービスに対して状況をさらに詳しく説明するためのライブ動画がサポートされていることが判明しました。音声だけでは伝えきれない情報をコミュニケートするのに役立ちそうです。",
    "url": "https://iphonemania.jp/news581941/",
    "urlToImage": "https://iphonemania.jp/uploads/2024/06/16/ios16iphone14propoweroffscreen1.png",
    "publishedAt": "20240616T08:25:23Z",
    "content": "iOS18SOS\r\niOS18SOS\r\niOS18\r\nSOS\r\nWiFiiPadMac\r\nID\r\nSource: MacRumors, Apple (1), (2)\r\nPhoto: Apple"
    },
    {
    "source": {
    "id": null,
    "name": "Iphonemania.jp"
    },
    "author": "FT729",
    "title": "iPad Pro（M4）+Apple Pencil ProをAmazonアウトレット販売中",
    "description": "iPad Pro（M4）とApple Pencil Proが、Amazonアウトレットに入荷しています。販売台数はそれぞれ、１台です。 販売中の商品の価格と程度 2024年6月16日午後0時43分時点で販売されているのは […]",
    "url": "https://iphonemania.jp/news581913/",
    "urlToImage": "https://iphonemania.jp/uploads/2024/06/16/de0bebb0b6f34457223b6d9c02f31259.png",
    "publishedAt": "20240616T03:53:32Z",
    "content": "iPad ProM4Apple Pencil ProAmazon\r\n2024616043\r\n<table><tr><td> </td><td> </td><td> </td></tr><tr><td>iPad ProM4, WIFi, 256GB</td><td>143,480</td><td></td></tr><tr><td>Apple Pencil Pro</td><td>17,781<… [+70 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Iphonemania.jp"
    },
    "author": "lexi",
    "title": "iOS18の「音声ショートカット」でSiriの名前を変更可能に",
    "description": "WWDC24で発表されたiOS18では、新機能「音声ショートカット（Voice Shortcuts）」で、Siriを起動時に呼びかける名前を自由に変更できることが明らかになりました。しかしながら、機能には制限があるようで […]",
    "url": "https://iphonemania.jp/ios581930/",
    "urlToImage": "https://iphonemania.jp/uploads/2023/12/23/AppleSiri.jpg",
    "publishedAt": "20240616T07:55:55Z",
    "content": "WWDC24iOS18Voice ShortcutsSiri\r\nAppleSiriSiriHey SiriiOS18\r\niOS18SiriSiri\r\niOS18SiriSiriRedditHey Siri\r\nSiriSiriiPhoneHomePodSiri\r\niOS18Apple IDApple\r\niOS18Apple IntelligenceChatGPT\r\nSource: MacRumor… [+14 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Kocpc.com.tw"
    },
    "author": "ClaireC",
    "title": "現在不是購買 Windows PC 好時機的 5 個原因",
    "description": "雖然買最棒的新筆電或升級最強最新的電腦是很誘人的事，但現在明顯不是個好時機。憑藉著 Computex 和 WWDC，2024 年 6 月成為科技新聞和新品發表的巨大旋風，其中當然還包含 Intel、AMD、高通甚至 Apple 的一些重大公告。鑒於即將問世的新產品，延遲升級並看看這些公司為我們端上什麼好菜更為明智。\nThe post 現在不是購買 Windows PC 好時機的 5 個原因 appeared first on 電腦王阿達.",
    "url": "https://www.kocpc.com.tw/archives/551701",
    "urlToImage": "https://www.kocpc.com.tw/wpcontent/uploads/2024/02/1709026107085538b4bdc55588b00704e1f7a76503.jpg",
    "publishedAt": "20240616T08:23:45Z",
    "content": "Computex WWDC2024 6 IntelAMD Apple \r\nSnapdragon X Elite Windows \r\nARM Windows Snapdragon X Elite Apple Silicon X86 CPU Copilot+ AI Snapdragon X \r\nARM Windows Prism Apple Rosetta 2 ARM X86 ARM SlackDa… [+954 chars]"
    }
    ];

  constructor(){
    super();
    this.state = {
        articles : this.articles
    }
}

async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=de6735f936e04444998a407a55684e9f";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles : parsedData.articles })
}

  render() {
    return (
        <div className='container my-3'>
        <h2>Top headlines</h2>

        <div className='row'>
            {this.state.articles.map((element) =>{
                return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title?.slice(0,20)} description = {element.description?.slice(0,40)} imageUrl={!element.urlToImage ?"https://s.yimg.com/ny/api/res/1.2/APmNatbOT7Ud03AEXlUMsg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/6d2d9070-2b52-11ef-a7ff-07085b1db9a8" : element.urlToImage} newsUrl = {element.url}/>
                </div>
            })}
            
        </div>
        </ div>
    )
  }
}

export default News