import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui-kit/SectionHeader";
import { BadgeCheck, Settings, Wallet, Bell, Lock, Heart, Activity } from "lucide-react";

export const Route = createFileRoute("/app/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <div className="px-4 lg:px-6 py-6 space-y-6 animate-fade-in">
      <div className="rounded-3xl bg-gradient-hero border border-border p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 h-56 w-56 rounded-full bg-gradient-aurora opacity-20 blur-3xl" />
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="h-24 w-24 rounded-3xl bg-gradient-aurora grid place-items-center text-white text-3xl font-display font-semibold shadow-glow">
            AO
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl md:text-3xl font-display font-semibold">Ada Okonkwo</h1>
              <span className="inline-flex items-center gap-1 text-xs bg-success/15 text-success rounded-full px-2 py-0.5 font-medium">
                <BadgeCheck className="h-3 w-3" /> Verified
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Student · Lagos, Nigeria · Joined Sept 2024</p>
            <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span><strong className="text-foreground">42</strong> sessions</span>
              <span><strong className="text-foreground">14</strong> classes</span>
              <span><strong className="text-foreground">7</strong> orders</span>
              <span><strong className="text-foreground">128</strong> connections</span>
            </div>
          </div>
          <button className="rounded-xl bg-gradient-primary text-primary-foreground px-4 py-2.5 text-sm font-medium shadow-soft">
            Edit profile
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-gradient-emerald text-white p-5">
          <Wallet className="h-5 w-5" />
          <p className="mt-3 text-xs uppercase tracking-wider opacity-80">Wallet balance</p>
          <p className="text-3xl font-display font-semibold mt-1">₦42,500</p>
          <button className="mt-3 text-xs rounded-lg bg-white/20 hover:bg-white/30 px-3 py-1.5">Top up</button>
        </div>
        <div className="rounded-2xl bg-card border border-border p-5">
          <Activity className="h-5 w-5 text-primary" />
          <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Wellbeing streak</p>
          <p className="text-3xl font-display font-semibold mt-1">12 <span className="text-base text-muted-foreground">days</span></p>
          <p className="text-xs text-success mt-1">+2 this week 🔥</p>
        </div>
        <div className="rounded-2xl bg-card border border-border p-5">
          <Heart className="h-5 w-5 text-primary" />
          <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Saved items</p>
          <p className="text-3xl font-display font-semibold mt-1">23</p>
          <p className="text-xs text-muted-foreground mt-1">Across market & classes</p>
        </div>
      </div>

      <SectionHeader title="Settings" />
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { icon: Lock, title: "Privacy & security", desc: "2FA, sessions, blocked users" },
          { icon: Bell, title: "Notifications", desc: "Push, email & SMS preferences" },
          { icon: Wallet, title: "Payments & wallet", desc: "Cards, payouts, history" },
          { icon: Settings, title: "Account", desc: "Profile, language, theme" },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <button key={i} className="text-left rounded-2xl bg-card border border-border p-4 flex items-start gap-3 hover:shadow-soft transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-soft grid place-items-center text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
