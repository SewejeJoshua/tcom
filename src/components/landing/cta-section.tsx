import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-aurora text-white p-10 md:p-16 text-center">
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-display font-semibold leading-tight">
              Ready to join the ecosystem?
            </h2>

            <p className="mt-4 opacity-80 max-w-lg mx-auto">
              Sign up free in under a minute.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/auth"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-primary px-6 py-3 text-sm font-semibold shadow-elevated hover:scale-[1.02] transition"
              >
                Create free account
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/app"
                className="inline-flex items-center gap-2 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur px-6 py-3 text-sm font-medium transition"
              >
                See it in action
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}