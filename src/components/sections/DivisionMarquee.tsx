import { divisions } from "@/lib/divisions";
import { MarqueeFrame } from "./MarqueeFrame";
import { MarqueeRow } from "./MarqueeRow";

export function DivisionMarquee() {
  return (
    <MarqueeFrame>
      <MarqueeRow divisions={divisions} />
      <MarqueeRow divisions={[...divisions].reverse()} isReversed />
    </MarqueeFrame>
  );
}
