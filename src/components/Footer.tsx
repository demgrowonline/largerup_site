"use client";

import React from "react";
import { LargerUpLogo } from "./LargerUpLogo";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#040405] pt-16 pb-12 text-zinc-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <LargerUpLogo size={28} withText={true} />
            <p className="text-zinc-400 text-xs max-w-sm leading-relaxed">
              LargerUp engineers bespoke autonomous AI infrastructure for high-ticket enterprises. We accelerate inbound sales velocity and eradicate operational drag. Either way, our clients earn.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>All Systems Operational • SOC2 Type II Aligned</span>
            </div>
          </div>

          {/* Links Column 1: Engines */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Systems
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#revenue-engine" className="hover:text-white transition-colors">
                  Revenue Engine
                </a>
              </li>
              <li>
                <a href="#ops-engine" className="hover:text-white transition-colors">
                  Ops Elimination
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  Architecture Spec
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  ROI Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Proof & Trust */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Authority
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Targeted FAQs
                </a>
              </li>
              <li>
                <a href="#offer" className="hover:text-white transition-colors">
                  30-Day Guarantee
                </a>
              </li>
              <li>
                <span className="text-zinc-600 cursor-not-allowed">
                  Client Portal (Auth)
                </span>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Contact */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Direct Contact
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Enterprise inquiries, private equity portfolios & partnerships:
            </p>
            <div className="font-mono text-zinc-300">
              <a 
                href="mailto:contact@largerup.com" 
                className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
              >
                contact@largerup.com
              </a>
            </div>
            <div className="text-[11px] text-zinc-500">
              San Francisco, CA • Global High-Ticket Engagements
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600">
          <div>
            © {new Date().getFullYear()} LargerUp Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Terms of Engagement
            </a>
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Security Whitepaper
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
