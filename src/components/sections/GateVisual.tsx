import { GlassPanel } from "@/components/ui/GlassPanel";
import home from "@/content/home.json";

const gate = home.pillars.visuals.gate;
const toPercent = (amount: number) => `${(amount / gate.max) * 100}%`;

// A quality gate as a meter: the result overshoots its limit, so the task
// fails and goes back for another attempt. Scale and positions come from data.
export function GateVisual() {
  return (
    <GlassPanel className="w-full max-w-md p-6">
      <div role="img" aria-label={gate.label}>
        <p className="flex items-baseline justify-between font-mono text-sm">
          <span className="text-text-secondary">{gate.name}</span>
          <span className="text-amber">[{gate.status}]</span>
        </p>
        <p className="mt-2 text-h2 text-text">
          {gate.value}
          {gate.unit}
        </p>
        <div className="relative mt-6 h-3 rounded-full border border-border-strong bg-overlay">
          <span
            style={{ width: toPercent(gate.value) }}
            className="absolute inset-y-0 left-0 rounded-full bg-duo"
          />
          <span
            style={{ left: toPercent(gate.limit) }}
            className="absolute -inset-y-1.5 w-px bg-text"
          />
          <span
            style={{ left: toPercent(gate.limit) }}
            className="absolute top-full mt-3 -translate-x-1/2 font-mono text-xs whitespace-nowrap text-text-secondary"
          >
            {gate.limitLabel} {gate.limit}
            {gate.unit}
          </span>
        </div>
        <p className="mt-12 font-mono text-xs text-text-secondary">{gate.next}</p>
      </div>
    </GlassPanel>
  );
}
