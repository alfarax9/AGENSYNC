type PillarEvidenceProps = {
  lines: { label: string; value: string; status?: string }[];
};

// A few lines of what the runtime actually records, so each claim comes with
// its proof instead of an icon. The status is written out, never color alone.
export function PillarEvidence({ lines }: PillarEvidenceProps) {
  return (
    <dl className="border-l border-border pl-5 font-mono text-sm">
      {lines.map((line) => (
        <div key={line.label} className="grid gap-x-4 py-1.5 sm:grid-cols-[7rem_1fr]">
          <dt className="text-text-tertiary">{line.label}</dt>
          <dd className="text-text">
            {line.value}
            {line.status && <span className="ml-2 text-text-tertiary">[{line.status}]</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
