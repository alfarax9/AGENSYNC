import { ImageResponse } from "next/og";
import site from "@/content/site.json";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Monogram until the real logo exists. Hex values mirror --color-accent and --color-text.
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
        background: "#2563eb",
        color: "#ffffff",
        fontSize: 22,
        fontWeight: 700,
      }}
    >
      {site.name.charAt(0)}
    </div>,
    size,
  );
}
