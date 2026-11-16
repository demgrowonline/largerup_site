"use client";

import React from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Lock, Clock } from "lucide-react";
import { LargerUpLogo } from "./LargerUpLogo";

interface OfferCtaProps {
  onOpenAudit: () => void;
}

export function OfferCta({ onOpenAudit }: OfferCtaProps) {
  return (
    <section id="offer" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Specular Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="glass-panel-elevated bg-[#0a0a0d]/95 rounded-[36px] border border-white/15 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle Top Specular Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-zinc-300 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>STRICT CLIENT CAPACITY: 3 NEW ENTERPRISES THIS MONTH</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Ready to Automate Your Revenue & Kill Operational Drag?
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Claim a 100% Free Automation Audit. Our Senior Systems Architects will analyze your stack, expose your hidden pipeline leaks, and engineer a bespoke 14-day deployment blueprint.
            </p>

            {/* The Hormozi Unreasonable Guarantee Box */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-left max-w-2xl mx-auto space-y-3">
              <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>The LargerUp 30-Day Risk-Reversal Guarantee</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                If our custom AI infrastructure does not recover at least 20 executive hours/week or generate verifiable qualified pipeline for your team within 30 days of production launch, <strong className="text-white">we work 100% free until it does.</strong> No excuses, no fine print.
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-all duration-200 shadow-2xl active:scale-95 group"
              >
                <span>Claim Your Free Automation Blueprint</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Trust Micro-Bullets */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-zinc-500 font-mono">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-zinc-400" />
                <span>Zero Obligation / Confidential NDA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                <span>24-Hour Blueprint Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>$1M+ ARR Businesses Only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
