import { StatementReveal } from "@/components/reveal/StatementReveal";
import { Container } from "@/components/ui/Container";
import home from "@/content/home.json";

// The facts as one plain sentence instead of a row of big numbers. The
// numbers stand out through the mono face, and the sentence fills in as it is
// scrolled, the way React Bits' ScrollReveal does, rebuilt on motion.
export function Stats() {
  const { stats } = home;

  return (
    <section aria-labelledby="stats-heading" className="bg-bg py-24 md:py-40">
      <Container>
        <h2 id="stats-heading" className="sr-only">
          {stats.heading}
        </h2>
        <StatementReveal statement={stats.statement} />
      </Container>
    </section>
  );
}
