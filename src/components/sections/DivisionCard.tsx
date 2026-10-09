import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Spotlight } from "@/components/ui/Spotlight";
import home from "@/content/home.json";
import { type Division, divisionColor, divisionWaves } from "@/lib/divisions";
import { DivisionWorkers } from "./DivisionWorkers";

// The hover light takes the division's own color, so it marks which room
// you are in rather than decorating every card the same way.
export function DivisionCard({ division }: { division: Division }) {
  const content = home.divisions;
  const headingId = `${division.id}-card-heading`;
  const tint = `color-mix(in oklch, var(--color-division-${division.id}) 22%, transparent)`;

  return (
    <Spotlight tint={tint} className="h-full">
      <article style={divisionColor(division.id)} className="relative flex h-full flex-col p-5">
        <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-(--division-color)" />
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
        <Link
          href={`/divisions#${division.id}`}
          className="mt-auto pt-5 text-sm text-text underline"
        >
          {content.rosterLink}
          <span className="sr-only">: {division.name}</span>
        </Link>
      </article>
    </Spotlight>
  );
}
