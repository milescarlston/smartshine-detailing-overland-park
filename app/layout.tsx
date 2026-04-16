import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { BUSINESS, OG_IMAGES } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: `${BUSINESS.name} | Mobile Detailing in ${BUSINESS.address.city}, ${BUSINESS.address.state}`,
  description: `Professional mobile car detailing in ${BUSINESS.address.city}, ${BUSINESS.address.state}. We come to your home or office.`,
  applicationName: BUSINESS.shortName,
  generator: "Next.js",
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    siteName: BUSINESS.name,
    locale: "en_US",
    type: "website",
    images: OG_IMAGES,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <JsonLd data={organizationSchema()} />
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
