import type { ReactNode } from "react";
import { RevealWords } from "@/components/motion/RevealWords";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";

type PillarCardProps = {
  /** The card's light sources (PillarLight). */
  light: ReactNode;
  /** An illustration that fills the area above the caption edge to edge. */
  visual: ReactNode;
  title: string;
  body: string;
};

// After the Cosmoq feature cards: one illustration filling the card, lit from
// within, and the claim in a frosted panel along the bottom edge.
export function PillarCard({ light, visual, title, body }: PillarCardProps) {
  return (
    <Card as="article" className="relative isolate flex w-full flex-col overflow-clip">
      {light}
      <div className="relative min-h-80 flex-1">{visual}</div>
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
