"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import { AnchorScroll } from "./AnchorScroll";

const lenisOptions = { lerp: 0.1, smoothWheel: true, syncTouch: false, autoRaf: true };

// Rendered beside the page instead of around it, so skipping Lenis for
// reduced motion never remounts the page content.
export function LenisProvider() {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion !== false) return null;

  return (
    <ReactLenis root options={lenisOptions}>
      <AnchorScroll />
    </ReactLenis>
  );
}
