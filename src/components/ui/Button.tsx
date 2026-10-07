import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
};

const variantClasses = {
  primary: "border-accent bg-accent",
  secondary: "border-border bg-overlay",
};

// Hover is a glow and a brighter border, never a lighter background:
// white text on --accent-glow fails WCAG AA.
export function Button({ href, variant = "primary", children }: ButtonProps) {
  return (
    <a
      href={href}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-text before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:opacity-0 before:shadow-glow before:transition-opacity hover:border-accent-glow hover:before:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-glow ${variantClasses[variant]}`}
    >
      {children}
    </a>
  );
}
