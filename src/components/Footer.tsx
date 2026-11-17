"use client";

import React from "react";
import { LargerUpLogo } from "./LargerUpLogo";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#040405] pt-14 pb-12 text-zinc-500 text-xs">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          <div className="space-y-2 max-w-sm">
            <LargerUpLogo size={26} withText={true} />
            <p className="text-zinc-400 text-xs leading-relaxed">
              We build AI automations that bring you more sales and eliminate busywork. Either way, our clients make more profit.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            <a href="#what-we-do" className="text-zinc-400 hover:text-white transition-colors">
              What we do
            </a>
            <a href="#how-it-works" className="text-zinc-400 hover:text-white transition-colors">
              How it works
            </a>
            <a href="#why-us" className="text-zinc-400 hover:text-white transition-colors">
              Why LargerUp
            </a>
            <a href="#calculator" className="text-zinc-400 hover:text-white transition-colors">
              Time calculator
            </a>
            <a href="#faq" className="text-zinc-400 hover:text-white transition-colors">
              FAQ
            </a>
            <a 
              href="mailto:contact@largerup.com" 
              className="text-white hover:text-zinc-300 transition-colors"
            >
              contact@largerup.com
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600">
          <div>
            © {new Date().getFullYear()} LargerUp. All rights reserved.
          </div>
          <div>
            Simple, honest automations that work.
          </div>
        </div>
      </div>
    </footer>
  );
}
