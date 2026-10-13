import home from "@/content/home.json";
import { BudgetSlider } from "./BudgetSlider";

const limits = home.pillars.visuals.limits;

// The three limits a task runs under, each filled to how much is used.
export function BudgetVisual() {
  return (
    <div role="img" aria-label={limits.label} className="flex items-end gap-6">
      {limits.sliders.map((slider) => (
        <BudgetSlider
          key={slider.id}
          name={slider.name}
          used={slider.used}
          limit={slider.limit}
          text={slider.text}
        />
      ))}
    </div>
  );
}
