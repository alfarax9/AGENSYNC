import { type RefObject, useLayoutEffect } from "react";

// Moves and sizes a highlight onto the item at `activeIndex` (items marked
// with data-gateway inside the list), measured from the item itself and kept
// in place when the list resizes or wraps. Writes styles directly, so a
// resize never re-renders the list.
export function useSlidingHighlight(
  listRef: RefObject<HTMLElement | null>,
  highlightRef: RefObject<HTMLElement | null>,
  activeIndex: number,
) {
  useLayoutEffect(() => {
    const list = listRef.current;
    const highlight = highlightRef.current;
    if (!list || !highlight) return;
    const place = () => {
      const item = list.querySelectorAll<HTMLElement>("[data-gateway]")[activeIndex];
      if (!item) return;
      highlight.style.transform = `translate(${item.offsetLeft}px, ${item.offsetTop}px)`;
      highlight.style.width = `${item.offsetWidth}px`;
      highlight.style.height = `${item.offsetHeight}px`;
      highlight.style.opacity = "1";
    };
    place();
    const observer = new ResizeObserver(place);
    observer.observe(list);
    return () => observer.disconnect();
  }, [listRef, highlightRef, activeIndex]);
}
