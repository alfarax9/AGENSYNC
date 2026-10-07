import type { Metadata } from "next";
import { DivisionRoster } from "@/components/divisions/DivisionRoster";
import { RequirementLegend } from "@/components/divisions/RequirementLegend";
import { Container } from "@/components/ui/Container";
import pages from "@/content/pages.json";
import { divisions } from "@/lib/divisions";

const content = pages.divisions;

export const metadata: Metadata = {
  title: content.title,
  description: content.intro,
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
