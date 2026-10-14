type PillarLightProps = {
  /** Position and size of the amber source, as Tailwind classes. */
  amber: string;
  /** Position and size of the blue source. */
  blue: string;
};

// A card's light: one amber and one blue source falling off to black, drifting
// out of step, with dust and grain over them. Concentrated, not a haze, so the
// card has a lit side and a dark side like the Cosmoq feature cards.
export function PillarLight({ amber, blue }: PillarLightProps) {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-clip bg-bg-alt">
      <div
        className={`absolute rounded-full bg-[radial-gradient(closest-side,var(--color-amber),transparent)] opacity-70 blur-3xl motion-safe:animate-drift ${amber}`}
      />
      <div
        className={`absolute rounded-full bg-[radial-gradient(closest-side,var(--color-accent-glow),transparent)] opacity-90 blur-3xl motion-safe:animate-drift ${blue}`}
        style={{ animationDelay: "-9s" }}
      />
      <div className="absolute inset-0 bg-stars opacity-60" />
      <div className="absolute inset-0 bg-grain opacity-40" />
    </div>
  );
}
