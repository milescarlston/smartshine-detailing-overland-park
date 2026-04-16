import type { Metadata } from "next";
import { SERVICES, OG_IMAGES, OG_IMAGE_URL } from "@/lib/constants";
import { ServiceDetail } from "@/components/ServiceDetail";
import { FaqSection } from "@/components/FaqSection";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { FULL_DETAIL_FAQS } from "@/lib/faqs";

const service = SERVICES.find((s) => s.slug === "full-detail")!;

const TITLE = `Full Car Detail Overland Park, KS | SmartShine Mobile Detailing`;
const DESCRIPTION = `Our most popular service — full interior and exterior detailing in Overland Park, KS. Starting at $275. Mobile service, we come to you. Book online today.`;

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
          faqSchema(FULL_DETAIL_FAQS),
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
      <ServiceDetail
        service={service}
        heroImage={{
          src: "/images/mercedes-exterior-rear.png",
          alt: "Mercedes detailed inside and out — SmartShine full detail in Overland Park",
        }}
      />
      <FaqSection faqs={FULL_DETAIL_FAQS} />
      <CTASection title="Transform your car inside and out" />
    </>
  );
}
