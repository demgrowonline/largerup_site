"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      id: "faq-1",
      q: "What kind of businesses is LargerUp for?",
      a: "We build automations for service businesses, clinics, and professional firms that get regular inquiries and have staff spending valuable time on follow-ups and repetitive admin. We specialize in Home Services (HVAC, plumbing, roofing), Med Spas & Dental clinics, Property Management, Law Firms, Tax & Accounting firms, and Insurance/Mortgage brokers.",
    },
    {
      id: "faq-2",
      q: "Do we have to change the software we already use?",
      a: "No. We connect directly into the tools you already rely on—such as ServiceTitan, Housecall Pro, AppFolio, Clio, QuickBooks, Gmail, Outlook, or your existing CRM. Your staff keeps working the exact same way.",
    },
    {
      id: "faq-3",
      q: "Will my team have to learn complicated AI tools?",
      a: "No. The automations run quietly in the background. Your team simply sees booked jobs on the schedule, missed calls texted back, and repetitive data entry finished automatically.",
    },
    {
      id: "faq-4",
      q: "How long does it take to set up?",
      a: "Between 7 and 14 days from our initial onboarding call to live automations actively running in your business.",
    },
    {
      id: "faq-5",
      q: "What is your 30-day guarantee?",
      a: "If our automations don't save your team hours every week or help you close more jobs within 30 days of launch, we work for free until they do. No fine print.",
    },
    {
      id: "faq-6",
      q: "What happens if a tool updates or an automation stops working?",
      a: "We monitor your automations daily. If a software update happens or an API changes, our engineers fix it immediately at zero cost to you.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Questions & answers.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Simple answers to common questions about how we work.
          </p>
        </div>

        {/* shadcn Accordion */}
        <Accordion className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>
                {faq.q}
              </AccordionTrigger>
              <AccordionContent>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
