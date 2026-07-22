import type { Metadata, Viewport } from "next";


import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import KonamiCode from "@/components/KonamiCode";

import Loader from "@/components/Loader";
import ThemeProvider from "@/components/ThemeProvider";
import Cursor from "@/components/Cursor";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prasadjb.me"),
  title: "B. Prasad | B.Tech IT Student @ IIIT Lucknow",
  description: "Portfolio of B. Prasad — B.Tech Information Technology student at IIIT Lucknow, Open Source Contributor, Competitive Programmer, and Full Stack Developer.",
  keywords: ["B Prasad", "IIIT Lucknow", "Builder", "Open Source Contributor", "pxxad", "PJB.DEV"],
  authors: [{ name: "B Prasad" }],
  openGraph: {
    title: "B. Prasad | B.Tech IT Student @ IIIT Lucknow",
    description: "Portfolio of B. Prasad — B.Tech Information Technology student at IIIT Lucknow, Open Source Contributor, Competitive Programmer, and Full Stack Developer.",
    url: "https://prasadjb.me",
    siteName: "PJB.DEV Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B. Prasad | B.Tech IT Student @ IIIT Lucknow",
    description: "Portfolio of B. Prasad — B.Tech Information Technology student at IIIT Lucknow, Open Source Contributor, Competitive Programmer, and Full Stack Developer.",
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
        <ThemeProvider>
          <Cursor />
          <Loader />
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <KonamiCode />
        </ThemeProvider>
      </body>
    </html>
  );
}

