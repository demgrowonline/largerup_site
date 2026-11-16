"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Sparkles, Terminal, CheckCircle, Activity, ChevronRight, Zap } from "lucide-react";
import { LargerUpLogo } from "./LargerUpLogo";

interface HeroProps {
  onOpenAudit: () => void;
}

export function Hero({ onOpenAudit }: HeroProps) {
  const [activeConsoleTab, setActiveConsoleTab] = useState<"revenue" | "ops">("revenue");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Specular Top Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Mobbin-Style Stadium Status Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-zinc-300 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-400 font-sans">Strictly for</span>
            <span className="text-white font-medium font-sans">$1M – $20M+ High-Ticket Enterprises</span>
          </div>
        </div>

        {/* Main Value Proposition Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-tighter text-white leading-[1.06]">
            Autonomous AI Infrastructure.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
              Double Sales Velocity.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-600">
              Eradicate Operational Drag.
            </span>
          </h1>

          {/* Hormozi Value Equation Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            We engineer bespoke AI systems for market leaders. Instant sub-60-second speed-to-lead and zero-friction back-office automation. Either your revenue expands or your operational overhead collapses.{" "}
            <span className="text-white font-medium underline decoration-white/30 underline-offset-4">
              Either way, our clients earn.
            </span>
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-all duration-200 shadow-xl active:scale-95 group"
            >
              <span>Claim Free Automation Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href="#revenue-engine"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-zinc-300 glass-pill rounded-full hover:text-white transition-all duration-200"
            >
              <span>Explore The Architecture</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </a>
          </div>

          {/* Hormozi Risk-Reversal Micro-Tag */}
          <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 pt-2 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Guaranteed 30-Day Measurable ROI or We Work For Free</span>
          </div>
        </div>

        {/* Hero Interactive Console Preview (Apple / Mobbin Glass Aesthetics) */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="glass-panel-elevated bg-[#0a0a0c]/90 rounded-3xl border border-white/10 p-4 sm:p-6 shadow-2xl relative">
            {/* Top Bar of Console */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="h-4 w-px bg-white/10" />
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                  <span>LargerUp Orchestration Engine v2.4</span>
                </div>
              </div>

              {/* Console Toggle Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono">
                <button
                  onClick={() => setActiveConsoleTab("revenue")}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeConsoleTab === "revenue"
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Revenue Pipeline
                </button>
                <button
                  onClick={() => setActiveConsoleTab("ops")}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeConsoleTab === "ops"
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Operations Flow
                </button>
              </div>
            </div>

            {/* Console Content Stream */}
            <div className="py-5 space-y-3 font-mono text-xs">
              {activeConsoleTab === "revenue" ? (
                <>
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <div>
                        <div className="text-white font-medium">
                          [LEAD_INGESTED] Inbound Demo Request #4089
                        </div>
                        <div className="text-zinc-500 text-[11px] mt-0.5">
                          Enterprise prospect: VP Growth, B2B FinTech ($14M ARR) • Form filled 14s ago
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] text-zinc-400 shrink-0">00:00:14</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <div>
                        <div className="text-white font-medium">
                          [AI_SYNTHESIS] Autonomous ICP Verification & Enrichment
                        </div>
                        <div className="text-zinc-500 text-[11px] mt-0.5">
                          Enriched via Clearbit & LinkedIn APIs • Fit Score: 99.4/100 • Match: High Priority
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] text-zinc-400 shrink-0">00:00:22</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-white mt-1.5 shrink-0 animate-ping" />
                      <div>
                        <div className="text-white font-medium">
                          [ACTION_COMPLETED] Speed-to-Lead Response Dispatched (34s Total Latency)
                        </div>
                        <div className="text-zinc-500 text-[11px] mt-0.5">
                          Hyper-personalized contextual brief sent • Calendar slot booked for 11:30 AM EST tomorrow
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-semibold shrink-0">CONVERTED</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <div>
                        <div className="text-white font-medium">
                          [CONTRACT_SIGNED] Enterprise Master Services Agreement
                        </div>
                        <div className="text-zinc-500 text-[11px] mt-0.5">
                          Client: Apex Logistics ($38M ARR) • DocuSign Webhook Received
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] text-zinc-400 shrink-0">00:00:04</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <div>
                        <div className="text-white font-medium">
                          [AUTO_ONBOARDING] Multi-System Provisioning Executed
                        </div>
                        <div className="text-zinc-500 text-[11px] mt-0.5">
                          Stripe invoice created • Private Slack Connect provisioned • Notion client portal seeded
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] text-zinc-400 shrink-0">00:00:11</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-white mt-1.5 shrink-0 animate-ping" />
                      <div>
                        <div className="text-white font-medium">
                          [LABOR_SAVED] 4.5 Hours of Manual Administrative Overhead Eliminated
                        </div>
                        <div className="text-zinc-500 text-[11px] mt-0.5">
                          All project tokens, permissions, and initial briefs routed with 0 human error
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-semibold shrink-0">AUTOMATED</span>
                  </div>
                </>
              )}
            </div>

            {/* Footer Status Bar */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Deterministic Fault-Tolerant Routing Active</span>
              </div>
              <div>Latency: 38ms • Zero Data Leaks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
