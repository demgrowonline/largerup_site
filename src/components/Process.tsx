"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ProcessProps {
  onOpenAudit: () => void;
}

export function Process({ onOpenAudit }: ProcessProps) {
  const steps = [
    {
      num: "1",
      title: "15-minute call",
      desc: "We look at your current setup, find where leads are falling through the cracks, and spot the manual tasks eating up your team's time.",
    },
    {
      num: "2",
      title: "We build everything",
      desc: "Our engineers build and test your automations privately. Your daily operations keep running without interruption.",
    },
    {
      num: "3",
      title: "Turn it on & see results",
      desc: "We connect your new automations. Leads get answered in seconds, and repetitive tasks disappear from your team's to-do list.",
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

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono text-zinc-500">
                  Step 0{st.num}
                </span>

                <h3 className="text-lg font-bold text-white">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="text-[11px] text-zinc-500 font-mono">
                {idx === 0 && "Day 1"}
                {idx === 1 && "Days 2 to 10"}
                {idx === 2 && "Days 11 to 14"}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
          >
            <span>Book your 15-minute call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
