import { RevealWords } from "@/components/motion/RevealWords";
import home from "@/content/home.json";

const { setupHeading, setup } = home.install;

// The steps between the install command and the first task. They are in the
// order the dashboard asks for them, so the numbers carry real information.
export function InstallSetup() {
  return (
    <>
      <h3 className="reveal-text mt-12 text-xl font-semibold text-text">
        <RevealWords text={setupHeading} />
      </h3>
      <ol className="mt-4 divide-y divide-border border-y border-border">
        {setup.map((step, index) => (
          <li key={step.id} className="grid gap-1 py-4 sm:grid-cols-[2.5rem_14rem_1fr] sm:gap-6">
            <span className="font-mono text-sm text-text-tertiary">{index + 1}</span>
            <span className="reveal-text font-semibold text-text">
              <RevealWords text={step.title} />
            </span>
            <p className="reveal-text">
              <RevealWords text={step.body} />
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}
