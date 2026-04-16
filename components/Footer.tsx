import Link from "next/link";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/constants";
import { Monogram } from "./Monogram";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "#0b1220",
        color: "#d8dee9",
        marginTop: "4rem",
      }}
    >
      <div className="container-site" style={{ padding: "3rem 1.25rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
          }}
        >
          <div>
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem" }}
              aria-label={`${BUSINESS.name} home`}
            >
              <Monogram size={40} />
              <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#fff" }}>
                {BUSINESS.shortName}
              </span>
            </Link>
            <p style={{ marginTop: "0.75rem", lineHeight: 1.6, color: "#9aa5b5" }}>
              Mobile car detailing serving {BUSINESS.address.city} and the
              surrounding Kansas City metro. We come to you.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="focus-ring"
                style={{ color: "#cbd5e1" }}
              >
                <Facebook width={22} height={22} />
              </a>
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="focus-ring"
                style={{ color: "#cbd5e1" }}
              >
                <Instagram width={22} height={22} />
              </a>
            </div>
          </div>

          <div>
            <h3 style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} style={{ color: "#cbd5e1" }}>
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Company
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><Link href="/about" style={{ color: "#cbd5e1" }}>About Us</Link></li>
              <li><Link href="/gallery" style={{ color: "#cbd5e1" }}>Gallery</Link></li>
              <li><Link href="/blog" style={{ color: "#cbd5e1" }}>Blog</Link></li>
              <li><Link href="/contact" style={{ color: "#cbd5e1" }}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Contact
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem", color: "#cbd5e1" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                <Phone width={18} height={18} style={{ marginTop: 2, flex: "none" }} />
                <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                <Mail width={18} height={18} style={{ marginTop: 2, flex: "none" }} />
                <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                <MapPin width={18} height={18} style={{ marginTop: 2, flex: "none" }} />
                <span>
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                <Clock width={18} height={18} style={{ marginTop: 2, flex: "none" }} />
                <span>{BUSINESS.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: "2.25rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid #1e293b",
            fontSize: "0.8rem",
            color: "#94a3b8",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <strong style={{ color: "#cbd5e1" }}>Service Areas:</strong>
          <span>{SERVICE_AREAS.join(", ")}</span>
        </div>

        <div
          style={{
            marginTop: "1.5rem",
            fontSize: "0.8rem",
            color: "#64748b",
            textAlign: "center",
          }}
        >
          &copy; {year} {BUSINESS.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
