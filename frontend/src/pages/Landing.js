import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Features } from "@/components/landing/Features";
import { StatsBar } from "@/components/landing/StatsBar";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { MobileCTA } from "@/components/landing/MobileCTA";

export default function Landing() {
  return (
    <main className="relative min-h-screen overflow-hidden" data-testid="landing-page">
      <div className="aura-layer aura-layer-1" aria-hidden="true" />
      <div className="aura-layer aura-layer-2" aria-hidden="true" />
      <div className="relative z-[1]">
        <Navbar />
        <Hero />
        <Marquee />
        <Features />
        <StatsBar />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
        <MobileCTA />
      </div>
    </main>
  );
}
