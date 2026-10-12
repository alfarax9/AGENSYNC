import { RevealWords } from "@/components/motion/RevealWords";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import faq from "@/content/faq.json";

// Every answer stays on the page: nine short answers do not need a disclosure
// widget, and visitors skim them side by side.
export function Faq() {
  return (
    <Section id={faq.id} labelledBy="faq-heading">
      <SectionHeader headingId="faq-heading" heading={faq.heading} />
      <dl className="mt-12 gap-x-16 md:columns-2">
        {faq.items.map((item) => (
          <div key={item.id} className="break-inside-avoid border-t border-border py-6">
            <dt className="reveal-text font-semibold text-text">
              <RevealWords text={item.question} />
            </dt>
            <dd className="reveal-text mt-2 max-w-prose text-sm">
              <RevealWords text={item.answer} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
