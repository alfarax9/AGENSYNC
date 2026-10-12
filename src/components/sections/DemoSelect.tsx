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
              isSelected ? "bg-overlay font-medium text-text" : ""
            }`}
          >
            <span className="truncate">{option.label}</span>
            {isSelected ? <Check className="size-3.5 shrink-0 text-amber" /> : null}
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
      <span id={`${id}-label`} className="text-xs tracking-wider text-text-secondary uppercase">
        {label}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger
          id={id}
          aria-labelledby={`${id}-label`}
          className="group flex h-11 w-full items-center justify-between rounded-full border border-border-strong bg-bg pr-3 pl-4 text-left text-sm text-text transition-[border-color,box-shadow] hover:border-text-tertiary focus-visible:ring-2 focus-visible:ring-accent-glow focus-visible:outline-none data-[popup-open]:shadow-duo data-[popup-open]:border-duo"
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
          className="max-h-64 w-(--anchor-width) origin-(--transform-origin) overflow-y-auto rounded-2xl! border-border-strong! bg-surface/95! duration-200! ease-out data-ending-style:scale-95! data-ending-style:opacity-0! data-starting-style:-translate-y-1 data-starting-style:scale-95! data-starting-style:opacity-0! motion-reduce:transition-none!"
        >
          <OptionItems options={options} value={value} onChange={onChange} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
