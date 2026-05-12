import { Check, Shield } from "lucide-react";

const points = [
  "End-to-end encrypted conversations",
  "Anonymous identity for counseling chats",
  "Verified counselors, teachers and vendors",
  "Emergency help, one tap away",
  "Granular privacy & report controls",
];

const stats = [
  { v: "256-bit", l: "encryption" },
  { v: "0", l: "ads ever" },
  { v: "100%", l: "anonymous chat" },
  { v: "24/7", l: "moderation" },
];

export function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            Built on trust
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-display font-semibold">
            Anonymous by design. Verified for safety.
          </h2>

          <p className="mt-4 text-muted-foreground">
            We protect your identity while ensuring every counselor,
            teacher, and vendor on the platform is verified.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="h-5 w-5 rounded-full bg-success/20 text-success grid place-items-center shrink-0 mt-0.5">
                  <Check className="h-3 w-3" />
                </span>

                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-3xl bg-card border border-border shadow-elevated p-8">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-aurora grid place-items-center text-white">
                <Shield className="h-5 w-5" />
              </div>

              <div>
                <p className="font-semibold">
                  Privacy guarantee
                </p>

                <p className="text-xs text-muted-foreground">
                  Your data, your control
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-muted/40 p-4"
                >
                  <p className="text-2xl font-display font-semibold">
                    {stat.v}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {stat.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}