import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui-kit/SectionHeader";
import { counselors, moods } from "@/lib/mock-data";
import {
  Send, Phone, Video, Shield, AlertCircle, Smile, Mic, ImageIcon, Paperclip,
  HeartHandshake, Users, Calendar,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/counsel")({
  component: CounselPage,
});

function CounselPage() {
  const [mood, setMood] = useState("okay");
  return (
    <div className="px-4 lg:px-6 py-6 space-y-6 animate-fade-in">
      <div className="rounded-3xl bg-gradient-aurora text-white p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -bottom-12 -right-12 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider opacity-80 flex items-center gap-2">
              <Shield className="h-3.5 w-3.5" /> Anonymous · End-to-end encrypted
            </p>
            <h1 className="mt-2 text-2xl md:text-3xl font-display font-semibold">A safe space, just for you.</h1>
            <p className="mt-1 text-sm opacity-80 max-w-md">Your identity is protected. Talk freely with verified counselors.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-destructive px-4 py-2.5 text-sm font-medium shadow-soft animate-pulse-glow">
            <AlertCircle className="h-4 w-4" /> Emergency help
          </button>
        </div>
      </div>

      {/* Mood selector */}
      <section className="rounded-2xl bg-card border border-border p-5">
        <p className="text-sm font-medium mb-3">How are you feeling right now?</p>
        <div className="flex flex-wrap gap-2">
          {moods.map((m) => (
            <button
              key={m.value}
              onClick={() => setMood(m.value)}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm border transition ${
                mood === m.value ? "bg-gradient-primary text-primary-foreground border-transparent shadow-soft" : "bg-muted/40 border-border hover:bg-muted"
              }`}
            >
              <span className="text-lg">{m.emoji}</span> {m.label}
            </button>
          ))}
        </div>
      </section>

      {/* Counselors */}
      <section>
        <SectionHeader eyebrow="Matched for you" title="Available counselors" description="AI-matched to your mood and needs" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {counselors.map((c) => (
            <div key={c.id} className="rounded-2xl bg-card border border-border p-4 hover:shadow-elevated transition">
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${c.color} grid place-items-center text-white font-semibold text-lg relative mb-3`}>
                {c.alias.split(" ").map(s => s[0]).join("")}
                <span className={`absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-card ${c.status === "online" ? "bg-success" : "bg-warning"}`} />
              </div>
              <p className="font-medium">{c.alias}</p>
              <p className="text-xs text-muted-foreground">{c.specialty}</p>
              <p className="text-xs text-muted-foreground mt-2">★ {c.rating} · {c.sessions} sessions</p>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 rounded-lg bg-gradient-primary text-primary-foreground py-1.5 text-xs font-medium">Chat</button>
                <button className="h-8 w-8 grid place-items-center rounded-lg border border-border hover:bg-muted"><Phone className="h-3.5 w-3.5" /></button>
                <button className="h-8 w-8 grid place-items-center rounded-lg border border-border hover:bg-muted"><Calendar className="h-3.5 w-3.5" /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chat preview + Wellness */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-2xl bg-card border border-border overflow-hidden flex flex-col h-[520px]">
          <div className="flex items-center justify-between border-b border-border p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-400 to-indigo-500 grid place-items-center text-white text-sm font-semibold">SO</div>
              <div>
                <p className="font-medium text-sm">Sage Owl</p>
                <p className="text-xs text-success flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-success" /> Online · Anonymous</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="h-9 w-9 grid place-items-center rounded-lg hover:bg-muted"><Phone className="h-4 w-4" /></button>
              <button className="h-9 w-9 grid place-items-center rounded-lg hover:bg-muted"><Video className="h-4 w-4" /></button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
            <Bubble who="them">Hey, I'm Sage. Whatever's on your mind, this is a safe space 🌱</Bubble>
            <Bubble who="me">Thanks. I've been overwhelmed with school and just… everything.</Bubble>
            <Bubble who="them">That sounds heavy. What feels biggest right now?</Bubble>
            <Bubble who="me">Probably the pressure to perform.</Bubble>
            <Bubble who="them">Got it. Let's slow down for a sec — try a 4-7-8 breath with me?</Bubble>
            <div className="flex justify-center">
              <span className="text-[11px] text-muted-foreground bg-muted/60 rounded-full px-2 py-1">Sage is typing…</span>
            </div>
          </div>

          <div className="border-t border-border p-3 flex items-center gap-2">
            <button className="h-10 w-10 grid place-items-center rounded-xl hover:bg-muted"><Smile className="h-4 w-4" /></button>
            <button className="h-10 w-10 grid place-items-center rounded-xl hover:bg-muted"><Paperclip className="h-4 w-4" /></button>
            <button className="h-10 w-10 grid place-items-center rounded-xl hover:bg-muted"><ImageIcon className="h-4 w-4" /></button>
            <input className="flex-1 h-10 px-3 rounded-xl bg-muted/60 outline-none text-sm" placeholder="Type a message…" />
            <button className="h-10 w-10 grid place-items-center rounded-xl hover:bg-muted"><Mic className="h-4 w-4" /></button>
            <button className="h-10 px-4 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-medium flex items-center gap-1"><Send className="h-4 w-4" /></button>
          </div>
        </div>

        <aside className="space-y-3">
          <div className="rounded-2xl bg-gradient-emerald text-white p-5">
            <p className="text-xs uppercase tracking-wider opacity-80">Wellbeing</p>
            <p className="mt-2 text-3xl font-display font-semibold">78<span className="text-base opacity-80">/100</span></p>
            <div className="mt-3 h-2 rounded-full bg-white/20 overflow-hidden">
              <div className="h-full bg-white w-[78%]" />
            </div>
            <p className="mt-3 text-xs opacity-80">Up 6 points this week. Keep going 💚</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-5">
            <p className="text-sm font-medium flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Support rooms</p>
            <ul className="mt-3 space-y-2 text-sm">
              {["Exam stress · 124 here", "Newly heartbroken · 56 here", "Career switchers · 89 here"].map((r, i) => (
                <li key={i} className="rounded-lg bg-muted/40 hover:bg-muted px-3 py-2 cursor-pointer transition">{r}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-card border border-border p-5">
            <p className="text-sm font-medium flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-primary" /> Upcoming session</p>
            <p className="text-xs text-muted-foreground mt-2">Calm Lion · Tomorrow 7:00pm</p>
            <button className="mt-3 w-full rounded-lg bg-gradient-primary text-primary-foreground py-2 text-xs font-medium">Reschedule</button>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Bubble({ who, children }: { who: "me" | "them"; children: React.ReactNode }) {
  return (
    <div className={`flex ${who === "me" ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
        who === "me"
          ? "bg-gradient-primary text-primary-foreground rounded-br-sm"
          : "bg-muted text-foreground rounded-bl-sm"
      }`}>
        {children}
      </div>
    </div>
  );
}
