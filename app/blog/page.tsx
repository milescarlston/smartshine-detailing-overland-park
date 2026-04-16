import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS,
  BLOG_POSTS,
  OG_IMAGES,
  OG_IMAGE_URL,
} from "@/lib/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ArrowRight } from "@/components/Icons";

const TITLE = `Car Detailing Tips & Guides | ${BUSINESS.shortName} Mobile Detailing Blog`;
const DESCRIPTION = `Helpful tips on car care, detailing, ceramic coating, and keeping your vehicle looking its best in Overland Park. Expert advice from ${BUSINESS.shortName} Mobile Detailing.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/blog",
    type: "website",
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", url: "/" },
          { label: "Blog", url: "/blog" },
        ])}
      />

      <section style={{ padding: "2.5rem 0 1.5rem" }}>
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginTop: "1rem",
              marginBottom: "0.75rem",
            }}
          >
            The {BUSINESS.shortName} blog
          </h1>
          <p style={{ margin: 0, color: "var(--muted)", maxWidth: 720, lineHeight: 1.65, fontSize: "1.0625rem" }}>
            Practical car care tips from the team that details hundreds of vehicles each
            year across the {BUSINESS.address.city} area. No gimmicks, no affiliate links —
            just straightforward advice.
          </p>
        </div>
      </section>

      <section style={{ padding: "1rem 0 4rem" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gap: "1.25rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            }}
          >
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--muted)", display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <time dateTime={post.publishedTime}>{formatDate(post.publishedTime)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 style={{ margin: 0, fontSize: "1.2rem", color: "var(--ink)", fontWeight: 800, lineHeight: 1.25 }}>
                  <Link href={`/blog/${post.slug}`} className="focus-ring" style={{ color: "var(--ink)" }}>
                    {post.title}
                  </Link>
                </h2>
                <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6, flex: 1 }}>{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    color: "var(--brand-darker)",
                    fontWeight: 600,
                  }}
                  className="focus-ring"
                >
                  Read more <ArrowRight width={16} height={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
