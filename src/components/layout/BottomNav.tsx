import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Store, HeartHandshake, GraduationCap, User } from "lucide-react";

const items = [
  { to: "/app", label: "Home", icon: Home, exact: true },
  { to: "/app/marketplace", label: "Market", icon: Store },
  { to: "/app/counsel", label: "Counsel", icon: HeartHandshake },
  { to: "/app/classes", label: "Classes", icon: GraduationCap },
  { to: "/app/profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 glass border-t border-border">
      <ul className="grid grid-cols-5 h-16 px-2">
        {items.map((it) => {
          const Icon = it.icon;
          const active = it.exact ? path === it.to : path === it.to || path.startsWith(it.to + "/");
          return (
            <li key={it.to}>
              <Link
                to={it.to}
                className={`h-full flex flex-col items-center justify-center gap-1 rounded-xl text-[11px] transition ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <span className={`grid place-items-center h-9 w-9 rounded-xl transition ${active ? "bg-gradient-primary text-primary-foreground shadow-soft" : ""}`}>
                  <Icon className="h-4 w-4" />
                </span>
                {it.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
