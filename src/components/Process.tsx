"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProcessProps {
  onOpenAudit: () => void;
}

export function Process({ onOpenAudit }: ProcessProps) {
  const steps = [
    {
      num: "01",
      title: "15-minute call",
      desc: "We look at your current setup, find where leads are falling through the cracks, and spot the manual tasks eating up your team's time.",
      time: "Day 1",
    },
    {
      num: "02",
      title: "We build everything",
      desc: "Our engineers build and test your automations privately. Your daily operations keep running without interruption.",
      time: "Days 2 to 10",
    },
    {
      num: "03",
      title: "Turn it on & see results",
      desc: "We connect your new automations. Leads get answered in seconds, and repetitive tasks disappear from your team's to-do list.",
      time: "Days 11 to 14",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How it works.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            No complex software to learn. No hiring or managing programmers. We handle everything from start to finish.
          </p>
        </div>

        {/* 3 Steps using shadcn Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((st, idx) => (
            <Card
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-white/[0.02] border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors"
            >
              <CardHeader className="p-0 pb-3 flex flex-row items-center justify-between">
                <Badge variant="outline" className="font-mono text-xs text-zinc-500 border-white/10">
                  Step {st.num}
                </Badge>
                <span className="text-[11px] text-zinc-500 font-mono">
                  {st.time}
                </span>
              </CardHeader>

              <CardContent className="p-0 space-y-2">
                <CardTitle className="text-lg font-bold text-white">
                  {st.title}
                </CardTitle>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {st.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            onClick={onOpenAudit}
            size="lg"
            className="rounded-full bg-white text-black hover:bg-zinc-200 font-semibold px-6 py-6 text-xs sm:text-sm transition-all"
          >
            <span>Book your 15-minute call</span>
            <ArrowRight className="size-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
