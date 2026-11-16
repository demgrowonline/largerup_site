"use client";

import React from "react";
import { TrendingUp, Clock, Zap, ShieldCheck } from "lucide-react";

export function MetricsBar() {
  const metrics = [
    {
      label: "Client Pipeline Generated",
      value: "$34.2M+",
      description: "Direct revenue pipeline attributed to bespoke autonomous lead capture & AI SDR systems.",
      icon: TrendingUp,
    },
    {
      label: "Operational Hours Eliminated",
      value: "48,200+",
      description: "Back-office and administrative time given directly back to founders and executive teams.",
      icon: Clock,
    },
    {
      label: "Average Speed-to-Lead",
      value: "< 42 sec",
      description: "From raw form submission or inbound inquiry to qualified meeting booked on calendar.",
      icon: Zap,
    },
    {
      label: "Enterprise Uptime",
      value: "99.98%",
      description: "SOC2-ready resilient infrastructure with deterministic fallbacks and zero data leaks.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass-panel hover:bg-white/[0.04] transition-all duration-300 border border-white/5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                    Metric 0{index + 1}
                  </span>
                  <item.icon className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-zinc-200 mb-1">
                  {item.label}
                </div>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed mt-2 border-t border-white/5 pt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
