import { Fragment } from "react";

const wordDelaySeconds = 0.05;

export function HeroHeadline({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <h1 id="hero-heading" className="mt-6 max-w-4xl text-display text-balance text-text">
      {words.map((word, index) => (
        <Fragment key={index}>
          <span
            className="inline-block motion-safe:animate-word-rise"
            style={{ animationDelay: `${index * wordDelaySeconds}s` }}
          >
            {word}
          </span>
          {index < words.length - 1 && " "}
        </Fragment>
      ))}
    </h1>
  );
}
