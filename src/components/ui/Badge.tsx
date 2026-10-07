import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-overlay px-3 py-1 font-mono text-xs text-text-secondary">
      {children}
    </span>
  );
}
