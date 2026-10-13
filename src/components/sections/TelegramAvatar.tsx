import { Mascot } from "@/components/ui/Mascot";
import site from "@/content/site.json";

// The bot posts in each division's topic as that division's mascot; in General
// it falls back to the AMORA monogram on the duo gradient, as in the favicon.
export function TelegramAvatar({ divisionId }: { divisionId?: string }) {
  if (divisionId) return <Mascot divisionId={divisionId} size={32} />;

  return (
    <span
      aria-hidden
      className="grid size-[34px] shrink-0 place-items-center rounded-full bg-duo text-xs font-bold text-bg"
    >
      {site.name.charAt(0)}
    </span>
  );
}
