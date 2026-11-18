import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://largerup.com"),
  title: "LargerUp | More Sales, Less Busywork with AI",
  description:
    "We build automated AI systems for businesses: reply to leads in seconds to close more sales, and eliminate repetitive busywork for your team. Either way, you make more profit.",
  keywords: [
    "AI Agency",
    "Business Automation",
    "Sales Automation",
    "Lead Reply Automation",
    "High Ticket AI",
    "Workflow Automation",
  ],
  authors: [{ name: "LargerUp" }],
  openGraph: {
    title: "LargerUp | More Sales, Less Busywork with AI",
    description:
      "We set up automated systems that bring you more sales and handle repetitive tasks. Either way, your business makes more money.",
    url: "https://largerup.com",
    siteName: "LargerUp",
    images: [
      {
        url: "/logo-mark.png",
        width: 1200,
        height: 630,
        alt: "LargerUp Mark",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LargerUp | More Sales, Less Busywork with AI",
    description: "Either we bring you more sales or we save your team hours of busywork. Either way, you make more money.",
    images: ["/logo-mark.png"],
  },
  icons: {
    icon: "/logo-mark.svg",
    apple: "/logo-mark.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark scroll-smooth", geistSans.variable, geistMono.variable, "font-sans")}>
      <body className="bg-[#080808] text-white antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
