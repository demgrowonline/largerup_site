"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface OfferCtaProps {
  onOpenAudit: () => void;
}

export function OfferCta({ onOpenAudit }: OfferCtaProps) {
  return (
    <section id="offer" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to get more sales and cut the busywork?
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Book a quick 15-minute call. We'll show you exactly what can be automated in your business and how fast you'll see results.
          </p>

          {/* Guarantee Box */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 max-w-lg mx-auto flex items-center justify-center gap-3 text-left">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <p className="text-xs text-zinc-300">
              <strong className="text-white">Our 30-day promise:</strong> If our automations don't save you time or help you close deals in 30 days, we work for free until they do.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-colors shadow-lg active:scale-95"
            >
              <span>Book your 15-minute call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-zinc-500">
            No sales pressure. No complex jargon. Just a clear look at your business.
          </p>
        </div>
      </div>
    </section>
  );
}
