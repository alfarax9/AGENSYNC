"use client";

import { track } from "@vercel/analytics";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import home from "@/content/home.json";
import { analyticsEvents } from "@/lib/analytics";

function trackTaggedLinkClick(event: MouseEvent) {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest<HTMLElement>("[data-track-event]");
  if (!link?.dataset.trackEvent) return;
  track(link.dataset.trackEvent, { location: link.dataset.trackLocation ?? "unknown" });
}

// One listener for every tagged link, so CTAs can stay Server Components
// instead of each shipping its own click handler.
export function AnalyticsEvents() {
  // The layout persists across client navigation, so re-observe on every page.
  const pathname = usePathname();

  useEffect(() => {
    document.addEventListener("click", trackTaggedLinkClick);

    // Scroll depth target from the PRD: how many visitors reach Divisions.
    const divisions = document.getElementById(home.divisions.id);
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      track(analyticsEvents.reachedDivisions);
      observer.disconnect();
    });
    if (divisions) observer.observe(divisions);

    return () => {
      document.removeEventListener("click", trackTaggedLinkClick);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
