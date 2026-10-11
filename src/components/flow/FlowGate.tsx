import home from "@/content/home.json";
import { hubCenter } from "./flowLayout";

const { gateChecks } = home.howItWorks.diagram;
const checkDelay = 0.35;

// The checks the hub runs, written under it so the gate reads as code, not a
// model. While the gate step plays they pass one after another.
export function FlowGate({ isActive }: { isActive: boolean }) {
  return (
    <text x={hubCenter.x} y={hubCenter.y + 48} textAnchor="middle" className="font-mono text-[9px]">
      {gateChecks.map((check, index) => {
        const delay = { transitionDelay: isActive ? `${index * checkDelay}s` : "0s" };
        return (
          <tspan
            key={check}
            style={delay}
            className={`transition-colors duration-300 ${isActive ? "fill-highlight-to" : "fill-text-tertiary"}`}
          >
            {index > 0 ? " · " : ""}
            {check}
            <tspan
              style={{ ...delay, fillOpacity: isActive ? 1 : 0 }}
              className="transition-[fill-opacity] duration-300"
            >
              {" ✓"}
            </tspan>
          </tspan>
        );
      })}
    </text>
  );
}
