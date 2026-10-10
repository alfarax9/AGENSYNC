import home from "@/content/home.json";
import { DashboardWorkerRow } from "./DashboardWorkerRow";

const { workers } = home.dashboard.mockup;

// The model column needs the most width, so it is the one phones drop.
const columnClasses = ["", "hidden sm:table-cell", "", "text-right"];

export function DashboardWorkers() {
  return (
    <table className="w-full text-left text-xs">
      <thead className="text-text-tertiary">
        <tr>
          {workers.columns.map((column, index) => (
            <th key={column} className={`pb-2 font-normal ${columnClasses[index]}`}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-border border-t border-border">
        {workers.rows.map((row) => (
          <DashboardWorkerRow key={row.workerId} row={row} />
        ))}
      </tbody>
    </table>
  );
}
