import type { Variants } from "motion/react";

export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.08, ease: "easeOut" },
  }),
};

export const messageAppear: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export const checkAppear: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: (index: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, delay: index * 0.2 },
  }),
};

// Each word slides up out of its own clipped line box, one after another.
export const wordRise: Variants = {
  hidden: { y: "110%" },
  visible: (index: number = 0) => ({
    y: 0,
    transition: { duration: 0.7, delay: index * 0.07, ease: [0.2, 0.8, 0.2, 1] },
  }),
};
