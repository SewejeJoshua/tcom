import { Search, Bell, Plus, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function TopBar() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-border glass">
      <div className="h-full flex items-center gap-3 px-4 lg:px-6">
        <div className="flex-1 max-w-xl relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search counselors, services, classes…"
            className="w-full h-10 pl-10 pr-4 rounded-xl bg-muted/60 border border-transparent focus:bg-card focus:border-ring outline-none text-sm transition"
          />
        </div>

        <button className="hidden md:flex h-10 px-4 items-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-medium shadow-soft hover:shadow-elevated transition">
          <Plus className="h-4 w-4" /> Quick action
        </button>

        <button
          onClick={() => setDark((v) => !v)}
          className="h-10 w-10 grid place-items-center rounded-xl hover:bg-muted transition"
          aria-label="Toggle theme"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>

        <button className="relative h-10 w-10 grid place-items-center rounded-xl hover:bg-muted transition">
          <Bell className="h-4 w-4" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-success" />
        </button>

        <div className="h-9 w-9 rounded-full bg-gradient-aurora grid place-items-center text-white text-sm font-semibold shadow-soft">
          AO
        </div>
      </div>
    </header>
  );
}
