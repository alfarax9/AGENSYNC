"use client";

import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

type AccordionProps = {
  items: { id: string; question: string; answer: string }[];
};

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.question}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
}
