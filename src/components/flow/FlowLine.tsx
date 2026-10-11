type FlowLineProps = {
  d: string;
  isActive: boolean;
  isDashed?: boolean;
};

export function FlowLine({ d, isActive, isDashed }: FlowLineProps) {
  const tone = isActive ? "stroke-accent-glow" : "stroke-text-tertiary/40";
  const dash = isDashed ? "[stroke-dasharray:3_4] motion-safe:animate-dash" : "";
  return <path d={d} strokeWidth={1.2} className={`fill-none transition-colors ${tone} ${dash}`} />;
}
