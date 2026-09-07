import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reposição simplificada pós-Stocky para Shopify",
  description:
    "Lightweight replenishment and purchase order tool for Shopify merchants after Stocky sunset. H1 validation experiment.",
  keywords: [
    "Stocky alternative",
    "replace Stocky Shopify",
    "Stocky discontinued",
    "Shopify inventory reorder automation",
    "simple inventory replacement Shopify"
  ],
  openGraph: {
    title: "Reposição simplificada pós-Stocky para Shopify",
    description:
      "Lightweight replenishment and purchase order tool for Shopify merchants after Stocky sunset.",
    type: "website"
  },
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en": "/en"
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-zinc-900 antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
