import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";
import { divisions } from "@/lib/divisions";
import { DivisionRow } from "./DivisionRow";

export function Divisions() {
  const content = home.divisions;

  return (
    <Section id={content.id} labelledBy="divisions-heading" tone="alt">
      <SectionHeader
        headingId="divisions-heading"
        heading={content.heading}
        intro={content.intro}
      />
      <p className="mt-4 font-mono text-xs text-text-tertiary">{content.waveLegend}</p>
      <ul className="mt-12 divide-y divide-border border-y border-border">
        {divisions.map((division, index) => (
          <Reveal key={division.id} index={index % 3}>
            <DivisionRow division={division} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
