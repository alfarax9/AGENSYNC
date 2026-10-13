import type { ReactNode } from "react";
import { RevealWords } from "@/components/motion/RevealWords";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";

type PillarCardProps = {
  /** Tailwind variables that move the nebula, so neighbouring cards differ. */
  nebula: string;
  visual: ReactNode;
  title: string;
  body: string;
};

// After the Cosmoq feature cards: an illustration floating on a nebula, and
// the claim in a frosted panel along the bottom edge.
export function PillarCard({ nebula, visual, title, body }: PillarCardProps) {
  return (
    <Card as="article" className="relative isolate flex w-full flex-col overflow-clip">
      <div aria-hidden className={`absolute inset-0 -z-10 bg-nebula blur-2xl ${nebula}`} />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grain opacity-50" />
      <div className="grid min-h-72 flex-1 place-items-center p-6">{visual}</div>
      <GlassPanel className="m-3 p-6">
        <h3 className="reveal-text text-h4 text-text">
          <RevealWords text={title} />
        </h3>
        <p className="reveal-text mt-2">
          <RevealWords text={body} />
        </p>
      </GlassPanel>
    </Card>
  );
}
