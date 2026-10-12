import { MessageCircleQuestion } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import faq from "@/content/faq.json";
import { FaqItem } from "./FaqItem";

// The first half of the questions in the left column, the rest in the right.
// Each column is its own stack, so an answer opening pushes down only the
// cards below it, never the card beside it. On one column the order is the
// same as the source.
const half = Math.ceil(faq.items.length / 2);
const columns = [faq.items.slice(0, half), faq.items.slice(half)];

export function Faq() {
  return (
    <Section id={faq.id} labelledBy="faq-heading" hasGlow>
      <SectionHeader
        headingId="faq-heading"
        eyebrow={faq.eyebrow}
        icon={MessageCircleQuestion}
        heading={faq.heading}
      />
      <div className="mt-12 grid items-start gap-4 md:mt-16 md:grid-cols-2">
        {columns.map((items) => (
          <div key={items[0].id} className="flex flex-col gap-4">
            {items.map((item) => (
              <FaqItem key={item.id} id={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
