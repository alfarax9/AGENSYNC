"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { type CSSProperties, useRef, useState } from "react";
import { OrgChart } from "./OrgChart";
import { StepList } from "./StepList";

type StepScrollerProps = {
  steps: { id: string; title: string; body: string; activeNodes: string[] }[];
};

const viewportsPerStep = 0.6;

// On large screens the section is taller than the viewport and its content
// sticks, so normal scrolling walks through the steps. Nothing hijacks the
// scroll position. Small screens get a plain list.
export function StepScroller({ steps }: StepScrollerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setActiveIndex(Math.min(steps.length - 1, Math.floor(progress * steps.length)));
  });

  const scrollLength = { "--scroll-length": `${steps.length * viewportsPerStep * 100}svh` };

  return (
    <div ref={ref} style={scrollLength as CSSProperties} className="mt-12 lg:h-(--scroll-length)">
      <div className="grid gap-12 lg:sticky lg:top-navbar lg:grid-cols-2 lg:items-center lg:py-8">
        <StepList steps={steps} activeIndex={activeIndex} progress={scrollYProgress} />
        <OrgChart activeNodes={steps[activeIndex].activeNodes} />
      </div>
    </div>
  );
}
