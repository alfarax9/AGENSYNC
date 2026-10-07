"use client";

import { Pause, Play } from "lucide-react";
import { useState, type ReactNode } from "react";
import { IconButton } from "@/components/ui/IconButton";
import home from "@/content/home.json";

// WCAG 2.2.2: anything that moves for more than five seconds needs a pause
// control that works without a mouse.
export function MarqueeFrame({ children }: { children: ReactNode }) {
  const [isPaused, setIsPaused] = useState(false);
  const { marquee } = home;

  return (
    <section
      aria-label={marquee.label}
      data-paused={isPaused || undefined}
      className="group relative border-y border-border bg-bg py-6"
    >
      {children}
      <IconButton
        label={isPaused ? marquee.play : marquee.pause}
        icon={isPaused ? Play : Pause}
        onClick={() => setIsPaused(!isPaused)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-bg motion-reduce:hidden"
      />
    </section>
  );
}
