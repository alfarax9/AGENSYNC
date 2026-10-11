import { FlowShowcase } from "@/components/flow/FlowShowcase";
import { Section } from "@/components/ui/Section";
import home from "@/content/home.json";

export function HowItWorks() {
  const { howItWorks } = home;

  return (
    <Section id={howItWorks.id} labelledBy="how-it-works-heading">
      <h2
        id="how-it-works-heading"
        className="mx-auto max-w-4xl text-center text-h2 text-balance text-text"
      >
        {howItWorks.heading} <span className="text-text-tertiary">{howItWorks.headingMuted}</span>
      </h2>
      <FlowShowcase />
    </Section>
  );
}
