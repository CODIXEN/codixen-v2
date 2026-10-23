import { ImageResponse } from "next/og";

export const alt =
  "CODIXEN — custom software, SaaS and AI products built by a founder-led studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 78% 18%, rgba(212,245,60,0.22), transparent 45%), #0a2218",
          color: "#eaf3ef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#d4f53c",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 6 }}>
            CODIXEN
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 84,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: -2,
            }}
          >
            <span style={{ marginRight: 22 }}>We build software that</span>
            <span
              style={{
                background: "#d4f53c",
                color: "#0a2218",
                padding: "0 14px",
                fontStyle: "italic",
              }}
            >
              actually ships
            </span>
          </div>
          <div style={{ fontSize: 32, color: "#9fb6ab" }}>
            Custom web apps · SaaS platforms · AI-powered products
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#9fb6ab",
          }}
        >
          <span>codixen.com</span>
          <span style={{ color: "#d4f53c" }}>Book a free discovery call →</span>
        </div>
      </div>
    ),
    size
  );
}
