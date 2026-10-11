import { type CSSProperties, Fragment } from "react";

// Share of the reveal each word takes, so neighbouring words overlap and the
// text fills in as a wave rather than one word at a time.
const wordWindow = 0.2;

type RevealWordsProps = {
  text: string;
  startIndex?: number;
  totalWords?: number;
};

// Splits a string into words that light up in reading order as their container
// scrolls through the viewport. The container needs the `reveal-text` class,
// which owns the scroll timeline (see globals.css). Pure CSS: no JavaScript,
// and without scroll-driven animation support the text is simply shown.
// startIndex and totalWords let two runs inside one container (a heading with
// a muted second half) read as one sequence.
export function RevealWords({ text, startIndex = 0, totalWords }: RevealWordsProps) {
  const words = text.split(" ");
  const total = totalWords ?? words.length;

  return words.map((word, index) => {
    const from = ((startIndex + index) / total) * (1 - wordWindow);
    const range = { "--reveal-from": from, "--reveal-to": from + wordWindow } as CSSProperties;
    return (
      <Fragment key={`${word}-${index}`}>
        <span className="reveal-word inline-block" style={range}>
          {word}
        </span>
        {index < words.length - 1 && " "}
      </Fragment>
    );
  });
}
