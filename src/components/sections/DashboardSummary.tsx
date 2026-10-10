import home from "@/content/home.json";

const { summary } = home.dashboard.mockup;

export function DashboardSummary() {
  return (
    <dl className="grid grid-cols-3 gap-3">
      {summary.map((item) => (
        <div
          key={item.id}
          className={`rounded-card border bg-bg-alt p-3 ${item.isHighlighted ? "border-accent-glow" : "border-border"}`}
        >
          <dt className="text-xs text-text-tertiary">{item.label}</dt>
          <dd className="mt-1 font-mono text-lg text-text md:text-xl">
            {item.value}
            {item.detail && <span className="ml-1 text-xs text-text-tertiary">{item.detail}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
