import type { CSSProperties } from "react";
import data from "@/content/divisions.json";

export type RequirementCode = keyof typeof data.requirements;

export type Worker = {
  id: string;
  name: string;
  subdivision?: string;
  requirements: RequirementCode[];
  wave: number;
};

export type Division = Omit<(typeof data.divisions)[number], "workers"> & { workers: Worker[] };

export const requirements = data.requirements;
export const divisions = data.divisions as Division[];

const workers = divisions.flatMap((division) => division.workers);

export function findWorker(workerId: string) {
  return workers.find((worker) => worker.id === workerId);
}

export function findDivisionByName(name: string) {
  return divisions.find((division) => division.name === name);
}

export function findDivisionOfWorker(workerId: string) {
  return divisions.find((division) => division.workers.some((worker) => worker.id === workerId));
}

export function divisionWaves(division: Division) {
  return [...new Set(division.workers.map((worker) => worker.wave))].sort();
}

// Tailwind only generates classes it can see in source, so per-division colors
// travel as a CSS variable that utilities like bg-(--division-color) read.
export function divisionColor(divisionId: string) {
  return { "--division-color": `var(--color-division-${divisionId})` } as CSSProperties;
}
