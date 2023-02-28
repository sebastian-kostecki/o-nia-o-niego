const settingsVariablesMixins = {
  data() {
    return {
      patrons: [
        {
          id: 1,
          text: "Trójca Święta",
          prayer: "O Trójco Święta, Boże nasz, błagam Cię o Twoją łaskę i pomoc w poszukiwaniu odpowiedniego współmałżonka.\n" +
            "\n Ojcze niebieski, Ty jesteś miłującym Ojcem, który zawsze nas prowadzi i chroni. Proszę, abyś pomógł mi znaleźć osobę, z którą będę mógł dzielić swoje życie, która będzie ze mną dzieliła radości i smutki, która będzie mi towarzyszyć w mojej wierze i pomagać mi rozwijać się duchowo.\n" +
            "\n Synu Boży, Jezu Chryste, Ty jesteś naszym Zbawicielem i Mistrzem, który pokazał nam, jak kochać i służyć. Proszę, abyś pomógł mi znaleźć osobę, która będzie dla mnie dobrym współmałżonkiem, która mnie szanuje i kocha, która będzie ze mną dzieliła moją wiarę i pomagała mi rozwijać się duchowo.\n" +
            "\n Duchu Święty, Ty jesteś naszym Przewodnikiem i nauczycielem, który ożywia nasze serca i umysły. Proszę, abyś pomógł mi w poszukiwaniach i wyborze odpowiedniego partnera, który będzie dla mnie najlepszy, kto będzie mi pomagał rozwijać się jako osoba i chrześcijanin.\n" +
            "\n O Trójco Święta, proszę, abyście byli ze mną w moim poszukiwaniu dobrego współmałżonka. Proszę, abyście pomogli mi znaleźć osobę, która będzie dla mnie najlepsza i która będzie pomagała mi rozwijać się duchowo. Amen."
        },
        {
          id: 2,
          text: "Święta Rodzina",
          prayer: "O Święta Rodzino Jezusa, Maryi i Józefa, błagam Was o Waszą modlitwę w moim poszukiwaniu odpowiedniego współmałżonka.\n" +
            "\n Jezu, Synu Boży, Ty zawsze spełniasz nasze potrzeby i modlitwy. Proszę, dopomóż mi w znalezieniu osoby, która będzie dla mnie najlepszym towarzyszem w życiu, którego będę mógł kochać i szanować, który będzie ze mną dzielił radości i smutki.\n" +
            "\n Maryjo, Matko Boża, Ty jesteś wzorem matczynej miłości i troski. Proszę, abyś patrzyła na mnie łaskawie i wstawiała się za mną u swojego Syna, aby pomógł mi w wyborze odpowiedniego partnera. Proszę, abyś objęła mnie swoim matczynym płaszczem i ochraniała mnie przed złymi wpływami.\n" +
            "\n Józefie, Patronie Kościoła, Ty byłeś dobrym mężem i opiekunem dla Maryi i Jezusa. Proszę, abyś pomógł mi znaleźć odpowiedniego partnera, który będzie dla mnie dobrym mężem i ojcem, który będzie mnie wspierał i chronił w trudnych momentach.\n" +
            "\n O Święta Rodzino, proszę, abyście byli ze mną w moim poszukiwaniu dobrego współmałżonka. Proszę, abyście pomogli mi wybrać osobę, która będzie dla mnie najlepsza i która będzie pomagała mi rozwijać się duchowo. Amen."
        },
        {
          id: 3,
          text: "Duch Święty",
          prayer: "O Duchu Święty, proszę Cię o Twoją pomoc w znalezieniu mi odpowiedniego współmałżonka.\n" +
            "\n Rozgrzej mój serce swoim ogniem miłości i otwórz moje oczy na to, co jest ważne w życiu. Pomóż mi znaleźć kogoś, kto będzie ze mną dzielił mój świat, kto będzie moim najlepszym przyjacielem i towarzyszem drogi.\n" +
            "\n Pomóż mi znaleźć kogoś, kto będzie dla mnie dobrym współmałżonkiem, który mnie kocha i szanuje, który będzie ze mną dzielił radości i smutki, kto będzie ze mną dzielił moją wiarę i pomagał mi rozwijać się duchowo.\n" +
            "\n Daj mi siłę i cierpliwość w poszukiwaniach, aby nie poddać się, gdy trudności i przeszkody staną na mojej drodze. Daj mi mądrość, aby umieć wybrać odpowiedniego partnera, który będzie mnie wspierał w mojej wierze i pomagał mi rozwijać się jako osoba.\n" +
            "\n O Duchu Święty, błagam Cię, abyś prowadził mnie i pomagał mi znaleźć odpowiedniego partnera, z którym będę mógł dzielić swoje życie. Amen."
        }
      ],
      mysteryOfRosary: [
        {
          id: 1,
          text: "Zwiastowanie",
          bible: "Oto poczniesz i porodzisz Syna, któremu nadasz imię Jezus” (Łk 1,31)",
          reflection: "„Oto poczniesz i porodzisz Syna, któremu nadasz imię Jezus” (Łk 1,31). Druga\n" +
            "Osoba Trójcy Świętej, z dawna obiecywany i przepowiadany Mesjasz, w łonie\n" +
            "Maryi Dziewicy staje się Człowiekiem. Największe wydarzenie w dziejach\n" +
            "ludzkości. Odkupienie ludzkości zapoczątkowane. Teraz potoczy się jak lawina\n" +
            "przez wszystkie tajemnice różańcowe.\n" +
            "Jezus Chrystus dla mnie staje się Człowiekiem. Dla mojego odkupienia,\n" +
            "uświęcenia i zbawienia podejmuje trud życia ziemskiego.\n" +
            "O Jezu, poczęty z Ducha Świętego w łonie Maryi Dziewicy, Synu Boga Ojca i mój\n" +
            "Odkupicielu, jak Maryja przyjmuję Cię aktem wiary i miłości i proszę, aby cała\n" +
            "ludzkość uwierzyła w Twoją Ewangelię."
        },
        {
          id: 2,
          text: "Nawiedzenie św. Elżbiety",
          bible: "Błogosławiony jest owoc Twojego łona. A skądże mi to, że Matka mojego Pana\n" +
            "przychodzi do mnie” (Łk 1,42-43)",
          reflection: "„Błogosławiony jest owoc Twojego łona. A skądże mi to, że Matka mojego Pana\n" +
            "przychodzi do mnie” (Łk 1,42-43). Poczęty z Ducha Świętego, już w łonie swej\n" +
            "Matki rozpoczyna Jezus zbawcze dzieło, wszak po to zstąpił na ziemię.\n" +
            "Nawiedzenie Elżbiety jest obrazem nawiedzenia przez Jezusa całej ludzkości z\n" +
            "bezmiaru Bożego miłosierdzia i miłości. Przychodzi, aby wspomagać, uwalniać,\n" +
            "uświęcać i uszczęśliwiać.\n" +
            "Jezus Chrystus przychodzi do mnie, do mojej rodziny, do każdego człowieka z\n" +
            "darem przebaczenia i życia Bożego. Tak zawsze nawiedza.\n" +
            "O Jezu, przynaglający swą Matkę do niesienia pomocy potrzebującym, jakże\n" +
            "uprzedzające jest Twoje miłosierdzie dla mnie i dla wszystkich ludzi! Proszę Cię o\n" +
            "miłosierdzie dla grzeszników, niewierzących i zrozpaczonych: niech Cię przyjmą\n" +
            "do swego serca jak Elżbieta w chwili nawiedzenia."
        },
        {
          id: 3,
          text: "Narodzenie Pana Jezusa",
          bible: "Dziś w mieście Dawida narodził się wam Zbawiciel, którym jest Mesjasz, Pan” (Łk 2,11)",
          reflection: "„Dziś w mieście Dawida narodził się wam Zbawiciel, którym jest Mesjasz, Pan” (Łk\n" +
            "2,11). Wszystkie przepowiednie i obietnice Starego Testamentu przyjmują kształt\n" +
            "widzialny: „Słowo Ciałem się stało i zamieszkało wśród nas” (J 1,14). Obietnice się\n" +
            "wypełniły. Zbawiciel stanął wśród ludzi.\n" +
            "Jezus Chrystus jest moim Zbawicielem i Zbawicielem wszystkich ludzi. Poza\n" +
            "Jezusem nie ma zbawienia (por. Dz 4,12).\n" +
            "O Jezu, Zbawicielu świata! Wierzę w Ciebie i ufam, że mnie doprowadzisz do\n" +
            "zbawienia. Proszę Cię przez miłość do Twej Matki, która Cię na świat wydała, o\n" +
            "zbawienie mojej duszy, mojej rodziny i wszystkich ludzi."
        },
        {
          id: 4,
          text: "Ofiarowanie Pana Jezusa w światyni",
          bible: "Oto Ten przeznaczony jest na upadek i na powstanie wielu\" (Łk 2,34)",
          reflection: "„Oto Ten przeznaczony jest na upadek i na powstanie wielu\" (Łk 2,34). Tajemnica\n" +
            "straszna! Jezus ofiaruje siebie dla zbawienia wszystkich: dobrych, złych,\n" +
            "wierzących i niewierzących. Nie wszyscy jednak przyjmą zbawienie Jezusa, wielu\n" +
            "Go odrzuci – ale też i oni będą odrzuceni na wieki.\n" +
            "Jezus Chrystus ofiaruje się za mnie, za moją rodzinę i za cały świat.\n" +
            "O Jezu, ofiarowany w świątyni Ojcu niebieskiemu, dziękuję Ci za Twoją Krew i\n" +
            "Ciało ofiarowane i ofiarujące się w świątyni za moje zbawienie i dla zbawienia\n" +
            "wszystkich ludzi. Proszę Cię, aby ofiara Twoja podźwignęła upadłych i wzmocniła\n" +
            "słabych."
        },
        {
          id: 5,
          text: "Znalezienie Pana Jezusa w świątyni",
          bible: "Dopiero po trzech dniach odnaleźli Go w świątyni” (Łk 2,46)",
          reflection: "„Dopiero po trzech dniach odnaleźli Go w świątyni” (Łk 2,46). Największą\n" +
            "tragedią człowieka jest utrata Jezusa – na ziemi przez grzech, zwłaszcza niewiary,\n" +
            "a po śmierci przez wieczne potępienie. Niewysłowiona zaś radość płynie z\n" +
            "odnalezienia Chrystusa przez łaskę i pojednanie z Kościołem.\n" +
            "Jezus Chrystus pozwala się znaleźć wszystkim, którzy Go szczerze szukają,\n" +
            "zwłaszcza tym, którzy szukają Go z pomocą Maryi. I mnie Maryja pomaga znaleźć\n" +
            "Jezusa w modlitwie, cierpieniu i pracy.\n" +
            "O Jezu, Ty mnie szukasz i Ty mnie odnajdujesz, gdy jestem zagubiony na ścieżkach\n" +
            "mojego życia, wszak „przyszedłeś szukać i zbawić to, co zginęło\" (por. Łk 19,10).\n" +
            "Twoja miłość nigdy się nie zraża i nie zawodzi. Spraw, abym Cię nigdy nie utracił, i\n" +
            "aby odnaleźli Cię wszyscy, którzy żyją z dala od Ciebie."
        },
        {
          id: 6,
          text: "Chrzest w Jordanie",
          bible: "A gdy Jezus został ochrzczony, natychmiast wyszedł z wody. A oto otworzyły Mu\n" +
            "się niebiosa i ujrzał Ducha Świętego zstępującego jak gołębicę i przychodzącego\n" +
            "na Niego” (Mt 3,16)",
          reflection: "„A gdy Jezus został ochrzczony, natychmiast wyszedł z wody. A oto otworzyły Mu\n" +
            "się niebiosa i ujrzał Ducha Świętego zstępującego jak gołębicę i przychodzącego\n" +
            "na Niego” (Mt 3,16). Baranek Boży – Druga Osoba Trójcy Świętej – objawia się i\n" +
            "jest objawiana ludowi nad Jordanem. Bóg Ojciec daje o Jezusie świadectwo w\n" +
            "słowach: „Ten jest mój Syn umiłowany, w którym mam upodobanie\" (Mt 3,17), a\n" +
            "Duch Święty zstępując jak gołębica na Jezusa, jest znakiem dla Jana, że oto stoi\n" +
            "przed nim Mesjasz.\n" +
            "Bóg Ojciec pragnie, abym uwierzył w Jego Syna Jedynego oraz przyjął Go jako\n" +
            "Zbawcę i Odkupiciela.\n" +
            "O Jezu, wierzę, że jesteś Synem Boga, proszę, daj mi taką pokorę serca, abyś Ty\n" +
            "mógł we mnie wzrastać, a ja się umniejszać. Pragnę być prawdziwą świątynią\n" +
            "Twego Ducha."
        },
        {
          id: 7,
          text: "Cud w Kanie Galilejskiej",
          bible: "«Zróbcie wszystko, cokolwiek wam powie»” (J 2, 5)",
          reflection: "„Trzeciego dnia odbywało się wesele w Kanie Galilejskiej i była tam Matka Jezusa.\n" +
            "Zaproszono na to wesele także Jezusa i Jego uczniów. A kiedy zabrakło wina,\n" +
            "Matka Jezusa mówi do Niego: «Nie mają już wina». Jezus Jej odpowiedział: «Czyż\n" +
            "to moja lub Twoja sprawa, Niewiasto? Czyż jeszcze nie nadeszła godzina moja?»\n" +
            "Wtedy Matka Jego powiedziała do sług: «Zróbcie wszystko, cokolwiek wam\n" +
            "powie»” (J 2,1-5). Godzina Syna Człowieczego to godzina odkupienia mającego\n" +
            "dokonać się na krzyżu. Ona jeszcze nie nadeszła, a właśnie ona jest największym\n" +
            "cudem Chrystusa.\n" +
            "Jezus Chrystus objawia się etapami. Najpierw dokonuje cudu przemiany wody w\n" +
            "wino, aby okazać miłosierdzie młodej parze oraz w celu objawienia swej mocy\n" +
            "uczniom.\n" +
            "Przemiana wody we wspaniałe wino jest dla mnie znakiem nadchodzącej uczty\n" +
            "mesjańskiej.\n" +
            "O Jezu, Ty wysłuchujesz próśb swojej Matki, wspierasz ludzi w ich potrzebie.\n" +
            "Spraw, abym zawsze Twoje wskazówki i rady wcielał w życie bez zbytniego\n" +
            "roztrząsania."
        },
        {
          id: 8,
          text: "Głoszenie Królestwa Bożego",
          bible: "«Duch Pański spoczywa na Mnie, ponieważ Mnie namaścił i posłał Mnie, abym\n" +
            "ubogim niósł dobrą nowinę, więźniom głosił wolność, a niewidomym przejrzenie;\n" +
            "abym uciśnionych odsyłał wolnymi, abym obwoływał rok łaski od Pana» (Łk 4, 18-19)",
          reflection: "„«Duch Pański spoczywa na Mnie, ponieważ Mnie namaścił i posłał Mnie, abym\n" +
            "ubogim niósł dobrą nowinę, więźniom głosił wolność, a niewidomym przejrzenie;\n" +
            "abym uciśnionych odsyłał wolnymi, abym obwoływał rok łaski od Pana». ... oczy\n" +
            "wszystkich w synagodze były w Nim utkwione. Począł więc mówić do nich: «Dziś\n" +
            "spełniły się te słowa Pisma, któreście słyszeli»” (Łk 4,18-21). Począwszy od\n" +
            "Nazaretu, Boży Syn jako wędrowny Nauczyciel objawiał ludziom królestwo swego\n" +
            "Ojca. W znakach i cudach ukazywał Jego miłosierdzie. Odpuszczał grzechy,\n" +
            "uzdrawiał chorych, wskrzeszał zmarłych. „Bo królestwo Boże to nie sprawa tego,\n" +
            "co się je i pije, ale to sprawiedliwość, pokój i radość w Duchu Świętym” (Rz\n" +
            "14,17).\n" +
            "Aby tam wejść, potrzebuję prawdziwego nawrócenia.\n" +
            "O Jezu, przemień mnie mocą swego miłosierdzia, abym w pełni stał się\n" +
            "dziedzicem Twojego królestwa."
        },
        {
          id: 9,
          text: "Przemienienie na górze Tabor",
          bible: "«To jest mój Syn umiłowany, w którym mam upodobanie, Jego słuchajcie!» (Mt 17, 6)",
          reflection: "„Po sześciu dniach Jezus wziął z sobą Piotra, Jakuba i brata jego Jana i\n" +
            "zaprowadził ich na górę wysoką, osobno. Tam przemienił się wobec nich: twarz\n" +
            "Jego zajaśniała jak słońce, odzienie zaś stało się białe jak światło” (Mt 17,1-2). Ci\n" +
            "sami trzej Apostołowie, którzy wkrótce zobaczą cierpienie Jezusa w Ogrójcu, są\n" +
            "świadkami objawienia: „... oto obłok świetlany osłonił ich, a z obłoku odezwał się\n" +
            "głos: «to jest mój Syn umiłowany, w którym mam upodobanie, Jego słuchajcie!»\n" +
            "Uczniowie, słysząc to, upadli na twarz i bardzo się zlękli. A Jezus zbliżył się do\n" +
            "nich, dotknął ich i rzekł: «Wstańcie, nie lękajcie się!»” (Mt 17,5b-7).\n" +
            "Jezus jest pośrednikiem między mną a Bogiem Ojcem. Wyzwala mnie z lęku i\n" +
            "pragnie wyzwolić z wszelkich przeszkód w komunii ze Stwórcą. Uczyni to przez\n" +
            "swą mękę, o której rozmawiał z Eliaszem i Mojżeszem.\n" +
            "O Jezu, daj mi być światłem i świadkiem Twojej chwały."
        },
        {
          id: 10,
          text: "Ustanowienie Eucharystii",
          bible: "Wtedy rzekł do nich: «Gorąco pragnąłem spożyć Paschę z wami, zanim będę\n" +
            "cierpiał»” (Łk 22,15)",
          reflection: "„Wtedy rzekł do nich: «Gorąco pragnąłem spożyć Paschę z wami, zanim będę\n" +
            "cierpiał»” (Łk 22,15). Syn Boży, jedyny i prawdziwy Arcykapłan dóbr przyszłych,\n" +
            "zastawia dla nas stół swego Ciała i Krwi Przenajświętszej, sakrament swojej\n" +
            "obecności. Zapewnia swoim Boskim autorytetem: „Jeżeli nie będziecie spożywali\n" +
            "Ciała Syna Człowieczego i nie będziecie pili Krwi Jego, nie będziecie mieli życia w\n" +
            "sobie. Kto spożywa moje Ciało i pije moją Krew, ma życie wieczne, a Ja go\n" +
            "wskrzeszę w dniu ostatecznym. Ciało moje jest prawdziwym pokarmem, a Krew\n" +
            "moja jest prawdziwym napojem. Kto spożywa moje Ciało i Krew moją pije, trwa\n" +
            "we Mnie, a Ja w nim” (J 6,53-56).\n" +
            "Umiłował mnie aż do końca. Zostaje ze mną pod postaciami chleba i wina.\n" +
            "O Jezu, uczyń z mego serca tabernakulum swojej wiecznej obecności, uczyń serce\n" +
            "moje według Serca Twego."
        },
        {
          id: 11,
          text: "Modlitwa w Ogrójcu",
          bible: "Pogrążony w udręce jeszcze usilniej się modlił, a Jego pot był jak gęste krople\n" +
            "krwi, sączące się na ziemię” (Łk 22,44)",
          reflection: "„Pogrążony w udręce jeszcze usilniej się modlił, a Jego pot był jak gęste krople\n" +
            "krwi, sączące się na ziemię” (Łk 22,44). Mógł nas odkupić aktem miłości, jednym\n" +
            "słowem. Ale Jego miłość chciała zadośćuczynić za grzechy świata nie tylko\n" +
            "modlitwą, lecz także konaniem i krwią: „Odkupieni jesteście drogocenną krwią\n" +
            "Chrystusa” (por. 1 P 1,19).\n" +
            "Jezus Chrystus modli się, kona i krwią się poci w Ogrójcu za moje grzechy, za\n" +
            "grzechy wszystkich obojętnych i zatwardziałych.\n" +
            "O Jezu, proszę Cię o łaskę doskonałego żalu za grzechy i poprawę życia, o łaskę\n" +
            "nawrócenia wszystkich grzeszników."
        },
        {
          id: 12,
          text: "Biczowanie",
          bible: "Uwolnił im Barabasza, a Jezusa kazał ubiczować i wydał na ukrzyżowanie” (Mt 27,26)",
          reflection: "„Uwolnił im Barabasza, a Jezusa kazał ubiczować i wydał na ukrzyżowanie” (Mt\n" +
            "27,26). Uwolnił złoczyńcę i zbrodniarza, a Jezusa poddał kaźni biczowania. Taka\n" +
            "jest zamiana: zbrodniarz będzie żył za cenę śmierci Niewinnego: „Spadła Nań\n" +
            "chłosta zbawienna dla nas, a w Jego ranach jest nasze zdrowie” (Iz 53,5b).\n" +
            "Jezus Chrystus jest okupem za moje grzechy, ofiarą przebłagalną za grzechy\n" +
            "całego świata. Jego Krew najświętsza obmywa świat z wszelkich nieprawości.\n" +
            "O Jezu, okrutnie biczowany, pokryty ranami i ociekający krwią, obmyj duszę moją\n" +
            "z grzechów, obmyj dusze tych, którzy się nie modlą i nie pokutują za grzechy."
        },
        {
          id: 13,
          text: "Cierniem ukoronowanie",
          bible: "Uplótłszy wieniec z ciernia, włożyli Mu na głowę ... pluli na Niego i bili Go po\n" +
            "głowie” (Mt 27,29-30)",
          reflection: "„Uplótłszy wieniec z ciernia, włożyli Mu na głowę ... pluli na Niego i bili Go po\n" +
            "głowie” (Mt 27,29-30). Pan chwały, Król wszechświata, opluty, zbity, wyśmiany i\n" +
            "poniżony: „Uniżył samego siebie, stawszy się posłusznym aż do śmierci” (Flp 2,8).\n" +
            "Jezus Chrystus cichy i pokornego serca daje mi przykład pokory. Pycha odwraca\n" +
            "ludzi od Boga i oddaje w moc szatana, pokora przywraca utraconą wielkość i\n" +
            "wywyższa.\n" +
            "O Jezu, wyśmiany i upokorzony, naucz mnie pokory serca i skromnego o sobie\n" +
            "mniemania, przykładem swoim nawróć nieprzyjaciół Kościoła świętego."
        },
        {
          id: 14,
          text: "Droga Krzyżowa",
          bible: "Jezus sam dźwigając krzyż, wyszedł na miejsce zwane Miejscem Czaszki, które\n" +
            "po hebrajsku nazywa się Golgota” (por. J 19,17)",
          reflection: "„Jezus sam dźwigając krzyż, wyszedł na miejsce zwane Miejscem Czaszki, które\n" +
            "po hebrajsku nazywa się Golgota” (por. J 19,17). Stroma, kamienista i ciężka była\n" +
            "droga na Kalwarię, ta udeptana nogami ludzkimi i ta wyciśnięta w Sercu\n" +
            "Jezusowym. Ciężki był krzyż na ramionach Boga-Człowieka, lecz o wiele cięższy\n" +
            "ten, który dźwigał w swojej duszy. Zarówno droga, jak i krzyż zwiastują\n" +
            "wybawienie ludzkości z niewoli grzechu.\n" +
            "Jezus Chrystus za moje grzechy dźwiga krzyż, za moje grzechy upada pod jego\n" +
            "ciężarem. Dźwiga również ciężar grzechów całego świata, wszystkich pokoleń.\n" +
            "O Jezu, dźwigający krzyż na Kalwarię i upadający pod jego ciężarem, podźwignij\n" +
            "mnie i wszystkich grzeszników,"
        },
        {
          id: 15,
          text: "Śmierć na Krzyżu",
          bible: "Jezus zawołał donośnym głosem: «Ojcze, w Twoje ręce powierzam ducha\n" +
            "mojego». Po tych słowach wyzionął ducha” (Łk 23,46)",
          reflection: "„Jezus zawołał donośnym głosem: «Ojcze, w Twoje ręce powierzam ducha\n" +
            "mojego». Po tych słowach wyzionął ducha” (Łk 23,46). Od godziny szóstej aż do\n" +
            "godziny dziewiątej konał na krzyżu Bóg-Człowiek. Pełne trzy godziny. Konał,\n" +
            "przelewał krew i modlił się. Umarł z bezmiaru miłości za grzechy świata.\n" +
            "Jezus Chrystus „umiłował mnie i za mnie wydał siebie samego” (por. Ef 5,2; 1 Tm\n" +
            "2,6) na śmierć krzyżową. Umiłował moich rodziców, braci i siostry. Umiłował\n" +
            "wszystkich ludzi i za wszystkich umarł na krzyżu.\n" +
            "O Jezu, któryś dla mojego zbawienia konał i umarł na krzyżu, dzięki Ci za Twoją\n" +
            "miłość bez granic. W ręce Twoje składam moje życie i godzinę mojej śmierci dla\n" +
            "zbawienia wszystkich konających."
        },
        {
          id: 16,
          text: "Zmartwychwstanie",
          bible: "Nie ma Go tu; zmartwychwstał\" (Łk 24,6)",
          reflection: "„Nie ma Go tu; zmartwychwstał\" (Łk 24,6). Śmierć stała się bramą do nowego\n" +
            "życia, do chwały nieśmiertelnej. Jezus umarł i zmartwychwstał dla zbawienia\n" +
            "całego ludu Bożego. Swoim zmartwychwstaniem zwyciężył na zawsze śmierć,\n" +
            "grzech i szatana.\n" +
            "Jezus Chrystus jest „moim zmartwychwstaniem i życiem” (por. J 11,25). Przez\n" +
            "chrzest, łaskę uświęcającą i wiarę już udzielił mi życia nieśmiertelnego, do\n" +
            "którego wezwani są wszyscy ludzie.\n" +
            "O Jezu zmartwychwstały, wyzwól mnie z grobu moich grzechów i utwierdź w\n" +
            "Twojej przyjaźni. Wyzwól tych, którzy dotąd „w mroku i cieniu śmierci mieszkają”\n" +
            "(Łk 1,79)."
        },
        {
          id: 17,
          text: "Wniebowstąpienie",
          bible: "Wstępuję do Ojca mego i Ojca waszego oraz do Boga mego i Boga waszego” (J\n" +
            "20,17)",
          reflection: "„Wstępuję do Ojca mego i Ojca waszego oraz do Boga mego i Boga waszego” (J\n" +
            "20,17). Odkupienie rodzaju ludzkiego przypieczętowane zostało śmiercią i\n" +
            "zmartwychwstaniem raz na zawsze i w sposób nieodwołalny. Jezus wstępuje do\n" +
            "nieba po należną nagrodę z rąk swego Ojca; wstępuje jako Król chwały.\n" +
            "Jezus Chrystus dzieli się ze mną swoją chwałą. Udzielając nowego życia, i mnie\n" +
            "chce doprowadzić przed oblicze swego Ojca, gdzie przygotował miejsce\n" +
            "wszystkim wybranym.\n" +
            "O Jezu wstępujący do nieba, wejrzyj na moje ziemskie życie, naznaczone jeszcze\n" +
            "cierpieniem, walką z grzechem i nadzieją zwycięstwa. Naucz mnie i moich braci\n" +
            "„szukać tego, co w górze, gdzie Ty zasiadasz po prawicy Ojca” (por. Kol 3,1)."
        },
        {
          id: 18,
          text: "Zesłanie Ducha Świętego",
          bible: "Przyjdzie Pocieszyciel, którego Ja wam poślę od Ojca, Duch Prawdy” (J 15,26)",
          reflection: "„Przyjdzie Pocieszyciel, którego Ja wam poślę od Ojca, Duch Prawdy” (J 15,26).\n" +
            "Duch Święty jest Duchem Jezusowym, jest Miłością Ojca i Syna. Dzieło\n" +
            "odkupienia, dokonane przez Jezusa na świecie i złożone w sercu ludu Bożego, w\n" +
            "sposób niewidzialny prowadzi dalej Duch Święty i prowadzić będzie do końca\n" +
            "świata: będzie pouczał, przebaczał, oczyszczał, uświęcał, umacniał i prowadził.\n" +
            "Jezus Chrystus mnie także udzielił Ducha swego przez chrzest i bierzmowanie.\n" +
            "Przebywa On w mojej duszy, która jest Jego świątynią (por. 1 Kor 3,16) i jednoczy\n" +
            "mnie z całym ludem Bożym.\n" +
            "O Jezu, który ustawicznie zsyłasz Ducha Świętego na cały lud Boży, uczyń moje\n" +
            "serce podatnym na Jego działanie i zdolnym do świadczenia o Tobie przed\n" +
            "ludźmi."
        },
        {
          id: 19,
          text: "Wniebowzięcie Matki Bożej",
          bible: "Ojcze, chcę, aby także ci, których Mi dałeś, byli ze Mną tam, gdzie Ja jestem, aby\n" +
            "widzieli chwałę moją, którą Mi dałeś” (J 17,24)",
          reflection: "„Ojcze, chcę, aby także ci, których Mi dałeś, byli ze Mną tam, gdzie Ja jestem, aby\n" +
            "widzieli chwałę moją, którą Mi dałeś” (J 17,24). Jezus odkupił Maryję przed\n" +
            "wszystkimi ludźmi. Dla swych przyszłych zasług wybrał Ją, zachował od grzechu i\n" +
            "napełnił łaską. Za to, że Go z Ducha Świętego poczęła, że Mu dała ludzkie ciało, że\n" +
            "Go karmiła i wychowała, za bezmiar Jej matczynej miłości i ofiary – przyjmuje Ją\n" +
            "wśród radości do chwały niebieskiej. Dzieli się z Nią swoją chwałą.\n" +
            "Jezus Chrystus w swojej Matce i mnie umiłował, i mnie jak swoją Matkę powołuje\n" +
            "do chwały niebieskiej, która jest wspólnym dziedzictwem wszystkich wybranych.\n" +
            "O Jezu, któryś swoją Matkę przyjął do chwały niebieskiej, podaj życzliwą dłoń\n" +
            "wszystkim Jej dzieciom pielgrzymującym do domu Ojca, zwłaszcza dzieciom\n" +
            "błądzącym i zrozpaczonym."
        },
        {
          id: 20,
          text: "Ukoronowanie Matki Bożej w niebie",
          bible: "Ja przekazuję wam królestwo, jak Mnie przekazał je mój Ojciec\" (Łk 22,29)",
          reflection: "„Ja przekazuję wam królestwo, jak Mnie przekazał je mój Ojciec\" (Łk 22,29).\n" +
            "Dobroć Jezusa nie ma granic. Jego prawdomówność i wierność obficie wypełniają\n" +
            "dane obietnice. Maryja była „uboga w duchu”, więc pierwsza otrzymała\n" +
            "królestwo niebieskie (por. Mt 5,3). Słuszną i sprawiedliwą jest rzeczą, aby\n" +
            "„służebnica Pańska” (por. Łk 1,38) stała się Królową wszechświata.\n" +
            "Jezus Chrystus i dla mnie „przygotował mieszkanie w domu Ojca swego” (por. J\n" +
            "14,2). I mnie wezwał na wieczną ucztę Baranka (por. Ap 19,9), gdzie wybrani\n" +
            "oglądać będą Boga twarzą w twarz (por. 1 Kor 13,12).\n" +
            "O Jezu, Tyś „Królem królów i Panem panujących” (por. Ap 19,16), doprowadź\n" +
            "mnie szczęśliwie do swego królestwa, w którym z Maryją i wszystkimi wybranymi\n" +
            "uwielbiać będziemy chwałę Trójcy Świętej."
        },
      ],
      genders: [
        {
          id: 1,
          text: "Kobieta"
        },
        {
          id: 2,
          text: "Mężczyzna"
        },
      ],
    }
  }
}

export default settingsVariablesMixins;
