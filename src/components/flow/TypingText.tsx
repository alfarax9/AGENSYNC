"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";

const msPerCharacter = 22;

const subscribeNever = () => () => {};

// Text typed out from the moment it mounts (holding while paused), with a
// caret while it types. The
// untyped rest is laid out invisibly so nothing reflows; reduced motion shows
// it all at once. State only changes inside the interval.
export function TypingText({ text, isPaused }: { text: string; isPaused: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  // useReducedMotion is null on the server but already a boolean on the first
  // client render, so branching on it alone makes hydration disagree with the
  // server HTML. The server snapshot keeps hydration on the complete text; the
  // client snapshot then lets the typing start.
  const isHydrated = useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false,
  );
  const shouldType = isHydrated && shouldReduceMotion === false;
  const [typed, setTyped] = useState(0);
  const shown = shouldType ? typed : text.length;

  useEffect(() => {
    if (!shouldType || isPaused) return;
    const timer = setInterval(
      () => setTyped((count) => Math.min(count + 1, text.length)),
      msPerCharacter,
    );
    return () => clearInterval(timer);
  }, [shouldType, isPaused, text.length]);

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
