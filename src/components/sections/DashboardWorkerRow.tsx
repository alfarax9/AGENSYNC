import { divisionColor, findDivisionOfWorker } from "@/lib/divisions";

type DashboardWorkerRowProps = {
  row: { workerId: string; model: string; label: string; status: string; cost: string };
};

const activeStatuses = ["Working", "In review"];

export function DashboardWorkerRow({ row }: DashboardWorkerRowProps) {
  const division = findDivisionOfWorker(row.workerId);
  const worker = division?.workers.find((candidate) => candidate.id === row.workerId);
  const isActive = activeStatuses.includes(row.status);

  return (
    <tr style={division ? divisionColor(division.id) : undefined}>
      <td className="py-2.5 pr-3">
        <span className="flex items-center gap-2 text-text">
          <span className="size-1.5 shrink-0 rounded-full bg-(--division-color)" />
          {worker?.name}
        </span>
      </td>
      <td className="hidden py-2.5 pr-3 font-mono sm:table-cell">
        {row.model} <span className="text-text-tertiary">· {row.label}</span>
      </td>
      <td className={`py-2.5 pr-3 ${isActive ? "text-highlight-to" : "text-text-tertiary"}`}>
        {row.status}
      </td>
      <td className="py-2.5 text-right font-mono text-text">{row.cost}</td>
    </tr>
  );
}
