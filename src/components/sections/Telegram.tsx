import { Send } from "lucide-react";
import type { CSSProperties } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";
import { TelegramMockup } from "./TelegramMockup";

const glowStyle = { "--nebula-x": "70%", "--nebula-y": "40%" } as CSSProperties;

export function Telegram() {
  const { telegram } = home;

  return (
    <Section id={telegram.id} labelledBy="telegram-heading">
      <div className="grid items-start gap-12 lg:grid-cols-5">
        <SectionHeader
          headingId="telegram-heading"
          eyebrow={telegram.eyebrow}
          icon={Send}
          heading={telegram.heading}
          intro={telegram.intro}
          layout="stacked"
          className="lg:col-span-2"
        />
        <div className="relative isolate lg:col-span-3">
          <div
            aria-hidden
            style={glowStyle}
            className="absolute -inset-10 -z-10 bg-nebula opacity-40 blur-3xl"
          />
          <TelegramMockup />
        </div>
      </div>
    </Section>
  );
}
