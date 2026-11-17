"use client";

import React from "react";
import { TrendingUp, Clock, ArrowRight, Check } from "lucide-react";

interface DualEnginesProps {
  onOpenAudit: () => void;
}

export function DualEngines({ onOpenAudit }: DualEnginesProps) {
  return (
    <section id="what-we-do" className="py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What we do.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Every business has two big profit leaks: leads that go cold because no one replied fast enough, and hours wasted on mindless busywork. We fix both.
          </p>
        </div>

        {/* Two Plain-English Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Sales Automation */}
          <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                <TrendingUp className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  1. Sales Automation
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Close more deals without hiring an army of sales reps.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  {
                    title: "Instant replies to new leads",
                    text: "When a potential client fills out your contact form, they get a friendly, personal reply in seconds.",
                  },
                  {
                    title: "Automated booking follow-ups",
                    text: "Polite follow-ups over email and text that gently guide leads to pick a time on your calendar.",
                  },
                  {
                    title: "Revive dead leads in your CRM",
                    text: "Find old prospects who ghosted months ago and automatically restart conversations that turn into sales.",
                  },
                  {
                    title: "Pre-call lead research",
                    text: "Gives your closers a 30-second brief on who the lead is, their company, and what they need before the call.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">
                        {item.title}
                      </div>
                      <div className="text-xs text-zinc-400 leading-relaxed">
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-zinc-300 transition-colors"
              >
                <span>Automate your sales pipeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Work Automation */}
          <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                <Clock className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  2. Work Automation
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Stop paying your smart team to do boring copy-paste work.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  {
                    title: "Instant client onboarding",
                    text: "Contracts sent, invoices created, and project folders set up in seconds the moment a deal closes.",
                  },
                  {
                    title: "Connect all your software",
                    text: "Keep your CRM, accounting, and spreadsheets updated together so nobody ever types data twice.",
                  },
                  {
                    title: "Read invoices and documents",
                    text: "AI reads PDFs, invoices, and receipts automatically and enters the numbers where they belong.",
                  },
                  {
                    title: "Daily business summaries",
                    text: "Get a clear morning message showing cash collected, new leads, and team progress without logging into 5 tools.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">
                        {item.title}
                      </div>
                      <div className="text-xs text-zinc-400 leading-relaxed">
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-zinc-300 transition-colors"
              >
                <span>Automate your daily busywork</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
