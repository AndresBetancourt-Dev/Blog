import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Buildings,
  CalendarBlank,
  CheckCircle,
  GithubLogo,
  LockSimple,
  UserCircle,
} from "@phosphor-icons/react";
import { ContactCta, Seo } from "../../components";
import ProjectCard from "../../components/projects/ProjectCard";
import ProjectCover from "../../components/projects/ProjectCover";
import { categoryIcons } from "../../components/projects/categoryIcons";
import { ogImageUrl } from "../../components/seo/Seo";
import { breadcrumbSchema, projectSchema } from "../../components/seo/schema";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import Reveal from "../../components/ui/Reveal";
import TechChip from "../../components/ui/TechChip";
import {
  getAdjacentProjects,
  getProject,
  getRelatedProjects,
  projects,
} from "../../constants/projects";
import { absoluteUrl } from "../../constants/site";
import type { Project } from "../../models/Project";
import { fadeUp, revealViewport, stagger } from "../../utils/motion";

interface ProjectPageProps {
  slug: string;
}

const MetaItem = ({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Buildings;
  label: string;
  value: string;
}) => (
  <div className="flex gap-3">
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-strong/10 text-accent">
      <Icon size={18} aria-hidden="true" />
    </span>
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </dt>
      <dd className="mt-0.5 text-sm font-medium text-fg">{value}</dd>
    </div>
  </div>
);

const AdjacentLink = ({
  project,
  direction,
}: {
  project: Project;
  direction: "previous" | "next";
}) => {
  const next = direction === "next";
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`card group flex min-h-[88px] items-center gap-4 p-5 transition-[transform,border-color,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card-hover ${
        next ? "flex-row-reverse text-right" : ""
      }`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent">
        {next ? (
          <ArrowRight size={18} aria-hidden="true" />
        ) : (
          <ArrowLeft size={18} aria-hidden="true" />
        )}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium uppercase tracking-[0.14em] text-muted">
          {next ? "Next project" : "Previous project"}
        </span>
        <span className="mt-0.5 block truncate font-display text-lg font-semibold text-fg">
          {project.name}
        </span>
      </span>
    </Link>
  );
};

const ProjectPage: NextPage<ProjectPageProps> = ({ slug }) => {
  const project = getProject(slug);
  if (!project) return null;

  const { previous, next } = getAdjacentProjects(slug);
  const related = getRelatedProjects(slug);
  const CategoryIcon = categoryIcons[project.category];
  const path = `/projects/${project.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.name, path },
  ];
  const socialImage = ogImageUrl(
    project.name,
    `${project.category} · ${project.client ?? project.company}`,
  );
  const coverImage = project.image
    ? absoluteUrl(project.image.src)
    : socialImage;

  return (
    <>
      <Seo
        title={`${project.name} — ${project.category} project`}
        description={project.summary}
        path={path}
        type="article"
        image={socialImage}
        imageAlt={`${project.name} — ${project.tagline}`}
        jsonLd={[breadcrumbSchema(crumbs), projectSchema(project, coverImage)]}
      />

      <article>
        <header className="relative isolate overflow-hidden pb-10 pt-28 sm:pb-14 sm:pt-36">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-25 dark:opacity-30"
            style={{
              backgroundImage: `radial-gradient(45% 60% at 10% 0%, ${project.accent[0]}, transparent), radial-gradient(40% 55% at 95% 5%, ${project.accent[1]}, transparent)`,
            }}
          />
          <div className="container-page">
            <Breadcrumbs items={crumbs} />

            {/* CSS animations: visible before hydration, so LCP isn't delayed. */}
            <div className="mt-8 max-w-4xl">
              <div className="flex animate-fade-up flex-wrap items-center gap-2">
                <Link
                  href={`/projects?category=${encodeURIComponent(
                    project.category,
                  )}`}
                  className="chip min-h-[32px] transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <CategoryIcon size={14} aria-hidden="true" />
                  {project.category}
                </Link>
                {project.confidential && (
                  <span className="chip min-h-[32px]">
                    <LockSimple size={14} aria-hidden="true" />
                    Under NDA
                  </span>
                )}
              </div>

              <h1
                className="mt-5 animate-fade-up font-display text-4xl font-bold tracking-tight text-fg sm:text-6xl"
                style={{ animationDelay: "70ms" }}
              >
                {project.name}
              </h1>
              <p
                className="lead mt-4 max-w-2xl animate-fade-up"
                style={{ animationDelay: "140ms" }}
              >
                {project.tagline}
              </p>

              {(project.link || project.sourceCode) && (
                <div
                  className="mt-8 flex animate-fade-up flex-wrap gap-3"
                  style={{ animationDelay: "210ms" }}
                >
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Visit live site
                      <ArrowUpRight
                        size={18}
                        weight="bold"
                        aria-hidden="true"
                      />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  )}
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      <GithubLogo size={18} aria-hidden="true" />
                      Source code
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  )}
                </div>
              )}

              <dl
                className="mt-10 grid animate-fade-up gap-5 border-t border-line pt-8 sm:grid-cols-3"
                style={{ animationDelay: "280ms" }}
              >
                <MetaItem icon={UserCircle} label="Role" value={project.role} />
                <MetaItem
                  icon={Buildings}
                  label={project.client ? "Client" : "Company"}
                  value={
                    project.client
                      ? `${project.client} · via ${project.company}`
                      : project.company
                  }
                />
                <MetaItem
                  icon={CalendarBlank}
                  label="Period"
                  value={project.period}
                />
              </dl>
            </div>
          </div>
        </header>

        <div className="container-page">
          <div
            className="relative aspect-[16/10] animate-fade-up overflow-hidden rounded-3xl border border-line shadow-card-hover sm:aspect-[16/8]"
            style={{ animationDelay: "200ms" }}
          >
            <ProjectCover
              project={project}
              variant="hero"
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
            />
          </div>
        </div>

        <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
          <div className="min-w-0 space-y-14">
            <Reveal>
              <section aria-labelledby="overview-title">
                <h2
                  id="overview-title"
                  className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl"
                >
                  Overview
                </h2>
                <div className="mt-5 max-w-prose space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                  {project.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </Reveal>

            <section aria-labelledby="contributions-title">
              <Reveal>
                <h2
                  id="contributions-title"
                  className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl"
                >
                  What I did
                </h2>
              </Reveal>
              <motion.ul
                variants={stagger(0.06)}
                initial="hidden"
                whileInView="show"
                viewport={revealViewport}
                className="mt-6 grid gap-3"
              >
                {project.contributions.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp(0, 16)}
                    className="card flex gap-3 p-4 sm:p-5"
                  >
                    <CheckCircle
                      size={22}
                      weight="duotone"
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <span className="text-sm leading-relaxed text-fg/90 sm:text-base">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={0.1}>
              <section aria-labelledby="stack-title" className="card p-6">
                <h2
                  id="stack-title"
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-muted"
                >
                  Tech stack
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <TechChip tech={tech} size="md" />
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
            {project.confidential && (
              <Reveal delay={0.15}>
                <p className="card flex gap-3 p-5 text-sm leading-relaxed text-muted">
                  <LockSimple
                    size={20}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  Screenshots and client details are omitted to respect a
                  non-disclosure agreement.
                </p>
              </Reveal>
            )}
          </aside>
        </div>

        <nav
          aria-label="More projects"
          className="container-page grid gap-4 sm:grid-cols-2"
        >
          <AdjacentLink project={previous} direction="previous" />
          <AdjacentLink project={next} direction="next" />
        </nav>

        {related.length > 0 && (
          <section
            aria-labelledby="related-title"
            className="container-page pt-20 sm:pt-28"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Keep exploring</p>
                <h2
                  id="related-title"
                  className="mt-2 font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl"
                >
                  Related projects
                </h2>
              </div>
              <Link href="/projects" className="btn-ghost">
                All projects
                <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </Link>
            </div>
            <motion.ul
              variants={stagger(0.07)}
              initial="hidden"
              whileInView="show"
              viewport={revealViewport}
              className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {related.map((item) => (
                <li key={item.slug} className="h-full">
                  <ProjectCard project={item} />
                </li>
              ))}
            </motion.ul>
          </section>
        )}
      </article>

      <ContactCta title="Have a project like this in mind?" />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({
  params,
}) => {
  const slug = String(params?.slug ?? "");
  if (!getProject(slug)) return { notFound: true };
  return { props: { slug } };
};

export default ProjectPage;
