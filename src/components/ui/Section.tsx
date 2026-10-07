import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  labelledBy: string;
  id?: string;
  tone?: "base" | "alt";
  children: ReactNode;
};

const toneClasses = { base: "bg-bg", alt: "bg-bg-alt" };

export function Section({ labelledBy, id, tone = "base", children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-12 md:py-20 ${toneClasses[tone]}`}>
      <Container>{children}</Container>
    </section>
  );
}
