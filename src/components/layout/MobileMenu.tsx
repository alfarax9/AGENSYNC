"use client";

import { Menu, X } from "lucide-react";
import { useRef, type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";
import site from "@/content/site.json";
import { NavLinks } from "./NavLinks";

// A modal <dialog> gives the full-screen menu a focus trap, Escape to close,
// and an inert page behind it without extra code.
export function MobileMenu({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeMenu = () => dialogRef.current?.close();

  return (
    <>
      <IconButton
        label={site.nav.openMenu}
        icon={Menu}
        onClick={() => dialogRef.current?.showModal()}
        className="lg:hidden"
        hasPopup
      />
      <dialog
        ref={dialogRef}
        aria-label={site.nav.label}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-bg text-text opacity-0 transition-[opacity,display,overlay] transition-discrete duration-300 open:opacity-100 motion-reduce:transition-none starting:open:opacity-0"
      >
        <Container className="flex h-navbar items-center justify-end">
          <IconButton label={site.nav.closeMenu} icon={X} onClick={closeMenu} />
        </Container>
        <Container className="flex flex-col gap-10 pt-6">
          <NavLinks
            className="flex flex-col gap-6"
            linkClassName="text-h4 text-text"
            onNavigate={closeMenu}
          />
          {children}
        </Container>
      </dialog>
    </>
  );
}
