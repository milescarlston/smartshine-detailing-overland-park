import type { Metadata } from "next";
import { SERVICES, OG_IMAGES, OG_IMAGE_URL } from "@/lib/constants";
import { ServiceDetail } from "@/components/ServiceDetail";
import { FaqSection } from "@/components/FaqSection";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { CERAMIC_COATING_FAQS } from "@/lib/faqs";

const service = SERVICES.find((s) => s.slug === "ceramic-coating")!;

const TITLE = `Ceramic Coating Overland Park, KS | SmartShine Mobile Detailing`;
const DESCRIPTION = `Professional ceramic coating in Overland Park starting at $449. 1-year, 3-year, and 5-year protection options. Includes full detail and paint prep. Get a quote.`;

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
          faqSchema(CERAMIC_COATING_FAQS),
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
          src: "/images/wheel-detail-closeup.png",
          alt: "Glossy wheel and tire after ceramic coating prep — SmartShine in Overland Park",
        }}
      />
      <FaqSection faqs={CERAMIC_COATING_FAQS} />
      <CTASection title="Protect your paint for years" />
    </>
  );
}
