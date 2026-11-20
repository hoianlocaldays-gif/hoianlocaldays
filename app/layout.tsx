import type { Metadata } from "next";
import { Header, Footer } from "@/components/site-shell";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hoianlocaldays.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hoi An Local Days | Local Experiences & Private Cars",
  description: "Discover handpicked Hoi An experiences, book a local cooking class or request a private car with clear rates and local support.",
  alternates: { canonical: "/" },
  openGraph: { title: "Hoi An Local Days | Local Experiences & Private Cars", description: "Discover handpicked Hoi An experiences, book a local cooking class or request a private car with clear rates and local support.", url: "/", siteName: "Hoi An Local Days", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hoi An Local Days" }], type: "website" },
  twitter: { card: "summary_large_image", title: "Hoi An Local Days", description: "Handpicked experiences, private cars and local support in Hoi An.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Analytics /><Header />{children}<Footer /></body></html>; }
