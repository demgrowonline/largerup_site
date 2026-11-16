"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, DollarSign, Clock, TrendingUp, Sparkles } from "lucide-react";

interface RoiCalculatorProps {
  onOpenAudit: () => void;
}

export function RoiCalculator({ onOpenAudit }: RoiCalculatorProps) {
  const [teamSize, setTeamSize] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(65);
  const [monthlyLeads, setMonthlyLeads] = useState(60);
  const [dealValue, setDealValue] = useState(12000);

  const formatNumber = (num: number) => num.toLocaleString("en-US");

  // Math:
  // Operational Drag: Each employee spends ~12 hrs/week on repetitive manual tasks
  // Hours saved = teamSize * 12 * 50 weeks * 0.75 (75% automation capture)
  const annualHoursSaved = Math.round(teamSize * 12 * 50 * 0.75);
  const annualPayrollSavings = Math.round(annualHoursSaved * hourlyRate);

  // Revenue Engine: Faster speed-to-lead and reactivation increases lead conversion by ~18%
  // Additional closed deals per year = monthlyLeads * 12 * 0.05 (conservative 5% net lift in deals)
  const additionalDeals = Math.round(monthlyLeads * 12 * 0.05);
  const additionalPipelineRevenue = Math.round(additionalDeals * dealValue);

  const totalEconomicAdvantage = annualPayrollSavings + additionalPipelineRevenue;

  return (
    <section id="calculator" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-zinc-400">
            <Calculator className="w-3.5 h-3.5 text-white" />
            <span>THE ECONOMIC MATH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Calculate Your Untapped Automation Leverage.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Move the sliders to model the direct financial impact of eliminating manual administrative drag and deploying autonomous sub-60-second speed-to-lead.
          </p>
        </div>

        {/* Interactive Calculator Surface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Sliders Input Panel */}
          <div className="lg:col-span-7 glass-panel-elevated bg-[#0a0a0c]/80 rounded-3xl border border-white/10 p-6 sm:p-8 space-y-8">
            <div className="space-y-6">
              {/* Slider 1: Team Size */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-white">Operations / Sales Team Size</span>
                  <span className="font-mono text-white px-2.5 py-1 rounded-lg bg-white/10 text-xs font-bold">
                    {teamSize} people
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>2 team members</span>
                  <span>50 team members</span>
                </div>
              </div>

              {/* Slider 2: Hourly Cost */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-white">Avg. Employee Cost / Hour (Fully Loaded)</span>
                  <span className="font-mono text-white px-2.5 py-1 rounded-lg bg-white/10 text-xs font-bold">
                    ${hourlyRate} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="200"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>$30/hr</span>
                  <span>$200/hr</span>
                </div>
              </div>

              {/* Slider 3: Monthly Inbound Leads */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-white">Monthly Inbound Leads / Opportunities</span>
                  <span className="font-mono text-white px-2.5 py-1 rounded-lg bg-white/10 text-xs font-bold">
                    {monthlyLeads} leads / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>10 leads</span>
                  <span>300 leads</span>
                </div>
              </div>

              {/* Slider 4: Deal Value */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-white">Avg. High-Ticket Deal Size (LTV)</span>
                  <span className="font-mono text-white px-2.5 py-1 rounded-lg bg-white/10 text-xs font-bold">
                    ${formatNumber(dealValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="60000"
                  step="1000"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>$2,000</span>
                  <span>$60,000+</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-zinc-400 border-t border-white/5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>Calculated using verified benchmark data from 40+ high-ticket deployments.</span>
            </div>
          </div>

          {/* Results Output Card */}
          <div className="lg:col-span-5 glass-panel-elevated bg-[#0e0e12] rounded-3xl border border-white/15 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.04] blur-3xl pointer-events-none rounded-full" />

            <div className="space-y-6 relative z-10">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  Projected Annual Enterprise Value
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                  ${formatNumber(totalEconomicAdvantage)}
                </div>
                <p className="text-xs text-emerald-400 font-mono font-medium">
                  + Direct ROI within 30 days of production launch
                </p>
              </div>

              {/* Sub Metrics Breakdown */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-zinc-400" />
                    <div>
                      <div className="text-xs text-zinc-400">Annual Hours Reclaimed</div>
                      <div className="text-sm font-bold text-white">
                        {formatNumber(annualHoursSaved)} hours / yr
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 font-medium">
                    ${formatNumber(annualPayrollSavings)} Saved
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <TrendingUp className="w-4 h-4 text-zinc-400" />
                    <div>
                      <div className="text-xs text-zinc-400">Added High-Ticket Pipeline</div>
                      <div className="text-sm font-bold text-white">
                        +{additionalDeals} Closed Deals / yr
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-emerald-400 font-medium">
                    +${formatNumber(additionalPipelineRevenue)}
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-8 relative z-10 space-y-3">
              <button
                onClick={onOpenAudit}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-xl active:scale-95 group"
              >
                <span>Claim Audit & Lock In ROI</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-center text-zinc-400">
                Zero upfront commitment. Includes custom technical blueprint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
