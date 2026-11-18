import {
  abc,
  banistmo,
  rawg,
  santander,
  transmiford,
  ultralms,
} from "../assets";
import type { Project, ProjectCategory } from "../models/Project";

/** Curated order: most recent first. Source: LinkedIn profile + portfolio. */
export const projects: Project[] = [
  {
    slug: "healthcare-video-platform",
    name: "Healthcare Video Platform",
    tagline:
      "Secure, HIPAA-compliant video experiences for a healthcare product.",
    summary:
      "HIPAA-compliant healthcare application with FFmpeg video processing, AI-powered personalization and containerized Azure infrastructure.",
    overview: [
      "At EPAM Systems I build and maintain a healthcare application on NestJS, Node.js, React, Next.js and TypeScript, where performance, scalability and the protection of sensitive patient data come first.",
      "The client and product are under NDA, so this page focuses on the engineering: video processing and streaming, cloud deployment, AI-driven personalization and the security practices required by HIPAA.",
    ],
    contributions: [
      "Develop and maintain features across the NestJS / Node.js API and the React / Next.js front end in TypeScript.",
      "Implemented FFmpeg-based video processing and streaming for efficient handling of video files.",
      "Deploy and containerize services with Azure IaaS and Docker, simplifying infrastructure management.",
      "Integrated AI features that personalize content and improve user engagement.",
      "Apply HIPAA-compliant security measures for handling sensitive healthcare data.",
    ],
    role: "Senior Software Engineer",
    company: "EPAM Systems",
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
    accent: ["#0891b2", "#4f46e5"],
    featured: true,
    confidential: true,
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
    slug: "ejecutapp-web",
    name: "Ejecutapp Web",
    tagline: "The administration console for Ejecutapp Mobile.",
    summary:
      "Administration web app for Ejecutapp Mobile, built with React, React Router, Context, Firebase Auth, Express and MongoDB.",
    overview: [
      "Ejecutapp Web is the administration application for Ejecutapp Mobile, developed at Universidad Santiago de Cali.",
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
    accent: ["#059669", "#0d9488"],
  },
  {
    slug: "filu-book-fair",
    name: "FILU III — University Book Fair",
    tagline: "Landing page and event calendar for an international book fair.",
    summary:
      "Landing page and detailed event calendar for the III International University Book Fair, built with React, static generation and Styled Components.",
    overview: [
      "The Feria Internacional del Libro Universitario (FILU) is an international university book fair hosted by Universidad Santiago de Cali. For its third edition I built the landing page and the event calendar.",
      "The calendar presents every session with detailed information, and the site is statically generated so it loads quickly for visitors.",
    ],
    contributions: [
      "Built the landing page with React and Styled Components.",
      "Created the event calendar with detailed information for each session.",
      "Used static site generation (SSG) for fast page loads.",
    ],
    role: "Frontend Web Developer",
    company: "Universidad Santiago de Cali",
    period: "2020 – 2021",
    category: "Web",
    technologies: ["React", "StyledComponents", "JS", "HTML", "CSS"],
    accent: ["#c2410c", "#db2777"],
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
    featured: true,
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
