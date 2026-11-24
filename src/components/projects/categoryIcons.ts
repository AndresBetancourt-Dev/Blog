import {
  Bank,
  FilmStrip,
  Globe,
  GraduationCap,
  Heartbeat,
  ShoppingCart,
  Ticket,
  type Icon,
} from "@phosphor-icons/react";
import type { ProjectCategory } from "../../models/Project";

export const categoryIcons: Record<ProjectCategory, Icon> = {
  Healthcare: Heartbeat,
  Streaming: FilmStrip,
  EdTech: GraduationCap,
  Banking: Bank,
  "E-commerce": ShoppingCart,
  Ticketing: Ticket,
  Web: Globe,
};
