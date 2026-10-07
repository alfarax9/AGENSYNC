type SectionHeaderProps = {
  headingId: string;
  heading: string;
  intro?: string;
};

export function SectionHeader({ headingId, heading, intro }: SectionHeaderProps) {
  return (
    <header className="max-w-2xl lg:col-span-2">
      <h2 id={headingId} className="text-h2 text-text">
        {heading}
      </h2>
      {intro && <p className="mt-4 text-lg">{intro}</p>}
    </header>
  );
}
