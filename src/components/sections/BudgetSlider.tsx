type BudgetSliderProps = {
  name: string;
  used: number;
  limit: number;
  text: string;
};

// A vertical glass track filled to how much of a limit is used, with a glowing
// knob at the end of the fill. It shows a value; it is not a control.
export function BudgetSlider({ name, used, limit, text }: BudgetSliderProps) {
  const level = `${(used / limit) * 100}%`;

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-44 w-12 rounded-full border border-border-strong bg-bg/35 shadow-glass backdrop-blur-md">
        <div className="absolute inset-x-0 top-5 bottom-5">
          <span
            style={{ height: level }}
            className="absolute bottom-0 left-1/2 w-1.5 -translate-x-1/2 rounded-full bg-text"
          />
          <span
            style={{ bottom: level }}
            className="absolute left-1/2 size-6 -translate-x-1/2 translate-y-1/2 rounded-full bg-duo shadow-duo-strong"
          />
        </div>
      </div>
      <p className="text-xs text-text-secondary">{name}</p>
      <p className="font-mono text-xs text-text">{text}</p>
    </div>
  );
}
