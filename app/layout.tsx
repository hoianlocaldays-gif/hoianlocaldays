import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hoi An Local Days | Personal Tours & Cooking Experiences",
  description: "Friendly local tours, cooking classes and custom Central Vietnam experiences. No prepayment—plan directly with a local host.",
  openGraph: {
    title: "Hoi An Local Days",
    description: "Meet Hoi An like a local. No prepayment, personal support.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hoi An Local Days" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoi An Local Days",
    description: "Meet Hoi An like a local. No prepayment, personal support.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
