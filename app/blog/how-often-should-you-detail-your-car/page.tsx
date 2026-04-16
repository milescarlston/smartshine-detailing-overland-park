import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS,
  BLOG_POSTS,
  OG_IMAGES,
  OG_IMAGE_URL,
} from "@/lib/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

const post = BLOG_POSTS.find((p) => p.slug === "how-often-should-you-detail-your-car")!;

const TITLE = `How Often Should You Detail Your Car? | ${BUSINESS.shortName} Detailing Blog`;
const DESCRIPTION = `Wondering how often to detail your car? It depends on your driving habits, environment, and vehicle. Here's a practical guide from Overland Park detailing pros.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedTime,
    modifiedTime: post.modifiedTime,
    authors: [BUSINESS.name],
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

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.description,
            url: `/blog/${post.slug}`,
            publishedTime: post.publishedTime,
            modifiedTime: post.modifiedTime,
          }),
          breadcrumbSchema([
            { label: "Home", url: "/" },
            { label: "Blog", url: "/blog" },
            { label: post.title, url: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article>
        <header style={{ padding: "2.5rem 0 1rem" }}>
          <div className="container-site" style={{ maxWidth: 820 }}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
            <h1
              style={{
                fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginTop: "1rem",
                marginBottom: "0.75rem",
                lineHeight: 1.15,
              }}
            >
              {post.title}
            </h1>
            <div style={{ color: "var(--muted)", display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.9rem" }}>
              <time dateTime={post.publishedTime}>{formatDate(post.publishedTime)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
              <span aria-hidden="true">·</span>
              <span>{BUSINESS.name}</span>
            </div>
          </div>
        </header>

        <div className="container-site" style={{ paddingBottom: "3rem", maxWidth: 820 }}>
          <div className="prose-body">
            <p>
              The short answer is that most vehicles benefit from a full interior and
              exterior detail every four to six months, with maintenance washes in between.
              But the honest answer is: <strong>it depends</strong>. Here&rsquo;s how to think
              about your car&rsquo;s detailing schedule so you&rsquo;re not wasting money on
              services you don&rsquo;t need — or skimping on ones you do.
            </p>

            <h2>The three factors that actually matter</h2>
            <p>
              Frequency recommendations online tend to be one-size-fits-all. They&rsquo;re
              usually too aggressive for a garage-kept weekend car and too laid back for a
              family hauler that sees 300 miles a week. Three variables decide the right
              cadence for your vehicle:
            </p>
            <ul>
              <li>
                <strong>How the car is stored.</strong> Garaged beats covered outdoor parking,
                which beats uncovered. Paint and interior surfaces age dramatically faster in
                full sun.
              </li>
              <li>
                <strong>How the car is used.</strong> Daily commuter with kids and a dog? The
                interior will need attention more often than a weekend cruiser. Lots of highway
                driving picks up more road grime and bug strikes.
              </li>
              <li>
                <strong>What&rsquo;s on the paint already.</strong> A new car with a fresh
                coat of wax or sealant lasts longer between details. An older finish with
                oxidation or water spotting needs more frequent correction.
              </li>
            </ul>

            <h2>General guidelines for the KC area</h2>
            <p>
              We detail vehicles across {BUSINESS.address.city} and the greater Kansas City
              metro. Given our winters (road salt), summers (tree sap, bird droppings, UV),
              and spring storms (pollen, hail potential), here&rsquo;s what we typically
              recommend:
            </p>

            <h3>Garaged, lightly-used vehicles</h3>
            <p>
              A full detail every <strong>6 months</strong> is plenty. You can extend that to
              8-9 months if the car sees minimal outdoor use and you&rsquo;re keeping it
              clean with regular maintenance washes.
            </p>

            <h3>Daily drivers stored outside</h3>
            <p>
              A full detail every <strong>3-4 months</strong>, plus a quick exterior wash
              every 2-3 weeks to keep contaminants off the paint. This is where most
              customers fall.
            </p>

            <h3>Families with kids, pets, or frequent road trips</h3>
            <p>
              A full detail every <strong>3 months</strong>, and consider an interior-only
              detail at the midpoint. Crumbs, spills, and pet hair compound quickly. Getting
              ahead of it is way cheaper than waiting for a smell to set in.
            </p>

            <h3>High-end or ceramic-coated vehicles</h3>
            <p>
              Your coating does most of the work, but paint still gets contaminants embedded
              in it. A full detail every <strong>6 months</strong> to decon and inspect the
              coating keeps it performing. And always hand wash — never touchless tunnels.
            </p>

            <h2>Signs it&rsquo;s time to book</h2>
            <ul>
              <li>Water doesn&rsquo;t bead on the paint anymore.</li>
              <li>You can feel texture when you run your hand over a washed, dry panel.</li>
              <li>The interior smells different than it did a month ago.</li>
              <li>Carpet has visible matting or stains, or the headliner looks dingy.</li>
              <li>Headlights are yellowing or hazy.</li>
            </ul>

            <h2>Maintenance washes matter</h2>
            <p>
              Whatever your detail frequency, <strong>do not skip maintenance washes</strong>.
              Regular hand washes remove the contaminants that would otherwise etch into
              your clearcoat. They also make your full detail last longer, which means you
              spend less on them.
            </p>

            <p>
              For most customers, the right program is a full detail 2-3 times a year plus a
              basic wash every few weeks. Your car will age more slowly, hold its resale value
              longer, and frankly feel nicer to get into every day.
            </p>

            <h2>Still not sure what&rsquo;s right for your car?</h2>
            <p>
              <Link href="/contact" style={{ color: "var(--brand-darker)", fontWeight: 600 }}>
                Send us a quick message
              </Link>{" "}
              with your vehicle year/make, where it&rsquo;s parked, and how you use it. We&rsquo;ll
              reply with an honest recommendation — no pressure.
            </p>
          </div>
        </div>
      </article>

      <CTASection title="Ready to get on a detailing schedule?" />
    </>
  );
}
