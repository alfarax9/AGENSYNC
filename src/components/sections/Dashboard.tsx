import {
  CirclePause,
  ClipboardCheck,
  LayoutDashboard,
  type LucideIcon,
  Route,
  WalletCards,
} from "lucide-react";
import type { CSSProperties } from "react";
import { RevealWords } from "@/components/motion/RevealWords";
import { IconTile } from "@/components/ui/IconTile";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";
import { DashboardMockup } from "./DashboardMockup";

const featureIcons: Record<string, LucideIcon> = {
  plan: ClipboardCheck,
  handoffs: Route,
  budget: WalletCards,
  pause: CirclePause,
};

const glowStyle = { "--nebula-x": "30%", "--nebula-y": "50%" } as CSSProperties;

export function Dashboard() {
  const { dashboard } = home;

  return (
    <Section id={dashboard.id} labelledBy="dashboard-heading">
      <SectionHeader
        headingId="dashboard-heading"
        eyebrow={dashboard.eyebrow}
        icon={LayoutDashboard}
        heading={dashboard.heading}
        intro={dashboard.intro}
      />
      <div className="relative isolate mt-12 md:mt-16">
        <div
          aria-hidden
          style={glowStyle}
          className="absolute inset-x-[5%] -top-10 bottom-1/3 -z-10 bg-nebula opacity-45 blur-3xl"
        />
        <DashboardMockup />
      </div>
      <ul className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {dashboard.features.map((feature) => (
          <li key={feature.id}>
            <IconTile icon={featureIcons[feature.id]} />
            <p className="mt-6 font-mono text-xs text-text-tertiary uppercase">{feature.tag}</p>
            <h3 className="reveal-text mt-2 text-lg text-text">
              <RevealWords text={feature.title} />
            </h3>
            <p className="reveal-text mt-2 text-sm">
              <RevealWords text={feature.body} />
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
