"use client";

import React, { useState } from "react";
import { LargerUpLogo } from "./LargerUpLogo";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenAudit: () => void;
}

export function Navbar({ onOpenAudit }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "What we do", href: "#what-we-do" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Why LargerUp", href: "#why-us" },
    { name: "Time calculator", href: "#calculator" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080808]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2">
          <LargerUpLogo size={26} withText={true} />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-colors active:scale-95"
          >
            <span>Book a call</span>
            <ArrowRight className="w-3.5 h-3.5" />
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
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#0c0c0e] px-6 py-4 md:hidden flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-zinc-300 hover:text-white py-1.5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-2.5 text-xs font-semibold text-black bg-white rounded-full flex items-center justify-center gap-2"
            >
              <span>Book a call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
