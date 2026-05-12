import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles, GraduationCap, HeartHandshake, Store, User, Briefcase,
  ShoppingBag, ArrowRight, Mail, Lock, ChevronLeft,
} from "lucide-react";

export const Route = createFileRoute("/auth")({
  component: AuthPage,
});

const roles = [
  { id: "student", label: "Student", icon: GraduationCap, color: "from-violet-400 to-indigo-500" },
  { id: "teacher", label: "Teacher", icon: User, color: "from-sky-400 to-blue-500" },
  { id: "counselor", label: "Counselor", icon: HeartHandshake, color: "from-rose-400 to-pink-500" },
  { id: "seller", label: "Seller", icon: ShoppingBag, color: "from-emerald-400 to-teal-500" },
  { id: "buyer", label: "Buyer", icon: Store, color: "from-amber-400 to-orange-500" },
  { id: "provider", label: "Service Provider", icon: Briefcase, color: "from-cyan-400 to-blue-500" },
];

function AuthPage() {
  const [step, setStep] = useState<"login" | "signup" | "role" | "otp">("signup");
  const [role, setRole] = useState("student");

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Visual side */}
      <aside className="hidden lg:flex relative overflow-hidden bg-gradient-aurora text-white p-10 flex-col justify-between">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <Link to="/" className="relative flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl bg-white/20 grid place-items-center backdrop-blur">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-display text-xl font-semibold">Sankofa</span>
        </Link>
        <div className="relative max-w-md space-y-6">
          <h2 className="text-4xl font-display font-semibold leading-tight">
            One ecosystem for learning, healing, and earning — built for Africa.
          </h2>
          <p className="opacity-80">Join 24,000+ students, teachers, counselors and vendors building a kinder, smarter community.</p>
          <div className="flex gap-3 pt-4">
            {["AO", "TK", "CN", "FE"].map((n, i) => (
              <div key={i} className="h-10 w-10 rounded-full bg-white/20 backdrop-blur grid place-items-center text-sm font-medium border-2 border-white/30">{n}</div>
            ))}
            <div className="h-10 px-3 rounded-full bg-white/20 backdrop-blur grid place-items-center text-xs">+24k</div>
          </div>
        </div>
        <p className="relative text-xs opacity-70">© 2025 Sankofa · A safe, anonymous, community-first platform</p>
      </aside>

      {/* Form side */}
      <div className="flex flex-col p-6 md:p-10">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" /> Back
          </Link>
          <div className="text-sm text-muted-foreground">
            {step === "login" ? "New here?" : "Already have an account?"}{" "}
            <button onClick={() => setStep(step === "login" ? "signup" : "login")} className="text-primary font-medium hover:underline">
              {step === "login" ? "Sign up" : "Log in"}
            </button>
          </div>
        </div>

        <div className="flex-1 grid place-items-center py-10">
          <div className="w-full max-w-md animate-fade-up">
            {step === "signup" && (
              <>
                <h1 className="text-3xl font-display font-semibold">Create your account</h1>
                <p className="text-sm text-muted-foreground mt-2">Free forever. Cancel anytime.</p>
                <form onSubmit={(e) => { e.preventDefault(); setStep("role"); }} className="mt-6 space-y-3">
                  <Field icon={User} placeholder="Full name" />
                  <Field icon={Mail} placeholder="you@email.com" type="email" />
                  <Field icon={Lock} placeholder="Password" type="password" />
                  <button className="w-full h-11 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-elevated transition flex items-center justify-center gap-2">
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
                <Divider />
                <SocialButtons />
              </>
            )}

            {step === "login" && (
              <>
                <h1 className="text-3xl font-display font-semibold">Welcome back</h1>
                <p className="text-sm text-muted-foreground mt-2">Continue your journey.</p>
                <form onSubmit={(e) => { e.preventDefault(); }} className="mt-6 space-y-3">
                  <Field icon={Mail} placeholder="you@email.com" type="email" />
                  <Field icon={Lock} placeholder="Password" type="password" />
                  <div className="flex items-center justify-between text-xs">
                    <label className="flex items-center gap-2 text-muted-foreground"><input type="checkbox" /> Remember me</label>
                    <button type="button" className="text-primary hover:underline">Forgot password?</button>
                  </div>
                  <button className="w-full h-11 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-elevated transition">Log in</button>
                </form>
                <Divider />
                <SocialButtons />
              </>
            )}

            {step === "role" && (
              <>
                <h1 className="text-3xl font-display font-semibold">Choose your role</h1>
                <p className="text-sm text-muted-foreground mt-2">You can change or add roles later.</p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {roles.map((r) => {
                    const Icon = r.icon;
                    const active = role === r.id;
                    return (
                      <button key={r.id} onClick={() => setRole(r.id)} className={`text-left rounded-2xl border p-4 transition ${
                        active ? "border-primary bg-primary/5 shadow-soft" : "border-border hover:border-primary/40"
                      }`}>
                        <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${r.color} grid place-items-center text-white mb-2`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="font-medium text-sm">{r.label}</p>
                      </button>
                    );
                  })}
                </div>
                <button onClick={() => setStep("otp")} className="mt-6 w-full h-11 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-soft">Continue</button>
              </>
            )}

            {step === "otp" && (
              <>
                <h1 className="text-3xl font-display font-semibold">Verify your email</h1>
                <p className="text-sm text-muted-foreground mt-2">We sent a 6-digit code to ada@email.com</p>
                <div className="mt-6 flex gap-2 justify-between">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <input key={i} maxLength={1} className="h-14 w-12 rounded-xl bg-muted/60 border border-border text-center text-xl font-semibold focus:bg-card focus:border-ring outline-none" />
                  ))}
                </div>
                <Link to="/app" className="mt-6 block">
                  <button className="w-full h-11 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-soft">Verify & enter app</button>
                </Link>
                <p className="mt-4 text-xs text-center text-muted-foreground">Didn't get a code? <button className="text-primary hover:underline">Resend</button></p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ icon: Icon, ...props }: any) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <input {...props} className="w-full h-11 pl-10 pr-4 rounded-xl bg-muted/60 border border-transparent focus:bg-card focus:border-ring outline-none text-sm transition" />
    </div>
  );
}

function Divider() {
  return (
    <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
      <div className="flex-1 h-px bg-border" /> or continue with <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <button className="h-11 rounded-xl border border-border hover:bg-muted/40 text-sm font-medium">Google</button>
      <button className="h-11 rounded-xl border border-border hover:bg-muted/40 text-sm font-medium">Apple</button>
    </div>
  );
}
