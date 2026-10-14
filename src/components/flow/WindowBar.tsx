import home from "@/content/home.json";

const { screen } = home.howItWorks;
const dots = [0, 1, 2];

// The window's title bar: the three dots, the local address the dashboard
// runs on, and a live marker.
export function WindowBar({ taskNumber }: { taskNumber: number }) {
  return (
    <div className="flex items-center gap-3 border-b border-border px-4 py-3">
      <span aria-hidden className="flex gap-1.5">
        {dots.map((dot) => (
          <span key={dot} className="size-2.5 rounded-full bg-text/15" />
        ))}
      </span>
      <span className="mx-auto min-w-0 truncate rounded-full bg-overlay px-3 py-1 font-mono text-[0.6875rem] text-text-tertiary">
        {screen.address.replace("{task}", String(taskNumber))}
      </span>
      <span className="flex items-center gap-1.5 font-mono text-[0.6875rem] text-highlight-to">
        <span className="size-1.5 rounded-full bg-current motion-safe:animate-pulse" />
        {screen.live}
      </span>
    </div>
  );
}
