import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/format";
import { fadeUp, revealViewport, stagger } from "../../utils/motion";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, children, className }: SectionProps) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className={cn("relative scroll-mt-24 py-20 sm:py-28", className)}
  >
    <div className="container-page">{children}</div>
  </section>
);

interface SectionHeaderProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
}

export const SectionHeader = ({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeaderProps) => (
  <motion.div
    variants={stagger(0.08)}
    initial="hidden"
    whileInView="show"
    viewport={revealViewport}
    className={cn(
      "flex flex-col gap-6",
      Boolean(action) && "md:flex-row md:items-end md:justify-between",
      align === "center" && "items-center text-center",
    )}
  >
    <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
      <motion.p variants={fadeUp()} className="eyebrow">
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp()}
        id={`${id}-title`}
        className="section-title"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp()} className="lead mt-4">
          {description}
        </motion.p>
      )}
    </div>
    {action && <motion.div variants={fadeUp()}>{action}</motion.div>}
  </motion.div>
);
