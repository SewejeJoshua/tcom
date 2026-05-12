import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroPreview } from "./hero-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-gradient-aurora opacity-30 blur-3xl animate-float" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-emerald opacity-20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary mb-6 animate-fade-in">
          <Sparkles className="h-3.5 w-3.5" />
          A new kind of platform · Built for Africa
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight max-w-4xl mx-auto leading-[1.05] animate-fade-up">
          Learn. <span className="text-gradient">Heal.</span> Earn.
          All in one place.
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up">
          Sankofa blends anonymous counseling, a hyper-local
          marketplace, and virtual classrooms — into one beautiful,
          safe, community-first ecosystem.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-up">
          <Link
            to="/auth"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-elevated hover:scale-[1.02] transition"
          >
            Create free account
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            to="/app"
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-medium hover:bg-card transition"
          >
            Explore demo
          </Link>
        </div>

        <HeroPreview />
      </div>
    </section>
  );
}