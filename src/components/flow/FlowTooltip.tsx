type FlowTooltipProps = {
  x: number;
  y: number;
  text: string;
};

const charWidth = 4.6;

// Shown while the pointer is over the worker it belongs to (a "group" parent).
export function FlowTooltip({ x, y, text }: FlowTooltipProps) {
  const width = text.length * charWidth + 14;
  return (
    <g className="pointer-events-none opacity-0 transition-opacity group-hover:opacity-100">
      <rect x={x - width / 2} y={y - 34} width={width} height={15} rx={3} className="fill-text" />
      <text x={x} y={y - 23.5} textAnchor="middle" className="fill-bg text-[8px]">
        {text}
      </text>
    </g>
  );
}
