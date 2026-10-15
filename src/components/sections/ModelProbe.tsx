"use client";

import { useRef } from "react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import home from "@/content/home.json";
import { demoModels, demoWorkers, evaluateAssignment } from "@/lib/brainDemo";
import { findDivisionOfWorker } from "@/lib/divisions";
import { SegmentSwitch } from "./SegmentSwitch";
import { checksDuration, ProbeChecks } from "./ProbeChecks";
import { ProbeRoute } from "./ProbeRoute";
import { useCycle } from "./useCycle";

const bench = home.platform.visuals.models;
const verdicts = home.brains.demo;

// Each pairing judged by the same rules as the Brains demo, so a pass or a
// refusal here is the real outcome for that worker and model.
const runs = bench.scenarios.map((scenario) => {
  const model = demoModels.find((candidate) => candidate.id === scenario.modelId)!;
  const entry = demoWorkers.find((candidate) => candidate.worker.id === scenario.workerId)!;
  return {
    ...scenario,
    model,
    worker: entry.worker,
    divisionId: findDivisionOfWorker(entry.worker.id)?.id ?? "",
    ...evaluateAssignment(entry, model),
  };
});

// A probe bench after the Cosmoq data-sources panel, but showing the mechanism:
// a model arrives through a gateway, AMORA probes it against one worker's
// requirements, and the worker takes it or refuses it. Four pairings in turn.
export function ModelProbe() {
  const ref = useRef<HTMLDivElement>(null);
  const { index, isPlaying } = useCycle(ref, runs.length, 6000);
  const run = runs[index];

  return (
    <GlassPanel className="w-full max-w-md p-5">
      <div ref={ref} role="img" aria-label={bench.label} className="flex flex-col gap-5">
        <SegmentSwitch labels={bench.gateways} activeIndex={bench.gateways.indexOf(run.gateway)} />
        <div key={isPlaying ? index : "still"} className="flex flex-col gap-5">
          <ProbeRoute
            divisionId={run.divisionId}
            workerName={run.worker.name}
            model={run.model}
            probing={bench.probing}
          />
          <ProbeChecks checks={run.checks} />
          <p
            style={{ animationDelay: `${checksDuration(run.checks.length)}s` }}
            className={`font-mono text-sm font-semibold uppercase motion-safe:animate-probe-result ${run.isAccepted ? "text-highlight-from" : "text-danger"}`}
          >
            {run.isAccepted ? verdicts.accepted : verdicts.rejected}
          </p>
        </div>
      </div>
    </GlassPanel>
  );
}
