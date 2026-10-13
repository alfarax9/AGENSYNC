import Image from "next/image";
import { mascotSrc } from "@/lib/divisions";

type MascotProps = {
  divisionId: string;
  /** Multiples of the 32px pixel grid keep every pixel square. */
  size: 32 | 64 | 96 | 128;
  className?: string;
};

// A division's mascot, straight on whatever is behind it. Always decorative:
// the division name sits next to it, so the image adds no text of its own.
export function Mascot({ divisionId, size, className = "" }: MascotProps) {
  return (
    <Image
      src={mascotSrc(divisionId)}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
    />
  );
}
