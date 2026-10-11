import { RevealWords } from "@/components/motion/RevealWords";
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
      <ul className="mt-12 gap-x-16 md:columns-2">
        {dashboard.features.map((feature) => (
          <li
            key={feature.id}
            className="grid break-inside-avoid gap-1 border-t border-border py-6 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
          >
            <p className="font-mono text-xs text-text-tertiary">{feature.tag}</p>
            <div>
              <h3 className="reveal-text font-semibold text-text">
                <RevealWords text={feature.title} />
              </h3>
              <p className="reveal-text mt-1 text-sm">
                <RevealWords text={feature.body} />
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
