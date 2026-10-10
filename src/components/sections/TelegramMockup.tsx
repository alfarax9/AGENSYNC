import { Card } from "@/components/ui/Card";
import home from "@/content/home.json";
import { MessageFeed } from "./MessageFeed";
import { TelegramTopics } from "./TelegramTopics";

export function TelegramMockup() {
  const { telegram } = home;

  return (
    <Card as="figure" tone="alt" className="overflow-hidden lg:col-span-3">
      <figcaption className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="font-semibold text-text">{telegram.groupName}</span>
        <span className="font-mono text-xs text-text-tertiary">
          {telegram.topics.length} {telegram.topicsLabel}
        </span>
      </figcaption>
      <div className="flex">
        <TelegramTopics topics={telegram.topics} />
        <MessageFeed />
      </div>
    </Card>
  );
}
