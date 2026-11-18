"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CaseStudiesProps {
  onOpenAudit?: () => void;
}

export function CaseStudies({ onOpenAudit }: CaseStudiesProps) {
  const examples = [
    {
      industry: "Home Services (HVAC & Mechanical)",
      client: "Peak Season Call Recovery",
      problem: "During summer heatwaves, the dispatch desk missed 35% of homeowner calls while lines were tied up. Homeowners called the next contractor on Google, losing high-ticket replacement jobs.",
      fix: "We deployed an instant missed-call SMS text-back and an after-hours voice assistant that qualifies emergencies and books technicians directly into ServiceTitan.",
      outcome: "24 emergency jobs recovered in month one. Average response time dropped from 3 hours to 18 seconds.",
    },
    {
      industry: "Aesthetic Clinic & Med Spa",
      client: "Ad Lead Speed & No-Show Reduction",
      problem: "Paid ad leads took hours to receive manual follow-up, causing prospects to cool off. Last-minute no-shows were wasting thousands in empty practitioner chair time each week.",
      fix: "We connected ad campaigns to an instant conversational SMS sequence that answers questions in 40 seconds, plus 2-way interactive confirmation reminders.",
      outcome: "Consultation booking rates increased 2.4x. Patient no-shows dropped by 62%.",
    },
    {
      industry: "Property Management",
      client: "Maintenance Triage & Dispatch",
      problem: "Coordinators spent over 20 hours a week answering repetitive tenant maintenance calls, re-typing details into AppFolio, and chasing contractors for availability.",
      fix: "We created a 24/7 maintenance intake flow that collects photos and urgency signals, auto-logs tickets in AppFolio, and texts pre-approved contractors for urgent repairs.",
      outcome: "Saved 22 hours of weekly coordinator busywork. Work order dispatch time cut from 4 hours to 5 minutes.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-t border-white/5 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Real problems we solve.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Everyday service businesses and clinics use our automations to stop losing leads and eliminate manual busywork.
          </p>
        </div>

        {/* Cards using shadcn Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((item, idx) => (
            <Card
              key={idx}
              className="p-7 rounded-3xl bg-white/[0.02] border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors"
            >
              <CardHeader className="p-0 pb-4 space-y-2">
                <Badge variant="outline" className="w-fit text-[10px] font-mono text-zinc-400 border-white/10">
                  {item.industry}
                </Badge>
                <CardTitle className="text-sm font-semibold text-white">
                  {item.client}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0 space-y-3 text-xs leading-relaxed">
                <div>
                  <span className="text-zinc-500 font-medium">The problem: </span>
                  <span className="text-zinc-300">{item.problem}</span>
                </div>

                <div>
                  <span className="text-zinc-500 font-medium">What we built: </span>
                  <span className="text-zinc-300">{item.fix}</span>
                </div>
              </CardContent>

              <CardFooter className="p-0 pt-4 border-t border-white/5">
                <div className="text-xs font-semibold text-emerald-400">
                  {item.outcome}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
