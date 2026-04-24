import type { Metadata } from "next";
import { IBM_Plex_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atlgardens.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ATL Community Gardens",
    template: "%s | ATL Community Gardens",
  },
  description:
    "A field guide to every community garden in Atlanta. Find plots, join a crew, learn how to grow in zone 7b/8a.",
  keywords: [
    "Atlanta community gardens",
    "Atlanta gardening",
    "community garden plots",
    "Atlanta planting calendar",
    "zone 7b gardening",
    "zone 8a gardening",
    "urban agriculture Atlanta",
  ],
  openGraph: {
    title: "ATL Community Gardens",
    description:
      "A free, hand-kept directory of every community garden across Atlanta, a zone 7b/8a growing calendar, and trusted picks from the Potting Shed.",
    url: siteUrl,
    siteName: "ATL Community Gardens",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATL Community Gardens",
    description:
      "A free, hand-kept directory of every community garden across Atlanta, a zone 7b/8a growing calendar, and trusted picks from the Potting Shed.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plex.variable} ${dmSerif.variable} ${jetBrainsMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
