"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeLogos } from "@/components/MarqueeLogos";
import { MetricsBar } from "@/components/MetricsBar";
import { DualEngines } from "@/components/DualEngines";
import { ArchitectureComparison } from "@/components/ArchitectureComparison";
import { RoiCalculator } from "@/components/RoiCalculator";
import { CaseStudies } from "@/components/CaseStudies";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { OfferCta } from "@/components/OfferCta";
import { Footer } from "@/components/Footer";
import { AuditModal } from "@/components/AuditModal";

export default function Home() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  const handleOpenAudit = () => setIsAuditOpen(true);
  const handleCloseAudit = () => setIsAuditOpen(false);

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black relative">
      {/* Background Micro Grid / Texture */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating Glass Navigation */}
      <Navbar onOpenAudit={handleOpenAudit} />

      {/* Hero Section */}
      <Hero onOpenAudit={handleOpenAudit} />

      {/* Marquee Social Proof with Side Blurs & Fades */}
      <MarqueeLogos />

      {/* Undeniable Proof & Authority Metrics */}
      <MetricsBar />

      {/* The Two Distinct Engines (Revenue vs Operations) */}
      <DualEngines onOpenAudit={handleOpenAudit} />

      {/* Enterprise Architecture vs Fragile Zapier */}
      <ArchitectureComparison />

      {/* Interactive Hormozi Value Calculator */}
      <RoiCalculator onOpenAudit={handleOpenAudit} />

      {/* Verified Enterprise Case Studies */}
      <CaseStudies />

      {/* The 3-Step Low-Sacrifice Delivery Roadmap */}
      <Process onOpenAudit={handleOpenAudit} />

      {/* Wall of Founder Proof & Reviews */}
      <Testimonials />

      {/* Targeted Objection-Killing FAQs */}
      <FAQ />

      {/* The Grand Slam Closing Offer & Guarantee */}
      <OfferCta onOpenAudit={handleOpenAudit} />

      {/* Minimalist Gallery Footer */}
      <Footer onOpenAudit={handleOpenAudit} />

      {/* Multi-Step Qualification & Audit Modal */}
      <AuditModal isOpen={isAuditOpen} onClose={handleCloseAudit} />
    </main>
  );
}
