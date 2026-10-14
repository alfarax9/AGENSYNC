import { Check, LoaderCircle } from "lucide-react";

type GateRowProps = {
  check: { name: string; result: string };
  index: number;
};

const stepDelay = 0.55;

// One gate check as code: it spins while running, then its tick and its
// result replace the spinner. Checks run one after another.
export function GateRow({ check, index }: GateRowProps) {
  const done = `${0.6 + index * stepDelay}s`;

  return (
    <li
      style={{ animationDelay: `${index * stepDelay}s` }}
      className="grid grid-cols-[1.25rem_7rem_1fr] items-center gap-3 border-b border-border py-2 font-mono text-xs last:border-b-0 motion-safe:animate-rise"
    >
      <span className="relative grid size-4 place-items-center">
        <span
          style={{ animationDelay: done }}
          className="absolute inset-0 motion-safe:animate-fade-out motion-reduce:hidden"
        >
          <LoaderCircle
            aria-hidden
            className="size-4 text-text-tertiary motion-safe:animate-spin"
          />
        </span>
        <Check
          aria-hidden
          style={{ animationDelay: done }}
          className="size-4 text-highlight-from motion-safe:animate-rise"
        />
      </span>
      <span className="text-text">{check.name}</span>
      <span
        style={{ animationDelay: done }}
        className="text-text-secondary motion-safe:animate-rise"
      >
        {check.result}
      </span>
    </li>
  );
}
