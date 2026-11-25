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
  bcCoffee,
  fabripunto,
  felipeGallego,
  integrarteIps,
  nudoHouse,
  activoMorrales,
  viveBoletos,
  starWarsLanding,
  marvelBootstrap,
  transmiford,
  ultralms,
} from "../assets";
import type { Project, ProjectCategory } from "../models/Project";

/** Curated order: most recent first. Source: LinkedIn profile + portfolio. */
const curatedProjects: Project[] = [
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
    slug: "nudo",
    name: "NUDO",
    tagline: "A private house for brand identity and digital presence.",
    summary:
      "Next.js site for a brand-identity concierge, with a multi-step consultation form and branded emails sent with React Email and Resend.",
    overview: [
      'NUDO is a private house for brand identity and digital presence. It works with few clients, each one guided by a founder from the first conversation — the name plays on "naked" in Italian and "knot" in Spanish.',
      "I built the site with Next.js, React, TypeScript and Tailwind CSS: a quiet, editorial experience that walks visitors through how a commission unfolds and ends in a tailored consultation request.",
    ],
    contributions: [
      "Built the site with the Next.js App Router, React, TypeScript and Tailwind CSS.",
      "Created a multi-step consultation form — needs, brand stage, scope, timing and preferred contact — handled by a server action with validation.",
      "Sent branded confirmation and studio notification emails with React Email and Resend.",
      "Added a mobile action bar and copy-to-clipboard contact details.",
    ],
    role: "Freelance Software Developer",
    company: "Freelance",
    client: "NUDO",
    period: "2024",
    category: "Web",
    technologies: ["NextJS", "React", "TS", "Tailwind", "Resend"],
    image: nudoHouse,
    accent: ["#a8a29e", "#292524"],
    link: "https://www.nudo.house/",
  },
  {
    slug: "activo-morrales",
    name: "Activo Morrales",
    tagline: "Backpacks and bags for every day, online.",
    summary:
      "WooCommerce store for a Colombian backpack brand: catalog by audience and product type, cart, WhatsApp contact and buy-now-pay-later with Addi.",
    overview: [
      "Activo Morrales is a Colombian brand of backpacks, travel bags, lunch boxes, pencil cases, fanny packs and luggage, with collections for men, women, boys and girls, leather pieces and a back-to-school line.",
      "I built its online store with WordPress and WooCommerce, with a catalog organized both by who it's for and by product type, and buy-now-pay-later financing through Addi.",
    ],
    contributions: [
      "Built the online store with WordPress and WooCommerce.",
      "Organized the catalog by audience — men, women, boys and girls — and by product type: backpacks, travel bags, lunch boxes, pencil cases and fanny packs.",
      "Highlighted the latest arrivals and seasonal collections like Back to School and Leather.",
      "Promoted buy-now-pay-later financing with Addi and added a WhatsApp contact button.",
    ],
    role: "Freelance Software Developer",
    company: "Freelance",
    client: "Activo Morrales",
    period: "2024",
    category: "E-commerce",
    technologies: ["Wordpress", "WooCommerce", "HTML", "CSS", "JS"],
    image: activoMorrales,
    accent: ["#0e7490", "#111827"],
    link: "https://activomorrales.com/",
  },
  {
    slug: "telotraigo",
    name: "Te lo traigo",
    tagline:
      "International shopping and shipping from the US and China to Latin America.",
    summary:
      "Headless WordPress + WooCommerce storefront in Next.js for an international shopping and shipping service, with a live shipping calculator and per-country content.",
    overview: [
      "Te lo traigo, by A Tiempo Cargo, is more than an international mailbox: it's a personal shopper that finds, buys and ships products from stores in the United States and China — eBay, Costco, Walmart, Best Buy, adidas, Apple and more — to customers across Latin America.",
      "As a freelance project, I built its storefront: a Next.js and TypeScript front end on top of a headless WordPress with WooCommerce and ACF, where every country gets its own content, addresses, documents and contact channels.",
    ],
    contributions: [
      "Built the storefront with Next.js, React and TypeScript, styled with Material UI's styled API (Emotion) and Tailwind CSS via twin.macro.",
      "Integrated a headless WordPress (REST API + ACF) and WooCommerce for products, search, cart and per-country content — hero slides, documents, addresses, social links and WhatsApp numbers.",
      "Developed the shipping calculator: US or China origin, destinations loaded from the API, Formik + Yup validation and a full rate breakdown (freight, insurance, delivery and volumetric weight).",
      "Added country routing by URL, so a new country configured in WordPress works automatically.",
      "Used Incremental Static Regeneration for fast pages and Google Analytics 4 event tracking across the app.",
    ],
    role: "Freelance Software Developer",
    company: "Freelance",
    client: "Te lo traigo · A Tiempo Cargo",
    period: "Dec 2023 – Dec 2024",
    category: "E-commerce",
    technologies: [
      "NextJS",
      "React",
      "TS",
      "MaterialUI",
      "Tailwind",
      "Wordpress",
      "WooCommerce",
      "Elementor",
      "Formik",
      "GoogleAnalytics",
      "Vercel",
    ],
    image: telotraigo,
    accent: ["#86198f", "#4a044e"],
    link: "https://www.telotraigo.com/",
    featured: true,
  },
  {
    slug: "vive-boletos",
    name: "Vive Boletos",
    tagline: "Personalized PDF e-tickets for Cali's biggest concerts.",
    summary:
      "PHP ticket generator for a Cali box office: personalized PDF e-tickets with buyer details, ticket number, event info, price and a scannable QR code or barcode.",
    overview: [
      "Vive Boletos is the official box office for some of the biggest concerts and events in Cali, Colombia — from Cali Vive el Flow at Estadio Pascual Guerrero to Cali se Viste de Salsa — selling online and at its point of sale in Holguines Trade Center.",
      "I didn't build their website: I built the tickets themselves. Every purchase produces a personalized PDF e-ticket, rendered from an HTML template with PHP and a PDF library, carrying everything needed at the gate.",
    ],
    contributions: [
      "Built the ticket generator in PHP, rendering an HTML template to PDF with a PDF library.",
      "Filled each ticket with the event's data — name, venue, address and date — and the buyer's name, surname and ticket number.",
      "Generated a unique QR code or barcode for every ticket, used to validate entry at the gate.",
      "Added a price module showing what the ticket costs.",
      "Matched each event's artwork and branding, like the Cali Vive el Flow edition.",
    ],
    role: "Freelance Software Developer",
    company: "Freelance",
    client: "Vive Boletos",
    period: "2023",
    category: "Ticketing",
    technologies: ["PHP", "HTML", "CSS"],
    image: viveBoletos,
    frame: "plain",
    accent: ["#dc2626", "#111827"],
    link: "https://viveboletos.com/",
    linkLabel: "Visit Vive Boletos",
  },
  {
    slug: "bc-coffee-company",
    name: "BC Coffee Company",
    tagline: "Specialty coffee roasters from Cali, online.",
    summary:
      "WordPress + WooCommerce store for a Cali specialty coffee roaster: product catalog, monthly coffee subscription and the story from farm to cup.",
    overview: [
      "BC Coffee Company is a specialty coffee roaster from Cali, Colombia — a roasting house and coffee shop in the traditional San Fernando neighborhood since 2015, working hand in hand with farmers under fair-trade relationships. The name comes from its beginnings: on a bicycle.",
      "I built the brand's website and online store with WordPress, WooCommerce and Elementor, telling the story from farm to cup and selling its coffees, including a monthly subscription with a different coffee delivered every month.",
    ],
    contributions: [
      "Built the website and online store with WordPress, WooCommerce and Elementor.",
      "Presented the roaster's process — developing, hulling, roasting, brewing and exporting — and its in-store experiences: courses, tastings and cupping.",
      "Featured the monthly coffee subscription and the menu.",
      "Added the store location, opening hours and contact sections.",
    ],
    role: "Freelance Software Developer",
    company: "Freelance",
    client: "BC Coffee Company",
    period: "2023",
    category: "E-commerce",
    technologies: [
      "Wordpress",
      "WooCommerce",
      "Elementor",
      "HTML",
      "CSS",
      "JS",
    ],
    image: bcCoffee,
    accent: ["#78350f", "#1c1917"],
    link: "https://www.bccoffeecompany.com/",
  },
  {
    slug: "fabripunto",
    name: "Fabripunto",
    tagline: "100% Colombian apparel, online.",
    summary:
      "WooCommerce store for a Colombian apparel brand: catalog by category, free-shipping threshold and a buy-now-pay-later option.",
    overview: [
      'Fabripunto sells 100% Colombian clothing — t-shirts, essentials and underwear — under the motto "Simple es clave", along with garment supplies.',
      "I built its online store with WordPress, WooCommerce and Elementor, with a catalog organized by category, free shipping above a minimum purchase and a buy-now-pay-later option at 0% interest.",
    ],
    contributions: [
      "Built the online store with WordPress, WooCommerce and Elementor.",
      "Organized the catalog into categories, including a dedicated supplies section.",
      "Highlighted the free-shipping threshold and buy-now-pay-later financing across the store.",
      "Connected Instagram, Facebook and WhatsApp for customer support.",
    ],
    role: "Freelance Software Developer",
    company: "Freelance",
    client: "Fabripunto",
    period: "2022",
    category: "E-commerce",
    technologies: [
      "Wordpress",
      "WooCommerce",
      "Elementor",
      "HTML",
      "CSS",
      "JS",
    ],
    image: fabripunto,
    accent: ["#1e3a8a", "#0f172a"],
    link: "https://fabripunto.com/",
  },
  {
    slug: "integrarte-ips",
    name: "Integrarte IPS",
    tagline: "A healthcare provider specialized in neurodevelopment.",
    summary:
      "WordPress site for a healthcare provider specialized in neurodevelopment, ABA therapy and neurostimulation, with services, regulatory documents and contact.",
    overview: [
      "Integrarte IPS — Centro de Neuroestimulación Conductual — is a healthcare provider specialized in the development and treatment of neurodevelopment. It offers applied behavior analysis (ABA) and neurostimulation for children, adults and people with disabilities or special needs.",
      "I built its website with WordPress and Elementor, presenting the institution and its services along with the documents a healthcare provider must publish, such as financial statements and work regulations.",
    ],
    contributions: [
      "Built the website with WordPress and Elementor.",
      "Presented the institution's mission and its two main areas: therapies and specialized consultations.",
      "Published regulatory documents such as financial statements and work regulations.",
      "Added contact options, including click-to-call and a WhatsApp button.",
    ],
    role: "Freelance Software Developer",
    company: "Freelance",
    client: "Integrarte IPS",
    period: "2022",
    category: "Healthcare",
    technologies: ["Wordpress", "Elementor", "HTML", "CSS", "JS"],
    image: integrarteIps,
    accent: ["#7e22ce", "#3b0764"],
    link: "https://integrarteips.com/",
  },
  {
    slug: "felipe-gallego",
    name: "Felipe Gallego Studio",
    tagline: "Portfolio of an architect and artistic director.",
    summary:
      "WordPress portfolio for Felipe Gallego Studio — architecture, interior design, artistic direction and art curation — with a minimal, cinematic home page.",
    overview: [
      "Felipe Gallego is an architect and artistic director. His studio is a multidisciplinary practice spanning architecture, interior design, artistic direction and art curation, with projects across luxury retail, hospitality, residential and commercial spaces.",
      "I built the studio's site with WordPress and Elementor as a minimal, image-first portfolio: a black-and-white architectural hero carrying the studio's manifesto, plus About and Contact pages.",
    ],
    contributions: [
      "Built the portfolio with WordPress and Elementor.",
      "Designed a minimal, full-screen home page around a black-and-white architectural hero and the studio's manifesto.",
      "Created the About page presenting the studio's disciplines: artistic direction, architecture, interior design and art curation.",
      "Set up the Contact page and on-page SEO with All in One SEO.",
    ],
    role: "Freelance Software Developer",
    company: "Freelance",
    client: "Felipe Gallego Studio",
    period: "2021",
    category: "Web",
    technologies: ["Wordpress", "Elementor", "HTML", "CSS", "JS"],
    image: felipeGallego,
    accent: ["#3f3f46", "#09090b"],
    link: "https://felipegallego.co/",
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
  {
    slug: "marvel-landing-page",
    name: "Marvel Landing Page",
    tagline: "Movies, games and news, built with Bootstrap.",
    summary:
      "Responsive Marvel landing page built with Bootstrap 4 and jQuery: a news carousel, a grid of movie posters and featured games.",
    overview: [
      "A personal project: a responsive landing page for Marvel built with Bootstrap 4 and jQuery, with a full-width news carousel, a grid of movie posters, featured games and a footer of Marvel links.",
      "In 2026 I revisited it to make it lighter and more accessible while keeping the original design.",
    ],
    contributions: [
      "Built the layout with Bootstrap 4's grid, navbar, carousel and cards, plus custom fonts and gradients.",
      "Added a collapsible navbar with scrollspy and a fading news carousel.",
      "Cut the page weight from 19 MB to 3.5 MB by sizing every image for how it's displayed.",
      "Added descriptive alt text, a page heading, a skip link and keyboard focus styles, and made the carousel pause on focus and respect reduced-motion settings.",
    ],
    role: "Creator",
    company: "Personal project",
    period: "Aug 2020",
    category: "Web",
    technologies: ["Bootstrap", "JQuery", "HTML", "CSS", "JS"],
    image: marvelBootstrap,
    accent: ["#dc2626", "#111827"],
    link: "https://andresbetancourt-dev.github.io/Marvel-Bootstrap/",
    sourceCode: "https://github.com/AndresBetancourt-Dev/Marvel-Bootstrap",
  },
  {
    slug: "star-wars-landing-page",
    name: "Star Wars Landing Page",
    tagline: "A parallax landing page for a galaxy far, far away.",
    summary:
      "Star Wars landing page in plain HTML, CSS and JavaScript, with Rellax.js parallax, Star Wars-style typography and Font Awesome icons.",
    overview: [
      "A personal project: a landing page for Star Wars built with plain HTML, CSS and JavaScript — a quote from the saga over the Death Star, the Millennium Falcon, a short history of the franchise and an image gallery.",
      "Sections scroll at different speeds with Rellax.js parallax, set in a Star Wars-style typeface. In 2026 I revisited it to improve accessibility and performance without changing the design.",
    ],
    contributions: [
      "Built the page with semantic HTML and CSS Grid, custom fonts and gradient overlays.",
      "Added layered parallax scrolling with Rellax.js and social links with Font Awesome.",
      "Fixed stretched images so they keep their proportions, and cut the page weight from 5.2 MB to 2.3 MB.",
      "Added alt text, landmarks, a skip link and keyboard focus styles, and turned off parallax for visitors who prefer reduced motion.",
    ],
    role: "Creator",
    company: "Personal project",
    period: "Aug 2020",
    category: "Web",
    technologies: ["HTML", "CSS", "JS", "FontAwesome"],
    image: starWarsLanding,
    accent: ["#0f172a", "#1e3a8a"],
    link: "https://andresbetancourt-dev.github.io/Star-Wars-Landing-Page/",
    sourceCode:
      "https://github.com/AndresBetancourt-Dev/Star-Wars-Landing-Page",
  },
];

/**
 * Projects from these organizations always go to the end of every list
 * (home, /projects, filters, prev/next, related, sitemap), wherever new
 * projects are added in `curatedProjects`.
 */
const PINNED_LAST_COMPANIES = new Set(["Universidad Santiago de Cali"]);

const isPinnedLast = (project: Project) =>
  PINNED_LAST_COMPANIES.has(project.company);

/** Moves pinned-last projects to the end, keeping everyone's relative order. */
const pinLast = (list: Project[]) => [
  ...list.filter((project) => !isPinnedLast(project)),
  ...list.filter(isPinnedLast),
];

export const projects: Project[] = pinLast(curatedProjects);

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
  // Pick by relevance, then show pinned-last projects at the end.
  const related = projects
    .filter((project) => project.slug !== slug)
    .sort((a, b) => score(b) - score(a))
    .slice(0, limit);
  return pinLast(related);
};
