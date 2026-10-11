import { divisionColor, findDivisionOfWorker } from "@/lib/divisions";
import { FlowTooltip } from "./FlowTooltip";

type FlowWorkerProps = {
  worker: { workerId: string; initials: string; status: string; isIdle?: boolean };
  position: { x: number; y: number };
  isActive: boolean;
};

const radius = 13;

export function FlowWorker({ worker, position, isActive }: FlowWorkerProps) {
  const division = findDivisionOfWorker(worker.workerId);
  const name = division?.workers.find((candidate) => candidate.id === worker.workerId)?.name;
  const { x, y } = position;

  return (
    <g style={division ? divisionColor(division.id) : undefined} className="group">
      {isActive && (
        <circle
          cx={x}
          cy={y}
          r={radius}
          className="origin-center fill-none stroke-(--division-color) [transform-box:fill-box] motion-safe:animate-ping"
        />
      )}
      <circle
        cx={x}
        cy={y}
        r={radius}
        strokeWidth={1.5}
        className={`fill-bg transition-colors ${isActive ? "stroke-(--division-color)" : "stroke-text-tertiary/40"}`}
      />
      <text
        x={x}
        y={y + 3}
        textAnchor="middle"
        className="fill-(--division-color) font-mono text-[8px]"
      >
        {worker.initials}
      </text>
      <circle
        cx={x + 9.5}
        cy={y + 9.5}
        r={3}
        className={`stroke-bg-alt ${worker.isIdle ? "fill-text-tertiary" : "fill-highlight-to motion-safe:animate-pulse"}`}
      />
      <FlowTooltip x={x} y={y} text={`${name} · ${worker.status}`} />
    </g>
  );
}
