import type { Metadata } from "next";
import {
  BOOKING_CTA_LABEL,
  BOOKING_URL,
  BUSINESS,
  SERVICE_AREAS,
  OG_IMAGES,
  OG_IMAGE_URL,
} from "@/lib/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { Phone, Mail, MapPin, Clock } from "@/components/Icons";

const TITLE = `Book Mobile Car Detailing Overland Park | ${BUSINESS.shortName}`;
const DESCRIPTION = `Book mobile car detailing in Overland Park, KS with ${BUSINESS.shortName}. Pick a time online, or give us a call — we come to your home or office.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/contact",
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

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", url: "/" },
          { label: "Contact", url: "/contact" },
        ])}
      />

      <section style={{ padding: "2.5rem 0 1rem" }}>
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginTop: "1rem",
              marginBottom: "0.75rem",
            }}
          >
            Book your detail
          </h1>
          <p
            style={{
              margin: 0,
              color: "var(--muted)",
              maxWidth: 720,
              lineHeight: 1.65,
              fontSize: "1.0625rem",
            }}
          >
            The fastest way to get on our schedule is to pick a time online. Prefer to talk
            to a person? Give us a call or send an email and we&rsquo;ll take care of it.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary focus-ring"
              style={{ fontSize: "1rem" }}
            >
              {BOOKING_CTA_LABEL}
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "1.5rem 0 4rem" }}>
        <div
          className="container-site"
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          <div className="card">
            <h2 style={{ marginTop: 0, fontSize: "1.1rem", color: "var(--ink)" }}>Phone</h2>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
              <Phone width={18} height={18} style={{ color: "var(--brand-darker)", marginTop: 2, flex: "none" }} />
              <a href={BUSINESS.phoneHref} style={{ fontWeight: 700, color: "var(--ink)" }}>
                {BUSINESS.phone}
              </a>
            </div>
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0, fontSize: "1.1rem", color: "var(--ink)" }}>Email</h2>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
              <Mail width={18} height={18} style={{ color: "var(--brand-darker)", marginTop: 2, flex: "none" }} />
              <a href={`mailto:${BUSINESS.email}`} style={{ color: "var(--foreground)" }}>
                {BUSINESS.email}
              </a>
            </div>
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0, fontSize: "1.1rem", color: "var(--ink)" }}>Hours</h2>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "var(--foreground)" }}>
              <Clock width={18} height={18} style={{ color: "var(--brand-darker)", marginTop: 2, flex: "none" }} />
              <span>{BUSINESS.hours}</span>
            </div>
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0, fontSize: "1.1rem", color: "var(--ink)" }}>
              Where we work
            </h2>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "var(--foreground)", lineHeight: 1.6 }}>
              <MapPin width={18} height={18} style={{ color: "var(--brand-darker)", marginTop: 2, flex: "none" }} />
              <span>
                Serving {BUSINESS.address.city}, {BUSINESS.address.state} and the surrounding
                KC metro — {SERVICE_AREAS.join(", ")}.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
