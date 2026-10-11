import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import home from "@/content/home.json";
import { PillarEvidence } from "./PillarEvidence";

// Heading pinned on the left while the three points scroll past on the right.
// Each point is a ruled row with its evidence, not a card.
export function Pillars() {
  const { pillars } = home;

  return (
    <Section labelledBy="pillars-heading" tone="alt">
      <div className="grid gap-12 lg:grid-cols-12">
        <h2
          id="pillars-heading"
          className="self-start text-h2 text-balance text-text lg:sticky lg:top-32 lg:col-span-4"
        >
          {pillars.heading}
        </h2>
        <ol className="lg:col-span-8">
          {pillars.items.map((item, index) => (
            <Reveal
              key={item.id}
              index={index}
              className="border-t border-border py-10 first:border-t-0 first:pt-0 lg:first:pt-2"
            >
              <h3 className="text-h4 text-text">{item.title}</h3>
              <p className="mt-3 max-w-xl">{item.body}</p>
              <div className="mt-6">
                <PillarEvidence lines={item.evidence} />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
