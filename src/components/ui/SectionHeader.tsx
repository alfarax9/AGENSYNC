import { RevealWords } from "@/components/motion/RevealWords";

type SectionHeaderProps = {
  headingId: string;
  heading: string;
  intro?: string;
};

export function SectionHeader({ headingId, heading, intro }: SectionHeaderProps) {
  return (
    <header className="max-w-2xl lg:col-span-2">
      <h2 id={headingId} className="reveal-text text-h2 text-text">
        <RevealWords text={heading} />
      </h2>
      {intro && (
        <p className="reveal-text mt-4 text-lg">
          <RevealWords text={intro} />
        </p>
      )}
    </header>
  );
}
