"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Zap, TrendingUp, Clock, Building2 } from "lucide-react";
import { LargerUpLogo } from "./LargerUpLogo";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bottleneck: "",
    revenue: "",
    stack: [] as string[],
    name: "",
    email: "",
    website: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectBottleneck = (value: string) => {
    setFormData({ ...formData, bottleneck: value });
    setStep(2);
  };

  const handleSelectRevenue = (value: string) => {
    setFormData({ ...formData, revenue: value });
    setStep(3);
  };

  const toggleStackItem = (tool: string) => {
    setFormData((prev) => ({
      ...prev,
      stack: prev.stack.includes(tool)
        ? prev.stack.filter((t) => t !== tool)
        : [...prev.stack, tool],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
    }, 900);
  };

  const resetAndClose = () => {
    setStep(1);
    setIsComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl glass-panel-elevated bg-[#0d0d0f] rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-24 bg-white/5 blur-3xl pointer-events-none rounded-full" />

        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <LargerUpLogo size={24} withText={true} />
          
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Line */}
        {!isComplete && (
          <div className="mt-4 mb-6">
            <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono uppercase tracking-wider mb-2">
              <span>Step 0{step} of 04</span>
              <span>
                {step === 1 && "Primary Bottleneck"}
                {step === 2 && "Company Scale"}
                {step === 3 && "Infrastructure"}
                {step === 4 && "Application"}
              </span>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Body Steps */}
        {!isComplete ? (
          <div>
            {/* Step 1: Bottleneck */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                    Where is your business losing the most leverage?
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Select your core bottleneck so we can prepare exact architecture blueprints.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {[
                    {
                      id: "revenue",
                      title: "Revenue & Speed-to-Lead Leakage",
                      desc: "Inbound leads sit untouched for hours. Sales reps spend too much time prospecting instead of closing.",
                      icon: TrendingUp,
                    },
                    {
                      id: "ops",
                      title: "Operational Drag & Manual Grunt Work",
                      desc: "High-paid team members drowning in data entry, onboarding tasks, document synthesis, and manual handoffs.",
                      icon: Clock,
                    },
                    {
                      id: "both",
                      title: "Both (Complete Autonomous Overhaul)",
                      desc: "We need both a 24/7 autonomous sales engine and zero-friction back-office operations.",
                      icon: Zap,
                    },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectBottleneck(option.id)}
                      className="w-full text-left p-4 rounded-2xl glass-panel hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 border border-white/5 flex items-start gap-4 group"
                    >
                      <div className="p-2.5 rounded-xl bg-white/5 text-zinc-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                        <option.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white group-hover:text-white">
                          {option.title}
                        </div>
                        <div className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                          {option.desc}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all self-center" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Revenue Bracket */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                    What is your current monthly revenue?
                  </h3>
                  <p className="text-sm text-zinc-400">
                    We exclusively engineer production systems for businesses that have proven product-market fit.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {[
                    {
                      id: "scale_1",
                      bracket: "$25,000 – $75,000 / month",
                      note: "Looking to scale without proportional headcount costs",
                    },
                    {
                      id: "scale_2",
                      bracket: "$75,000 – $250,000 / month",
                      note: "Need enterprise speed-to-lead and automated operational handoffs",
                    },
                    {
                      id: "scale_3",
                      bracket: "$250,000 – $1M+ / month",
                      note: "Enterprise custom architecture, SOC2 compliance & custom API pipelines",
                    },
                    {
                      id: "scale_pre",
                      bracket: "Under $25,000 / month",
                      note: "Early stage (we will send our free open-source automation playbook)",
                    },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => handleSelectRevenue(tier.bracket)}
                      className="w-full text-left p-4 rounded-2xl glass-panel hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 border border-white/5 flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {tier.bracket}
                        </div>
                        <div className="text-xs text-zinc-400 mt-0.5">
                          {tier.note}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Bottleneck
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Stack */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                    Which tools power your operations today?
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Select all that apply. We integrate invisibly with zero migration required.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  {[
                    "HubSpot",
                    "Salesforce",
                    "Slack",
                    "Notion",
                    "Stripe",
                    "Airtable",
                    "Google Workspace",
                    "Make / Zapier",
                    "Custom REST API",
                    "PostgreSQL / SQL",
                    "Intercom",
                    "Other Custom Stack",
                  ].map((tool) => {
                    const isSelected = formData.stack.includes(tool);
                    return (
                      <button
                        key={tool}
                        type="button"
                        onClick={() => toggleStackItem(tool)}
                        className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-white text-black border-white font-semibold"
                            : "glass-panel text-zinc-300 border-white/5 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {tool}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>

                  <button
                    onClick={() => setStep(4)}
                    className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-all"
                  >
                    <span>Continue to Application</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Contact & Final Application */}
            {step === 4 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                    Where should we deliver your Custom Automation Blueprint?
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Our engineering leads review your stack and respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Hormozi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@acquisition.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                        Company URL
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="https://company.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                      Direct Phone / WhatsApp (For Priority Delivery)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                </div>

                {/* Hormozi Risk Reversal Banner */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    <strong className="text-white">The 30-Day Risk Reversal:</strong> If our engineered architecture does not demonstrably recover at least 20 executive hours/week or add verified pipeline within 30 days, we work 100% free.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-all shadow-md active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Synthesizing Architecture...</span>
                    ) : (
                      <>
                        <span>Submit Application & Claim Audit</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                Application Received & Qualified
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight pt-1">
                Your Custom Automation Blueprint Is Being Generated
              </h3>
              <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-medium">{formData.name || "Founder"}</span>. One of our Senior AI Systems Architects is reviewing your operational bottlenecks and will contact you at <span className="text-white font-medium">{formData.email}</span> within 24 business hours.
              </p>
            </div>

            <div className="p-4 rounded-2xl glass-panel bg-white/[0.02] border border-white/5 max-w-md mx-auto text-left space-y-2 text-xs text-zinc-300">
              <div className="font-semibold text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-zinc-400" />
                <span>Next Steps (Hormozi Protocol):</span>
              </div>
              <ul className="space-y-1.5 text-zinc-400 pl-6 list-disc">
                <li>We analyze your inbound response times and administrative drag.</li>
                <li>We map a live schematic showing where you are losing deals.</li>
                <li>We present the Done-For-You deployment plan with zero upfront friction.</li>
              </ul>
            </div>

            <button
              onClick={resetAndClose}
              className="px-6 py-2.5 text-xs font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
            >
              Back to Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
