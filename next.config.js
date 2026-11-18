const { PHASE_PRODUCTION_BUILD } = require("next/constants");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

/** Production domain used when no explicit URL is configured. */
const DEFAULT_SITE_URL = "https://andresbetancourt-dev.vercel.app";

/**
 * Canonical site URL used for SEO (canonical links, Open Graph, sitemap).
 * Priority: NEXT_PUBLIC_SITE_URL → Vercel production domain →
 * DEFAULT_SITE_URL for production builds → localhost for development.
 */
const resolveSiteUrl = (phase) => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return phase === PHASE_PRODUCTION_BUILD
    ? DEFAULT_SITE_URL
    : "http://localhost:3000";
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

module.exports = (phase) => {
  const config = withBundleAnalyzer({
    ...nextConfig,
    env: {
      NEXT_PUBLIC_SITE_URL: resolveSiteUrl(phase).replace(/\/$/, ""),
    },
  });
  return phase === PHASE_PRODUCTION_BUILD ? withPWA(config) : config;
};
