import type { GetServerSideProps } from "next";
import { projects } from "../constants/projects";
import { absoluteUrl } from "../constants/site";

const routes = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/projects", priority: "0.9", changefreq: "monthly" },
  ...projects.map((project) => ({
    path: `/projects/${project.slug}`,
    priority: "0.8",
    changefreq: "yearly",
  })),
];

const buildSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=604800",
  );
  res.write(buildSitemap());
  res.end();
  return { props: {} };
};

const Sitemap = () => null;
export default Sitemap;
