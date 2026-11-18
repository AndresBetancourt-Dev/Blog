import type { NextPage } from "next";
import { ContactCta, Seo } from "../../components";
import ProjectGrid from "../../components/projects/ProjectGrid";
import {
  breadcrumbSchema,
  projectListSchema,
} from "../../components/seo/schema";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import { projects } from "../../constants/projects";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
];

const ProjectsPage: NextPage = () => (
  <>
    <Seo
      title="Projects"
      path="/projects"
      description={`Case studies from ${projects.length} projects — healthcare, streaming for Disney, Blackboard's LMS, banking and e-commerce — built with React, Next.js, TypeScript and Node.js.`}
      jsonLd={[breadcrumbSchema(crumbs), projectListSchema(projects)]}
    />

    <header className="relative isolate overflow-hidden pb-10 pt-28 sm:pb-14 sm:pt-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_15%_0%,rgb(var(--accent-strong)/0.18),transparent),radial-gradient(40%_50%_at_95%_10%,rgb(225_29_72/0.12),transparent)]"
      />
      <div className="container-page">
        <Breadcrumbs items={crumbs} />
        <p className="eyebrow mt-8 animate-fade-up">Portfolio</p>
        <h1
          className="mt-2 animate-fade-up font-display text-4xl font-semibold tracking-tight text-fg sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          Projects
        </h1>
        <p
          className="lead mt-4 max-w-2xl animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          A selection of products I&apos;ve helped build — from enterprise
          platforms for Disney, Blackboard and major banks to freelance and
          personal work. Filter by industry or open a project for the details.
        </p>
      </div>
    </header>

    <section aria-label="Project list" className="pb-8">
      <div className="container-page">
        <ProjectGrid />
      </div>
    </section>

    <ContactCta />
  </>
);

export default ProjectsPage;
