import { RevealWords } from "@/components/motion/RevealWords";
import { Card } from "@/components/ui/Card";
import home from "@/content/home.json";

const { setupHeading, setup } = home.install;

// The steps between the install command and the first task. They are in the
// order the dashboard asks for them, so the numbers carry real information.
export function InstallSetup() {
  return (
    <Card className="p-6 md:p-8">
      <h3 className="reveal-text text-h4 text-text">
        <RevealWords text={setupHeading} />
      </h3>
      <ol className="mt-6 divide-y divide-border">
        {setup.map((step, index) => (
          <li key={step.id} className="flex gap-4 py-5 first:pt-0 last:pb-0">
            <span className="text-duo font-mono text-sm">
              {String(index + 1).padStart(2, "0")}.
            </span>
            <div>
              <p className="reveal-text text-text">
                <RevealWords text={step.title} />
              </p>
              <p className="reveal-text mt-1 text-sm">
                <RevealWords text={step.body} />
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}
