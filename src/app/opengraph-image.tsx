import { ImageResponse } from "next/og";
import home from "@/content/home.json";
import site from "@/content/site.json";

export const alt = site.seo.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// next/og renders outside the browser, so CSS variables are unavailable;
// these mirror the tokens in globals.css.
const colors = {
  bg: "#000000",
  amber: "#ffcd7d",
  blue: "#3b82f6",
  text: "#ffffff",
  textSecondary: "#9ba9c4",
};

const lines = [
  { top: 560, rotate: -5, opacity: 0.9 },
  { top: 585, rotate: -4, opacity: 0.55 },
  { top: 610, rotate: -3, opacity: 0.3 },
];

const frameStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "0 88px",
  backgroundColor: colors.bg,
  backgroundImage: `radial-gradient(ellipse 60% 55% at 22% 100%, ${colors.amber}55, transparent 70%), radial-gradient(ellipse 55% 60% at 85% 85%, ${colors.blue}66, transparent 72%)`,
  position: "relative",
} as const;

function lineStyle(line: (typeof lines)[number]) {
  return {
    position: "absolute",
    left: -100,
    top: line.top,
    width: 1500,
    height: 3,
    opacity: line.opacity,
    transform: `rotate(${line.rotate}deg)`,
    background: `linear-gradient(90deg, transparent, ${colors.amber}, ${colors.blue}, transparent)`,
  } as const;
}

export default function OpengraphImage() {
  return new ImageResponse(
    <div style={frameStyle}>
      {lines.map((line) => (
        <div key={line.top} style={lineStyle(line)} />
      ))}
      <div style={{ fontSize: 28, letterSpacing: 6, color: colors.text, fontWeight: 700 }}>
        {site.name}
      </div>
      <div
        style={{ marginTop: 32, fontSize: 64, lineHeight: 1.15, color: colors.text, maxWidth: 900 }}
      >
        {home.hero.headline}
      </div>
      <div style={{ marginTop: 28, fontSize: 30, color: colors.textSecondary }}>
        {site.seo.ogTagline}
      </div>
    </div>,
    size,
  );
}
