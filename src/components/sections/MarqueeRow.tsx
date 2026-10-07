import { type Division, divisionColor } from "@/lib/divisions";

type MarqueeRowProps = {
  divisions: Division[];
  isReversed?: boolean;
};

const copies = ["original", "loop"];

// Two identical lists slide together; when the first has fully left, the second
// sits exactly where it started, so the loop has no seam. Only the first list of
// the first row is exposed to assistive technology.
export function MarqueeRow({ divisions, isReversed }: MarqueeRowProps) {
  return (
    <div aria-hidden={isReversed} className="flex overflow-hidden py-2">
      {copies.map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === "loop" || undefined}
          className={`flex shrink-0 gap-10 pr-10 group-focus-within:animation-paused group-hover:animation-paused group-data-paused:animation-paused ${isReversed ? "motion-safe:animate-marquee-reverse" : "motion-safe:animate-marquee"}`}
        >
          {divisions.map((division) => (
            <li
              key={division.id}
              style={divisionColor(division.id)}
              className="flex items-center gap-3 font-mono text-sm tracking-widest whitespace-nowrap text-text-tertiary uppercase"
            >
              <span className="size-2 rounded-full bg-(--division-color)" />
              {division.name}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
