import { Section } from "@/components/ui/Section";
import { type Division, divisionColor } from "@/lib/divisions";
import { WorkerTable } from "./WorkerTable";

type DivisionRosterProps = {
  division: Division;
};

export function DivisionRoster({ division }: DivisionRosterProps) {
  const headingId = `${division.id}-heading`;

  return (
    <Section id={division.id} labelledBy={headingId} spacing="compact">
      <header
        style={divisionColor(division.id)}
        className="grid gap-4 border-b border-border pb-6 lg:grid-cols-12 lg:gap-8"
      >
        <div className="lg:col-span-7">
          <p className="flex items-center gap-3 text-sm tracking-wider text-text-secondary uppercase">
            <span
              aria-hidden
              className="size-2 rounded-full bg-current text-(--division-color) dot-glow"
            />
            {division.function}
          </p>
          <h2 id={headingId} className="mt-3 text-h3 text-text">
            {division.name}
          </h2>
        </div>
        <p className="max-w-xl lg:col-span-5 lg:pt-8">{division.summary}</p>
      </header>
      <WorkerTable workers={division.workers} caption={division.name} />
    </Section>
  );
}
