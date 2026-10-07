import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";
import { StepScroller } from "./StepScroller";

export function HowItWorks() {
  const { howItWorks } = home;

  return (
    <Section id={howItWorks.id} labelledBy="how-it-works-heading">
      <SectionHeader headingId="how-it-works-heading" heading={howItWorks.heading} />
      <StepScroller steps={howItWorks.steps} />
    </Section>
  );
}
