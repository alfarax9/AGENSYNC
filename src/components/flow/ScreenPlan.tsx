import { Mascot } from "@/components/ui/Mascot";
import home from "@/content/home.json";
import { findDivisionOfWorker, findWorker } from "@/lib/divisions";
import { PlanRow } from "./PlanRow";
import { WindowButton } from "./WindowButton";

const { plan } = home.howItWorks.screen;
const planner = findWorker(plan.plannerId);
const plannerDivision = findDivisionOfWorker(plan.plannerId);

// Step 2: the Planner / Decomposer's plan. A line draws down from the planner
// as it hands each step to a worker, with its estimate, and nothing runs until
// your cursor approves it.
export function ScreenPlan({ onAction }: { onAction: () => void }) {
  return (
    <div className="flex h-full flex-col">
      <div className="relative">
        <span
          aria-hidden
          className="absolute top-4 bottom-4 left-4 w-px origin-top bg-linear-to-b from-amber/70 to-accent-glow/40 motion-safe:animate-grow-y"
        />
        <div className="flex items-center gap-3">
          {plannerDivision && <Mascot divisionId={plannerDivision.id} size={32} />}
          <p className="text-sm text-text">
            {plan.heading} <span className="text-text-tertiary">· {planner?.name}</span>
          </p>
          <p className="ml-auto hidden font-mono text-[0.6875rem] text-text-tertiary sm:block">
            {plan.summary}
          </p>
        </div>
        <ol className="mt-3">
          {plan.rows.map((row, index) => (
            <PlanRow key={row.workerId} row={row} index={index} />
          ))}
        </ol>
      </div>
      <div className="mt-auto flex items-center gap-2 pt-3">
        <p className="font-mono text-xs text-text">{plan.total}</p>
        <span className="ml-auto">
          <WindowButton>{plan.edit}</WindowButton>
        </span>
        <WindowButton isPrimary isCalling clickAt={4} onClick={onAction}>
          {plan.approve}
        </WindowButton>
      </div>
    </div>
  );
}
