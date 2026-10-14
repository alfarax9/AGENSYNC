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
import { PillarLight } from "./PillarLight";

// Per point: its illustration, where its two light sources sit (amber and
// blue, on opposite sides so neighbouring cards differ), and its width in the
// six columns, so two wide cards sit over three narrower ones.
const layout: Record<string, { visual: ReactNode; light: ReactNode; span: string }> = {
  rules: {
    visual: <GateVisual />,
    light: (
      <PillarLight
        amber="-top-1/3 left-[30%] size-[26rem]"
        blue="-bottom-1/2 -left-1/4 size-[30rem]"
      />
    ),
    span: "lg:col-span-3",
  },
  brains: {
    visual: <ModelVisual />,
    light: (
      <PillarLight
        amber="-top-1/2 -right-1/4 size-[26rem]"
        blue="top-[5%] left-[22%] size-[24rem]"
      />
    ),
    span: "lg:col-span-3",
  },
  handoffs: {
    visual: <HandoffVisual />,
    light: (
      <PillarLight
        amber="-top-1/4 left-[10%] size-[22rem]"
        blue="-bottom-1/3 -right-1/3 size-[26rem]"
      />
    ),
    span: "lg:col-span-2",
  },
  limits: {
    visual: <BudgetVisual />,
    light: (
      <PillarLight
        amber="top-[20%] -left-1/3 size-[24rem]"
        blue="-top-1/4 -right-1/4 size-[24rem]"
      />
    ),
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
              light={layout[item.id].light}
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
