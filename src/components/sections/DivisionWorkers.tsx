"use client";

import { Minus, Plus } from "lucide-react";
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
  const Icon = isOpen ? Minus : Plus;

  return (
    <div className="md:col-span-12">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-describedby={describedBy}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-text"
      >
        <Icon aria-hidden className="size-3.5" />
        {toggleLabel}
      </button>
      <ul
        id={listId}
        hidden={!isOpen}
        className="mt-4 gap-x-8 gap-y-1.5 text-sm sm:columns-2 lg:columns-3"
      >
        {workerNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
