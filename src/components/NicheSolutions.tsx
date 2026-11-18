"use client";

import React, { useState } from "react";
import { 
  Wrench, 
  Sparkles, 
  Building2, 
  Scale, 
  Calculator, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Clock, 
  AlertCircle 
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NicheSolutionsProps {
  onOpenAudit: () => void;
}

export function NicheSolutions({ onOpenAudit }: NicheSolutionsProps) {
  const [selectedNiche, setSelectedNiche] = useState("home-services");

  const niches = [
    {
      id: "home-services",
      name: "Home Services",
      shortLabel: "Home Services",
      sub: "HVAC, Plumbing, Roofing, Electrical",
      icon: Wrench,
      headline: "Never lose a high-ticket repair job to a missed call again.",
      problem: "During peak weather, the average HVAC company misses 30% to 40% of incoming calls. Homeowners call down the Google list—if you don't pick up, your competitor gets the job.",
      features: [
        {
          title: "Missed-call SMS text-back in 15 seconds",
          desc: "The second a call goes unanswered, an automated text qualifies the repair and collects their address before they call anyone else.",
        },
        {
          title: "24/7 AI voice receptionist",
          desc: "Answers urgent calls after hours, separates true emergencies from routine tune-ups, and books technicians directly into ServiceTitan or Housecall Pro.",
        },
        {
          title: "Estimate follow-ups & seasonal reminders",
          desc: "Follows up on pending quotes and sends seasonal AC and furnace maintenance reminders to past homeowners automatically.",
        },
        {
          title: "Post-service 5-star Google review requests",
          desc: "Sends a quick review link right when a technician finishes a work order, building your local Google search rank.",
        },
      ],
      result: "Reclaims 30%–40% of missed calls and books jobs automatically.",
      turnaround: "Live in 7 to 10 days",
    },
    {
      id: "clinics-medspa",
      name: "Med Spas & Clinics",
      shortLabel: "Med Spas & Dental",
      sub: "Medical Aesthetics, Dental, Chiropractic, Vet",
      icon: Sparkles,
      headline: "Fill empty treatment chairs and reply to ad leads in under 60 seconds.",
      problem: "Expensive ad leads go cold if not answered within minutes, while last-minute patient no-shows leave expensive clinician hours completely wasted.",
      features: [
        {
          title: "Sub-minute ad lead nurturing",
          desc: "Every Facebook, Instagram, or web ad inquiry gets an immediate, friendly SMS to answer questions and book a consultation while interest is peak.",
        },
        {
          title: "2-way conversational SMS reminders",
          desc: "Interactive reminders that confirm bookings and let patients reschedule with an automated assistant—cutting no-shows drastically.",
        },
        {
          title: "90-day patient reactivation",
          desc: "Scans your CRM for patients who haven't booked in 3 months and sends personalized invitations to schedule their next treatment.",
        },
        {
          title: "Vaccination & care notices for vets",
          desc: "Automatically alerts pet parents when annual vaccines or wellness checkups are due, filling your doctor's calendar on autopilot.",
        },
      ],
      result: "Cuts patient no-shows by up to 65% and books consultations in seconds.",
      turnaround: "Live in 10 to 14 days",
    },
    {
      id: "property-management",
      name: "Property Management",
      shortLabel: "Property Management",
      sub: "Residential & Commercial Real Estate",
      icon: Building2,
      headline: "Automate maintenance intake, vendor dispatch, and lease renewals.",
      problem: "Property managers drown in 2 AM maintenance texts, manual work order entry into software, and chasing tenants for lease renewal signatures.",
      features: [
        {
          title: "24/7 maintenance intake & photo triage",
          desc: "Tenants report issues through an easy chat assistant that gathers unit number, issue details, photos, and urgency level.",
        },
        {
          title: "Direct AppFolio & contractor sync",
          desc: "Logs work orders directly into AppFolio and instantly notifies approved plumbers or electricians for fast repair dispatch.",
        },
        {
          title: "Automated lease renewal & rent reminders",
          desc: "Initiates friendly renewal outreach 60 days before lease expiration and sends scheduled rent reminders without staff manual effort.",
        },
        {
          title: "Vendor coordination & owner updates",
          desc: "Keeps property owners updated on maintenance costs and tracks contractor invoices without endless phone tag.",
        },
      ],
      result: "Saves 20+ hours of coordinator time per week and speeds up repairs.",
      turnaround: "Live in 10 to 14 days",
    },
    {
      id: "law-firms",
      name: "Law Firms",
      shortLabel: "Law Firms",
      sub: "Personal Injury, Immigration, Family Law",
      icon: Scale,
      headline: "Screen high-value cases immediately and stop fielding repetitive update calls.",
      problem: "Attorneys lose valuable hours on unqualified caller inquiries, while existing clients call staff daily just to ask for routine case status updates.",
      features: [
        {
          title: "Smart 24/7 intake screening",
          desc: "Screens prospective clients immediately on injury date, liability, and insurance status before escalating high-value cases to senior attorneys.",
        },
        {
          title: "Automated case milestone updates",
          desc: "Proactively texts and emails clients when their case reaches milestones—cutting inbound status inquiry calls by over 70%.",
        },
        {
          title: "Medical record & document collection",
          desc: "Systematically requests and tracks missing medical records, accident reports, and discovery documentation from providers.",
        },
        {
          title: "Post-settlement review generation",
          desc: "Requests 5-star Google reviews right when clients receive their settlement, building local legal authority.",
        },
      ],
      result: "Filters 100% of intake calls in real time and eliminates status check calls.",
      turnaround: "Live in 10 to 14 days",
    },
    {
      id: "tax-accounting",
      name: "Tax & Accounting",
      shortLabel: "Tax & Accounting",
      sub: "CPAs, Bookkeepers, Tax Advisory",
      icon: Calculator,
      headline: "End tax season chaos: collect client W-2s, 1099s, and statements on autopilot.",
      problem: "Every filing season, accountants waste 30% of their day sending repetitive emails chasing missing tax documents from unorganized clients.",
      features: [
        {
          title: "Automated tax document chasing",
          desc: "Follows up politely and consistently with clients via email and SMS until every required W-2, 1099, and bank statement is uploaded.",
        },
        {
          title: "Tax season call triage & calendar booking",
          desc: "Screens incoming client calls and schedules tax prep consultations directly into CPA calendars based on service tier.",
        },
        {
          title: "Quarterly reminder campaigns",
          desc: "Reminds business clients to submit quarterly receipts and books year-end tax planning sessions automatically.",
        },
        {
          title: "Client portal onboarding",
          desc: "Provisions secure client folders and sends upload links in seconds the moment an engagement letter is signed.",
        },
      ],
      result: "Eliminates weeks of manual document chasing every filing season.",
      turnaround: "Live in 7 to 10 days",
    },
    {
      id: "insurance-mortgage",
      name: "Insurance & Mortgage",
      shortLabel: "Insurance & Mortgage",
      sub: "Independent Brokers & Loan Officers",
      icon: ShieldCheck,
      headline: "Protect policy renewals, follow up quotes, and track borrower documents.",
      problem: "Policies lapse because renewals aren't reviewed in time, unclosed quotes go cold, and mortgage loan approvals stall waiting for borrower paystubs.",
      features: [
        {
          title: "45-day policy renewal alerts",
          desc: "Alerts policyholders 45 days before expiration with renewal options and cross-sell coverage checks before competitors step in.",
        },
        {
          title: "Borrower document tracking",
          desc: "Tracks missing tax returns, W-2s, and bank statements for active mortgage files, sending automated reminder nudges to borrowers.",
        },
        {
          title: "Rate-alert client reactivation",
          desc: "Scans past borrower records and automatically reaches out when refinancing or rate changes can save them money.",
        },
        {
          title: "Quote follow-up sequences",
          desc: "Multi-touch follow-ups that turn delivered insurance quotes into bound policies without manual agent dialing.",
        },
      ],
      result: "Zero lapsed policies without renewal notice and faster mortgage approvals.",
      turnaround: "Live in 7 to 10 days",
    },
  ];

  return (
    <section id="industries" className="py-20 sm:py-28 border-t border-white/5 bg-[#070709] relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Built for your specific business.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            We don't build generic tech experiments. We build proven automations tailored to how service businesses, clinics, and professional firms actually operate.
          </p>
        </div>

        {/* shadcn Tabs Container */}
        <Tabs
          defaultValue="home-services"
          value={selectedNiche}
          onValueChange={setSelectedNiche}
          className="w-full"
        >
          {/* Industry Pill Selector TabsList */}
          <div className="flex justify-start sm:justify-center overflow-x-auto pb-4 scrollbar-none mb-4">
            <TabsList className="bg-white/[0.03] border border-white/5 p-1 rounded-full gap-1 h-auto inline-flex shrink-0">
              {niches.map((item) => {
                const Icon = item.icon;
                return (
                  <TabsTrigger
                    key={item.id}
                    value={item.id}
                    className="rounded-full px-4 py-2 text-xs font-semibold gap-2 transition-all data-active:bg-white data-active:text-black data-active:shadow-md"
                  >
                    <Icon className="size-3.5" />
                    <span>{item.shortLabel}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* Tab Content Panels */}
          {niches.map((currentNiche) => (
            <TabsContent key={currentNiche.id} value={currentNiche.id} className="mt-4 outline-none">
              <Card className="rounded-3xl bg-white/[0.025] border-white/10 p-7 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
                {/* Top row: Niche Title & Turnaround */}
                <CardHeader className="p-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
                  <div>
                    <Badge variant="outline" className="w-fit font-mono text-[11px] text-zinc-400 border-white/10 uppercase tracking-wider mb-2">
                      {currentNiche.sub}
                    </Badge>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                      {currentNiche.headline}
                    </CardTitle>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 shrink-0 self-start sm:self-center font-normal">
                    <Clock className="size-3.5 text-zinc-400" />
                    <span>{currentNiche.turnaround}</span>
                  </Badge>
                </CardHeader>

                {/* Problem Statement Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3.5">
                  <AlertCircle className="size-4 text-zinc-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-zinc-300 block mb-0.5">
                      The Cost of Manual Work:
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {currentNiche.problem}
                    </p>
                  </div>
                </div>

                {/* 4 Exact Features Grid */}
                <CardContent className="p-0 space-y-4">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Exact Automations We Build For You:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentNiche.features.map((feat, fIdx) => (
                      <Card
                        key={fIdx}
                        size="sm"
                        className="p-5 rounded-2xl bg-white/[0.02] border-white/5 flex flex-row items-start gap-3 hover:border-white/10 transition-colors"
                      >
                        <Check className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <div className="text-xs sm:text-sm font-semibold text-white">
                            {feat.title}
                          </div>
                          <div className="text-xs text-zinc-400 leading-relaxed">
                            {feat.desc}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>

                {/* Bottom Card Footer with Outcome & Direct CTA */}
                <CardFooter className="p-0 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-zinc-500">Target Outcome</div>
                    <div className="text-xs sm:text-sm font-semibold text-emerald-400 mt-0.5">
                      {currentNiche.result}
                    </div>
                  </div>

                  <Button
                    onClick={onOpenAudit}
                    size="sm"
                    className="rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-semibold px-5 py-2.5 transition-all shadow-sm"
                  >
                    <span>Automate my {currentNiche.shortLabel}</span>
                    <ArrowRight className="size-3.5 ml-1.5" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Small Niches Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-500">
            Also supporting auto repair shops, physical therapy clinics, logistics & dispatch, and local trade contractors.
          </p>
        </div>
      </div>
    </section>
  );
}
