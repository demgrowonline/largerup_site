"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LargerUpLogo } from "./LargerUpLogo";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleReset(); }}>
      <DialogContent className="max-w-lg bg-[#0d0d0f] border-white/10 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
        <DialogHeader className="pb-4 border-b border-white/10 flex flex-col items-start gap-3">
          <LargerUpLogo size={24} withText={true} />
        </DialogHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-2">
            <div>
              <DialogTitle className="text-xl font-bold text-white tracking-tight">
                Book a 15-minute call.
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-zinc-400 mt-1">
                Tell us where your business is losing time or sales. We'll show you how we can automate it.
              </DialogDescription>
            </div>

            <div className="flex flex-col gap-3.5 pt-1">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-300 font-medium">
                  Your Name
                </label>
                <Input
                  type="text"
                  required
                  placeholder="e.g. Brett Carlson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/[0.04] border-white/10 text-xs sm:text-sm text-white placeholder:text-zinc-600 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-300 font-medium">
                    Work Email
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="brett@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-xs sm:text-sm text-white placeholder:text-zinc-600 rounded-xl"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-300 font-medium">
                    Company Website
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="company.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-xs sm:text-sm text-white placeholder:text-zinc-600 rounded-xl"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-300 font-medium">
                  What is the biggest task eating up your team's time? (Optional)
                </label>
                <Textarea
                  rows={2}
                  placeholder="e.g. replying to leads slowly, manually onboarding clients, invoice copy-pasting..."
                  value={formData.biggestBottleneck}
                  onChange={(e) => setFormData({ ...formData, biggestBottleneck: e.target.value })}
                  className="bg-white/[0.04] border-white/10 text-xs sm:text-sm text-white placeholder:text-zinc-600 rounded-xl resize-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                <span>{isSubmitting ? "Sending..." : "Book your 15-minute call"}</span>
                <ArrowRight className="size-4" />
              </Button>
            </div>

            <p className="text-[11px] text-center text-zinc-500">
              We'll reply within a few hours with calendar slots that work for you.
            </p>
          </form>
        ) : (
          <div className="py-8 text-center flex flex-col items-center gap-4">
            <div className="size-12 rounded-full bg-white/10 flex items-center justify-center">
              <CheckCircle2 className="size-6 text-emerald-400" />
            </div>

            <div className="flex flex-col gap-1">
              <DialogTitle className="text-xl font-bold text-white">
                Request received.
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto">
                Thanks, <span className="text-white">{formData.name || "friend"}</span>. We've sent a confirmation to <span className="text-white">{formData.email}</span> and will reach out with calendar times to connect.
              </DialogDescription>
            </div>

            <Button
              onClick={handleReset}
              className="px-6 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200"
            >
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
