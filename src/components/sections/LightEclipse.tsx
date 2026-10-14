const rim =
  "bg-[conic-gradient(from_0deg,var(--color-amber),transparent_25%,var(--color-accent-glow)_50%,transparent_75%,var(--color-amber))]";

// Control panel light: an eclipse whose lit rim, amber on one side and blue on
// the other, turns slowly around a dark core, with its own glow behind it.
export function LightEclipse() {
  return (
    <div className="absolute top-1/2 left-[64%] size-[34rem] -translate-1/2">
      <div
        className={`absolute inset-0 rounded-full [mask-image:radial-gradient(circle,transparent_48%,black_58%,transparent_74%)] opacity-70 blur-2xl motion-safe:animate-orbit ${rim}`}
      />
      <div
        className={`absolute inset-0 rounded-full [mask-image:radial-gradient(circle,transparent_55%,black_57.5%,black_59%,transparent_62%)] motion-safe:animate-orbit ${rim}`}
      />
    </div>
  );
}
