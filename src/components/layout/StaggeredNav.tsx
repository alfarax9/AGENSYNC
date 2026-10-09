"use client";

import { gsap } from "gsap";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import StaggeredMenu from "@/components/vendor/react-bits/StaggeredMenu";
import site from "@/content/site.json";
import { useMenu } from "./MenuContext";
import { useMenuAccessibility } from "./useMenuAccessibility";

type LinkKey = keyof typeof site.links;

const items = site.nav.items.map((item) => ({
  label: item.label,
  ariaLabel: item.label,
  link: item.href,
}));

const socialItems = site.nav.menuSocials.map((social) => ({
  label: social.label,
  link: site.links[social.link as LinkKey],
}));

const layerColors = ["var(--color-depth-from)", "var(--color-depth-to)"];

// The vendor menu accepts any CSS color string, so the layers and accent read
// AMORA tokens directly. The logo slot is hidden in CSS; the navbar keeps the wordmark.
export function StaggeredNav() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { isOpen, close } = useMenu();
  const shouldReduceMotion = useReducedMotion();
  useMenuAccessibility(rootRef, isOpen, close);

  // GSAP drives nothing else on the site, so speeding up its global timeline
  // turns every menu transition into an instant change under reduced motion.
  useEffect(() => {
    gsap.globalTimeline.timeScale(shouldReduceMotion ? 100 : 1);
  }, [shouldReduceMotion]);

  return (
    <div ref={rootRef} className="md:hidden">
      <StaggeredMenu
        isFixed
        isOpen={isOpen}
        className="amora-staggered"
        items={items}
        socialItems={socialItems}
        displayItemNumbering={false}
        colors={layerColors}
        accentColor="var(--color-accent-glow)"
        changeMenuColorOnOpen={false}
        logoUrl="/icon"
        onMenuClose={close}
      />
    </div>
  );
}
