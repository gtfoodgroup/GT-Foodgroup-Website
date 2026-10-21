import { ImageResponse } from "next/og";

export const alt = "GT Food Group — Established in New York";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#142C25",
          color: "#FAF8F3",
          fontFamily: "serif",
        }}
      >
        <svg width="144" height="96" viewBox="0 0 48 32" fill="none">
          <g stroke="#C9A24A" strokeWidth="1.6" strokeLinecap="round">
            <path d="M6 26 C 16 24, 30 18, 40 6" />
            <path d="M14 24 C 13 19, 15 15, 20 12 C 21 17, 19 21, 14 24 Z" fill="#C9A24A" fillOpacity="0.25" />
            <path d="M22 20 C 22 15, 25 11, 30 9 C 30 14, 27 18, 22 20 Z" fill="#C9A24A" fillOpacity="0.25" />
            <path d="M30 15 C 31 11, 34 8, 38 7 C 37 11, 34 14, 30 15 Z" fill="#C9A24A" fillOpacity="0.25" />
          </g>
        </svg>
        <div style={{ marginTop: 36, fontSize: 84, fontWeight: 700, letterSpacing: 4 }}>GT FOOD GROUP</div>
        <div style={{ marginTop: 12, fontSize: 26, letterSpacing: 8, textTransform: "uppercase", color: "#C9A24A" }}>
          Established in New York
        </div>
        <div style={{ marginTop: 48, fontSize: 38, lineHeight: 1.3, maxWidth: 900 }}>
          Familiar food. Thoughtfully prepared. Clinically rigorous.
        </div>
      </div>
    ),
    size,
  );
}
