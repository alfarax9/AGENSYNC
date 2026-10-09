import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Spotlight } from "@/components/ui/Spotlight";
import home from "@/content/home.json";

const accentTint = "color-mix(in oklch, var(--color-accent-glow) 16%, transparent)";

// One wide lead cell over two supporting cells: the first point is the one
// the rest depend on, so it gets the space instead of three equal columns.
export function Pillars() {
  const { pillars } = home;

  return (
    <Section labelledBy="pillars-heading" tone="alt">
      <SectionHeader headingId="pillars-heading" heading={pillars.heading} />
      <ol className="mt-12 grid gap-4 md:grid-cols-2">
        {pillars.items.map((item, index) => {
          const isLead = index === 0;
          return (
            <Reveal key={item.id} index={index} className={isLead ? "md:col-span-2" : undefined}>
              <Spotlight
                tint={accentTint}
                className={`flex h-full flex-col justify-end p-6 md:p-8 ${isLead ? "min-h-56 bg-grid" : ""}`}
              >
                <h3 className={`text-text ${isLead ? "text-h3" : "text-h4"}`}>{item.title}</h3>
                <p className={`mt-3 max-w-xl ${isLead ? "text-lg" : ""}`}>{item.body}</p>
              </Spotlight>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
