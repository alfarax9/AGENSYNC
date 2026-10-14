import home from "@/content/home.json";
import { HandoffArc } from "./HandoffArc";
import { WorkerMark } from "./WorkerMark";

const handoff = home.pillars.visuals.handoff;

// One handoff drawn large: an arc of light from one worker to the next, the
// contract riding it, and the record (valid, who answered, the cost) lighting
// up as it lands. Everything sits on the arc's 2:1 drawing, so the workers
// stay on its ends at any width.
export function HandoffVisual() {
  return (
    <div
      role="img"
      aria-label={handoff.label}
      className="absolute inset-0 grid place-items-center p-4"
    >
      <div className="relative aspect-[2/1] w-full max-w-sm">
        <HandoffArc />
        <p className="absolute top-[4%] left-1/2 -translate-x-1/2 rounded-full border border-border-strong bg-bg/60 px-3 py-1 font-mono text-[0.6875rem] whitespace-nowrap text-text backdrop-blur-md">
          {handoff.contract}
          <span className="ml-2 text-highlight-from motion-safe:animate-arrive">
            {handoff.status}
          </span>
        </p>
        <div className="absolute top-[70%] left-[15%] -translate-1/2">
          <WorkerMark divisionId={handoff.from.division} name={handoff.from.name} />
        </div>
        <div className="absolute top-[70%] left-[85%] -translate-1/2">
          <WorkerMark divisionId={handoff.to.division} name={handoff.to.name} />
        </div>
        <p className="absolute top-full left-1/2 mt-6 -translate-x-1/2 font-mono text-[0.6875rem] whitespace-nowrap text-text-secondary motion-safe:animate-arrive">
          {handoff.answeredBy} · {handoff.cost}
        </p>
      </div>
    </div>
  );
}
