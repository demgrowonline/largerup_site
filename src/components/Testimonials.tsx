"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function Testimonials() {
  const reviews = [
    {
      quote: "During heatwaves our phone rings non-stop. Before LargerUp, we lost at least a third of callers because our dispatch desk was tied up. Now, the missed-call SMS catches them in 20 seconds and books them directly into ServiceTitan. It paid for itself in week two.",
      author: "Brett Carlson",
      title: "Owner, Apex Heating & Air",
    },
    {
      quote: "Patient no-shows were killing our clinic's margins. The 2-way conversational SMS reminders LargerUp set up cut our no-shows from 28% down to under 10%. Plus, our Instagram ad leads get answered in under 45 seconds while they're still on their phone.",
      author: "Dr. Sarah Lin",
      title: "Medical Director, Radiance Aesthetics",
    },
    {
      quote: "My property coordinators were buried under maintenance calls, re-typing tickets into AppFolio, and chasing contractors. LargerUp automated the entire intake and dispatch flow. We manage 350 units today with less stress than we had at 150.",
      author: "Marcus Sterling",
      title: "Managing Director, Vanguard Property Group",
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-t border-white/5 bg-[#060608]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What business owners say.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Real feedback from owners who wanted more bookings and less repetitive office work.
          </p>
        </div>

        {/* Reviews Grid using shadcn Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <Card
              key={idx}
              className="p-7 rounded-3xl bg-white/[0.02] border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors"
            >
              <CardContent className="p-0">
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  "{rev.quote}"
                </p>
              </CardContent>

              <CardFooter className="p-0 pt-4 border-t border-white/5 flex flex-col items-start">
                <div className="text-xs font-semibold text-white">{rev.author}</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">{rev.title}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
