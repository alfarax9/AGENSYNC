import * as m from "motion/react-m";
import { messageAppear } from "@/components/motion/variants";
import { divisionColor, findDivisionByName } from "@/lib/divisions";

type TelegramMessageProps = {
  message: { author: string; topic: string; text: string; actions?: string[] };
  isVisible: boolean;
};

export function TelegramMessage({ message, isVisible }: TelegramMessageProps) {
  const division = findDivisionByName(message.topic);

  return (
    <m.li
      variants={messageAppear}
      initial={false}
      animate={isVisible ? "visible" : "hidden"}
      style={division ? divisionColor(division.id) : undefined}
      className="max-w-md rounded-card border border-border bg-bg-alt px-4 py-3 text-sm"
    >
      <p className="flex flex-wrap items-baseline gap-x-2">
        <span className="font-semibold text-(--division-color,var(--color-text))">
          {message.author}
        </span>
        <span className="font-mono text-xs text-text-tertiary">#{message.topic}</span>
      </p>
      <p className="mt-1">{message.text}</p>
      {message.actions && (
        <p className="mt-3 grid grid-cols-2 gap-2">
          {message.actions.map((action) => (
            <span
              key={action}
              className="rounded-card border border-border py-1.5 text-center text-xs text-text"
            >
              {action}
            </span>
          ))}
        </p>
      )}
    </m.li>
  );
}
