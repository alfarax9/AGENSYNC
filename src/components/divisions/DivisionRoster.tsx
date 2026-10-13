import { Mascot } from "@/components/ui/Mascot";
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
        <div className="flex items-center gap-5 lg:col-span-7">
          <Mascot divisionId={division.id} size={96} />
          <div>
            <p className="text-sm tracking-wider text-(--division-color) uppercase">
              {division.function}
            </p>
            <h2 id={headingId} className="mt-2 text-h3 text-text">
              {division.name}
            </h2>
          </div>
        </div>
        <p className="max-w-xl self-center lg:col-span-5">{division.summary}</p>
      </header>
      <WorkerTable workers={division.workers} caption={division.name} />
    </Section>
  );
}
