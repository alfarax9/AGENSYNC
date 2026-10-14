import { Check, Plug, X } from "lucide-react";
import home from "@/content/home.json";
import type { RequirementCheck } from "@/lib/brainDemo";
import { requirements } from "@/lib/divisions";

const labels = home.brains.demo;
// The probe line takes this long before the first check starts.
const startDelay = 1.6;
const stepDelay = 0.45;

const results = {
  met: { icon: Check, className: "text-highlight-from", text: labels.met },
  missing: { icon: X, className: "text-danger", text: labels.missing },
  plugin: { icon: Plug, className: "text-text-tertiary", text: labels.pluginAttached },
};

export const checksDuration = (count: number) => startDelay + count * stepDelay + 0.5;

// One row per requirement the worker has: a bar fills as the probe runs, then
// the result shows, in words as well as color. Rows run one after another.
export function ProbeChecks({ checks }: { checks: RequirementCheck[] }) {
  return (
    <ul className="flex min-h-[5.75rem] flex-col gap-2.5">
      {checks.map((check, index) => {
        const result = results[check.status];
        const delay = startDelay + index * stepDelay;
        return (
          <li
            key={check.code}
            className="grid grid-cols-[minmax(0,7.5rem)_1fr_auto] items-center gap-3 text-xs"
          >
            <span className="text-text-secondary">{requirements[check.code].label}</span>
            <span className="h-1 overflow-clip rounded-full bg-overlay">
              <span
                style={{ animationDelay: `${delay}s` }}
                className="block h-full origin-left rounded-full bg-text/70 motion-safe:animate-probe-fill"
              />
            </span>
            <span
              style={{ animationDelay: `${delay + 0.5}s` }}
              className={`flex items-center gap-1 font-mono motion-safe:animate-probe-result ${result.className}`}
            >
              <result.icon aria-hidden className="size-3.5" />
              {check.status === "plugin" ? null : result.text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
