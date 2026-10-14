import { animate, useInView, useMotionValue, useReducedMotion } from "motion/react";
import { type RefObject, useEffect } from "react";

type LoopOptions = {
  /** Seconds before the first lap, so neighbouring loops do not move in step. */
  delay?: number;
};

// A value that climbs from 0 to its target, holds there, and drops back, over
// and over while the element is on screen. Off screen, under reduced motion,
// and on the server it sits at the target, so the static frame is the true one.
export function useLoopValue(
  ref: RefObject<Element | null>,
  target: number,
  options: LoopOptions = {},
) {
  const isInView = useInView(ref, { amount: 0.4 });
  const shouldReduceMotion = useReducedMotion();
  const value = useMotionValue(target);

  useEffect(() => {
    if (!isInView || shouldReduceMotion !== false) {
      value.set(target);
      return;
    }
    const controls = animate(value, [0, target, target, 0], {
      duration: 5,
      times: [0, 0.45, 0.9, 1],
      ease: "easeInOut",
      repeat: Infinity,
      delay: options.delay ?? 0,
    });
    return () => controls.stop();
  }, [isInView, shouldReduceMotion, target, value, options.delay]);

  return value;
}
