import { divisionColor, findDivisionByName } from "@/lib/divisions";

export function TelegramTopics({ topics }: { topics: string[] }) {
  return (
    <ul className="hidden w-36 shrink-0 flex-col gap-1 border-r border-border p-3 sm:flex">
      {topics.map((topic) => {
        const division = findDivisionByName(topic);
        return (
          <li
            key={topic}
            style={division ? divisionColor(division.id) : undefined}
            className="flex items-center gap-2 px-2 py-1.5 font-mono text-xs text-text-tertiary"
          >
            <span className="size-1.5 rounded-full bg-(--division-color,var(--color-text-tertiary))" />
            {topic}
          </li>
        );
      })}
    </ul>
  );
}
