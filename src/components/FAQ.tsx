"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, ShieldCheck } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Will this disrupt our daily operations or require my team to learn complex software?",
      a: "Zero disruption. This is 100% Done-For-You. We do not force you to migrate to a new complicated SaaS. Our engineers build custom API bridges that connect invisibly into your existing CRM (HubSpot, Salesforce), ERP, Slack, Google Workspace, or custom databases. Your team keeps doing what they do best, while the grunt work simply disappears.",
    },
    {
      q: "Why shouldn't we just hire a cheap freelancer on Upwork or use Zapier/Make?",
      a: "Fragile no-code tools are toys built for simple, low-stakes hobby projects. In a high-ticket business, a silent webhook failure can cost you a $50k deal without anyone noticing. We build production-grade, fault-tolerant infrastructure with custom TypeScript/Python microservices, automated schema validation, dead-letter retry queues, and 24/7 telemetry monitoring.",
    },
    {
      q: "What is your exact 30-Day Risk-Reversal Guarantee?",
      a: "As taught by Alex Hormozi: make an offer so good that clients feel stupid saying no. Here is our guarantee: If our deployed architecture does not recover at least 20 executive hours per week or add verifiable, qualified sales pipeline within 30 days of going live, we continue engineering and maintaining your systems completely free until it does.",
    },
    {
      q: "How secure is our proprietary company and client data?",
      a: "Enterprise-grade and SOC2-ready. We enforce zero LLM training on your proprietary data, private isolated API VPC routing, encrypted environment credential vaults, and role-based access tokens. Your data never touches public training sets or unvetted servers.",
    },
    {
      q: "What minimum revenue or scale is required to work with LargerUp?",
      a: "To guarantee massive ROI, we strictly partner with businesses doing between $500k and $20M+ in annual revenue, with high-ticket transactions ($2,000 to $100,000+ LTV) or organizations with at least 5 full-time operators currently drowning in manual coordination.",
    },
    {
      q: "What is the exact timeline from audit to production launch?",
      a: "14 days flat. Days 1–3 are dedicated to the zero-touch systems audit and architecture design. Days 4–10 are our private staging build and synthetic edge-case testing. Days 11–14 are turn-key deployment and live telemetry hand-off.",
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-zinc-400">
            <HelpCircle className="w-3.5 h-3.5 text-white" />
            <span>TRANSPARENCY & CLARITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Frequently Addressed Questions.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Direct, unfiltered answers regarding our engineering standards, data security, timelines, and the Hormozi performance guarantee.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel-elevated bg-[#0a0a0c]/80 rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                    {faq.q}
                  </span>
                  <div className="p-1.5 rounded-full bg-white/5 text-zinc-400 group-hover:text-white shrink-0 transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-zinc-400 leading-relaxed border-t border-white/5 mt-2 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-500 font-mono">
            Have a custom proprietary database or unique compliance requirement?{" "}
            <a href="#offer" className="text-white underline underline-offset-4 hover:text-zinc-300">
              Mention it in your audit application.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
