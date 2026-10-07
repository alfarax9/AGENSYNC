"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import home from "@/content/home.json";
import demo from "@/content/models-demo.json";
import { demoModels, demoWorkers, evaluateAssignment } from "@/lib/brainDemo";
import { DemoChecks } from "./DemoChecks";
import { DemoSelect } from "./DemoSelect";

const labels = home.brains.demo;
const workerOptions = demoWorkers.map(({ worker }) => ({ value: worker.id, label: worker.name }));
const modelOptions = demoModels.map((model) => ({
  value: model.id,
  label: `${model.name} · ${model.family}`,
}));

// Opens on a rejected pairing, because a refusal is the point the demo makes.
export function BrainDemo() {
  const [workerId, setWorkerId] = useState(demoWorkers[0].worker.id);
  const [modelId, setModelId] = useState("small-fast");
  const selectedWorker =
    demoWorkers.find((entry) => entry.worker.id === workerId) ?? demoWorkers[0];
  const selectedModel = demoModels.find((model) => model.id === modelId) ?? demoModels[0];
  const { checks, isAccepted } = evaluateAssignment(selectedWorker, selectedModel);

  return (
    <Card tone="alt" className="flex flex-col gap-6 p-5 md:p-6">
      <h3 className="text-xl font-semibold text-text">{labels.heading}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <DemoSelect
          id="demo-worker"
          label={labels.workerLabel}
          value={workerId}
          options={workerOptions}
          onChange={setWorkerId}
        />
        <DemoSelect
          id="demo-model"
          label={labels.modelLabel}
          value={modelId}
          options={modelOptions}
          onChange={setModelId}
        />
      </div>
      <DemoChecks checks={checks} isAccepted={isAccepted} selectionKey={`${workerId}-${modelId}`} />
      <p className="text-xs text-text-tertiary">
        {demo.notice} {demo.updated}.
      </p>
    </Card>
  );
}
