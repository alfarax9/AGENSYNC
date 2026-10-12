"use client";

import { useScroll, useSpring, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import home from "@/content/home.json";
import { CtaActions } from "./CtaActions";
import { CtaHeadline } from "./CtaHeadline";
import { CtaTerminal } from "./CtaTerminal";

const pinned = "motion-reduce:transform-none! motion-reduce:opacity-100!";

// The panel tips up from a tilted, smaller card to flat as it scrolls to the
// middle of the viewport, while its two columns rise at different speeds and
// the terminal boots along the same progress. A spring smooths the scroll so
// the panel has weight. Reduced motion pins everything at its final state.
export function CtaPortal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });
  const scale = useTransform(progress, [0, 1], [0.9, 1]);
  const rotateX = useTransform(progress, [0, 1], [12, 0]);
  const copyY = useTransform(progress, [0, 1], [40, 0]);
  const terminalY = useTransform(progress, [0, 1], [110, 0]);
  const terminalOpacity = useTransform(progress, [0.2, 0.55], [0, 1]);

  return (
    <div ref={ref} className="perspective-[1400px]">
      <m.div
        style={{ scale, rotateX }}
        className={`relative isolate grid origin-bottom items-center gap-12 overflow-clip rounded-panel border border-border bg-bg-alt px-6 py-16 md:px-12 md:py-24 lg:grid-cols-12 ${pinned}`}
      >
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-nebula opacity-50 blur-3xl [--nebula-y:95%]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-grain opacity-40" />
        <m.div style={{ y: copyY }} className={`lg:col-span-7 ${pinned}`}>
          <Badge variant="glass" className="mb-8">
            {home.finalCta.eyebrow}
          </Badge>
          <CtaHeadline />
          <CtaActions />
        </m.div>
        <m.div
          style={{ y: terminalY, opacity: terminalOpacity }}
          className={`lg:col-span-5 ${pinned}`}
        >
          <CtaTerminal progress={progress} />
        </m.div>
      </m.div>
    </div>
  );
}
