import React, { FC } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { browser, github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import {
  fadeInAsProps,
  textVariantAsProps,
} from "../utils/motion";
import { Project } from "../models/Project";
import Image from "next/image";

interface ProjectCardProps extends Project {}

const ProjectCard: FC<ProjectCardProps> = ({
  index,
  name,
  description,
  technologies,
  image,
  source_code_link,
  link,
}) => {
  return (
    <motion.div className="w-full h-auto" {...fadeInAsProps("up", "spring", index * 0.5, 0.75)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl w-full h-auto">
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={github}
                  alt="Source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
            {link && (
              <div
                onClick={() => window.open(link, "_blank")}
                className="bg-blue-600 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={browser}
                  alt="Webpage"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="project-content">
          <h3 className="text-white font-bold text-[24px] pt-2">{name}</h3>
          <p className="mt-2 text-white text-[14px] pb-2">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <div
              onClick={() => window.open(link, "_blank")}
              className="w-8 h-8 rounded-full flex justify-center items-center"
              key={`${name}${tech.name}`}
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.section {...textVariantAsProps}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.section>

      <div className="w-full flex">
        <motion.p
          {...fadeInAsProps("", "", 0.1, 1)}
          className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {[...projects].slice(0,6).map((project, index) => (
          <ProjectCard
            key={`project-${project.name}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
