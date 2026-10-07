"use client";

import { useLenis } from "lenis/react";
import { useEffect } from "react";

function isPlainLeftClick(event: MouseEvent) {
  const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
  return !event.defaultPrevented && event.button === 0 && !hasModifier;
}

function findSamePageTarget(event: MouseEvent) {
  if (!isPlainLeftClick(event) || !(event.target instanceof Element)) return null;
  const link = event.target.closest<HTMLAnchorElement>("a[href*='#']");
  if (!link) return null;

  const url = new URL(link.href);
  const isSamePage = url.origin === location.origin && url.pathname === location.pathname;
  return isSamePage && url.hash
    ? document.getElementById(decodeURIComponent(url.hash.slice(1)))
    : null;
}

// Native anchor jumps move keyboard focus to the target; Lenis does not, so restore it.
function focusTarget(target: HTMLElement) {
  if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
}

export function AnchorScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    function handleClick(event: MouseEvent) {
      const target = findSamePageTarget(event);
      if (!target || !lenis) return;
      event.preventDefault();
      history.pushState(null, "", `#${target.id}`);
      lenis.scrollTo(target, { onComplete: () => focusTarget(target) });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lenis]);

  return null;
}
