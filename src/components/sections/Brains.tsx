import { BrainCircuit } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";
import { BrainDemo } from "./BrainDemo";
import { BrainManifest } from "./BrainManifest";

export function Brains() {
  const { brains } = home;

  return (
    <Section id={brains.id} labelledBy="brains-heading">
      <SectionHeader
        headingId="brains-heading"
        eyebrow={brains.eyebrow}
        icon={BrainCircuit}
        heading={brains.heading}
        intro={brains.intro}
      />
      <div className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-2">
        <BrainManifest slots={brains.anatomy} />
        <BrainDemo />
      </div>
    </Section>
  );
}
