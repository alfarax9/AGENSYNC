import { Mascot } from "@/components/ui/Mascot";
import { divisionColor, findDivisionOfWorker, findWorker } from "@/lib/divisions";

type PlanRowProps = {
  row: { workerId: string; task: string; cost: string };
  index: number;
};

// One step of the plan: who does it (mascot, role, division), what, and what
// it is expected to cost. Rows rise in one after another.
export function PlanRow({ row, index }: PlanRowProps) {
  const worker = findWorker(row.workerId);
  const division = findDivisionOfWorker(row.workerId);

  return (
    <li
      style={{ ...divisionColor(division?.id ?? ""), animationDelay: `${0.5 + index * 0.35}s` }}
      className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-border py-2 last:border-b-0 motion-safe:animate-rise"
    >
      {division && <Mascot divisionId={division.id} size={32} />}
      <span className="min-w-0">
        <span className="block truncate text-sm text-text">{row.task}</span>
        <span className="block truncate text-[0.6875rem] text-(--division-color)">
          {worker?.name} · {division?.name}
        </span>
      </span>
      <span className="font-mono text-xs text-text-secondary">{row.cost}</span>
    </li>
  );
}
