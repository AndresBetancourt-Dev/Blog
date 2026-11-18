import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { projectCategories, projects } from "../../constants/projects";
import type { ProjectCategory } from "../../models/Project";
import { cn } from "../../utils/format";
import { easeOut, spring } from "../../utils/motion";
import ProjectCard from "./ProjectCard";
import { categoryIcons } from "./categoryIcons";

type Filter = ProjectCategory | "All";

const isCategory = (value: unknown): value is ProjectCategory =>
  typeof value === "string" &&
  projectCategories.includes(value as ProjectCategory);

/** Filterable project grid. The active filter is mirrored in `?category=`. */
const ProjectGrid = () => {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>("All");

  // Restore the filter from the URL (deep links / back navigation).
  useEffect(() => {
    if (!router.isReady) return;
    const { category } = router.query;
    setFilter(isCategory(category) ? category : "All");
  }, [router.isReady, router.query]);

  const select = (next: Filter) => {
    setFilter(next);
    router.replace(
      {
        pathname: router.pathname,
        query: next === "All" ? {} : { category: next },
      },
      undefined,
      { shallow: true, scroll: false },
    );
  };

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  const options: { value: Filter; count: number }[] = [
    { value: "All", count: projects.length },
    ...projectCategories.map((category) => ({
      value: category,
      count: projects.filter((project) => project.category === category).length,
    })),
  ];

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by industry"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {options.map(({ value, count }) => {
          const active = filter === value;
          const Icon = value === "All" ? null : categoryIcons[value];
          return (
            <button
              key={value}
              type="button"
              aria-pressed={active}
              onClick={() => select(value)}
              className={cn(
                "relative inline-flex min-h-[44px] shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-200",
                active
                  ? "border-transparent text-on-accent"
                  : "border-line bg-surface text-muted hover:border-accent/40 hover:text-fg",
              )}
            >
              {active && (
                <motion.span
                  layoutId="project-filter-pill"
                  transition={spring}
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-accent-strong shadow-glow"
                />
              )}
              {Icon && (
                <Icon size={16} aria-hidden="true" className="relative" />
              )}
              <span className="relative">{value}</span>
              <span
                className={cn(
                  "relative rounded-full px-1.5 text-xs tabular-nums",
                  active ? "bg-white/20" : "bg-surface-2",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {filter === "All" ? "" : ` in ${filter}`}
      </p>

      <LayoutGroup>
        <motion.ul
          layout
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) => (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: easeOut },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  transition: { duration: 0.2 },
                }}
                className="h-full"
              >
                <motion.div initial="show" animate="show" className="h-full">
                  <ProjectCard project={project} headingLevel="h2" />
                </motion.div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </div>
  );
};

export default ProjectGrid;
