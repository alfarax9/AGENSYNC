import { track } from "@vercel/analytics";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import home from "@/content/home.json";
import { analyticsEvents } from "@/lib/analytics";

const resetDelay = 2000;

type CopyButtonProps = {
  text: string;
  methodId: string;
};

export function CopyButton({ text, methodId }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    track(analyticsEvents.installCopied, { location: methodId });
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), resetDelay);
  }

  const Icon = hasCopied ? Check : Copy;

  return (
    <button type="button" onClick={copy} className="flex items-center gap-2 py-3 text-sm text-text">
      <Icon aria-hidden className="size-4" />
      <span aria-live="polite">{hasCopied ? home.install.copied : home.install.copy}</span>
    </button>
  );
}
