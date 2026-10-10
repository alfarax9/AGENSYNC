import home from "@/content/home.json";

const { pipeline } = home.dashboard.mockup;

function stageClasses(index: number) {
  if (index < pipeline.currentIndex) return { bar: "bg-accent-glow", text: "text-text-secondary" };
  if (index === pipeline.currentIndex) {
    return { bar: "bg-highlight-to", text: "font-semibold text-text" };
  }
  return { bar: "bg-overlay", text: "text-text-tertiary" };
}

export function DashboardPipeline() {
  return (
    <div className="rounded-card border border-border bg-bg-alt p-4">
      <p className="flex justify-between gap-3 text-xs">
        <span className="text-text">{pipeline.task}</span>
        <span className="font-mono text-text-tertiary">{pipeline.attempt}</span>
      </p>
      <ol className="mt-3 grid grid-cols-5 gap-1.5">
        {pipeline.stages.map((stage, index) => {
          const classes = stageClasses(index);
          return (
            <li key={stage} className={`flex flex-col gap-1.5 text-[0.6875rem] ${classes.text}`}>
              <span className={`h-1 rounded-full ${classes.bar}`} />
              {stage}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
