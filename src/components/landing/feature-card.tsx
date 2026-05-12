import { Link } from "@tanstack/react-router";
import { ArrowRight, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  color: string;
  title: string;
  desc: string;
  id: string;
}

export function FeatureCard({
  icon: Icon,
  color,
  title,
  desc,
  id,
}: FeatureCardProps) {
  return (
    <div
      id={id}
      className="group rounded-3xl bg-card border border-border p-6 hover:shadow-elevated hover:-translate-y-1 transition"
    >
      <div
        className={`h-12 w-12 rounded-2xl ${color} grid place-items-center text-white shadow-soft group-hover:scale-110 transition`}
      >
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-4 text-xl font-display font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {desc}
      </p>

      <Link
        to="/app"
        className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all"
      >
        Explore
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}