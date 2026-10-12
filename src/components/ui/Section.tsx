import type { CSSProperties, ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  labelledBy: string;
  id?: string;
  /** Sets a faint amber and blue nebula behind the section heading. */
  hasGlow?: boolean;
  /** Compact is for long runs of sibling sections, like the roster page. */
  spacing?: "default" | "compact";
  children: ReactNode;
};

const glowStyle = { "--nebula-x": "35%", "--nebula-y": "70%" } as CSSProperties;

// Every section sits on the black page. The glow is the only change between
// them, and it is clipped (not hidden) so scroll-driven reveals keep the page
// as their scroller.
const spacingClasses = { default: "py-20 md:py-32", compact: "py-12 md:py-16" };

export function Section({ labelledBy, id, hasGlow, spacing = "default", children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative isolate overflow-x-clip ${spacingClasses[spacing]}`}
    >
      {hasGlow && (
        <div
          aria-hidden
          style={glowStyle}
          className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-nebula opacity-35 blur-3xl"
        />
      )}
      <Container>{children}</Container>
    </section>
  );
}
