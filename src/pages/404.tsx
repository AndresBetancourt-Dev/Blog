import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, House } from "@phosphor-icons/react";
import { Seo } from "../components";

// The 3D scene is heavy — load it on the client only, after the text renders.
const ComputersCanvas = dynamic(
  () => import("../components/canvas/Computers"),
  { ssr: false },
);

const NotFoundPage = () => (
  <>
    <Seo
      title="Page not found"
      description="The page you're looking for doesn't exist or has moved."
      path="/404"
      noindex
    />
    <section className="relative isolate flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden pt-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_30%,rgb(var(--accent-strong)/0.2),transparent)]"
      />
      <div className="container-page relative z-10 text-center">
        <p className="eyebrow animate-fade-up">Error 404</p>
        <h1
          className="mt-3 animate-fade-up font-display text-4xl font-bold tracking-tight text-fg sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          Lost in space
        </h1>
        <p
          className="lead mx-auto mt-4 max-w-md animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>
        <div
          className="mt-8 flex animate-fade-up flex-wrap justify-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <Link href="/" className="btn-primary">
            <House size={18} aria-hidden="true" />
            Go home
          </Link>
          <Link href="/projects" className="btn-ghost">
            Browse projects
            <ArrowRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="relative mt-6 h-[320px] w-full max-w-4xl sm:h-[420px]"
      >
        <ComputersCanvas />
      </div>
    </section>
  </>
);

export default NotFoundPage;
