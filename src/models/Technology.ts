import { StaticImageData } from "next/image";

export type TechCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Data"
  | "Cloud & DevOps"
  | "CMS & E-commerce"
  | "Tooling";

export interface Technology {
  name: string;
  category: TechCategory;
  icon?: StaticImageData;
  /** Dark artwork that needs a light backing to stay visible in dark mode. */
  darkArtwork?: boolean;
}
