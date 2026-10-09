import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";

export function Security() {
  const { security } = home;

  return (
    <Section labelledBy="security-heading" tone="alt">
      <SectionHeader headingId="security-heading" heading={security.heading} />
      <dl className="mt-10 divide-y divide-border border-y border-border">
        {security.items.map((item) => (
          <div key={item.id} className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-6">
            <dt className="font-semibold text-text">{item.title}</dt>
            <dd className="sm:col-span-2">{item.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
