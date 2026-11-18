"use client";

import React from "react";
import { ArrowRight, ChevronRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  onOpenAudit: () => void;
}

export function Hero({ onOpenAudit }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Main Headline with exact requested line break discipline */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] flex flex-col items-center">
            <span className="inline-block whitespace-nowrap">More sales.</span>
            <span className="inline-block whitespace-nowrap">Less busywork.</span>
            <span className="inline-block whitespace-nowrap text-zinc-400">Built with AI.</span>
          </h1>

          {/* Plain English Subheadline */}
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            We build automations for your business that do two things: reply to new leads in seconds so you close more deals, and handle repetitive work so your team gets hours back every week.
          </p>

          <p className="text-sm sm:text-base font-medium text-white">
            Either way, your business makes more money.
          </p>

          {/* Action CTAs using shadcn Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              onClick={onOpenAudit}
              size="lg"
              className="w-full sm:w-auto rounded-full bg-white text-black hover:bg-zinc-200 font-semibold px-6 py-6 text-sm shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <span>Book a 15-minute call</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full border-white/10 hover:border-white/20 text-zinc-300 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] font-medium px-5 py-6 text-sm hover:-translate-y-0.5 transition-all"
              onClick={() => {
                const el = document.getElementById("what-we-do");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>See what we do</span>
              <ChevronRight className="w-4 h-4 ml-1.5 text-zinc-500" />
            </Button>
          </div>
        </div>

        {/* Clear Side-by-Side Reality Visual using shadcn Cards & Badges */}
        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Before Card */}
          <Card className="bg-white/[0.02] border-white/5 hover:border-white/10 transition-all rounded-3xl p-6 sm:p-8">
            <CardHeader className="p-0 pb-4">
              <Badge variant="outline" className="w-fit text-[11px] font-mono text-zinc-500 border-white/10 mb-1">
                BEFORE
              </Badge>
              <CardTitle className="text-lg font-semibold text-zinc-300">
                How most businesses run today
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
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
            </CardContent>
          </Card>

          {/* With LargerUp Card */}
          <Card className="bg-white/[0.04] border-white/15 hover:border-white/25 transition-all rounded-3xl p-6 sm:p-8 shadow-xl">
            <CardHeader className="p-0 pb-4">
              <Badge variant="secondary" className="w-fit text-[11px] font-mono text-white bg-white/10 mb-1">
                WITH LARGERUP
              </Badge>
              <CardTitle className="text-lg font-semibold text-white">
                Running on autopilot
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
