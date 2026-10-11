// Coordinates inside the 640 × 220 viewBox of the How it works diagram.
export const viewBox = { width: 640, height: 220 };

export const hubCenter = { x: 348, y: 114 };
export const plannerCenter = { x: 151, y: 110 };

// One position per worker in home.json, in the same order.
export const workerPositions = [
  { x: 104, y: 52 },
  { x: 162, y: 30 },
  { x: 212, y: 58 },
  { x: 106, y: 170 },
  { x: 200, y: 172 },
];

export const flowPaths = {
  brief: "M66,110 L136,110",
  loop: "M174,24 C192,4 214,18 220,46",
  intoHub: ["M166,104 C226,104 236,108 284,108", "M166,116 C220,116 236,124 284,124"],
  outOfHub: ["M412,108 C440,108 446,92 466,92", "M412,124 C440,124 446,140 466,140"],
};

// Which workers light up while each step is active.
export const zoneWorkers: Record<string, string[]> = {
  divisions: ["product-manager", "ux-architect", "logic-developer"],
  "dev-qa": ["logic-developer", "unit-integration-tester"],
};
