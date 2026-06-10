import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alfredo Home Furniture — Crafted for living, made in Cairo",
  description:
    "Alfredo Home Furniture designs and crafts modern, timeless pieces for the way you live. Discover sofas, beds, dining, and statement pieces from our Cairo atelier.",
  openGraph: {
    title: "Alfredo Home Furniture",
    description:
      "Modern, timeless furniture crafted in Cairo. Sofas, beds, dining and bespoke pieces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
