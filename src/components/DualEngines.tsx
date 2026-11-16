"use client";

import React, { useState } from "react";
import { 
  TrendingUp, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Sparkles, 
  Layers, 
  Workflow, 
  Database, 
  Send, 
  Calendar, 
  FileText,
  Boxes
} from "lucide-react";

interface DualEnginesProps {
  onOpenAudit: () => void;
}

export function DualEngines({ onOpenAudit }: DualEnginesProps) {
  const [activeTab, setActiveTab] = useState<"all" | "revenue" | "ops">("all");

  return (
    <section id="revenue-engine" className="py-24 sm:py-32 relative">
      {/* Background Radial Element */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/[0.02] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-white/[0.02] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-zinc-400">
            <span>THE TWO CORE ENGINES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            What We Excel At Distinctively.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            High-ticket enterprises only scale when two variables are solved: capturing every dollar of demand at lightning speed, and eliminating the manual administrative drag that suffocates your leadership.
          </p>
        </div>

        {/* The Two Flagship Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Engine 1: Autonomous Revenue Engine */}
          <div className="glass-panel-elevated bg-[#0a0a0c]/80 rounded-3xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div className="space-y-6">
              {/* Header Badge & Title */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-white" />
                    Pillar 01 • Sales Acceleration
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    The Autonomous Revenue Engine
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300">
                  +142% Pipeline
                </div>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Most high-ticket companies lose 40% of their inbound deals to slow response times and manual sales rep triage. We replace that lag with bespoke, context-trained AI infrastructure that qualifies and books leads before your competitors even open the email.
              </p>

              {/* Core Capabilities */}
              <div className="space-y-3 pt-2">
                {[
                  {
                    title: "Sub-60s Inbound Enrichment & Qualification",
                    desc: "Every inbound lead is enriched via Apollo, Clearbit & LinkedIn in 400ms, scored against your ICP criteria, and tiered automatically.",
                    icon: Database,
                  },
                  {
                    title: "Bespoke Multi-Channel AI SDRs",
                    desc: "Autonomous conversational agents that craft hyper-specific, non-robotic email, SMS, and LinkedIn follow-ups tailored to the lead's exact company profile.",
                    icon: Send,
                  },
                  {
                    title: "Direct Calendar Friction Elimination",
                    desc: "Seamless time-zone-aware scheduling routed dynamically to the exact Account Executive best equipped to close the deal.",
                    icon: Calendar,
                  },
                  {
                    title: "Dormant Pipeline Reactivation",
                    desc: "Algorithmic scans of historical lost deals and stalled opportunities in your CRM, deploying contextual check-ins that resurrect revenue without ad spend.",
                    icon: Workflow,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl glass-panel bg-white/[0.02] border border-white/5 flex items-start gap-3 hover:bg-white/[0.05] transition-colors"
                  >
                    <div className="p-2 rounded-xl bg-white/5 text-zinc-300 shrink-0">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar Action & Proof Metric */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-zinc-500 font-mono">Measurable Impact</div>
                <div className="text-sm font-semibold text-white">
                  3.8x Faster Speed-to-Lead • Zero Stalled Leads
                </div>
              </div>
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-zinc-300 transition-colors group"
              >
                <span>Audit Revenue Leaks</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Engine 2: Operational Drag Elimination Engine */}
          <div id="ops-engine" className="glass-panel-elevated bg-[#0a0a0c]/80 rounded-3xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div className="space-y-6">
              {/* Header Badge & Title */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-white" />
                    Pillar 02 • Operational Drag Elimination
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    The Autonomous Ops Engine
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300">
                  -80% Manual Tasks
                </div>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                High-growth companies frequently choke under their own operational success. We systematically audit, digitize, and automate repetitive administrative workflows—freeing your top talent to focus strictly on strategy, fulfillment, and revenue generation.
              </p>

              {/* Core Capabilities */}
              <div className="space-y-3 pt-2">
                {[
                  {
                    title: "Turnkey Client Onboarding Orchestration",
                    desc: "When a deal is marked closed-won, our pipeline generates custom contracts, provisions client portals, spins up Slack channels, and briefs your team in 15 seconds.",
                    icon: Boxes,
                  },
                  {
                    title: "Cross-Platform Data Synchronization",
                    desc: "Eliminate double-entry between CRM, ERP, accounting, and project management. Bi-directional self-healing API integrations that never break.",
                    icon: Layers,
                  },
                  {
                    title: "Complex Document & Unstructured File Parsing",
                    desc: "Extract mission-critical intelligence from PDFs, invoices, contracts, and audio transcripts with deterministic precision and zero hallucination risk.",
                    icon: FileText,
                  },
                  {
                    title: "Autonomous Executive Briefings & Telemetry",
                    desc: "No more manually compiling weekly KPI spreadsheets. Autonomous synthesis of company metrics delivered directly to executive Slack or email.",
                    icon: Cpu,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl glass-panel bg-white/[0.02] border border-white/5 flex items-start gap-3 hover:bg-white/[0.05] transition-colors"
                  >
                    <div className="p-2 rounded-xl bg-white/5 text-zinc-300 shrink-0">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar Action & Proof Metric */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-zinc-500 font-mono">Measurable Impact</div>
                <div className="text-sm font-semibold text-white">
                  30+ Executive Hours Saved Weekly • Zero Data Errors
                </div>
              </div>
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-zinc-300 transition-colors group"
              >
                <span>Audit Operations Drag</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Hormozi Summary Punchline */}
        <div className="mt-12 text-center p-6 rounded-3xl glass-panel border border-white/10 max-w-3xl mx-auto">
          <p className="text-base sm:text-lg font-medium text-white">
            "We don't sell hours, software seats, or generic templates. We engineer autonomous profit infrastructure. You either capture more high-ticket deals, or you eliminate tens of thousands in payroll waste. <span className="text-zinc-400">Either way, your balance sheet grows.</span>"
          </p>
        </div>
      </div>
    </section>
  );
}
