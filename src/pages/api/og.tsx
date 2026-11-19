import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const config = { runtime: "edge" };

const outfitRegular = fetch(
  new URL("../../assets/fonts/outfit-latin-400-normal.woff", import.meta.url),
).then((response) => response.arrayBuffer());
const outfitSemibold = fetch(
  new URL("../../assets/fonts/outfit-latin-600-normal.woff", import.meta.url),
).then((response) => response.arrayBuffer());

const clamp = (value: string | null, max: number, fallback: string) =>
  (value ?? fallback).slice(0, max);

/** Only this site's own optimized assets may be embedded (no open proxy). */
const resolveImage = (value: string | null, origin: string) => {
  if (!value || !/^\/_next\/static\/media\/[\w.-]+\.(png|jpe?g)$/i.test(value))
    return null;
  return new URL(value, origin).toString();
};

/**
 * Dynamic 1200×630 Open Graph image.
 * /api/og?title=…&subtitle=…&image=/_next/static/media/…png
 */
export default async function handler(request: NextRequest) {
  const { searchParams, origin, host } = new URL(request.url);
  const title = clamp(searchParams.get("title"), 80, "Andrés Betancourt");
  const subtitle = clamp(
    searchParams.get("subtitle"),
    120,
    "Senior Software Engineer",
  );
  const image = resolveImage(searchParams.get("image"), origin);
  const [regular, semibold] = await Promise.all([
    outfitRegular,
    outfitSemibold,
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          fontFamily: "Outfit",
          color: "#f3f1f8",
          backgroundColor: "#0e0a1c",
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(124,58,237,0.55), transparent 45%), radial-gradient(circle at 92% 96%, rgba(225,29,72,0.45), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px",
            width: image ? "56%" : "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                display: "flex",
                width: "60px",
                height: "60px",
                borderRadius: "16px",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#dc2626",
                fontSize: "28px",
                fontWeight: 600,
                color: "#fff",
              }}
            >
              AB
            </div>
            <div style={{ display: "flex", fontSize: "26px", opacity: 0.85 }}>
              Andrés Betancourt
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            <div
              style={{
                display: "flex",
                fontSize: image
                  ? title.length > 22
                    ? "56px"
                    : "70px"
                  : title.length > 32
                  ? "70px"
                  : "88px",
                fontWeight: 600,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              {title}
            </div>
            <div
              style={{ display: "flex", fontSize: "30px", color: "#fca5a5" }}
            >
              {subtitle}
            </div>
          </div>

          <div style={{ display: "flex", fontSize: "22px", color: "#b8b0c8" }}>
            {host}
          </div>
        </div>

        {image && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "44%",
              paddingRight: "56px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "380px",
                borderRadius: "22px",
                overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.18)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.55)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt=""
                width={460}
                height={380}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Outfit", data: regular, weight: 400, style: "normal" },
        { name: "Outfit", data: semibold, weight: 600, style: "normal" },
      ],
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=604800, immutable",
      },
    },
  );
}
