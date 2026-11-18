"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";

export function MarqueeLogos() {
  const serviceCompanies = [
    {
      name: "Apex Heating & Air",
      niche: "HVAC & Electrical",
      svg: (
        <svg viewBox="0 0 130 32" className="h-5 w-auto fill-current" aria-label="Apex Heating & Air">
          <path d="M6 22L14 6l8 16h-4l-4-8-4 8H6z" />
          <text x="28" y="21" fontFamily="sans-serif" fontSize="14" fontWeight="700" letterSpacing="-0.02em">APEX HVAC</text>
        </svg>
      ),
    },
    {
      name: "Radiance MedSpa",
      niche: "Aesthetics & Clinics",
      svg: (
        <svg viewBox="0 0 160 32" className="h-5 w-auto fill-current" aria-label="Radiance MedSpa">
          <circle cx="10" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="24" y="21" fontFamily="sans-serif" fontSize="13" fontWeight="600" letterSpacing="0.04em">RADIANCE MEDSPA</text>
        </svg>
      ),
    },
    {
      name: "Vanguard Properties",
      niche: "Property Management",
      svg: (
        <svg viewBox="0 0 170 32" className="h-5 w-auto fill-current" aria-label="Vanguard Property Group">
          <path d="M4 8h5l5 14 5-14h5l-7.5 20h-5L4 8z" />
          <text x="28" y="21" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.01em">VANGUARD PROPERTY</text>
        </svg>
      ),
    },
    {
      name: "Sterling Legal Group",
      niche: "Personal Injury & Law",
      svg: (
        <svg viewBox="0 0 140 32" className="h-5 w-auto fill-current" aria-label="Sterling Law Group">
          <path d="M6 10h12v3H6zm0 6h8v3H6zm0 6h12v3H6z" />
          <text x="26" y="21" fontFamily="Georgia, serif" fontSize="14" fontWeight="600">Sterling Law</text>
        </svg>
      ),
    },
    {
      name: "Ironclad Roofing",
      niche: "Roofing & Contracting",
      svg: (
        <svg viewBox="0 0 160 32" className="h-5 w-auto fill-current" aria-label="Ironclad Roofing">
          <path d="M12 4L3 14h4v12h10V14h4L12 4z" />
          <text x="28" y="21" fontFamily="sans-serif" fontSize="13" fontWeight="800" letterSpacing="-0.02em">IRONCLAD ROOFING</text>
        </svg>
      ),
    },
    {
      name: "Coastal Dental Studio",
      niche: "Dental & Healthcare",
      svg: (
        <svg viewBox="0 0 145 32" className="h-5 w-auto fill-current" aria-label="Coastal Dental">
          <circle cx="10" cy="16" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <text x="24" y="21" fontFamily="sans-serif" fontSize="13" fontWeight="600" letterSpacing="-0.01em">Coastal Dental</text>
        </svg>
      ),
    },
    {
      name: "Summit Tax & CPA",
      niche: "Accounting & Tax",
      svg: (
        <svg viewBox="0 0 135 32" className="h-5 w-auto fill-current" aria-label="Summit Tax Advisory">
          <path d="M5 24l7-16 7 16H5z" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="26" y="21" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em">SUMMIT TAX</text>
        </svg>
      ),
    },
    {
      name: "Horizon Insurance",
      niche: "Insurance Brokerage",
      svg: (
        <svg viewBox="0 0 160 32" className="h-5 w-auto fill-current" aria-label="Horizon Insurance">
          <path d="M4 16h20M14 6v20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <text x="30" y="21" fontFamily="sans-serif" fontSize="13" fontWeight="600" letterSpacing="-0.01em">Horizon Insurance</text>
        </svg>
      ),
    },
    {
      name: "Beacon Mortgage",
      niche: "Lending & Finance",
      svg: (
        <svg viewBox="0 0 165 32" className="h-5 w-auto fill-current" aria-label="Beacon Mortgage Partners">
          <path d="M12 5L2 14h4v11h12V14h4L12 5z" />
          <text x="28" y="21" fontFamily="sans-serif" fontSize="13" fontWeight="700">BEACON MORTGAGE</text>
        </svg>
      ),
    },
    {
      name: "Pinnacle Auto Care",
      niche: "Automotive Service",
      svg: (
        <svg viewBox="0 0 155 32" className="h-5 w-auto fill-current" aria-label="Pinnacle Auto Care">
          <rect x="5" y="10" width="16" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="28" y="21" fontFamily="sans-serif" fontSize="13" fontWeight="700">PINNACLE AUTO</text>
        </svg>
      ),
    },
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...serviceCompanies, ...serviceCompanies, ...serviceCompanies];

  return (
    <section className="py-12 border-b border-white/5 bg-[#060608] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-7 text-center">
        <p className="text-xs sm:text-[13px] font-medium text-zinc-500 tracking-tight">
          Automating sales & busywork for service businesses, clinics, and professional firms
        </p>
      </div>

      {/* Marquee Track with Dual Edge Blur / Fade Mask */}
      <div className="relative w-full overflow-hidden">
        {/* Left Blur + Gradient Fade */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 z-20 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #060608 25%, rgba(6, 6, 8, 0.7) 65%, transparent 100%)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        />

        {/* Right Blur + Gradient Fade */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 z-20 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #060608 25%, rgba(6, 6, 8, 0.7) 65%, transparent 100%)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        />

        {/* Scrolling Strip */}
        <div className="flex w-max items-center gap-6 sm:gap-8 animate-marquee py-2 hover:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/5 text-zinc-400 hover:text-white transition-all duration-300 opacity-75 hover:opacity-100 shrink-0 select-none hover:border-white/15"
            >
              <div className="shrink-0">{item.svg}</div>
              <Badge 
                variant="outline" 
                className="text-[10px] font-mono text-zinc-400 border-white/10 uppercase tracking-wider bg-white/[0.04] py-0 px-2 h-4 rounded-full"
              >
                {item.niche}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
