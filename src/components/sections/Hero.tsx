import { RiseText } from "@/components/motion/RiseText";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import home from "@/content/home.json";
import site from "@/content/site.json";
import { analyticsEvents } from "@/lib/analytics";
import { HeroBackground } from "./HeroBackground";

// The subheadline starts while the headline's last words are still settling,
// and the buttons arrive once the subheadline has come in.
const headlineWords = home.hero.headline.split(" ").length;
const subheadlineStart = headlineWords * 0.1;
const actionsStart = subheadlineStart + 0.6;

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
        <RiseText
          as="h1"
          id="hero-heading"
          text={hero.headline}
          className="mt-6 max-w-4xl text-display text-balance text-text"
        />
        <RiseText
          text={hero.subheadline}
          startDelay={subheadlineStart}
          wordDelay={0.03}
          className="mt-6 max-w-2xl text-lg text-balance"
        />
        <div
          style={{ animationDelay: `${actionsStart}s` }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 motion-safe:animate-rise-in"
        >
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
