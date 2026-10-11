import { ShieldCheck } from "lucide-react";
import home from "@/content/home.json";
import { FlowGate } from "./FlowGate";
import { hubCenter } from "./flowLayout";

const { diagram } = home.howItWorks;
const width = 128;
const height = 44;

// The orchestrator: plain code that every handoff passes through, gates included.
export function FlowHub({ isActive }: { isActive: boolean }) {
  const left = hubCenter.x - width / 2;
  const top = hubCenter.y - height / 2;

  return (
    <g>
      <rect
        x={left - 6}
        y={top - 6}
        width={width + 12}
        height={height + 12}
        rx={10}
        className="fill-none stroke-text-tertiary/25 motion-safe:animate-pulse"
      />
      <rect
        x={left}
        y={top}
        width={width}
        height={height}
        rx={7}
        className={`fill-bg-alt transition-colors ${isActive ? "stroke-accent-glow" : "stroke-text-tertiary/50"}`}
      />
      <ShieldCheck x={left + 14} y={hubCenter.y - 8} width={16} height={16} className="text-text" />
      <text
        x={left + 38}
        y={hubCenter.y + 4}
        className="fill-text font-mono text-[11px] font-bold tracking-[0.2em]"
      >
        {diagram.hub}
      </text>
      <path
        d={`M${left + 110},${hubCenter.y - 4} l4,4 -4,4`}
        strokeWidth={1.3}
        className="fill-none stroke-text-tertiary"
      />
      <FlowGate isActive={isActive} />
    </g>
  );
}
