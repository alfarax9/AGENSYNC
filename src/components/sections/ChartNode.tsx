import { divisionColor } from "@/lib/divisions";

type ChartNodeProps = {
  label: string;
  isActive: boolean;
  divisionId?: string;
  count?: number;
};

export function ChartNode({ label, isActive, divisionId, count }: ChartNodeProps) {
  const stateClasses = isActive
    ? "border-accent-glow text-text"
    : "border-border text-text-tertiary";

  return (
    <span
      style={divisionId ? divisionColor(divisionId) : undefined}
      className={`flex items-center justify-between gap-2 rounded-card border bg-bg px-3 py-2 font-mono text-xs ${stateClasses}`}
    >
      <span className="flex items-center gap-2">
        {divisionId && <span className="size-1.5 rounded-full bg-(--division-color)" />}
        {label}
      </span>
      {count !== undefined && <span className="text-text-tertiary">{count}</span>}
    </span>
  );
}
