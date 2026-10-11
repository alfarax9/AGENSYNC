import home from "@/content/home.json";
import { FlowCluster } from "./FlowCluster";
import { FlowHub } from "./FlowHub";
import { FlowLine } from "./FlowLine";
import { FlowPackets } from "./FlowPackets";
import { FlowStack } from "./FlowStack";
import { flowPaths, viewBox } from "./flowLayout";

type FlowDiagramProps = {
  zone: string;
  taskNumber: number;
  onSelectZone: (zone: string) => void;
};

const clickable = "cursor-pointer transition-opacity hover:opacity-80";

export function FlowDiagram({ zone, taskNumber, onSelectZone }: FlowDiagramProps) {
  return (
    <svg
      viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      role="img"
      aria-label={home.howItWorks.diagram.label}
      className="h-auto w-full overflow-visible select-none"
    >
      <FlowCluster zone={zone} onSelectZone={onSelectZone} />
      {flowPaths.intoHub.map((path, index) => (
        <FlowLine key={path} d={path} isActive={zone === "gatekeeper"} isDashed={index === 1} />
      ))}
      {flowPaths.outOfHub.map((path, index) => (
        <FlowLine key={path} d={path} isActive={zone === "deliver"} isDashed={index === 1} />
      ))}
      <FlowPackets zone={zone} />
      <g onClick={() => onSelectZone("gatekeeper")} className={clickable}>
        <FlowHub isActive={zone === "gatekeeper"} />
      </g>
      <g onClick={() => onSelectZone("deliver")} className={clickable}>
        <FlowStack taskNumber={taskNumber} isActive={zone === "deliver"} />
      </g>
    </svg>
  );
}
