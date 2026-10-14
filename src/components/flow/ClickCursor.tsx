import { MousePointer2 } from "lucide-react";

// The cursor reaches its target 82% of the way through its 1.6s glide.
const cursorLead = 1.6 * 0.82;

// A cursor that glides onto the button it sits in and clicks at `at` seconds,
// leaving a ripple. Decorative; hidden under reduced motion.
export function ClickCursor({ at }: { at: number }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 grid place-items-center motion-reduce:hidden"
    >
      <span
        style={{ animationDelay: `${at}s` }}
        className="size-10 rounded-full bg-text/40 opacity-0 motion-safe:animate-ripple"
      />
      <span
        style={{ animationDelay: `${at - cursorLead}s` }}
        className="absolute top-1/2 left-1/2 opacity-0 motion-safe:animate-cursor"
      >
        <MousePointer2 className="size-5 -translate-x-0.5 -translate-y-0.5 fill-text text-bg drop-shadow-[0_2px_6px_var(--color-bg)]" />
      </span>
    </span>
  );
}
