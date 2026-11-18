import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { easeOut } from "../utils/motion";

const pathOf = (asPath: string) => asPath.split(/[?#]/)[0];

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const mainRef = useRef<HTMLElement>(null);
  const pageKey = pathOf(router.asPath);
  // Skip the enter animation on the first (server-rendered) page so content
  // is visible before hydration and LCP is not delayed.
  const hydrated = useRef(false);
  useEffect(() => {
    hydrated.current = true;
  }, []);

  // Move focus to the new page's content after client-side navigation so
  // screen-reader and keyboard users land in the right place.
  useEffect(() => {
    let previous = pathOf(router.asPath);
    const onDone = (url: string) => {
      const next = pathOf(url);
      if (next !== previous && !url.includes("#")) {
        mainRef.current?.focus({ preventScroll: true });
      }
      previous = next;
    };
    router.events.on("routeChangeComplete", onDone);
    return () => router.events.off("routeChangeComplete", onDone);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.events]);

  return (
    <div id="top" className="relative flex min-h-[100dvh] flex-col">
      <a
        href="#main"
        className="btn-primary fixed left-4 top-4 z-[100] -translate-y-24 focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <motion.main
        key={pageKey}
        id="main"
        ref={mainRef}
        tabIndex={-1}
        className="flex-1 outline-none"
        initial={hydrated.current ? { opacity: 0, y: 12 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOut }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
