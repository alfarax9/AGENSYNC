import home from "@/content/home.json";
import { FlowBrief } from "./FlowBrief";
import { FlowLine } from "./FlowLine";
import { FlowLoop } from "./FlowLoop";
import { FlowPlanner } from "./FlowPlanner";
import { FlowWorker } from "./FlowWorker";
import { plannerCenter, workerPositions, zoneWorkers } from "./flowLayout";

type FlowClusterProps = {
  zone: string;
  onSelectZone: (zone: string) => void;
};

const { workers } = home.howItWorks.diagram;
const clickable = "cursor-pointer transition-opacity hover:opacity-80";

// The brief, the planner that splits it, and the workers it is split between.
// Each part jumps to its step when clicked; the step tabs do the same by keyboard.
export function FlowCluster({ zone, onSelectZone }: FlowClusterProps) {
  const isPlan = zone === "plan";
  const activeWorkers = zoneWorkers[zone] ?? [];

  return (
    <g>
      <g onClick={() => onSelectZone("brief")} className={clickable}>
        <FlowBrief isActive={zone === "brief"} />
      </g>
      {workerPositions.map(({ x, y }) => (
        <FlowLine
          key={`${x}-${y}`}
          d={`M${x},${y} L${plannerCenter.x},${plannerCenter.y}`}
          isActive={isPlan}
          isDashed
        />
      ))}
      <FlowLoop isActive={zone === "dev-qa"} />
      <g onClick={() => onSelectZone("plan")} className={clickable}>
        <FlowPlanner isActive={isPlan} />
      </g>
      <g onClick={() => onSelectZone("divisions")} className={clickable}>
        {workers.map((worker, index) => (
          <FlowWorker
            key={worker.workerId}
            worker={worker}
            position={workerPositions[index]}
            isActive={activeWorkers.includes(worker.workerId)}
          />
        ))}
      </g>
    </g>
  );
}
