import type { ReactNode } from "react";
import { RevealWords } from "@/components/motion/RevealWords";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type PlatformPanelProps = {
  panel: { id: string; title: string; body: string; link: { label: string; href: string } };
  chips: ReactNode;
  visual: ReactNode;
  /** The panel's light sources (LightCurtain, LightBeam, LightEclipse). */
  light: ReactNode;
};

// After the Cosmoq feature panels: the copy, its chips and a link on the left,
// an illustration on the right (below on narrow screens). The light fills the
// right side and fades into the card toward the copy, with dust and grain.
export function PlatformPanel({ panel, chips, visual, light }: PlatformPanelProps) {
  return (
    <Card
      as="article"
      id={`platform-${panel.id}`}
      className="relative isolate grid grid-cols-1 overflow-clip md:grid-cols-2"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-3/5 overflow-clip bg-bg-alt [mask-image:linear-gradient(to_bottom,transparent,black_30%)] md:inset-y-0 md:left-auto md:h-auto md:w-[70%] md:[mask-image:linear-gradient(to_right,transparent,black_35%)]"
      >
        {light}
        <div className="absolute inset-0 bg-stars opacity-70" />
        <div className="absolute inset-0 bg-grain opacity-40" />
      </div>
      <div className="flex flex-col p-6 md:p-8">
        <h3 className="reveal-text text-h4 text-text">
          <RevealWords text={panel.title} />
        </h3>
        <p className="reveal-text mt-3">
          <RevealWords text={panel.body} />
        </p>
        {chips}
        <div aria-hidden className="min-h-10 flex-1" />
        <Button href={panel.link.href} variant="secondary" className="self-start">
          <span className="text-duo">{panel.link.label}</span>
        </Button>
      </div>
      <div className="relative grid min-h-96 min-w-0 place-items-center p-6">{visual}</div>
    </Card>
  );
}
