import { requirements, type RequirementCode as Code } from "@/lib/divisions";
import { Badge } from "./Badge";

export function RequirementCode({ code }: { code: Code }) {
  const requirement = requirements[code];

  return (
    <Badge>
      <abbr title={requirement.label} className="no-underline">
        {requirement.symbol}
      </abbr>
      <span className="sr-only">{requirement.label}</span>
    </Badge>
  );
}
