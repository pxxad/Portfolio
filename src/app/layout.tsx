import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import KonamiCode from "@/components/KonamiCode";
import CursorAura from "@/components/CursorAura";
import Preloader from "@/components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B Prasad · Open Source Contributor & Builder",
  description: "B.Tech IT student at IIIT Lucknow. Building premium web apps, contributing to open source, and solving algorithmic problems.",
  keywords: ["B Prasad", "IIIT Lucknow", "Builder", "Open Source Contributor", "pxxad", "PJB.DEV"],
  authors: [{ name: "B Prasad" }],
  openGraph: {
    title: "B Prasad · Open Source Contributor & Builder",
    description: "B.Tech IT student at IIIT Lucknow. Building premium web apps, contributing to open source, and solving algorithmic problems.",
    url: "https://pbdev.vercel.app",
    siteName: "PJB.DEV Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B Prasad · Open Source Contributor & Builder",
    description: "B.Tech IT student at IIIT Lucknow. Building premium web apps, contributing to open source, and solving algorithmic problems.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans bg-brand-bg text-text-primary">
        <Preloader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <KonamiCode />
        <CursorAura />
      </body>
    </html>
  );
}
