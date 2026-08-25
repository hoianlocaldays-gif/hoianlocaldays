import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-display", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title: "Hoi An Local Days | Personal Tours & Cooking Experiences",
    description: "Friendly local tours, cooking classes and custom Central Vietnam experiences. No prepayment—plan directly with a local host.",
    openGraph: {
      title: "Hoi An Local Days",
      description: "Meet Hoi An like a local. No prepayment, personal support.",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Hoi An Local Days" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Hoi An Local Days",
      description: "Meet Hoi An like a local. No prepayment, personal support.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${dmSans.variable} ${fraunces.variable}`}>{children}</body></html>;
}
