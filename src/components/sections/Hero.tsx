import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { experiences } from "../../constants/experiences";
import { projects } from "../../constants/projects";
import { SITE } from "../../constants/site";

const FIRST_ROLE_YEAR = 2020;

const Hero = () => {
  const years = new Date().getFullYear() - FIRST_ROLE_YEAR;
  const current = experiences[0];
  const industries = new Set(projects.map((project) => project.category)).size;

  const stats = [
    { value: `${years}+`, label: "years shipping software" },
    { value: `${projects.length}`, label: "projects shipped" },
    { value: `${industries}`, label: "industries" },
  ];

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#0e0a1c]"
    >
      <Image
        src="/herobg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Legibility scrim + fade into the page background (works in both themes) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-b from-transparent to-bg"
      />

      <div className="container-page pb-32 pt-28 sm:pt-32">
        <div className="max-w-3xl">
          <p
            className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md sm:text-sm"
            style={{ animationDelay: "60ms" }}
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgb(52_211_153/0.25)]"
            />
            {current.title} at {current.company}
          </p>

          <h1
            id="hero-title"
            className="mt-6 animate-fade-up font-display text-[2.75rem] font-bold leading-[1.02] tracking-tight text-white xs:text-6xl sm:text-7xl lg:text-8xl"
            style={{ animationDelay: "140ms" }}
          >
            {SITE.name.split(" ")[0]}{" "}
            <span className="gradient-text">{SITE.name.split(" ")[1]}</span>
          </h1>

          <p
            className="mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-white/85 sm:text-xl"
            style={{ animationDelay: "220ms" }}
          >
            I build fast, accessible web and mobile products with React,
            Next.js, TypeScript and Node.js — from Disney streaming platforms
            and Blackboard&apos;s LMS to banking and HIPAA-compliant healthcare
            apps.
          </p>

          <div
            className="mt-8 flex animate-fade-up flex-wrap items-center gap-3"
            style={{ animationDelay: "300ms" }}
          >
            <Link href="/projects" className="btn-primary">
              View projects
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </Link>
            <Link href="/#work" className="btn-on-media">
              Experience
            </Link>
            <a
              href={SITE.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="btn-on-media w-11 px-0"
            >
              <GithubLogo size={20} aria-hidden="true" />
            </a>
            {SITE.social.linkedin && (
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className="btn-on-media w-11 px-0"
              >
                <LinkedinLogo size={20} aria-hidden="true" />
              </a>
            )}
          </div>

          <dl
            className="mt-12 grid max-w-lg animate-fade-up grid-cols-3 gap-4 border-t border-white/15 pt-6"
            style={{ animationDelay: "380ms" }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse justify-end"
              >
                <dt className="mt-1 text-xs leading-snug text-white/70 sm:text-sm">
                  {stat.label}
                </dt>
                <dd
                  className="font-display text-2xl font-bold text-white sm:text-3xl"
                  suppressHydrationWarning
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <span className="flex h-12 w-7 justify-center rounded-full border-2 border-white/60 pt-2">
          <span className="h-2 w-2 animate-scroll-dot rounded-full bg-white" />
        </span>
      </a>
    </section>
  );
};

export default Hero;
