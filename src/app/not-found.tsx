import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import pages from "@/content/pages.json";

export const metadata: Metadata = {
  title: pages.notFound.metaTitle,
};

export default function NotFound() {
  const content = pages.notFound;

  return (
    <main id="main" className="flex min-h-svh items-center pt-navbar">
      <Container className="flex flex-col items-start py-24">
        <p className="font-mono text-sm text-text-tertiary">{content.code}</p>
        <h1 className="mt-4 text-h2 text-text">{content.title}</h1>
        <p className="mt-4 max-w-xl text-lg">{content.body}</p>
        <div className="mt-10">
          <Button href="/">{content.cta}</Button>
        </div>
      </Container>
    </main>
  );
}
