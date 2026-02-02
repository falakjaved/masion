import { CTASection } from "@/components/about/cta-section";
import { HeroSection } from "@/components/about/hero-section";
import { MissionVisionSection } from "@/components/about/mission-vision-section";
import { StatsSection } from "@/components/about/stats-section";
import { WhoWeAreSection } from "@/components/about/who-we-are-section";
import { WhyChooseUsSection } from "@/components/about/why-choose-us-section";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Us | Premium E-Commerce",
  description:
    "Learn about our mission, vision, and commitment to delivering exceptional products and customer experiences.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WhoWeAreSection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}
