import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import site from "@/content/site.json";
import { FooterColumn } from "./FooterColumn";

const nebulaStyle = { "--nebula-x": "25%", "--nebula-y": "40%" } as CSSProperties;

// After the Cosmoq reference: the wordmark set huge in the duo colours, rising
// out of a nebula, with the link columns underneath.
export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border bg-bg">
      <div
        aria-hidden
        style={nebulaStyle}
        className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-nebula opacity-45 blur-3xl"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grain opacity-40" />
      <Container className="pt-16 md:pt-24">
        <p className="bg-linear-to-r from-amber via-text to-accent-glow bg-clip-text text-center font-mono text-[clamp(4.5rem,21vw,17.5rem)] leading-none font-bold tracking-[0.06em] text-transparent">
          {site.name}
        </p>
      </Container>
      <Container className="grid gap-12 py-12 md:grid-cols-4 md:py-16">
        <p className="max-w-sm md:col-span-2">{site.footer.tagline}</p>
        {site.footer.columns.map((column) => (
          <FooterColumn key={column.title} title={column.title} links={column.links} />
        ))}
      </Container>
      <div className="border-t border-border">
        <Container className="py-6 text-sm text-text-tertiary">
          <p>{site.footer.copyright}</p>
        </Container>
      </div>
    </footer>
  );
}
