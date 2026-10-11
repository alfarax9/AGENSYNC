import { RevealWords } from "@/components/motion/RevealWords";
import { FlowShowcase } from "@/components/flow/FlowShowcase";
import { Section } from "@/components/ui/Section";
import home from "@/content/home.json";

const leadWords = home.howItWorks.heading.split(" ").length;
const totalWords = leadWords + home.howItWorks.headingMuted.split(" ").length;

export function HowItWorks() {
  const { howItWorks } = home;

  return (
    <Section id={howItWorks.id} labelledBy="how-it-works-heading">
      <h2
        id="how-it-works-heading"
        className="reveal-text mx-auto max-w-4xl text-center text-h2 text-balance text-text"
      >
        <RevealWords text={howItWorks.heading} totalWords={totalWords} />{" "}
        <span className="text-text-tertiary">
          <RevealWords
            text={howItWorks.headingMuted}
            startIndex={leadWords}
            totalWords={totalWords}
          />
        </span>
      </h2>
      <FlowShowcase />
    </Section>
  );
}
