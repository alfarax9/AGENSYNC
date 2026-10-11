"use client";

import * as m from "motion/react-m";
import { wordRise } from "@/components/motion/variants";
import home from "@/content/home.json";

const words = home.finalCta.heading.split(" ");

export function CtaHeadline() {
  return (
    <m.h2
      id="final-cta-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className="max-w-2xl text-display text-balance text-text"
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            <m.span variants={wordRise} custom={index} className="inline-block">
              {word}
            </m.span>
          </span>{" "}
        </span>
      ))}
    </m.h2>
  );
}
