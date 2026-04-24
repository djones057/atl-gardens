import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atlgardens.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ATL Community Gardens",
    template: "%s | ATL Community Gardens",
  },
  description:
    "Discover community gardens across Atlanta. Find plots, connect with local gardeners, and get the best gear for your gardening journey.",
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
      "A free directory of Atlanta community gardens, a zone 7b/8a planting calendar, and trusted gear picks.",
    url: siteUrl,
    siteName: "ATL Community Gardens",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATL Community Gardens",
    description:
      "A free directory of Atlanta community gardens, a zone 7b/8a planting calendar, and trusted gear picks.",
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
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
