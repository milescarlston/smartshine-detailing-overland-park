import {
  BUSINESS,
  SERVICES,
  SERVICE_AREAS,
  type Service,
} from "./constants";

const LOCAL_BUSINESS_ID = `${BUSINESS.url}/#localbusiness`;
const ORGANIZATION_ID = `${BUSINESS.url}/#organization`;
const WEBSITE_ID = `${BUSINESS.url}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: {
      "@type": "ImageObject",
      url: `${BUSINESS.url}/icon`,
    },
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagram,
      BUSINESS.social.google,
      BUSINESS.social.yelp,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phoneHref.replace("tel:", ""),
        email: BUSINESS.email,
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: BUSINESS.url,
    name: BUSINESS.name,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-US",
  };
}

function hasOfferCatalog(services: readonly Service[] = SERVICES) {
  const itemListElement = services.flatMap((service) => {
    const serviceUrl = `${BUSINESS.url}/services/${service.slug}`;
    const baseService = {
      "@type": "Service",
      name: service.title,
      url: serviceUrl,
    };

    if (service.vehicleTiers && service.vehicleTiers.length > 0) {
      return service.vehicleTiers.map((tier) => ({
        "@type": "Offer",
        name: `${service.title} — ${tier.label}`,
        url: serviceUrl,
        priceCurrency: "USD",
        price: tier.price.toFixed(2),
        availability: "https://schema.org/InStock",
        itemOffered: baseService,
      }));
    }
    if (service.coatingTiers && service.coatingTiers.length > 0) {
      return service.coatingTiers.map((tier) => ({
        "@type": "Offer",
        name: `${service.title} — ${tier.label}`,
        url: serviceUrl,
        priceCurrency: "USD",
        price: tier.price.toFixed(2),
        availability: "https://schema.org/InStock",
        itemOffered: baseService,
      }));
    }
    if (service.standalonePricing) {
      return [
        {
          "@type": "Offer",
          name: `${service.title} (standalone)`,
          url: serviceUrl,
          priceCurrency: "USD",
          price: service.standalonePricing.standalone.toFixed(2),
          availability: "https://schema.org/InStock",
          itemOffered: baseService,
        },
        {
          "@type": "Offer",
          name: `${service.title} (add-on)`,
          url: serviceUrl,
          priceCurrency: "USD",
          price: service.standalonePricing.addon.toFixed(2),
          availability: "https://schema.org/InStock",
          itemOffered: baseService,
        },
      ];
    }
    return [
      {
        "@type": "Offer",
        name: service.title,
        url: serviceUrl,
        priceCurrency: "USD",
        price: service.startingPrice.toFixed(2),
        availability: "https://schema.org/InStock",
        itemOffered: baseService,
      },
    ];
  });

  return {
    "@type": "OfferCatalog",
    name: `${BUSINESS.name} Service Catalog`,
    itemListElement,
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "@id": LOCAL_BUSINESS_ID,
    name: BUSINESS.name,
    alternateName: BUSINESS.shortName,
    description: `Professional mobile car detailing serving ${BUSINESS.address.city}, ${BUSINESS.address.state} and the surrounding Kansas City metro.`,
    url: BUSINESS.url,
    telephone: BUSINESS.phoneHref.replace("tel:", ""),
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    image: `${BUSINESS.url}/opengraph-image`,
    logo: `${BUSINESS.url}/icon`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: BUSINESS.openingHours.map((spec) => {
      const [days, hours] = spec.split(" ");
      const [opens, closes] = hours.split("-");
      const dayMap: Record<string, string> = {
        Mo: "Monday",
        Tu: "Tuesday",
        We: "Wednesday",
        Th: "Thursday",
        Fr: "Friday",
        Sa: "Saturday",
        Su: "Sunday",
      };
      const [startAbbr, endAbbr] = days.split("-");
      const order = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
      const start = order.indexOf(startAbbr);
      const end = order.indexOf(endAbbr);
      const dayOfWeek = order.slice(start, end + 1).map((abbr) => dayMap[abbr]);
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek,
        opens,
        closes,
      };
    }),
    areaServed: SERVICE_AREAS.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "AdministrativeArea", name: "Kansas City metropolitan area" },
    })),
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagram,
      BUSINESS.social.google,
      BUSINESS.social.yelp,
    ],
    hasOfferCatalog: hasOfferCatalog(),
    parentOrganization: { "@id": ORGANIZATION_ID },
  };
}

export function serviceSchema(service: Service) {
  const serviceUrl = `${BUSINESS.url}/services/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: serviceUrl,
    serviceType: service.title,
    provider: { "@id": LOCAL_BUSINESS_ID },
    areaServed: SERVICE_AREAS.map((city) => ({ "@type": "City", name: city })),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: service.startingPrice.toFixed(2),
      offerCount: (service.vehicleTiers?.length ||
        service.coatingTiers?.length ||
        (service.standalonePricing ? 2 : 1)).toString(),
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: hasOfferCatalog([service]),
  };
}

export interface Faq {
  question: string;
  answer: string;
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  label: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.url.startsWith("http") ? item.url : `${BUSINESS.url}${item.url}`,
    })),
  };
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
  modifiedTime?: string;
}

export function articleSchema({
  title,
  description,
  url,
  publishedTime,
  modifiedTime,
}: ArticleSchemaInput) {
  const fullUrl = url.startsWith("http") ? url : `${BUSINESS.url}${url}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: fullUrl,
    mainEntityOfPage: fullUrl,
    datePublished: publishedTime,
    dateModified: modifiedTime ?? publishedTime,
    author: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.url },
    publisher: { "@id": ORGANIZATION_ID },
    image: `${BUSINESS.url}/opengraph-image`,
    inLanguage: "en-US",
  };
}
