"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Collapse } from "@/components/ui/Collapse";

type DivisionWorkersProps = {
  listId: string;
  describedBy: string;
  toggleLabel: string;
  workerNames: string[];
};

export function DivisionWorkers({
  listId,
  describedBy,
  toggleLabel,
  workerNames,
}: DivisionWorkersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = isOpen ? Minus : Plus;

  return (
    <div className="md:col-span-12">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-describedby={describedBy}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-border-strong px-3 py-1 font-mono text-xs text-text-secondary transition-colors hover:border-text-tertiary hover:text-text"
      >
        <Icon aria-hidden className="size-3.5" />
        {toggleLabel}
      </button>
      <Collapse id={listId} isOpen={isOpen}>
        <ul className="flex flex-wrap gap-2 pt-4 text-sm">
          {workerNames.map((name) => (
            <li key={name} className="rounded-card border border-border-strong px-3 py-1.5">
              {name}
            </li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
}
