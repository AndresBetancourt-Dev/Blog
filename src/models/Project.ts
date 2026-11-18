import { StaticImageData } from "next/image";
import type { TechKey } from "../constants/technologies";

export type ProjectCategory =
  | "Healthcare"
  | "Streaming"
  | "EdTech"
  | "Banking"
  | "E-commerce"
  | "Web";

export interface Project {
  slug: string;
  name: string;
  /** One-line hook shown under the title on the detail page. */
  tagline: string;
  /** Short description used on cards and in meta descriptions (≤ 160 chars). */
  summary: string;
  /** Long-form paragraphs for the detail page. */
  overview: string[];
  /** What I personally built or owned. */
  contributions: string[];
  role: string;
  company: string;
  client?: string;
  /** Human-readable period, e.g. "Sep 2023 – Nov 2024". */
  period: string;
  category: ProjectCategory;
  technologies: TechKey[];
  image?: StaticImageData;
  /** How the cover image should fit its frame. Logos look best contained. */
  imageFit?: "cover" | "contain";
  /** Background behind contained images. */
  imageBg?: string;
  /** Two-stop gradient used by the generated cover when there is no image. */
  accent: [string, string];
  /** Frame used for the screenshot in the project header. */
  frame?: "browser" | "device";
  /** Extra screens shown in a gallery on the project page. */
  gallery?: { image: StaticImageData; caption: string }[];
  link?: string;
  /** Label for the primary link button. Defaults to "Visit live site". */
  linkLabel?: string;
  sourceCode?: string;
  featured?: boolean;
  confidential?: boolean;
}
