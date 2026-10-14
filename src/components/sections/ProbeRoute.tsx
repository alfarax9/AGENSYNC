import { GlassPanel } from "@/components/ui/GlassPanel";
import { Mascot } from "@/components/ui/Mascot";
import { TravelLine } from "./TravelLine";

type ProbeRouteProps = {
  divisionId: string;
  workerName: string;
  model: { name: string; family: string };
  probing: string;
};

// The worker on one end and the model on offer on the other, with the probe
// crossing between them.
export function ProbeRoute({ divisionId, workerName, model, probing }: ProbeRouteProps) {
  return (
    <div className="grid grid-cols-[auto_minmax(1.5rem,1fr)_auto] items-center gap-2 sm:gap-3">
      <div className="flex w-20 flex-col items-center gap-1.5 text-center sm:w-24">
        <Mascot divisionId={divisionId} size={32} />
        <p className="text-[0.6875rem] leading-tight text-text-secondary">{workerName}</p>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="font-mono text-[0.625rem] text-text-tertiary">{probing}</span>
        <TravelLine />
      </div>
      <GlassPanel className="max-w-36 px-3 py-2.5 text-center sm:max-w-none">
        <p className="text-sm leading-snug text-text">{model.name}</p>
        <p className="font-mono text-[0.625rem] text-text-tertiary">{model.family}</p>
      </GlassPanel>
    </div>
  );
}
