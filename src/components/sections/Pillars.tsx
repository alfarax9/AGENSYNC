import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";

export function Pillars() {
  const { pillars } = home;

  return (
    <Section labelledBy="pillars-heading" tone="alt">
      <SectionHeader headingId="pillars-heading" heading={pillars.heading} />
      <ol className="mt-12 grid gap-10 md:grid-cols-3">
        {pillars.items.map((item, index) => (
          <Reveal key={item.id} index={index} className="border-t border-border pt-6">
            <p className="font-mono text-sm text-text-tertiary">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-h4 text-text">{item.title}</h3>
            <p className="mt-3">{item.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
