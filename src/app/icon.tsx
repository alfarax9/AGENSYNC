import { ImageResponse } from "next/og";
import site from "@/content/site.json";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Monogram until the real logo exists: black on the duo gradient. Hex values
// mirror --color-accent-glow, --color-amber and --color-bg.
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundImage: "linear-gradient(277deg, #3b82f6, #ffcd7d)",
        color: "#000000",
        fontSize: 22,
        fontWeight: 700,
      }}
    >
      {site.name.charAt(0)}
    </div>,
    size,
  );
}
