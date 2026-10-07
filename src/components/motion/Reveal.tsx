"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { reveal } from "./variants";

type RevealProps = {
  index: number;
  className?: string;
  children: ReactNode;
};

export function Reveal({ index, className, children }: RevealProps) {
  return (
    <m.li
      className={className}
      variants={reveal}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </m.li>
  );
}
