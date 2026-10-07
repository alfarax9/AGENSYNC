import Link from "next/link";
import { Container } from "@/components/ui/Container";
import site from "@/content/site.json";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { StarButton } from "./StarButton";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-navbar">
      <Container className="flex h-full items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={site.nav.homeLabel}
          className="font-mono text-lg font-bold tracking-widest text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-glow"
        >
          {site.name}
        </Link>
        <div className="hidden items-center gap-10 lg:flex">
          <NavLinks
            className="flex gap-8"
            linkClassName="text-sm text-text-tertiary hover:text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-glow"
          />
          <StarButton />
        </div>
        <MobileMenu>
          <StarButton />
        </MobileMenu>
      </Container>
    </header>
  );
}
