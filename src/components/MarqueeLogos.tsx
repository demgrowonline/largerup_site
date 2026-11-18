"use client";

import React from "react";

export function MarqueeLogos() {
  const logos = [
    {
      name: "Cursor",
      svg: (
        <svg viewBox="0 0 120 32" className="h-6 w-auto fill-current" aria-label="Cursor">
          <path d="M12.5 4.5l-8 14 7.5-2.2 4.5 7.2 3.5-2-4.5-7.2 7-1.3-10-8.5z" />
          <text x="32" y="22" fontFamily="sans-serif" fontSize="16" fontWeight="700" letterSpacing="0.05em">CURSOR</text>
        </svg>
      ),
    },
    {
      name: "Duolingo",
      svg: (
        <svg viewBox="0 0 120 32" className="h-6 w-auto fill-current" aria-label="Duolingo">
          <text x="5" y="23" fontFamily="sans-serif" fontSize="21" fontWeight="800" letterSpacing="-0.03em">duolingo</text>
        </svg>
      ),
    },
    {
      name: "Pentagram",
      svg: (
        <svg viewBox="0 0 130 32" className="h-6 w-auto fill-current" aria-label="Pentagram">
          <text x="5" y="23" fontFamily="Georgia, serif" fontSize="22" fontWeight="400" fontStyle="italic" letterSpacing="-0.01em">Pentagram</text>
        </svg>
      ),
    },
    {
      name: "Pinterest",
      svg: (
        <svg viewBox="0 0 120 32" className="h-6 w-auto fill-current" aria-label="Pinterest">
          <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M16 8.5c-4.1 0-7.5 3-7.5 6.8 0 2.5 1.5 4.7 3.6 5.8-.1-.6-.2-1.5 0-2.1l1.4-6c-.3-.7-.5-1.6-.5-2.3 0-2.2 1.3-3.8 2.9-3.8 1.4 0 2 1 2 2.3 0 1.4-.9 3.5-1.3 5.4-.4 1.6.8 3 2.4 3 2.9 0 4.8-3.7 4.8-6.7 0-2.8-1.9-4.8-5.2-4.8z" />
          <text x="36" y="22" fontFamily="sans-serif" fontSize="17" fontWeight="600" letterSpacing="-0.02em">Pinterest</text>
        </svg>
      ),
    },
    {
      name: "Linear",
      svg: (
        <svg viewBox="0 0 110 32" className="h-6 w-auto fill-current" aria-label="Linear">
          <path d="M5.5 19.5L16.2 4.8C16.6 4.3 17.4 4.3 17.8 4.8L28.5 19.5C29 20.2 28.5 21.2 27.7 21.2H6.3C5.5 21.2 5 20.2 5.5 19.5Z" />
          <text x="36" y="22" fontFamily="sans-serif" fontSize="17" fontWeight="600" letterSpacing="-0.02em">Linear</text>
        </svg>
      ),
    },
    {
      name: "Raycast",
      svg: (
        <svg viewBox="0 0 120 32" className="h-6 w-auto fill-current" aria-label="Raycast">
          <rect x="6" y="7" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M10 20l5-5 5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <text x="32" y="22" fontFamily="sans-serif" fontSize="17" fontWeight="600" letterSpacing="-0.02em">Raycast</text>
        </svg>
      ),
    },
    {
      name: "Vercel",
      svg: (
        <svg viewBox="0 0 110 32" className="h-5 w-auto fill-current" aria-label="Vercel">
          <path d="M12 5L22 22H2L12 5Z" />
          <text x="30" y="20" fontFamily="sans-serif" fontSize="16" fontWeight="700" letterSpacing="-0.01em">VERCEL</text>
        </svg>
      ),
    },
    {
      name: "Stripe",
      svg: (
        <svg viewBox="0 0 100 32" className="h-6 w-auto fill-current" aria-label="Stripe">
          <text x="5" y="23" fontFamily="sans-serif" fontSize="22" fontWeight="800" letterSpacing="-0.03em">stripe</text>
        </svg>
      ),
    },
  ];

  // Duplicate list to achieve continuous seamless marquee loop
  const marqueeItems = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 border-b border-white/5 bg-[#060608] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-7 text-center">
        <p className="text-xs sm:text-[13px] font-medium text-zinc-500 tracking-tight">
          Trusted by teams and leaders at
        </p>
      </div>

      {/* Marquee Track with Dual Edge Blur / Fade Mask */}
      <div className="relative w-full overflow-hidden">
        {/* Left Blur + Gradient Fade */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-20 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #060608 20%, rgba(6, 6, 8, 0.7) 60%, transparent 100%)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        />

        {/* Right Blur + Gradient Fade */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-20 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #060608 20%, rgba(6, 6, 8, 0.7) 60%, transparent 100%)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        />

        {/* Scrolling Strip */}
        <div className="flex w-max items-center gap-12 sm:gap-16 animate-marquee py-2 hover:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center text-zinc-500 hover:text-white transition-colors duration-300 opacity-60 hover:opacity-100 shrink-0 select-none"
            >
              {item.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
