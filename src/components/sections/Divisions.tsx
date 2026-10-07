import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";
import { divisions } from "@/lib/divisions";
import { DivisionCard } from "./DivisionCard";

export function Divisions() {
  const content = home.divisions;

  return (
    <Section id={content.id} labelledBy="divisions-heading" tone="alt">
      <SectionHeader
        headingId="divisions-heading"
        heading={content.heading}
        intro={content.intro}
      />
      <p className="mt-4 text-sm text-text-tertiary">{content.waveLegend}</p>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {divisions.map((division, index) => (
          <Reveal key={division.id} index={index % 4}>
            <DivisionCard division={division} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
