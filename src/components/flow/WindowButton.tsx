import type { ReactNode } from "react";
import { ClickCursor } from "./ClickCursor";

type WindowButtonProps = {
  isPrimary?: boolean;
  /** Draws the eye to the button the scene is waiting on. */
  isCalling?: boolean;
  /** Seconds into the scene at which a cursor glides in and clicks it. */
  clickAt?: number;
  label?: string;
  onClick?: () => void;
  children: ReactNode;
};

// A button at the dashboard's own size, the primary one in the duo border and
// glowing when the scene waits on it. With clickAt, a cursor glides in and
// clicks it and the button presses, so the scene shows you acting, not only
// the agency. Without onClick it is a picture of a button.
export function WindowButton(props: WindowButtonProps) {
  const { isPrimary, isCalling, clickAt, label, onClick, children } = props;
  const pressed = clickAt === undefined ? undefined : { animationDelay: `${clickAt}s` };
  const className = `rounded-card px-3 py-1.5 text-xs whitespace-nowrap transition-shadow ${isPrimary ? "border-duo font-semibold text-text" : "border border-border-strong text-text-secondary"} ${isCalling ? "shadow-duo-strong" : ""} ${pressed ? "motion-safe:animate-press" : ""}`;

  return (
    <span className="relative inline-flex">
      {onClick ? (
        <button
          type="button"
          aria-label={label}
          onClick={onClick}
          style={pressed}
          className={`${className} hover:shadow-duo-strong`}
        >
          {children}
        </button>
      ) : (
        <span aria-hidden style={pressed} className={className}>
          {children}
        </span>
      )}
      {clickAt !== undefined && <ClickCursor at={clickAt} />}
    </span>
  );
}
