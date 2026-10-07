import { type MotionValue, motion } from "motion/react";

type StepListProps = {
  steps: { id: string; title: string; body: string }[];
  activeIndex: number;
  progress: MotionValue<number>;
};

export function StepList({ steps, activeIndex, progress }: StepListProps) {
  return (
    <div className="relative lg:pl-8">
      <span aria-hidden className="absolute inset-y-0 left-0 hidden w-px bg-border lg:block">
        <motion.span
          style={{ scaleY: progress }}
          className="absolute inset-0 origin-top bg-accent-glow"
        />
      </span>
      <ol className="flex flex-col gap-8">
        {steps.map((step, index) => (
          <li
            key={step.id}
            aria-current={index === activeIndex ? "step" : undefined}
            className={`grid grid-cols-[auto_1fr] gap-x-5 transition-opacity duration-300 ${index === activeIndex ? "" : "lg:opacity-40"}`}
          >
            <span className="font-mono text-sm text-text-tertiary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-xl font-semibold text-text">{step.title}</h3>
              <p className="mt-2">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
