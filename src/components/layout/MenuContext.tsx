"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type MenuContextType = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  toggle: () => {},
  close: () => {},
});

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 48rem)");
    const handleDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };
    query.addEventListener("change", handleDesktop);
    return () => query.removeEventListener("change", handleDesktop);
  }, []);

  return <MenuContext.Provider value={{ isOpen, toggle, close }}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  return useContext(MenuContext);
}
