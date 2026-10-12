import type { LucideIcon } from "lucide-react";
import { RevealWords } from "@/components/motion/RevealWords";

type SectionHeaderProps = {
  headingId: string;
  eyebrow: string;
  icon: LucideIcon;
  heading: string;
  /** Read after the heading in the secondary colour, as part of the same sentence. */
  headingMuted?: string;
  intro?: string;
  /** Split puts the intro in the right-hand column; stacked keeps it under the heading. */
  layout?: "split" | "stacked";
  className?: string;
};

function Heading({
  headingId,
  heading,
  headingMuted,
  className,
}: Pick<SectionHeaderProps, "headingId" | "heading" | "headingMuted" | "className">) {
  const leadWords = heading.split(" ").length;
  const totalWords = leadWords + (headingMuted?.split(" ").length ?? 0);

  return (
    <h2 id={headingId} className={`reveal-text text-h2 text-balance text-text ${className}`}>
      <RevealWords text={heading} totalWords={totalWords} />
      {headingMuted && (
        <>
          {" "}
          <span className="text-text-tertiary">
            <RevealWords text={headingMuted} startIndex={leadWords} totalWords={totalWords} />
          </span>
        </>
      )}
    </h2>
  );
}

// After the Cosmoq reference: an outlined icon and an uppercase label over a
// hairline rule, then the heading, with the intro beside it on wide screens.
export function SectionHeader({
  eyebrow,
  icon: Icon,
  intro,
  layout = "split",
  className = "",
  ...heading
}: SectionHeaderProps) {
  const isSplit = layout === "split";

  return (
    <header className={className}>
      <p className="flex items-center gap-3 border-b border-border pb-4 text-sm tracking-wider text-text-secondary uppercase">
        <Icon aria-hidden strokeWidth={1.25} className="size-6 text-text" />
        {eyebrow}
      </p>
      <div className={`mt-6 grid gap-5 ${isSplit ? "lg:grid-cols-12 lg:gap-8" : ""}`}>
        <Heading {...heading} className={isSplit ? "lg:col-span-8" : ""} />
        {intro && (
          <p
            className={`reveal-text max-w-xl ${isSplit ? "lg:col-span-4 lg:col-start-9 lg:pt-3" : "text-lg"}`}
          >
            <RevealWords text={intro} />
          </p>
        )}
      </div>
    </header>
  );
}
