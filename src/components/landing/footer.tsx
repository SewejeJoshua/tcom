import {
  Github,
  Linkedin,
  Sparkles,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-aurora grid place-items-center">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </div>

          <span>© 2026 Tedcomm</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-foreground transition">
            <Twitter className="h-4 w-4" />
          </a>

          <a href="#" className="hover:text-foreground transition">
            <Github className="h-4 w-4" />
          </a>

          <a href="#" className="hover:text-foreground transition">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}