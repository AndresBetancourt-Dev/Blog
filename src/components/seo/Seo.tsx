import Head from "next/head";
import { SITE, absoluteUrl } from "../../constants/site";

type JsonLd = Record<string, unknown>;

interface SeoProps {
  /** Page title without the site suffix. Omit on the home page. */
  title?: string;
  description?: string;
  /** Path of the page, used for the canonical URL. */
  path?: string;
  /** Absolute or root-relative social image. Defaults to a generated OG image. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  keywords?: string[];
  jsonLd?: JsonLd | JsonLd[];
}

export const ogImageUrl = (title: string, subtitle?: string) => {
  const params = new URLSearchParams({ title });
  if (subtitle) params.set("subtitle", subtitle);
  return absoluteUrl(`/api/og?${params.toString()}`);
};

const Seo = ({
  title,
  description = SITE.description,
  path = "/",
  image,
  imageAlt,
  type = "website",
  noindex = false,
  keywords = [...SITE.keywords],
  jsonLd,
}: SeoProps) => {
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.title;
  const canonical = absoluteUrl(path);
  const socialImage = image
    ? image.startsWith("http")
      ? image
      : absoluteUrl(image)
    : ogImageUrl(title ?? SITE.name, title ? SITE.name : SITE.role);
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title key="title">{fullTitle}</title>
      <meta key="description" name="description" content={description} />
      <meta key="keywords" name="keywords" content={keywords.join(", ")} />
      <meta key="author" name="author" content={SITE.name} />
      <meta
        key="robots"
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1"
        }
      />
      {!noindex && <link key="canonical" rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta key="og:type" property="og:type" content={type} />
      <meta key="og:site_name" property="og:site_name" content={SITE.name} />
      <meta key="og:locale" property="og:locale" content={SITE.locale} />
      <meta key="og:url" property="og:url" content={canonical} />
      <meta key="og:title" property="og:title" content={fullTitle} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:image" property="og:image" content={socialImage} />
      <meta key="og:image:width" property="og:image:width" content="1200" />
      <meta key="og:image:height" property="og:image:height" content="630" />
      <meta
        key="og:image:alt"
        property="og:image:alt"
        content={imageAlt ?? fullTitle}
      />

      {/* Twitter / X */}
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:title" name="twitter:title" content={fullTitle} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description}
      />
      <meta key="twitter:image" name="twitter:image" content={socialImage} />

      {schemas.map((schema, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </Head>
  );
};

export default Seo;
