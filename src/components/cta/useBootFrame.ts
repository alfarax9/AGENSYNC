import { type MotionValue, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

// Where the boot sequence sits on the panel's scroll progress (0 → 1): the
// command types out first, then each output line lands, and the last one
// arrives just as the panel lies flat.
const typingRange = [0.4, 0.7];
const lineThresholds = [0.78, 0.87, 0.96];

export type BootFrame = { typedCount: number; visibleLines: number };

function frameAt(progress: number, commandLength: number): BootFrame {
  const [start, end] = typingRange;
  const typed = Math.round(((progress - start) / (end - start)) * commandLength);
  return {
    typedCount: Math.min(commandLength, Math.max(0, typed)),
    visibleLines: lineThresholds.filter((threshold) => progress >= threshold).length,
  };
}

// The server and the first client render show the finished boot, so the
// markup matches and reduced motion simply never rewinds it. Scrolling back
// up rewinds the boot too, because the frame follows the scroll both ways.
export function useBootFrame(progress: MotionValue<number>, commandLength: number) {
  const shouldReduceMotion = useReducedMotion();
  const [frame, setFrame] = useState<BootFrame>({
    typedCount: commandLength,
    visibleLines: lineThresholds.length,
  });

  useEffect(() => {
    if (shouldReduceMotion !== false) return;
    const update = (value: number) => setFrame(frameAt(value, commandLength));
    const firstFrame = requestAnimationFrame(() => update(progress.get()));
    const unsubscribe = progress.on("change", update);
    return () => {
      cancelAnimationFrame(firstFrame);
      unsubscribe();
    };
  }, [progress, commandLength, shouldReduceMotion]);

  return frame;
}
