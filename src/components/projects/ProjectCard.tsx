import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import type { Project } from "../../models/Project";
import { fadeUp } from "../../utils/motion";
import { getTech } from "../../constants/technologies";
import TechChip from "../ui/TechChip";
import ProjectCover from "./ProjectCover";
import { categoryIcons } from "./categoryIcons";

const MAX_CHIPS = 4;

interface ProjectCardProps {
  project: Project;
  headingLevel?: "h2" | "h3";
}

/** Equal-height project card. The whole card is one link (stretched link). */
const ProjectCard = ({ project, headingLevel = "h3" }: ProjectCardProps) => {
  const Heading = headingLevel;
  const CategoryIcon = categoryIcons[project.category];
  const visible = project.technologies.slice(0, MAX_CHIPS);
  const hidden = project.technologies.length - visible.length;

  return (
    <motion.article
      variants={fadeUp()}
      className="card group relative flex h-full flex-col overflow-hidden transition-[transform,box-shadow,border-color] duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover [&:has(:focus-visible)]:ring-2 [&:has(:focus-visible)]:ring-accent [&:has(:focus-visible)]:ring-offset-2 [&:has(:focus-visible)]:ring-offset-bg"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        <ProjectCover
          project={project}
          sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md">
          <CategoryIcon size={14} aria-hidden="true" />
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-medium text-muted">
          {project.client ?? project.company} · {project.period}
        </p>
        <div className="mt-1.5 flex items-start justify-between gap-3">
          <Heading className="font-display text-xl font-semibold leading-snug text-fg">
            <Link
              href={`/projects/${project.slug}`}
              className="outline-none after:absolute after:inset-0 after:content-['']"
            >
              {project.name}
            </Link>
          </Heading>
          <ArrowUpRight
            size={20}
            aria-hidden="true"
            className="mt-1 shrink-0 text-muted transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        <ul
          className="mt-auto flex flex-wrap gap-1.5 pt-5"
          aria-label="Technologies"
        >
          {visible.map((tech) => (
            <li key={tech}>
              <TechChip tech={tech} />
            </li>
          ))}
          {hidden > 0 && (
            <li>
              <span className="chip text-muted">
                +{hidden} more
                <span className="sr-only">
                  :{" "}
                  {project.technologies
                    .slice(MAX_CHIPS)
                    .map((tech) => getTech(tech).name)
                    .join(", ")}
                </span>
              </span>
            </li>
          )}
        </ul>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
