"use client";

import React, { useState } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface RoiCalculatorProps {
  onOpenAudit: () => void;
}

export function RoiCalculator({ onOpenAudit }: RoiCalculatorProps) {
  const [teamSize, setTeamSize] = useState(6);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);

  const formatNumber = (num: number) => num.toLocaleString("en-US");

  // Math: 50 work weeks in a year
  const totalAnnualHours = teamSize * hoursPerWeek * 50;
  const hoursSavedWithAI = Math.round(totalAnnualHours * 0.8);

  return (
    <section id="calculator" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            See how much time your team is losing.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Move the sliders below to see how many hours of repetitive work you can remove from your business.
          </p>
        </div>

        {/* Calculator Box using shadcn Card */}
        <Card className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xl">
          {/* Sliders */}
          <div className="md:col-span-7 flex flex-col gap-7">
            {/* Slider 1 */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-white">Team members doing repetitive work</span>
                <Badge variant="secondary" className="font-mono text-white text-xs bg-white/10 px-2.5 py-0.5 rounded-md">
                  {teamSize} people
                </Badge>
              </div>
              <Slider
                min={1}
                max={30}
                value={[teamSize]}
                onValueChange={(val: any) => setTeamSize(Array.isArray(val) ? val[0] : val)}
                className="w-full py-1"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>1 person</span>
                <span>30 people</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-white">Hours each person spends on busywork per week</span>
                <Badge variant="secondary" className="font-mono text-white text-xs bg-white/10 px-2.5 py-0.5 rounded-md">
                  {hoursPerWeek} hrs / week
                </Badge>
              </div>
              <Slider
                min={2}
                max={25}
                value={[hoursPerWeek]}
                onValueChange={(val: any) => setHoursPerWeek(Array.isArray(val) ? val[0] : val)}
                className="w-full py-1"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>2 hours</span>
                <span>25 hours</span>
              </div>
            </div>

            <p className="text-xs text-zinc-500">
              Includes manual data entry, customer follow-up emails, invoicing, and cross-checking spreadsheets.
            </p>
          </div>

          {/* Results Display using shadcn Card */}
          <Card className="md:col-span-5 p-6 rounded-2xl bg-white/[0.04] border-white/10 flex flex-col gap-4 text-center md:text-left">
            <div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">
                Time lost every year
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mt-1">
                {formatNumber(totalAnnualHours)} hours
              </div>
            </div>

            <div className="pt-3 border-t border-white/10">
              <div className="text-xs text-emerald-400 font-medium">
                Hours you can recover with AI:
              </div>
              <div className="text-2xl font-bold text-white mt-0.5">
                ~{formatNumber(hoursSavedWithAI)} hours / year
              </div>
            </div>

            <Button
              onClick={onOpenAudit}
              className="w-full py-3 px-4 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
            >
              <span>Get these hours back</span>
              <ArrowRight className="size-3.5 ml-1.5" />
            </Button>
          </Card>
        </Card>
      </div>
    </section>
  );
}
