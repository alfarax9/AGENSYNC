import { Check, Plug, X } from "lucide-react";
import * as m from "motion/react-m";
import { checkAppear } from "@/components/motion/variants";
import home from "@/content/home.json";
import { requirements } from "@/lib/divisions";
import type { RequirementCheck } from "@/lib/brainDemo";

const labels = home.brains.demo;

const statusDisplay = {
  met: { icon: Check, className: "text-highlight-from", text: labels.met },
  missing: { icon: X, className: "text-danger", text: labels.missing },
  plugin: { icon: Plug, className: "text-text-tertiary", text: labels.pluginAttached },
};

type DemoChecksProps = {
  checks: RequirementCheck[];
  isAccepted: boolean;
  selectionKey: string;
};

// Keys include the selection, so every new pick replays the row-by-row check.
export function DemoChecks({ checks, isAccepted, selectionKey }: DemoChecksProps) {
  return (
    <div className="flex flex-col gap-4">
      <p
        aria-live="polite"
        className={`font-mono text-sm font-semibold uppercase ${isAccepted ? "text-highlight-from" : "text-danger"}`}
      >
        {isAccepted ? labels.accepted : labels.rejected}
      </p>
      <ul className="divide-y divide-border border-y border-border">
        {checks.map((check, index) => {
          const display = statusDisplay[check.status];
          return (
            <m.li
              key={`${selectionKey}-${check.code}`}
              variants={checkAppear}
              custom={index}
              initial="hidden"
              animate="visible"
              className="flex items-start gap-3 py-3 text-sm"
            >
              <display.icon aria-hidden className={`mt-0.5 size-4 shrink-0 ${display.className}`} />
              <span>
                <span className="text-text">{requirements[check.code].label}</span>
                <span className="text-text-tertiary"> · {check.detail ?? display.text}</span>
              </span>
            </m.li>
          );
        })}
      </ul>
    </div>
  );
}
