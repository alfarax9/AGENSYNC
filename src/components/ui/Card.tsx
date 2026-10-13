import type { CSSProperties, ReactNode } from "react";

type CardProps = {
  id?: string;
  as?: "div" | "article" | "figure";
  tone?: "base" | "raised";
  className?: string;
  style?: CSSProperties;
  isDecorative?: boolean;
  children: ReactNode;
};

const toneClasses = { base: "bg-bg-alt", raised: "bg-surface" };

// The one panel style on the site: a near-black fill a step above the page,
// a hairline border and a 24px radius. Raised is for a panel inside a panel.
export function Card({
  id,
  as: Element = "div",
  tone = "base",
  className = "",
  style,
  isDecorative,
  children,
}: CardProps) {
  return (
    <Element
      id={id}
      style={style}
      aria-hidden={isDecorative || undefined}
      className={`rounded-panel border border-border ${toneClasses[tone]} ${className}`}
    >
      {children}
    </Element>
  );
}
