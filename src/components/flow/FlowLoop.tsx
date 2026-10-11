import home from "@/content/home.json";
import { FlowLine } from "./FlowLine";
import { flowPaths } from "./flowLayout";

// The Dev and QA loop between Logic Developer and the tester, with the attempt
// count shown while that step plays.
export function FlowLoop({ isActive }: { isActive: boolean }) {
  return (
    <g>
      <FlowLine d={flowPaths.loop} isActive={isActive} isDashed />
      <text
        x={232}
        y={44}
        className={`fill-highlight-to font-mono text-[8px] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
      >
        {home.howItWorks.diagram.attempt}
      </text>
    </g>
  );
}
