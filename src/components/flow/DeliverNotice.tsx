import { Mascot } from "@/components/ui/Mascot";
import home from "@/content/home.json";
import { findDivisionByName } from "@/lib/divisions";

const { deliver } = home.howItWorks.screen;
const message = home.telegram.messages.find((candidate) =>
  candidate.text.includes("passed every gate"),
);
const division = message && findDivisionByName(message.topic);

// The Telegram summary that reaches your phone as the task lands, sliding in
// over the bottom of the preview.
export function DeliverNotice() {
  return (
    <div
      className="absolute top-2 left-2 flex max-w-64 items-start gap-2.5 rounded-2xl border border-border-strong bg-surface/95 p-3 shadow-glass backdrop-blur-md motion-safe:animate-rise sm:top-auto sm:bottom-2"
      style={{ animationDelay: "1.2s" }}
    >
      {division && <Mascot divisionId={division.id} size={32} />}
      <p className="text-[0.6875rem] leading-snug text-text-secondary">
        <span className="block text-text">{deliver.notice}</span>
        {message?.text}
      </p>
    </div>
  );
}
