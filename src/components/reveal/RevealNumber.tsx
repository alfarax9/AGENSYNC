"use client";

import { type MotionValue, useMotionValueEvent, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { RevealWord } from "./RevealWord";

type RevealNumberProps = {
  progress: MotionValue<number>;
  range: [number, number];
  value: string;
};

// How long the scroll can sit still before the digits lock to the real value.
const settleDelay = 140;

function scramble(length: number) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
}

// While the scroll is moving through this number's slice, its digits cycle
// like a readout settling. Once the scroll stops, or leaves the slice, they
// lock to the real value, so the page never rests on a wrong number.
export function RevealNumber({ progress, range, value }: RevealNumberProps) {
  const shouldReduceMotion = useReducedMotion();
  const [text, setText] = useState(value);
  const settleTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(settleTimer.current), []);

  useMotionValueEvent(progress, "change", (latest) => {
    clearTimeout(settleTimer.current);
    const isSettling = latest >= range[0] && latest < range[1];
    if (!isSettling || shouldReduceMotion) {
      setText(value);
      return;
    }
    setText(scramble(value.length));
    settleTimer.current = setTimeout(() => setText(value), settleDelay);
  });

  return (
    <RevealWord progress={progress} range={range} className="font-mono text-text tabular-nums">
      {text}
    </RevealWord>
  );
}
