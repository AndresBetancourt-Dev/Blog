import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, MapPin } from "@phosphor-icons/react";
import { experiences } from "../../constants/experiences";
import { getProject } from "../../constants/projects";
import { getTech } from "../../constants/technologies";
import type { Experience as ExperienceModel } from "../../models/Experience";
import { formatDuration, formatYearMonth } from "../../utils/format";
import { fadeUp, revealViewport } from "../../utils/motion";
import CompanyMark from "../ui/CompanyMark";
import { Section, SectionHeader } from "../ui/Section";

const DateRange = ({ experience }: { experience: ExperienceModel }) => (
  <>
    <time dateTime={experience.start}>{formatYearMonth(experience.start)}</time>
    {" – "}
    {experience.end ? (
      <time dateTime={experience.end}>{formatYearMonth(experience.end)}</time>
    ) : (
      "Present"
    )}
  </>
);

const ExperienceItem = ({ experience }: { experience: ExperienceModel }) => {
  const current = !experience.end;
  const relatedProjects = (experience.projects ?? [])
    .map(getProject)
    .filter((project): project is NonNullable<typeof project> =>
      Boolean(project),
    );

  return (
    <motion.li
      variants={fadeUp()}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      className="relative grid gap-3 md:grid-cols-[11rem_1fr] md:gap-10"
    >
      {/* Desktop date column */}
      <div className="hidden pt-3 text-right md:block">
        <p className="text-sm font-semibold text-fg">
          <DateRange experience={experience} />
        </p>
        <p className="mt-1 text-xs text-muted" suppressHydrationWarning>
          {formatDuration(experience.start, experience.end)}
        </p>
      </div>

      <div className="relative pl-16">
        <CompanyMark
          name={experience.company}
          logo={experience.logo}
          brandColor={experience.brandColor}
          monogram={experience.monogram}
          className="absolute left-0 top-0 ring-4 ring-bg"
        />

        <article className="card p-5 transition-colors duration-300 hover:border-accent/40 sm:p-6">
          <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
            <div>
              <h3 className="font-display text-lg font-semibold text-fg sm:text-xl">
                {experience.title}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-fg/85">
                {experience.company}
                {experience.client && (
                  <span className="text-muted"> · for {experience.client}</span>
                )}
                {experience.via && (
                  <span className="text-muted"> · via {experience.via}</span>
                )}
              </p>
            </div>
            {current && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                />
                Current role
              </span>
            )}
          </header>

          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
            <li className="md:hidden">
              <DateRange experience={experience} /> ·{" "}
              <span suppressHydrationWarning>
                {formatDuration(experience.start, experience.end)}
              </span>
            </li>
            <li className="inline-flex items-center gap-1">
              <Briefcase size={14} aria-hidden="true" />
              {experience.employmentType}
            </li>
            <li className="inline-flex items-center gap-1">
              <MapPin size={14} aria-hidden="true" />
              {experience.location}
            </li>
          </ul>

          <ul className="mt-4 space-y-2.5">
            {experience.points.map((point) => (
              <li
                key={point}
                className="relative pl-5 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/70"
              >
                {point}
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Skills">
            {experience.skills.map((skill) => (
              <li key={skill} className="chip text-muted">
                {getTech(skill).name}
              </li>
            ))}
          </ul>

          {relatedProjects.length > 0 && (
            <div className="mt-5 border-t border-line pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Projects
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {relatedProjects.map((project) => (
                  <li key={project.slug}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group inline-flex min-h-[36px] items-center gap-1 rounded-full border border-line px-3 text-sm font-medium text-fg transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      {project.name}
                      <ArrowUpRight
                        size={14}
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </div>
    </motion.li>
  );
};

const Experience = () => (
  <Section id="work" className="bg-surface-2/40">
    <SectionHeader
      id="work"
      eyebrow="What I have done so far"
      title="Work experience"
      description="From teaching algorithms at university to leading features for Disney and building healthcare software at EPAM."
    />

    <ol className="relative mt-14 space-y-8 before:absolute before:bottom-6 before:left-6 before:top-6 before:w-px before:bg-gradient-to-b before:from-accent/60 before:via-line before:to-transparent md:before:left-[calc(11rem+2.5rem+1.5rem)]">
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </ol>
  </Section>
);

export default Experience;
