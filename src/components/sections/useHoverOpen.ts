import { type PointerEvent, useState } from "react";

// Open while a mouse rests on the element, closed when it leaves. Touch and
// keyboard have no hover, so toggle() (wired to a click) opens and closes it
// too; clicking something hover already opened closes it until the pointer
// leaves, so the click never seems to do nothing.
export function useHoverOpen() {
  const [isHovered, setIsHovered] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isHoverMuted, setIsHoverMuted] = useState(false);
  const isOpen = isToggled || (isHovered && !isHoverMuted);

  return {
    isOpen,
    hoverHandlers: {
      onPointerEnter: (event: PointerEvent) => {
        if (event.pointerType === "mouse") setIsHovered(true);
      },
      onPointerLeave: () => {
        setIsHovered(false);
        setIsHoverMuted(false);
      },
    },
    toggle: () => {
      setIsToggled(!isOpen);
      if (isOpen && isHovered) setIsHoverMuted(true);
    },
  };
}
