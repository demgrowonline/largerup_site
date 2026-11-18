"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface OfferCtaProps {
  onOpenAudit: () => void;
}

export function OfferCta({ onOpenAudit }: OfferCtaProps) {
  return (
    <section id="offer" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border-white/10 text-center flex flex-col gap-6 shadow-2xl">
          <CardContent className="p-0 flex flex-col gap-6">
            <Badge variant="outline" className="w-fit mx-auto font-mono text-[11px] text-zinc-400 border-white/10 uppercase tracking-wider">
              30-DAY RISK-FREE GUARANTEE
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to get more sales and cut the busywork?
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Book a quick 15-minute call. We'll show you exactly what can be automated in your business and how fast you'll see results.
            </p>

            {/* Guarantee Box using shadcn Card */}
            <Card size="sm" className="p-4 rounded-2xl bg-white/[0.02] border-white/5 max-w-lg mx-auto flex flex-row items-center justify-center gap-3 text-left">
              <ShieldCheck className="size-5 text-emerald-400 shrink-0" />
              <p className="text-xs text-zinc-300">
                <strong className="text-white">Our 30-day promise:</strong> If our automations don't save you time or help you close deals in 30 days, we work for free until they do.
              </p>
            </Card>

            <div className="pt-2">
              <Button
                onClick={onOpenAudit}
                size="lg"
                className="rounded-full bg-white text-black hover:bg-zinc-200 font-semibold px-8 py-6 text-xs sm:text-sm shadow-xl active:scale-95 transition-all"
              >
                <span>Book your 15-minute call</span>
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </div>

            <p className="text-xs text-zinc-500">
              No sales pressure. No complex jargon. Just a clear look at your business.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
