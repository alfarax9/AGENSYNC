import { Card } from "@/components/ui/Card";
import home from "@/content/home.json";
import { divisions } from "@/lib/divisions";
import { ChartConnector } from "./ChartConnector";
import { ChartNode } from "./ChartNode";

// Decorative on purpose: the step list next to it carries the same information as text.
export function OrgChart({ activeNodes }: { activeNodes: string[] }) {
  const { howItWorks } = home;
  const isActive = (nodeId: string) => activeNodes.includes(nodeId);

  return (
    <Card tone="alt" isDecorative className="hidden flex-col items-center bg-grid p-8 lg:flex">
      <ChartNode label={howItWorks.telegramNode} isActive={isActive("telegram")} />
      <ChartConnector isActive={isActive("telegram") || isActive("nexus")} />
      <ul className="grid w-full grid-cols-4 gap-3">
        {divisions.map((division) => (
          <li key={division.id}>
            <ChartNode
              label={division.name}
              count={division.workers.length}
              divisionId={division.id}
              isActive={isActive(division.id)}
            />
          </li>
        ))}
      </ul>
      <ChartConnector isActive={isActive("gatekeeper")} />
      <ChartNode label={howItWorks.gatekeeperNode} isActive={isActive("gatekeeper")} />
    </Card>
  );
}
