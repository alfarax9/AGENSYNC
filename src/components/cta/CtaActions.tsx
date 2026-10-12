"use client";

import { RevealWords } from "@/components/motion/RevealWords";
import * as m from "motion/react-m";
import { reveal } from "@/components/motion/variants";
import { Button } from "@/components/ui/Button";
import home from "@/content/home.json";
import site from "@/content/site.json";
import { analyticsEvents } from "@/lib/analytics";

const { finalCta } = home;
// Starts after the last headline word has landed.
const firstIndex = finalCta.heading.split(" ").length;

export function CtaActions() {
  return (
    <m.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }}>
      <m.p variants={reveal} custom={firstIndex} className="reveal-text mt-6 max-w-xl text-lg">
        <RevealWords text={finalCta.body} />
      </m.p>
      <m.div
        variants={reveal}
        custom={firstIndex + 1}
        className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
      >
        <Button
          href={site.links.github}
          tracking={{ event: analyticsEvents.githubClick, location: "final-cta" }}
        >
          {finalCta.github}
        </Button>
        <Button
          href={site.links.telegram}
          variant="secondary"
          tracking={{ event: analyticsEvents.telegramClick, location: "final-cta" }}
        >
          {finalCta.telegram}
        </Button>
      </m.div>
    </m.div>
  );
}
