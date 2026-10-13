import { GlassPanel } from "@/components/ui/GlassPanel";
import home from "@/content/home.json";
import { WorkerMark } from "./WorkerMark";

const handoff = home.pillars.visuals.handoff;

// One handoff between two workers: the contract that crossed, whether it
// validated, and which model answered at what cost.
export function HandoffVisual() {
  return (
    <div role="img" aria-label={handoff.label} className="flex w-full max-w-xs flex-col gap-5">
      <div className="flex items-start justify-between">
        <WorkerMark divisionId={handoff.from.division} name={handoff.from.name} />
        <div className="mt-5 flex min-w-0 flex-1 flex-col items-center gap-2 px-1">
          <span className="font-mono text-xs text-text">{handoff.contract}</span>
          <span className="h-px w-full border-t border-dashed border-text-secondary" />
          <span className="font-mono text-xs text-amber">[{handoff.status}]</span>
        </div>
        <WorkerMark divisionId={handoff.to.division} name={handoff.to.name} />
      </div>
      <GlassPanel className="px-4 py-3 text-center font-mono text-xs text-text-secondary">
        {handoff.answeredBy}, {handoff.cost}
      </GlassPanel>
    </div>
  );
}
