import type { ReactNode } from "react";
import type { Tracking } from "@/lib/analytics";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "inverse";
  tracking?: Tracking;
  children: ReactNode;
};

const variantClasses = {
  primary: "rounded-full border-accent bg-accent text-text",
  secondary: "rounded-full border-border bg-overlay text-text",
  inverse: "rounded-xl border-text bg-text text-bg",
};

// Hover is a glow and a brighter border, never a lighter background:
// white text on --accent-glow fails WCAG AA.
export function Button({ href, variant = "primary", tracking, children }: ButtonProps) {
  return (
    <a
      href={href}
      data-track-event={tracking?.event}
      data-track-location={tracking?.location}
      className={`relative inline-flex items-center justify-center gap-2 border px-5 py-2.5 text-sm font-semibold before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 before:shadow-glow before:transition-opacity hover:border-accent-glow hover:before:opacity-100 ${variantClasses[variant]}`}
    >
      {children}
    </a>
  );
}
