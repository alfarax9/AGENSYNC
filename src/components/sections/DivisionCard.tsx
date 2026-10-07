import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import home from "@/content/home.json";
import { type Division, divisionColor, divisionWaves } from "@/lib/divisions";
import { DivisionWorkers } from "./DivisionWorkers";

export function DivisionCard({ division }: { division: Division }) {
  const content = home.divisions;
  const headingId = `${division.id}-card-heading`;

  return (
    <Card
      as="article"
      style={divisionColor(division.id)}
      className="flex h-full flex-col border-t-2 border-t-(--division-color) p-5"
    >
      <h3 id={headingId} className="text-xl font-semibold text-text">
        {division.name}
      </h3>
      <p className="font-mono text-xs text-text-tertiary uppercase">{division.function}</p>
      <p className="mt-3 text-sm">{division.summary}</p>
      <p className="mt-4 flex flex-wrap gap-2">
        {divisionWaves(division).map((wave) => (
          <Badge key={wave}>
            {content.waveLabel} {wave}
          </Badge>
        ))}
      </p>
      <DivisionWorkers
        listId={`${division.id}-workers`}
        describedBy={headingId}
        toggleLabel={`${division.workers.length} ${content.workersLabel}`}
        workerNames={division.workers.map((worker) => worker.name)}
      />
      <Link href={`/divisions#${division.id}`} className="mt-auto pt-5 text-sm text-text underline">
        {content.rosterLink}
        <span className="sr-only">: {division.name}</span>
      </Link>
    </Card>
  );
}
