import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui-kit/SectionHeader";
import { Users, Store, ShieldCheck, AlertTriangle, TrendingUp, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/app/admin")({
  component: AdminPage,
});

const stats = [
  { label: "Active users", value: "24,182", trend: "+8.4%", icon: Users, tone: "bg-gradient-primary" },
  { label: "Marketplace orders", value: "₦4.8M", trend: "+12%", icon: Store, tone: "bg-gradient-emerald" },
  { label: "Verified counselors", value: "318", trend: "+9", icon: ShieldCheck, tone: "bg-gradient-aurora" },
  { label: "Open reports", value: "27", trend: "−5", icon: AlertTriangle, tone: "bg-gradient-soft" },
];



function AdminPage() {
  return (
    <div className="px-4 lg:px-6 py-6 space-y-6 animate-fade-in">
      <div>
        <p className="text-xs uppercase tracking-wider text-primary font-medium">Admin</p>
        <h1 className="text-2xl md:text-3xl font-display font-semibold mt-1">Operations dashboard</h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="rounded-2xl bg-card border border-border p-4">
              <div className={`h-9 w-9 rounded-xl ${s.tone} grid place-items-center text-white mb-3`}>
                <Icon className="h-4 w-4" />
              </div>
              <p className="text-2xl font-display font-semibold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className="text-[11px] mt-1 text-success font-medium">{s.trend}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-2xl bg-card border border-border p-5">
          <SectionHeader title="Live activity" description="Last 24 hours" />
          <div className="h-56 flex items-end gap-2">
            {Array.from({ length: 24 }).map((_, i) => {
              const h = 20 + Math.abs(Math.sin(i * 0.6)) * 80;
              return (
                <div key={i} className="flex-1 rounded-t-md bg-gradient-aurora" style={{ height: `${h}%`, opacity: 0.5 + (h / 200) }} />
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl bg-card border border-border p-5">
          <SectionHeader title="Pending reports" />
          <ul className="space-y-3">
            {[
              { user: "@kunle_t", reason: "Spam in marketplace", sev: "low" },
              { user: "@anon_a72", reason: "Inappropriate counselor msg", sev: "high" },
              { user: "@vendor_22", reason: "Fake listing", sev: "med" },
              { user: "@user_ng", reason: "Harassment in class", sev: "high" },
            ].map((r, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${
                  r.sev === "high" ? "bg-destructive" : r.sev === "med" ? "bg-warning" : "bg-muted-foreground"
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{r.reason}</p>
                  <p className="text-xs text-muted-foreground">{r.user}</p>
                </div>
                <button className="text-xs text-primary hover:underline">Review</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl bg-card border border-border overflow-hidden">
        <div className="p-5 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="font-display font-semibold">User management</h3>
            <p className="text-xs text-muted-foreground">Recent signups</p>
          </div>
          <input placeholder="Search users…" className="h-9 px-3 rounded-lg bg-muted/60 outline-none text-sm w-48" />
        </div>
        <table className="w-full text-sm">
          <thead className="text-xs text-muted-foreground bg-muted/30">
            <tr>
              <th className="text-left p-3 font-medium">User</th>
              <th className="text-left p-3 font-medium">Role</th>
              <th className="text-left p-3 font-medium">Status</th>
              <th className="text-left p-3 font-medium">Joined</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {[
              { u: "Ada Okonkwo", r: "Student", s: "active", d: "2d ago" },
              { u: "Kwame O.", r: "Service Provider", s: "pending", d: "3d ago" },
              { u: "Sage Owl", r: "Counselor", s: "verified", d: "1w ago" },
              { u: "Adaeze Studio", r: "Seller", s: "active", d: "1w ago" },
              { u: "Dr. Amina Bello", r: "Teacher", s: "verified", d: "2w ago" },
            ].map((row, i) => (
              <tr key={i} className="border-t border-border hover:bg-muted/30">
                <td className="p-3 flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-gradient-aurora text-white grid place-items-center text-xs">{row.u[0]}</div>
                  {row.u}
                </td>
                <td className="p-3 text-muted-foreground">{row.r}</td>
                <td className="p-3">
                  <span className={`text-[11px] rounded-full px-2 py-0.5 font-medium ${
                    row.s === "verified" ? "bg-success/15 text-success" :
                    row.s === "active" ? "bg-primary/15 text-primary" : "bg-warning/15 text-warning"
                  }`}>{row.s}</span>
                </td>
                <td className="p-3 text-muted-foreground">{row.d}</td>
                <td className="p-3 text-right"><button className="text-xs text-primary hover:underline">Manage</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
