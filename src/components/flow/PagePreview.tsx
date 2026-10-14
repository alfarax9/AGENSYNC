import home from "@/content/home.json";

const { preview } = home.howItWorks.screen.deliver;

// A thumbnail of what was built: the pricing page with its monthly or yearly
// toggle and three tiers, the middle one featured.
export function PagePreview() {
  return (
    <div
      aria-hidden
      className="flex flex-col items-center gap-3 rounded-card border border-border-strong bg-bg p-4"
    >
      <span className="h-1.5 w-24 rounded-full bg-text/40" />
      <span className="flex rounded-full bg-overlay p-0.5 text-[0.5625rem]">
        <span className="px-2 py-0.5 text-text-tertiary">{preview.toggle[0]}</span>
        <span className="rounded-full bg-surface px-2 py-0.5 text-text">{preview.toggle[1]}</span>
      </span>
      <span className="grid w-full grid-cols-3 gap-1.5">
        {preview.tiers.map((tier, index) => (
          <span
            key={tier}
            className={`flex flex-col gap-1.5 rounded-md border p-2 text-[0.5625rem] ${index === 1 ? "text-text border-duo [--duo-fill:var(--color-surface)]" : "border-border text-text-tertiary"}`}
          >
            {tier}
            <span className="h-1 w-2/3 rounded-full bg-text/25" />
            <span className="h-1 w-1/2 rounded-full bg-text/15" />
          </span>
        ))}
      </span>
    </div>
  );
}
