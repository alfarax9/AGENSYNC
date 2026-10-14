import home from "@/content/home.json";
import { ApproveLabel } from "./ApproveLabel";
import { DeliverNotice } from "./DeliverNotice";
import { PagePreview } from "./PagePreview";
import { WindowButton } from "./WindowButton";

const { deliver } = home.howItWorks.screen;
const clickAt = 3.6;

// Step 6: the result waiting on you, with a preview, the diff, what it cost,
// and the two buttons, while the same summary arrives on Telegram. Your cursor
// approves it and it ships; the real Approve button ships it too.
export function ScreenDeliver({ onAction }: { onAction: () => void }) {
  return (
    <div className="relative grid h-full gap-5 sm:grid-cols-[1fr_1.1fr]">
      <PagePreview />
      <div className="flex flex-col gap-3">
        <p className="text-sm text-text">{deliver.heading}</p>
        <p className="font-mono text-xs text-text-secondary">{deliver.diff}</p>
        <ul className="hidden font-mono text-[0.6875rem] text-text-tertiary sm:block">
          {deliver.files.map((file) => (
            <li key={file}>{file}</li>
          ))}
        </ul>
        <p className="text-xs text-text-tertiary">
          {deliver.spentLabel} <span className="ml-1 font-mono text-text">{deliver.spent}</span>
        </p>
        <div className="mt-auto flex gap-2">
          <WindowButton>{deliver.changes}</WindowButton>
          <WindowButton
            isPrimary
            isCalling
            clickAt={clickAt}
            label={deliver.approve}
            onClick={onAction}
          >
            <ApproveLabel approve={deliver.approve} shipped={deliver.shipped} at={clickAt} />
          </WindowButton>
        </div>
      </div>
      <DeliverNotice />
    </div>
  );
}
