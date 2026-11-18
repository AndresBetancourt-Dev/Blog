import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { featuredProjects, projects } from "../../constants/projects";
import { revealViewport, stagger } from "../../utils/motion";
import ProjectCard from "../projects/ProjectCard";
import { Section, SectionHeader } from "../ui/Section";

const FeaturedProjects = () => (
  <Section id="projects">
    <SectionHeader
      id="projects"
      eyebrow="My work"
      title="Featured projects"
      description="Real-world products across healthcare, streaming, education, banking and e-commerce. Open any project for the full story, my role and the stack behind it."
      action={
        <Link href="/projects" className="btn-ghost hidden md:inline-flex">
          All {projects.length} projects
          <ArrowRight size={16} weight="bold" aria-hidden="true" />
        </Link>
      }
    />

    <motion.ul
      variants={stagger(0.07)}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      {featuredProjects.map((project) => (
        <li key={project.slug} className="h-full">
          <ProjectCard project={project} />
        </li>
      ))}
    </motion.ul>

    <div className="mt-10 flex justify-center md:hidden">
      <Link href="/projects" className="btn-ghost">
        View all {projects.length} projects
        <ArrowRight size={16} weight="bold" aria-hidden="true" />
      </Link>
    </div>
  </Section>
);

export default FeaturedProjects;
