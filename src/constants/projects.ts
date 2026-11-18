import {
  abc,
  banistmo,
  disneynow,
  ejecutapp,
  ejecutappMobile,
  ejecutappMobileScreen1,
  ejecutappMobileScreen2,
  ejecutappMobileScreen3,
  ejecutappMobileScreen4,
  ejecutappMobileScreen5,
  filu,
  polyphonic,
  rawg,
  santander,
  telotraigo,
  transmiford,
  ultralms,
} from "../assets";
import type { Project, ProjectCategory } from "../models/Project";

/** Curated order: most recent first. Source: LinkedIn profile + portfolio. */
export const projects: Project[] = [
  {
    slug: "polyphonic",
    name: "Polyphonic",
    tagline: "Johnson & Johnson MedTech's digital ecosystem for surgery.",
    summary:
      "J&J MedTech's digital ecosystem for surgery: video processing with FFmpeg, AI-powered personalization and HIPAA-compliant, containerized Azure infrastructure.",
    overview: [
      "Polyphonic is Johnson & Johnson MedTech's digital ecosystem for surgery — device- and specialty-agnostic applications that keep surgical teams connected, including a case-centered platform that uses video to bring teams together.",
      "At EPAM Systems I build and maintain it with NestJS, Node.js, React, Next.js and TypeScript, where performance, scalability and the protection of sensitive patient data come first. My work spans video processing and streaming, cloud deployment, AI-driven personalization and the security practices required by HIPAA.",
    ],
    contributions: [
      "Develop and maintain features across the NestJS / Node.js API and the React / Next.js front end in TypeScript.",
      "Implemented FFmpeg-based video processing and streaming for efficient handling of surgical video files.",
      "Deploy and containerize services with Azure IaaS and Docker, simplifying infrastructure management.",
      "Integrated AI features that personalize content and improve user engagement.",
      "Apply HIPAA-compliant security measures for handling sensitive healthcare data.",
    ],
    role: "Senior Software Engineer",
    company: "EPAM Systems",
    client: "Johnson & Johnson MedTech",
    period: "Dec 2024 – Present",
    category: "Healthcare",
    technologies: [
      "NestJS",
      "Node",
      "React",
      "NextJS",
      "TS",
      "FFmpeg",
      "Azure",
      "Docker",
    ],
    image: polyphonic,
    accent: ["#0f766e", "#1e293b"],
    link: "https://www.jnjmedtech.com/en-US/products/digital/polyphonic-digital-ecosystem/solutions/",
    featured: true,
  },
  {
    slug: "disneynow",
    name: "DisneyNOW",
    tagline:
      "A kid-friendly streaming experience for Disney's family channels.",
    summary:
      "Features, bug fixes and UI work on the DisneyNOW streaming platform, focused on accessible, kid-friendly navigation and content discovery.",
    overview: [
      "DisneyNOW is The Walt Disney Company's streaming destination for its family channels. As part of Globant's team for Disney, I implemented new features, fixed bugs and refined styles across the web experience.",
      "The work centered on a high-quality, kid-friendly interface: clear navigation, accessible components, dynamic theming and personalized recommendations that help young audiences find the shows they love.",
    ],
    contributions: [
      "Implemented new features and resolved bugs on the DisneyNOW web platform with React, JavaScript, MobX, Sass and server-side rendering.",
      "Revamped the UI for smoother navigation and content discovery, adding dynamic theming and personalized recommendations.",
      "Prioritized accessibility and intuitive interactions for a young audience.",
      "Mentored junior developers on front-end best practices.",
    ],
    role: "Software Engineer",
    company: "Globant",
    client: "The Walt Disney Company",
    period: "Sep 2023 – Nov 2024",
    category: "Streaming",
    technologies: ["React", "JS", "TS", "MobX", "Sass", "MaterialUI"],
    image: disneynow,
    accent: ["#1d4ed8", "#9333ea"],
    link: "https://disneynow.com",
    featured: true,
  },
  {
    slug: "abc-entertainment",
    name: "ABC Entertainment",
    tagline: "Streaming and content discovery for ABC.com.",
    summary:
      "New features, bug fixes and UI styling for ABC's streaming platform, built with React, MobX, Sass and server-side rendering.",
    overview: [
      "ABC.com is the streaming home of ABC Entertainment. Working with Globant for The Walt Disney Company, I added new features, solved bugs and styled the platform's web experience.",
      "A large part of the work was a UI revamp that made browsing channels and shows smoother, introduced dynamic theming and surfaced personalized recommendations to boost engagement.",
    ],
    contributions: [
      "Built new features and fixed bugs on the ABC streaming platform with React, JavaScript, MobX, Sass and SSR.",
      "Redesigned the browsing experience for channels and shows to improve content discovery.",
      "Added dynamic theming and personalized recommendations.",
      "Kept the interface accessible and performant across devices and browsers.",
    ],
    role: "Software Engineer",
    company: "Globant",
    client: "The Walt Disney Company",
    period: "Sep 2023 – Nov 2024",
    category: "Streaming",
    technologies: ["React", "JS", "TS", "MobX", "Sass", "NextJS"],
    image: abc,
    accent: ["#111827", "#4b5563"],
    link: "https://abc.com",
    featured: true,
  },
  {
    slug: "blackboard-learn-ultra",
    name: "Blackboard Learn Ultra",
    tagline:
      "Messaging and Student Preview for a leading learning management system.",
    summary:
      "Real-time messaging, Student Preview Mode and discussions for Blackboard's Ultra LMS, built with React, TypeScript and Redux.",
    overview: [
      "Blackboard Learn Ultra, by Anthology, is the modern experience of one of the most established learning management systems in higher education. Through Globant, I developed features and fixed bugs across messages, Student Preview and discussions.",
      "Ultra runs side by side with the legacy Original experience, so a key part of the job was keeping both versions in feature parity while improving performance.",
    ],
    contributions: [
      "Developed and maintained the LMS messaging system for real-time instructor–student communication.",
      "Built Student Preview Mode so instructors can test assessments, quizzes and course content as students.",
      "Maintained legacy (AngularJS) and modern (React) versions with feature parity and performance improvements.",
      "Optimized cloud infrastructure and database queries using AWS Lambda.",
      "Wrote tests with Testing Library and verified accessibility (A11Y) standards in new developments.",
    ],
    role: "Software Engineer",
    company: "Globant",
    client: "Blackboard · Anthology",
    period: "Mar 2022 – Aug 2023",
    category: "EdTech",
    technologies: [
      "React",
      "TS",
      "JS",
      "Redux",
      "ReactNative",
      "Node",
      "Java",
      "PostgreSQL",
      "AWS",
      "AngularJS",
      "TestingLibrary",
      "Sass",
    ],
    image: ultralms,
    accent: ["#4c1d95", "#be185d"],
    link: "https://www.blackboard.com/learnultra",
    featured: true,
  },
  {
    slug: "santander-peru",
    name: "Santander Perú",
    tagline: "BPMN-driven customer onboarding for a consumer bank.",
    summary:
      "Forms for a BPMN customer-creation process: registration, sensitive data, addresses, phones, contacts, references and business analysis.",
    overview: [
      "For Santander Consumer Perú, delivered through Cobiscorp, I built the forms that power a BPMN process for creating new customers.",
      "The flow covers registration, sensitive data, addresses, phone numbers, contacts, personal references, business analysis and business data — each step validated and wired into the bank's back-office workflow.",
    ],
    contributions: [
      "Built multi-step customer-creation forms used inside a BPMN workflow.",
      "Handled sensitive personal data, addresses, phones, contacts and personal references.",
      "Implemented business-analysis and business-data steps for legal-entity customers.",
      "Worked across JavaScript, Java, CSS and SQL Server.",
    ],
    role: "Software Developer",
    company: "Cobiscorp",
    client: "Santander Perú",
    period: "Jan 2021 – Mar 2022",
    category: "Banking",
    technologies: ["JS", "Java", "HTML", "CSS", "SQLServer"],
    image: santander,
    imageFit: "contain",
    imageBg: "#ec0000",
    accent: ["#b91c1c", "#ef4444"],
  },
  {
    slug: "banistmo",
    name: "Banistmo",
    tagline: "Risk matrix and KYC flows for account opening.",
    summary:
      "Risk matrix and risk-profile engine that decides whether a client can open an account, plus Know Your Customer and legal-entity forms.",
    overview: [
      "For Banistmo, delivered through Cobiscorp, I worked on the Risk Matrix: a risk-profile assessment that determines whether a client is eligible to open an account with the bank.",
      "Alongside it, I built the Know Your Customer (KYC) and legal-entity forms that collect the data the risk engine needs.",
    ],
    contributions: [
      "Built the risk-profile flow that determines account-opening eligibility.",
      "Developed Know Your Customer and legal-entity forms.",
      "Worked with JavaScript, Java, CSS, MySQL, SQL Server and AWS services.",
    ],
    role: "Software Developer",
    company: "Cobiscorp",
    client: "Banistmo",
    period: "Jan 2021 – Mar 2022",
    category: "Banking",
    technologies: ["JS", "Java", "HTML", "CSS", "SQLServer", "MySQL", "AWS"],
    image: banistmo,
    imageFit: "contain",
    imageBg: "#ffffff",
    accent: ["#18181b", "#52525b"],
    featured: true,
  },
  {
    slug: "ejecutapp-mobile",
    name: "Ejecutapp Mobile",
    tagline:
      "Cognitive games for the psychometric analysis of children aged 6–13.",
    summary:
      "React Native app of cognitive games for the psychometric analysis of children aged 6–13, by Universidad Santiago de Cali and Universidad de las Américas.",
    overview: [
      "Ejecutapp is an academic app for the psychometric analysis of children between 6 and 13 years old. The analysis is based on how a child interacts with the device while completing a series of cognitive activities that assess abilities such as memory and attention.",
      "It's a joint effort between Universidad Santiago de Cali (Colombia) and Universidad de las Américas (Chile), published on Google Play and backed by a web service that collects the data — managed through Ejecutapp Web.",
    ],
    contributions: [
      "Built the React Native app and its gallery of cognitive games: Go/NoGo, The Bivalent Shape, Froggy, Shifting Atencional and Globitos Creativos.",
      "Captured how each child interacts with the device during the activities — the basis of the psychometric analysis.",
      "Developed the Node.js, Express and MongoDB web service that collects the session data.",
      "Supported both evaluator sign-in and guest play.",
    ],
    role: "Frontend Web Developer",
    company: "Universidad Santiago de Cali",
    period: "2020 – 2021",
    category: "EdTech",
    technologies: ["ReactNative", "JS", "React", "Node", "Express", "MongoDB"],
    image: ejecutappMobile,
    frame: "device",
    gallery: [
      {
        image: ejecutappMobileScreen1,
        caption: "Welcome — sign in or play as a guest",
      },
      { image: ejecutappMobileScreen2, caption: "Froggy — instructions" },
      { image: ejecutappMobileScreen3, caption: "Froggy — memory sequence" },
      {
        image: ejecutappMobileScreen4,
        caption: "Go/NoGo — tap only for the flower",
      },
      { image: ejecutappMobileScreen5, caption: "The Bivalent Shape" },
    ],
    accent: ["#6d28d9", "#4c1d95"],
    link: "https://play.google.com/store/apps/details?id=com.gamesstackusc",
    linkLabel: "Get it on Google Play",
    featured: true,
  },
  {
    slug: "ejecutapp-web",
    name: "Ejecutapp Web",
    tagline: "The administration console for Ejecutapp Mobile.",
    summary:
      "Administration web app for Ejecutapp Mobile, built with React, React Router, Context, Firebase Auth, Express and MongoDB.",
    overview: [
      "Ejecutapp Web is the administration application for Ejecutapp Mobile, the cognitive-games app for children — a product of an alliance between Universidad Santiago de Cali and Universidad de las Américas.",
      "It pairs a React front end — React Router for navigation and the Context API for shared state — with an Express and MongoDB back end, using Firebase Authentication for sign-in.",
    ],
    contributions: [
      "Built the React front end with React Router and the Context API.",
      "Integrated Firebase Authentication for user sign-in.",
      "Developed the Express and MongoDB API behind the administration features.",
    ],
    role: "Frontend Web Developer",
    company: "Universidad Santiago de Cali",
    period: "2020 – 2021",
    category: "EdTech",
    technologies: [
      "React",
      "ReactRouter",
      "JS",
      "Firebase",
      "Express",
      "Node",
      "MongoDB",
    ],
    image: ejecutapp,
    accent: ["#7e22ce", "#4c1d95"],
  },
  {
    slug: "filu-book-fair",
    name: "FILU III — University Book Fair",
    tagline: "Landing page and event calendar for an international book fair.",
    summary:
      "Landing page and detailed event calendar for the III International University Book Fair, built with React, static generation and Styled Components.",
    overview: [
      "The Feria Internacional del Libro Universitario (FILU) is an international university book fair hosted by Universidad Santiago de Cali. For its third edition, held 13–18 September 2021, I built the landing page and the event calendar.",
      "The calendar presents every session with detailed information, and the site is statically generated so it loads quickly for visitors.",
    ],
    contributions: [
      "Built the landing page with React and Styled Components.",
      "Created the event calendar with detailed information for each session.",
      "Used static site generation (SSG) for fast page loads.",
    ],
    role: "Frontend Web Developer",
    company: "Universidad Santiago de Cali",
    period: "Sep 2021",
    category: "Web",
    technologies: ["React", "StyledComponents", "JS", "HTML", "CSS"],
    image: filu,
    accent: ["#7c3aed", "#db2777"],
  },
  {
    slug: "telotraigo",
    name: "Te lo traigo",
    tagline: "An international shopping and shipping service for Colombia.",
    summary:
      "Next.js site for an international shopping and shipping agent: account sign-up, order tracking, a shipping calculator and a WhatsApp personal shopper.",
    overview: [
      "Te lo traigo is more than an international mailbox: it's a personal shopper that finds, buys and ships products from international stores such as eBay, Costco, Walmart, Best Buy, adidas and Apple to customers in Colombia.",
      "As a freelance project, I built the website with Next.js and React. It gives customers one place to open an account, track their orders, estimate shipping costs and reach a personal shopper.",
    ],
    contributions: [
      "Built the website with Next.js and React, including the hero carousel, service highlights and recommended stores.",
      "Created the entry points to open an account, sign in, track orders and calculate shipping costs.",
      "Added a WhatsApp shortcut so customers can reach a personal shopper directly.",
      "Deployed the site on Vercel.",
    ],
    role: "Freelance Software Developer",
    company: "Freelance",
    client: "Te lo traigo",
    period: "Freelance project",
    category: "E-commerce",
    technologies: ["NextJS", "React", "JS", "CSS"],
    image: telotraigo,
    accent: ["#86198f", "#4a044e"],
    link: "https://www.telotraigo.com/",
  },
  {
    slug: "transmiford",
    name: "Transmiford",
    tagline: "An online store for a truck-parts retailer in Bogotá.",
    summary:
      "WooCommerce store with PayU payments for a truck-parts retailer in Bogotá, built on WordPress and Elementor.",
    overview: [
      "Transmiford sells truck parts in Bogotá D.C. As a freelance project, I designed and built their e-commerce website.",
      "The store runs on WordPress and WooCommerce, with Elementor for page building and PayU for online payments.",
    ],
    contributions: [
      "Built the storefront with WordPress, WooCommerce and Elementor.",
      "Integrated PayU for online payments.",
      "Customized the theme with HTML, CSS and JavaScript.",
    ],
    role: "Freelance Software Developer",
    company: "Freelance",
    client: "Transmiford",
    period: "Jun – Dec 2020",
    category: "E-commerce",
    technologies: [
      "Wordpress",
      "WooCommerce",
      "Elementor",
      "PayU",
      "HTML",
      "CSS",
      "JS",
    ],
    image: transmiford,
    accent: ["#1e40af", "#0f172a"],
    link: "https://transmiford.com",
  },
  {
    slug: "rawg-games",
    name: "RAWG Games",
    tagline: "Video game discovery powered by the RAWG API.",
    summary:
      "Game discovery web app built on the RAWG Video Games Database API with Next.js, TypeScript, Styled Components and Tailwind CSS.",
    overview: [
      "RAWG Games is a personal project for browsing and discovering video games using the RAWG Video Games Database API.",
      "I used it to practice building a typed Next.js application with a mix of Styled Components and Tailwind CSS.",
    ],
    contributions: [
      "Built the application with React, Next.js and TypeScript.",
      "Consumed the RAWG REST API for game listings and details.",
      "Styled the UI with Styled Components and Tailwind CSS.",
    ],
    role: "Creator",
    company: "Personal project",
    period: "Side project",
    category: "Web",
    technologies: ["React", "NextJS", "TS", "StyledComponents", "Tailwind"],
    image: rawg,
    accent: ["#0f172a", "#334155"],
    link: "https://rawg-games.vercel.app/",
    sourceCode: "https://github.com/AndresBetancourt-Dev/Rawg",
  },
];

export const projectCategories: ProjectCategory[] = Array.from(
  new Set(projects.map((project) => project.category)),
);

export const featuredProjects = projects.filter((project) => project.featured);

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getAdjacentProjects = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    previous: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
};

export const getRelatedProjects = (slug: string, limit = 3) => {
  const current = getProject(slug);
  if (!current) return [];
  const score = (project: Project) =>
    (project.category === current.category ? 3 : 0) +
    (project.company === current.company ? 2 : 0) +
    project.technologies.filter((tech) => current.technologies.includes(tech))
      .length *
      0.25;
  return projects
    .filter((project) => project.slug !== slug)
    .sort((a, b) => score(b) - score(a))
    .slice(0, limit);
};
