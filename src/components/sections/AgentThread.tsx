"use client";

import { useRef } from "react";
import home from "@/content/home.json";
import { ThreadComposer } from "./ThreadComposer";
import { ThreadMessage } from "./ThreadMessage";
import { TypingBubble } from "./TypingBubble";
import { useThreadTimeline } from "./useThreadTimeline";

const thread = home.platform.visuals.workers;

// A task thread playing out: you send the brief, the planner answers with a
// plan, you approve it, and each division reports back in turn. Older messages
// slide up and fade under the top edge as new ones arrive.
export function AgentThread() {
  const ref = useRef<HTMLDivElement>(null);
  const { visibleCount, typingMessage, composerText } = useThreadTimeline(ref);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={thread.label}
      className="flex w-full max-w-md flex-col gap-3"
    >
      <p className="flex items-center justify-between font-mono text-xs text-text-secondary">
        {thread.task}
        <span className="flex items-center gap-1.5 text-highlight-to">
          <span className="size-1.5 rounded-full bg-current motion-safe:animate-pulse" />
          {thread.live}
        </span>
      </p>
      <ol className="flex h-80 flex-col justify-end gap-3 overflow-clip [mask-image:linear-gradient(to_bottom,transparent,black_24%)]">
        {thread.messages.slice(0, visibleCount).map((message, index) => (
          <ThreadMessage key={index} message={message} you={thread.you} />
        ))}
        {typingMessage && "workerId" in typingMessage && typingMessage.workerId && (
          <TypingBubble workerId={typingMessage.workerId} />
        )}
      </ol>
      <ThreadComposer text={composerText} placeholder={thread.composer} />
    </div>
  );
}
