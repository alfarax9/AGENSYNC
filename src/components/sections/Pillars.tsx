import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";
import { BudgetVisual } from "./BudgetVisual";
import { GateVisual } from "./GateVisual";
import { HandoffVisual } from "./HandoffVisual";
import { ModelVisual } from "./ModelVisual";
import { PillarCard } from "./PillarCard";
import { PillarCta } from "./PillarCta";

// Per point: its illustration, where its nebula sits, and its width in the six
// columns, so two wide cards sit over three narrower ones.
const layout: Record<string, { visual: ReactNode; nebula: string; span: string }> = {
  rules: {
    visual: <GateVisual />,
    nebula: "[--nebula-x:20%] [--nebula-y:70%]",
    span: "lg:col-span-3",
  },
  brains: {
    visual: <ModelVisual />,
    nebula: "[--nebula-x:75%] [--nebula-y:80%]",
    span: "lg:col-span-3",
  },
  handoffs: {
    visual: <HandoffVisual />,
    nebula: "[--nebula-x:30%] [--nebula-y:60%]",
    span: "lg:col-span-2",
  },
  limits: {
    visual: <BudgetVisual />,
    nebula: "[--nebula-x:65%] [--nebula-y:85%]",
    span: "lg:col-span-2",
  },
};

// A bento grid after the Cosmoq feature cards: four points with an
// illustration each, then a card that sends the reader to the install.
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
      <ol className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-6">
        {pillars.items.map((item, index) => (
          <Reveal key={item.id} index={index} className={`flex ${layout[item.id].span}`}>
            <PillarCard
              nebula={layout[item.id].nebula}
              visual={layout[item.id].visual}
              title={item.title}
              body={item.body}
            />
          </Reveal>
        ))}
        <Reveal index={pillars.items.length} className="flex lg:col-span-2">
          <PillarCta />
        </Reveal>
      </ol>
    </Section>
  );
}
