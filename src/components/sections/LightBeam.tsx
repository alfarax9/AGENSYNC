// Models panel light: a thin vertical beam meeting a horizon flare, with blue
// haze underneath, the way Cosmoq lights its integrations. The flare breathes.
export function LightBeam() {
  return (
    <>
      <div className="absolute -bottom-1/3 left-[8%] h-3/4 w-[92%] rounded-full bg-[radial-gradient(closest-side,var(--color-accent-glow),transparent)] opacity-70 blur-3xl motion-safe:animate-drift" />
      <div className="absolute inset-y-0 left-[63%] w-px bg-linear-to-b from-transparent via-amber to-transparent" />
      <div className="absolute inset-y-0 left-[63%] w-32 -translate-x-1/2 bg-linear-to-b from-transparent via-[color-mix(in_oklab,var(--color-amber)_35%,transparent)] to-transparent blur-2xl motion-safe:animate-flare" />
      <div className="absolute top-[93%] left-[63%] h-px w-4/5 -translate-x-1/2 bg-linear-to-r from-transparent via-amber to-transparent motion-safe:animate-flare" />
      <div className="absolute top-[93%] left-[63%] size-56 -translate-1/2 rounded-full bg-[radial-gradient(closest-side,var(--color-amber),transparent)] opacity-80 blur-2xl motion-safe:animate-flare" />
    </>
  );
}
