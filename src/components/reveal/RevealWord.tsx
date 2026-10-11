"use client";

import { type MotionValue, useTransform } from "motion/react";
import * as m from "motion/react-m";
import type { ReactNode } from "react";

type RevealWordProps = {
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
  children: ReactNode;
};

// One word that lights up and settles into place while the scroll passes its
// slice of the sentence. Reduced motion shows it lit and in place.
export function RevealWord({ progress, range, className = "", children }: RevealWordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, ["0.25em", "0em"]);

  return (
    <m.span
      style={{ opacity, y }}
      className={`inline-block motion-reduce:transform-none! motion-reduce:opacity-100! ${className}`}
    >
      {children}
    </m.span>
  );
}
