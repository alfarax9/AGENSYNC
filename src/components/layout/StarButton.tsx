import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import site from "@/content/site.json";
import { getStarCount } from "@/lib/github";

const compactNumber = new Intl.NumberFormat("en", { notation: "compact" });

export async function StarButton() {
  const starCount = await getStarCount(site.links.github);

  return (
    <Button href={site.links.github} variant="secondary">
      <Star aria-hidden className="size-4" />
      {site.nav.star}
      {starCount !== null && (
        <span className="font-mono text-text-tertiary">
          <span className="sr-only">{site.nav.starCountLabel}: </span>
          {compactNumber.format(starCount)}
        </span>
      )}
    </Button>
  );
}
