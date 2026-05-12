import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui-kit/SectionHeader";
import { ArrowDownLeft, ArrowUpRight, Plus, CreditCard } from "lucide-react";

export const Route = createFileRoute("/app/wallet")({ component: Wallet });

function Wallet() {
  return (
    <div className="px-4 lg:px-6 py-6 space-y-6 animate-fade-in">
      <div className="rounded-3xl bg-gradient-aurora text-white p-8 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <p className="text-xs uppercase tracking-wider opacity-80">Total balance</p>
        <p className="mt-2 text-4xl md:text-5xl font-display font-semibold">₦42,500.00</p>
        <div className="mt-6 flex gap-2">
          <button className="rounded-xl bg-white text-primary px-4 py-2 text-sm font-medium flex items-center gap-2"><Plus className="h-4 w-4" /> Top up</button>
          <button className="rounded-xl bg-white/15 hover:bg-white/25 px-4 py-2 text-sm font-medium">Withdraw</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-2xl bg-card border border-border p-5">
          <SectionHeader title="Recent transactions" />
          <ul className="divide-y divide-border">
            {[
              { t: "Payment to Adaeze Studio", a: "−₦15,500", c: "out" },
              { t: "Wallet top-up · Card ****4421", a: "+₦25,000", c: "in" },
              { t: "Counseling session · Sage Owl", a: "−₦3,500", c: "out" },
              { t: "Class refund · Yoruba Lit", a: "+₦4,000", c: "in" },
              { t: "Marketplace earnings", a: "+₦12,000", c: "in" },
            ].map((tx, i) => (
              <li key={i} className="py-3 flex items-center gap-3">
                <div className={`h-9 w-9 rounded-xl grid place-items-center ${tx.c === "in" ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"}`}>
                  {tx.c === "in" ? <ArrowDownLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                </div>
                <p className="flex-1 text-sm">{tx.t}</p>
                <p className={`text-sm font-semibold ${tx.c === "in" ? "text-success" : "text-foreground"}`}>{tx.a}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-card border border-border p-5">
          <SectionHeader title="Payment methods" />
          <div className="space-y-2">
            {[{ b: "Visa", n: "**** 4421" }, { b: "Mastercard", n: "**** 8821" }].map((c, i) => (
              <div key={i} className="rounded-xl bg-gradient-soft p-4 flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">{c.b}</p>
                  <p className="text-xs text-muted-foreground">{c.n}</p>
                </div>
              </div>
            ))}
            <button className="w-full rounded-xl border-2 border-dashed border-border py-3 text-sm text-muted-foreground hover:border-primary hover:text-primary transition">+ Add card</button>
          </div>
        </div>
      </div>
    </div>
  );
}
