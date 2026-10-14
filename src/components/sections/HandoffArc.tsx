import { HandoffPacket } from "./HandoffPacket";

// The arc a handoff travels, in a 400 by 200 drawing: a soft glow, then the
// lit line in the duo colors with dashes flowing toward the receiver, and the
// packet riding it.
const handoffPath = "M 60 140 C 130 10, 270 10, 340 140";

export function HandoffArc() {
  return (
    <svg aria-hidden viewBox="0 0 400 200" className="absolute inset-0 size-full overflow-visible">
      <defs>
        <linearGradient id="handoff-duo" x1="0" x2="1">
          <stop offset="0" stopColor="var(--color-amber)" />
          <stop offset="1" stopColor="var(--color-accent-glow)" />
        </linearGradient>
      </defs>
      <path
        d={handoffPath}
        fill="none"
        stroke="url(#handoff-duo)"
        strokeWidth={10}
        opacity={0.18}
        className="blur-sm"
      />
      <path
        d={handoffPath}
        fill="none"
        stroke="url(#handoff-duo)"
        strokeWidth={1.5}
        strokeDasharray="4 3"
        className="motion-safe:animate-dash"
      />
      <HandoffPacket path={handoffPath} />
    </svg>
  );
}
