"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const msPerCharacter = 22;

// Text typed out from the moment it mounts (holding while paused), with a
// caret while it types. The
// untyped rest is laid out invisibly so nothing reflows; reduced motion shows
// it all at once. State only changes inside the interval.
export function TypingText({ text, isPaused }: { text: string; isPaused: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const [typed, setTyped] = useState(0);
  const shown = shouldReduceMotion === false ? typed : text.length;

  useEffect(() => {
    if (shouldReduceMotion !== false || isPaused) return;
    const timer = setInterval(
      () => setTyped((count) => Math.min(count + 1, text.length)),
      msPerCharacter,
    );
    return () => clearInterval(timer);
  }, [shouldReduceMotion, isPaused, text.length]);

  return (
    <>
      {text.slice(0, shown)}
      {shown < text.length && (
        <span className="ml-px inline-block h-3.5 w-px translate-y-0.5 bg-text" />
      )}
      <span className="invisible">{text.slice(shown)}</span>
    </>
  );
}
