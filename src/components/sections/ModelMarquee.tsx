import { GlassPanel } from "@/components/ui/GlassPanel";
import { demoModels } from "@/lib/brainDemo";

type ModelMarqueeProps = {
  /** Runs the other way, with the list in the other order, for a second row. */
  isReversed?: boolean;
};

// The models a worker could be pointed at, drifting past like the Cosmoq
// integrations rows. The list is drawn twice so the loop has no seam; reduced
// motion leaves it still.
export function ModelMarquee({ isReversed = false }: ModelMarqueeProps) {
  const models = isReversed ? [...demoModels].reverse() : demoModels;
  const laps = [0, 1];

  return (
    <ul
      className={`flex w-max gap-3 motion-safe:animate-marquee ${isReversed ? "[animation-direction:reverse]" : ""}`}
    >
      {laps.flatMap((lap) =>
        models.map((model) => (
          <li key={`${lap}-${model.id}`}>
            <GlassPanel className="px-4 py-3 text-sm whitespace-nowrap text-text-secondary">
              {model.name}
              <span className="ml-2 font-mono text-[0.625rem] text-text-tertiary">
                {model.family}
              </span>
            </GlassPanel>
          </li>
        )),
      )}
    </ul>
  );
}
