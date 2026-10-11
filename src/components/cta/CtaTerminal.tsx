"use client";

import type { MotionValue } from "motion/react";
import home from "@/content/home.json";
import { CtaTerminalTitle } from "./CtaTerminalTitle";
import { useBootFrame } from "./useBootFrame";

const { terminal, terminalLabel } = home.finalCta;
const [command, ...outputs] = terminal;

const outputClasses: Record<string, string> = {
  output: "text-text-secondary",
  note: "text-text-tertiary before:content-['#_']",
};

const cursor = (
  <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-text motion-safe:animate-blink" />
);

// A terminal that boots as you scroll in. Untyped characters and unseen lines
// keep their space (invisible, not removed), so the panel never changes size.
export function CtaTerminal({ progress }: { progress: MotionValue<number> }) {
  const { typedCount, visibleLines } = useBootFrame(progress, command.text.length);
  const isTyping = typedCount < command.text.length;
  const isBooted = visibleLines === outputs.length;

  return (
    <div
      role="img"
      aria-label={terminalLabel}
      className="overflow-hidden rounded-card border border-border bg-bg font-mono text-sm"
    >
      <CtaTerminalTitle progress={progress} />
      <div className="p-5 leading-7">
        <p className="text-text before:text-text-tertiary before:content-['$_']">
          {command.text.slice(0, typedCount)}
          {isTyping && typedCount > 0 && cursor}
          <span className="invisible">{command.text.slice(typedCount)}</span>
        </p>
        {outputs.map((line, index) => (
          <p
            key={line.text}
            className={`transition duration-300 ${outputClasses[line.kind]} ${index < visibleLines ? "" : "translate-y-1 opacity-0"}`}
          >
            {line.text}
          </p>
        ))}
        <p
          className={`text-text-tertiary transition-opacity duration-300 ${isBooted ? "" : "opacity-0"}`}
        >
          {"$\u00a0"}
          {cursor}
        </p>
      </div>
    </div>
  );
}
