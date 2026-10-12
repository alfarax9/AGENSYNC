import Link from "next/link";
import { Container } from "@/components/ui/Container";
import site from "@/content/site.json";
import { NavBurger } from "./NavBurger";
import { NavLinks } from "./NavLinks";
import { StarButton } from "./StarButton";

// After the Cosmoq reference: wordmark on the left, the links in a glass pill
// centred on the page, the call to action on the right. A fade from the page
// colour behind the bar keeps the wordmark readable over scrolled content.
export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[70] h-navbar py-3 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-[150%] before:bg-linear-to-b before:from-bg before:via-bg/75 before:to-transparent">
      <Container className="grid h-full grid-cols-[1fr_auto] items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          aria-label={site.nav.homeLabel}
          className="justify-self-start font-mono text-xl font-bold tracking-[0.2em] text-text"
        >
          {site.name}
        </Link>
        <div className="hidden md:block">
          <NavLinks
            className="flex h-11 items-center gap-6 rounded-full border border-border-strong bg-bg/60 px-6 whitespace-nowrap shadow-glass backdrop-blur-xl lg:gap-7"
            linkClassName="relative text-sm text-text-secondary transition-colors hover:text-text focus-visible:text-text after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-right after:scale-x-0 after:bg-duo after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
          />
        </div>
        <div className="flex justify-self-end">
          <div className="hidden lg:block">
            <StarButton />
          </div>
          <NavBurger />
        </div>
      </Container>
    </header>
  );
}
