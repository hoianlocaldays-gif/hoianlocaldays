import type { Metadata } from "next";
import { PrivateCarPage } from "@/components/private-car-page";

export const metadata: Metadata = {
  title: "Private Cars & Airport Transfers | Hoi An Local Days",
  description: "Request a private car from Hoi An for Da Nang Airport, Ba Na Hills, My Son Sanctuary or Hue. Clear vehicle rates and no prepayment required.",
  alternates: { canonical: "/transfer" },
  openGraph: { title: "Private Cars & Airport Transfers | Hoi An Local Days", description: "Clear private-car rates from Hoi An with local confirmation and no prepayment required.", url: "/transfer", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hoi An Local Days" }] },
  twitter: { card: "summary_large_image", title: "Private Cars & Airport Transfers | Hoi An Local Days", description: "Clear private-car rates from Hoi An with local confirmation and no prepayment required.", images: ["/og.png"] },
};

export default function TransferPage() { return <PrivateCarPage />; }
