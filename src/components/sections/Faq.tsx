import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import faq from "@/content/faq.json";

export function Faq() {
  return (
    <Section id={faq.id} labelledBy="faq-heading">
      <div className="grid gap-12 lg:grid-cols-5">
        <SectionHeader headingId="faq-heading" heading={faq.heading} />
        <div className="lg:col-span-3">
          <Accordion items={faq.items} />
        </div>
      </div>
    </Section>
  );
}
