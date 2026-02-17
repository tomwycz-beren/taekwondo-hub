export const newsItems = [
  {
    id: 1,
    date: "2026-02-10",
    title: "Spring Competition Registration Open",
    summary: "Sign up now for the Regional Taekwondo Championship on March 15. All belt levels welcome!",
    tag: "Competition",
  },
  {
    id: 2,
    date: "2026-02-05",
    title: "Belt Promotion Ceremony",
    summary: "Congratulations to 12 students who earned their next belt rank last weekend!",
    tag: "Achievement",
  },
  {
    id: 3,
    date: "2026-01-28",
    title: "New Kids Class Starting",
    summary: "A new beginners class for ages 5-8 starts every Saturday at 10 AM. First session free!",
    tag: "Classes",
  },
  {
    id: 4,
    date: "2026-01-20",
    title: "Winter Camp Recap",
    summary: "Our 3-day intensive training camp was a huge success with 40+ participants.",
    tag: "Event",
  },
];

export const schedule = [
  { day: "Monday", time: "16:00 – 17:00", class: "Kids (5–8)", level: "All Levels", location: "Main Hall" },
  { day: "Monday", time: "17:30 – 19:00", class: "Juniors (9–14)", level: "All Levels", location: "Main Hall" },
  { day: "Monday", time: "19:30 – 21:00", class: "Adults", level: "Beginners", location: "Main Hall" },
  { day: "Wednesday", time: "16:00 – 17:00", class: "Kids (5–8)", level: "All Levels", location: "Main Hall" },
  { day: "Wednesday", time: "17:30 – 19:00", class: "Juniors (9–14)", level: "All Levels", location: "Main Hall" },
  { day: "Wednesday", time: "19:30 – 21:00", class: "Adults", level: "Advanced", location: "Main Hall" },
  { day: "Thursday", time: "18:00 – 19:30", class: "Competition Team", level: "Advanced", location: "Training Room B" },
  { day: "Friday", time: "16:00 – 17:00", class: "Kids (5–8)", level: "All Levels", location: "Main Hall" },
  { day: "Friday", time: "17:30 – 19:00", class: "Juniors (9–14)", level: "All Levels", location: "Main Hall" },
  { day: "Friday", time: "19:30 – 21:00", class: "Adults", level: "All Levels", location: "Main Hall" },
  { day: "Saturday", time: "10:00 – 11:30", class: "Open Training", level: "All Levels", location: "Main Hall" },
  { day: "Saturday", time: "12:00 – 13:30", class: "Poomsae Practice", level: "Intermediate+", location: "Training Room B" },
];

export const coaches = [
  {
    name: "Master Park Jin-ho",
    role: "Head Coach",
    belt: "6th Dan Black Belt",
    bio: "Over 25 years of experience in Taekwondo instruction. Former national team member and multiple-time championship medalist.",
    image: "/placeholder.svg",
  },
  {
    name: "Sarah Kim",
    role: "Assistant Coach",
    belt: "4th Dan Black Belt",
    bio: "Specializes in poomsae and youth instruction. Certified World Taekwondo referee with 10+ years coaching experience.",
    image: "/placeholder.svg",
  },
  {
    name: "David Lee",
    role: "Competition Coach",
    belt: "3rd Dan Black Belt",
    bio: "Focuses on sparring technique and competition preparation. Led our team to 15 regional medals last season.",
    image: "/placeholder.svg",
  },
  {
    name: "Maria Santos",
    role: "Kids Program Coach",
    belt: "2nd Dan Black Belt",
    bio: "Passionate about introducing young students to martial arts. Combines fun activities with fundamental Taekwondo training.",
    image: "/placeholder.svg",
  },
];

export const achievements = [
  { year: "2025", event: "National Championship", result: "3 Gold, 2 Silver, 4 Bronze" },
  { year: "2025", event: "Regional Poomsae Cup", result: "Team Gold" },
  { year: "2024", event: "State Championship", result: "5 Gold, 3 Silver" },
  { year: "2024", event: "International Open", result: "1 Gold, 1 Bronze" },
  { year: "2023", event: "National Championship", result: "2 Gold, 4 Silver, 3 Bronze" },
  { year: "2023", event: "City Tournament", result: "Overall Team Champions" },
];

export const upcomingEvents = [
  {
    id: 1,
    date: "2026-03-15",
    title: "Regional Taekwondo Championship",
    location: "City Sports Arena",
    description: "All belt levels welcome. Registration closes March 1.",
    type: "Competition",
  },
  {
    id: 2,
    date: "2026-04-05",
    title: "Belt Promotion Test",
    location: "Main Hall",
    description: "Quarterly belt grading for eligible students.",
    type: "Grading",
  },
  {
    id: 3,
    date: "2026-04-18",
    title: "Spring Training Camp",
    location: "Main Hall & Training Room B",
    description: "Intensive 2-day camp focusing on poomsae and sparring.",
    type: "Camp",
  },
  {
    id: 4,
    date: "2026-05-10",
    title: "National Open Championship",
    location: "National Sports Center",
    description: "Our competition team represents at the national level.",
    type: "Competition",
  },
];

export const galleryImages = [
  { src: "/placeholder.svg", alt: "Training session", caption: "Daily training session" },
  { src: "/placeholder.svg", alt: "Competition", caption: "Regional Championship 2025" },
  { src: "/placeholder.svg", alt: "Belt ceremony", caption: "Belt promotion ceremony" },
  { src: "/placeholder.svg", alt: "Team photo", caption: "Team photo after competition" },
  { src: "/placeholder.svg", alt: "Kids class", caption: "Kids class in action" },
  { src: "/placeholder.svg", alt: "Sparring", caption: "Sparring practice" },
  { src: "/placeholder.svg", alt: "Poomsae", caption: "Poomsae demonstration" },
  { src: "/placeholder.svg", alt: "Awards", caption: "Award ceremony" },
];
