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
    <div className="mt-8 overflow-x-auto rounded-panel border border-border bg-bg-alt">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="text-xs tracking-wider text-text-secondary uppercase">
          <tr className="border-b border-border bg-surface">
            <th scope="col" className="py-4 pr-4 pl-6 font-normal">
              {columns.worker}
            </th>
            <th scope="col" className="py-4 pr-4 font-normal">
              {columns.requirements}
            </th>
            <th scope="col" className="py-4 pr-6 text-right font-normal">
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
    </div>
  );
}
