import { CirclePause } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import home from "@/content/home.json";

const visual = home.platform.visuals.control;
const budgetLevel = `${(visual.budget.used / visual.budget.limit) * 100}%`;

// The three things that keep you in charge, as the dashboard shows them: a
// result waiting on your approval, today's budget, and the pause button.
export function ControlVisual() {
  return (
    <div role="img" aria-label={visual.label} className="flex w-full max-w-sm flex-col gap-4">
      <div className="rounded-2xl p-4 shadow-duo border-duo [--duo-fill:var(--color-surface)]">
        <p className="text-sm text-text">{visual.banner}</p>
        <p className="mt-4 flex gap-2 text-xs text-text">
          {visual.actions.map((action, index) => (
            <span
              key={action}
              className={`rounded-card px-3 py-1.5 ${index === visual.actions.length - 1 ? "font-semibold shadow-duo border-duo" : "border border-border-strong"}`}
            >
              {action}
            </span>
          ))}
        </p>
      </div>
      <GlassPanel className="p-4">
        <p className="flex justify-between text-xs">
          <span className="text-text-secondary">{visual.budget.label}</span>
          <span className="font-mono text-text">{visual.budget.text}</span>
        </p>
        <span className="mt-3 block h-2 rounded-full bg-overlay">
          <span style={{ width: budgetLevel }} className="block h-full rounded-full bg-duo" />
        </span>
      </GlassPanel>
      <GlassPanel className="flex items-center justify-center gap-2 rounded-full! py-3 text-sm text-text">
        <CirclePause aria-hidden strokeWidth={1.5} className="size-4" />
        {visual.pause}
      </GlassPanel>
    </div>
  );
}
