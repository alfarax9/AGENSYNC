import home from "@/content/home.json";
import { FlowPacket } from "./FlowPacket";
import { flowPaths, plannerCenter, workerPositions, zoneWorkers } from "./flowLayout";

const { workers } = home.howItWorks.diagram;
const planner = `${plannerCenter.x},${plannerCenter.y}`;

function workerPosition(workerId: string) {
  return workerPositions[workers.findIndex((worker) => worker.workerId === workerId)];
}

// Where data moves during each step: the brief into the planner, the plan out
// to every worker, finished parts back in, work into the gate, results out.
const routes: Record<string, string[]> = {
  brief: [flowPaths.brief],
  plan: workerPositions.map(({ x, y }) => `M${planner} L${x},${y}`),
  divisions: zoneWorkers.divisions.map((id) => {
    const { x, y } = workerPosition(id);
    return `M${x},${y} L${planner}`;
  }),
  gatekeeper: flowPaths.intoHub,
  deliver: flowPaths.outOfHub,
};

// Only the active step's routes carry packets, so the motion tells the story
// of that step instead of running everywhere at once.
export function FlowPackets({ zone }: { zone: string }) {
  if (zone === "dev-qa") {
    return <FlowPacket path={flowPaths.loop} duration={1.6} delay={0} isBounce />;
  }

  return (routes[zone] ?? []).map((path, index) => (
    <FlowPacket key={`${zone}-${path}`} path={path} duration={1.3} delay={index * 0.18} />
  ));
}
