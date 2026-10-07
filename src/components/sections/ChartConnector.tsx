"use client";

import { motion } from "motion/react";
import { lineDraw } from "@/components/motion/variants";

const lineHeight = 48;

// The line draws once; while its handoff is active, a signal travels down it
// every three seconds. Reduced motion hides the signal in CSS rather than in
// render, so server and client markup always match.
export function ChartConnector({ isActive }: { isActive: boolean }) {
  return (
    <span className="relative flex h-12 w-2 justify-center">
      <motion.span
        variants={lineDraw}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h-full w-px origin-top bg-text-tertiary"
      />
      {isActive && (
        <motion.span
          className="absolute top-0 size-2 rounded-full bg-accent-glow motion-reduce:hidden"
          animate={{ y: [0, lineHeight], opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
        />
      )}
    </span>
  );
}
