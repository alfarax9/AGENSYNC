import { RequirementCode } from "@/components/ui/RequirementCode";
import pages from "@/content/pages.json";
import { requirements, type RequirementCode as Code } from "@/lib/divisions";

const codes = Object.keys(requirements) as Code[];

export function RequirementLegend() {
  return (
    <section
      aria-labelledby="legend-heading"
      className="mt-12 rounded-panel border border-border bg-bg-alt p-6 md:p-8"
    >
      <h2 id="legend-heading" className="text-sm tracking-wider text-text-secondary uppercase">
        {pages.divisions.legendHeading}
      </h2>
      <dl className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {codes.map((code) => (
          <div key={code} className="flex items-start gap-3">
            <dt className="shrink-0">
              <RequirementCode code={code} />
            </dt>
            <dd className="text-sm">{requirements[code].description}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-sm text-text-tertiary">{pages.divisions.rule}</p>
    </section>
  );
}
