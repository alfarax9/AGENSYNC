import type { ReactNode } from "react";
import { RevealWords } from "@/components/motion/RevealWords";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type PlatformPanelProps = {
  panel: { id: string; title: string; body: string; link: { label: string; href: string } };
  chips: ReactNode;
  visual: ReactNode;
  /** Tailwind variables that move the nebula behind the illustration. */
  nebula: string;
};

// After the Cosmoq feature panels: the copy, its chips and a link on the left,
// an illustration on a nebula on the right (below it on narrow screens).
export function PlatformPanel({ panel, chips, visual, nebula }: PlatformPanelProps) {
  return (
    <Card
      as="article"
      id={`platform-${panel.id}`}
      className="relative isolate grid overflow-clip md:grid-cols-2"
    >
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
      <div className="relative grid min-h-80 place-items-center overflow-clip p-6 md:min-h-96">
        <div aria-hidden className={`absolute inset-0 -z-10 bg-nebula blur-2xl ${nebula}`} />
        <div aria-hidden className="absolute inset-0 -z-10 bg-grain opacity-50" />
        {visual}
      </div>
    </Card>
  );
}
