import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { Tracking } from "@/lib/analytics";

type BaseProps = {
  variant?: "primary" | "secondary" | "link";
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
  primary: "border-duo shadow-duo hover:shadow-duo-strong",
  secondary: "border border-border-strong bg-surface hover:border-text-tertiary",
  link: "px-0! py-0! underline decoration-text-tertiary underline-offset-4 hover:decoration-text",
};

// After the Cosmoq reference: the primary action is page black inside a
// blue-to-amber hairline, with a halo that grows on hover. Hover never lightens
// the fill, so the white label keeps its contrast.
export function Button({
  href,
  variant = "primary",
  tracking,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClassName = `inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-text transition-[box-shadow,border-color,scale] duration-300 active:scale-98 ${variantClasses[variant]} ${className}`;

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
