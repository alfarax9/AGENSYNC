"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

// Waits for the first <canvas> to land inside, then two frames more so its first
// picture has been drawn, and only then fades the whole thing in. Starting the
// fade at mount would let part of it play while three.js is still loading, and
// the waves would still seem to pop in.
//
// `mix-blend-screen` lives on this wrapper rather than on the canvas container:
// the canvas is opaque (black where there are no lines), so it has to blend with
// what is behind it, and a plain opacity layer would blend only inside itself
// during the fade and then jump when opacity reaches 1.
export function FadeInWhenReady({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frame = 0;
    const reveal = () => {
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => setIsReady(true));
      });
    };

    if (element.querySelector("canvas")) {
      reveal();
      return () => cancelAnimationFrame(frame);
    }
    const observer = new MutationObserver(() => {
      if (!element.querySelector("canvas")) return;
      observer.disconnect();
      reveal();
    });
    observer.observe(element, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 mix-blend-screen transition-opacity duration-[1600ms] ease-out ${isReady ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
