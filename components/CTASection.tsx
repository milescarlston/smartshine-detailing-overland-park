import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { Phone } from "./Icons";

export function CTASection({
  title = "Ready to get your car looking new again?",
  subtitle = "Book in under 60 seconds — we come to your home or office.",
  variant = "brand",
}: {
  title?: string;
  subtitle?: string;
  variant?: "brand" | "light";
}) {
  const brand = variant === "brand";
  return (
    <section
      style={{
        background: brand
          ? "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)"
          : "var(--surface)",
        color: brand ? "#ffffff" : "var(--ink)",
        padding: "3rem 1.25rem",
      }}
    >
      <div
        className="container-site"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, margin: 0 }}>
          {title}
        </h2>
        <p style={{ fontSize: "1.05rem", opacity: brand ? 0.92 : 0.8, maxWidth: 640, margin: 0 }}>
          {subtitle}
        </p>
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          <Link
            href="/contact"
            className="btn btn-accent focus-ring"
            style={{ fontSize: "1rem" }}
          >
            Get a Free Quote
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="btn focus-ring"
            style={{
              background: brand ? "rgba(255,255,255,0.12)" : "#ffffff",
              color: brand ? "#ffffff" : "var(--ink)",
              border: brand ? "1px solid rgba(255,255,255,0.35)" : "1px solid var(--border)",
            }}
          >
            <Phone width={18} height={18} />
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
