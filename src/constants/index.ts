import {
  mobile,
  backend,
  creator,
  web,
  abc,
  rawg,
  globant,
  anthology,
  cobis,
  usc,
  ultralms,
  transmiford,
  santander,
  banistmo,
} from "../assets";

import { technologies } from "./technologies";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  /* {
    id: "contact",
    title: "Contact",
  }, */
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Web UI Developer",
    company_name: "Globant",
    icon: globant,
    iconBg: "#000",
    date: "March 2022 - Current",
    points: [
      "Developing and maintaining web applications using React.js, Typescript, Tailwind, Next.js, Javascript",
      "Usage of React Native, SASS, Jenkins, Github, Azure Devops, Jira, MongoDB, Three.js and Docker",
      "Guide other Globers giving them exercises and technologies to learn when in Talent Pool",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Blackboard - Anthology",
    icon: anthology,
    iconBg: "#FFF",
    date: "March 2022 - August 2023",
    points: [
      "Development of Learning Management System (LMS) Features using React, Typescript, Java, Redux, AWS and PostgreSQL.",
      "Check of proper A11Y standards applied to the developments.",
      "Usage of Jenkins, Performance Tools, Cypress/Selenium Jira, Azure Devops, Github and Docker",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Cobiscorp - Cobis Topaz",
    icon: cobis,
    iconBg: "#000",
    date: "January 2021 - March 2022",
    points: [
      "Developing and construction of banking software using Javascript, Angular.js, Java, SQL Server, Stored Procedures",
      "Usage of AWS Features such as Aurora, Step Functions, Lambda and EC2",
      "Usage of Jenkins, Azure Devops and Team Foundation Server, Docker",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Universidad Santiago de Cali",
    icon: usc,
    iconBg: "#fff",
    date: "Jan 2020 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js, React Native, Wordpress, Joomla, HTML, CSS, Javascript, Git and Github",
      "Creation of Backend using Express.js, Node.js, MongoDB",
      "Maintaing of Website using CPanel, Database Access, Role Management and Hosting",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ABC Network",
    description:
      "Creation of new features and maintenance of web streaming platform for the client ABC Network.",
    technologies: [
      technologies.React,
      technologies.JS,
      technologies.MobX,
      technologies.Sass,
    ],
    image: abc,
    link: "https://abc.com",
  },
  {
    name: "RAWG Games",
    description: "Web application making usage of RAWG Games API.",
    technologies: [
      technologies.React,
      technologies.TS,
      technologies.NextJS,
      technologies.StyledComponents,
      technologies.Tailwind,
    ],
    image: rawg,
    source_code_link: "https://github.com/AndresBetancourt-Dev/Rawg",
    link: "https://rawg-games.vercel.app/",
  },
  {
    name: "Blackboard - Anthology Ultra LMS",
    description:
      "Development of new features and bug solutions within popular LMS Blackboard - Anthology regarding Messages, Student Preview and Discussions.",
    technologies: [
      technologies.React,
      technologies.JS,
      technologies.TS,
      technologies.Redux,
      technologies.Git,
      technologies.Java,
      technologies.PostgreSQL,
      technologies.Sass,
    ],
    image: ultralms,
    link: "https://www.blackboard.com/learnultra",
  },
  {
    name: "Banistmo",
    description:
      "Banistmo - Risk Matrix | Risk Profile to determine if a client is eligible for open an account in the bank, also Forms for Know Your Customer and Legal Person, made using Javascript, Java, CSS, MySQL, SQL Server and AWS.",
    technologies: [
      technologies.Java,
      technologies.JS,
      technologies.MySQL,
      technologies.SQLServer,
      technologies.HTML,
      technologies.CSS,
    ],
    image: banistmo,
  },
  {
    name: "Santander Perú",
    description:
      "Construction of Forms to use in a BPMN Process for customers creation, Registration, Sensible Data, Addresses, Telephones, Contacts, Personal References, Bussiness Analysis, Bussiness Data, made using Javascript, Java, CSS, SQL Server.",
    technologies: [
      technologies.Java,
      technologies.JS,
      technologies.SQLServer,
      technologies.HTML,
      technologies.CSS,
    ],
    image: santander,
  },
  {
    name: "Transmiford",
    description:
      "Creation of E-commerce using Wordpress, Woocomerce, Elementor, HTML, CSS and JS",
    technologies: [
      technologies.Wordpress,
      technologies.WooCommerce,
      technologies.Elementor,
      technologies.HTML,
      technologies.CSS,
      technologies.JS,
    ],
    image: transmiford,
    link: "https://transmiford.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
