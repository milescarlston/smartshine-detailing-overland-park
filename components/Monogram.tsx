import { BRAND } from "@/lib/constants";

export function Monogram({ size = 40 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: size * 0.25,
        background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})`,
        color: "#ffffff",
        fontWeight: 800,
        fontSize: size * 0.42,
        letterSpacing: "0.02em",
        boxShadow: "0 2px 8px rgba(14,165,233,0.35)",
      }}
    >
      {BRAND.monogram}
    </span>
  );
}
