import { StaticImageData } from "next/image";
import { Technology } from "./Technology";

export interface Project {
  index: number;
  name: string;
  description: string;
  technologies: Technology[];
  image: StaticImageData;
  source_code_link?: string;
  link?: string;
}
