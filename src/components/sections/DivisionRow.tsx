import { RevealWords } from "@/components/motion/RevealWords";
import Link from "next/link";
import home from "@/content/home.json";
import { type Division, divisionColor, divisionWaves } from "@/lib/divisions";
import { Mascot } from "@/components/ui/Mascot";
import { DivisionWorkers } from "./DivisionWorkers";

const content = home.divisions;
const hop =
  "transition-transform duration-300 ease-out group-hover:-translate-y-1 motion-reduce:transition-none";

// A directory entry inside one shared panel: the division's mascot beside its
// name, and the row lights up (and the mascot hops) under the pointer.
export function DivisionRow({ division }: { division: Division }) {
  const headingId = `${division.id}-row-heading`;

  return (
    <article
      style={divisionColor(division.id)}
      className="group grid gap-x-8 gap-y-3 px-5 py-6 transition-colors hover:bg-overlay md:grid-cols-12 md:px-8"
    >
      <div className="flex items-center gap-4 md:col-span-3">
        <Mascot divisionId={division.id} size={64} className={hop} />
        <div>
          <h3 id={headingId} className="reveal-text text-h4 text-text">
            <RevealWords text={division.name} />
          </h3>
          <p className="mt-1 font-mono text-xs text-(--division-color) uppercase">
            {division.function}
          </p>
        </div>
      </div>
      <p className="reveal-text max-w-md text-sm md:col-span-5">
        <RevealWords text={division.summary} />
      </p>
      <div className="flex items-baseline justify-between gap-4 text-sm md:col-span-4 md:justify-end md:gap-8">
        <span className="font-mono text-xs text-text-tertiary">
          {content.waveLabel} {divisionWaves(division).join(" · ")}
        </span>
        <Link href={`/divisions#${division.id}`} className="text-text underline underline-offset-4">
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
