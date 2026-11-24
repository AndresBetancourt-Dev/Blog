import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Buildings,
  CalendarBlank,
  GithubLogo,
  LockSimple,
  UserCircle,
  type Icon,
} from "@phosphor-icons/react";
import type { Project } from "../../models/Project";
import Breadcrumbs from "../ui/Breadcrumbs";
import { categoryIcons } from "./categoryIcons";

interface ProjectHeroProps {
  project: Project;
  crumbs: { name: string; path: string }[];
}

const mediaChip =
  "inline-flex min-h-[32px] items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 text-xs font-medium text-white backdrop-blur-md";

const MetaItem = ({
  icon: IconComponent,
  label,
  value,
}: {
  icon: Icon;
  label: string;
  value: string;
}) => (
  <div className="flex gap-3">
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white backdrop-blur-md">
      <IconComponent size={18} aria-hidden="true" />
    </span>
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/60 sm:text-xs">
        {label}
      </dt>
      <dd className="mt-0.5 text-sm font-medium text-white">{value}</dd>
    </div>
  </div>
);

/**
 * Full-bleed project header. The project's own artwork becomes the backdrop
 * (with a gentle zoom-in and scroll parallax), so every case study opens with
 * a different mood. Logos and image-less projects fall back to a branded
 * gradient with the logo floating on the side.
 */
const ProjectHero = ({ project, crumbs }: ProjectHeroProps) => {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  const CategoryIcon = categoryIcons[project.category];
  const photo = Boolean(project.image) && project.imageFit !== "contain";
  const logo = Boolean(project.image) && project.imageFit === "contain";
  const device = project.frame === "device";
  const plain = project.frame === "plain";

  return (
    <header
      ref={ref}
      className="relative isolate flex min-h-[70svh] items-end overflow-hidden bg-[#0e0a1c]"
    >
      {/* Backdrop */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{ y: reduceMotion ? 0 : parallax }}
      >
        {photo && project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            loading="eager"
            sizes="640px"
            quality={50}
            placeholder="blur"
            className="animate-hero-zoom scale-110 object-cover blur-2xl saturate-150"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})`,
            }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgb(255 255 255 / 0.35) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            {!logo && (
              <CategoryIcon
                weight="thin"
                className="absolute -right-10 top-10 h-[28rem] w-[28rem] text-white/15"
              />
            )}
          </div>
        )}
      </motion.div>

      {/* Legibility scrims, then a fade into the page background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-20 bg-gradient-to-b from-transparent to-bg"
      />

      {/* Content — CSS animations so it's visible before hydration (LCP). */}
      <div className="container-page relative pb-24 pt-28 sm:pb-28 sm:pt-32">
        <Breadcrumbs items={crumbs} onMedia />

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="max-w-3xl">
            <div className="flex animate-fade-up flex-wrap items-center gap-2">
              <Link
                href={`/projects?category=${encodeURIComponent(
                  project.category,
                )}`}
                className={`${mediaChip} transition-colors hover:bg-white/20`}
              >
                <CategoryIcon size={14} aria-hidden="true" />
                {project.category}
              </Link>
              {project.confidential && (
                <span className={mediaChip}>
                  <LockSimple size={14} aria-hidden="true" />
                  Under NDA
                </span>
              )}
            </div>

            <h1
              className={`mt-5 animate-fade-up font-display font-semibold leading-[1] tracking-[-0.03em] text-white ${
                project.name.length > 22
                  ? "text-4xl sm:text-6xl"
                  : "text-5xl sm:text-7xl"
              }`}
              style={{ animationDelay: "70ms" }}
            >
              {project.name}
            </h1>
            <p
              className="mt-5 max-w-2xl animate-fade-up text-lg leading-relaxed text-white/80 sm:text-xl"
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
                    {project.linkLabel ?? "Visit live site"}
                    <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-on-media"
                  >
                    <GithubLogo size={18} aria-hidden="true" />
                    Source code
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {photo && project.image && (
            <div
              className="animate-fade-up [perspective:1600px]"
              style={{ animationDelay: "200ms" }}
            >
              <div
                className={`overflow-hidden shadow-[0_40px_100px_-30px_rgb(0_0_0/0.75)] transition-transform duration-700 ease-out-expo lg:[transform:rotateY(-9deg)_rotateX(3deg)] lg:hover:[transform:rotateY(0deg)_rotateX(0deg)] ${
                  device
                    ? "rounded-[1.75rem] border-[10px] border-neutral-900 bg-neutral-900 ring-1 ring-white/15"
                    : plain
                    ? "rounded-2xl ring-1 ring-white/20"
                    : "rounded-2xl border border-white/15 bg-black/40 ring-1 ring-black/20"
                }`}
              >
                {!device && !plain && (
                  <div
                    aria-hidden="true"
                    className="flex h-7 items-center gap-1.5 border-b border-white/10 bg-white/5 px-3"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  </div>
                )}
                <Image
                  src={project.image}
                  alt={
                    plain
                      ? `${project.name} — example artwork`
                      : `Screenshot of ${project.name}`
                  }
                  priority
                  placeholder="blur"
                  sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
                  className={`h-auto w-full ${
                    device ? "rounded-[1.1rem]" : ""
                  }`}
                />
              </div>
            </div>
          )}

          {logo && project.image && (
            <div
              className="flex animate-fade-up justify-start lg:justify-center"
              style={{ animationDelay: "200ms" }}
            >
              <div
                className="relative h-40 w-40 rotate-3 overflow-hidden rounded-[2rem] border border-white/20 shadow-[0_40px_80px_-24px_rgb(0_0_0/0.6)] sm:h-60 sm:w-60"
                style={{ backgroundColor: project.imageBg }}
              >
                <Image
                  src={project.image}
                  alt={`${project.client ?? project.name} logo`}
                  fill
                  sizes="240px"
                  className="object-contain p-8 sm:p-12"
                />
              </div>
            </div>
          )}
        </div>

        <dl
          className="mt-12 grid max-w-4xl animate-fade-up gap-5 border-t border-white/15 pt-8 sm:grid-cols-3"
          style={{ animationDelay: "280ms" }}
        >
          <MetaItem icon={UserCircle} label="Role" value={project.role} />
          <MetaItem
            icon={Buildings}
            label={project.client ? "Client" : "Company"}
            value={
              project.client && project.company !== "Freelance"
                ? `${project.client} · via ${project.company}`
                : project.client ?? project.company
            }
          />
          <MetaItem
            icon={CalendarBlank}
            label="Period"
            value={project.period}
          />
        </dl>
      </div>
    </header>
  );
};

export default ProjectHero;
