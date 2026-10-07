"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

// The server renders the final value, so crawlers and no-JS visitors never see 0.
// Below the fold it is reset to 0 on the client, then counts up once in view.
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
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        element.textContent = String(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [isInView, shouldReduceMotion, value]);

  return <span ref={ref}>{value}</span>;
}
