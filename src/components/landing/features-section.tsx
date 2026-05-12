import {
  GraduationCap,
  HeartHandshake,
  Store,
} from "lucide-react";

import { FeatureCard } from "./feature-card";

const features = [
  {
    icon: HeartHandshake,
    color: "bg-gradient-aurora",
    title: "Anonymous Counseling",
    desc: "Safe, encrypted, judgement-free conversations with verified counselors.",
    id: "counsel",
  },
  {
    icon: Store,
    color: "bg-gradient-emerald",
    title: "Local Marketplace",
    desc: "GPS-powered discovery of trusted vendors and skilled providers.",
    id: "market",
  },
  {
    icon: GraduationCap,
    color: "bg-gradient-primary",
    title: "Virtual Classroom",
    desc: "Live classes, screen share, assignments and collaboration tools.",
    id: "classes",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            Three pillars
          </p>

          <h2 className="mt-2 text-3xl md:text-5xl font-display font-semibold">
            One app. Three superpowers.
          </h2>

          <p className="mt-4 text-muted-foreground">
            Designed for the African continent and inspired by
            world-class platforms.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}