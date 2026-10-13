import { GlassPanel } from "@/components/ui/GlassPanel";
import home from "@/content/home.json";
import site from "@/content/site.json";

const visual = home.platform.visuals.models;
// Centers of the four equal source columns in the 400-unit-wide drawing.
const columnCenters = [50, 150, 250, 350];

// Four ways to connect models, their lines meeting in AMORA, which probes
// whatever arrives. The dashes flow toward the hub.
export function ModelsVisual() {
  return (
    <div role="img" aria-label={visual.label} className="w-full max-w-md">
      <ul className="grid grid-cols-4 gap-2">
        {visual.sources.map((source) => (
          <li key={source}>
            <GlassPanel className="px-1 py-2.5 text-center text-xs text-text">{source}</GlassPanel>
          </li>
        ))}
      </ul>
      <svg aria-hidden viewBox="0 0 400 100" preserveAspectRatio="none" className="h-24 w-full">
        {columnCenters.map((x) => (
          <path
            key={x}
            d={`M${x} 0 C ${x} 55, 200 45, 200 100`}
            fill="none"
            strokeWidth={1.2}
            strokeDasharray="4 3"
            vectorEffect="non-scaling-stroke"
            className="stroke-text-secondary motion-safe:animate-dash"
          />
        ))}
      </svg>
      <div className="flex flex-col items-center gap-4">
        <span className="rounded-2xl px-6 py-4 font-mono text-sm font-bold tracking-[0.2em] text-text shadow-duo-strong border-duo">
          {site.name}
        </span>
        <p className="font-mono text-xs text-text-secondary">{visual.probes}</p>
      </div>
    </div>
  );
}
