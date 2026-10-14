import home from "@/content/home.json";
import { BuildLog } from "./BuildLog";
import { BuildRow } from "./BuildRow";
import { HandoffDrops } from "./HandoffDrops";

const { build } = home.howItWorks.screen;

// Step 3: the divisions at work, each worker on its own model. The scope drops
// from Compass to Atelier and the design spec from Atelier to Forge, Forge is
// still building, and the log fills in.
export function ScreenBuild() {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <ol className="relative flex flex-col gap-3.5">
        <HandoffDrops />
        {build.rows.map((row, index) => (
          <BuildRow key={row.workerId} row={row} index={index} />
        ))}
      </ol>
      <BuildLog />
    </div>
  );
}
