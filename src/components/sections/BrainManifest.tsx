import { RevealWords } from "@/components/motion/RevealWords";
import { Card } from "@/components/ui/Card";
import home from "@/content/home.json";

type BrainManifestProps = {
  slots: { id: string; body: string }[];
};

// Shown as a manifest file because that is literally how a worker's brain is defined.
export function BrainManifest({ slots }: BrainManifestProps) {
  return (
    <Card className="overflow-clip">
      <p className="flex items-center gap-2 border-b border-border px-6 py-4 font-mono text-xs text-text-tertiary">
        <span aria-hidden className="size-2 rounded-full bg-duo" />
        {home.brains.manifestFile}
      </p>
      <dl className="divide-y divide-border">
        {slots.map((slot) => (
          <div key={slot.id} className="grid gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-4">
            <dt className="font-mono text-sm text-text-tertiary">{slot.id}:</dt>
            <dd className="reveal-text sm:col-span-2">
              <RevealWords text={slot.body} />
            </dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
