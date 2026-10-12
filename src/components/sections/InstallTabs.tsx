import type { KeyboardEvent } from "react";

type InstallTabsProps = {
  methods: { id: string; label: string }[];
  selectedId: string;
  panelId: string;
  onSelect: (id: string) => void;
};

export function InstallTabs({ methods, selectedId, panelId, onSelect }: InstallTabsProps) {
  // Arrow keys move between tabs, as the ARIA tabs pattern expects.
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    const step = event.key === "ArrowRight" ? 1 : -1;
    const index = methods.findIndex((method) => method.id === selectedId);
    const next = methods[(index + step + methods.length) % methods.length];
    onSelect(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  }

  return (
    <div
      role="tablist"
      onKeyDown={handleKeyDown}
      className="flex gap-1 rounded-full border border-border-strong bg-bg p-1"
    >
      {methods.map((method) => {
        const isSelected = method.id === selectedId;
        return (
          <button
            key={method.id}
            id={`tab-${method.id}`}
            type="button"
            role="tab"
            aria-selected={isSelected}
            aria-controls={panelId}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onSelect(method.id)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${isSelected ? "border-border-strong bg-surface text-text shadow-glass" : "border-transparent text-text-secondary hover:text-text"}`}
          >
            {method.label}
          </button>
        );
      })}
    </div>
  );
}
