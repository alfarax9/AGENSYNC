"use client";

import { useInView } from "motion/react";
import { useRef } from "react";
import home from "@/content/home.json";
import { FlowBrackets } from "./FlowBrackets";
import { FlowDiagram } from "./FlowDiagram";
import { FlowSteps } from "./FlowSteps";
import { FlowToolbar } from "./FlowToolbar";
import { useFlowPlayer } from "./useFlowPlayer";
import { useHold } from "./useHold";

const { steps, diagram } = home.howItWorks;

// The walk plays while the frame is on screen, holds while the pointer or focus
// is on the step list (so a tab never moves under the reader), and stops on
// Pause. Clicking the task stack on the last step ships it and starts over.
export function FlowShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const hold = useHold();
  const player = useFlowPlayer(steps.length, diagram.firstTask);
  const isRunning = isInView && !player.isPaused && !hold.isHeld;
  const zone = steps[player.index].id;
  const caption = diagram.captions[zone as keyof typeof diagram.captions];

  function selectZone(target: string) {
    if (target === zone && zone === "deliver") return player.next();
    player.select(steps.findIndex((step) => step.id === target));
  }

  return (
    <div ref={ref} className="group/frame relative mx-auto mt-14 max-w-5xl">
      <FlowBrackets />
      <div className="border border-border bg-bg-alt">
        <div role="tabpanel" id="flow-panel" aria-labelledby={`flow-tab-${zone}`}>
          <FlowToolbar
            caption={caption.replace("{task}", String(player.taskNumber))}
            position={`${player.index + 1}/${steps.length}`}
            isPaused={player.isPaused}
            isAnnounced={!isRunning}
            onTogglePause={player.togglePause}
          />
          <div className="px-3 pt-6 sm:px-8">
            <FlowDiagram zone={zone} taskNumber={player.taskNumber} onSelectZone={selectZone} />
          </div>
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
