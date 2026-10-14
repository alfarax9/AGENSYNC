// A scan line sweeping down the gate checks while they run.
export function GateScan() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 motion-safe:animate-scan motion-reduce:hidden"
    >
      <span className="absolute inset-x-0 top-0 h-10 -translate-y-full bg-linear-to-b from-transparent to-accent-glow/10" />
      <span className="absolute inset-x-0 top-0 h-px bg-duo shadow-duo" />
    </span>
  );
}
