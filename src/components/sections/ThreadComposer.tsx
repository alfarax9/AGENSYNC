import { ArrowUp } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";

type ThreadComposerProps = {
  text: string;
  placeholder: string;
};

// The message field under the thread: your words appear in it as they are
// typed, the send button lights up while there is something to send, and it
// empties once the message goes.
export function ThreadComposer({ text, placeholder }: ThreadComposerProps) {
  const hasText = text.length > 0;

  return (
    <GlassPanel className="flex items-center gap-3 rounded-full! py-1.5 pr-1.5 pl-4">
      <p
        className={`min-w-0 flex-1 truncate text-sm ${hasText ? "text-text" : "text-text-tertiary"}`}
      >
        {hasText ? text : placeholder}
        {hasText && (
          <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-text motion-safe:animate-blink" />
        )}
      </p>
      <span
        className={`grid size-8 shrink-0 place-items-center rounded-full transition-[background-color,box-shadow] duration-300 ${hasText ? "bg-duo text-bg shadow-duo" : "bg-overlay text-text-tertiary"}`}
      >
        <ArrowUp aria-hidden strokeWidth={2} className="size-4" />
      </span>
    </GlassPanel>
  );
}
