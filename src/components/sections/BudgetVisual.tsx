import home from "@/content/home.json";
import { BudgetSlider } from "./BudgetSlider";

const limits = home.pillars.visuals.limits;

// The three limits a task runs under, standing across the card, each filling
// up on its own beat.
export function BudgetVisual() {
  return (
    <div
      role="img"
      aria-label={limits.label}
      className="absolute inset-0 flex items-center justify-center gap-6 pt-4"
    >
      {limits.sliders.map((slider, index) => (
        <BudgetSlider key={slider.id} slider={slider} of={limits.of} index={index} />
      ))}
    </div>
  );
}
