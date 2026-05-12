import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home, Store, HeartHandshake, GraduationCap, User,
  Shield, Settings, Wallet, Bell, Sparkles,
} from "lucide-react";

const items = [
  { to: "/app", label: "Home", icon: Home, exact: true },
  { to: "/app/marketplace", label: "Marketplace", icon: Store },
  { to: "/app/counsel", label: "Counsel", icon: HeartHandshake },
  { to: "/app/classes", label: "Classes", icon: GraduationCap },
  { to: "/app/wallet", label: "Wallet", icon: Wallet },
  { to: "/app/notifications", label: "Notifications", icon: Bell },
  { to: "/app/profile", label: "Profile", icon: User },
];

const bottom = [
  { to: "/app/admin", label: "Admin", icon: Shield },
  { to: "/app/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to: string, exact?: boolean) =>
    exact ? path === to : path === to || path.startsWith(to + "/");

  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border bg-sidebar">
      <Link to="/app" className="flex items-center gap-2 px-6 h-16 border-b border-border">
        <div className="h-9 w-9 rounded-xl bg-gradient-aurora grid place-items-center shadow-glow">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        <span className="font-display text-lg font-semibold">Sankofa</span>
      </Link>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {items.map((it) => {
          const Icon = it.icon;
          const active = isActive(it.to, it.exact);
          return (
            <Link
              key={it.to}
              to={it.to}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                active
                  ? "bg-gradient-primary text-primary-foreground shadow-soft"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{it.label}</span>
              {it.label === "Notifications" && (
                <span className="ml-auto text-[10px] bg-success text-success-foreground rounded-full px-1.5 py-0.5">4</span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-3 border-t border-border space-y-1">
        {bottom.map((it) => {
          const Icon = it.icon;
          const active = isActive(it.to);
          return (
            <Link
              key={it.to}
              to={it.to}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-muted-foreground hover:bg-sidebar-accent"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{it.label}</span>
            </Link>
          );
        })}
        <div className="mt-3 rounded-2xl bg-gradient-aurora p-4 text-white">
          <p className="text-xs opacity-80">Upgrade</p>
          <p className="text-sm font-semibold mt-1">Sankofa Pro</p>
          <p className="text-[11px] opacity-80 mt-1">Unlimited counseling & classes</p>
          <button className="mt-2 w-full rounded-lg bg-white/20 hover:bg-white/30 transition py-1.5 text-xs font-medium">
            Try free
          </button>
        </div>
      </div>
    </aside>
  );
}
