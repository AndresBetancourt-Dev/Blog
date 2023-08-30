import { StaticImageData } from "next/image";

export interface Feedback {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: StaticImageData | string;
}
