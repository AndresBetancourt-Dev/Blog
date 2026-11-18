import Image from "next/image";
import type { Project } from "../../models/Project";
import { cn } from "../../utils/format";
import { categoryIcons } from "./categoryIcons";

interface ProjectCoverProps {
  project: Project;
  sizes: string;
  priority?: boolean;
  variant?: "card" | "hero";
  className?: string;
}

/**
 * Project artwork: the screenshot/logo when available, otherwise a generated
 * cover built from the project's accent colors so every card looks consistent.
 */
const ProjectCover = ({
  project,
  sizes,
  priority = false,
  variant = "card",
  className,
}: ProjectCoverProps) => {
  const {
    image,
    imageFit = "cover",
    imageBg,
    accent,
    name,
    category,
  } = project;
  const CategoryIcon = categoryIcons[category];

  if (image) {
    const contained = imageFit === "contain";
    return (
      <div
        className={cn("relative h-full w-full", className)}
        style={{ backgroundColor: imageBg }}
      >
        <Image
          src={image}
          alt={
            contained
              ? `${project.client ?? name} logo`
              : `Screenshot of ${name}`
          }
          fill
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          className={cn(
            "transition-transform duration-700 ease-out-expo",
            contained
              ? cn(
                  "object-contain",
                  variant === "hero" ? "p-16 sm:p-24" : "p-10",
                )
              : "object-cover object-top",
            variant === "card" && "group-hover:scale-[1.04]",
          )}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex h-full w-full items-end overflow-hidden",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(135deg, ${accent[0]}, ${accent[1]})`,
      }}
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgb(255 255 255 / 0.35) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage:
            "radial-gradient(ellipse at 70% 30%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 70% 30%, black 20%, transparent 75%)",
        }}
      />
      {/* Soft light blobs */}
      <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-black/20 blur-3xl" />

      <CategoryIcon
        weight="thin"
        className={cn(
          "absolute text-white/25 transition-transform duration-700 ease-out-expo",
          variant === "hero"
            ? "-right-6 -top-6 h-72 w-72 sm:h-96 sm:w-96"
            : "-right-4 -top-4 h-40 w-40 group-hover:rotate-6 group-hover:scale-105",
        )}
      />
      <div
        className={cn("relative", variant === "hero" ? "p-8 sm:p-12" : "p-5")}
      >
        <p
          className={cn(
            "font-display font-semibold leading-tight tracking-tight text-white",
            variant === "hero" ? "text-4xl sm:text-6xl" : "text-2xl",
          )}
        >
          {name}
        </p>
        {project.confidential && (
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-white/75">
            Under NDA
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCover;
