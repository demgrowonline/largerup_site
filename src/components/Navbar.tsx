"use client";

import React, { useState, useEffect } from "react";
import { LargerUpLogo } from "./LargerUpLogo";
import { ArrowRight, Menu, X, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenAudit: () => void;
}

export function Navbar({ onOpenAudit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Revenue Engine", href: "#revenue-engine" },
    { name: "Ops Elimination", href: "#ops-engine" },
    { name: "Architecture", href: "#architecture" },
    { name: "ROI Calculator", href: "#calculator" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-5 py-3 transition-all duration-300 rounded-full ${
          scrolled
            ? "glass-panel-elevated bg-[#080808]/80 shadow-2xl"
            : "bg-transparent border border-white/5"
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <LargerUpLogo size={28} withText={true} />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs lg:text-[13px] font-medium text-zinc-400 hover:text-white px-3 py-1.5 rounded-full transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-1.5 text-[11px] text-zinc-400 px-2.5 py-1 rounded-full border border-white/5 bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Q1 Slots: 2 Remaining</span>
          </div>

          <button
            onClick={onOpenAudit}
            className="group relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-all duration-200 shadow-sm active:scale-95"
          >
            <span>Claim Audit</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-zinc-400 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 p-6 glass-panel-elevated bg-[#0c0c0e]/95 rounded-3xl border border-white/10 md:hidden flex flex-col gap-4 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white py-2 px-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Accepting $1M+ ARR Clients Only</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
            >
              <span>Claim Free Automation Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
