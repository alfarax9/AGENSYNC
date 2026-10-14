import type { MotionValue } from "motion/react";
import * as m from "motion/react-m";
import home from "@/content/home.json";

const gate = home.pillars.visuals.gate;
const toPercent = (amount: number) => `${(amount / gate.max) * 100}%`;
const ticks = Array.from({ length: gate.max + 1 }, (_, tick) => tick);

type GateMeterProps = {
  fill: MotionValue<number>;
  overshoot: MotionValue<number>;
  beam: MotionValue<number>;
};

// The instrument: a scale from 0 to the max, the reading as a lit line, and
// the limit as a beam of light the reading has to pass. What runs past the
// beam turns red, and the beam flares once it is crossed.
export function GateMeter({ fill, overshoot, beam }: GateMeterProps) {
  return (
    <div className="relative">
      <m.span
        style={{ left: toPercent(gate.limit), opacity: beam }}
        className="absolute bottom-0 h-56"
      >
        <span className="absolute inset-y-0 w-px -translate-x-1/2 bg-linear-to-t from-amber via-amber/60 to-transparent" />
        <span className="absolute inset-y-0 w-20 -translate-x-1/2 bg-linear-to-t from-[color-mix(in_oklab,var(--color-amber)_45%,transparent)] to-transparent blur-xl" />
        <span className="absolute top-0 -translate-x-1/2 -translate-y-full pb-2 font-mono text-[0.6875rem] whitespace-nowrap text-amber">
          {gate.limitLabel} {gate.limit}
          {gate.unit}
        </span>
      </m.span>
      <div className="relative h-1 rounded-full bg-text/10">
        <m.span
          style={{ scaleX: fill }}
          className="absolute inset-0 origin-left rounded-full bg-duo shadow-duo"
        />
        <m.span
          style={{ left: toPercent(gate.limit), right: 0, scaleX: overshoot }}
          className="absolute inset-y-0 origin-left rounded-r-full bg-danger shadow-[0_0_12px_var(--color-danger)]"
        />
      </div>
      <div className="relative mt-3 h-4 font-mono text-[0.625rem] text-text-tertiary">
        {ticks.map((tick) => (
          <span key={tick} style={{ left: toPercent(tick) }} className="absolute -translate-x-1/2">
            {tick}
            {tick === gate.max ? gate.unit : ""}
          </span>
        ))}
      </div>
    </div>
  );
}
