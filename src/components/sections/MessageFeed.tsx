"use client";

import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useRef, useState } from "react";
import home from "@/content/home.json";
import { TelegramMessage } from "./TelegramMessage";

const { messages } = home.telegram;

// Messages arrive as the feed scrolls through the viewport. Hidden ones keep
// their space, so the page never shifts when they appear.
export function MessageFeed() {
  const ref = useRef<HTMLOListElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(messages.length);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.85"] });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setVisibleCount(Math.max(1, Math.ceil(progress * messages.length)));
  });

  return (
    <ol ref={ref} className="flex flex-1 flex-col gap-3 p-4">
      {messages.map((message, index) => (
        <TelegramMessage
          key={message.id}
          message={message}
          isVisible={shouldReduceMotion !== false || index < visibleCount}
        />
      ))}
    </ol>
  );
}
