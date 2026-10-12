"use client";

import { useInView, useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";
import { type ComponentProps, useRef } from "react";
import { FadeInWhenReady } from "@/components/motion/FadeInWhenReady";
import { useWaveColors } from "@/lib/useWaveColors";

const FloatingLines = dynamic(() => import("@/components/vendor/react-bits/FloatingLines"), {
  ssr: false,
});

const waveSettings: ComponentProps<typeof FloatingLines> = {
  enabledWaves: ["top", "middle", "bottom"],
  lineCount: 8,
  lineDistance: 8,
  animationSpeed: 1,
  bendRadius: 8,
  bendStrength: -2,
  interactive: false,
  // FadeInWhenReady blends the whole layer with the page, so the canvas itself must not.
  mixBlendMode: "normal",
};

// The static depth gradient is always there: before three.js loads, without
// WebGL, and under reduced motion. The waves fade in over it once their canvas
// has drawn, and are unmounted while the hero is off screen, because the vendor
// code renders every frame regardless. The bottom fade hands the hero over to
// the page background without a hard edge.
export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const shouldReduceMotion = useReducedMotion();
  const colors = useWaveColors();
  const shouldRenderWaves = colors && isInView && shouldReduceMotion === false;

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute inset-0 -z-10 bg-radial from-depth-to via-depth-from to-bg"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      {shouldRenderWaves && (
        <FadeInWhenReady>
          <FloatingLines linesGradient={colors} {...waveSettings} />
        </FadeInWhenReady>
      )}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent to-bg" />
    </div>
  );
}
