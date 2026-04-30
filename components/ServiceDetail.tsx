import Image from "next/image";
import Link from "next/link";
import {
  BOOKING_CTA_LABEL,
  BOOKING_URL,
  BUSINESS,
  type Service,
  SERVICES,
} from "@/lib/constants";
import { ServiceIcon, Check, Clock, Phone, ArrowRight } from "./Icons";

export function ServiceDetail({
  service,
  heroImage,
}: {
  service: Service;
  heroImage?: { src: string; alt: string };
}) {
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "3rem 0 3rem",
          background: "linear-gradient(180deg, #f1f5f9, transparent)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container-site">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "rgba(14,165,233,0.12)",
                color: "var(--brand-darker)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ServiceIcon name={service.icon} width={28} height={28} />
            </div>
            <span className="badge">{service.shortTitle}</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
              lineHeight: 1.12,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              margin: 0,
              maxWidth: 760,
            }}
          >
            {service.title} in {BUSINESS.address.city}, {BUSINESS.address.state}
          </h1>
          <p
            style={{
              marginTop: "0.875rem",
              color: "var(--muted)",
              lineHeight: 1.65,
              fontSize: "1.0625rem",
              maxWidth: 680,
            }}
          >
            {service.description}
          </p>

          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary focus-ring"
            >
              {BOOKING_CTA_LABEL}
            </a>
            <a href={BUSINESS.phoneHref} className="btn btn-outline focus-ring">
              <Phone width={18} height={18} />
              {BUSINESS.phone}
            </a>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                color: "var(--muted)",
                marginLeft: "0.25rem",
              }}
            >
              <Clock width={16} height={16} /> {service.estimatedTime}
            </span>
          </div>

          {heroImage && (
            <div
              style={{
                marginTop: "2rem",
                position: "relative",
                borderRadius: 14,
                overflow: "hidden",
                aspectRatio: "16 / 9",
                maxWidth: 720,
                border: "1px solid var(--border)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* Features + pricing */}
      <section style={{ padding: "3rem 0" }}>
        <div
          className="container-site"
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "1fr",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              alignItems: "start",
            }}
            className="svc-grid"
          >
            <div>
              <h2 style={{ fontSize: "1.375rem", fontWeight: 800, marginTop: 0, marginBottom: "1rem", color: "var(--ink)" }}>
                What&rsquo;s included
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                {service.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <span
                      style={{
                        flex: "none",
                        marginTop: 2,
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "rgba(14,165,233,0.12)",
                        color: "var(--brand-darker)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Check width={14} height={14} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "1.375rem", fontWeight: 800, marginTop: 0, marginBottom: "1rem", color: "var(--ink)" }}>
                Pricing
              </h2>

              {service.vehicleTiers && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {service.vehicleTiers.map((tier) => (
                    <div
                      key={tier.label}
                      className="card"
                      style={{
                        padding: "1rem 1.25rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 700, color: "var(--ink)" }}>{tier.label}</div>
                        <div style={{ color: "var(--muted)", fontSize: "0.875rem" }}>{tier.description}</div>
                      </div>
                      <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--ink)" }}>
                        ${tier.price}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {service.coatingTiers && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {service.coatingTiers.map((tier) => (
                    <div
                      key={tier.label}
                      className="card"
                      style={{
                        padding: "1rem 1.25rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div style={{ fontWeight: 700, color: "var(--ink)" }}>{tier.label}</div>
                      <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--ink)" }}>
                        ${tier.price}
                      </div>
                    </div>
                  ))}
                  <p style={{ color: "var(--muted)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                    Pricing reflects standard sedans. Larger vehicles add 15-25% based on size.
                  </p>
                </div>
              )}

              {service.standalonePricing && (
                <div
                  style={{
                    display: "grid",
                    gap: "0.75rem",
                    gridTemplateColumns: "1fr 1fr",
                  }}
                >
                  <div className="card" style={{ textAlign: "center" }}>
                    <div style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Standalone</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--ink)" }}>
                      ${service.standalonePricing.standalone}
                    </div>
                  </div>
                  <div className="card" style={{ textAlign: "center" }}>
                    <div style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Add-on to any detail</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--ink)" }}>
                      ${service.standalonePricing.addon}
                    </div>
                  </div>
                </div>
              )}

              {service.savings && (
                <p
                  style={{
                    marginTop: "0.875rem",
                    padding: "0.625rem 0.875rem",
                    borderRadius: 8,
                    background: "rgba(245,158,11,0.12)",
                    color: "#92400e",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  {service.savings}
                </p>
              )}

              {service.addOns && service.addOns.length > 0 && (
                <div style={{ marginTop: "1.5rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 0.5rem", color: "var(--ink)" }}>
                    Popular add-ons
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    {service.addOns.map((a) => (
                      <li
                        key={a.name}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "1rem",
                          fontSize: "0.9375rem",
                          paddingBottom: "0.375rem",
                          borderBottom: "1px dashed var(--border)",
                        }}
                      >
                        <span>{a.name}</span>
                        <span style={{ fontWeight: 700, color: "var(--ink)" }}>+${a.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 840px) {
            .svc-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Related */}
      <section style={{ padding: "2.5rem 0", background: "var(--surface)" }}>
        <div className="container-site">
          <h2 style={{ fontSize: "1.375rem", fontWeight: 800, margin: "0 0 1.25rem", color: "var(--ink)" }}>
            Other services you might like
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            }}
          >
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="card focus-ring"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  color: "var(--foreground)",
                }}
              >
                <div style={{ fontWeight: 700, color: "var(--ink)" }}>{r.title}</div>
                <div style={{ color: "var(--muted)", fontSize: "0.9rem", flex: 1 }}>
                  Starting at ${r.startingPrice}
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    color: "var(--brand-darker)",
                    fontWeight: 600,
                  }}
                >
                  Learn more <ArrowRight width={16} height={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
