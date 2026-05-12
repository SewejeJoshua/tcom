import {
  GraduationCap,
  HeartHandshake,
  MapPin,
} from "lucide-react";

const cards = [
  {
    title: "Sage Owl",
    sub: "Available now",
    color: "bg-gradient-aurora",
    icon: HeartHandshake,
  },
  {
    title: "Calculus II — Live",
    sub: "48 attending",
    color: "bg-gradient-primary",
    icon: GraduationCap,
  },
  {
    title: "126 nearby",
    sub: "in 5 km",
    color: "bg-gradient-emerald",
    icon: MapPin,
  },
];

export function HeroPreview() {
  return (
    <div className="mt-16 relative max-w-5xl mx-auto">
      <div className="rounded-3xl glass border border-border shadow-elevated overflow-hidden">
        <div className="h-10 border-b border-border flex items-center gap-1.5 px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
        </div>

        <div className="grid md:grid-cols-3 gap-3 p-4 bg-gradient-soft">
          {cards.map((card, i) => {
            const Icon = card.icon;

            return (
              <div
                key={i}
                className={`rounded-2xl ${card.color} text-white p-5 shadow-soft text-left`}
              >
                <Icon className="h-5 w-5" />

                <p className="mt-3 font-semibold">{card.title}</p>

                <p className="text-xs opacity-80">{card.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}