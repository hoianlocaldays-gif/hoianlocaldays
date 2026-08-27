import type { Metadata } from "next";
import { Header, Footer } from "@/components/site-shell";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hoianlocaldays.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hoi An Local Days | Curated Local Experiences",
  description: "Discover curated Hoi An experiences, compare the best fit and book through trusted partners.",
  alternates: { canonical: "/" },
  openGraph: { title: "Hoi An Local Days", description: "Local, curated and trustworthy experiences in Hoi An.", url: "/", siteName: "Hoi An Local Days", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hoi An Local Days" }], type: "website" },
  twitter: { card: "summary_large_image", title: "Hoi An Local Days", description: "Local, curated and trustworthy experiences in Hoi An.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Header />{children}<Footer /></body></html>; }
