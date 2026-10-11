import { RevealWords } from "@/components/motion/RevealWords";
import Link from "next/link";
import home from "@/content/home.json";
import { type Division, divisionColor, divisionWaves } from "@/lib/divisions";
import { DivisionWorkers } from "./DivisionWorkers";

const content = home.divisions;

// A directory entry rather than a card: the division's color is only a mark
// beside its name, and the row lights up under the pointer.
export function DivisionRow({ division }: { division: Division }) {
  const headingId = `${division.id}-row-heading`;

  return (
    <article
      style={divisionColor(division.id)}
      className="grid gap-x-8 gap-y-2 px-2 py-5 transition-colors hover:bg-overlay md:grid-cols-12 md:px-4"
    >
      <div className="md:col-span-3">
        <h3 id={headingId} className="flex items-center gap-3 text-2xl font-medium text-text">
          <span aria-hidden className="size-2 rounded-full bg-(--division-color)" />
          <span className="reveal-text">
            <RevealWords text={division.name} />
          </span>
        </h3>
        <p className="mt-1 font-mono text-xs text-text-tertiary uppercase">{division.function}</p>
      </div>
      <p className="reveal-text max-w-md text-sm md:col-span-5">
        <RevealWords text={division.summary} />
      </p>
      <div className="flex items-baseline justify-between gap-4 text-sm md:col-span-4 md:justify-end md:gap-8">
        <span className="font-mono text-xs text-text-tertiary">
          {content.waveLabel} {divisionWaves(division).join(" · ")}
        </span>
        <Link href={`/divisions#${division.id}`} className="text-text underline">
          {content.rosterLink}
          <span className="sr-only">: {division.name}</span>
        </Link>
      </div>
      <DivisionWorkers
        listId={`${division.id}-workers`}
        describedBy={headingId}
        toggleLabel={`${division.workers.length} ${content.workersLabel}`}
        workerNames={division.workers.map((worker) => worker.name)}
      />
    </article>
  );
}
