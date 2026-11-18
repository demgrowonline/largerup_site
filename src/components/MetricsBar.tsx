"use client";

import React from "react";
import { Zap, ShieldCheck, Clock, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";

export function MetricsBar() {
  const commitments = [
    {
      title: "Under 60-second replies",
      desc: "New leads get an answer before they leave your site or look at a competitor.",
      icon: Zap,
    },
    {
      title: "Keep your current tools",
      desc: "No new software for your team to learn. We plug into your existing email and CRM.",
      icon: RefreshCw,
    },
    {
      title: "Up and running in 14 days",
      desc: "From our first conversation to live automations handling your work.",
      icon: Clock,
    },
    {
      title: "30-day guarantee",
      desc: "If it doesn't clearly save you time or bring you sales, we work for free until it does.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {commitments.map((item, index) => (
            <Card
              key={index}
              size="sm"
              className="p-5 rounded-2xl bg-white/[0.02] border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <item.icon className="size-4 text-white" />
                <h3 className="text-xs font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
