import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
// Swap fonts per client here. Any Google Font works: https://fonts.google.com
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { site } from "@/site.config";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-display-face" });
const body = Inter({ subsets: ["latin"], variable: "--font-body-face" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  openGraph: { title: site.seo.title, description: site.seo.description, url: site.url, siteName: site.name, type: "website" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const vars = {
    "--brand-ink": site.colors.ink,
    "--brand-paper": site.colors.paper,
    "--brand-soft": site.colors.soft,
    "--brand-accent": site.colors.accent,
    "--brand-muted": site.colors.muted,
  } as CSSProperties;

  // Local business structured data — helps keep the client's Google presence.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: site.locations.map((l) => ({ "@type": "PostalAddress", streetAddress: l.address })),
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} style={vars}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
