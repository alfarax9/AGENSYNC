import { Check } from "lucide-react";
import { Mascot } from "@/components/ui/Mascot";
import { divisionColor, findDivisionOfWorker, findWorker } from "@/lib/divisions";

type BuildRowProps = {
  row: { workerId: string; state: string; file: string; isDone: boolean };
  index: number;
};

// One worker at work: done ones ticked with what they handed over, the one
// still going with a filling progress bar.
export function BuildRow({ row, index }: BuildRowProps) {
  const worker = findWorker(row.workerId);
  const division = findDivisionOfWorker(row.workerId);

  return (
    <li
      style={{ ...divisionColor(division?.id ?? ""), animationDelay: `${index * 0.3}s` }}
      className="grid grid-cols-[auto_1fr_auto] items-center gap-3 motion-safe:animate-rise"
    >
      {division && <Mascot divisionId={division.id} size={32} />}
      <span className="min-w-0">
        <span className="block truncate text-sm text-text">{worker?.name}</span>
        <span className="mt-1 block h-1 overflow-clip rounded-full bg-overlay">
          <span
            className={`block h-full origin-left rounded-full ${row.isDone ? "bg-(--division-color)" : "w-2/3 bg-duo motion-safe:animate-grow"}`}
          />
        </span>
      </span>
      <span className="flex items-center gap-1.5 font-mono text-[0.6875rem] text-text-secondary">
        {row.isDone && <Check aria-hidden className="size-3.5 text-highlight-from" />}
        <span className="hidden sm:inline">{row.state} ·</span> {row.file}
      </span>
    </li>
  );
}
