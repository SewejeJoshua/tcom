import { createFileRoute } from "@tanstack/react-router";
import { notifications } from "@/lib/mock-data";
import { Bell, HeartHandshake, Store, GraduationCap, Wallet } from "lucide-react";

export const Route = createFileRoute("/app/notifications")({ component: Notifs });

const iconFor = (t: string) =>
  t === "counsel" ? HeartHandshake : t === "market" ? Store : t === "class" ? GraduationCap : Wallet;

function Notifs() {
  return (
    <div className="px-4 lg:px-6 py-6 max-w-3xl mx-auto animate-fade-in">
      <h1 className="text-2xl md:text-3xl font-display font-semibold flex items-center gap-3">
        <Bell className="h-6 w-6 text-primary" /> Notifications
      </h1>
      <p className="text-sm text-muted-foreground mt-1">All caught up after this list.</p>
      <div className="mt-6 rounded-2xl bg-card border border-border divide-y divide-border overflow-hidden">
        {[...notifications, ...notifications].map((n, i) => {
          const Icon = iconFor(n.type);
          return (
            <div key={i} className="p-4 flex items-start gap-3 hover:bg-muted/40 transition">
              <div className={`h-10 w-10 rounded-xl grid place-items-center text-white shrink-0 ${
                n.type === "counsel" ? "bg-gradient-aurora" :
                n.type === "class" ? "bg-gradient-primary" :
                n.type === "market" ? "bg-gradient-emerald" : "bg-gradient-soft"
              }`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm">{n.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{n.time}</p>
              </div>
              <button className="text-xs text-primary hover:underline">View</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
