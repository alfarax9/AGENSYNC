import { Building2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";
import { divisions } from "@/lib/divisions";
import { DivisionRow } from "./DivisionRow";

export function Divisions() {
  const content = home.divisions;

  return (
    <Section id={content.id} labelledBy="divisions-heading">
      <SectionHeader
        headingId="divisions-heading"
        eyebrow={content.eyebrow}
        icon={Building2}
        heading={content.heading}
        intro={content.intro}
      />
      <p className="mt-6 font-mono text-xs text-text-tertiary">{content.waveLegend}</p>
      <ul className="mt-10 divide-y divide-border overflow-clip rounded-panel border border-border bg-bg-alt">
        {divisions.map((division, index) => (
          <Reveal key={division.id} index={index % 3}>
            <DivisionRow division={division} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
