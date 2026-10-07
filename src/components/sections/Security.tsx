import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";

export function Security() {
  const { security } = home;

  return (
    <Section labelledBy="security-heading" tone="alt">
      <div className="grid gap-12 lg:grid-cols-3">
        <SectionHeader headingId="security-heading" heading={security.heading} />
        <dl className="divide-y divide-border border-y border-border lg:col-span-2">
          {security.items.map((item) => (
            <div key={item.id} className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-6">
              <dt className="font-semibold text-text">{item.title}</dt>
              <dd className="sm:col-span-2">{item.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
