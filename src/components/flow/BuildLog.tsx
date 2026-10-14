import home from "@/content/home.json";
import { divisionColor } from "@/lib/divisions";

const { log } = home.howItWorks.screen.build;

// The run log under the workers, a line arriving every half second, each
// tagged with the division that wrote it in that division's color.
export function BuildLog() {
  return (
    <ol className="rounded-card border border-border bg-bg/70 p-3 font-mono text-[0.6875rem] leading-relaxed">
      {log.map((line, index) => (
        <li
          key={line.time}
          style={{ ...divisionColor(line.division), animationDelay: `${1 + index * 0.55}s` }}
          className="flex gap-3 whitespace-nowrap motion-safe:animate-rise"
        >
          <span className="text-text-tertiary">{line.time}</span>
          <span className="w-16 shrink-0 text-(--division-color)">{line.division}</span>
          <span className="truncate text-text-secondary">{line.text}</span>
        </li>
      ))}
    </ol>
  );
}
