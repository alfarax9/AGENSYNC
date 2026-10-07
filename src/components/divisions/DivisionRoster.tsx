import { Section } from "@/components/ui/Section";
import { type Division, divisionColor } from "@/lib/divisions";
import { WorkerTable } from "./WorkerTable";

type DivisionRosterProps = {
  division: Division;
  tone: "base" | "alt";
};

export function DivisionRoster({ division, tone }: DivisionRosterProps) {
  const headingId = `${division.id}-heading`;

  return (
    <Section id={division.id} labelledBy={headingId} tone={tone}>
      <header
        style={divisionColor(division.id)}
        className="border-l-2 border-(--division-color) pl-4"
      >
        <p className="font-mono text-xs text-text-tertiary uppercase">{division.function}</p>
        <h2 id={headingId} className="mt-1 text-h3 text-text">
          {division.name}
        </h2>
        <p className="mt-2 max-w-2xl">{division.summary}</p>
      </header>
      <WorkerTable workers={division.workers} caption={division.name} />
    </Section>
  );
}
