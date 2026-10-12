import { Sparkles } from "lucide-react";
import { RevealWords } from "@/components/motion/RevealWords";
import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";
import { PillarEvidence } from "./PillarEvidence";

// Each card's nebula sits somewhere else, so the three do not read as copies.
const nebulaPositions = [
  "[--nebula-x:20%] [--nebula-y:70%]",
  "[--nebula-x:50%] [--nebula-y:85%]",
  "[--nebula-x:80%] [--nebula-y:60%]",
];

// Three cards after the Cosmoq feature panels: a nebula with the runtime's own
// record of the claim floating over it in glass, and the claim underneath.
export function Pillars() {
  const { pillars } = home;

  return (
    <Section labelledBy="pillars-heading">
      <SectionHeader
        headingId="pillars-heading"
        eyebrow={pillars.eyebrow}
        icon={Sparkles}
        heading={pillars.heading}
        intro={pillars.intro}
      />
      <ol className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-3">
        {pillars.items.map((item, index) => (
          <Reveal key={item.id} index={index}>
            <Card as="article" className="flex h-full flex-col overflow-clip">
              <div className="relative isolate flex min-h-64 items-end bg-bg-alt p-4">
                <div
                  aria-hidden
                  className={`absolute inset-0 -z-10 bg-nebula opacity-80 blur-2xl ${nebulaPositions[index]}`}
                />
                <div aria-hidden className="absolute inset-0 -z-10 bg-grain opacity-50" />
                <div className="w-full rounded-card border border-border-strong bg-bg/45 p-4 shadow-glass backdrop-blur-md">
                  <PillarEvidence lines={item.evidence} />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="reveal-text text-h4 text-text">
                  <RevealWords text={item.title} />
                </h3>
                <p className="reveal-text mt-3">
                  <RevealWords text={item.body} />
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
