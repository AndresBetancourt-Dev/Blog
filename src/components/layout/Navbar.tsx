import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { logo } from "../../assets";
import { navLinks } from "../../constants/navigation";
import { SITE } from "../../constants/site";
import { cn } from "../../utils/format";
import { spring } from "../../utils/motion";
import ThemePicker from "../ui/ThemePicker";
import { useScrollLock, useScrolled, useScrollSpy } from "./hooks";
import MenuToggle from "./MenuToggle";
import MobileMenu from "./MobileMenu";

const MENU_ID = "mobile-menu";
const SECTION_IDS = navLinks
  .map((link) => link.section)
  .filter((section): section is string => Boolean(section));

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const scrolled = useScrolled(24);

  const isHome = router.pathname === "/";
  const spyId = useScrollSpy(SECTION_IDS, isHome);
  const activeId = isHome
    ? spyId
    : router.pathname.startsWith("/projects")
    ? "projects"
    : null;

  /** Pages that open with a full-bleed image hero under the navbar. */
  const hasMediaHero =
    isHome ||
    router.pathname === "/projects/[slug]" ||
    router.pathname === "/404";
  /** Light-on-dark styling while floating over that hero image. */
  const onMedia = hasMediaHero && !scrolled && !open;
  const solid = scrolled && !open;

  const close = useCallback(() => setOpen(false), []);
  useScrollLock(open);

  // Close on navigation and when resizing up to the desktop layout.
  useEffect(() => {
    router.events.on("routeChangeStart", close);
    router.events.on("hashChangeStart", close);
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = (event: MediaQueryListEvent) => event.matches && close();
    media.addEventListener("change", onChange);
    return () => {
      router.events.off("routeChangeStart", close);
      router.events.off("hashChangeStart", close);
      media.removeEventListener("change", onChange);
    };
  }, [router.events, close]);

  return (
    <>
      <header
        className={cn("fixed inset-x-0 top-0", open ? "z-[70]" : "z-nav")}
      >
        {/* Glass layer fades in once the page scrolls. */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 border-b border-line/70 bg-bg/70 shadow-[0_8px_32px_-16px_rgb(var(--shadow)/0.25)] backdrop-blur-xl backdrop-saturate-150"
          initial={false}
          animate={{ opacity: solid ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <nav
          aria-label="Primary"
          className="container-page relative flex h-16 items-center justify-between gap-4 sm:h-20"
        >
          <Link
            href="/"
            aria-label={`${SITE.name} — home`}
            className={cn(
              "group flex items-center gap-3 rounded-full pr-2 font-display text-base font-semibold tracking-tight transition-colors",
              onMedia ? "text-white" : "text-fg",
            )}
            onClick={(event) => {
              if (isHome) {
                event.preventDefault();
                window.scrollTo({ top: 0 });
                router.replace("/", undefined, {
                  shallow: true,
                  scroll: false,
                });
              }
            }}
          >
            <Image
              src={logo}
              alt=""
              priority
              className="h-9 w-9 object-contain transition-transform duration-300 group-hover:-rotate-6 sm:h-10 sm:w-10"
            />
            <span className="hidden xs:inline">{SITE.name}</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = activeId === link.id;
              return (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative flex min-h-[40px] items-center rounded-full px-4 text-sm font-medium transition-colors duration-200",
                      onMedia
                        ? active
                          ? "text-white"
                          : "text-white/75 hover:text-white"
                        : active
                        ? "text-fg"
                        : "text-muted hover:text-fg",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        transition={spring}
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-0 rounded-full",
                          onMedia ? "bg-white/15" : "bg-fg/[0.07]",
                        )}
                      />
                    )}
                    <span className="relative">{link.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemePicker
              id="desktop"
              onMedia={onMedia}
              className="hidden md:inline-flex"
            />
            <MenuToggle
              ref={toggleRef}
              open={open}
              onToggle={() => setOpen((value) => !value)}
              onMedia={onMedia}
              controls={MENU_ID}
            />
          </div>
        </nav>
      </header>

      <MobileMenu
        id={MENU_ID}
        open={open}
        onClose={close}
        activeId={activeId}
        toggleRef={toggleRef}
      />
    </>
  );
};

export default Navbar;
