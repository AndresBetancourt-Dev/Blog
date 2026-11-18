import Link from "next/link";
import {
  ArrowUp,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { navLinks } from "../../constants/navigation";
import { SITE } from "../../constants/site";

const Footer = () => {
  const socials = [
    { href: SITE.social.github, label: "GitHub", icon: GithubLogo },
    ...(SITE.social.linkedin
      ? [{ href: SITE.social.linkedin, label: "LinkedIn", icon: LinkedinLogo }]
      : []),
    ...(SITE.social.email
      ? [
          {
            href: `mailto:${SITE.social.email}`,
            label: "Email",
            icon: EnvelopeSimple,
          },
        ]
      : []),
  ];

  return (
    <footer className="relative border-t border-line bg-surface/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold text-fg">
            {SITE.name}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            {SITE.role} at {SITE.currentCompany}. Building fast, accessible
            products for the web and mobile.
          </p>
          <p className="mt-3 text-sm text-muted">{SITE.location}</p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Explore
          </p>
          <ul className="mt-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-[32px] items-center text-sm text-fg/80 transition-colors hover:text-accent"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Connect
          </p>
          <ul className="mt-4 space-y-1">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[32px] items-center gap-2 text-sm text-fg/80 transition-colors hover:text-accent"
                >
                  <Icon size={18} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-6 text-xs text-muted sm:flex-row sm:items-center">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} {SITE.name}. Built with Next.js,
            Tailwind CSS and Framer Motion.
          </p>
          <a
            href="#top"
            className="inline-flex min-h-[32px] items-center gap-1.5 rounded-full transition-colors hover:text-fg"
          >
            <ArrowUp size={14} aria-hidden="true" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
