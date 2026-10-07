import { Card } from "@/components/ui/Card";
import home from "@/content/home.json";

type BrainManifestProps = {
  slots: { id: string; body: string }[];
};

// Shown as a manifest file because that is literally how a worker's brain is defined.
export function BrainManifest({ slots }: BrainManifestProps) {
  return (
    <Card tone="alt" className="overflow-hidden">
      <p className="border-b border-border px-5 py-3 font-mono text-xs text-text-tertiary">
        {home.brains.manifestFile}
      </p>
      <dl className="divide-y divide-border">
        {slots.map((slot) => (
          <div key={slot.id} className="grid gap-1 px-5 py-4 sm:grid-cols-3 sm:gap-4">
            <dt className="font-mono text-sm text-text-tertiary">{slot.id}:</dt>
            <dd className="sm:col-span-2">{slot.body}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
