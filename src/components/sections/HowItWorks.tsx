import { Workflow } from "lucide-react";
import { FlowShowcase } from "@/components/flow/FlowShowcase";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";

export function HowItWorks() {
  const { howItWorks } = home;

  return (
    <Section id={howItWorks.id} labelledBy="how-it-works-heading" hasGlow>
      <SectionHeader
        headingId="how-it-works-heading"
        eyebrow={howItWorks.eyebrow}
        icon={Workflow}
        heading={howItWorks.heading}
        headingMuted={howItWorks.headingMuted}
      />
      <FlowShowcase />
    </Section>
  );
}
