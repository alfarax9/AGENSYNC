import { track } from "@vercel/analytics";
import { type RefObject, useEffect, useRef } from "react";
import site from "@/content/site.json";
import { analyticsEvents } from "@/lib/analytics";

const trackedLinks: Record<string, string> = {
  [site.links.github]: analyticsEvents.githubClick,
  [site.links.telegram]: analyticsEvents.telegramClick,
};

function pageRegions() {
  return [document.getElementById("main"), document.querySelector<HTMLElement>("body > footer")];
}

// The panel is unreachable while closed and the page is unreachable while
// open, which together act as a focus trap.
function syncInertness(panel: HTMLElement, isOpen: boolean) {
  panel.inert = !isOpen;
  pageRegions().forEach((region) => region && (region.inert = isOpen));
  document.documentElement.style.overflow = isOpen ? "hidden" : "";
}

function listenWhileOpen(panel: HTMLElement, close: () => void) {
  const handleKeyDown = (event: KeyboardEvent) => event.key === "Escape" && close();
  const handleClick = (event: MouseEvent) => {
    const link = event.target instanceof Element ? event.target.closest("a") : null;
    if (!link) return;
    const trackedEvent = trackedLinks[link.href];
    if (trackedEvent) track(trackedEvent, { location: "mobile-menu" });
    close();
  };

  document.addEventListener("keydown", handleKeyDown);
  panel.addEventListener("click", handleClick);
  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    panel.removeEventListener("click", handleClick);
  };
}

// The vendor menu only slides its panel off screen, so it stays reachable by
// Tab, ignores Escape and stays open after a link click. This closes those
// gaps and returns focus to the toggle when the menu closes.
export function useMenuAccessibility(
  rootRef: RefObject<HTMLDivElement | null>,
  isOpen: boolean,
  onClose?: () => void,
) {
  const wasOpen = useRef(false);

  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = "";
      pageRegions().forEach((region) => region && (region.inert = false));
    };
  }, []);

  useEffect(() => {
    const panel = rootRef.current?.querySelector<HTMLElement>(".staggered-menu-panel");
    const toggle = document.querySelector<HTMLButtonElement>(".sm-toggle");
    if (!panel) return;

    syncInertness(panel, isOpen);
    if (!isOpen && wasOpen.current && toggle) toggle.focus({ preventScroll: true });
    wasOpen.current = isOpen;

    if (isOpen) {
      const focusTimer = setTimeout(() => {
        panel.querySelector<HTMLElement>(".sm-panel-item")?.focus({ preventScroll: true });
      }, 300);
      const stopListening = listenWhileOpen(panel, () => {
        if (onClose) onClose();
        else toggle?.click();
      });
      return () => {
        clearTimeout(focusTimer);
        stopListening();
      };
    }
  }, [rootRef, isOpen, onClose]);
}
