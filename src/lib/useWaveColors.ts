import { useEffect, useState } from "react";
import { whenIdle } from "./whenIdle";

const gradientTokens = ["--color-highlight-to", "--color-wave-mid", "--color-accent-glow"];

function supportsWebGL() {
  try {
    const context = document.createElement("canvas").getContext("webgl");
    context?.getExtension("WEBGL_lose_context")?.loseContext();
    return Boolean(context);
  } catch {
    return false;
  }
}

// Returns null until the browser is idle and WebGL is confirmed, so three.js
// never competes with the headline. Colors come from the CSS tokens, not copies.
export function useWaveColors() {
  const [colors, setColors] = useState<string[] | null>(null);

  useEffect(
    () =>
      whenIdle(() => {
        if (!supportsWebGL()) return;
        const styles = getComputedStyle(document.documentElement);
        setColors(gradientTokens.map((token) => styles.getPropertyValue(token).trim()));
      }),
    [],
  );

  return colors;
}
