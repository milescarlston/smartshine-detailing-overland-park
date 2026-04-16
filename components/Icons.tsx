import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const base = (p: Props) => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export function Sparkles(p: Props) {
  return (
    <svg {...base(p)} aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  );
}

export function CarSeat(p: Props) {
  return (
    <svg {...base(p)} aria-hidden="true">
      <path d="M7 21V10a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v5H7Z" />
      <path d="M7 15H5a2 2 0 0 0-2 2v4h18v-4a2 2 0 0 0-2-2h-2" />
    </svg>
  );
}

export function ShieldCheck(p: Props) {
  return (
    <svg {...base(p)} aria-hidden="true">
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Droplet(p: Props) {
  return (
    <svg {...base(p)} aria-hidden="true">
      <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />
    </svg>
  );
}

export function Lightbulb(p: Props) {
  return (
    <svg {...base(p)} aria-hidden="true">
      <path d="M9 18h6M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V17h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2Z" />
    </svg>
  );
}

export function Check(p: Props) {
  return (
    <svg {...base(p)} aria-hidden="true">
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

export function Phone(p: Props) {
  return (
    <svg {...base(p)} aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 20 20 0 0 1-8.6-3.1 19.7 19.7 0 0 1-6-6A20 20 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2L8 9.5a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function MapPin(p: Props) {
  return (
    <svg {...base(p)} aria-hidden="true">
      <path d="M12 22s7-7.3 7-12a7 7 0 1 0-14 0c0 4.7 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Clock(p: Props) {
  return (
    <svg {...base(p)} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function Mail(p: Props) {
  return (
    <svg {...base(p)} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Star(p: Props) {
  return (
    <svg {...base({ ...p, fill: "currentColor", stroke: "none" })} aria-hidden="true">
      <path d="M12 2.5 14.9 9l7 .7-5.3 4.7 1.6 6.9L12 17.8 5.8 21.3l1.6-6.9L2 9.7 9.1 9Z" />
    </svg>
  );
}

export function ArrowRight(p: Props) {
  return (
    <svg {...base(p)} aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function Menu(p: Props) {
  return (
    <svg {...base(p)} aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function X(p: Props) {
  return (
    <svg {...base(p)} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Facebook(p: Props) {
  return (
    <svg {...base(p)} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
    </svg>
  );
}

export function Instagram(p: Props) {
  return (
    <svg {...base(p)} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

const ICONS: Record<string, (p: Props) => React.JSX.Element> = {
  sparkles: Sparkles,
  "car-seat": CarSeat,
  "shield-check": ShieldCheck,
  droplet: Droplet,
  lightbulb: Lightbulb,
};

export function ServiceIcon({ name, ...props }: { name: string } & Props) {
  const Comp = ICONS[name] ?? Sparkles;
  return <Comp {...props} />;
}
