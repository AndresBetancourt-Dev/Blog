# Andrés Betancourt — Portfolio

Personal portfolio of Andrés Betancourt, Senior Software Engineer. It showcases professional experience, case studies for each project and the technologies behind them.

**Live:** https://andresbetancourt-dev.vercel.app

## Features

- **Case studies** — every project gets a statically generated page at `/projects/[slug]` with an image-driven header, overview, contributions, tech stack, screen gallery and related projects.
- **Filterable project index** at `/projects`, with the active filter kept in the URL (`?category=Banking`).
- **Experience timeline** with company logos, durations and links to the related projects.
- **Dark theme by default**, with a Light / Dark / System picker and a circular reveal transition (View Transitions API).
- **Animated mobile menu** — blurred backdrop, circular expand, focus trap, Escape to close and scroll lock.
- **SEO** — per-page titles, descriptions and canonical URLs, Open Graph/Twitter cards, JSON-LD (Person, WebSite, BreadcrumbList, CreativeWork, CollectionPage), dynamic share images, `sitemap.xml` and `robots.txt`.
- **Accessibility** — skip link, visible focus states, semantic landmarks, focus moved to content on navigation and `prefers-reduced-motion` support.
- **PWA** support through `@ducanh2912/next-pwa`.

## Tech stack

| Area      | Tools                                              |
| --------- | -------------------------------------------------- |
| Framework | Next.js 15 (Pages Router), React 18, TypeScript 5  |
| Styling   | Tailwind CSS 3 with CSS-variable design tokens     |
| Motion    | Framer Motion 11, CSS keyframes                    |
| Theming   | next-themes                                        |
| Icons     | Phosphor Icons                                     |
| Fonts     | Outfit, Figtree and JetBrains Mono via `next/font` |
| Quality   | ESLint 9 (flat config), Prettier, Husky            |
| Hosting   | Vercel                                             |

## Getting started

Requirements: Node.js 20.9 or newer (see `.nvmrc`) and npm.

```bash
npm install
cp .env.example .env.local   # optional — sensible defaults are built in
npm run dev                  # http://localhost:3000
```

### Scripts

| Script              | Description                  |
| ------------------- | ---------------------------- |
| `npm run dev`       | Start the development server |
| `npm run build`     | Create a production build    |
| `npm run start`     | Serve the production build   |
| `npm run lint`      | Lint with ESLint             |
| `npm run typecheck` | Type-check with TypeScript   |
| `npm run prettier`  | Format the codebase          |

Git hooks: `pre-commit` formats and lints, `pre-push` runs a production build.

## Configuration

All variables are public (`NEXT_PUBLIC_*`) and optional — see [`.env.example`](.env.example). On Vercel, add them under **Project → Settings → Environment Variables**.

| Variable                    | Purpose                                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`      | Canonical URL for SEO. Falls back to Vercel's production domain, then `https://andresbetancourt-dev.vercel.app`. |
| `NEXT_PUBLIC_LINKEDIN_URL`  | LinkedIn profile link. Set to `none` to hide it.                                                                 |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact email. Set to `none` to hide it.                                                                  |
| `ANALYZE`                   | Set to `true` to open the bundle analyzer after a build.                                                         |

## Editing content

Content lives in plain TypeScript files in `src/constants/`:

| File              | What it holds                                          |
| ----------------- | ------------------------------------------------------ |
| `site.ts`         | Name, role, SEO description, keywords and social links |
| `projects.ts`     | Projects and case-study content                        |
| `experiences.ts`  | Work experience timeline                               |
| `technologies.ts` | Skills, their categories and logos                     |
| `navigation.ts`   | Navigation links                                       |

**Add a project:** put its screenshot in `src/assets/projects/`, export it from `src/assets/index.ts` and add an entry to `projects.ts`. The case-study page, project card, sitemap entry and share image are generated automatically.

**Add a skill:** put its logo in `src/assets/tech/`, export it from `src/assets/index.ts` and add it to `technologies.ts`. Set `darkArtwork: true` for dark logos that need a light backing in dark mode.

## Project structure

```
src/
├── assets/          # Images, logos and fonts
├── components/
│   ├── layout/      # Navbar, mobile menu, footer
│   ├── projects/    # Project card, cover, grid and case-study header
│   ├── sections/    # Home page sections
│   ├── seo/         # <Seo> component and JSON-LD helpers
│   └── ui/          # Shared primitives (Section, Reveal, ThemePicker, …)
├── constants/       # Site content (see "Editing content")
├── layout/          # App shell (skip link, page transition, focus handling)
├── models/          # TypeScript types for the content
├── pages/           # Routes, plus sitemap.xml, robots.txt and /api/og
├── styles/          # Global CSS and design tokens
└── utils/           # Motion tokens and formatting helpers
```

## Credits

- Technology logos: [Devicon](https://devicon.dev) (MIT), [Simple Icons](https://simpleicons.org) (CC0) and Wikimedia Commons (public domain). All trademarks belong to their owners.
- Outfit font: [SIL Open Font License](src/assets/fonts/OFL-Outfit.txt).
