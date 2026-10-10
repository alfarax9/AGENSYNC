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
        <h3 className="mt-10 text-xl font-semibold text-text">{install.commandsHeading}</h3>
        <dl className="mt-4 divide-y divide-border border-y border-border">
          {install.commands.map((item) => (
            <div key={item.command} className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-6">
              <dt className="font-mono text-sm text-text">{item.command}</dt>
              <dd className="sm:col-span-2">{item.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
