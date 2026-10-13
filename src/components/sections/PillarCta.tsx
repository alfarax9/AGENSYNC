import { RevealWords } from "@/components/motion/RevealWords";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import home from "@/content/home.json";
import site from "@/content/site.json";
import { analyticsEvents } from "@/lib/analytics";

const { hero, install, pillars } = home;

// The closing cell of the grid: a plain dark card, since the cards around it
// carry all the light. The two actions stack at the bottom.
export function PillarCta() {
  return (
    <Card className="flex w-full flex-col p-8">
      <h3 className="reveal-text text-h3 text-balance text-text">
        <RevealWords text={pillars.cta.title} />
      </h3>
      <p className="reveal-text mt-4">
        <RevealWords text={pillars.cta.body} />
      </p>
      <div className="mt-auto flex flex-col gap-3 pt-10">
        <Button href={`#${install.id}`} className="w-full">
          {hero.primaryCta}
        </Button>
        <Button
          href={site.links.github}
          variant="secondary"
          className="w-full"
          tracking={{ event: analyticsEvents.githubClick, location: "pillars" }}
        >
          {hero.secondaryCta}
        </Button>
      </div>
    </Card>
  );
}
