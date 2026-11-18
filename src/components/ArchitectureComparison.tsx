"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ArchitectureComparison() {
  const points = [
    {
      title: "When something breaks",
      others: "Freelancers finish a job and leave. When a tool updates and your automations break, nobody is there to fix it.",
      largerUp: "We monitor your automations every single day. If any tool updates or changes, we fix it immediately.",
    },
    {
      title: "Reliability & accuracy",
      others: "Fragile drag-and-drop tools that slow down, send duplicate messages, or drop leads without anyone noticing.",
      largerUp: "Custom-engineered code with built-in safety checks that verifies every task before and after it runs.",
    },
    {
      title: "Your team's effort",
      others: "You spend weeks writing instructions, testing bugs, and trying to manage someone overseas.",
      largerUp: "100% done for you. We study your process, build the automations, test them, and hand you working systems.",
    },
    {
      title: "Data privacy & security",
      others: "Passwords and customer lists get saved in random Google Sheets and unverified third-party apps.",
      largerUp: "Bank-level encryption. Your customer data is private and never used to train public AI models.",
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 border-t border-white/5 bg-[#060608]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Why not hire a freelancer or use basic tools?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Many businesses try to string together automations on their own. Here is why that usually ends in frustration.
          </p>
        </div>

        {/* Comparison Cards using shadcn Cards */}
        <div className="flex flex-col gap-4">
          {points.map((pt, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white/[0.02] border-white/5 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:border-white/10 transition-colors"
            >
              <div className="md:col-span-4">
                <h3 className="text-base font-semibold text-white">
                  {pt.title}
                </h3>
              </div>

              <div className="md:col-span-4 flex items-start gap-2.5 text-xs text-zinc-400">
                <X className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                <span>{pt.others}</span>
              </div>

              <div className="md:col-span-4 flex items-start gap-2.5 text-xs text-zinc-200 font-medium">
                <Check className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{pt.largerUp}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
