import { ArrowRight, X } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import home from "@/content/home.json";
import { WorkerMark } from "./WorkerMark";

const model = home.pillars.visuals.model;

// A worker offered a model that fails one of its requirements: the pairing is
// refused in writing, with the reason.
export function ModelVisual() {
  return (
    <div role="img" aria-label={model.label} className="flex w-full max-w-md flex-col gap-5">
      <div className="flex items-center justify-between gap-3">
        <WorkerMark divisionId={model.division} name={model.worker} />
        <ArrowRight
          aria-hidden
          strokeWidth={1.25}
          className="size-6 shrink-0 text-text-secondary"
        />
        <GlassPanel className="px-5 py-4 text-text">{model.model}</GlassPanel>
      </div>
      <GlassPanel className="flex items-center gap-3 px-4 py-3 font-mono text-sm">
        <X aria-hidden className="size-4 shrink-0 text-danger" />
        <span className="text-text">
          {model.check}: {model.result}
        </span>
        <span className="ml-auto text-amber">[{model.status}]</span>
      </GlassPanel>
    </div>
  );
}
