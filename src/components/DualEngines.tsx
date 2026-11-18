"use client";

import React from "react";
import { TrendingUp, Clock, ArrowRight, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

        {/* Two Plain-English Cards using shadcn Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Sales Automation */}
          <Card className="p-7 sm:p-9 rounded-3xl bg-white/[0.03] border-white/10 flex flex-col justify-between">
            <CardHeader className="p-0 pb-4 space-y-4">
              <div className="size-10 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                <TrendingUp className="size-5" />
              </div>

              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  1. Sales Automation
                </CardTitle>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Close more deals without hiring an army of sales reps.
                </p>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="flex flex-col gap-3.5 pt-2">
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
                    <Check className="size-4 text-emerald-400 shrink-0 mt-0.5" />
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
            </CardContent>

            <CardFooter className="p-0 pt-6 border-t border-white/5">
              <Button
                variant="ghost"
                onClick={onOpenAudit}
                className="p-0 h-auto text-xs font-semibold text-white hover:text-zinc-300 hover:bg-transparent"
              >
                <span>Automate your sales pipeline</span>
                <ArrowRight className="size-3.5 ml-1.5" />
              </Button>
            </CardFooter>
          </Card>

          {/* Card 2: Work Automation */}
          <Card className="p-7 sm:p-9 rounded-3xl bg-white/[0.03] border-white/10 flex flex-col justify-between">
            <CardHeader className="p-0 pb-4 space-y-4">
              <div className="size-10 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                <Clock className="size-5" />
              </div>

              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  2. Work Automation
                </CardTitle>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Stop paying your smart team to do boring copy-paste work.
                </p>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="flex flex-col gap-3.5 pt-2">
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
                    <Check className="size-4 text-emerald-400 shrink-0 mt-0.5" />
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
            </CardContent>

            <CardFooter className="p-0 pt-6 border-t border-white/5">
              <Button
                variant="ghost"
                onClick={onOpenAudit}
                className="p-0 h-auto text-xs font-semibold text-white hover:text-zinc-300 hover:bg-transparent"
              >
                <span>Automate your daily busywork</span>
                <ArrowRight className="size-3.5 ml-1.5" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
