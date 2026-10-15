"use client";

import { useRef } from "react";
import { useSlidingHighlight } from "./useSlidingHighlight";

type SegmentSwitchProps = {
  labels: string[];
  activeIndex: number;
};

// A segmented control whose highlight slides to the active label: the gateway
// a model arrives through on the probe bench, the target of a chat message in
// the agent thread. It shows a state; it is not a control.
// One row of labels each as wide as its text when the bench has room, a
// two-by-two grid when it does not (a container query in rem, so it follows
// the reader's text size too). The highlight is measured from the active
// label rather than assuming equal quarters, which made long names collide.
export function SegmentSwitch({ labels, activeIndex }: SegmentSwitchProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  useSlidingHighlight(listRef, highlightRef, activeIndex);

  return (
    <div className="@container">
      <div
        ref={listRef}
        className="relative grid grid-cols-2 gap-1 rounded-[1.25rem] border border-border-strong bg-bg/50 p-1 text-[0.6875rem] @[21rem]:flex"
      >
        <span
          ref={highlightRef}
          className="absolute top-0 left-0 rounded-full border border-border-strong bg-surface opacity-0 shadow-glass transition-[transform,width,height] duration-500 ease-out motion-reduce:transition-none"
        />
        {labels.map((label, index) => (
          <span
            key={label}
            data-segment
            className={`relative flex-auto px-2.5 py-1.5 text-center whitespace-nowrap transition-colors duration-500 ${index === activeIndex ? "text-text" : "text-text-tertiary"}`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
