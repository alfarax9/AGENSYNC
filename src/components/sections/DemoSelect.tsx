"use client";

import { Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type DemoSelectProps = {
  id: string;
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  side?: "bottom" | "top" | "left" | "right" | "inline-start" | "inline-end";
};

type ItemListProps = {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
};

function OptionItems({ options, value, onChange }: ItemListProps) {
  return (
    <DropdownMenuGroup>
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`flex items-center justify-between gap-2 ${
              isSelected ? "bg-accent/15 font-medium text-accent-glow" : ""
            }`}
          >
            <span className="truncate">{option.label}</span>
            {isSelected ? <Check className="size-3.5 shrink-0 text-accent-glow" /> : null}
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuGroup>
  );
}

export function DemoSelect({
  id,
  label,
  value,
  options,
  onChange,
  side = "bottom",
}: DemoSelectProps) {
  const selected = options.find((option) => option.value === value) ?? options[0];

  return (
    <div className="flex flex-col gap-2">
      <span id={`${id}-label`} className="font-mono text-xs text-text-tertiary uppercase">
        {label}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger
          id={id}
          aria-labelledby={`${id}-label`}
          className="group flex w-full items-center justify-between rounded-card border border-border bg-bg py-2.5 pr-3 pl-3.5 text-left text-sm text-text transition-colors hover:border-accent-glow focus-visible:ring-2 focus-visible:ring-accent-glow focus-visible:outline-none"
        >
          <span className="truncate">{selected?.label}</span>
          <ChevronDown
            aria-hidden
            className="size-4 shrink-0 text-text-tertiary transition-transform duration-200 group-data-[popup-open]:rotate-180"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side={side}
          align="start"
          sideOffset={6}
          className="max-h-64 w-(--anchor-width) overflow-y-auto"
        >
          <OptionItems options={options} value={value} onChange={onChange} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
