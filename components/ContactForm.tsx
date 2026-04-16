"use client";

import { useState } from "react";
import { CONTACT_SERVICE_OPTIONS } from "@/lib/constants";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div
        className="card"
        role="status"
        aria-live="polite"
        style={{
          padding: "1.75rem",
          textAlign: "center",
          borderColor: "rgba(14,165,233,0.35)",
          background: "rgba(14,165,233,0.06)",
        }}
      >
        <h2 style={{ marginTop: 0, fontSize: "1.25rem", color: "var(--ink)" }}>
          Thanks — we&rsquo;ll be in touch shortly.
        </h2>
        <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>
          A member of our team will reach out within one business day to confirm your quote
          and schedule your appointment. In a hurry? Call us anytime during business hours.
        </p>
      </div>
    );
  }

  return (
    <form
      className="card"
      style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="(555) 123-4567" />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>

      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
        <div className="form-field">
          <label htmlFor="vehicle">Vehicle (year / make / model)</label>
          <input id="vehicle" name="vehicle" type="text" required placeholder="e.g. 2021 Honda CR-V" />
        </div>
        <div className="form-field">
          <label htmlFor="zip">ZIP code</label>
          <input id="zip" name="zip" type="text" inputMode="numeric" pattern="[0-9]{5}" required placeholder="66224" />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="service">Service</label>
        <select id="service" name="service" required defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {CONTACT_SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="message">Anything we should know?</label>
        <textarea id="message" name="message" rows={4} placeholder="Preferred timing, special concerns, stains, pet hair, etc." />
      </div>

      <button type="submit" className="btn btn-primary focus-ring" style={{ alignSelf: "flex-start" }}>
        Request My Free Quote
      </button>

      <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--muted)" }}>
        By submitting this form you agree to be contacted by {" "}
        <strong>SmartShine</strong> about your request. We never share your info.
      </p>
    </form>
  );
}
