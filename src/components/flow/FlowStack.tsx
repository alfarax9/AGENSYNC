import { FlowSheet } from "./FlowSheet";

type FlowStackProps = {
  taskNumber: number;
  isActive: boolean;
};

const depth = [2, 1, 0];

// Finished tasks pile up here. The keys follow the task number, so each new
// task remounts the front sheet and replays its slide-in.
export function FlowStack({ taskNumber, isActive }: FlowStackProps) {
  return (
    <g>
      {depth.map((offset) => (
        <g
          key={taskNumber - offset}
          transform={`translate(${466 + offset * 12},${46 - offset * 10})`}
          opacity={1 - offset * 0.25}
        >
          <g className={offset === 0 ? "motion-safe:animate-sheet-in" : undefined}>
            <rect
              width={150}
              height={118}
              rx={4}
              className={`fill-bg-alt transition-colors ${offset === 0 && isActive ? "stroke-accent-glow" : "stroke-text-tertiary/40"}`}
            />
            {offset === 0 && <FlowSheet taskNumber={taskNumber} isActive={isActive} />}
          </g>
        </g>
      ))}
    </g>
  );
}
