import { Mascot } from "@/components/ui/Mascot";

type WorkerMarkProps = {
  divisionId: string;
  name: string;
};

// A worker as its division's mascot with its role under it.
export function WorkerMark({ divisionId, name }: WorkerMarkProps) {
  return (
    <div className="flex w-28 shrink-0 flex-col items-center gap-2 text-center">
      <Mascot divisionId={divisionId} size={64} />
      <p className="text-xs text-text-secondary">{name}</p>
    </div>
  );
}
