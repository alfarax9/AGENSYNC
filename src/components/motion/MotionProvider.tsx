"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

// "user" drops transform animations under prefers-reduced-motion and keeps
// opacity, so movement becomes a short fade instead.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
