"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BOOKING_CTA_LABEL, BOOKING_URL, BUSINESS, NAV_LINKS } from "@/lib/constants";
import { Monogram } from "./Monogram";
import { Menu, X, Phone } from "./Icons";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "saturate(180%) blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 40,
      }}
    >
      <div
        className="container-site"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
          gap: "1rem",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.625rem",
          }}
          className="focus-ring"
          aria-label={`${BUSINESS.name} home`}
        >
          <Monogram size={36} />
          <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--ink)" }}>
            {BUSINESS.shortName}
          </span>
        </Link>

        <nav aria-label="Primary" style={{ display: "none" }} className="md-nav">
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="focus-ring"
                  style={{
                    color: "var(--ink)",
                    fontWeight: 500,
                    padding: "0.5rem 0.25rem",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          style={{ display: "none", alignItems: "center", gap: "0.5rem" }}
          className="md-cta"
        >
          <a
            href={BUSINESS.phoneHref}
            className="btn btn-outline focus-ring"
            aria-label={`Call ${BUSINESS.phone}`}
          >
            <Phone width={18} height={18} />
            <span>{BUSINESS.phone}</span>
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary focus-ring"
          >
            {BOOKING_CTA_LABEL}
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="btn btn-ghost focus-ring mobile-toggle"
          style={{ padding: "0.5rem" }}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            background: "#ffffff",
          }}
        >
          <div className="container-site" style={{ padding: "1rem 1.25rem 1.5rem" }}>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      padding: "0.75rem 0.5rem",
                      borderRadius: "0.5rem",
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                    className="focus-ring"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
              <a
                href={BUSINESS.phoneHref}
                className="btn btn-outline focus-ring"
                onClick={() => setOpen(false)}
              >
                <Phone width={18} height={18} />
                {BUSINESS.phone}
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary focus-ring"
                onClick={() => setOpen(false)}
              >
                {BOOKING_CTA_LABEL}
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 840px) {
          .md-nav { display: block !important; }
          .md-cta { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
