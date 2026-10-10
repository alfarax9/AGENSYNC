import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";
import { DashboardMockup } from "./DashboardMockup";

export function Dashboard() {
  const { dashboard } = home;

  return (
    <Section id={dashboard.id} labelledBy="dashboard-heading" tone="alt">
      <SectionHeader
        headingId="dashboard-heading"
        heading={dashboard.heading}
        intro={dashboard.intro}
      />
      <DashboardMockup />
      <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {dashboard.features.map((feature) => (
          <li key={feature.id} className="border-l border-border pl-5">
            <h3 className="text-lg font-semibold text-text">{feature.title}</h3>
            <p className="mt-2">{feature.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
