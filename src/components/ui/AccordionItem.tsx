import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type AccordionItemProps = {
  id: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
};

export function AccordionItem({ id, title, isOpen, onToggle, children }: AccordionItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <div>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-medium text-text"
        >
          {title}
          <ChevronDown
            aria-hidden
            className={`size-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      {/* Height is the one non-transform property animated on purpose: the
          answer has to push the questions below it down. */}
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!isOpen}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="max-w-2xl pb-6">{children}</p>
      </motion.div>
    </div>
  );
}
