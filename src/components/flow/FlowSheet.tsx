import home from "@/content/home.json";

const { diagram } = home.howItWorks;
const barHeights = [18, 26, 14, 30, 22, 34];

// The front task in the stack: a summary, its test results, and the button
// waiting for you.
export function FlowSheet({ taskNumber, isActive }: { taskNumber: number; isActive: boolean }) {
  return (
    <>
      <text x={10} y={18} className="fill-text-tertiary font-mono text-[8px]">
        {`${diagram.taskPrefix}${taskNumber}`}
      </text>
      <rect x={10} y={26} width={64} height={5} rx={1} className="fill-text opacity-75" />
      <rect x={10} y={35} width={92} height={3} rx={1} className="fill-text-tertiary/40" />
      <rect x={10} y={41} width={80} height={3} rx={1} className="fill-text-tertiary/40" />
      {barHeights.map((barHeight, index) => (
        <rect
          key={barHeight}
          x={12 + index * 12}
          y={104 - barHeight}
          width={7}
          height={barHeight}
          className="fill-highlight-to"
          opacity={0.3 + index * 0.12}
        />
      ))}
      <text x={92} y={62} className="fill-text-tertiary font-mono text-[7px]">
        {diagram.tests}
      </text>
      <rect
        x={92}
        y={84}
        width={46}
        height={18}
        rx={9}
        className={`transition-colors ${isActive ? "fill-accent motion-safe:animate-pulse" : "fill-overlay stroke-text-tertiary/40"}`}
      />
      <text x={115} y={96} textAnchor="middle" className="fill-text text-[7.5px] font-semibold">
        {diagram.approve}
      </text>
    </>
  );
}
