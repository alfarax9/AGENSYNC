import Link from "next/link";
import { Container } from "@/components/ui/Container";
import site from "@/content/site.json";
import { NavBurger } from "./NavBurger";
import { NavLinks } from "./NavLinks";
import { StarButton } from "./StarButton";

// A floating bar that stays in place while the page scrolls. Its own tinted,
// blurred surface keeps the links readable over any section beneath it.
export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[70] h-navbar py-3">
      <Container className="h-full">
        <div className="flex h-full items-center justify-between gap-6 rounded-2xl border border-border bg-overlay pr-2 pl-5 backdrop-blur-xl md:pr-3">
          <Link
            href="/"
            aria-label={site.nav.homeLabel}
            className="font-mono text-lg font-bold tracking-widest text-text"
          >
            {site.name}
          </Link>
          <div className="hidden items-center gap-4 whitespace-nowrap md:flex lg:gap-8">
            <NavLinks
              className="flex gap-4 lg:gap-8"
              linkClassName="relative text-sm text-text-secondary transition-colors hover:text-text focus-visible:text-text after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-right after:scale-x-0 after:bg-text after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
            />
            <StarButton />
          </div>
          <NavBurger />
        </div>
      </Container>
    </header>
  );
}
