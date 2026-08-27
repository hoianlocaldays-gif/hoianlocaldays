export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hoi An Local Days",
  url: "https://hoianlocaldays.com",
  description: "Local, curated and trustworthy experiences in Hoi An.",
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hoi An Local Days",
  url: "https://hoianlocaldays.com",
};

export const breadcrumbJsonLd = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: item.url })),
});
