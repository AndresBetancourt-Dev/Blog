import { RefObject, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { navLinks } from "../../constants/navigation";
import { SITE } from "../../constants/site";
import { cn } from "../../utils/format";
import { easeIn, easeOut } from "../../utils/motion";
import ThemePicker from "../ui/ThemePicker";

interface MobileMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
  activeId: string | null;
  toggleRef: RefObject<HTMLButtonElement>;
}

const PANEL_INSET = 12;
const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const MobileMenu = ({
  id,
  open,
  onClose,
  activeId,
  toggleRef,
}: MobileMenuProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const originRef = useRef({ x: 0, y: 0 });

  // Grow the panel out of the toggle button. Measured during render so the
  // very first frame of the enter animation already starts at the button.
  if (open && toggleRef.current) {
    const rect = toggleRef.current.getBoundingClientRect();
    originRef.current = {
      x: rect.left + rect.width / 2 - PANEL_INSET,
      y: rect.top + rect.height / 2 - PANEL_INSET,
    };
  }
  const origin = originRef.current;

  // Escape to close, focus trap across the toggle + panel, restore focus.
  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusables = [
        ...(toggle ? [toggle] : []),
        ...Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
        ),
      ];
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const firstLink = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    }, 80);

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(firstLink);
      document.removeEventListener("keydown", onKeyDown);
      toggle?.focus({ preventScroll: true });
    };
  }, [open, onClose, toggleRef]);

  const closed = `circle(20px at ${origin.x}px ${origin.y}px)`;
  const expanded = `circle(1400px at ${origin.x}px ${origin.y}px)`;

  const panelMotion = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
      }
    : {
        initial: { clipPath: closed },
        animate: {
          clipPath: expanded,
          transition: { duration: 0.6, ease: easeOut },
        },
        exit: {
          clipPath: closed,
          transition: { duration: 0.38, ease: easeIn },
        },
      };

  const listVariants = {
    hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.14 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.45, ease: easeOut },
    },
  };

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
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="menu-backdrop"
            aria-hidden="true"
            onClick={onClose}
            className="fixed inset-0 z-overlay bg-bg/50 md:hidden"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(16px)",
              transition: { duration: 0.35, ease: easeOut },
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
              transition: { duration: 0.25, ease: easeIn },
            }}
          />
          <motion.div
            key="menu-panel"
            id={id}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-x-3 top-3 z-menu max-h-[calc(100dvh-24px)] overflow-y-auto overscroll-contain rounded-3xl border border-line bg-surface/95 shadow-card-hover backdrop-blur-2xl md:hidden"
            {...panelMotion}
          >
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="px-4 pb-5 pt-20 sm:pt-24"
            >
              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, index) => {
                    const active = activeId === link.id;
                    return (
                      <motion.li key={link.id} variants={itemVariants}>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "group flex min-h-[56px] items-center justify-between rounded-2xl px-3 py-2 font-display text-2xl font-semibold transition-colors duration-200 hover:bg-surface-2",
                            active ? "text-accent" : "text-fg",
                          )}
                        >
                          <span className="flex items-baseline gap-3">
                            <span className="font-mono text-xs font-medium tabular-nums text-muted">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            {link.title}
                          </span>
                          <ArrowRight
                            size={20}
                            aria-hidden="true"
                            className="text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <motion.div
                variants={itemVariants}
                className="mt-5 border-t border-line pt-5"
              >
                <p className="label mb-2 px-1">Appearance</p>
                <ThemePicker id="mobile" showLabels className="w-full" />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-4 grid grid-cols-2 gap-2"
              >
                {socials.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="btn-ghost w-full"
                  >
                    <Icon size={18} aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
