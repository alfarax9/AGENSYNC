import type { KeyboardEvent } from "react";

type PlatformTabsProps = {
  platforms: { id: string; label: string }[];
  selectedId: string;
  panelId: string;
  onSelect: (id: string) => void;
};

export function PlatformTabs({ platforms, selectedId, panelId, onSelect }: PlatformTabsProps) {
  // Arrow keys move between tabs, as the ARIA tabs pattern expects.
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    const step = event.key === "ArrowRight" ? 1 : -1;
    const index = platforms.findIndex((platform) => platform.id === selectedId);
    const next = platforms[(index + step + platforms.length) % platforms.length];
    onSelect(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  }

  return (
    <div role="tablist" onKeyDown={handleKeyDown} className="flex gap-5">
      {platforms.map((platform) => {
        const isSelected = platform.id === selectedId;
        return (
          <button
            key={platform.id}
            id={`tab-${platform.id}`}
            type="button"
            role="tab"
            aria-selected={isSelected}
            aria-controls={panelId}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onSelect(platform.id)}
            className={`border-b-2 py-3 text-sm ${isSelected ? "border-accent-glow text-text" : "border-transparent text-text-tertiary"}`}
          >
            {platform.label}
          </button>
        );
      })}
    </div>
  );
}
