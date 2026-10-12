import type { ReactNode } from "react";
import type { Worker } from "@/lib/divisions";

type WorkerRowProps = {
  worker: Worker;
  children: ReactNode;
};

export function WorkerRow({ worker, children }: WorkerRowProps) {
  return (
    <tr className="border-b border-border align-top transition-colors last:border-b-0 hover:bg-overlay">
      <th scope="row" className="py-4 pr-4 pl-6 font-normal">
        <span className="text-text">{worker.name}</span>
        {worker.subdivision && (
          <span className="block font-mono text-xs text-text-tertiary">{worker.subdivision}</span>
        )}
      </th>
      <td className="py-4 pr-4">
        <span className="flex flex-wrap gap-1.5">{children}</span>
      </td>
      <td className="py-4 pr-6 text-right font-mono text-text tabular-nums">{worker.wave}</td>
    </tr>
  );
}
