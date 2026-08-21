import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site-data";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${site.name} | Fire Safety Equipment & Hydrant Systems, Indore`,
  description:
    "Blaze Proof Solution supplies and installs fire extinguishers, fire hydrant systems, fire alarm systems, and PPE across Indore. ISO 9001:2015 certified. Alert Today, Alive Tomorrow.",
  applicationName: site.name,
  keywords: [
    "fire safety equipment Indore",
    "fire hydrant system Indore",
    "fire alarm system installation",
    "fire extinguisher supplier",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-ink font-sans">
        <a
          href="#main-content"
          className="sr-only z-[100] bg-brand-ink px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
