import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import Atmosphere from "@/components/Atmosphere";
import CookieConsent from "@/components/CookieConsent";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACCINA — Thoughtful gifts, digital assets, and quiet software.",
  description:
    "Made with the awareness that everything changes. What remains is how we care. ACCINA makes thoughtful gifts, digital assets, and quiet software.",
  metadataBase: new URL("https://accina.co"),
  openGraph: {
    title: "ACCINA",
    description: "Made with the awareness that everything changes.",
    url: "https://accina.co",
    siteName: "ACCINA",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-intensity="statement"
      className={`${fraunces.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Atmosphere />
        <ScrollReveal />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
