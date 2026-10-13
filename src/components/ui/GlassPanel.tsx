import type { ReactNode } from "react";

type GlassPanelProps = {
  className?: string;
  children: ReactNode;
};

// A frosted panel that floats over a nebula: the caption of a feature card,
// and the plates its illustrations sit on.
export function GlassPanel({ className = "", children }: GlassPanelProps) {
  return (
    <div
      className={`rounded-2xl border border-border-strong bg-bg/45 shadow-glass backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}
