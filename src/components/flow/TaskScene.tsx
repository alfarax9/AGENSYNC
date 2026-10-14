"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { ScreenBrief } from "./ScreenBrief";
import { ScreenBuild } from "./ScreenBuild";
import { ScreenDeliver } from "./ScreenDeliver";
import { ScreenGate } from "./ScreenGate";
import { ScreenLoop } from "./ScreenLoop";
import { ScreenPlan } from "./ScreenPlan";

type TaskSceneProps = {
  zone: string;
  /** Changes whenever the step is (re)picked, so the scene starts over. */
  run: number;
  onAction: () => void;
  isPaused: boolean;
};

function sceneFor({ zone, onAction, isPaused }: Omit<TaskSceneProps, "run">) {
  switch (zone) {
    case "brief":
      return <ScreenBrief onAction={onAction} isPaused={isPaused} />;
    case "plan":
      return <ScreenPlan onAction={onAction} />;
    case "divisions":
      return <ScreenBuild />;
    case "dev-qa":
      return <ScreenLoop />;
    case "gatekeeper":
      return <ScreenGate />;
    default:
      return <ScreenDeliver onAction={onAction} />;
  }
}

// The scene for the current step, crossfading into the next.
export function TaskScene({ zone, run, onAction, isPaused }: TaskSceneProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <m.div
        key={`${zone}-${run}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="h-full"
      >
        {sceneFor({ zone, onAction, isPaused })}
      </m.div>
    </AnimatePresence>
  );
}
