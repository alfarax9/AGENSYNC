import { CornerDownLeft, X } from "lucide-react";
import { Mascot } from "@/components/ui/Mascot";
import home from "@/content/home.json";
import { findDivisionOfWorker, findWorker } from "@/lib/divisions";
import { AttemptTrack } from "./AttemptTrack";
import { TestLane } from "./TestLane";

const { loop } = home.howItWorks.screen;
const dev = { worker: findWorker(loop.devId), division: findDivisionOfWorker(loop.devId) };
const qa = { worker: findWorker(loop.qaId), division: findDivisionOfWorker(loop.qaId) };

// Step 4: Crucible tests what Forge built. The build crosses the lane,
// attempt 1 fails one test and the failure travels back to the developer,
// and the fix crosses again and passes.
export function ScreenLoop() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center gap-3 text-xs text-text-secondary">
        {dev.division && <Mascot divisionId={dev.division.id} size={32} />}
        <span className="hidden sm:inline">{dev.worker?.name}</span>
        <TestLane />
        <span className="hidden sm:inline">{qa.worker?.name}</span>
        {qa.division && <Mascot divisionId={qa.division.id} size={32} />}
      </div>
      <AttemptTrack />
      <div className="flex flex-col gap-2 rounded-card border border-border bg-bg/70 p-3 font-mono text-xs">
        <p className="text-text">{loop.first}</p>
        <p
          style={{ animationDelay: "1.1s" }}
          className="flex items-start gap-2 text-danger motion-safe:animate-rise"
        >
          <X aria-hidden className="mt-0.5 size-3.5 shrink-0" />
          <span>
            {loop.failure} <span className="text-text-tertiary">· {loop.expected}</span>
          </span>
        </p>
        <p
          style={{ animationDelay: "1.7s" }}
          className="flex items-center gap-2 text-text-secondary motion-safe:animate-rise"
        >
          <CornerDownLeft aria-hidden className="size-3.5" />
          {loop.back}
        </p>
        <p
          style={{ animationDelay: "3.3s" }}
          className="text-highlight-from motion-safe:animate-rise"
        >
          {loop.second}
        </p>
      </div>
    </div>
  );
}
