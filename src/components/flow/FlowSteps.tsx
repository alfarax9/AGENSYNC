import type { KeyboardEvent } from "react";
import home from "@/content/home.json";
import { FlowStepTab } from "./FlowStepTab";

type FlowStepsProps = {
  steps: { id: string; title: string; body: string }[];
  status: { activeIndex: number; run: number; isRunning: boolean };
  onSelect: (index: number) => void;
  onAdvance: () => void;
};

const moves: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };

// The steps as a tab list controlling the diagram above (the ARIA tabs pattern:
// arrow keys move and select, only the selected tab is in the tab order).
export function FlowSteps({ steps, status, onSelect, onAdvance }: FlowStepsProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const move = moves[event.key];
    if (!move) return;
    event.preventDefault();
    const next = (status.activeIndex + move + steps.length) % steps.length;
    onSelect(next);
    document.getElementById(`flow-tab-${steps[next].id}`)?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label={home.howItWorks.controls.tablist}
      onKeyDown={handleKeyDown}
      className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {steps.map((step, index) => (
        <FlowStepTab
          key={step.id}
          step={step}
          index={index}
          status={status}
          onSelect={onSelect}
          onAdvance={onAdvance}
        />
      ))}
    </div>
  );
}
