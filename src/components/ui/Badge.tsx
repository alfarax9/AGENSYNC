import type { ReactNode } from "react";

type BadgeProps = {
  variant?: "chip" | "glass";
  className?: string;
  children: ReactNode;
};

const variantClasses = {
  chip: "rounded-md border border-border-strong px-2 py-0.5 font-mono text-xs text-text-secondary",
  glass: "rounded-full bg-overlay px-4 py-1.5 text-sm text-text shadow-glass backdrop-blur-md",
};

// Chips label things inside a panel (requirement codes, tags); the glass pill
// is the one-line announcement above a page heading.
export function Badge({ variant = "chip", className = "", children }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
