"use client";

import React, { useState, useEffect, useRef } from "react";
import { LargerUpLogo } from "./LargerUpLogo";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenAudit: () => void;
}

export function Navbar({ onOpenAudit }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if page is scrolled past top threshold
      setIsScrolled(currentScrollY > 20);

      // Emil Kowalski scroll-direction reaction:
      // Hide when scrolling down, show immediately with spring when scrolling up
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current && !mobileMenuOpen) {
          // Scrolling down -> hide header
          setIsVisible(false);
        } else {
          // Scrolling up ("heading back") -> show header
          setIsVisible(true);
        }
      } else {
        // Near top -> always visible
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "What we do", href: "#what-we-do" },
    { name: "Industries", href: "#industries" },
    { name: "Why LargerUp", href: "#why-us" },
    { name: "Time calculator", href: "#calculator" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-[#080808]/75 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
          : "bg-[#080808]/40 backdrop-blur-md border-b border-white/5"
      }`}
    >
      {/* Noise Texture Layer (Taste Skill & Hallmark Glass Craft) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative z-10">
        {/* Brand Logo with Emil Kowalski spring hover */}
        <a href="#" className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
          <LargerUpLogo size={26} withText={true} />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-200 relative group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-[-3px] left-0 w-0 h-px bg-white transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
          >
            <span>Book a call</span>
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
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#0c0c0e]/95 backdrop-blur-2xl px-6 py-4 md:hidden flex flex-col gap-3 relative z-10">
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
