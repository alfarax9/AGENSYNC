// Handoffs between the worker rows in the build scene: a packet drops from
// Compass to Atelier (the scope), then from Atelier to Forge (the design
// spec), along a dashed line through their mascots. Rows are 32px tall with
// a 14px gap, so each hop is 46px.
const hops = [0.7, 1.7];
const rowPitch = 46;

export function HandoffDrops() {
  return hops.map((delay, index) => (
    <span
      key={delay}
      aria-hidden
      style={{ top: 16 + index * rowPitch, height: rowPitch }}
      className="absolute left-4 w-px border-l border-dashed border-text-tertiary/60"
    >
      <span
        style={{ animationDelay: `${delay}s` }}
        className="absolute inset-0 opacity-0 motion-safe:animate-drop motion-reduce:hidden"
      >
        <span className="absolute -top-1 -left-[4.5px] size-2 rounded-full bg-amber shadow-duo-strong" />
      </span>
    </span>
  ));
}
