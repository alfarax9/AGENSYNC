import type { CSSProperties, ReactNode } from "react";

type CardProps = {
  as?: "div" | "article" | "figure";
  tone?: "base" | "alt";
  className?: string;
  style?: CSSProperties;
  isDecorative?: boolean;
  children: ReactNode;
};

const toneClasses = { base: "bg-bg", alt: "bg-bg-alt" };

// The one surface style for every panel on the site: thin border, 8px radius, no shadow.
export function Card({
  as: Element = "div",
  tone = "base",
  className = "",
  style,
  isDecorative,
  children,
}: CardProps) {
  return (
    <Element
      style={style}
      aria-hidden={isDecorative || undefined}
      className={`rounded-card border border-border ${toneClasses[tone]} ${className}`}
    >
      {children}
    </Element>
  );
}
