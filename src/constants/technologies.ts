import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  mobx,
  nextjs,
  express,
  java,
  reactnative,
  mysql,
  sqlserver,
  sass,
  postgresql,
  styledcomponents,
  wordpress,
  woocommerce,
  elementor,
} from "../assets";
import type { Technology, TechCategory } from "../models/Technology";

export const technologies = {
  /* Languages */
  JS: { name: "JavaScript", category: "Languages", icon: javascript },
  TS: { name: "TypeScript", category: "Languages", icon: typescript },
  Java: { name: "Java", category: "Languages", icon: java, darkArtwork: true },
  HTML: { name: "HTML5", category: "Languages", icon: html },
  CSS: { name: "CSS3", category: "Languages", icon: css },
  Cpp: { name: "C / C++", category: "Languages" },

  /* Frontend */
  React: { name: "React", category: "Frontend", icon: reactjs },
  NextJS: { name: "Next.js", category: "Frontend", icon: nextjs },
  Redux: { name: "Redux", category: "Frontend", icon: redux },
  MobX: { name: "MobX", category: "Frontend", icon: mobx },
  ReactNative: {
    name: "React Native",
    category: "Frontend",
    icon: reactnative,
  },
  Sass: { name: "Sass", category: "Frontend", icon: sass },
  Tailwind: { name: "Tailwind CSS", category: "Frontend", icon: tailwind },
  StyledComponents: {
    name: "Styled Components",
    category: "Frontend",
    icon: styledcomponents,
    darkArtwork: true,
  },
  MaterialUI: { name: "Material UI", category: "Frontend" },
  AngularJS: { name: "AngularJS", category: "Frontend" },
  ReactRouter: { name: "React Router", category: "Frontend" },
  ThreeJS: {
    name: "Three.js",
    category: "Frontend",
    icon: threejs,
    darkArtwork: true,
  },

  /* Backend */
  Node: { name: "Node.js", category: "Backend", icon: nodejs },
  NestJS: { name: "NestJS", category: "Backend" },
  Express: {
    name: "Express",
    category: "Backend",
    icon: express,
    darkArtwork: true,
  },
  FFmpeg: { name: "FFmpeg", category: "Backend" },

  /* Data */
  PostgreSQL: { name: "PostgreSQL", category: "Data", icon: postgresql },
  MySQL: {
    name: "MySQL / Aurora",
    category: "Data",
    icon: mysql,
    darkArtwork: true,
  },
  SQLServer: {
    name: "SQL Server",
    category: "Data",
    icon: sqlserver,
    darkArtwork: true,
  },
  MongoDB: { name: "MongoDB", category: "Data", icon: mongodb },
  Firebase: { name: "Firebase", category: "Data" },

  /* Cloud & DevOps */
  AWS: { name: "AWS", category: "Cloud & DevOps" },
  Azure: { name: "Azure", category: "Cloud & DevOps" },
  Docker: { name: "Docker", category: "Cloud & DevOps", icon: docker },
  Heroku: { name: "Heroku", category: "Cloud & DevOps" },

  /* Tooling */
  Git: { name: "Git & GitHub", category: "Tooling", icon: git },
  Figma: { name: "Figma", category: "Tooling", icon: figma },
  TestingLibrary: { name: "Testing Library", category: "Tooling" },

  /* CMS & E-commerce */
  Wordpress: {
    name: "WordPress",
    category: "CMS & E-commerce",
    icon: wordpress,
  },
  WooCommerce: {
    name: "WooCommerce",
    category: "CMS & E-commerce",
    icon: woocommerce,
  },
  Elementor: {
    name: "Elementor",
    category: "CMS & E-commerce",
    icon: elementor,
  },
  Joomla: { name: "Joomla", category: "CMS & E-commerce" },
  PayU: { name: "PayU", category: "CMS & E-commerce" },
} satisfies Record<string, Technology>;

export type TechKey = keyof typeof technologies;

export const getTech = (key: TechKey): Technology => technologies[key];

export const techCategories: TechCategory[] = [
  "Languages",
  "Frontend",
  "Backend",
  "Data",
  "Cloud & DevOps",
  "Tooling",
  "CMS & E-commerce",
];

/** Technologies grouped by category, preserving declaration order. */
export const techByCategory = techCategories.map((category) => ({
  category,
  items: (Object.keys(technologies) as TechKey[])
    .filter((key) => technologies[key].category === category)
    .map((key) => ({ key, ...getTech(key) })),
}));
