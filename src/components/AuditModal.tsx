"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { LargerUpLogo } from "./LargerUpLogo";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    biggestBottleneck: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", website: "", biggestBottleneck: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#0d0d0f] rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <LargerUpLogo size={24} withText={true} />
          <button
            onClick={handleReset}
            className="p-1 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="pt-6 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Book a 15-minute call.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Tell us where your business is losing time or sales. We'll show you how we can automate it.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs text-zinc-300 font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-zinc-300 font-medium mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-zinc-300 font-medium mb-1">
                    Company Website
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="company.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-zinc-300 font-medium mb-1">
                  What is the biggest task eating up your team's time? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. replying to leads slowly, manually onboarding clients, invoice copy-pasting..."
                  value={formData.biggestBottleneck}
                  onChange={(e) => setFormData({ ...formData, biggestBottleneck: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-full bg-white text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors disabled:opacity-50"
              >
                <span>{isSubmitting ? "Sending..." : "Book your 15-minute call"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-center text-zinc-500">
              We'll reply within a few hours with calendar slots that work for you.
            </p>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">
                Request received.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto">
                Thanks, <span className="text-white">{formData.name || "friend"}</span>. We've sent a confirmation to <span className="text-white">{formData.email}</span> and will reach out with calendar times to connect.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
