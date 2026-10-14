import { useInView, useReducedMotion } from "motion/react";
import { type RefObject, useEffect, useState } from "react";

// Steps through `count` items every `interval` ms while the element is on
// screen. Off screen, under reduced motion, and on the server it stays on the
// first item, so the static view is a complete one. isPlaying lets the caller
// replay the first item's animation when it comes into view.
export function useCycle(ref: RefObject<Element | null>, count: number, interval: number) {
  const isInView = useInView(ref, { amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const isPlaying = isInView && shouldReduceMotion === false;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => setIndex((current) => (current + 1) % count), interval);
    return () => clearInterval(timer);
  }, [isPlaying, count, interval]);

  return { index: isPlaying ? index : 0, isPlaying };
}
