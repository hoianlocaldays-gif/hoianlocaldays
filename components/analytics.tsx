"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { gaCollectionEnabled, gaMeasurementId, trackPageView } from "@/lib/tracking";

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  if (!gaCollectionEnabled || !gaMeasurementId) return null;
  return <>
    <Script id="hal-ga4-init" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
      window.gtag('js', new Date());
      window.gtag('config', '${gaMeasurementId}', {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
    `}</Script>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" />
  </>;
}
