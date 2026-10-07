import type { LucideIcon } from "lucide-react";

type IconButtonProps = {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  className?: string;
  hasPopup?: boolean;
};

export function IconButton({
  label,
  icon: Icon,
  onClick,
  className = "",
  hasPopup,
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-haspopup={hasPopup ? "dialog" : undefined}
      onClick={onClick}
      className={`rounded-full p-2 text-text focus-visible:outline-2 focus-visible:outline-accent-glow ${className}`}
    >
      <Icon aria-hidden className="size-6" />
    </button>
  );
}
