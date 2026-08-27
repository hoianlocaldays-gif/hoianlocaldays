export type PageType = "homepage" | "discovery" | "planning" | "commercial" | "trust";
export type TrackEvent = "page_view" | "internal_cta_click" | "affiliate_click";

type Gtag = (command: "event", eventName: string, properties: Record<string, string | number | boolean | null>) => void;
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: Gtag;
  __halLastPageViewPath?: string;
};

export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const analyticsDebug = process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true";
export const gaCollectionEnabled = process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true" && Boolean(gaMeasurementId);

export function getPageType(pathname: string): PageType {
  if (pathname === "/") return "homepage";
  if (pathname === "/things-to-do-in-hoi-an") return "discovery";
  if (["/3-days-in-hoi-an", "/hoi-an-with-kids"].includes(pathname)) return "planning";
  if (["/cooking-classes-hoi-an", "/basket-boat-hoi-an", "/my-son-tours-from-hoi-an"].includes(pathname)) return "commercial";
  if (["/editorial-methodology", "/affiliate-disclosure", "/privacy-policy", "/terms"].includes(pathname)) return "trust";
  return "discovery";
}

export function track(event: TrackEvent, properties: Record<string, string | number | boolean | null>) {
  if (typeof window === "undefined") return;
  const payload = { event, ...properties };
  window.dispatchEvent(new CustomEvent("hoi-an-local-days:track", { detail: payload }));
  if (analyticsDebug) console.info(`[HAL Analytics] ${JSON.stringify(payload)}`);
  if (!gaCollectionEnabled) return;
  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? [];
  analyticsWindow.gtag = analyticsWindow.gtag ?? ((...args) => analyticsWindow.dataLayer!.push(args));
  analyticsWindow.gtag("event", event, properties);
}

export function trackPageView(pathname: string) {
  if (typeof window === "undefined") return;
  const analyticsWindow = window as AnalyticsWindow;
  if (analyticsWindow.__halLastPageViewPath === pathname) return;
  analyticsWindow.__halLastPageViewPath = pathname;
  track("page_view", { page_path: pathname, page_type: getPageType(pathname) });
}
