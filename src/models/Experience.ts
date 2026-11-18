import { StaticImageData } from "next/image";
import type { Icon } from "@phosphor-icons/react";
import type { TechKey } from "../constants/technologies";

export interface Experience {
  id: string;
  title: string;
  company: string;
  /** End client when the role was delivered through a consultancy. */
  client?: string;
  /** Partner/consultancy the role was contracted through. */
  via?: string;
  employmentType: "Full-time" | "Part-time" | "Self-employed" | "Contract";
  location: string;
  /** ISO year-month, e.g. "2024-12". */
  start: string;
  /** ISO year-month; omit for a current role. */
  end?: string;
  logo?: StaticImageData;
  /** Icon used when there is no company logo (e.g. freelance work). */
  icon?: Icon;
  /** Brand color used for the logo well / monogram fallback. */
  brandColor: string;
  monogram: string;
  points: string[];
  skills: TechKey[];
  /** Slugs of related projects in `constants/projects`. */
  projects?: string[];
}
