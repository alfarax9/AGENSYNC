import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import home from "@/content/home.json";
import { TelegramMockup } from "./TelegramMockup";

export function Telegram() {
  const { telegram } = home;

  return (
    <Section id={telegram.id} labelledBy="telegram-heading">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeader
            headingId="telegram-heading"
            heading={telegram.heading}
            intro={telegram.intro}
          />
        </div>
        <TelegramMockup />
      </div>
    </Section>
  );
}
