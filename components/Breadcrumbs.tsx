import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
      <ol style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
              {item.href && !last ? (
                <Link href={item.href} style={{ color: "var(--brand-darker)" }}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined}>{item.label}</span>
              )}
              {!last && <span aria-hidden="true" style={{ color: "#cbd5e1" }}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
