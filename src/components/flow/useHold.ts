import { type FocusEvent, useState } from "react";

// True while the pointer is over the element or focus is inside it. Spread
// `handlers` on the element; blur only counts when focus leaves the element.
export function useHold() {
  const [isPointerHeld, setIsPointerHeld] = useState(false);
  const [isFocusHeld, setIsFocusHeld] = useState(false);

  const handlers = {
    onPointerEnter: () => setIsPointerHeld(true),
    onPointerLeave: () => setIsPointerHeld(false),
    onFocus: () => setIsFocusHeld(true),
    onBlur: (event: FocusEvent<HTMLElement>) =>
      setIsFocusHeld(event.currentTarget.contains(event.relatedTarget)),
  };

  return { isHeld: isPointerHeld || isFocusHeld, handlers };
}
