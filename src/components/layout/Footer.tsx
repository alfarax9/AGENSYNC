import { Container } from "@/components/ui/Container";
import site from "@/content/site.json";
import { FooterColumn } from "./FooterColumn";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt">
      <Container className="grid gap-12 py-12 md:grid-cols-4 md:py-20">
        <div className="md:col-span-2">
          <p className="font-mono text-lg font-bold tracking-widest text-text">{site.name}</p>
          <p className="mt-4 max-w-sm">{site.footer.tagline}</p>
        </div>
        {site.footer.columns.map((column) => (
          <FooterColumn key={column.title} title={column.title} links={column.links} />
        ))}
      </Container>
      <Container className="border-t border-border py-6 text-sm text-text-tertiary">
        <p>{site.footer.copyright}</p>
      </Container>
    </footer>
  );
}
