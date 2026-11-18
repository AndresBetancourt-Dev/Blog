import { motion } from "framer-motion";
import { techByCategory } from "../../constants/technologies";
import { fadeUp, revealViewport, stagger } from "../../utils/motion";
import TechChip from "../ui/TechChip";
import { Section, SectionHeader } from "../ui/Section";

const Skills = () => (
  <Section id="skills">
    <SectionHeader
      id="skills"
      eyebrow="Toolbox"
      title="Skills & technologies"
      description="The languages, frameworks and platforms I use to take products from idea to production."
    />

    {/* CSS columns stack cards of different heights without gaps. */}
    <motion.div
      variants={stagger(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      className="mt-12 gap-5 sm:columns-2 lg:columns-3"
    >
      {techByCategory.map(({ category, items }) => (
        <motion.section
          key={category}
          variants={fadeUp()}
          aria-labelledby={`skills-${category}`}
          className="card mb-5 break-inside-avoid p-5 sm:p-6"
        >
          <h3 id={`skills-${category}`} className="label">
            {category}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {items.map((item) => (
              <li key={item.key}>
                <TechChip tech={item.key} size="md" />
              </li>
            ))}
          </ul>
        </motion.section>
      ))}
    </motion.div>
  </Section>
);

export default Skills;
