import { CountUp } from "@/components/motion/CountUp";
import { Section } from "@/components/ui/Section";
import home from "@/content/home.json";

export function Stats() {
  const { stats } = home;

  return (
    <Section labelledBy="stats-heading">
      <h2 id="stats-heading" className="sr-only">
        {stats.heading}
      </h2>
      <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
        {stats.items.map((item) => (
          <div key={item.id} className="flex flex-col-reverse gap-2 border-l border-border pl-6">
            <dt className="text-sm text-text-tertiary">{item.label}</dt>
            <dd className="font-mono text-h2 text-text tabular-nums">
              <CountUp value={item.value} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
