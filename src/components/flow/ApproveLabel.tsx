import { Check } from "lucide-react";

type ApproveLabelProps = {
  approve: string;
  shipped: string;
  /** Seconds into the scene at which the click lands. */
  at: number;
};

// The Approve button's label giving way to "Shipped" just after the cursor's
// click. Reduced motion keeps "Approve".
export function ApproveLabel({ approve, shipped, at }: ApproveLabelProps) {
  return (
    <span className="grid">
      <span
        style={{ animationDelay: `${at + 0.25}s` }}
        className="col-start-1 row-start-1 motion-safe:animate-fade-out"
      >
        {approve}
      </span>
      <span
        style={{ animationDelay: `${at + 0.3}s` }}
        className="col-start-1 row-start-1 flex items-center gap-1 text-highlight-from motion-safe:animate-rise motion-reduce:hidden"
      >
        <Check aria-hidden className="size-3.5" />
        {shipped}
      </span>
    </span>
  );
}
