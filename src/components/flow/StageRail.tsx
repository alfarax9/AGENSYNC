import { Check } from "lucide-react";
import home from "@/content/home.json";

const { screen } = home.howItWorks;

type StageRailProps = {
  activeIndex: number;
  title: string;
  /** Restarts the current stage's underline whenever the step is (re)picked. */
  run: number;
  isRunning: boolean;
};

// The task's stages along the top of the window: done ones ticked, the rest
// waiting, and the current one's duo underline filling over the step's time,
// in step with (and pausing with) the step's own progress bar. On narrow
// screens only the current stage keeps its label.
export function StageRail({ activeIndex, title, run, isRunning }: StageRailProps) {
  return (
    <div className="flex items-center gap-4 border-b border-border px-4 py-3 sm:px-5">
      <p className="shrink-0 text-sm text-text">{title}</p>
      <ol className="ml-auto flex items-center gap-1 overflow-clip text-[0.6875rem]">
        {screen.stages.map((stage, index) => {
          const isDone = index < activeIndex;
          const isActive = index === activeIndex;
          return (
            <li
              key={stage}
              className={`relative flex items-center gap-1 rounded-full px-2 py-1 transition-colors duration-500 ${isActive ? "bg-overlay text-text" : isDone ? "text-text-secondary" : "text-text-tertiary"}`}
            >
              {isDone && <Check aria-hidden className="size-3 text-highlight-from" />}
              <span className={isActive ? "" : "hidden md:inline"}>{stage}</span>
              {isActive && (
                <span
                  key={run}
                  style={{ animationPlayState: isRunning ? "running" : "paused" }}
                  className="absolute inset-x-2 -bottom-px h-px origin-left bg-duo motion-safe:animate-step-fill"
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
