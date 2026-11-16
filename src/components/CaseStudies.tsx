"use client";

import React from "react";
import { ArrowUpRight, TrendingUp, Clock, CheckCircle2, ShieldCheck, Building } from "lucide-react";

export function CaseStudies() {
  const cases = [
    {
      client: "Apex Financial Advisory",
      tier: "$14M ARR • Private Wealth & Advisory",
      challenge: "High-net-worth inbound leads were waiting an average of 6.2 hours for partner contact. Over $2M in potential advisory retainers was lost to faster competitors every quarter.",
      solution: "Engineered LargerUp Sub-60s Inbound Enrichment + Autonomous Calendaring & KYC Document Parser.",
      results: [
        { label: "Speed-to-Lead", value: "34 seconds", change: "From 6.2 hours" },
        { label: "Added Pipeline", value: "+$3.8M", change: "In first 90 days" },
        { label: "Partner Hours Saved", value: "38 hrs / wk", change: "Eliminated paperwork" },
      ],
      quote: "LargerUp didn't just give us automation; they transformed our entire sales velocity. Inbound prospects are stunned when they get a personalized brief before closing their browser tab.",
      author: "Marcus Vance",
      role: "Managing Partner, Apex Advisory",
    },
    {
      client: "Volterra Cloud",
      tier: "$8.5M ARR • Enterprise Infrastructure",
      challenge: "1,200+ dead leads were languishing in HubSpot. Meanwhile, manual client onboarding took 4 days per account across billing, Slack, and cloud provisioning.",
      solution: "Deployed the LargerUp Autonomous Pipeline Reactivator alongside a 100% automated Zero-Friction Onboarding Pipeline.",
      results: [
        { label: "Resurrected Revenue", value: "$620,000", change: "From dead CRM leads" },
        { label: "Onboarding Latency", value: "18 seconds", change: "Down from 4 days" },
        { label: "Manual Errors", value: "0.0%", change: "100% deterministic" },
      ],
      quote: "We made our entire investment back in 16 days from deals we had written off 9 months ago. If you run a high-ticket business, this is the highest ROI lever you can pull.",
      author: "Elena Rostova",
      role: "Chief Operating Officer, Volterra",
    },
    {
      client: "Vanguard Global Freight",
      tier: "$22M ARR • Multi-Modal Logistics",
      challenge: "14 full-time dispatchers spending 4+ hours daily re-typing freight bills, customs manifests, and rate confirmations into legacy ERPs.",
      solution: "Engineered bespoke unstructured document ingestion pipelines connected directly to their private Postgres databases with automated compliance verification.",
      results: [
        { label: "Hours Reclaimed", value: "420 hrs / wk", change: "Across 14 dispatchers" },
        { label: "Annual Overhead Cut", value: "$460,000", change: "Payroll reallocated" },
        { label: "Document Accuracy", value: "99.96%", change: "Zero human re-keying" },
      ],
      quote: "Our operators used to burn out doing mindless copy-pasting. LargerUp eliminated that overnight. Our team now focuses purely on client relationships and higher-margin routes.",
      author: "David Sterling",
      role: "VP of Operations, Vanguard Global",
    },
  ];

  return (
    <section id="case-studies" className="py-24 sm:py-32 border-t border-white/5 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-zinc-400">
            <Building className="w-3.5 h-3.5 text-white" />
            <span>PROVEN ENTERPRISE DEPLOYMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            How High-Ticket Leaders Earn With LargerUp.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Hard proof, verified balance sheet improvements, and zero fluff. Here is what happens when bespoke AI infrastructure replaces human friction.
          </p>
        </div>

        {/* Case Cards */}
        <div className="space-y-8">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel-elevated bg-[#08080a]/90 rounded-3xl border border-white/10 p-6 sm:p-10 hover:border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                      {item.tier}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      {item.client}
                    </h3>
                  </div>

                  <div className="space-y-3 pt-2 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="font-semibold text-zinc-300">The Problem: </span>
                      <span className="text-zinc-400">{item.challenge}</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="font-semibold text-zinc-300">LargerUp Architecture: </span>
                      <span className="text-zinc-400">{item.solution}</span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs sm:text-sm italic text-zinc-300 leading-relaxed">
                      "{item.quote}"
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs text-white">
                        {item.author[0]}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">{item.author}</div>
                        <div className="text-[11px] text-zinc-500 font-mono">{item.role}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Results Breakdown */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Verified Outcomes
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {item.results.map((res, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between"
                      >
                        <div className="text-[11px] text-zinc-400 font-medium">{res.label}</div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-white my-1 tracking-tight">
                          {res.value}
                        </div>
                        <div className="text-[11px] text-emerald-400 font-mono">{res.change}</div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl glass-panel bg-white/[0.02] border border-white/5 text-xs text-zinc-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Deployed in under 12 business days without downtime.</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
