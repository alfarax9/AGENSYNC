"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

function BurgerBars() {
  return (
    <span className="sm-burger" aria-hidden="true">
      <span className="sm-burger-bar sm-burger-bar-top" />
      <span className="sm-burger-bar sm-burger-bar-mid" />
      <span className="sm-burger-bar sm-burger-bar-bot" />
    </span>
  );
}

function MobileMenuFallback() {
  return (
    <div
      className="amora-staggered staggered-menu-wrapper fixed-wrapper pointer-events-none md:hidden"
      aria-hidden="true"
    >
      <header className="staggered-menu-header">
        <div className="sm-toggle" style={{ opacity: 0.6 }}>
          <BurgerBars />
        </div>
      </header>
    </div>
  );
}

const StaggeredNav = dynamic(() => import("./StaggeredNav").then((module) => module.StaggeredNav), {
  ssr: false,
  loading: MobileMenuFallback,
});

const mobileQuery = "(max-width: 767.98px)";

// Desktop shows the links inline in the navbar, so GSAP and the menu are only
// downloaded below the lg breakpoint.
export function MobileNavigation() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(mobileQuery);
    const update = () => setIsMounted(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isMounted ? <StaggeredNav /> : null;
}
