import { Container } from "@/components/ui/Container";
import home from "@/content/home.json";

const { stats } = home;
// "*66*" marks a number; splitting on the asterisks leaves numbers at odd indexes.
const parts = stats.statement.split("*");

// The facts as one plain sentence instead of a row of big numbers: it reads
// like someone telling you about the project, and the numbers still stand
// out through the mono face, not through size.
export function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="bg-bg py-20 md:py-28">
      <Container>
        <h2 id="stats-heading" className="sr-only">
          {stats.heading}
        </h2>
        <p className="max-w-4xl text-h3 text-pretty text-text-secondary">
          {parts.map((part, index) =>
            index % 2 === 1 ? (
              <span key={part} className="font-mono text-text tabular-nums">
                {part}
              </span>
            ) : (
              part
            ),
          )}
        </p>
      </Container>
    </section>
  );
}
