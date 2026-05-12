import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { FeaturesSection } from "@/components/landing/features-section";
import { TrustSection } from "@/components/landing/trust-section";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
}