import {
  CirclePause,
  ClipboardCheck,
  HardDrive,
  KeyRound,
  type LucideIcon,
  Network,
  Route,
  WalletCards,
  Waypoints,
} from "lucide-react";
import home from "@/content/home.json";
import { divisionColor, divisions } from "@/lib/divisions";
import { PlatformChip } from "./PlatformChip";

const icons: Record<string, LucideIcon> = {
  omniroute: Waypoints,
  openrouter: Network,
  provider: KeyRound,
  ollama: HardDrive,
  plan: ClipboardCheck,
  handoffs: Route,
  budget: WalletCards,
  pause: CirclePause,
};

type Chip = string | { id: string; label: string };

// Division chips carry the division's dot and end with a count of the rest;
// the other panels' chips carry an icon.
export function PlatformChips({ chips }: { chips: Chip[] }) {
  const divisionChips = chips.filter((chip): chip is string => typeof chip === "string");
  const restCount = divisions.length - divisionChips.length;

  return (
    <ul className="mt-8 flex flex-wrap gap-2">
      {chips.map((chip) => {
        if (typeof chip !== "string")
          return (
            <PlatformChip key={chip.id} icon={icons[chip.id]}>
              {chip.label}
            </PlatformChip>
          );
        const division = divisions.find((candidate) => candidate.id === chip);
        return (
          <PlatformChip key={chip} dotStyle={divisionColor(chip)}>
            {division?.name}
          </PlatformChip>
        );
      })}
      {divisionChips.length > 0 && (
        <PlatformChip>
          +{restCount} {home.platform.panels[0].moreChips}
        </PlatformChip>
      )}
    </ul>
  );
}
