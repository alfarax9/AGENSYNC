import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import home from "@/content/home.json";
import site from "@/content/site.json";
import { analyticsEvents } from "@/lib/analytics";

export function FinalCta() {
  const { finalCta } = home;

  return (
    <Section labelledBy="final-cta-heading">
      <div className="flex flex-col items-center py-12 text-center">
        <h2 id="final-cta-heading" className="text-h2 text-text">
          {finalCta.heading}
        </h2>
        <p className="mt-4 text-lg">{finalCta.body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            href={site.links.github}
            tracking={{ event: analyticsEvents.githubClick, location: "final-cta" }}
          >
            {finalCta.github}
          </Button>
          <Button
            href={site.links.telegram}
            variant="secondary"
            tracking={{ event: analyticsEvents.telegramClick, location: "final-cta" }}
          >
            {finalCta.telegram}
          </Button>
        </div>
      </div>
    </Section>
  );
}
