import { Paperclip } from "lucide-react";
import home from "@/content/home.json";
import { TypingText } from "./TypingText";
import { WindowButton } from "./WindowButton";

const { brief } = home.howItWorks.screen;

// Step 1: the new-task form, the brief typing itself in, files attached, a
// budget and a sign-off policy set, and then your cursor clicking Send.
export function ScreenBrief({ onAction, isPaused }: { onAction: () => void; isPaused: boolean }) {
  return (
    <div className="flex h-full flex-col gap-4">
      <p className="text-xs text-text-tertiary">{brief.heading}</p>
      <div className="rounded-card border border-border-strong bg-bg/60 p-4">
        <p className="text-[0.6875rem] text-text-tertiary">{brief.briefLabel}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text">
          <TypingText text={brief.text} isPaused={isPaused} />
        </p>
        <p className="mt-4 flex flex-wrap gap-2">
          {brief.files.map((file, index) => (
            <span
              key={file}
              style={{ animationDelay: `${2.4 + index * 0.25}s` }}
              className="flex items-center gap-1.5 rounded-full border border-border-strong px-2.5 py-1 font-mono text-[0.6875rem] text-text-secondary motion-safe:animate-rise"
            >
              <Paperclip aria-hidden className="size-3" />
              {file}
            </span>
          ))}
        </p>
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 text-xs">
        <p className="text-text-tertiary">
          {brief.budgetLabel} <span className="ml-1 font-mono text-text">{brief.budget}</span>
        </p>
        <p className="flex items-center gap-2 text-text-tertiary">
          {brief.signoffLabel}
          <span className="rounded-full bg-overlay px-2.5 py-1 text-text">{brief.signoff[0]}</span>
          <span className="hidden sm:inline">{brief.signoff[1]}</span>
        </p>
        <span className="ml-auto">
          <WindowButton isPrimary isCalling clickAt={4.3} onClick={onAction}>
            {brief.send}
          </WindowButton>
        </span>
      </div>
    </div>
  );
}
