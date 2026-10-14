"use client";

import { useTransform } from "motion/react";
import * as m from "motion/react-m";
import { useRef } from "react";
import { useLoopValue } from "@/lib/useLoopValue";

type BudgetSliderProps = {
  slider: { name: string; used: number; limit: number; prefix: string; decimals: number };
  of: string;
  /** Position in the row, used to start each slider a beat after the last. */
  index: number;
};

const format = (amount: number, prefix: string, decimals: number) =>
  `${prefix}${amount.toFixed(decimals)}`;

// A tall glass capsule after the Cosmoq control card: a lit line rises to how
// much of a limit is used, carrying a glowing knob, and drops back like a task
// spending its budget, with the amount counting alongside. It shows a value;
// it is not a control.
export function BudgetSlider({ slider, of, index }: BudgetSliderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const value = useLoopValue(ref, slider.used, { delay: index * 0.7 });
  const level = useTransform(value, [0, slider.limit], [0, 1]);
  const lift = useTransform(value, (current) => `${(-current / slider.limit) * 100}%`);
  const amount = useTransform(value, (current) => format(current, slider.prefix, slider.decimals));

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-52 w-14 rounded-full border border-border-strong bg-bg/30 shadow-glass backdrop-blur-md">
        <div className="absolute inset-x-0 top-7 bottom-7">
          <m.span
            style={{ scaleY: level }}
            className="absolute inset-y-0 left-1/2 w-1 origin-bottom -translate-x-1/2 rounded-full bg-linear-to-t from-text/30 to-text shadow-[0_0_10px_var(--color-text)]"
          />
          <m.span style={{ y: lift }} className="absolute inset-0">
            <span className="absolute bottom-0 left-1/2 size-14 -translate-x-1/2 translate-y-1/2 rounded-full bg-duo opacity-60 blur-lg" />
            <span className="absolute bottom-0 left-1/2 size-7 -translate-x-1/2 translate-y-1/2 rounded-full bg-duo ring-2 ring-text/40" />
          </m.span>
        </div>
      </div>
      <p className="text-[0.625rem] tracking-wider text-text-tertiary uppercase">{slider.name}</p>
      <p className="-mt-1 font-mono text-sm leading-tight text-text tabular-nums">
        <m.span>{amount}</m.span>
        <span className="block text-[0.625rem] text-text-tertiary">
          {of} {format(slider.limit, slider.prefix, slider.decimals)}
        </span>
      </p>
    </div>
  );
}
