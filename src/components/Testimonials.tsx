"use client";

import React from "react";
import { Star, ShieldCheck, Quote } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Christian Montgomery",
      role: "CEO, Horizon Equity Partners",
      quote: "Before LargerUp, our portfolio deal intake was a mess of unread emails and delayed NDA sign-offs. LargerUp automated our dealflow triage and cut response latency by 90%. It easily added seven figures in enterprise value in year one.",
      rating: 5,
      scale: "$45M AUM",
    },
    {
      name: "Sarah Lindqvist",
      role: "Founder & CEO, Kinetix AI Health",
      quote: "Every agency promises 'AI transformation'. LargerUp was the only one that delivered custom code that directly impacted our bank account. We automated patient intake qualification and reduced back-office administrative drag to near zero.",
      rating: 5,
      scale: "$6.2M ARR",
    },
    {
      name: "Tariq Al-Mansoor",
      role: "Managing Director, Apex Capital Advisory",
      quote: "Their Hormozi-style guarantee felt almost too aggressive until we saw the systems in action. Our inbound leads are contacted in 30 seconds with contextually accurate information. Our closing rate jumped 28% within 60 days.",
      rating: 5,
      scale: "$18M ARR",
    },
    {
      name: "Julian Brooks",
      role: "Co-Founder & COO, OmniScale Logistics",
      quote: "We were about to hire 4 more back-office coordinators to handle document cross-checking. LargerUp built a custom document pipeline that did the work in 10 seconds with zero errors. They saved us over $240k in annual payroll.",
      rating: 5,
      scale: "$12M ARR",
    },
    {
      name: "Rachel Zhang",
      role: "VP Revenue Operations, SaaSMetric",
      quote: "The speed of execution was staggering. 12 days from our initial architecture audit to live production. The self-healing API integrations haven't failed once. Pristine engineering.",
      rating: 5,
      scale: "$9.5M ARR",
    },
    {
      name: "Devon Miller",
      role: "Principal, Miller & Associates Legal Group",
      quote: "In high-ticket legal services, time kills deals. LargerUp's lead qualification engine ensures that prospective high-value clients are vetted and booked directly with the right partner instantly. Remarkable ROI.",
      rating: 5,
      scale: "Top 50 Regional Practice",
    },
  ];

  return (
    <section className="py-24 sm:py-32 border-t border-white/5 bg-[#070709] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-zinc-400">
            <Quote className="w-3.5 h-3.5 text-white" />
            <span>UNFILTERED CLIENT FEEDBACK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Trusted by Founders Who Demand Measurable ROI.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            We don't do vanity metrics. We measure client revenue added and payroll hours eliminated.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-panel-elevated bg-[#09090b]/90 rounded-3xl border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <div>
                {/* Top Rating & Scale */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
                    {rev.scale}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs text-white">
                  {rev.name[0]}
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">{rev.name}</div>
                  <div className="text-[11px] text-zinc-400">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
