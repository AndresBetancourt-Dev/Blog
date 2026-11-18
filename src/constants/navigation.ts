export interface NavLink {
  id: string;
  title: string;
  href: string;
  /** Section id on the home page used for scroll-spy. */
  section?: string;
}

export const navLinks: NavLink[] = [
  { id: "about", title: "About", href: "/#about", section: "about" },
  { id: "projects", title: "Projects", href: "/projects", section: "projects" },
  { id: "work", title: "Experience", href: "/#work", section: "work" },
  { id: "skills", title: "Skills", href: "/#skills", section: "skills" },
];
