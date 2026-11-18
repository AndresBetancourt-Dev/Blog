import { motion } from "framer-motion";
import {
  Browsers,
  CloudArrowUp,
  DeviceMobile,
  HardDrives,
  type Icon,
} from "@phosphor-icons/react";
import { fadeUp, revealViewport, stagger } from "../../utils/motion";
import Reveal from "../ui/Reveal";
import { Section, SectionHeader } from "../ui/Section";

const services: { title: string; description: string; icon: Icon }[] = [
  {
    title: "Frontend Engineering",
    description:
      "React, Next.js and TypeScript interfaces that are fast, accessible and easy to evolve.",
    icon: Browsers,
  },
  {
    title: "Backend & APIs",
    description:
      "Node.js, NestJS and Express services, from video pipelines to secure data handling.",
    icon: HardDrives,
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform React Native apps that share logic and design with the web.",
    icon: DeviceMobile,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Docker, Azure and AWS deployments with performance and compliance in mind.",
    icon: CloudArrowUp,
  },
];

const About = () => (
  <Section id="about">
    <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      <div>
        <SectionHeader id="about" eyebrow="Introduction" title="Overview" />
        <Reveal className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            I&apos;m a Senior Software Engineer at EPAM Systems with 6+ years of
            experience turning complex requirements into fast, accessible and
            scalable products.
          </p>
          <p>
            I&apos;ve shipped streaming experiences for The Walt Disney Company
            (ABC.com and DisneyNOW), learning tools for Blackboard, banking
            platforms for Santander Perú and Banistmo, and today I work on
            Polyphonic, Johnson &amp; Johnson MedTech&apos;s digital ecosystem
            for surgery.
          </p>
          <p>
            I care about clean architecture, performance and accessibility — and
            I enjoy mentoring other developers along the way. Let&apos;s build
            something great together.
          </p>
        </Reveal>
      </div>

      <motion.ul
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        className="grid gap-4 sm:grid-cols-2"
      >
        {services.map(({ title, description, icon: Icon }) => (
          <motion.li
            key={title}
            variants={fadeUp()}
            className="group rounded-2xl bg-gradient-to-br from-indigo-500/70 via-fuchsia-500/50 to-rose-500/60 p-px shadow-card"
          >
            <div className="flex h-full gap-4 rounded-[15px] bg-surface p-5 transition-colors duration-300 group-hover:bg-surface-2 sm:flex-col sm:gap-0 sm:p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-strong/10 text-accent">
                <Icon size={24} weight="duotone" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-fg sm:mt-5">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted sm:mt-2">
                  {description}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </Section>
);

export default About;
