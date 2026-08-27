export type TrackEvent = "affiliate_click" | "experience_view" | "category_click" | "provider_click" | "plan_day_click" | "whatsapp_click";

export function track(event: TrackEvent, properties: Record<string, string | number | boolean | null>) {
  if (typeof window === "undefined") return;
  const payload = { event, ...properties };
  window.dispatchEvent(new CustomEvent("hoi-an-local-days:track", { detail: payload }));
  const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  if (Array.isArray(dataLayer)) dataLayer.push(payload);
}
