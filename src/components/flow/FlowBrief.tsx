import home from "@/content/home.json";
import { FlowLine } from "./FlowLine";
import { flowPaths } from "./flowLayout";

export function FlowBrief({ isActive }: { isActive: boolean }) {
  return (
    <g>
      <FlowLine d={flowPaths.brief} isActive={isActive} isDashed />
      <rect
        x={8}
        y={98}
        width={58}
        height={24}
        rx={12}
        className={`fill-bg transition-colors ${isActive ? "stroke-accent-glow" : "stroke-text-tertiary/40"}`}
      />
      <text x={37} y={113.5} textAnchor="middle" className="fill-text text-[10px]">
        {home.howItWorks.diagram.brief}
      </text>
    </g>
  );
}
