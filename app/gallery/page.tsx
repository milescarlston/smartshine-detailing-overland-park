import type { Metadata } from "next";
import Image from "next/image";
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

const BEFORE_AFTER: {
  label: string;
  vehicle: string;
  service: string;
  before: string;
  after: string;
}[] = [
  {
    label: "Interior Detail",
    vehicle: "Sedan",
    service: "Interior Detail",
    before: "/images/sedan-interior-before.png",
    after: "/images/sedan-interior-after.png",
  },
  {
    label: "Interior Detail",
    vehicle: "Truck",
    service: "Interior Detail",
    before: "/images/truck-interior-before.png",
    after: "/images/truck-interior-after.png",
  },
  {
    label: "Interior Detail",
    vehicle: "SUV / Truck",
    service: "Interior Detail",
    before: "/images/suv-interior-before.png",
    after: "/images/suv-interior-after.png",
  },
];

const SINGLES: { label: string; vehicle: string; service: string; src: string }[] = [
  {
    label: "Exterior Detail",
    vehicle: "Mercedes C-Class",
    service: "Exterior Detail",
    src: "/images/mercedes-exterior-front.png",
  },
  {
    label: "Exterior Detail",
    vehicle: "Mercedes C-Class",
    service: "Exterior Detail",
    src: "/images/mercedes-exterior-rear.png",
  },
  {
    label: "Wheel & Tire Detail",
    vehicle: "Mercedes C-Class",
    service: "Full Detail",
    src: "/images/wheel-detail-closeup.png",
  },
];

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
            Swipe through before-and-after results and finished details below.
          </p>
        </div>
      </section>

      {/* Before / After pairs */}
      <section style={{ padding: "1rem 0 2rem" }}>
        <div className="container-site">
          <h2
            style={{
              fontSize: "1.375rem",
              fontWeight: 800,
              marginTop: 0,
              marginBottom: "1.25rem",
              color: "var(--ink)",
            }}
          >
            Before &amp; after
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {BEFORE_AFTER.map((pair, i) => (
              <figure key={i} style={{ margin: 0 }}>
                <div
                  className="gallery-pair"
                  style={{
                    display: "grid",
                    gap: "0.75rem",
                    gridTemplateColumns: "1fr 1fr",
                  }}
                >
                  {[
                    { src: pair.before, tag: "Before" },
                    { src: pair.after, tag: "After" },
                  ].map((img) => (
                    <div
                      key={img.tag}
                      style={{
                        position: "relative",
                        aspectRatio: "4 / 3",
                        borderRadius: 12,
                        overflow: "hidden",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={`${pair.vehicle} interior — ${img.tag.toLowerCase()}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
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
                          background:
                            img.tag === "Before"
                              ? "rgba(0,0,0,0.55)"
                              : "rgba(14,165,233,0.85)",
                          color: "#fff",
                          padding: "0.25rem 0.5rem",
                          borderRadius: 999,
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        {img.tag}
                      </span>
                    </div>
                  ))}
                </div>
                <figcaption
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "0.875rem",
                    color: "var(--muted)",
                  }}
                >
                  {pair.service} — {pair.vehicle}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Individual shots */}
      <section style={{ padding: "1rem 0 3.5rem" }}>
        <div className="container-site">
          <h2
            style={{
              fontSize: "1.375rem",
              fontWeight: 800,
              marginTop: 0,
              marginBottom: "1.25rem",
              color: "var(--ink)",
            }}
          >
            Finished results
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {SINGLES.map((item, i) => (
              <figure
                key={i}
                style={{ margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4 / 3",
                    borderRadius: 12,
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Image
                    src={item.src}
                    alt={`${item.vehicle} — ${item.label}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
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
                      background: "rgba(0,0,0,0.45)",
                      color: "#fff",
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
                      color: "#fff",
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
