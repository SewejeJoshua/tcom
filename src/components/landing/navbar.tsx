import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 glass border-b border-border">
      <div className="max-w-7xl mx-auto h-16 px-4 lg:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-aurora grid place-items-center shadow-glow">
            <Sparkles className="h-4 w-4 text-white" />
          </div>

          <span className="font-display text-lg font-semibold">
            Tedcomm
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">
            Features
          </a>

          <a href="#counsel" className="hover:text-foreground transition">
            Counsel
          </a>

          <a href="#market" className="hover:text-foreground transition">
            Marketplace
          </a>

          <a href="#classes" className="hover:text-foreground transition">
            Classes
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/auth"
            className="text-sm text-muted-foreground hover:text-foreground px-3 py-2"
          >
            Log in
          </Link>

          <Link
            to="/auth"
            className="rounded-xl bg-gradient-primary text-primary-foreground text-sm font-medium px-4 py-2 shadow-soft hover:shadow-elevated transition"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}