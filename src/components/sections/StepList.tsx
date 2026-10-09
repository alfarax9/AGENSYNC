import type { MotionValue } from "motion/react";
import * as m from "motion/react-m";

type StepListProps = {
  steps: { id: string; title: string; body: string }[];
  activeIndex: number;
  progress: MotionValue<number>;
};

export function StepList({ steps, activeIndex, progress }: StepListProps) {
  return (
    <div className="relative lg:pl-8">
      <span aria-hidden className="absolute inset-y-0 left-0 hidden w-px bg-border lg:block">
        <m.span
          style={{ scaleY: progress }}
          className="absolute inset-0 origin-top bg-accent-glow"
        />
      </span>
      <ol className="flex flex-col gap-8">
        {steps.map((step, index) => (
          <li
            key={step.id}
            aria-current={index === activeIndex ? "step" : undefined}
            className={`transition-opacity duration-300 ${index === activeIndex ? "" : "lg:opacity-40"}`}
          >
            <h3 className="text-xl font-semibold text-text">{step.title}</h3>
            <p className="mt-2">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
