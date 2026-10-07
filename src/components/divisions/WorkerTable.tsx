import { RequirementCode } from "@/components/ui/RequirementCode";
import pages from "@/content/pages.json";
import type { Worker } from "@/lib/divisions";
import { WorkerRow } from "./WorkerRow";

type WorkerTableProps = {
  workers: Worker[];
  caption: string;
};

const columns = pages.divisions.columns;

export function WorkerTable({ workers, caption }: WorkerTableProps) {
  return (
    <table className="mt-8 w-full text-left text-sm">
      <caption className="sr-only">{caption}</caption>
      <thead className="font-mono text-xs text-text-tertiary uppercase">
        <tr className="border-b border-border">
          <th scope="col" className="py-3 pr-4 font-normal">
            {columns.worker}
          </th>
          <th scope="col" className="py-3 pr-4 font-normal">
            {columns.requirements}
          </th>
          <th scope="col" className="py-3 text-right font-normal">
            {columns.wave}
          </th>
        </tr>
      </thead>
      <tbody>
        {workers.map((worker) => (
          <WorkerRow key={worker.id} worker={worker}>
            {worker.requirements.map((code) => (
              <RequirementCode key={code} code={code} />
            ))}
          </WorkerRow>
        ))}
      </tbody>
    </table>
  );
}
