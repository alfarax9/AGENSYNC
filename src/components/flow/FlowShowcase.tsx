"use client";

import { useInView } from "motion/react";
import { useRef } from "react";
import home from "@/content/home.json";
import { FlowSteps } from "./FlowSteps";
import { FlowToolbar } from "./FlowToolbar";
import { TaskWindow } from "./TaskWindow";
import { useFlowPlayer } from "./useFlowPlayer";
import { useHold } from "./useHold";

const { steps, diagram } = home.howItWorks;

// The walk plays while the frame is on screen, holds while the pointer or focus
// is on the step list (so a tab never moves under the reader), and stops on
// Pause. The window's own buttons move it on too: Send brief, Approve plan,
// and Approve on the last step, which ships the task and starts the next one.
export function FlowShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const hold = useHold();
  const player = useFlowPlayer(steps.length, diagram.firstTask);
  const isRunning = isInView && !player.isPaused && !hold.isHeld;
  const zone = steps[player.index].id;
  const caption = diagram.captions[zone as keyof typeof diagram.captions];

  return (
    <div ref={ref} className="mt-12 md:mt-16">
      <div className="overflow-clip rounded-panel border border-border bg-bg-alt">
        <div role="tabpanel" id="flow-panel" aria-labelledby={`flow-tab-${zone}`}>
          <FlowToolbar
            caption={caption.replace("{task}", String(player.taskNumber))}
            position={`${player.index + 1}/${steps.length}`}
            isPaused={player.isPaused}
            isAnnounced={!isRunning}
            onTogglePause={player.togglePause}
          />
          <TaskWindow
            zone={zone}
            taskNumber={player.taskNumber}
            onAction={player.next}
            run={player.run}
            isRunning={isRunning}
          />
        </div>
        <div {...hold.handlers} className="px-6 pt-10 pb-8 sm:px-10 sm:pb-10">
          <FlowSteps
            steps={steps}
            status={{ activeIndex: player.index, run: player.run, isRunning }}
            onSelect={player.select}
            onAdvance={player.next}
          />
        </div>
      </div>
    </div>
  );
}
