import type { ReactNode } from "react";

type CollapseProps = {
  id: string;
  isOpen: boolean;
  children: ReactNode;
};

// Opens and closes its content by animating the grid row from 0fr to 1fr, so
// the height follows the content without measuring it. Only what sits below
// moves; put spacing inside the children, since margins and padding on this
// wrapper would stay when it is closed. Closed content is inert, so it is
// neither focusable nor read out. The inner layer clips rather than hides, so
// it never becomes a scroll container.
export function Collapse({ id, isOpen, children }: CollapseProps) {
  return (
    <div
      id={id}
      inert={!isOpen}
      className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
    >
      <div
        className={`min-h-0 overflow-clip transition-opacity duration-300 ease-out motion-reduce:transition-none ${isOpen ? "opacity-100" : "opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
}
