import type { Metadata } from "next";
import {
  BUSINESS,
  SERVICES,
  OG_IMAGES,
  OG_IMAGE_URL,
} from "@/lib/constants";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const TITLE = `Auto Detailing Services | ${BUSINESS.name} Overland Park`;
const DESCRIPTION = `Explore our mobile detailing services in Overland Park — exterior wash, interior detail, full detail packages, ceramic coating, and headlight restoration. Starting at $125.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/services",
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

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", url: "/" },
          { label: "Services", url: "/services" },
        ])}
      />

      <section style={{ padding: "2.5rem 0 1.5rem" }}>
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
          />
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginTop: "1rem",
              marginBottom: "0.75rem",
            }}
          >
            Mobile Detailing Services in {BUSINESS.address.city}
          </h1>
          <p style={{ margin: 0, color: "var(--muted)", maxWidth: 720, lineHeight: 1.65, fontSize: "1.0625rem" }}>
            Flat-rate pricing by vehicle size. We bring everything we need to your home or
            office and leave your car looking its best. Pick a service below to see what&rsquo;s
            included and how much it costs.
          </p>
        </div>
      </section>

      <section style={{ padding: "2rem 0 4rem" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gap: "1.25rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which service is right for you?"
        subtitle="Tell us about your vehicle and we'll recommend the best package for your needs and budget."
      />
    </>
  );
}
