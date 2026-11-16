"use client";

import React from "react";
import { Search, Hammer, Rocket, ArrowRight, ShieldCheck, Check } from "lucide-react";

interface ProcessProps {
  onOpenAudit: () => void;
}

export function Process({ onOpenAudit }: ProcessProps) {
  const steps = [
    {
      step: "01",
      duration: "Days 1 – 3",
      title: "The Zero-Touch Systems Audit",
      description: "We map your entire operational landscape, analyzing every inbound lead touchpoint and administrative bottleneck. Zero disruption to your current workflow.",
      deliverables: [
        "Comprehensive bottleneck diagnosis",
        "Pipeline leakage & speed-to-lead audit",
        "Custom architecture schematic",
      ],
      icon: Search,
    },
    {
      step: "02",
      duration: "Days 4 – 10",
      title: "The Invisible Build & Sandboxing",
      description: "Our engineers build your custom AI pipelines, stateful queues, and CRM/ERP integrations in private staging environments. Zero risk of production failure.",
      deliverables: [
        "Custom API integrations & LLM guardrails",
        "Deterministic error-handling & fallback routes",
        "Full synthetic load testing",
      ],
      icon: Hammer,
    },
    {
      step: "03",
      duration: "Days 11 – 14",
      title: "Live Production Rollout & Telemetry",
      description: "We switch your automated engines into live production. Inbound leads are engaged in seconds; repetitive back-office tasks cease to exist. 24/7 telemetry begins.",
      deliverables: [
        "Seamless turn-key deployment",
        "Executive real-time telemetry dashboard",
        "Continuous calibration & dedicated SLA",
      ],
      icon: Rocket,
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-zinc-400">
            <span>ZERO OPERATIONAL CHAOS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            How We Deliver In 14 Days Flat.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Hormozi Rule: Extreme value requires minimizing your effort and time delay. You don't learn complex software, manage developers, or rebuild your stack. We handle the entire build from audit to scale.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel-elevated bg-[#0a0a0c]/80 rounded-3xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-white px-2.5 py-1 rounded-lg bg-white/10">
                    Step {item.step}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {item.duration}
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 w-fit text-white mb-4 group-hover:scale-105 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <div className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider">
                  Deliverables:
                </div>
                {item.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-panel bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-xs sm:text-sm text-zinc-300">
              <span className="font-semibold text-white">Full Done-For-You Delivery.</span> No new tools to learn, no team re-training, no developer hiring.
            </div>
          </div>
          <button
            onClick={onOpenAudit}
            className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors shrink-0 flex items-center gap-1.5"
          >
            <span>Start Step 01</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
