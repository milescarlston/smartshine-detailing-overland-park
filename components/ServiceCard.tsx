import Link from "next/link";
import type { Service } from "@/lib/constants";
import { ServiceIcon, ArrowRight } from "./Icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card focus-ring"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        height: "100%",
        color: "var(--foreground)",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: "rgba(14,165,233,0.12)",
          color: "var(--brand-darker)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ServiceIcon name={service.icon} width={24} height={24} />
      </div>
      <h3 style={{ fontSize: "1.125rem", fontWeight: 700, margin: 0, color: "var(--ink)" }}>
        {service.title}
      </h3>
      <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.55, flex: 1 }}>
        {service.description}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "0.25rem",
        }}
      >
        <span style={{ fontWeight: 700, color: "var(--ink)" }}>
          Starting at ${service.startingPrice}
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.25rem",
            color: "var(--brand-darker)",
            fontWeight: 600,
          }}
        >
          View details <ArrowRight width={16} height={16} />
        </span>
      </div>
    </Link>
  );
}
