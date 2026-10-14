// Workers panel light: an amber source spilling in from the top, a blue pool
// along the bottom edge, and a faint shaft between them, both slowly drifting.
export function LightCurtain() {
  return (
    <>
      <div className="absolute -top-1/3 left-[12%] h-3/4 w-3/5 rounded-full bg-[radial-gradient(closest-side,var(--color-amber),transparent)] opacity-75 blur-3xl motion-safe:animate-drift" />
      <div
        className="absolute -bottom-1/3 left-[38%] h-3/4 w-3/5 rounded-full bg-[radial-gradient(closest-side,var(--color-accent-glow),transparent)] blur-3xl motion-safe:animate-drift"
        style={{ animationDelay: "-9s" }}
      />
      <div className="absolute inset-y-0 left-[46%] w-28 -skew-x-12 bg-linear-to-b from-transparent via-[color-mix(in_oklab,var(--color-accent-glow)_40%,transparent)] to-transparent blur-2xl" />
    </>
  );
}
