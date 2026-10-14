"use client";

import { PillarLight } from "@/components/sections/PillarLight";
import home from "@/content/home.json";
import { StageRail } from "./StageRail";
import { TaskScene } from "./TaskScene";
import { WindowBar } from "./WindowBar";

const { steps, screen } = home.howItWorks;

type TaskWindowProps = {
  zone: string;
  taskNumber: number;
  /** Moves the walk on, as the scene's own button (Send, Approve) would. */
  onAction: () => void;
  run: number;
  /** False while paused, held, or off screen: every scene animation freezes. */
  isRunning: boolean;
};

// The dashboard itself working through one task, in a window lit from behind:
// each step of the walk is a scene in it, crossfading as the walk moves on.
// Scenes start over each time their step is picked, and their animations hold
// whenever the walk does, so a scene plays out in full once it is in view.
export function TaskWindow({ zone, taskNumber, onAction, run, isRunning }: TaskWindowProps) {
  return (
    <div className="relative isolate overflow-clip px-3 pt-8 pb-2 sm:px-10 sm:pt-12">
      <PillarLight
        amber="-top-1/3 left-[8%] size-[28rem]"
        blue="-bottom-1/2 right-[5%] size-[34rem]"
      />
      <div className="mx-auto max-w-3xl overflow-clip rounded-2xl border border-border-strong bg-bg/85 shadow-[0_40px_90px_-30px_var(--color-bg)] backdrop-blur-md">
        <WindowBar taskNumber={taskNumber} />
        <StageRail
          activeIndex={steps.findIndex((step) => step.id === zone)}
          title={screen.title}
          run={run}
          isRunning={isRunning}
        />
        <div
          className={`relative h-[24rem] p-4 sm:h-[22rem] sm:p-6 ${isRunning ? "" : "[&_*]:[animation-play-state:paused]"}`}
        >
          <TaskScene zone={zone} run={run} onAction={onAction} isPaused={!isRunning} />
        </div>
      </div>
    </div>
  );
}
