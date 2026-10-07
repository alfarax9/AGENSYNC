import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";
import { InstallTerminal } from "./InstallTerminal";

export function Install() {
  const { install } = home;

  return (
    <Section id={install.id} labelledBy="install-heading">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            headingId="install-heading"
            heading={install.heading}
            intro={install.intro}
          />
          <p className="mt-4 text-sm text-text-tertiary">{install.notice}</p>
        </div>
        <InstallTerminal />
      </div>
    </Section>
  );
}
