// The lane between developer and tester: the build crosses to the tester,
// the failure comes back in red, and the fix crosses again. Reduced motion
// keeps only the lane.
const trips = [
  { delay: 0.2, color: "bg-amber", isBack: false },
  { delay: 1.2, color: "bg-danger", isBack: true },
  { delay: 2.3, color: "bg-amber", isBack: false },
];

export function TestLane() {
  return (
    <span aria-hidden className="relative h-px flex-1 border-t border-dashed border-text-tertiary">
      {trips.map((trip) => (
        <span
          key={trip.delay}
          style={{ animationDelay: `${trip.delay}s` }}
          className={`absolute inset-0 opacity-0 motion-safe:animate-cross motion-reduce:hidden ${trip.isBack ? "[animation-direction:reverse]" : ""}`}
        >
          <span
            className={`absolute -top-1 -left-1 size-2 rounded-full shadow-duo-strong ${trip.color}`}
          />
        </span>
      ))}
    </span>
  );
}
