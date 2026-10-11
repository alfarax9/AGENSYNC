import { Workflow } from "lucide-react";
import { plannerCenter } from "./flowLayout";

const size = 30;

// The Planner / Decomposer every worker line converges on.
export function FlowPlanner({ isActive }: { isActive: boolean }) {
  return (
    <g>
      <rect
        x={plannerCenter.x - size / 2}
        y={plannerCenter.y - size / 2}
        width={size}
        height={size}
        rx={6}
        className={`fill-bg-alt transition-colors ${isActive ? "stroke-accent-glow" : "stroke-text-tertiary/50"}`}
      />
      <Workflow
        x={plannerCenter.x - 8}
        y={plannerCenter.y - 8}
        width={16}
        height={16}
        className="text-text"
      />
    </g>
  );
}
