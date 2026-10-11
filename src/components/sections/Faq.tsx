import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import faq from "@/content/faq.json";

// Every answer stays on the page: nine short answers do not need a disclosure
// widget, and visitors skim them side by side.
export function Faq() {
  return (
    <Section id={faq.id} labelledBy="faq-heading" tone="alt">
      <SectionHeader headingId="faq-heading" heading={faq.heading} />
      <dl className="mt-12 gap-x-16 md:columns-2">
        {faq.items.map((item) => (
          <div key={item.id} className="break-inside-avoid border-t border-border py-6">
            <dt className="font-semibold text-text">{item.question}</dt>
            <dd className="mt-2 max-w-prose text-sm">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
