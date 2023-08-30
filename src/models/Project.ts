import { StaticImageData } from "next/image";
import { Tag } from "./Tag";

export interface Project {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: StaticImageData;
  source_code_link: string;
}
