import type { Metadata } from "next";
import { SERVICES, OG_IMAGES, OG_IMAGE_URL } from "@/lib/constants";
import { ServiceDetail } from "@/components/ServiceDetail";
import { FaqSection } from "@/components/FaqSection";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { HEADLIGHT_FAQS } from "@/lib/faqs";

const service = SERVICES.find((s) => s.slug === "headlight-restoration")!;

const TITLE = `Headlight Restoration Overland Park, KS | SmartShine Mobile Detailing`;
const DESCRIPTION = `Cloudy or yellowed headlights? Headlight restoration in Overland Park starting at $79. Wet sand, polish, and UV sealant. Add to any detail for just $59.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/services/${service.slug}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `/services/${service.slug}`,
    type: "website",
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(HEADLIGHT_FAQS),
          breadcrumbSchema([
            { label: "Home", url: "/" },
            { label: "Services", url: "/services" },
            { label: service.shortTitle, url: `/services/${service.slug}` },
          ]),
        ]}
      />
      <div className="container-site" style={{ paddingTop: "1.5rem" }}>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.shortTitle },
          ]}
        />
      </div>
      <ServiceDetail service={service} />
      <FaqSection faqs={HEADLIGHT_FAQS} />
      <CTASection title="See better. Look sharper." />
    </>
  );
}
