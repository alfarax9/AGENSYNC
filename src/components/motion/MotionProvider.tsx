"use client";

import { LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

// The animation engine loads after first paint instead of in the initial
// bundle, which keeps about 24 KB of gzipped JavaScript off the critical path.
const loadFeatures = () => import("./motionFeatures").then((module) => module.default);

// "user" drops transform animations under prefers-reduced-motion and keeps
// opacity, so movement becomes a short fade instead. "strict" makes any
// stray full `motion.*` component throw, so the lazy split cannot silently regress.
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
