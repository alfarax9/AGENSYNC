import type { LucideIcon } from "lucide-react";

// An outlined icon on a raised square inside the duo hairline, after the
// Cosmoq integration tiles. Always decorative: the text beside it says it all.
export function IconTile({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span
      aria-hidden
      className="grid size-12 shrink-0 place-items-center rounded-2xl shadow-duo border-duo [--duo-fill:var(--color-surface)]"
    >
      <Icon strokeWidth={1.5} className="size-5 text-text" />
    </span>
  );
}
