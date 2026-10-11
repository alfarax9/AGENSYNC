type FlowStepTabProps = {
  step: { id: string; title: string; body: string };
  index: number;
  status: { activeIndex: number; run: number; isRunning: boolean };
  onSelect: (index: number) => void;
  onAdvance: () => void;
};

function barClasses(index: number, activeIndex: number) {
  if (index === activeIndex) return "motion-safe:animate-step-fill";
  return index < activeIndex ? "opacity-40" : "scale-x-0";
}

// One step as a tab. Its bar fills while the step plays, and the end of that
// fill moves the walk on. Done steps keep a dim full bar, later ones are empty.
// Reduced motion leaves the active bar full and never advances on its own.
export function FlowStepTab({ step, index, status, onSelect, onAdvance }: FlowStepTabProps) {
  const isActive = index === status.activeIndex;
  const playState = { animationPlayState: status.isRunning ? "running" : "paused" };

  return (
    <button
      id={`flow-tab-${step.id}`}
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls="flow-panel"
      tabIndex={isActive ? 0 : -1}
      onClick={() => onSelect(index)}
      className="group/step flex flex-col justify-start text-left"
    >
      <span aria-hidden className="relative block h-0.5 overflow-hidden bg-border">
        <span
          key={isActive ? status.run : "idle"}
          style={isActive ? playState : undefined}
          onAnimationEnd={isActive ? onAdvance : undefined}
          className={`absolute inset-0 origin-left bg-accent-glow ${barClasses(index, status.activeIndex)}`}
        />
      </span>
      <span
        className={`mt-4 block font-semibold transition-colors duration-300 ${isActive ? "text-text" : "text-text-secondary group-hover/step:text-text"}`}
      >
        {step.title}
      </span>
      <span className="mt-2 block text-sm leading-relaxed">{step.body}</span>
    </button>
  );
}
