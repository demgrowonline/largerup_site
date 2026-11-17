"use client";

import React from "react";
import { ArrowRight, ChevronRight, Check, X } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
}

export function Hero({ onOpenAudit }: HeroProps) {
  return (
    <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Main Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            More sales. Less busywork.
            <br />
            <span className="text-zinc-400">Built with AI.</span>
          </h1>

          {/* Plain English Subheadline */}
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            We build automations for your business that do two things: reply to new leads in seconds so you close more deals, and handle repetitive work so your team gets hours back every week.
          </p>

          <p className="text-sm sm:text-base font-medium text-white">
            Either way, your business makes more money.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-colors active:scale-95 shadow-lg"
            >
              <span>Book a 15-minute call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#what-we-do"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 text-xs sm:text-sm font-medium text-zinc-300 rounded-full hover:text-white transition-colors"
            >
              <span>See what we do</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </a>
          </div>
        </div>

        {/* Clear Side-by-Side Reality Visual (Apple & Mobbin restraint) */}
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Without LargerUp */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Before
            </div>
            <h3 className="text-lg font-semibold text-zinc-300">
              How most businesses run today
            </h3>
            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                <span>New leads sit in an inbox for hours before anyone replies</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                <span>Good prospects go cold and buy from faster competitors</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                <span>Your best people waste hours every day on copy-paste tasks</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                <span>Old leads in your CRM are completely forgotten</span>
              </li>
            </ul>
          </div>

          {/* With LargerUp */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/15 space-y-4 shadow-xl">
            <div className="text-xs font-mono text-white uppercase tracking-wider">
              With LargerUp
            </div>
            <h3 className="text-lg font-semibold text-white">
              Running on autopilot
            </h3>
            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-zinc-200">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Every lead gets an instant, personal reply in under a minute</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Qualified prospects book directly onto your sales calendar</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Client setup, contracts, and invoicing happen without human effort</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Old contacts are automatically revived into new closed deals</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
