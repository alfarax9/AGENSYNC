import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { Tracking } from "@/lib/analytics";

type BaseProps = {
  variant?: "primary" | "secondary" | "inverse" | "outline";
  tracking?: Tracking;
  className?: string;
  children?: ReactNode;
};

type LinkButtonProps = BaseProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<"a">, keyof BaseProps | "href">;

type RegularButtonProps = BaseProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps | "href">;

export type ButtonProps = LinkButtonProps | RegularButtonProps;

const variantClasses = {
  primary: "rounded-full border-accent bg-accent text-text",
  secondary: "rounded-full border-border bg-overlay text-text",
  inverse: "rounded-xl border-text bg-text text-bg",
  outline:
    "rounded-card border-border bg-overlay/50 text-text hover:bg-overlay hover:border-accent-glow",
};

// Hover is a glow and a brighter border, never a lighter background:
// white text on --accent-glow fails WCAG AA.
export function Button({
  href,
  variant = "primary",
  tracking,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClassName = `relative inline-flex items-center justify-center gap-2 border px-5 py-2.5 text-sm font-semibold transition-transform before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 before:shadow-glow before:transition-opacity hover:border-accent-glow hover:before:opacity-100 active:scale-98 ${variantClasses[variant]} ${className}`;

  if (href !== undefined) {
    return (
      <a
        href={href}
        data-track-event={tracking?.event}
        data-track-location={tracking?.location}
        className={baseClassName}
        {...(props as ComponentPropsWithoutRef<"a">)}
      >
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as ComponentPropsWithoutRef<"button">;
  return (
    <button
      type={type}
      data-track-event={tracking?.event}
      data-track-location={tracking?.location}
      className={baseClassName}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
