import { Mascot } from "@/components/ui/Mascot";
import home from "@/content/home.json";
import { ModelMarquee } from "./ModelMarquee";
import { ModelSlot } from "./ModelSlot";

const model = home.pillars.visuals.model;

// After the Cosmoq "Flexibility" card: two rows of models drifting across the
// whole card, and in front of them the worker in a lit socket, trying each
// model in its slot. The rows sit back, dimmed, so the socket reads first.
export function ModelVisual() {
  return (
    <div role="img" aria-label={model.label} className="absolute inset-0 overflow-clip">
      <div className="absolute inset-0 flex flex-col justify-center gap-3 [mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)] opacity-45">
        <ModelMarquee />
        <ModelMarquee isReversed />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div className="relative grid size-32 place-items-center rounded-full shadow-duo-strong border-duo">
          <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent-glow)_55%,transparent),transparent)] blur-xl" />
          <Mascot divisionId={model.division} size={64} />
        </div>
        <p className="rounded-full bg-bg/70 px-3 py-1 text-xs text-text-secondary backdrop-blur-md">
          {model.worker}
        </p>
        <ModelSlot />
      </div>
    </div>
  );
}
