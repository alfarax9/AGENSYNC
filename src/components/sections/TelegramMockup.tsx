import { Card } from "@/components/ui/Card";
import home from "@/content/home.json";
import { divisions } from "@/lib/divisions";
import { MessageFeed } from "./MessageFeed";
import { TelegramTopics } from "./TelegramTopics";

const { telegram } = home;
// One topic per division, as the adapter sets up the group, plus General.
const topics = [telegram.generalTopic, ...divisions.map((division) => division.name)];

export function TelegramMockup() {
  return (
    <Card as="figure" tone="alt" className="overflow-hidden lg:col-span-3">
      <figcaption className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="font-semibold text-text">{telegram.groupName}</span>
        <span className="font-mono text-xs text-text-tertiary">
          {topics.length} {telegram.topicsLabel}
        </span>
      </figcaption>
      <div className="flex">
        <TelegramTopics topics={topics} />
        <MessageFeed />
      </div>
    </Card>
  );
}
