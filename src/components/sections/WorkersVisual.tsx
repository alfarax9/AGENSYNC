import home from "@/content/home.json";
import { GlassWorkerCard } from "./GlassWorkerCard";
import { TypedBrief } from "./TypedBrief";

const visual = home.platform.visuals.workers;

// Four workers waiting on a brief that is being typed, after the Cosmoq agent
// cards. Every second card sits lower, so the grid reads as cards floating.
export function WorkersVisual() {
  return (
    <div role="img" aria-label={visual.label} className="flex w-full max-w-md flex-col gap-10">
      <div className="grid grid-cols-2 gap-3">
        {visual.workers.map((workerId, index) => (
          <GlassWorkerCard
            key={workerId}
            workerId={workerId}
            className={index % 2 ? "translate-y-5" : ""}
          />
        ))}
      </div>
      <TypedBrief text={visual.brief} />
    </div>
  );
}
