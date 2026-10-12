type PillarEvidenceProps = {
  lines: { label: string; value: string; status?: string }[];
};

// A few lines of what the runtime actually records, so each claim comes with
// its proof instead of an icon. The status is written out, never color alone.
export function PillarEvidence({ lines }: PillarEvidenceProps) {
  return (
    <dl className="font-mono text-sm">
      {lines.map((line) => (
        <div key={line.label} className="grid gap-x-4 py-1 sm:grid-cols-[6.5rem_1fr]">
          <dt className="text-text-secondary">{line.label}</dt>
          <dd className="text-text">
            {line.value}
            {line.status && <span className="ml-2 text-amber">[{line.status}]</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
