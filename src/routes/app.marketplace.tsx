import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui-kit/SectionHeader";
import { listings, marketCategories } from "@/lib/mock-data";
import { MapPin, Star, Filter, SlidersHorizontal, Heart, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/app/marketplace")({
  component: MarketPage,
});

function MarketPage() {
  return (
    <div className="px-4 lg:px-6 py-6 space-y-6 animate-fade-in">
      <div className="rounded-3xl bg-gradient-soft border border-border p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-gradient-aurora opacity-30 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-wider text-primary font-medium">Marketplace</p>
          <h1 className="mt-2 text-2xl md:text-3xl font-display font-semibold">Discover trusted vendors near you.</h1>
          <p className="mt-1 text-sm text-muted-foreground">Showing 126 results within <strong>5 km</strong> of Yaba, Lagos.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-3 py-1.5 text-xs hover:bg-muted">
              <Filter className="h-3.5 w-3.5" /> Category
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-3 py-1.5 text-xs hover:bg-muted">
              <MapPin className="h-3.5 w-3.5" /> 5 km
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-3 py-1.5 text-xs hover:bg-muted">
              <Star className="h-3.5 w-3.5" /> 4.5+ rating
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-3 py-1.5 text-xs hover:bg-muted">
              <SlidersHorizontal className="h-3.5 w-3.5" /> More
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section>
        <SectionHeader title="Browse by category" />
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {marketCategories.map((c) => (
            <button key={c.name} className="rounded-2xl bg-card border border-border p-3 hover:shadow-soft hover:-translate-y-0.5 transition text-center">
              <div className="text-2xl">{c.icon}</div>
              <p className="text-xs mt-1 font-medium">{c.name}</p>
              <p className="text-[10px] text-muted-foreground">{c.count}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Map preview */}
      <section className="rounded-3xl border border-border overflow-hidden relative h-64 bg-gradient-soft">
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.62 0.20 290 / 0.4), transparent 30%), radial-gradient(circle at 70% 60%, oklch(0.68 0.16 160 / 0.4), transparent 30%), radial-gradient(circle at 45% 80%, oklch(0.55 0.18 270 / 0.4), transparent 25%)"
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(oklch(0.30 0.10 270 / 0.08) 1px, transparent 1px), linear-gradient(90deg, oklch(0.30 0.10 270 / 0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        {[
          { x: "20%", y: "30%", c: "bg-gradient-primary" },
          { x: "70%", y: "60%", c: "bg-gradient-emerald" },
          { x: "45%", y: "80%", c: "bg-gradient-aurora" },
          { x: "80%", y: "25%", c: "bg-gradient-primary" },
          { x: "30%", y: "70%", c: "bg-gradient-emerald" },
        ].map((p, i) => (
          <div key={i} className="absolute" style={{ left: p.x, top: p.y }}>
            <div className={`h-8 w-8 rounded-full ${p.c} grid place-items-center text-white shadow-glow animate-pulse-glow`}>
              <MapPin className="h-4 w-4" />
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 left-4 glass rounded-xl px-4 py-2 text-sm">
          <p className="font-medium">Yaba, Lagos</p>
          <p className="text-xs text-muted-foreground">126 nearby providers</p>
        </div>
      </section>

      {/* Listings */}
      <section>
        <SectionHeader eyebrow="Featured nearby" title="Top-rated providers" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.map((l) => (
            <article key={l.id} className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-elevated transition">
              <div className="h-40 bg-gradient-aurora relative">
                <div className="absolute top-3 left-3 text-[10px] bg-card/90 backdrop-blur rounded-full px-2 py-1 border border-border font-medium">
                  {l.category}
                </div>
                <button className="absolute top-3 right-3 h-8 w-8 grid place-items-center rounded-full bg-card/90 backdrop-blur border border-border hover:scale-110 transition">
                  <Heart className="h-3.5 w-3.5" />
                </button>
                {l.verified && (
                  <div className="absolute bottom-3 left-3 text-[10px] bg-success text-success-foreground rounded-full px-2 py-1 font-medium">
                    ✓ Verified
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="font-medium leading-snug">{l.title}</p>
                <p className="text-xs text-muted-foreground mt-1">by {l.vendor}</p>
                <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-warning text-warning" /> {l.rating}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {l.distance}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-semibold text-sm">{l.price}</span>
                  <div className="flex gap-1.5">
                    <button className="h-8 w-8 grid place-items-center rounded-lg border border-border hover:bg-muted">
                      <MessageCircle className="h-3.5 w-3.5" />
                    </button>
                    <button className="rounded-lg bg-gradient-primary text-primary-foreground px-3 py-1.5 text-xs font-medium">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
