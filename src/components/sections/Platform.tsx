import { Layers } from "lucide-react";
import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";
import { AgentThread } from "./AgentThread";
import { ControlVisual } from "./ControlVisual";
import { LightBeam } from "./LightBeam";
import { LightCurtain } from "./LightCurtain";
import { LightEclipse } from "./LightEclipse";
import { ModelProbe } from "./ModelProbe";
import { PlatformChips } from "./PlatformChips";
import { PlatformNav } from "./PlatformNav";
import { PlatformPanel } from "./PlatformPanel";

const visuals: Record<string, { visual: ReactNode; light: ReactNode }> = {
  workers: { visual: <AgentThread />, light: <LightCurtain /> },
  models: { visual: <ModelProbe />, light: <LightBeam /> },
  control: { visual: <ControlVisual />, light: <LightEclipse /> },
};

// An overview of the three layers after the Cosmoq features section: links to
// each panel stay pinned on the left while the panels scroll past, and each
// panel points on to the section that covers it in full.
export function Platform() {
  const { platform } = home;

  return (
    <Section id={platform.id} labelledBy="platform-heading">
      <SectionHeader
        headingId="platform-heading"
        eyebrow={platform.eyebrow}
        icon={Layers}
        heading={platform.heading}
        intro={platform.intro}
      />
      <div className="mt-12 grid grid-cols-1 items-start gap-8 md:mt-16 lg:grid-cols-12">
        <div className="lg:col-span-3 lg:self-stretch">
          <PlatformNav label={platform.navLabel} items={platform.panels} />
        </div>
        <div className="flex flex-col gap-8 lg:col-span-9">
          {platform.panels.map((panel) => (
            <PlatformPanel
              key={panel.id}
              panel={panel}
              chips={<PlatformChips chips={panel.chips} />}
              visual={visuals[panel.id].visual}
              light={visuals[panel.id].light}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
