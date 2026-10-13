"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { GlassPanel } from "@/components/ui/GlassPanel";

const msPerCharacter = 45;

// A brief being typed into a chat-style field once it scrolls into view. The
// untyped rest is laid out invisibly, so the field never changes size; reduced
// motion shows the whole brief at once.
export function TypedBrief({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const shouldReduceMotion = useReducedMotion();
  const [typedCount, setTypedCount] = useState(0);
  const shown = shouldReduceMotion ? text.length : typedCount;

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;
    const timer = setInterval(() => {
      setTypedCount((count) => (count >= text.length ? count : count + 1));
    }, msPerCharacter);
    return () => clearInterval(timer);
  }, [isInView, shouldReduceMotion, text.length]);

  return (
    <div ref={ref}>
      <GlassPanel className="flex items-center gap-3 rounded-full! py-2 pr-5 pl-2">
        <span className="size-8 shrink-0 rounded-full bg-duo shadow-duo" />
        <p className="text-sm text-text">
          {text.slice(0, shown)}
          <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-text motion-safe:animate-blink" />
          <span className="invisible">{text.slice(shown)}</span>
        </p>
      </GlassPanel>
    </div>
  );
}
