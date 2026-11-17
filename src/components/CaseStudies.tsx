"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface CaseStudiesProps {
  onOpenAudit?: () => void;
}

export function CaseStudies({ onOpenAudit }: CaseStudiesProps) {
  const examples = [
    {
      industry: "Consulting & High-Ticket Services",
      problem: "Leads submitted a form on the website, but sales reps took an average of 4 hours to reply. Many prospects had already moved on or spoken with another firm.",
      fix: "We set up an automated assistant that immediately reads the inquiry, checks if they qualify, and sends a personal reply inviting them to pick a time on the calendar.",
      outcome: "Replies now go out in under 60 seconds. Meeting booking rates doubled.",
    },
    {
      industry: "Agencies & Professional Firms",
      problem: "Every time a new client signed, the team spent 2 to 3 days manually drafting contracts, chasing invoices, and setting up folders across Slack and Google Drive.",
      fix: "We connected their CRM to their billing and project management tools. When a deal is marked 'won', contracts and folders are created automatically.",
      outcome: "New clients get welcomed in under 3 minutes with zero human effort.",
    },
    {
      industry: "Operations & Logistics",
      problem: "Three full-time employees were spending half their day opening PDF bills and invoices, copying numbers, and pasting them into the accounting software.",
      fix: "We deployed an AI document reader that scans every incoming invoice, checks the numbers against purchase orders, and logs them directly into the database.",
      outcome: "Over 30 hours of boring data entry eliminated each week.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-t border-white/5 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Common problems we solve.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Real examples of how high-ticket businesses use our automations to save time and win more deals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono text-zinc-400">
                  {item.industry}
                </span>

                <div className="space-y-3 text-xs leading-relaxed">
                  <div>
                    <span className="text-zinc-500 font-medium">The problem: </span>
                    <span className="text-zinc-300">{item.problem}</span>
                  </div>

                  <div>
                    <span className="text-zinc-500 font-medium">What we built: </span>
                    <span className="text-zinc-300">{item.fix}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="text-xs font-semibold text-emerald-400">
                  {item.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
