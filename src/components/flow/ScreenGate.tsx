import { ShieldCheck } from "lucide-react";
import home from "@/content/home.json";
import { GateRow } from "./GateRow";
import { GateScan } from "./GateScan";

const { gate } = home.howItWorks.screen;
const passedAt = `${0.8 + gate.checks.length * 0.55}s`;

// Step 5: the Gatekeeper runs its checks as code, one after another under a
// sweeping scan line, and the task only moves on when every one passes.
export function ScreenGate() {
  return (
    <div className="flex h-full flex-col">
      <p className="flex items-center gap-2 text-sm text-text">
        <ShieldCheck aria-hidden strokeWidth={1.5} className="size-4 text-amber" />
        {gate.heading}
      </p>
      <ol className="relative mt-3">
        <GateScan />
        {gate.checks.map((check, index) => (
          <GateRow key={check.name} check={check} index={index} />
        ))}
      </ol>
      <p
        style={{ animationDelay: passedAt }}
        className="mt-auto self-start rounded-full border border-highlight-from/40 px-3 py-1 font-mono text-xs text-highlight-from motion-safe:animate-rise"
      >
        {gate.passed}
      </p>
    </div>
  );
}
