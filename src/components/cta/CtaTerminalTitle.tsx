"use client";

import { type MotionValue, useTransform } from "motion/react";
import * as m from "motion/react-m";
import home from "@/content/home.json";

// The window title, with a hairline under it that fills as the boot runs.
export function CtaTerminalTitle({ progress }: { progress: MotionValue<number> }) {
  const bootScale = useTransform(progress, [0.4, 0.96], [0, 1]);

  return (
    <p className="relative border-b border-border px-5 py-2.5 text-xs text-text-tertiary">
      {home.finalCta.terminalTitle}
      <m.span
        style={{ scaleX: bootScale }}
        className="absolute inset-x-0 -bottom-px h-px origin-left bg-accent-glow motion-reduce:transform-none!"
      />
    </p>
  );
}
