import home from "@/content/home.json";

const { approval } = home.dashboard.mockup;
const primaryIndex = approval.actions.length - 1;

export function DashboardApproval() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-card px-4 py-3 border-duo [--duo-fill:var(--color-surface)]">
      <p className="text-text">{approval.text}</p>
      <span className="flex gap-2 text-xs">
        {approval.actions.map((action, index) => (
          <span
            key={action}
            className={`rounded-card px-3 py-1.5 text-text ${index === primaryIndex ? "font-semibold shadow-duo border-duo" : "border border-border-strong"}`}
          >
            {action}
          </span>
        ))}
      </span>
    </div>
  );
}
