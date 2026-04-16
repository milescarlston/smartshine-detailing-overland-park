import type { Metadata } from "next";
import { SERVICES, OG_IMAGES, OG_IMAGE_URL } from "@/lib/constants";
import { ServiceDetail } from "@/components/ServiceDetail";
import { FaqSection } from "@/components/FaqSection";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { EXTERIOR_FAQS } from "@/lib/faqs";

const service = SERVICES.find((s) => s.slug === "exterior-detail")!;

const TITLE = `Exterior Car Detailing Overland Park, KS | SmartShine Mobile Detailing`;
const DESCRIPTION = `Mobile exterior car detailing in Overland Park starting at $125. Hand wash, clay bar, wax, tire dressing & more — right in your driveway. Book a free quote.`;

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
          faqSchema(EXTERIOR_FAQS),
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
      <FaqSection faqs={EXTERIOR_FAQS} />
      <CTASection title="Ready for a fresh-looking exterior?" />
    </>
  );
}
