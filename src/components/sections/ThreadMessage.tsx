import { Mascot } from "@/components/ui/Mascot";
import { divisionColor, findDivisionOfWorker, findWorker } from "@/lib/divisions";

type ThreadMessageProps = {
  message: { author?: string; workerId?: string; text: string };
  you: string;
};

// One message in the agent thread. Yours sit on the right inside the duo
// border; a worker's sit on the left under its mascot and name, in its
// division's color. Each grows into place, pushing the thread up.
export function ThreadMessage({ message, you }: ThreadMessageProps) {
  const worker = message.workerId ? findWorker(message.workerId) : undefined;
  const division = message.workerId ? findDivisionOfWorker(message.workerId) : undefined;

  if (!worker || !division)
    return (
      <li className="grid motion-safe:animate-message-in">
        <div className="flex min-h-0 justify-end">
          <p className="max-w-[80%] rounded-2xl rounded-br-md px-3.5 py-2 text-sm text-text border-duo [--duo-fill:var(--color-surface)]">
            <span className="sr-only">{you}: </span>
            {message.text}
          </p>
        </div>
      </li>
    );

  return (
    <li className="grid motion-safe:animate-message-in" style={divisionColor(division.id)}>
      <div className="flex min-h-0 items-end gap-2.5">
        <Mascot divisionId={division.id} size={32} />
        <div className="max-w-[82%] rounded-2xl rounded-bl-md border border-border-strong bg-bg/55 px-3.5 py-2 backdrop-blur-md">
          <p className="text-xs text-(--division-color)">{worker.name}</p>
          <p className="mt-0.5 text-sm text-text">{message.text}</p>
        </div>
      </div>
    </li>
  );
}
