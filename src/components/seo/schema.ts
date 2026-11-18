import { SITE, absoluteUrl, sameAs } from "../../constants/site";
import { getTech } from "../../constants/technologies";
import type { Project } from "../../models/Project";

const personId = absoluteUrl("/#person");

export const personSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: SITE.name,
  url: SITE.url,
  jobTitle: SITE.role,
  description: SITE.description,
  worksFor: { "@type": "Organization", name: SITE.currentCompany },
  address: { "@type": "PostalAddress", addressCountry: "CO" },
  sameAs,
  ...(SITE.social.email && { email: `mailto:${SITE.social.email}` }),
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "NestJS",
    "React Native",
    "Accessibility",
    "Web Performance",
    "Azure",
    "AWS",
  ],
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: `${SITE.name} — Portfolio`,
  url: SITE.url,
  inLanguage: "en",
  author: { "@id": personId },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const projectSchema = (project: Project, image: string) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": absoluteUrl(`/projects/${project.slug}#project`),
  name: project.name,
  headline: project.tagline,
  description: project.summary,
  url: absoluteUrl(`/projects/${project.slug}`),
  image,
  genre: project.category,
  keywords: project.technologies.map((key) => getTech(key).name).join(", "),
  creator: { "@id": personId, "@type": "Person", name: SITE.name },
  ...(project.client && {
    sourceOrganization: { "@type": "Organization", name: project.client },
  }),
  ...(project.link && { sameAs: project.link }),
});

export const projectListSchema = (projects: Project[]) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Projects — ${SITE.name}`,
  url: absoluteUrl("/projects"),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/projects/${project.slug}`),
      name: project.name,
    })),
  },
});
