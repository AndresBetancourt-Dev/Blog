import React, { FC } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: StaticImageData;
}

const ServiceCard: FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt className="w-full sm:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-r from-indigo-500 via-pink-600 to-fuchsia-600 p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-dark-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.section variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.section>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a skilled software developer with experience in React, TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, Next.js and Express.js. 
        I&apos;m a quick learner, innovator and  do my best to collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to
        life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
