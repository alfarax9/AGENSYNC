import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import home from "@/content/home.json";
import site from "@/content/site.json";
import { analyticsEvents } from "@/lib/analytics";
import { HeroBackground } from "./HeroBackground";
import { HeroHeadline } from "./HeroHeadline";

export function Hero() {
  const { hero } = home;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-navbar"
    >
      <HeroBackground />
      <Container className="flex flex-col items-center py-24 text-center">
        <Badge>{hero.badge}</Badge>
        <HeroHeadline text={hero.headline} />
        <p className="mt-6 max-w-2xl text-lg text-balance">{hero.subheadline}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Button href={`#${home.install.id}`}>{hero.primaryCta}</Button>
          <Button
            href={site.links.github}
            variant="link"
            tracking={{ event: analyticsEvents.githubClick, location: "hero" }}
          >
            {hero.secondaryCta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
