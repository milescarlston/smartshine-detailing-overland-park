import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/constants";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${BRAND.primary} 0%, #0369a1 100%)`,
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          {BRAND.monogram}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 18,
            left: 18,
            right: 18,
            height: 6,
            borderRadius: 3,
            background: BRAND.accent,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
