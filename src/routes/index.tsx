import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { FeaturesSection } from "@/components/landing/features-section";
import { TrustSection } from "@/components/landing/trust-section";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tedcomm — Learn, Heal & Earn together" },
      {
        name: "description",
        content:
          "Anonymous counseling, local marketplace, and virtual classrooms — one African-tech ecosystem.",
      },
      {
        property: "og:title",
        content: "Tedcomm — Learn, Heal & Earn together",
      },
      {
        property: "og:description",
        content:
          "Anonymous counseling, local marketplace, and virtual classrooms — one African-tech ecosystem.",
      },
    ],
  }),
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