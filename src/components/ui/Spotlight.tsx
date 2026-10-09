import type { ReactNode } from "react";
import SpotlightCard from "@/components/vendor/react-bits/SpotlightCard";

type SpotlightProps = {
  tint: string;
  className?: string;
  children: ReactNode;
};

// The vendor prop is typed as an rgba() literal, but it only ever lands in a
// CSS variable, so any CSS color works, including color-mix() over a token.
type VendorColor = `rgba(${number}, ${number}, ${number}, ${number})`;

// The site's card surface (see Card) with a cursor-following light on hover.
export function Spotlight({ tint, className = "", children }: SpotlightProps) {
  return (
    <SpotlightCard
      spotlightColor={tint as VendorColor}
      className={`amora-spotlight rounded-card border border-border bg-bg ${className}`}
    >
      {children}
    </SpotlightCard>
  );
}
