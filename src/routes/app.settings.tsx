import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui-kit/SectionHeader";

export const Route = createFileRoute("/app/settings")({ component: Settings });

function Settings() {
  return (
    <div className="px-4 lg:px-6 py-6 max-w-3xl mx-auto space-y-6 animate-fade-in">
      <SectionHeader title="Settings" description="Manage your preferences and account" />
      {[
        { title: "Account", fields: ["Display name", "Email", "Phone"] },
        { title: "Privacy", fields: ["Profile visibility", "Anonymous mode default", "Block list"] },
        { title: "Notifications", fields: ["Push notifications", "Email digest", "SMS alerts"] },
        { title: "Appearance", fields: ["Theme (Auto / Light / Dark)", "Language"] },
      ].map((s, i) => (
        <section key={i} className="rounded-2xl bg-card border border-border p-5">
          <h3 className="font-display font-semibold">{s.title}</h3>
          <div className="mt-3 space-y-2">
            {s.fields.map((f, j) => (
              <div key={j} className="flex items-center justify-between p-3 rounded-xl bg-muted/30">
                <span className="text-sm">{f}</span>
                <button className="text-xs text-primary hover:underline">Change</button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
