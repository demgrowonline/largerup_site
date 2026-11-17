"use client";

import React from "react";
import { LargerUpLogo } from "./LargerUpLogo";
import PushpinTearFooter, { IconLink, FooterColumn } from "./ui/pushpin-tear-footer";

interface FooterProps {
  onOpenAudit?: () => void;
}

export function Footer({ onOpenAudit }: FooterProps) {
  const handleConsultation = (e?: React.MouseEvent) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onOpenAudit) {
      onOpenAudit();
    } else {
      const el = document.getElementById("offer");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const columns: FooterColumn[] = [
    {
      title: "explore",
      links: [
        { label: "What We Do", href: "#what-we-do" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Time Calculator", href: "#calculator" },
      ],
      cta: {
        label: "consultation.",
        href: "#offer",
        onClick: handleConsultation,
      },
    },
    {
      title: "studio",
      links: [
        { label: "Why Us", href: "#why-us" },
        { label: "Reviews", href: "#why-us" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: {
        label: "whatsapp.",
        href: "https://wa.me/917980817657?text=Hi%20LargerUp%20team,%20I%20came%20from%20your%20website.%20I%20would%20like%20to%20know%20more%20about%20your%20automations!",
      },
    },
  ];

  const socials: IconLink[] = [
    {
      icon: "chat",
      label: "WhatsApp",
      href: "https://wa.me/917980817657?text=Hi%20LargerUp%20team,%20I%20came%20from%20your%20website.%20I%20would%20like%20to%20know%20more%20about%20your%20automations!",
    },
    {
      icon: "mail",
      label: "Email Inquiries",
      href: "mailto:thelargerup@gmail.com",
    },
  ];

  const sideLinks: IconLink[] = [
    { icon: "shield", label: "privacy policy", href: "#" },
    { icon: "doc", label: "terms of service", href: "#" },
  ];

  return (
    <div className="w-full mt-10 sm:mt-16 overflow-hidden">
      <PushpinTearFooter
        brand="LargerUp"
        name="LargerUp"
        logo={
          <div className="flex items-center gap-2.5 select-none">
            <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center p-1.5 shadow-sm">
              <LargerUpLogo className="w-full h-full text-black" size={20} withText={false} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">LargerUp</span>
          </div>
        }
        logoHref="#"
        email="thelargerup@gmail.com"
        newsletter={{
          label: "get business automation updates",
          placeholder: "your@company.com",
        }}
        status={{
          label: "open for consultations",
          href: "#offer",
          onClick: handleConsultation,
        }}
        mark="LARGERUP / 2026"
        timeZone="Asia/Kolkata"
        timeLabel="IST"
        columns={columns}
        socials={socials}
        sideLinks={sideLinks}
        chat={{
          label: "say hi on whatsapp",
          href: "https://wa.me/917980817657?text=Hi%20LargerUp%20team,%20I%20came%20from%20your%20website.%20I%20would%20like%20to%20know%20more%20about%20your%20automations!",
        }}
        copyright={`© ${new Date().getFullYear()} LargerUp. All rights reserved.`}
        credit="AI Automation & Sales Engine"
        handle={{
          label: "largerup.com",
          href: "https://largerup.com",
        }}
        sheet="#141414"
        sheetInk="#ffffff"
        paper="#ffffff"
        paperInk="#141414"
        seed={42}
        height="min(860px, 100svh)"
        fontSans="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      />
    </div>
  );
}
