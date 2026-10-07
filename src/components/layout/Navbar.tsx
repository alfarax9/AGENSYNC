import Link from "next/link";
import { Container } from "@/components/ui/Container";
import site from "@/content/site.json";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { StarButton } from "./StarButton";

// A floating bar that stays in place while the page scrolls. Its own tinted,
// blurred surface keeps the links readable over any section beneath it.
export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-navbar py-3">
      <Container className="h-full">
        <div className="flex h-full items-center justify-between gap-6 rounded-2xl border border-border bg-overlay pr-2 pl-5 backdrop-blur-xl lg:pr-3">
          <Link
            href="/"
            aria-label={site.nav.homeLabel}
            className="font-mono text-lg font-bold tracking-widest text-text"
          >
            {site.name}
          </Link>
          <div className="hidden items-center gap-10 lg:flex">
            <NavLinks
              className="flex gap-8"
              linkClassName="text-sm text-text-secondary hover:text-text"
            />
            <StarButton />
          </div>
          <MobileMenu>
            <StarButton />
          </MobileMenu>
        </div>
      </Container>
    </header>
  );
}
