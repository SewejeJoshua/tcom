import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui-kit/SectionHeader";
import { counselors, listings, classes, notifications } from "@/lib/mock-data";
import {
  HeartHandshake, GraduationCap, Store, TrendingUp, MapPin,
  Sparkles, ArrowUpRight, Activity, Users,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/app/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="px-4 lg:px-6 py-6 space-y-8 animate-fade-in">
      {/* Hero greeting */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-hero p-6 md:p-10 border border-border">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-aurora opacity-30 blur-3xl animate-float" />
        <div className="relative max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-wider text-primary flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" /> Good evening, Ada
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-display font-semibold leading-tight">
            Your community is <span className="text-gradient">brighter</span> with you here.
          </h1>
          <p className="mt-3 text-muted-foreground max-w-lg">
            3 nearby providers, 2 live classes, and a counselor are ready when you are.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link to="/app/counsel" className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-4 py-2.5 text-sm font-medium shadow-soft hover:shadow-elevated transition">
              <HeartHandshake className="h-4 w-4" /> Talk to someone
            </Link>
            <Link to="/app/classes" className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted transition">
              <GraduationCap className="h-4 w-4" /> Join class
            </Link>
            <Link to="/app/marketplace" className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted transition">
              <Store className="h-4 w-4" /> Explore market
            </Link>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Wellbeing score", value: "78", trend: "+6 this week", icon: Activity, tone: "bg-gradient-emerald" },
          { label: "Active classes", value: "4", trend: "2 live now", icon: GraduationCap, tone: "bg-gradient-primary" },
          { label: "Nearby providers", value: "126", trend: "within 5 km", icon: MapPin, tone: "bg-gradient-aurora" },
          { label: "Community", value: "12.4k", trend: "+318 today", icon: Users, tone: "bg-gradient-soft" },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="rounded-2xl bg-card border border-border p-4 shadow-soft hover:shadow-elevated transition">
              <div className={`h-9 w-9 rounded-xl ${s.tone} grid place-items-center text-white mb-3`}>
                <Icon className="h-4 w-4" />
              </div>
              <p className="text-2xl font-display font-semibold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className="text-[11px] mt-1 text-success font-medium">{s.trend}</p>
            </div>
          );
        })}
      </section>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Suggested counselors */}
        <section className="lg:col-span-2">
          <SectionHeader eyebrow="For you" title="Suggested counselors" description="Anonymous, verified, ready to listen." action={
            <Link to="/app/counsel" className="text-sm text-primary hover:underline">View all</Link>
          } />
          <div className="grid sm:grid-cols-2 gap-3">
            {counselors.slice(0, 4).map((c) => (
              <div key={c.id} className="group rounded-2xl bg-card border border-border p-4 hover:shadow-elevated transition">
                <div className="flex items-center gap-3">
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${c.color} grid place-items-center text-white font-semibold relative`}>
                    {c.alias.split(" ").map(s => s[0]).join("")}
                    <span className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card ${c.status === "online" ? "bg-success" : "bg-warning"}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium truncate">{c.alias}</p>
                    <p className="text-xs text-muted-foreground truncate">{c.specialty}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>★ {c.rating} · {c.sessions} sessions</span>
                  <button className="text-primary font-medium hover:underline">Connect</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notifications */}
        <section>
          <SectionHeader title="Activity" />
          <div className="rounded-2xl bg-card border border-border divide-y divide-border overflow-hidden">
            {notifications.map((n) => (
              <div key={n.id} className="p-4 flex items-start gap-3 hover:bg-muted/40 transition">
                <div className={`h-8 w-8 rounded-lg grid place-items-center text-white shrink-0 ${
                  n.type === "counsel" ? "bg-gradient-aurora" :
                  n.type === "class" ? "bg-gradient-primary" :
                  n.type === "market" ? "bg-gradient-emerald" : "bg-gradient-soft"
                }`}>
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm">{n.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{n.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Nearby */}
      <section>
        <SectionHeader eyebrow="Nearby" title="Services around you" description="Within 5 km of your location" action={
          <Link to="/app/marketplace" className="text-sm text-primary hover:underline">Open map</Link>
        } />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {listings.slice(0, 6).map((l) => (
            <div key={l.id} className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-elevated transition">
              <div className="h-28 bg-gradient-soft relative">
                <div className="absolute inset-0 bg-gradient-aurora opacity-20" />
                <div className="absolute top-3 left-3 text-xs bg-card/80 backdrop-blur rounded-full px-2 py-0.5 border border-border">
                  {l.category}
                </div>
                {l.verified && (
                  <div className="absolute top-3 right-3 text-[10px] bg-success text-success-foreground rounded-full px-2 py-0.5 font-medium">
                    Verified
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="font-medium leading-snug line-clamp-2">{l.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{l.vendor}</p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-foreground">{l.price}</span>
                  <span className="text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {l.distance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live classes */}
      <section>
        <SectionHeader eyebrow="Learning" title="Your classes today" action={
          <Link to="/app/classes" className="text-sm text-primary hover:underline">All classes</Link>
        } />
        <div className="grid sm:grid-cols-2 gap-3">
          {classes.slice(0, 2).map((c) => (
            <div key={c.id} className={`relative overflow-hidden rounded-2xl ${c.color} text-white p-5 shadow-soft`}>
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider opacity-80">{c.status}</span>
                  {c.status === "live" && <span className="h-2 w-2 rounded-full bg-white animate-pulse" />}
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-tight">{c.title}</h3>
                <p className="text-xs opacity-80 mt-1">{c.teacher} · {c.students} students</p>
                <p className="text-xs opacity-80 mt-2">{c.schedule}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium rounded-lg bg-white/20 hover:bg-white/30 transition px-3 py-1.5">
                  {c.status === "live" ? "Join now" : "Set reminder"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
