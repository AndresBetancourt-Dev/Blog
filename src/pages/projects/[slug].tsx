import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  LockSimple,
} from "@phosphor-icons/react";
import { ContactCta, Seo } from "../../components";
import ProjectCard from "../../components/projects/ProjectCard";
import ProjectHero from "../../components/projects/ProjectHero";
import { ogImageUrl } from "../../components/seo/Seo";
import { breadcrumbSchema, projectSchema } from "../../components/seo/schema";
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
        <span className="label block">
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
  const path = `/projects/${project.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.name, path },
  ];
  const socialImage = ogImageUrl(
    project.name,
    `${project.category} · ${(project.client ?? project.company).replace(
      `${project.name} · `,
      "",
    )}`,
    project.image && project.imageFit !== "contain"
      ? project.image.src
      : undefined,
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
        <ProjectHero project={project} crumbs={crumbs} />

        <div className="container-page grid gap-12 pb-16 pt-8 sm:pb-20 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
          <div className="min-w-0 space-y-14">
            <Reveal>
              <section aria-labelledby="overview-title">
                <h2
                  id="overview-title"
                  className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
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
                  className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
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
                <h2 id="stack-title" className="label">
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

        {project.gallery && project.gallery.length > 0 && (
          <section
            aria-labelledby="screens-title"
            className="container-page pb-16 sm:pb-20"
          >
            <Reveal>
              <h2
                id="screens-title"
                className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
              >
                Screens
              </h2>
            </Reveal>
            <motion.ul
              variants={stagger(0.07)}
              initial="hidden"
              whileInView="show"
              viewport={revealViewport}
              className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5"
            >
              {project.gallery.map(({ image, caption }) => (
                <motion.li key={caption} variants={fadeUp(0, 20)}>
                  <figure>
                    <div className="overflow-hidden rounded-[1.5rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-card-hover ring-1 ring-line">
                      <Image
                        src={image}
                        alt={`${project.name}: ${caption}`}
                        placeholder="blur"
                        sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 45vw"
                        className="h-auto w-full rounded-[1.1rem]"
                      />
                    </div>
                    <figcaption className="mt-3 text-center text-xs leading-snug text-muted sm:text-sm">
                      {caption}
                    </figcaption>
                  </figure>
                </motion.li>
              ))}
            </motion.ul>
          </section>
        )}

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
                  className="mt-2 font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
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
