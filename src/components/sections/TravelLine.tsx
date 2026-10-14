// A dashed line with a glowing dot crossing it on the shared 5s loop. Put a
// result beside it with animate-arrive and it shows as the dot lands. Under
// reduced motion only the line remains.
export function TravelLine() {
  return (
    <span className="relative block h-px w-full border-t border-dashed border-text-secondary">
      <span className="absolute inset-0 motion-safe:animate-travel motion-reduce:hidden">
        <span className="absolute -top-1 -left-1 size-2 rounded-full bg-amber shadow-duo-strong" />
      </span>
    </span>
  );
}
