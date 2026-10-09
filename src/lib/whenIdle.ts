// Runs work once the browser is idle so it never competes with first paint.
// Safari has no requestIdleCallback; a timeout still defers past first paint.
export function whenIdle(callback: () => void) {
  if ("requestIdleCallback" in window) {
    const handle = window.requestIdleCallback(callback, { timeout: 2000 });
    return () => window.cancelIdleCallback(handle);
  }
  const handle = setTimeout(callback, 200);
  return () => clearTimeout(handle);
}
