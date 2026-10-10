import { Brains } from "@/components/sections/Brains";
import { Dashboard } from "@/components/sections/Dashboard";
import { DivisionMarquee } from "@/components/sections/DivisionMarquee";
import { Divisions } from "@/components/sections/Divisions";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Install } from "@/components/sections/Install";
import { Pillars } from "@/components/sections/Pillars";
import { Security } from "@/components/sections/Security";
import { Stats } from "@/components/sections/Stats";
import { Telegram } from "@/components/sections/Telegram";
import { SoftwareJsonLd } from "@/components/seo/SoftwareJsonLd";

export default function Home() {
  return (
    <main id="main">
      <SoftwareJsonLd />
      <Hero />
      <DivisionMarquee />
      <Stats />
      <Pillars />
      <HowItWorks />
      <Divisions />
      <Brains />
      <Dashboard />
      <Telegram />
      <Install />
      <Security />
      <Faq />
      <FinalCta />
    </main>
  );
}
