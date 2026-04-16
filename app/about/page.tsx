import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BUSINESS,
  SERVICE_AREAS,
  OG_IMAGES,
  OG_IMAGE_URL,
} from "@/lib/constants";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { Check, MapPin, Clock, Phone } from "@/components/Icons";

const TITLE = `About ${BUSINESS.shortName} | Mobile Car Detailing in Overland Park, KS`;
const DESCRIPTION = `${BUSINESS.shortName} brings professional car detailing to your door in Overland Park. Learn about our team, our process, and why local customers trust us with their vehicles.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
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

const VALUES = [
  {
    title: "Professional craftsmanship",
    body: "Every detailer on our team is trained on premium products, two-bucket washing, and proper paint-care techniques. No rotary buffers in untrained hands, no harsh chemicals that shorten the life of your finish.",
  },
  {
    title: "Honest pricing",
    body: "Flat rates by vehicle size, published on every service page. If an add-on makes sense for your car, we'll tell you before we start — never after. No surprise upsells, no 'shop fees.'",
  },
  {
    title: "Respect for your time",
    body: "We show up when we say we will. If something changes on our end, you hear from us first. Detailing is a luxury, and the service experience should feel that way too.",
  },
  {
    title: "Local accountability",
    body: "We live and work in the KC metro. When you leave a review, when you call back for a touch-up, when you refer a neighbor — it all matters to us. You're not a ticket number.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", url: "/" },
          { label: "About", url: "/about" },
        ])}
      />

      <section style={{ padding: "2.5rem 0 2rem" }}>
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginTop: "1rem",
              marginBottom: "0.75rem",
            }}
          >
            About {BUSINESS.shortName}
          </h1>
          <p
            style={{
              margin: 0,
              color: "var(--muted)",
              maxWidth: 760,
              lineHeight: 1.65,
              fontSize: "1.0625rem",
            }}
          >
            {BUSINESS.shortName} is a locally-run mobile detailing service based in{" "}
            {BUSINESS.address.city}, {BUSINESS.address.state}. We bring a full detailing setup
            to your home or office so you can skip the trip to the shop and get your car
            looking its best without disrupting your day.
          </p>
        </div>
      </section>

      <section style={{ padding: "2rem 0 3rem" }}>
        <div
          className="container-site"
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "1fr",
          }}
        >
          <div className="card" style={{ padding: "1.75rem" }}>
            <h2 style={{ marginTop: 0, fontSize: "1.5rem", color: "var(--ink)" }}>Our story</h2>
            <div
              className="about-story"
              style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "1fr" }}
            >
              <div className="prose-body">
                <p>
                  We started {BUSINESS.shortName} because we were tired of the detailing
                  experience most people get: drop the car off for a full day, wait around a
                  waiting room, drive home, realize they missed a few spots. We thought there
                  had to be a better way.
                </p>
                <p>
                  So we built a mobile-first detailing business. We come to you, work right in
                  your driveway or parking lot, and you get your car back the same day —
                  usually without ever having to leave the house. Everything else we do flows
                  from that idea: quality equipment, transparent pricing, and detailers who
                  actually care about the result.
                </p>
                <p>
                  Today we serve {BUSINESS.address.city} and most of the KC metro, with hundreds
                  of returning customers who book us every few months for maintenance details
                  and refer us to their friends, family, and coworkers.
                </p>
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: 12,
                  overflow: "hidden",
                  aspectRatio: "16 / 9",
                  border: "1px solid var(--border)",
                }}
              >
                <Image
                  src="/images/mercedes-exterior-rear.png"
                  alt="SmartShine detailing a Mercedes sedan on-site in Overland Park"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <style>{`
              @media (min-width: 768px) {
                .about-story { grid-template-columns: 1fr 1fr !important; }
              }
            `}</style>
          </div>

          <div>
            <h2 style={{ fontSize: "1.375rem", fontWeight: 800, marginTop: 0, marginBottom: "1rem", color: "var(--ink)" }}>
              What we stand for
            </h2>
            <div
              style={{
                display: "grid",
                gap: "1rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              }}
            >
              {VALUES.map((v) => (
                <div key={v.title} className="card">
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "rgba(14,165,233,0.12)",
                      color: "var(--brand-darker)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Check width={20} height={20} />
                  </div>
                  <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 700, color: "var(--ink)" }}>{v.title}</h3>
                  <p style={{ margin: "0.5rem 0 0", color: "var(--muted)", lineHeight: 1.55 }}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: "1.75rem" }}>
            <h2 style={{ marginTop: 0, fontSize: "1.5rem", color: "var(--ink)" }}>
              Where we work &amp; when
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 700, color: "var(--ink)" }}>
                  <MapPin width={18} height={18} style={{ color: "var(--brand-darker)" }} />
                  Service areas
                </div>
                <p style={{ margin: "0.5rem 0 0", color: "var(--foreground)", lineHeight: 1.6 }}>
                  {SERVICE_AREAS.join(", ")}, and most of the surrounding KC metro.
                </p>
              </div>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 700, color: "var(--ink)" }}>
                  <Clock width={18} height={18} style={{ color: "var(--brand-darker)" }} />
                  Hours
                </div>
                <p style={{ margin: "0.5rem 0 0", color: "var(--foreground)", lineHeight: 1.6 }}>
                  {BUSINESS.hours}
                </p>
              </div>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 700, color: "var(--ink)" }}>
                  <Phone width={18} height={18} style={{ color: "var(--brand-darker)" }} />
                  Reach us
                </div>
                <p style={{ margin: "0.5rem 0 0", color: "var(--foreground)", lineHeight: 1.6 }}>
                  <a href={BUSINESS.phoneHref} style={{ color: "var(--brand-darker)", fontWeight: 600 }}>
                    {BUSINESS.phone}
                  </a>
                  <br />
                  <a href={`mailto:${BUSINESS.email}`} style={{ color: "var(--brand-darker)" }}>
                    {BUSINESS.email}
                  </a>
                </p>
              </div>
            </div>
            <div style={{ marginTop: "1.25rem" }}>
              <Link href="/contact" className="btn btn-primary focus-ring">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="See for yourself why our customers keep coming back." />
    </>
  );
}
