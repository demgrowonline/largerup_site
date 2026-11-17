"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What kind of businesses is LargerUp for?",
      a: "Any business that sells high-value services or products, gets regular inquiries, and has a team spending valuable hours on repetitive computer work and follow-ups.",
    },
    {
      q: "Do we have to change the software we already use?",
      a: "No. We connect directly into the tools you already have—like your CRM, Gmail, Outlook, Slack, or spreadsheets. Your team keeps working the exact same way.",
    },
    {
      q: "Will my team have to learn complicated AI tools?",
      a: "No. The automations run quietly in the background. Your team just sees the results: booked meetings on their calendar and tasks completed automatically.",
    },
    {
      q: "How long does it take to set up?",
      a: "Between 7 and 14 days from our first call to live automations running in your business.",
    },
    {
      q: "What is your 30-day guarantee?",
      a: "If our automations don't save your team hours every week or help you close more deals within 30 days of launch, we work for free until they do. No fine print.",
    },
    {
      q: "What happens if a tool updates or an automation stops working?",
      a: "We monitor your automations daily. If a software update happens or an API changes, our engineers fix it immediately at zero cost to you.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Questions & answers.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Simple answers to common questions about how we work.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <div className="text-zinc-400 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
