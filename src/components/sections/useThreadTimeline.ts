import { useInView, useReducedMotion } from "motion/react";
import { type RefObject, useEffect, useState } from "react";
import home from "@/content/home.json";

const { messages } = home.platform.visuals.workers;

type Step = { kind: "compose" | "typing" | "message"; message: number };

// Your messages are typed into the composer first; a worker's reply is
// preceded by its typing indicator. Then the message lands.
const steps: Step[] = messages.flatMap((message, index) => [
  { kind: "author" in message ? "compose" : "typing", message: index },
  { kind: "message", message: index },
]);

const msPerCharacter = 38;
const durations = { typing: 1400, message: 1100 };
const sendPause = 400;
const holdAtEnd = 4500;

// Drives the agent thread while it is on screen: one step at a time, holding
// on the finished thread before it starts over. Off screen, under reduced
// motion, and on the server the whole thread shows, so the static view is
// complete. State only changes inside timers, never during render or effect setup.
export function useThreadTimeline(ref: RefObject<Element | null>) {
  const isInView = useInView(ref, { amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const isPlaying = isInView && shouldReduceMotion === false;
  const [stepIndex, setStepIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const step = steps[stepIndex] as Step | undefined;

  useEffect(() => {
    if (!isPlaying) return;
    let delay = step ? (step.kind === "compose" ? 0 : durations[step.kind]) : holdAtEnd;
    let next = () => setStepIndex(step ? stepIndex + 1 : 0);
    if (step?.kind === "compose") {
      const isTyped = typed >= messages[step.message].text.length;
      delay = isTyped ? sendPause : msPerCharacter;
      next = isTyped ? () => (setTyped(0), setStepIndex(stepIndex + 1)) : () => setTyped(typed + 1);
    }
    const timer = setTimeout(next, delay);
    return () => clearTimeout(timer);
  }, [isPlaying, step, stepIndex, typed]);

  const current = isPlaying ? step : undefined;
  const visibleCount = isPlaying
    ? steps.slice(0, stepIndex + 1).filter((candidate) => candidate.kind === "message").length
    : messages.length;

  return {
    visibleCount,
    typingMessage: current?.kind === "typing" ? messages[current.message] : undefined,
    composerText: current?.kind === "compose" ? messages[current.message].text.slice(0, typed) : "",
  };
}
