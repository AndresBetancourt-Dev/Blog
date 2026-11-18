import Link from "next/link";
import { ArrowRight, House } from "@phosphor-icons/react";
import { Seo } from "../components";

/** Hand-placed stars: [left %, top %, size px, delay s]. */
const STARS: [number, number, number, number][] = [
  [6, 18, 2, 0],
  [14, 62, 3, 1.2],
  [22, 30, 2, 2.4],
  [31, 80, 2, 0.6],
  [38, 12, 3, 1.8],
  [47, 48, 2, 3],
  [55, 22, 2, 0.9],
  [63, 70, 3, 2.1],
  [71, 14, 2, 1.5],
  [78, 52, 2, 0.3],
  [86, 28, 3, 2.7],
  [92, 74, 2, 1.1],
  [10, 88, 2, 2.2],
  [68, 90, 2, 0.8],
  [96, 8, 2, 1.9],
];

/**
 * Lightweight 404: an SVG planet with an orbiting moon over a CSS starfield.
 * Replaces the previous 29 MB 3D scene; all motion stops under reduced motion.
 */
const NotFoundPage = () => (
  <>
    <Seo
      title="Page not found"
      description="The page you're looking for doesn't exist or has moved."
      path="/404"
      noindex
    />
    <section className="relative isolate flex min-h-[100dvh] items-center overflow-hidden bg-[#0e0a1c] pb-16 pt-28">
      {/* Nebula + stars */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_55%_at_75%_40%,rgb(124_58_237/0.35),transparent),radial-gradient(35%_45%_at_15%_85%,rgb(225_29_72/0.22),transparent)]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {STARS.map(([left, top, size, delay]) => (
          <span
            key={`${left}-${top}`}
            className="absolute animate-twinkle rounded-full bg-white"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="eyebrow animate-fade-up">Error 404</p>
          <h1
            className="mt-4 animate-fade-up font-display text-5xl font-semibold leading-[1] tracking-[-0.03em] text-white sm:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Lost in space
          </h1>
          <p
            className="mt-5 max-w-md animate-fade-up text-lg leading-relaxed text-white/75"
            style={{ animationDelay: "160ms" }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has drifted
            out of orbit. Let&apos;s get you back on track.
          </p>
          <div
            className="mt-8 flex animate-fade-up flex-wrap gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/" className="btn-primary">
              <House size={18} aria-hidden="true" />
              Go home
            </Link>
            <Link href="/projects" className="btn-on-media">
              Browse projects
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto aspect-square w-full max-w-[22rem] animate-fade-up sm:max-w-md"
          style={{ animationDelay: "200ms" }}
        >
          {/* Orbit path + moon */}
          <div className="absolute inset-[4%] rounded-full border border-dashed border-white/15" />
          <div className="absolute inset-[4%] animate-orbit">
            <span className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-slate-100 to-slate-400 shadow-[0_0_24px_rgb(255_255_255/0.45)]" />
          </div>

          {/* Planet */}
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-[18%] animate-float drop-shadow-[0_30px_60px_rgb(124_58_237/0.45)]"
          >
            <defs>
              <radialGradient id="planet" cx="35%" cy="30%" r="75%">
                <stop offset="0%" stopColor="#f0abfc" />
                <stop offset="45%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#3b0764" />
              </radialGradient>
              <linearGradient id="ring" x1="0" x2="1">
                <stop offset="0%" stopColor="#fda4af" stopOpacity="0" />
                <stop offset="50%" stopColor="#fda4af" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fda4af" stopOpacity="0" />
              </linearGradient>
              <clipPath id="front">
                <rect x="0" y="100" width="200" height="100" />
              </clipPath>
            </defs>
            <ellipse
              cx="100"
              cy="100"
              rx="96"
              ry="22"
              fill="none"
              stroke="url(#ring)"
              strokeWidth="6"
            />
            <circle cx="100" cy="100" r="62" fill="url(#planet)" />
            <path
              d="M48 82c22 8 58 10 104-2M42 108c30 10 76 10 116-4"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.18"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <ellipse
              cx="100"
              cy="100"
              rx="96"
              ry="22"
              fill="none"
              stroke="url(#ring)"
              strokeWidth="6"
              clipPath="url(#front)"
            />
            <text
              x="100"
              y="112"
              textAnchor="middle"
              fontFamily="var(--font-heading)"
              fontSize="38"
              fontWeight="600"
              fill="#ffffff"
              fillOpacity="0.92"
            >
              404
            </text>
          </svg>
        </div>
      </div>
    </section>
  </>
);

export default NotFoundPage;
