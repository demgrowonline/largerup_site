"use client";

import React from "react";
import { Check, X, ShieldAlert, ShieldCheck, Cpu } from "lucide-react";

export function ArchitectureComparison() {
  const comparisonRows = [
    {
      feature: "System Reliability & Uptime",
      freelancer: "Brittle Zapier/Make webhooks that fail silently when an API key rotates or payload changes.",
      largerUp: "Deterministic microservices with retry queues, dead-letter storage, and 99.98% monitored uptime.",
    },
    {
      feature: "LLM Output Integrity & Guardrails",
      freelancer: "Generic prompt templates sent to raw endpoints with high hallucination & embarrassing customer risks.",
      largerUp: "Strict JSON schema validation, multi-stage verification loops, and automated guardrail rejection.",
    },
    {
      feature: "Enterprise Security & Privacy",
      freelancer: "Client data passed through third-party no-code servers; shared credentials in Google Sheets.",
      largerUp: "Zero LLM data training, encrypted secret vaults, isolated VPC tunnels, and SOC2-ready compliance.",
    },
    {
      feature: "Integration Depth & Customization",
      freelancer: "Limited to off-the-shelf pre-built connectors; breaks on custom ERP or proprietary databases.",
      largerUp: "Direct custom API endpoints, Postgres/SQL native queries, webhook signatures, and legacy system bridges.",
    },
    {
      feature: "Speed-to-Lead Latency",
      freelancer: "Batch polling intervals (15 to 30 minutes delay, losing prospect momentum).",
      largerUp: "Sub-second event-driven triggers; inbound prospects enriched and engaged in < 42 seconds.",
    },
    {
      feature: "Ongoing Maintenance & SLA",
      freelancer: "Freelancer disappears after initial delivery; you inherit debugging and technical debt.",
      largerUp: "Dedicated engineering team, 24/7 automated telemetry, and continuous performance optimization.",
    },
  ];

  return (
    <section id="architecture" className="py-24 sm:py-32 border-t border-white/5 relative bg-[#060608]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-zinc-400">
            <Cpu className="w-3.5 h-3.5 text-white" />
            <span>ENGINEERED ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Enterprise Infrastructure vs. Fragile No-Code Toys.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            High-ticket deals and mission-critical workflows cannot rest on brittle drag-and-drop automations that break when you scale. Here is why market leaders choose LargerUp.
          </p>
        </div>

        {/* Comparison Matrix Table (Apple / Mobbin Glass Table) */}
        <div className="glass-panel-elevated bg-[#09090b]/90 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 p-6 border-b border-white/10 bg-white/[0.02] text-xs font-mono uppercase tracking-wider">
            <div className="md:col-span-4 text-zinc-400 font-semibold">
              Evaluation Criteria
            </div>
            <div className="md:col-span-4 text-zinc-500 flex items-center gap-1.5 mt-2 md:mt-0">
              <ShieldAlert className="w-3.5 h-3.5 text-zinc-500" />
              <span>Generic Zapier / Freelancer Setup</span>
            </div>
            <div className="md:col-span-4 text-white font-semibold flex items-center gap-1.5 mt-2 md:mt-0">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>LargerUp Autonomous Infrastructure</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white/[0.02] transition-colors gap-4"
              >
                {/* Feature Name */}
                <div className="md:col-span-4">
                  <span className="text-sm font-semibold text-white tracking-tight">
                    {row.feature}
                  </span>
                </div>

                {/* The Fragile Competitor */}
                <div className="md:col-span-4 flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-red-500/10 text-red-400 shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-zinc-400 leading-relaxed">
                    {row.freelancer}
                  </span>
                </div>

                {/* LargerUp Enterprise Spec */}
                <div className="md:col-span-4 flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-zinc-200 leading-relaxed font-medium">
                    {row.largerUp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer */}
          <div className="p-6 bg-white/[0.01] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Built with TypeScript, Python, isolated worker pools & encrypted credential management</span>
            </div>
            <div className="font-mono text-zinc-500">
              Zero Vendor Lock-In • Full Client IP Ownership
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
