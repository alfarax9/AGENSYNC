import { Mascot } from "@/components/ui/Mascot";
import { findDivisionOfWorker } from "@/lib/divisions";

const dots = [0, 1, 2];

// A worker's mascot with three dots pulsing one after another, the beat before
// its reply lands.
export function TypingBubble({ workerId }: { workerId: string }) {
  const division = findDivisionOfWorker(workerId);

  return (
    <li className="grid motion-safe:animate-message-in">
      <div className="flex min-h-0 items-end gap-2.5">
        {division && <Mascot divisionId={division.id} size={32} />}
        <span className="flex gap-1 rounded-2xl rounded-bl-md border border-border-strong bg-bg/55 px-3.5 py-3 backdrop-blur-md">
          {dots.map((dot) => (
            <span
              key={dot}
              style={{ animationDelay: `${dot * 0.18}s` }}
              className="size-1.5 rounded-full bg-text motion-safe:animate-typing-dot"
            />
          ))}
        </span>
      </div>
    </li>
  );
}
