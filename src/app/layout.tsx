import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://largerup.com"),
  title: "LargerUp | Autonomous AI Infrastructure for High-Ticket Enterprises",
  description:
    "We engineer bespoke AI systems for $1M–$20M+ enterprises. Eliminate 80% of operational drag or scale inbound pipeline with sub-60-second speed-to-lead. Either way, you earn.",
  keywords: [
    "AI Agency",
    "High Ticket AI Automation",
    "Bespoke AI Infrastructure",
    "Revenue Automation",
    "Speed to Lead",
    "Operational Drag Elimination",
    "Enterprise AI Systems",
  ],
  authors: [{ name: "LargerUp Engineering" }],
  openGraph: {
    title: "LargerUp | High-Ticket AI Automation & Infrastructure",
    description:
      "Autonomous revenue acceleration and operational drag eradication for modern scale-ups. Engineered to deliver tangible ROI in under 14 days.",
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
    title: "LargerUp | Autonomous AI Infrastructure",
    description: "Either we scale your sales or kill your operational drag. Either way, you earn.",
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
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#080808] text-white antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
