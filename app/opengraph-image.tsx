import { ImageResponse } from "next/og";
import { BOOKING_CTA_LABEL, BRAND, BUSINESS } from "@/lib/constants";

export const alt = `${BUSINESS.name} in ${BUSINESS.address.city}, ${BUSINESS.address.state}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// TODO: Replace this generated OG image with a real photo-based design before launch.
export default function Image() {
  const headline = `Mobile Car Detailing in ${BUSINESS.address.city}`;
  const cityState = `${BUSINESS.address.city}, ${BUSINESS.address.state}`;
  const siteDomain = BUSINESS.url.replace(/^https?:\/\//, "");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: `radial-gradient(800px 500px at 85% 20%, rgba(245,158,11,0.35), transparent 60%), radial-gradient(900px 600px at 15% 85%, rgba(14,165,233,0.55), transparent 60%), linear-gradient(180deg, #0b1220 0%, #0b1220 100%)`,
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})`,
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              boxShadow: "0 6px 24px rgba(14,165,233,0.4)",
            }}
          >
            {BRAND.monogram}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 800, letterSpacing: "-0.01em" }}>
              {BUSINESS.shortName}
            </div>
            <div style={{ display: "flex", fontSize: 18, opacity: 0.7 }}>
              {cityState}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 960,
            }}
          >
            {headline}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              opacity: 0.85,
              maxWidth: 860,
              lineHeight: 1.3,
            }}
          >
            {BUSINESS.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 24px",
              borderRadius: 999,
              background: BRAND.accent,
              color: "#1f1300",
              fontWeight: 800,
              fontSize: 24,
            }}
          >
            {BOOKING_CTA_LABEL}
          </div>
          <div style={{ display: "flex", fontSize: 22, opacity: 0.75 }}>
            {siteDomain}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
