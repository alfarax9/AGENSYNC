"use client";

import { Check, X } from "lucide-react";
import { useRef } from "react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import home from "@/content/home.json";
import { demoModels, demoWorkers, evaluateAssignment } from "@/lib/brainDemo";
import { useCycle } from "./useCycle";

const slot = home.pillars.visuals.model;
const entry = demoWorkers.find((candidate) => candidate.worker.id === slot.workerId)!;
// Starts on the model the card's copy is about, then tries the rest in turn.
const start = demoModels.findIndex((model) => model.id === slot.modelId);
const trials = [...demoModels.slice(start), ...demoModels.slice(0, start)].map((model) => ({
  model,
  isAccepted: evaluateAssignment(entry, model).isAccepted,
}));

// The worker's model slot trying each model in turn, judged by the same rules
// as the Brains demo: only the ones with vision fit this worker.
export function ModelSlot() {
  const ref = useRef<HTMLDivElement>(null);
  const { index, isPlaying } = useCycle(ref, trials.length, 2600);
  const trial = trials[index];
  const Icon = trial.isAccepted ? Check : X;

  return (
    <div ref={ref}>
      <GlassPanel
        key={isPlaying ? index : "still"}
        className="flex items-center gap-2 rounded-full! px-4 py-2 text-sm whitespace-nowrap text-text motion-safe:animate-probe-result"
      >
        <Icon
          aria-hidden
          className={`size-4 ${trial.isAccepted ? "text-highlight-from" : "text-danger"}`}
        />
        {trial.model.name}
      </GlassPanel>
    </div>
  );
}
