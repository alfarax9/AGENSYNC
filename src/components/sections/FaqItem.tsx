"use client";

import { Plus } from "lucide-react";
import { Collapse } from "@/components/ui/Collapse";
import { useHoverOpen } from "./useHoverOpen";

type FaqItemProps = {
  id: string;
  question: string;
  answer: string;
};

// One question card. The answer opens on hover, or on click and Enter (see
// useHoverOpen), and slides open instead of appearing at once.
export function FaqItem({ id, question, answer }: FaqItemProps) {
  const { isOpen, hoverHandlers, toggle } = useHoverOpen();
  const answerId = `faq-${id}-answer`;

  return (
    <div
      {...hoverHandlers}
      className={`rounded-2xl border bg-bg-alt transition-colors duration-300 ${isOpen ? "border-border-strong" : "border-border"}`}
    >
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={toggle}
          className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left text-text md:px-6"
        >
          {question}
          <Plus
            aria-hidden
            strokeWidth={1.5}
            className={`size-5 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "rotate-45" : ""}`}
          />
        </button>
      </h3>
      <Collapse id={answerId} isOpen={isOpen}>
        <p className="px-5 pb-6 text-sm md:px-6">{answer}</p>
      </Collapse>
    </div>
  );
}
