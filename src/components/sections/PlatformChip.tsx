import type { LucideIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

type PlatformChipProps = {
  icon?: LucideIcon;
  /** A division color as a CSS variable, shown as a glowing dot instead of an icon. */
  dotStyle?: CSSProperties;
  children: ReactNode;
};

// An outlined chip, after the Cosmoq feature tags: an icon or a division dot,
// then a label.
export function PlatformChip({ icon: Icon, dotStyle, children }: PlatformChipProps) {
  return (
    <li className="flex items-center gap-2 rounded-card border border-border-strong px-3 py-2 text-sm text-text">
      {Icon && <Icon aria-hidden strokeWidth={1.5} className="size-4 shrink-0" />}
      {dotStyle && (
        <span
          aria-hidden
          style={dotStyle}
          className="size-2 rounded-full bg-current text-(--division-color) dot-glow"
        />
      )}
      {children}
    </li>
  );
}
