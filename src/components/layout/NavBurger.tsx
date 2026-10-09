"use client";

import { useMenu } from "./MenuContext";

export function NavBurger() {
  const { isOpen, toggle } = useMenu();

  return (
    <button
      type="button"
      onClick={toggle}
      className="sm-toggle md:hidden"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="staggered-menu-panel"
    >
      <span className="sm-burger" aria-hidden="true">
        <span className="sm-burger-bar sm-burger-bar-top" />
        <span className="sm-burger-bar sm-burger-bar-mid" />
        <span className="sm-burger-bar sm-burger-bar-bot" />
      </span>
    </button>
  );
}
