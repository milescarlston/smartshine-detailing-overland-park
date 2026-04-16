import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/constants";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})`,
          color: "#ffffff",
          fontSize: 34,
          fontWeight: 900,
          letterSpacing: "-0.02em",
          borderRadius: 10,
        }}
      >
        {BRAND.monogram}
      </div>
    ),
    { ...size }
  );
}
