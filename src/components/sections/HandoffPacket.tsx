// The packet: a soft amber halo with a bright core, crossing in the same
// stretch of the shared 5s loop as animate-travel so animate-arrive lines up.
// Its motion is SMIL, which ignores reduced motion, so it is hidden then.
const layers = [
  { r: 9, fill: "var(--color-amber)", opacity: 0.35, className: "blur-sm" },
  { r: 3.5, fill: "var(--color-text)", opacity: 1, className: "" },
];

export function HandoffPacket({ path }: { path: string }) {
  return (
    <g className="motion-reduce:hidden">
      {layers.map((layer) => (
        <circle
          key={layer.r}
          r={layer.r}
          fill={layer.fill}
          opacity={layer.opacity}
          className={layer.className}
        >
          <animateMotion
            dur="5s"
            repeatCount="indefinite"
            path={path}
            keyPoints="0;0;1;1"
            keyTimes="0;0.08;0.44;1"
            calcMode="linear"
          />
        </circle>
      ))}
    </g>
  );
}
