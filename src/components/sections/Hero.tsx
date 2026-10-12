import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import home from "@/content/home.json";
import site from "@/content/site.json";
import { analyticsEvents } from "@/lib/analytics";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  const { hero } = home;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-navbar"
    >
      <HeroBackground />
      <Container className="flex flex-col items-center py-24 text-center">
        <Badge variant="glass">{hero.badge}</Badge>
        <h1 id="hero-heading" className="mt-8 max-w-5xl text-display text-balance text-text">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-balance">{hero.subheadline}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={`#${home.install.id}`}>
            {hero.primaryCta}
            <ArrowRight aria-hidden className="size-4" />
          </Button>
          <Button
            href={site.links.github}
            variant="secondary"
            tracking={{ event: analyticsEvents.githubClick, location: "hero" }}
          >
            {hero.secondaryCta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
