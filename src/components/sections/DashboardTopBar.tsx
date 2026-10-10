import { Lock } from "lucide-react";
import home from "@/content/home.json";

const { address, runtime, budget, pause } = home.dashboard.mockup;

export function DashboardTopBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 font-mono text-xs">
      <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <li className="flex items-center gap-1.5 text-text">
          <Lock aria-hidden className="size-3" />
          {address}
        </li>
        {runtime.map((service) => (
          <li key={service.label} className="flex items-center gap-1.5 text-text-tertiary">
            {service.label}
            <span className={service.status === "OK" ? "text-highlight-to" : ""}>
              {service.status}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <span className="hidden items-center gap-2 text-text-tertiary sm:flex">
          {budget.label}
          <span className="h-1.5 w-20 overflow-hidden rounded-full bg-overlay">
            <span
              style={{ width: `${budget.percent}%` }}
              className="block h-full bg-highlight-to"
            />
          </span>
          <span className="text-text">{budget.spent}</span>/ {budget.limit}
        </span>
        <span className="rounded-card border border-border px-3 py-1.5 font-sans text-text">
          {pause}
        </span>
      </div>
    </div>
  );
}
