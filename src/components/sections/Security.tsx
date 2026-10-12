import { ShieldCheck } from "lucide-react";
import { RevealWords } from "@/components/motion/RevealWords";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";

// A checklist of outlined rows: the amber tick marks each as a guarantee, and
// the title says what it is, so the colour never carries meaning on its own.
export function Security() {
  const { security } = home;

  return (
    <Section labelledBy="security-heading">
      <SectionHeader
        headingId="security-heading"
        eyebrow={security.eyebrow}
        icon={ShieldCheck}
        heading={security.heading}
      />
      <dl className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2">
        {security.items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 rounded-2xl border border-border bg-bg-alt p-6 transition-colors hover:border-border-strong md:last:odd:col-span-2"
          >
            <ShieldCheck
              aria-hidden
              strokeWidth={1.5}
              className="mt-0.5 size-5 shrink-0 text-amber"
            />
            <div>
              <dt className="reveal-text text-lg text-text">
                <RevealWords text={item.title} />
              </dt>
              <dd className="reveal-text mt-2">
                <RevealWords text={item.body} />
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </Section>
  );
}
