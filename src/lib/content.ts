import {
  ArrowRight,
  BadgeCheck,
  Brain,
  Building2,
  CheckCircle2,
  CircleDot,
  Compass,
  Eye,
  Hand,
  MessageSquare,
  Move3D,
  ShieldCheck,
  Sparkles,
  Users,
  Zap
} from "lucide-react";

export const navItems = [
  { label: "Personal Performance", href: "/personal-performance" },
  { label: "Executive", href: "/executive" },
  { label: "For Organizations", href: "/organizations" },
  { label: "Metodyka", href: "/method" },
  { label: "Kontakt", href: "#kontakt" }
];

export const pathCards = [
  {
    title: "Resilium Personal Performance",
    headline: "Dla osób, które chcą lepiej działać pod presją.",
    text: "Praktyczny trening osobistej stabilności, granic, decyzji i reakcji w codziennych wymagających sytuacjach.",
    bullets: ["stabilność osobista", "granice i komunikacja", "decyzje w obciążeniu", "powrót do spokoju"],
    cta: "Chcę działać lepiej pod presją",
    href: "/personal-performance"
  },
  {
    title: "Resilium Executive",
    headline: "Dla liderów, którzy podejmują decyzje w niepewności.",
    text: "Indywidualna praca dla właścicieli firm, CEO i menedżerów, skoncentrowana na osądzie, autorytecie, komunikacji i decyzyjności pod presją.",
    bullets: ["osobiste protokoły", "komunikacja kryzysowa", "autorytet bez agresji", "decyzje pod presją"],
    cta: "Chcę konsultację Executive",
    href: "/executive"
  },
  {
    title: "Resilium for Organizations",
    headline: "Dla firm, instytucji i zespołów.",
    text: "System praktycznego przygotowania ludzi i zespołów do presji, konfliktu, komunikacji kryzysowej i sytuacji ryzyka.",
    bullets: ["pewniejsi pracownicy", "mniej chaosu przy eskalacji", "koordynacja zespołu", "scenariusze z praktyki"],
    cta: "Chcę przygotować zespół",
    href: "/organizations"
  }
];

export const coreSteps = [
  {
    title: "Ciało",
    text: "Stabilizacja oddechu, postawy, napięcia i pierwszej reakcji.",
    icon: Zap
  },
  {
    title: "Uwaga",
    text: "Powrót do orientacji w sobie, ludziach, przestrzeni i ryzyku.",
    icon: Eye
  },
  {
    title: "Decyzja",
    text: "Prosty sposób wyboru kolejnego kroku.",
    icon: Compass
  },
  {
    title: "Działanie",
    text: "Komunikacja, granice, ruch, zakończenie kontaktu albo prowadzenie zespołu.",
    icon: ArrowRight
  }
];

export const readinessLayers = [
  {
    title: "Przygotowanie mentalne",
    text: "Stres, niepewność, przeciążenie, decyzje pod presją.",
    icon: Brain
  },
  {
    title: "Przygotowanie komunikacyjne",
    text: "Konflikt, nacisk, deeskalacja, granice i komunikacja kryzysowa.",
    icon: MessageSquare
  },
  {
    title: "Przygotowanie fizyczne i przestrzenne",
    text: "Postawa, dystans, przestrzeń osobista, bezpieczne wycofanie i reakcja na zbliżenie.",
    icon: Move3D
  },
  {
    title: "Przygotowanie zespołowe i liderskie",
    text: "Role, koordynacja, prowadzenie ludzi i decyzje w wymagających sytuacjach.",
    icon: Users
  }
];

export const credibilityBullets = [
  "bezpieczeństwo osobiste",
  "odporność psychofizyczna",
  "komunikacja kryzysowa",
  "decyzje pod presją",
  "praca z osobami indywidualnymi, zespołami i organizacjami"
];

export const personalBenefits = [
  {
    title: "Stabilność w pierwszych sekundach",
    text: "Nauczysz się pracować z oddechem, postawą i uwagą w chwili, gdy presja zaczyna rosnąć."
  },
  {
    title: "Jaśniejsze granice",
    text: "Zyskasz większą pewność tego, co jest dla Ciebie akceptowalne, jak to powiedzieć i jak zgodnie z tym działać."
  },
  {
    title: "Lepsze decyzje",
    text: "Stworzysz prosty punkt odniesienia dla sytuacji, w których głowa jest przeciążona, a emocje naciskają na szybką reakcję."
  },
  {
    title: "Spokojniejsza komunikacja",
    text: "Będziesz lepiej panować nad głosem, słowami i reakcją w napiętych rozmowach."
  },
  {
    title: "Większe zaufanie do siebie",
    text: "Pewność siebie rośnie z doświadczenia, że potrafisz działać także wtedy, gdy nie jest wygodnie."
  },
  {
    title: "Przeniesienie do życia",
    text: "Zasady wykorzystasz w pracy, relacjach, konfliktach i codziennym podejmowaniu decyzji."
  }
];

export const personalAudience = [
  "dla osób pod długotrwałą presją",
  "dla tych, którzy chcą większej pewności siebie",
  "dla osób szukających rozwoju osobistego bez pustych haseł",
  "dla tych, którzy chcą lepiej komunikować granice",
  "dla osób, które chcą spokojniej radzić sobie z konfliktami",
  "dla tych, którzy chcą działać lepiej w pracy i życiu osobistym"
];

export const personalFormats = [
  {
    title: "Warsztat wprowadzający",
    text: "Krótki wstęp do zasad Resilium, pracy z pierwszą reakcją i podstawowym protokołem działania pod presją."
  },
  {
    title: "Trening jednodniowy",
    text: "Praktyczny dzień skoncentrowany na ciele, uwadze, granicach, komunikacji i działaniu."
  },
  {
    title: "Cykl kontynuacyjny",
    text: "Głębsza praca dla osób, które chcą przenieść zasady Resilium do codziennego życia."
  }
];

export const executiveAudience = [
  {
    title: "Właściciele firm",
    text: "Dla sytuacji, w których decyzji nie da się po prostu delegować, a presja zostaje po Twojej stronie."
  },
  {
    title: "CEO i członkowie zarządu",
    text: "Dla prowadzenia firmy w niepewności, zmianie, konflikcie albo okresie wysokiej presji wynikowej."
  },
  {
    title: "Top menedżerowie",
    text: "Dla liderów, którzy muszą utrzymać skuteczność zespołu i jednocześnie radzić sobie z presją z góry i z dołu."
  },
  {
    title: "Założyciele i przedsiębiorcy",
    text: "Dla osób, które budują firmę własną energią i potrzebują chronić swoje zasoby, osąd i decyzyjność."
  }
];

export const executiveUseCases = [
  ["trudne negocjacje biznesowe", "Przygotowanie reakcji, komunikatu i granic przed rozmową o dużej stawce."],
  ["konflikt z kluczową osobą", "Praca nad spokojną stanowczością, językiem i kolejnością działań."],
  ["decyzja kryzysowa", "Odróżnienie sygnału od szumu i wybór następnego kroku pod presją czasu."],
  ["zmiana w firmie", "Utrzymanie struktury komunikacji, gdy pojawia się niepewność i opór."],
  ["przeciążenie odpowiedzialnością", "Ochrona zasobów, orientacji i zdolności prowadzenia ludzi."],
  ["prowadzenie pod presją", "Stabilny głos, jasne decyzje i obecność lidera w trudnym momencie."],
  ["ryzyko reputacyjne", "Komunikacja kryzysowa bez paniki, reaktywności i niepotrzebnej eskalacji."],
  ["osobista skuteczność w obciążeniu", "Praktyczne protokoły dla sytuacji, które regularnie zabierają energię."]
];

export const executiveTraining = [
  {
    title: "Stabilizacja pod presją",
    text: "Pierwsza reakcja, oddech, postawa, głos i powrót do orientacji."
  },
  {
    title: "Protokoły decyzyjne",
    text: "Proste sposoby wyboru kolejnego kroku w niepewności."
  },
  {
    title: "Komunikacja kryzysowa",
    text: "Jasna komunikacja w chwili, gdy druga strona naciska albo sytuacja eskaluje."
  },
  {
    title: "Granice i autorytet",
    text: "Spokojna stanowczość bez zbędnej agresji."
  },
  {
    title: "Przygotowanie do konkretnych sytuacji",
    text: "Sytuacje modelowe oparte na realnych decyzjach, rozmowach i konfliktach."
  }
];

export const executiveFormats = [
  {
    title: "Executive Consultation",
    meta: "90-120 minut",
    text: "Dyskretna konsultacja dotycząca konkretnej decyzji, konfliktu albo wymagającej sytuacji."
  },
  {
    title: "Executive Protocol",
    meta: "4-6 spotkań indywidualnych",
    text: "Program tworzenia osobistych protokołów dla presji, komunikacji, granic i podejmowania decyzji."
  },
  {
    title: "Executive Intensive",
    meta: "Pół dnia albo cały dzień",
    text: "Intensywna praca dla właściciela, CEO albo dwóch kluczowych osób w zarządzie."
  },
  {
    title: "Leadership Simulation",
    meta: "Sytuacje modelowe",
    text: "Symulacje trudnych rozmów, momentów decyzyjnych i komunikacji kryzysowej."
  }
];

export const organizationImpact = [
  ["kontakt z klientami i opinią publiczną", "Więcej spokoju, jasnych granic i profesjonalnej reakcji w bezpośrednim kontakcie."],
  ["konfliktowi klienci", "Pracownicy trenują deeskalację, zakończenie kontaktu i wezwanie wsparcia."],
  ["środowiska podwyższonego ryzyka", "Lepsza orientacja w przestrzeni, dystansie, sygnałach ostrzegawczych i czasie reakcji."],
  ["szkoły i instytucje", "Praktyczne przygotowanie do presji społecznej, emocji i kontaktu z wymagającymi osobami."],
  ["zespoły pod presją", "Wspólny język, role i sygnały ograniczają chaos w sytuacji obciążenia."],
  ["management i role kryzysowe", "Liderzy uczą się prowadzić komunikację i decyzje, gdy rośnie napięcie."]
];

export const organizationBenefits = [
  {
    title: "Pewniejszych pracowników",
    text: "Ludzie zyskują prosty sposób pierwszej reakcji w napiętej sytuacji."
  },
  {
    title: "Mniej chaosu przy eskalacji",
    text: "Zespół wie, jak komunikować się, kiedy zakończyć kontakt i kiedy wezwać wsparcie."
  },
  {
    title: "Lepszą pracę z konfliktem",
    text: "Uczestnicy trenują spokojną, stanowczą i profesjonalną komunikację."
  },
  {
    title: "Koordynację zespołu",
    text: "Role, sygnały i wspólny sposób działania pomagają utrzymać strukturę w obciążeniu."
  },
  {
    title: "Konkretne protokoły",
    text: "Efektem nie są wrażenia, ale użyteczne sposoby działania w realnych sytuacjach."
  },
  {
    title: "Przygotowanie na sytuacje ryzyka",
    text: "Trening łączy stres, komunikację, przestrzeń, granice i bezpieczne działanie."
  }
];

export const organizationPrograms = [
  {
    title: "START - Foundations",
    subtitle: "Podstawowe przygotowanie pod presją",
    text: "Dla pracowników i zespołów, które potrzebują prostego sposobu działania w stresie, konflikcie, pracy z granicami i profesjonalnej reakcji."
  },
  {
    title: "ADVANCED - In Action",
    subtitle: "Sytuacje konfliktowe i reakcja zespołu",
    text: "Scenariusze modelowe z realnego środowiska klienta, wsparcie zespołowe, role, sygnały i reakcja na eskalację."
  },
  {
    title: "PRO - Leadership Under Pressure",
    subtitle: "Prowadzenie ludzi w presji, konflikcie i niepewności",
    text: "Dla menedżerów, liderów zespołów i kluczowych osób, które muszą utrzymać strukturę i decyzje, gdy presja rośnie."
  },
  {
    title: "OMEGA - High-Risk Protocols",
    subtitle: "Specjalistyczne scenariusze bezpieczeństwa",
    text: "Dla organizacji z wyższą ekspozycją na ryzyko. Praca ze scenariuszami kryzysowymi, przestrzenią, ewakuacją, ukryciem i koordynacją."
  }
];

export const cooperationSteps = [
  ["Konsultacja wstępna", "Określamy środowisko, role, sytuacje ryzyka i cele."],
  ["Wybór scenariuszy", "Przygotowujemy sytuacje modelowe zgodnie z realnością klienta."],
  ["Praktyczny trening", "Uczestnicy ćwiczą reakcje w bezpiecznie prowadzonej presji."],
  ["Refleksja", "Nazywamy, co zadziałało, co zawiodło i co trzeba poprawić."],
  ["Rekomendacje dla praktyki", "Efektem są konkretne zasady i rekomendacje do codziennego użycia."]
];

export const organizationAudience = [
  "firmy produkcyjne",
  "usługi i handel",
  "recepcje i front-office",
  "obsługa klienta",
  "szkoły",
  "urzędy",
  "ochrona zdrowia",
  "usługi społeczne",
  "management",
  "role bezpieczeństwa i kryzysowe"
];

export const icons = {
  BadgeCheck,
  Building2,
  CheckCircle2,
  CircleDot,
  Hand,
  ShieldCheck,
  Sparkles
};
