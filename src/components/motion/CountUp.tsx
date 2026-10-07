"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

const durationMs = 1500;
const easeOut = (progress: number) => 1 - (1 - progress) ** 3;

// The server renders the final value, so crawlers and no-JS visitors never see 0.
// Below the fold it is reset to 0 on the client, then counts up once in view.
// A plain rAF loop instead of motion's animate() keeps the animation engine
// out of the initial bundle.
export function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || shouldReduceMotion !== false) return;
    if (!isInView) {
      element.textContent = "0";
      return;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      element.textContent = String(Math.round(easeOut(progress) * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, shouldReduceMotion, value]);

  return <span ref={ref}>{value}</span>;
}
