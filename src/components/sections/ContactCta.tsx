import Link from "next/link";
import {
  ArrowRight,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { SITE } from "../../constants/site";
import Reveal from "../ui/Reveal";

interface ContactCtaProps {
  id?: string;
  title?: string;
}

const ContactCta = ({
  id = "contact",
  title = "Let's build something together",
}: ContactCtaProps) => {
  const primary = SITE.social.email
    ? {
        href: `mailto:${SITE.social.email}`,
        label: "Email me",
        icon: EnvelopeSimple,
      }
    : SITE.social.linkedin
    ? {
        href: SITE.social.linkedin,
        label: "Connect on LinkedIn",
        icon: LinkedinLogo,
      }
    : {
        href: SITE.social.github,
        label: "Find me on GitHub",
        icon: GithubLogo,
      };
  const PrimaryIcon = primary.icon;
  const external = !primary.href.startsWith("mailto");

  return (
    <section aria-labelledby={`${id}-title`} className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="relative isolate overflow-hidden rounded-3xl border border-line bg-[#140e26] px-6 py-14 text-center shadow-card-hover sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_20%_0%,rgb(124_58_237/0.45),transparent),radial-gradient(50%_70%_at_90%_100%,rgb(225_29_72/0.35),transparent)]"
          />
          <p className="font-mono text-xs font-medium text-violet-200 sm:text-sm">
            Open to new opportunities
          </p>
          <h2
            id={`${id}-title`}
            className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Whether it&apos;s a new product, a migration or a performance and
            accessibility push, I&apos;d love to hear about it.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={primary.href}
              target={external ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <PrimaryIcon size={18} aria-hidden="true" />
              {primary.label}
              {external && (
                <span className="sr-only">(opens in a new tab)</span>
              )}
            </a>
            {SITE.social.email && SITE.social.linkedin ? (
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-on-media"
              >
                <LinkedinLogo size={18} aria-hidden="true" />
                Connect on LinkedIn
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <Link href="/projects" className="btn-on-media">
                Browse projects
                <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </Link>
            )}
          </div>
          {SITE.social.email && (
            <p className="mt-6 text-sm text-white/60">
              or write to{" "}
              <a
                href={`mailto:${SITE.social.email}`}
                className="font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                {SITE.social.email}
              </a>
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default ContactCta;
