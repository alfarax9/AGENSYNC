"use client";

import { useTransform } from "motion/react";
import * as m from "motion/react-m";
import { useRef } from "react";
import home from "@/content/home.json";
import { useLoopValue } from "@/lib/useLoopValue";
import { GateMeter } from "./GateMeter";

const gate = home.pillars.visuals.gate;

// A quality gate drawn as an instrument across the card: the reading counts up,
// runs into the limit beam and past it, and only then does the failure and the
// retry show. Loops while on screen; still frames show the failed result.
export function GateVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const value = useLoopValue(ref, gate.value);
  const reading = useTransform(value, (current) => current.toFixed(1));
  const fill = useTransform(value, [0, gate.max], [0, 1]);
  const overshoot = useTransform(value, [gate.limit, gate.max], [0, 1]);
  const verdict = useTransform(value, [gate.limit, gate.limit + 0.3], [0, 1]);
  const beam = useTransform(value, [gate.limit - 0.2, gate.limit + 0.2], [0.55, 1]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={gate.label}
      className="absolute inset-0 flex flex-col justify-between p-6 md:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-text-secondary">{gate.name}</p>
          <p className="mt-1 text-h2 leading-none text-text tabular-nums">
            <m.span>{reading}</m.span>
            {gate.unit}
          </p>
        </div>
        <m.p style={{ opacity: verdict }} className="font-mono text-sm text-danger">
          [{gate.status}]
        </m.p>
      </div>
      <div className="flex flex-col gap-5">
        <GateMeter fill={fill} overshoot={overshoot} beam={beam} />
        <m.p style={{ opacity: verdict }} className="font-mono text-xs text-text-secondary">
          {gate.next}
        </m.p>
      </div>
    </div>
  );
}
