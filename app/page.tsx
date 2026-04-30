import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BOOKING_CTA_LABEL,
  BOOKING_URL,
  BUSINESS,
  SERVICES,
  SERVICE_AREAS,
  TESTIMONIALS,
  OG_IMAGES,
  OG_IMAGE_URL,
} from "@/lib/constants";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { Check, Phone, Star, MapPin, Clock, Sparkles } from "@/components/Icons";

const TITLE = `Mobile Car Detailing Overland Park, KS | ${BUSINESS.name}`;
const DESCRIPTION = `Professional mobile car detailing in ${BUSINESS.address.city}, ${BUSINESS.address.state}. Interior, exterior, ceramic coating & more — we come to your home or office. Book your free quote today.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
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

const REASONS = [
  {
    title: "We Come to You",
    body: "Home, office, apartment — wherever your car is. Just point to the driveway and we'll handle the rest.",
  },
  {
    title: "Fully Insured Pros",
    body: "Professional equipment, premium products, and trained detailers who treat every car like it's their own.",
  },
  {
    title: "Transparent Pricing",
    body: "Flat-rate packages by vehicle size. No surprises, no upsells, no gotchas.",
  },
  {
    title: "Flexible Scheduling",
    body: "Mornings, evenings, weekends. Book in under 60 seconds and we'll work around your life.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), websiteSchema()]} />

      {/* Hero */}
      <section className="hero-gradient" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container-site hero-text">
          <div className="hero-layout" style={{ display: "grid", gap: "2.5rem", alignItems: "center" }}>
          <div style={{ maxWidth: 760 }}>
            <span
              className="badge"
              style={{
                color: "#fff",
                borderColor: "rgba(245,158,11,0.5)",
                background: "rgba(245,158,11,0.18)",
              }}
            >
              <Sparkles width={14} height={14} /> Mobile service across the KC metro
            </span>
            <h1
              style={{
                fontSize: "clamp(2.125rem, 5.5vw, 3.5rem)",
                lineHeight: 1.08,
                fontWeight: 800,
                marginTop: "1rem",
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              Mobile Car Detailing in {BUSINESS.address.city}, {BUSINESS.address.state}
            </h1>
            <p className="muted" style={{ fontSize: "1.125rem", lineHeight: 1.6, maxWidth: 600 }}>
              {BUSINESS.tagline} Interior, exterior, ceramic coating, and more — right in your driveway.
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginTop: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent focus-ring"
                style={{ fontSize: "1rem" }}
              >
                {BOOKING_CTA_LABEL}
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="btn focus-ring"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.35)",
                }}
              >
                <Phone width={18} height={18} />
                {BUSINESS.phone}
              </a>
            </div>

            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
                alignItems: "center",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem" }}>
                <Star width={18} height={18} style={{ color: "#fbbf24" }} />
                <Star width={18} height={18} style={{ color: "#fbbf24" }} />
                <Star width={18} height={18} style={{ color: "#fbbf24" }} />
                <Star width={18} height={18} style={{ color: "#fbbf24" }} />
                <Star width={18} height={18} style={{ color: "#fbbf24" }} />
                <span style={{ fontWeight: 600, marginLeft: "0.375rem" }}>5-star rated</span>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem" }}>
                <MapPin width={18} height={18} /> Serving {SERVICE_AREAS.slice(0, 3).join(", ")} + more
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem" }}>
                <Clock width={18} height={18} /> Mon-Sat 7am-7pm
              </span>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              aspectRatio: "3 / 4",
              maxHeight: 520,
            }}
          >
            <Image
              src="/images/mercedes-exterior-front.png"
              alt="Freshly detailed Mercedes sedan in a driveway — SmartShine Mobile Detailing"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: "4rem 0", background: "var(--surface)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="badge">Our Services</span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                fontWeight: 800,
                margin: "0.75rem 0",
                letterSpacing: "-0.02em",
              }}
            >
              Detailing packages for every vehicle
            </h2>
            <p style={{ margin: "0 auto", color: "var(--muted)", maxWidth: 640 }}>
              From a quick exterior refresh to a full ceramic coating, we&rsquo;ve got you covered.
              Flat pricing by vehicle size, with no hidden fees.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gap: "1.25rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            }}
          >
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/services" className="btn btn-outline focus-ring">
              See all services
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="badge">Why {BUSINESS.shortName}</span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                fontWeight: 800,
                margin: "0.75rem 0",
                letterSpacing: "-0.02em",
              }}
            >
              Professional results, zero hassle
            </h2>
            <p style={{ margin: "0 auto", color: "var(--muted)", maxWidth: 640 }}>
              We&rsquo;re the easiest way to get your car detailed in {BUSINESS.address.city}. Here&rsquo;s what makes us different.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gap: "1.25rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {REASONS.map((r) => (
              <div key={r.title} className="card">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(14,165,233,0.12)",
                    color: "var(--brand-darker)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  <Check width={22} height={22} />
                </div>
                <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700, color: "var(--ink)" }}>
                  {r.title}
                </h3>
                <p style={{ margin: "0.5rem 0 0", color: "var(--muted)", lineHeight: 1.55 }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "4rem 0", background: "var(--surface)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="badge">How It Works</span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                fontWeight: 800,
                margin: "0.75rem 0",
                letterSpacing: "-0.02em",
              }}
            >
              Three steps to a fresh car
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gap: "1.25rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {[
              { n: "01", t: "Book online or by phone", b: "Pick a service, tell us your vehicle, and choose a time that works for you." },
              { n: "02", t: "We come to you", b: "We arrive with water, power, and everything we need to detail your car on-site." },
              { n: "03", t: "Enjoy a like-new ride", b: "1-5 hours later your car is done. Pay when you're happy with the results." },
            ].map((step) => (
              <div key={step.n} className="card">
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--brand-darker)",
                    opacity: 0.4,
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.n}
                </div>
                <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "var(--ink)" }}>
                  {step.t}
                </h3>
                <p style={{ margin: "0.5rem 0 0", color: "var(--muted)", lineHeight: 1.55 }}>{step.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="badge">Reviews</span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                fontWeight: 800,
                margin: "0.75rem 0",
                letterSpacing: "-0.02em",
              }}
            >
              What our customers say
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gap: "1.25rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.name} className="card">
                <div
                  style={{
                    display: "flex",
                    gap: "0.125rem",
                    marginBottom: "0.75rem",
                    color: "#f59e0b",
                  }}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} width={18} height={18} />
                  ))}
                </div>
                <p style={{ margin: 0, color: "var(--foreground)", lineHeight: 1.6 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
                  <div style={{ fontWeight: 700, color: "var(--ink)" }}>{t.name}</div>
                  <div style={{ color: "var(--muted)" }}>
                    {t.vehicle} · {t.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section style={{ padding: "3rem 0", background: "var(--surface)" }}>
        <div className="container-site" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>
            Serving {BUSINESS.address.city} &amp; the KC metro
          </h2>
          <p style={{ margin: "0 auto 1rem", color: "var(--muted)", maxWidth: 680 }}>
            We detail in these cities and most surrounding communities. Not sure if we come to you?
            <Link href="/contact" style={{ color: "var(--brand-darker)", fontWeight: 600 }}>
              {" "}
              Just ask
            </Link>{" "}
            &mdash; we probably do.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            {SERVICE_AREAS.map((area) => (
              <span key={area} className="badge">
                <MapPin width={12} height={12} /> {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
