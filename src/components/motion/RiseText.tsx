import { type CSSProperties, Fragment } from "react";

type RiseTextProps = {
  text: string;
  as?: "h1" | "p";
  id?: string;
  className?: string;
  // Seconds before the first word starts, and between one word and the next.
  startDelay?: number;
  wordDelay?: number;
};

// Each word drops into place and fades in, one after another (animate-rise-in).
// Pure CSS, so the LCP headline animates before JavaScript loads and stays an
// <h1>. Reduced motion shows the text as is.
export function RiseText({
  text,
  as: Element = "p",
  id,
  className = "",
  startDelay = 0,
  wordDelay = 0.1,
}: RiseTextProps) {
  const words = text.split(" ");

  return (
    <Element id={id} className={className}>
      {words.map((word, index) => {
        const delay = { animationDelay: `${startDelay + index * wordDelay}s` } as CSSProperties;
        return (
          <Fragment key={`${word}-${index}`}>
            <span className="inline-block motion-safe:animate-rise-in" style={delay}>
              {word}
            </span>
            {index < words.length - 1 && " "}
          </Fragment>
        );
      })}
    </Element>
  );
}
