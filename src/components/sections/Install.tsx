import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";
import { InstallTerminal } from "./InstallTerminal";

export function Install() {
  const { install } = home;

  return (
    <Section id={install.id} labelledBy="install-heading">
      <SectionHeader headingId="install-heading" heading={install.heading} intro={install.intro} />
      <p className="mt-4 text-sm text-text-tertiary">{install.notice}</p>
      <div className="mt-10 max-w-4xl">
        <InstallTerminal />
      </div>
    </Section>
  );
}
