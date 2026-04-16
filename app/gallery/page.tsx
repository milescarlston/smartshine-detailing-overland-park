import type { Metadata } from "next";
import { BUSINESS, OG_IMAGES, OG_IMAGE_URL, TESTIMONIALS } from "@/lib/constants";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { Star } from "@/components/Icons";

const TITLE = `Detailing Results & Gallery | ${BUSINESS.shortName} Mobile Detailing Overland Park`;
const DESCRIPTION = `See real before-and-after results from ${BUSINESS.shortName} Mobile Detailing in Overland Park. Exterior details, interior cleanings, ceramic coatings, and more.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/gallery",
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

// TODO: Replace these placeholder gallery tiles with real before/after photos
// from completed jobs. Keep captions focused on vehicle + service.
const ITEMS: { label: string; vehicle: string; service: string; hueA: number; hueB: number }[] = [
  { label: "Before / After", vehicle: "2021 Honda CR-V", service: "Full Detail", hueA: 200, hueB: 220 },
  { label: "Paint Correction", vehicle: "2019 BMW 3 Series", service: "Ceramic Coating", hueA: 210, hueB: 190 },
  { label: "Interior Deep Clean", vehicle: "2018 Ford F-150", service: "Interior Detail", hueA: 30, hueB: 200 },
  { label: "Headlight Restoration", vehicle: "2014 Toyota Camry", service: "Headlights", hueA: 45, hueB: 210 },
  { label: "Exterior Refresh", vehicle: "2022 Tesla Model Y", service: "Exterior Detail", hueA: 195, hueB: 230 },
  { label: "Engine Bay", vehicle: "2020 Jeep Grand Cherokee", service: "Full Detail", hueA: 190, hueB: 40 },
  { label: "Paint Decontamination", vehicle: "2017 Audi Q5", service: "Ceramic Coating", hueA: 210, hueB: 180 },
  { label: "Carpet &amp; Seats", vehicle: "2019 Chevy Tahoe", service: "Interior Detail", hueA: 30, hueB: 200 },
];

function tileStyle(hueA: number, hueB: number): React.CSSProperties {
  return {
    aspectRatio: "4 / 3",
    borderRadius: 12,
    position: "relative",
    overflow: "hidden",
    color: "#fff",
    background: `linear-gradient(135deg, hsl(${hueA} 70% 40%), hsl(${hueB} 80% 28%))`,
    boxShadow: "0 1px 2px rgba(11,18,32,0.06)",
    border: "1px solid var(--border)",
  };
}

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", url: "/" },
          { label: "Gallery", url: "/gallery" },
        ])}
      />

      <section style={{ padding: "2.5rem 0 1.5rem" }}>
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginTop: "1rem",
              marginBottom: "0.75rem",
            }}
          >
            Detailing results we&rsquo;re proud of
          </h1>
          <p style={{ margin: 0, color: "var(--muted)", maxWidth: 720, lineHeight: 1.65, fontSize: "1.0625rem" }}>
            A sampling of recent work from around the {BUSINESS.address.city} area. Every
            car is different, but the bar is the same: clean to the last vent, the last
            seam, the last tire spoke.
          </p>
          <p style={{ marginTop: "0.75rem", fontSize: "0.85rem", color: "var(--muted)", fontStyle: "italic" }}>
            Gallery tiles below are placeholders — we&rsquo;ll replace them with real
            before-and-after photos from recent jobs.
          </p>
        </div>
      </section>

      <section style={{ padding: "1rem 0 3.5rem" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            }}
          >
            {ITEMS.map((item, i) => (
              <figure
                key={i}
                style={{ margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <div style={tileStyle(item.hueA, item.hueB)}>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25), transparent 50%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.25), transparent 55%)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      fontSize: "0.7rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      background: "rgba(0,0,0,0.32)",
                      padding: "0.25rem 0.5rem",
                      borderRadius: 999,
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 10,
                      left: 10,
                      right: 10,
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      textShadow: "0 1px 3px rgba(0,0,0,0.45)",
                    }}
                  >
                    {item.vehicle}
                  </span>
                </div>
                <figcaption style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
                  {item.service}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "3rem 0", background: "var(--surface)" }}>
        <div className="container-site">
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              margin: "0 0 1.5rem",
              color: "var(--ink)",
            }}
          >
            What people say about the work
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card">
                <div style={{ display: "flex", gap: "0.125rem", marginBottom: "0.75rem", color: "#f59e0b" }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} width={18} height={18} />
                  ))}
                </div>
                <p style={{ margin: 0, color: "var(--foreground)", lineHeight: 1.6 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
                  <div style={{ fontWeight: 700, color: "var(--ink)" }}>{t.name}</div>
                  <div style={{ color: "var(--muted)" }}>{t.vehicle} · {t.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Want your car to be our next after photo?" />
    </>
  );
}
