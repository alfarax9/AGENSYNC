import type { Metadata } from "next";
import { DivisionRoster } from "@/components/divisions/DivisionRoster";
import { RequirementLegend } from "@/components/divisions/RequirementLegend";
import { Container } from "@/components/ui/Container";
import pages from "@/content/pages.json";
import site from "@/content/site.json";
import { divisions } from "@/lib/divisions";

const content = pages.divisions;

export const metadata: Metadata = {
  title: content.title,
  description: content.intro,
  alternates: { canonical: "/divisions" },
  // Open Graph is replaced, not merged, so the page restates the shared fields.
  openGraph: {
    type: "website",
    siteName: site.name,
    title: content.title,
    description: content.intro,
    url: "/divisions",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.seo.ogImageAlt }],
  },
};

export default function DivisionsPage() {
  return (
    <main id="main" className="pt-navbar">
      <Container className="py-12 md:py-20">
        <h1 className="text-h2 text-text">{content.title}</h1>
        <p className="mt-4 max-w-2xl text-lg">{content.intro}</p>
        <RequirementLegend />
      </Container>
      {divisions.map((division, index) => (
        <DivisionRoster key={division.id} division={division} tone={index % 2 ? "base" : "alt"} />
      ))}
    </main>
  );
}
