"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

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

  return (
    <div className="mt-4 border-t border-border pt-4">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-describedby={describedBy}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-sm text-text"
      >
        {toggleLabel}
        <ChevronDown aria-hidden className={`size-4 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <ul id={listId} hidden={!isOpen} className="mt-3 flex flex-col gap-1.5 text-sm">
        {workerNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
