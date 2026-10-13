import { GlassPanel } from "@/components/ui/GlassPanel";
import { Mascot } from "@/components/ui/Mascot";
import { findDivisionOfWorker, findWorker } from "@/lib/divisions";

type GlassWorkerCardProps = {
  workerId: string;
  className?: string;
};

// A worker as a frosted card: its division's mascot, its role, and two
// placeholder lines standing in for the work it is picking up.
export function GlassWorkerCard({ workerId, className = "" }: GlassWorkerCardProps) {
  const worker = findWorker(workerId);
  const division = findDivisionOfWorker(workerId);

  return (
    <GlassPanel className={`flex flex-col gap-3 p-3 ${className}`}>
      <div className="flex items-center gap-3">
        {division && <Mascot divisionId={division.id} size={32} />}
        <p className="text-sm leading-snug text-text">{worker?.name}</p>
      </div>
      <span className="h-1.5 w-full rounded-full bg-text/20" />
      <span className="h-1.5 w-2/3 rounded-full bg-text/10" />
    </GlassPanel>
  );
}
