import { SquareTerminal } from "lucide-react";
import { RevealWords } from "@/components/motion/RevealWords";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";
import { InstallSetup } from "./InstallSetup";
import { InstallTerminal } from "./InstallTerminal";

export function Install() {
  const { install } = home;

  return (
    <Section id={install.id} labelledBy="install-heading">
      <SectionHeader
        headingId="install-heading"
        eyebrow={install.eyebrow}
        icon={SquareTerminal}
        heading={install.heading}
        intro={install.intro}
      />
      <p className="reveal-text mt-4 text-sm text-text-tertiary">
        <RevealWords text={install.notice} />
      </p>
      <div className="mt-10 max-w-4xl">
        <InstallTerminal />
        <InstallSetup />
        <h3 className="reveal-text mt-12 text-xl font-semibold text-text">
          <RevealWords text={install.commandsHeading} />
        </h3>
        <dl className="mt-4 divide-y divide-border border-y border-border">
          {install.commands.map((item) => (
            <div key={item.command} className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-6">
              <dt className="font-mono text-sm text-text">{item.command}</dt>
              <dd className="reveal-text sm:col-span-2">
                <RevealWords text={item.body} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
