import { Pause, Play } from "lucide-react";
import home from "@/content/home.json";

type FlowToolbarProps = {
  caption: string;
  position: string;
  isPaused: boolean;
  isAnnounced: boolean;
  onTogglePause: () => void;
};

const { controls } = home.howItWorks;

// What the agency is doing right now, in one line, plus the pause control the
// auto-advancing walk needs (WCAG 2.2.2). Captions are only announced while the
// walk is held, so a screen reader is not interrupted every few seconds.
export function FlowToolbar({
  caption,
  position,
  isPaused,
  isAnnounced,
  onTogglePause,
}: FlowToolbarProps) {
  const Icon = isPaused ? Play : Pause;

  return (
    <div className="flex items-start justify-between gap-4 border-b border-border px-4 py-3 sm:items-center sm:px-6">
      <p
        aria-live={isAnnounced ? "polite" : "off"}
        className="flex min-w-0 gap-3 font-mono text-xs text-text-secondary"
      >
        <span className="shrink-0 text-text-tertiary">{position}</span>
        <span>{caption}</span>
      </p>
      <div className="flex shrink-0 items-center gap-4">
        <span className="hidden font-mono text-xs text-text-tertiary lg:inline">
          {controls.hint}
        </span>
        <button
          type="button"
          onClick={onTogglePause}
          className="flex items-center gap-1.5 rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-text-secondary transition-colors hover:border-accent-glow hover:text-text"
        >
          <Icon aria-hidden className="size-3" />
          {isPaused ? controls.play : controls.pause}
        </button>
      </div>
    </div>
  );
}
