import type { Metadata } from "next";
import { IBM_Plex_Mono, Outfit } from "next/font/google";

import { CookieConsentProvider } from "@/components/layout/cookie/cookie-consent-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "SMART Framework",
    template: "%s | SMART Framework",
  },
  description:
    "Framework SMART: piattaforma metodologica no-code e AI-native per progettare eventi e framework agentici in modo sicuro, standardizzato e verificabile.",
  keywords: [
    "smart framework",
    "no-code",
    "agenti AI",
    "coding agents",
    "governance AI",
    "framework documentale",
  ],
  openGraph: {
    title: "SMART Framework",
    description:
      "Da input frammentari a processi robusti: standard, sicurezza e AI operativa.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMART Framework",
    description:
      "Framework agentico no-code per progettazione, diffusione e governance operativa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${outfit.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieConsentProvider />
      </body>
    </html>
  );
}
