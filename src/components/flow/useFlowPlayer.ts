import { useCallback, useState } from "react";

type PlayerState = { index: number; taskNumber: number; run: number };

// Leaving the last step ships the task, so the next walk is the next task;
// the number stays put from brief to review. `run` changes on every pick, so
// the step's progress bar restarts even when the same step is chosen again.
function moveTo(previous: PlayerState, index: number, stepCount: number): PlayerState {
  const isShipping = previous.index === stepCount - 1 && index !== previous.index;
  return {
    index,
    taskNumber: previous.taskNumber + (isShipping ? 1 : 0),
    run: previous.run + 1,
  };
}

// The walk through the steps. There is no timer here: the active step's
// progress bar fires `next` when its CSS animation ends, so pausing the bar
// pauses the walk and nothing can drift out of sync.
export function useFlowPlayer(stepCount: number, firstTask: number) {
  const [state, setState] = useState<PlayerState>({ index: 0, taskNumber: firstTask, run: 0 });
  const [isPaused, setIsPaused] = useState(false);

  const select = useCallback(
    (index: number) => setState((previous) => moveTo(previous, index, stepCount)),
    [stepCount],
  );
  const next = useCallback(
    () => setState((previous) => moveTo(previous, (previous.index + 1) % stepCount, stepCount)),
    [stepCount],
  );
  const togglePause = useCallback(() => setIsPaused((paused) => !paused), []);

  return { ...state, isPaused, select, next, togglePause };
}
