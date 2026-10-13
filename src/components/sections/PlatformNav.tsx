"use client";

import { BrainCircuit, type LucideIcon, SlidersHorizontal, Users } from "lucide-react";
import { useEffect, useState } from "react";

type PlatformNavProps = {
  label: string;
  items: { id: string; tab: string }[];
};

const icons: Record<string, LucideIcon> = {
  workers: Users,
  models: BrainCircuit,
  control: SlidersHorizontal,
};

// In-page links to the three panels. The one crossing the middle of the
// viewport is marked current, so the list doubles as a "you are here".
export function PlatformNav({ label, items }: PlatformNavProps) {
  const [activeId, setActiveId] = useState(items[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id.replace("platform-", ""));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach((item) => {
      const panel = document.getElementById(`platform-${item.id}`);
      if (panel) observer.observe(panel);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={label} className="lg:sticky lg:top-[calc(var(--navbar-height)+2rem)]">
      <ul className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-0">
        {items.map((item) => {
          const Icon = icons[item.id];
          const isActive = item.id === activeId;
          return (
            <li key={item.id} className="shrink-0">
              <a
                href={`#platform-${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative flex items-center gap-3 rounded-full border px-4 py-2 transition-colors motion-reduce:after:transition-none lg:rounded-none lg:border-0 lg:border-b lg:border-border lg:px-0 lg:py-4 lg:after:absolute lg:after:inset-x-0 lg:after:-bottom-px lg:after:h-px lg:after:origin-left lg:after:bg-duo lg:after:transition-transform lg:after:duration-300 ${isActive ? "border-border-strong bg-surface text-text lg:bg-transparent lg:after:scale-x-100" : "border-border text-text-secondary hover:text-text lg:after:scale-x-0"}`}
              >
                <Icon aria-hidden strokeWidth={1.25} className="size-6 shrink-0" />
                {item.tab}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
