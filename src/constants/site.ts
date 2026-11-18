/** Env value → default when unset, `undefined` when explicitly "none". */
const optionalEnv = (value: string | undefined, fallback: string) =>
  value === "none" ? undefined : value?.trim() || fallback;

/**
 * Global site configuration — the single source of truth for identity, SEO
 * and social links. Optional links are only rendered when they are set.
 */
export const SITE = {
  name: "Andrés Betancourt",
  shortName: "AB · Dev",
  role: "Senior Software Engineer",
  title: "Andrés Betancourt — Senior Software Engineer",
  description:
    "Senior Software Engineer with 6+ years building fast, accessible web and mobile products with React, Next.js, TypeScript and Node.js for healthcare, streaming, EdTech and banking clients.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  location: "Colombia · Remote",
  currentCompany: "EPAM Systems",
  keywords: [
    "Andrés Betancourt",
    "Senior Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "React Native",
    "Frontend Engineer",
    "Colombia",
  ],
  social: {
    github: "https://github.com/AndresBetancourt-Dev",
    /** Override with NEXT_PUBLIC_LINKEDIN_URL; set it to "none" to hide. */
    linkedin: optionalEnv(
      process.env.NEXT_PUBLIC_LINKEDIN_URL,
      "https://www.linkedin.com/in/andres-betancourth/",
    ),
    /** Override with NEXT_PUBLIC_CONTACT_EMAIL; set it to "none" to hide. */
    email: optionalEnv(
      process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      "contacto.betancourth@gmail.com",
    ),
  },
} as const;

export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

export const sameAs = [SITE.social.github, SITE.social.linkedin].filter(
  (value): value is string => Boolean(value),
);
