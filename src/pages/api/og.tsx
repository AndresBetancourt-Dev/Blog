import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const config = { runtime: "edge" };

const clamp = (value: string | null, max: number, fallback: string) =>
  (value ?? fallback).slice(0, max);

/** Dynamic 1200×630 Open Graph image: /api/og?title=…&subtitle=… */
export default function handler(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = clamp(searchParams.get("title"), 80, "Andrés Betancourt");
  const subtitle = clamp(
    searchParams.get("subtitle"),
    120,
    "Senior Software Engineer",
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#f3f1f8",
          backgroundColor: "#0e0a1c",
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(124,58,237,0.55), transparent 45%), radial-gradient(circle at 90% 95%, rgba(225,29,72,0.45), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#dc2626",
              fontSize: "30px",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            AB
          </div>
          <div style={{ display: "flex", fontSize: "28px", opacity: 0.85 }}>
            Andrés Betancourt · Portfolio
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 32 ? "68px" : "84px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", fontSize: "34px", color: "#c4b5fd" }}>
            {subtitle}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "14px",
            fontSize: "24px",
            color: "#b8b0c8",
          }}
        >
          React · Next.js · TypeScript · Node.js
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=604800, immutable",
      },
    },
  );
}
