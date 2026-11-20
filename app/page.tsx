import { ServicesHomePage } from "@/components/services-home-page";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteJsonLd, organizationJsonLd]) }} />
    <ServicesHomePage />
  </>;
}
