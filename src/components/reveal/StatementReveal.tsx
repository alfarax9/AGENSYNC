"use client";

import { useScroll } from "motion/react";
import { useRef } from "react";
import { RevealNumber } from "./RevealNumber";
import { RevealWord } from "./RevealWord";

// Each word lights up over this share of the sentence's own scroll, so
// neighbouring words overlap and the sentence fills in as a wave.
const wordWindow = 0.14;

function parseTokens(statement: string) {
  return statement.split(" ").map((token) => {
    const isNumber = token.startsWith("*") && token.endsWith("*");
    return { text: isNumber ? token.slice(1, -1) : token, isNumber };
  });
}

function wordRange(index: number, count: number): [number, number] {
  const start = (index / count) * (1 - wordWindow);
  return [start, start + wordWindow];
}

// Nothing is pinned: the sentence scrolls with the page like any other text,
// and its words light up while it travels from the lower part of the screen
// to just above the middle. Reduced motion shows every word lit.
export function StatementReveal({ statement }: { statement: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.35"] });
  const tokens = parseTokens(statement);

  return (
    <p ref={ref} className="max-w-4xl text-h3 text-pretty text-text-secondary">
      {tokens.map((token, index) => {
        const range = wordRange(index, tokens.length);
        return (
          <span key={`${token.text}-${index}`}>
            {token.isNumber ? (
              <RevealNumber progress={scrollYProgress} range={range} value={token.text} />
            ) : (
              <RevealWord progress={scrollYProgress} range={range}>
                {token.text}
              </RevealWord>
            )}{" "}
          </span>
        );
      })}
    </p>
  );
}
