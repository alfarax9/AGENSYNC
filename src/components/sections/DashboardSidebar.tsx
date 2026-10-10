import { Plus } from "lucide-react";
import home from "@/content/home.json";

const { nav, newTask } = home.dashboard.mockup;

export function DashboardSidebar() {
  return (
    <div className="hidden w-44 shrink-0 flex-col gap-4 border-r border-border bg-bg-alt p-3 lg:flex">
      <span className="flex items-center justify-center gap-1.5 rounded-card bg-accent px-3 py-2 text-xs font-semibold text-text">
        <Plus aria-hidden className="size-3.5" />
        {newTask}
      </span>
      <ul className="flex flex-col gap-0.5 text-xs">
        {nav.map((item, index) => (
          <li
            key={item}
            className={`rounded-card px-3 py-2 ${index === 0 ? "bg-overlay text-text" : "text-text-tertiary"}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
