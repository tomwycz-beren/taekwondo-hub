

export const newsItems = [
  {
    id: 1,
    slug: "Warszawska Olimpiada Młodzieży",
    date: "2026-02-19",
    title: "Warszawska Olimpiada Młodzieży",
    summary: "01.03.2026 - Warszawska Olimpiada Młodzieży - AWF WARSZAWA",
    tag: "Zawody",
    content: `Regionalne Mistrzostwa Taekwondo wracają i będą większe niż kiedykolwiek! Tegoroczne zawody odbędą się **15 marca** w Miejskiej Hali Sportowej, z podziałem na wszystkie stopnie od białego do czarnego pasa.

**Czego się spodziewać:**
- Indywidualne poomsae (układy formalne)
- Walki sparingowe w kategoriach wagowych
- Pokaz poomsae drużynowego
- Specjalne pokazy naszej kadry zawodniczej

Rejestracja jest otwarta dla wszystkich aktywnych członków klubu. Opłata startowa wynosi 150 zł za konkurencję, z pakietem za 250 zł za dwie konkurencje. Termin rejestracji upływa **1 marca**.

Nasz sztab trenerski będzie prowadził dodatkowe sesje przygotowawcze w każdy czwartek przed zawodami. Koniecznie weź udział, jeśli planujesz startować!`,
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 2,
    slug: "ceremonia-promocji-pasow",
    date: "2026-02-05",
    title: "Ceremonia promocji pasów",
    summary: "Gratulacje dla 12 uczniów, którzy zdobyli kolejny stopień w ostatni weekend!",
    tag: "Osiągnięcia",
    content: `Z dumą ogłaszamy, że **12 uczniów** pomyślnie zdało egzaminy na kolejny pas w ostatni weekend! Komisji egzaminacyjnej przewodniczył Mistrz Park Jin-ho z gościnnym egzaminatorem Mistrzem Yoon z Krajowego Związku Taekwondo.

**Przyznane promocje:**
- 3 uczniów awansowało na żółty pas
- 4 uczniów awansowało na zielony pas
- 2 uczniów awansowało na niebieski pas
- 2 uczniów awansowało na czerwony pas
- 1 uczeń awansował na 1 Dan czarnego pasa — gratulacje dla Jakuba Kowalskiego!

Każdy uczeń wykazał się doskonałą techniką, znajomością wymaganych poomsae oraz silnymi umiejętnościami sparingowymi. Ceremonia zakończyła się wspólnym zdjęciem i poczęstunkiem.

Następny egzamin na pas zaplanowany jest na **5 kwietnia**. Porozmawiaj ze swoim trenerem o wymaganiach kwalifikacyjnych.`,
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 3,
    slug: "nowe-zajecia-dla-dzieci",
    date: "2026-01-28",
    title: "Nowe zajęcia dla dzieci",
    summary: "Nowe zajęcia dla początkujących w wieku 5-8 lat w każdą sobotę o 10:00. Pierwsza lekcja gratis!",
    tag: "Zajęcia",
    content: `Z radością ogłaszamy uruchomienie nowych **zajęć dla początkujących dzieci** w wieku 5–8 lat! Zajęcia odbywają się w każdą sobotę o 10:00 w Sali Głównej i prowadzone są przez trenerkę Marię Santos.

**Program obejmuje:**
- Podstawowe postawy i ruchy taekwondo
- Rozciąganie i ćwiczenia dostosowane do wieku
- Zabawy rozwijające koordynację i dyscyplinę
- Wprowadzenie do etykiety taekwondo i terminologii koreańskiej

Pierwsza sesja jest **całkowicie bezpłatna** — wystarczy wygodny strój i butelka wody. Po lekcji próbnej miesięczna składka dla dzieci wynosi 250 zł.

Taekwondo to fantastyczny sposób dla małych dzieci na budowanie pewności siebie, naukę samodyscypliny i aktywności fizycznej. Nasz program dla dzieci kładzie nacisk na szacunek, koncentrację i zabawę podczas nauki umiejętności na całe życie.

Skontaktuj się z nami, aby zarezerwować miejsce — liczba miejsc ograniczona do 15 uczniów na zajęcia, aby zapewnić indywidualne podejście.`,
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 4,
    slug: "podsumowanie-obozu-zimowego",
    date: "2026-01-20",
    title: "Podsumowanie obozu zimowego",
    summary: "Nasz 3-dniowy intensywny obóz treningowy zakończył się wielkim sukcesem z ponad 40 uczestnikami.",
    tag: "Wydarzenie",
    content: `Nasz coroczny **Zimowy Obóz Treningowy** odbył się w długi weekend i zakończył się ogromnym sukcesem, z ponad 40 uczestnikami z naszego klubu i trzech zaprzyjaźnionych klubów.

**Najważniejsze momenty obozu:**
- Dzień 1: Kurs mistrzowski z Mistrzem Parkiem — skupienie na doskonaleniu podstawowych kopnięć i bloków
- Dzień 2: Zaawansowany warsztat sparingowy i symulacja rund turniejowych
- Dzień 3: Intensywne poomsae i zabawowy tor przeszkód integracyjny

Gościnny instruktor **Mistrz Lee Sang-hyun** (5 Dan) z Seulu dołączył do nas na specjalnym seminarium samoobrony, które cieszyło się ogromnym zainteresowaniem uczestników na wszystkich poziomach.

Obóz zakończył się ceremonią wręczenia nagród w kategoriach: Największy Postęp, Najlepsza Postawa i Najlepszy Zawodnik w każdej grupie wiekowej. Dziękujemy wszystkim trenerom, wolontariuszom i rodzinom, które umożliwiły to wydarzenie.

Śledźcie informacje o **Wiosennym Obozie Treningowym** w kwietniu!`,
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
];

export const schedule = [
  { day: "Poniedziałek", time: "16:45 – 17:30", class: "Dzieci (5–8)", level: "Początkujący", location: "Hala Sportowa Ciechanów" },
  { day: "Poniedziałek", time: "17:30 – 18:30", class: "Młodzicy (9–11)", level: "Średniozaawansowani", location: "Hala Sportowa Ciechanów" },
  { day: "Poniedziałek", time: "18:30 – 20:00", class: "Młodzież/zawodnicy", level: "Zaawansowany", location: "Hala Sportowa Ciechanów" },
  { day: "Poniedziałek", time: "20:00 – 21:30", class: "Senior", level: "Wszystkie poziomy", location: "Hala Sportowa Ciechanów" },
  { day: "Wtorek", time: "17:00 – 18:30", class: "Młodzież/zawodnicy", level: "Zaawansowany", location: "Hala Sportowa Ciechanów" },
  { day: "Środa", time: "16:45 – 17:30", class: "Dzieci (5–8)", level: "Początkujący", location: "Hala Sportowa Ciechanów" },
  { day: "Środa", time: "17:30 – 18:30", class: "Młodzicy (9–11)", level: "Średniozaawansowani", location: "Hala Sportowa Ciechanów" },
  { day: "Środa", time: "18:30 – 20:00", class: "Młodzież/zawodnicy", level: "Zaawansowany", location: "Hala Sportowa Ciechanów" },
  { day: "Środa", time: "20:00 – 21:30", class: "Senior", level: "Wszystkie poziomy", location: "Hala Sportowa Ciechanów" },
  { day: "Czwartek", time: "17:00 – 18:30", class: "Młodzież/zawodnicy", level: "Zaawansowany", location: "Hala Sportowa Ciechanów" },
  { day: "Piątek", time: "17:00 – 18:30", class: "Młodzież/zawodnicy", level: "Zaawansowany", location: "Hala Sportowa Ciechanów" }
];

export const coaches = [
  {
    name: "Paweł Nałęcz",
    role: "Główny trener",
    belt: "4 Dan",
    bio: "",
    image: "/placeholder.svg",
  },
  {
    name: "Alicja Laskowska",
    role: "Trener",
    belt: "3 Dan",
    bio: "Alicja w krainie pacek",
    image: "assets/Alicja_Laskowska.jpg",
  },
  {
    name: "Wiktor",
    role: "Trener",
    belt: "1 Dan czarny pas",
    bio: "",
    image: "/placeholder.svg",
  },
  {
    name: "Damian",
    role: "Trener",
    belt: "2 Dan  ",
    bio: "Prowadzi zajęcia w sekcji Opinogóra.",
    image: "{Alicja_Laskowska}",
  },
];

export const achievements = [
  { year: "2025", event: "Mistrzostwa Krajowe", result: "3 złote, 2 srebrne, 4 brązowe" },
  { year: "2025", event: "Regionalny Puchar Poomsae", result: "Złoto drużynowe" },
  { year: "2024", event: "Mistrzostwa Wojewódzkie", result: "5 złotych, 3 srebrne" },
  { year: "2024", event: "Turniej Międzynarodowy", result: "1 złoty, 1 brązowy" },
  { year: "2023", event: "Mistrzostwa Krajowe", result: "2 złote, 4 srebrne, 3 brązowe" },
  { year: "2023", event: "Turniej Miejski", result: "Drużynowi mistrzowie" },
];

export const upcomingEvents = [
  {
    id: 1,
    date: "2026-03-15",
    title: "Regionalne Mistrzostwa Taekwondo",
    location: "Miejska Hala Sportowa",
    description: "Zapraszamy wszystkie stopnie. Rejestracja do 1 marca.",
    type: "Zawody",
  },
  {
    id: 2,
    date: "2026-04-05",
    title: "Egzamin na pas",
    location: "Sala Główna",
    description: "Kwartalny egzamin dla uprawnionych uczniów.",
    type: "Egzamin",
  },
  {
    id: 3,
    date: "2026-04-18",
    title: "Wiosenny obóz treningowy",
    location: "Sala Główna i Sala treningowa B",
    description: "Intensywny 2-dniowy obóz skupiony na poomsae i sparingu.",
    type: "Obóz",
  },
  {
    id: 4,
    date: "2026-05-10",
    title: "Otwarte Mistrzostwa Krajowe",
    location: "Narodowe Centrum Sportu",
    description: "Nasza kadra zawodnicza reprezentuje klub na szczeblu krajowym.",
    type: "Zawody",
  },
];

export const galleryImages = [
  { src: "assets/Karolina.jpg", alt: "Karolina w Reprezentacji Kraju", caption: "Karolina w Reprezentacji Kraju" },
  { src: "/placeholder.svg", alt: "Zawody", caption: "Mistrzostwa Regionalne 2025" },
  { src: "/placeholder.svg", alt: "Ceremonia pasów", caption: "Ceremonia promocji pasów" },
  { src: "/placeholder.svg", alt: "Zdjęcie drużynowe", caption: "Zdjęcie drużynowe po zawodach" },
  { src: "/placeholder.svg", alt: "Zajęcia dla dzieci", caption: "Zajęcia dla dzieci w akcji" },
  { src: "/placeholder.svg", alt: "Sparing", caption: "Trening sparingowy" },
  { src: "/placeholder.svg", alt: "Poomsae", caption: "Pokaz poomsae" },
  { src: "/placeholder.svg", alt: "Nagrody", caption: "Ceremonia wręczenia nagród" },
];
