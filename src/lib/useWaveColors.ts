import { useEffect, useState } from "react";

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

// Safari has no requestIdleCallback; a timeout still defers past first paint.
function whenIdle(callback: () => void) {
  if ("requestIdleCallback" in window) {
    const handle = window.requestIdleCallback(callback, { timeout: 2000 });
    return () => window.cancelIdleCallback(handle);
  }
  const handle = setTimeout(callback, 200);
  return () => clearTimeout(handle);
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
