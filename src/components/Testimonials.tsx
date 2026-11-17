"use client";

import React from "react";

export function Testimonials() {
  const reviews = [
    {
      quote: "Before LargerUp, our inbound leads sat in an inbox for hours while our team was busy. Now, leads get a personal reply in under 60 seconds and book right on our calendar before they even look at a competitor.",
      author: "Marcus Vance",
      title: "Founder, Capital Advisory",
    },
    {
      quote: "I used to spend every Sunday evening catching up on client contracts, billing, and project folders. LargerUp automated the whole chain. When a client signs, everything is ready in two minutes without me touching a keyboard.",
      author: "Elena Rostova",
      title: "Managing Partner, B2B Growth Group",
    },
    {
      quote: "They didn't try to sell us complicated software we'd never use. They just connected into the email and CRM tools we already had and made the busywork go away. It paid for itself in the first two weeks.",
      author: "David Sterling",
      title: "Operations Director, Summit Logistics",
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
            Real feedback from founders who wanted more sales and less wasted time.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between space-y-6"
            >
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                "{rev.quote}"
              </p>

              <div className="pt-4 border-t border-white/5">
                <div className="text-xs font-semibold text-white">{rev.author}</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">{rev.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
