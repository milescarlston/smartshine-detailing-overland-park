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

const post = BLOG_POSTS.find((p) => p.slug === "ceramic-coating-worth-it")!;

const TITLE = `Is Ceramic Coating Worth It? Pros, Cons & Cost | ${BUSINESS.shortName} Blog`;
const DESCRIPTION = `Is ceramic coating worth the investment? We break down the real pros, cons, cost, and how long it lasts — from a detailing team that applies it every week.`;

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
              Ceramic coating marketing is a mess. You&rsquo;ll hear 10-year promises, claims
              that it replaces waxing forever, and horror stories from people whose coatings
              peeled in six months. As a team that applies ceramic every week, here&rsquo;s
              our honest take on whether it&rsquo;s worth the money.
            </p>

            <h2>What ceramic coating actually is</h2>
            <p>
              Ceramic coating is a liquid polymer (typically silica-based) that chemically
              bonds to your clearcoat. Once cured, it creates a hard, hydrophobic layer on
              top of the paint. That layer has three main benefits:
            </p>
            <ul>
              <li>
                <strong>Chemical resistance.</strong> Bird droppings, bug splatter, tree sap,
                and road tar are far less likely to etch your paint when a coating is in
                place.
              </li>
              <li>
                <strong>UV protection.</strong> Reduces paint oxidation and fading from sun
                exposure.
              </li>
              <li>
                <strong>Hydrophobic finish.</strong> Water beads and rolls off, taking dust
                with it. Dirt doesn&rsquo;t bond as easily, so the car stays cleaner between
                washes and washes more easily.
              </li>
            </ul>

            <h2>What ceramic coating is NOT</h2>
            <ul>
              <li>
                <strong>Not scratch protection.</strong> It won&rsquo;t stop rock chips or
                scratches from careless car washes. That&rsquo;s paint protection film
                (PPF)&rsquo;s job.
              </li>
              <li>
                <strong>Not forever.</strong> Even top-tier pro coatings degrade. If
                someone tells you their coating lasts 10 years with zero maintenance, they&rsquo;re
                selling, not educating.
              </li>
              <li>
                <strong>Not a substitute for washing.</strong> You still need to wash the car.
                It&rsquo;s just way easier and less frequent.
              </li>
            </ul>

            <h2>Honest cost vs. value</h2>
            <p>
              Professional ceramic coatings in the {BUSINESS.address.city} area generally run
              between $449 and $1,500+, depending on the product tier, paint prep needed, and
              vehicle size. Here&rsquo;s how we price it at {BUSINESS.shortName}:
            </p>
            <ul>
              <li>
                <strong>1-year coating: $449.</strong> Great for leased vehicles, or if you
                want to try ceramic before committing longer-term.
              </li>
              <li>
                <strong>3-year coating: $749.</strong> Our most popular option. Good middle
                ground between cost and durability.
              </li>
              <li>
                <strong>5-year coating: $1,099.</strong> For keepers. Best long-term value if
                you plan to own the vehicle 3+ years.
              </li>
            </ul>
            <p>
              Paint prep (decontamination, a 1-step polish) is included in every package. If
              you skip that step, the coating won&rsquo;t bond correctly and won&rsquo;t last.
              Be skeptical of any quote that doesn&rsquo;t include prep.
            </p>

            <h2>Who ceramic coating makes sense for</h2>
            <ul>
              <li>New or recent-model vehicles with good paint condition.</li>
              <li>Owners who park outside and want UV/environmental protection.</li>
              <li>People who hate waxing or spending weekends on car care.</li>
              <li>Anyone planning to keep the car 3+ years.</li>
              <li>Daily drivers that see a lot of highway miles or road grime.</li>
            </ul>

            <h2>Who it may not be worth it for</h2>
            <ul>
              <li>Vehicles with heavily oxidized or damaged paint (paint correction first).</li>
              <li>Garaged weekend cars that rarely see sun or weather.</li>
              <li>
                Short-term leases (under 2 years) where a 1-year coating might be
                overkill relative to a high-quality sealant.
              </li>
            </ul>

            <h2>Maintenance — what you actually have to do</h2>
            <p>
              Ceramic coating care is simpler, not nonexistent:
            </p>
            <ul>
              <li>
                <strong>Hand wash every 2-4 weeks.</strong> Two-bucket method, pH-neutral soap.
                Never automated tunnels — they put swirl marks in any finish.
              </li>
              <li>
                <strong>Annual decon wash.</strong> Removes embedded contaminants that bypass
                the coating over time.
              </li>
              <li>
                <strong>No waxing.</strong> Traditional waxes don&rsquo;t bond to ceramic and
                can actually degrade its performance.
              </li>
              <li>
                <strong>Touch-up sprays (optional).</strong> Some coating systems have
                compatible toppers that refresh hydrophobic behavior.
              </li>
            </ul>

            <h2>Our recommendation</h2>
            <p>
              For most daily drivers in the KC metro, a <strong>3-year coating</strong> is the
              sweet spot. You&rsquo;ll notice it every time you wash the car, you&rsquo;ll get
              meaningful protection from our climate, and the math works out favorably versus
              the cost of regular waxing and paint correction.
            </p>
            <p>
              If you&rsquo;re keeping the vehicle long-term, jump to the 5-year package. If
              you&rsquo;re on a short lease or the paint already has significant issues that
              would need correction first, talk to us before spending any money —
              sometimes a good sealant and a yearly decon is the smarter call.
            </p>

            <h2>Ready to talk through it?</h2>
            <p>
              We&rsquo;ll give you an honest recommendation for your vehicle and driving
              situation — even if that means we talk you out of ceramic coating.{" "}
              <Link href="/contact" style={{ color: "var(--brand-darker)", fontWeight: 600 }}>
                Reach out
              </Link>{" "}
              and we&rsquo;ll help.
            </p>
          </div>
        </div>
      </article>

      <CTASection title="Protect your paint with a coating that actually lasts" />
    </>
  );
}
