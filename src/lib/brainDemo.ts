import demo from "@/content/models-demo.json";
import home from "@/content/home.json";
import { findWorker, requirements, type RequirementCode, type Worker } from "./divisions";

export type DemoModel = (typeof demo.models)[number];

export type RequirementCheck = {
  code: RequirementCode;
  status: "met" | "missing" | "plugin";
  detail?: string;
};

type Review = { workerId: string; modelId: string };

export const demoModels = demo.models;

export const demoWorkers = demo.workers.map((entry) => ({
  worker: findWorker(entry.workerId) as Worker,
  review: "reviews" in entry ? (entry.reviews as Review) : undefined,
}));

export type DemoWorker = (typeof demoWorkers)[number];

function checkFamily(model: DemoModel, review: Review): Omit<RequirementCheck, "code"> {
  const reviewedModel = demoModels.find((candidate) => candidate.id === review.modelId);
  const reviewedWorker = findWorker(review.workerId);
  const isSameFamily = reviewedModel?.family === model.family;
  const template = isSameFamily ? home.brains.demo.sameFamily : home.brains.demo.differentFamily;
  const detail = template
    .replace("{model}", reviewedModel?.name ?? "")
    .replace("{worker}", reviewedWorker?.name ?? "");
  return { status: isSameFamily ? "missing" : "met", detail };
}

function checkRequirement(
  code: RequirementCode,
  model: DemoModel,
  review?: Review,
): RequirementCheck {
  const { kind } = requirements[code];
  if (kind === "plugin") return { code, status: "plugin" };
  if (kind === "crossCheck" && review) return { code, ...checkFamily(model, review) };
  return { code, status: model.capabilities.includes(code) ? "met" : "missing" };
}

export function evaluateAssignment({ worker, review }: DemoWorker, model: DemoModel) {
  const checks = worker.requirements.map((code) => checkRequirement(code, model, review));
  return { checks, isAccepted: checks.every((check) => check.status !== "missing") };
}
