import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui-kit/SectionHeader";
import { classes, assignments } from "@/lib/mock-data";
import {
  Mic, Video, ScreenShare, Hand, Smile, MessageSquare,
  Users, FileText, Upload, CheckCircle2, Clock, Calendar, PlayCircle,
  PhoneOff,
} from "lucide-react";

export const Route = createFileRoute("/app/classes")({
  component: ClassesPage,
});

function ClassesPage() {
  return (
    <div className="px-4 lg:px-6 py-6 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider opacity-80">Virtual Classroom</p>
            <h1 className="mt-2 text-2xl md:text-3xl font-display font-semibold">Learn together. Anywhere.</h1>
            <p className="mt-1 text-sm opacity-80">Live classes, assignments, and resources in one place.</p>
          </div>
          <div className="flex gap-2">
            <button className="rounded-xl bg-white/15 hover:bg-white/25 transition px-4 py-2.5 text-sm font-medium">+ New class</button>
            <button className="rounded-xl bg-white text-primary px-4 py-2.5 text-sm font-medium">Join with code</button>
          </div>
        </div>
      </div>

      {/* Live session UI */}
      <section>
        <SectionHeader eyebrow="Live now" title="Calculus II — Integrals & Series" description="Dr. Amina Bello · 48 attending" />
        <div className="grid lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3 rounded-3xl bg-card border border-border overflow-hidden">
            {/* Video grid */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-indigo-950">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-2 p-2">
                {[
                  { name: "Dr. Amina (host)", color: "from-violet-500 to-indigo-700", main: true },
                  { name: "Tunde", color: "from-emerald-500 to-teal-700" },
                  { name: "Chiamaka", color: "from-amber-500 to-orange-700" },
                  { name: "Femi", color: "from-sky-500 to-blue-700" },
                  { name: "Ngozi", color: "from-rose-500 to-pink-700" },
                  { name: "+43 more", color: "from-slate-600 to-slate-800" },
                ].map((p, i) => (
                  <div key={i} className={`relative rounded-xl bg-gradient-to-br ${p.color} ${p.main ? "row-span-2 col-span-2" : ""} overflow-hidden`}>
                    <div className="absolute inset-0 grid place-items-center">
                      <div className={`${p.main ? "h-20 w-20 text-2xl" : "h-10 w-10 text-sm"} rounded-full bg-white/20 backdrop-blur grid place-items-center text-white font-semibold`}>
                        {p.name[0]}
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 text-[11px] bg-black/40 text-white px-2 py-0.5 rounded backdrop-blur">
                      {p.name} {p.main && "🎙️"}
                    </div>
                    {p.main && (
                      <div className="absolute top-2 left-2 text-[10px] bg-destructive text-destructive-foreground px-2 py-0.5 rounded font-medium animate-pulse">
                        ● LIVE
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="p-4 border-t border-border flex items-center justify-between flex-wrap gap-3">
              <div className="text-xs text-muted-foreground flex items-center gap-2">
                <Clock className="h-3.5 w-3.5" /> 32:14 · Recording
              </div>
              <div className="flex items-center gap-2">
                <CtrlBtn icon={Mic} label="Mute" />
                <CtrlBtn icon={Video} label="Camera" />
                <CtrlBtn icon={ScreenShare} label="Share" />
                <CtrlBtn icon={Hand} label="Raise" tone="warning" />
                <CtrlBtn icon={Smile} label="React" />
                <CtrlBtn icon={MessageSquare} label="Chat" />
                <button className="ml-2 h-11 px-4 rounded-xl bg-destructive text-destructive-foreground text-sm font-medium flex items-center gap-2">
                  <PhoneOff className="h-4 w-4" /> Leave
                </button>
              </div>
            </div>
          </div>

          {/* Side panel */}
          <aside className="rounded-3xl bg-card border border-border overflow-hidden flex flex-col h-[520px]">
            <div className="flex border-b border-border text-sm">
              <button className="flex-1 py-3 font-medium border-b-2 border-primary text-primary">Chat</button>
              <button className="flex-1 py-3 text-muted-foreground hover:text-foreground">People</button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-thin">
              {[
                { who: "Tunde", msg: "Sorry, can you repeat the substitution rule?" },
                { who: "Chiamaka", msg: "Got it, thanks! 🙏" },
                { who: "Dr. Amina", msg: "Take a look at slide 14, that has the derivation.", host: true },
                { who: "Femi", msg: "Question — when do we apply integration by parts vs substitution?" },
                { who: "Ngozi", msg: "🙋‍♀️" },
              ].map((m, i) => (
                <div key={i} className="text-sm">
                  <p className={`text-xs font-medium ${m.host ? "text-primary" : "text-muted-foreground"}`}>
                    {m.who} {m.host && "· Host"}
                  </p>
                  <p className="mt-0.5">{m.msg}</p>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-border flex gap-2">
              <input className="flex-1 h-9 px-3 rounded-lg bg-muted/60 outline-none text-sm" placeholder="Send a message…" />
              <button className="h-9 px-3 rounded-lg bg-gradient-primary text-primary-foreground text-xs font-medium">Send</button>
            </div>
          </aside>
        </div>
      </section>

      {/* Class grid */}
      <section>
        <SectionHeader eyebrow="My classes" title="Continue learning" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {classes.map((c) => (
            <div key={c.id} className={`relative overflow-hidden rounded-2xl ${c.color} text-white p-5 shadow-soft`}>
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider opacity-80">
                  <span>{c.status}</span>
                  {c.status === "live" && <span className="h-2 w-2 rounded-full bg-white animate-pulse" />}
                </div>
                <h3 className="mt-3 text-base font-semibold leading-tight">{c.title}</h3>
                <p className="text-xs opacity-80 mt-1">{c.teacher}</p>
                <div className="mt-3 flex items-center gap-3 text-[11px] opacity-80">
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {c.students}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {c.schedule}</span>
                </div>
                <button className="mt-4 inline-flex items-center gap-2 text-xs font-medium rounded-lg bg-white/20 hover:bg-white/30 transition px-3 py-1.5">
                  <PlayCircle className="h-3.5 w-3.5" /> {c.status === "live" ? "Join" : "Open"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Assignments + resources */}
      <div className="grid lg:grid-cols-2 gap-6">
        <section>
          <SectionHeader title="Assignments" />
          <div className="rounded-2xl bg-card border border-border divide-y divide-border overflow-hidden">
            {assignments.map((a) => (
              <div key={a.id} className="p-4 flex items-center gap-4">
                <div className={`h-10 w-10 rounded-xl grid place-items-center ${a.status === "submitted" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"}`}>
                  {a.status === "submitted" ? <CheckCircle2 className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm truncate">{a.title}</p>
                  <p className="text-xs text-muted-foreground">{a.class} · Due {a.due}</p>
                </div>
                <button className="text-xs font-medium rounded-lg bg-gradient-primary text-primary-foreground px-3 py-1.5">
                  {a.status === "submitted" ? "View" : "Submit"}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Shared resources" />
          <div className="rounded-2xl bg-card border border-border p-4 space-y-3">
            {[
              { name: "Lecture 7 — Integration techniques.pdf", size: "2.4 MB" },
              { name: "Practice problems.docx", size: "812 KB" },
              { name: "Recording — Sept 12.mp4", size: "184 MB" },
              { name: "Reference notes.zip", size: "5.6 MB" },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/40 transition">
                <div className="h-9 w-9 rounded-lg bg-gradient-soft grid place-items-center text-primary">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm truncate">{f.name}</p>
                  <p className="text-xs text-muted-foreground">{f.size}</p>
                </div>
                <button className="text-xs text-primary hover:underline">Download</button>
              </div>
            ))}
            <button className="w-full mt-2 rounded-xl border-2 border-dashed border-border py-4 text-sm text-muted-foreground hover:border-primary hover:text-primary transition flex items-center justify-center gap-2">
              <Upload className="h-4 w-4" /> Upload resource
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

function CtrlBtn({ icon: Icon, label, tone }: { icon: any; label: string; tone?: "warning" }) {
  return (
    <button className={`h-11 px-3 rounded-xl flex items-center gap-2 text-sm transition ${
      tone === "warning" ? "bg-warning/15 text-warning hover:bg-warning/25" : "bg-muted hover:bg-muted/70"
    }`} title={label}>
      <Icon className="h-4 w-4" />
      <span className="hidden md:inline">{label}</span>
    </button>
  );
}
