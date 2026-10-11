// Corner marks that frame the card and step outward when it is hovered.
const corners = [
  "-top-1.5 -left-1.5 border-t-2 border-l-2 group-hover/frame:-translate-x-1 group-hover/frame:-translate-y-1",
  "-top-1.5 -right-1.5 border-t-2 border-r-2 group-hover/frame:translate-x-1 group-hover/frame:-translate-y-1",
  "-bottom-1.5 -left-1.5 border-b-2 border-l-2 group-hover/frame:-translate-x-1 group-hover/frame:translate-y-1",
  "-right-1.5 -bottom-1.5 border-r-2 border-b-2 group-hover/frame:translate-x-1 group-hover/frame:translate-y-1",
];

export function FlowBrackets() {
  return corners.map((position) => (
    <span
      key={position}
      aria-hidden
      className={`pointer-events-none absolute size-3 border-text-tertiary/60 transition-[translate,border-color] duration-300 group-hover/frame:border-text ${position}`}
    />
  ));
}
