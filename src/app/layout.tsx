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
  title: "Alternativa simplificada ao Stocky para Shopify",
  description:
    "Ferramenta conceitual de reposição automática simplificada para micro-lojistas Shopify após o fim do Stocky. Validação de experimento Product Lab.",
  keywords: [
    "Stocky alternative",
    "replace Stocky Shopify",
    "Stocky descontinuado",
    "Shopify inventory reorder automation",
    "simple inventory replacement Shopify"
  ],
  openGraph: {
    title: "Alternativa simplificada ao Stocky para Shopify",
    description:
      "Ferramenta conceitual de reposição automática simplificada para micro-lojistas Shopify após o fim do Stocky.",
    type: "website"
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
