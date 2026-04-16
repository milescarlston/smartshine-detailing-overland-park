import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, SERVICES } from "@/lib/constants";

const TITLE = `Page Not Found | ${BUSINESS.name}`;
const DESCRIPTION = `This page doesn't exist, but we do! ${BUSINESS.shortName} offers professional mobile car detailing in Overland Park, KS. Head back to our homepage or browse our services.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section style={{ padding: "5rem 0" }}>
      <div
        className="container-site"
        style={{ textAlign: "center", maxWidth: 720 }}
      >
        <span className="badge">404</span>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginTop: "1rem",
            marginBottom: "0.75rem",
          }}
        >
          This page doesn&rsquo;t exist — but we do.
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "1.0625rem", lineHeight: 1.6, marginTop: 0 }}>
          You&rsquo;ve wandered off the map. {BUSINESS.shortName} offers professional mobile
          car detailing in {BUSINESS.address.city}, {BUSINESS.address.state}. Head back to
          our homepage or browse our services below.
        </p>
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" className="btn btn-primary focus-ring">
            Go to homepage
          </Link>
          <Link href="/contact" className="btn btn-outline focus-ring">
            Get a Free Quote
          </Link>
        </div>

        <div
          style={{
            marginTop: "3rem",
            display: "grid",
            gap: "0.75rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card focus-ring"
              style={{
                color: "var(--foreground)",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                textAlign: "left",
              }}
            >
              <span style={{ fontWeight: 700, color: "var(--ink)" }}>{s.title}</span>
              <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                Starting at ${s.startingPrice}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
