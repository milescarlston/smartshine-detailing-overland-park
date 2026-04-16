import type { Faq } from "@/lib/schema";

export function FaqSection({ faqs, heading = "Frequently asked questions" }: { faqs: Faq[]; heading?: string }) {
  return (
    <section style={{ padding: "3rem 0" }}>
      <div className="container-site">
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, marginTop: 0, marginBottom: "1.5rem", color: "var(--ink)" }}>
          {heading}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: 820 }}>
          {faqs.map((f) => (
            <details
              key={f.question}
              className="card"
              style={{ padding: "1rem 1.25rem" }}
            >
              <summary
                style={{
                  fontWeight: 700,
                  color: "var(--ink)",
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span>{f.question}</span>
                <span aria-hidden="true" style={{ color: "var(--muted)" }}>+</span>
              </summary>
              <p style={{ margin: "0.75rem 0 0", color: "var(--foreground)", lineHeight: 1.6 }}>
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
