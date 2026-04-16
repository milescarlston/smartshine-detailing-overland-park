export const BUSINESS = {
  name: "SmartShine Mobile Car Detailing",
  shortName: "SmartShine",
  tagline: "We Come to You. Professional Results, Zero Hassle.",
  phone: "(913) 286-6439",
  phoneHref: "tel:+19132866439",
  email: "hello@smartshinedetailing.site",
  url: "https://smartshinedetailing.site",
  address: {
    street: "Overland Park",
    city: "Overland Park",
    state: "KS",
    zip: "66224",
    country: "US",
  },
  geo: { lat: 38.8714, lng: -94.6604 },
  hours: "Mon-Sat 7:00 AM - 7:00 PM, Sunday by appointment",
  openingHours: ["Mo-Sa 07:00-19:00"],
  priceRange: "$$",
  social: {
    facebook: "https://www.facebook.com/smartshinedetailing",
    instagram: "https://www.instagram.com/smartshinedetailing",
    google: "https://g.page/smartshinedetailing",
    yelp: "https://www.yelp.com/biz/smartshine-mobile-car-detailing-overland-park",
  },
} as const;

export const BRAND = {
  primary: "#0EA5E9",
  accent: "#F59E0B",
  monogram: "SS",
} as const;

export const SERVICE_AREAS = [
  "Overland Park",
  "Leawood",
  "Olathe",
  "Lenexa",
  "Prairie Village",
  "Shawnee",
  "Mission",
  "Merriam",
  "Gardner",
  "Spring Hill",
] as const;

export interface VehicleTier {
  label: string;
  description: string;
  price: number;
}
export interface CoatingTier {
  label: string;
  price: number;
}
export interface AddOn {
  name: string;
  price: number;
}
export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  startingPrice: number;
  targetKeyword: string;
  icon: string;
  features: string[];
  estimatedTime: string;
  vehicleTiers?: VehicleTier[];
  coatingTiers?: CoatingTier[];
  standalonePricing?: { standalone: number; addon: number };
  addOns?: AddOn[];
  savings?: string;
}

export const SERVICES: Service[] = [
  {
    slug: "exterior-detail",
    title: "Exterior Wash & Detail",
    shortTitle: "Exterior Detail",
    description:
      "We'll get your car looking brand new with a thorough hand wash, clay bar treatment, polish, and protective sealant. The works, right in your driveway.",
    startingPrice: 125,
    targetKeyword: "exterior car detailing Overland Park",
    icon: "sparkles",
    features: [
      "Hand wash (two-bucket method)",
      "Clay bar decontamination",
      "Wax or sealant application",
      "Tire dressing",
      "Wheel cleaning",
      "Door jamb cleaning",
      "Exterior windows",
    ],
    estimatedTime: "1.5-2.5 hours",
    vehicleTiers: [
      { label: "Sedan / Car", description: "Coupes, sedans, small hatchbacks", price: 125 },
      { label: "SUV / Crossover", description: "Mid-size SUVs, crossovers", price: 159 },
      { label: "Truck / Van", description: "Full-size trucks, minivans, large SUVs", price: 189 },
    ],
    addOns: [
      { name: "Engine bay cleaning", price: 69 },
      { name: "Trim restoration (faded black plastic)", price: 39 },
      { name: "Sealant upgrade (6-month synthetic)", price: 29 },
    ],
  },
  {
    slug: "interior-detail",
    title: "Interior Detail",
    shortTitle: "Interior Detail",
    description:
      "Deep cleaning for every surface inside your car. We vacuum, steam clean, condition the leather, and get rid of any odors. Your car will smell and feel like new.",
    startingPrice: 175,
    targetKeyword: "interior car detailing Overland Park",
    icon: "car-seat",
    features: [
      "Full vacuum (seats, carpet, crevices)",
      "Shampoo carpets & floor mats",
      "Clean & condition leather/vinyl seats",
      "Dashboard, console & vent cleaning",
      "Door panel wipe-down",
      "Interior windows",
      "UV protectant on plastics",
    ],
    estimatedTime: "2-3 hours",
    vehicleTiers: [
      { label: "Sedan / Car", description: "Coupes, sedans, small hatchbacks", price: 175 },
      { label: "SUV / Crossover", description: "Mid-size SUVs, crossovers", price: 215 },
      { label: "Truck / Van", description: "Full-size trucks, minivans, large SUVs", price: 249 },
    ],
    addOns: [
      { name: "Pet hair removal", price: 45 },
      { name: "Odor elimination (ozone treatment)", price: 59 },
      { name: "Stain treatment (per area)", price: 35 },
    ],
  },
  {
    slug: "full-detail",
    title: "Full Detail Package",
    shortTitle: "Full Detail",
    description:
      "The whole thing, inside and out. Our most popular package combines the full exterior and interior detail for a complete bumper-to-bumper transformation.",
    startingPrice: 275,
    targetKeyword: "full car detail Overland Park",
    icon: "shield-check",
    features: [
      "Complete exterior detail",
      "Complete interior detail",
      "Engine bay cleaning",
      "Door jamb cleaning",
      "Headlight cleaning",
      "Exhaust tip polishing",
      "Air freshener application",
    ],
    estimatedTime: "3-5 hours",
    vehicleTiers: [
      { label: "Sedan / Car", description: "Coupes, sedans, small hatchbacks", price: 275 },
      { label: "SUV / Crossover", description: "Mid-size SUVs, crossovers", price: 339 },
      { label: "Truck / Van", description: "Full-size trucks, minivans, large SUVs", price: 399 },
    ],
    savings: "Save $25-$39 vs. booking interior and exterior separately",
    addOns: [
      { name: "Engine bay cleaning", price: 69 },
      { name: "Pet hair removal", price: 45 },
      { name: "Odor elimination (ozone treatment)", price: 59 },
      { name: "Sealant upgrade (6-month synthetic)", price: 29 },
      { name: "Stain treatment (per area)", price: 35 },
      { name: "Trim restoration (faded black plastic)", price: 39 },
    ],
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    shortTitle: "Ceramic Coating",
    description:
      "A protective ceramic layer that lasts for years. It keeps your paint looking fresh, makes washing way easier, and protects against UV damage, bird droppings, and road grime.",
    startingPrice: 449,
    targetKeyword: "ceramic coating Overland Park",
    icon: "droplet",
    features: [
      "Full exterior detail",
      "Paint decontamination",
      "1-step polish prep",
      "Professional ceramic coating application",
      "Hydrophobic finish",
      "UV protection",
      "Aftercare kit included",
    ],
    estimatedTime: "Varies, by appointment only",
    coatingTiers: [
      { label: "1-Year Coating", price: 449 },
      { label: "3-Year Coating", price: 749 },
      { label: "5-Year Coating", price: 1099 },
    ],
  },
  {
    slug: "headlight-restoration",
    title: "Headlight Restoration",
    shortTitle: "Headlight Restoration",
    description:
      "Cloudy, yellowed headlights are a safety hazard and make your car look old. We sand, polish, and seal them so they're crystal clear again.",
    startingPrice: 79,
    targetKeyword: "headlight restoration Overland Park",
    icon: "lightbulb",
    features: [
      "Wet sanding (multiple grits)",
      "Multi-stage polish",
      "UV sealant application",
      "Improved nighttime visibility",
      "Both headlights included",
    ],
    estimatedTime: "45 minutes - 1 hour",
    standalonePricing: { standalone: 79, addon: 59 },
  },
];

export const ALL_ADDONS: AddOn[] = [
  { name: "Engine bay cleaning", price: 69 },
  { name: "Pet hair removal", price: 45 },
  { name: "Odor elimination (ozone treatment)", price: 59 },
  { name: "Sealant upgrade (6-month synthetic sealant)", price: 29 },
  { name: "Stain treatment (per area)", price: 35 },
  { name: "Trim restoration (faded black plastic)", price: 39 },
];

// TODO: Replace these placeholder testimonials with real customer reviews
// before launch. Keep first-name + last-initial format and diverse vehicle types.
export interface Testimonial {
  name: string;
  vehicle: string;
  rating: number;
  quote: string;
  service: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    vehicle: "2022 Honda CR-V",
    rating: 5,
    quote:
      "I couldn't believe the difference. They came right to my office parking lot and my car looked brand new when I came out at 5pm. Worth every penny.",
    service: "Full Detail Package",
  },
  {
    name: "David K.",
    vehicle: "2019 Ford F-150",
    rating: 5,
    quote:
      "After a year of hauling mulch and kids around, the inside of my truck was rough. They got it looking showroom-clean. Highly recommend.",
    service: "Interior Detail",
  },
  {
    name: "Jennifer R.",
    vehicle: "2023 Tesla Model Y",
    rating: 5,
    quote:
      "Got the 5-year ceramic coating and water just rolls right off. Paint looks deeper and glossier than the day I bought it. Super professional team.",
    service: "Ceramic Coating",
  },
  {
    name: "Marcus T.",
    vehicle: "2015 Toyota Camry",
    rating: 5,
    quote:
      "My headlights were so yellow I almost replaced them. These guys saved me $400+ and I can actually see at night now. Thank you!",
    service: "Headlight Restoration",
  },
  {
    name: "Emily C.",
    vehicle: "2021 Jeep Grand Cherokee",
    rating: 5,
    quote:
      "Booking was easy, the crew showed up on time, and they worked right in my driveway while I worked from home. Stress-free and the Jeep looks amazing.",
    service: "Exterior Wash & Detail",
  },
];

export const CONTACT_SERVICE_OPTIONS = [
  { value: "exterior-detail", label: "Exterior Wash & Detail (starting at $125)" },
  { value: "interior-detail", label: "Interior Detail (starting at $175)" },
  { value: "full-detail", label: "Full Detail Package (starting at $275)" },
  { value: "ceramic-coating", label: "Ceramic Coating (starting at $449)" },
  { value: "headlight-restoration", label: "Headlight Restoration (starting at $79)" },
  { value: "not-sure", label: "Not sure - I need a recommendation" },
] as const;

export const OG_IMAGE_URL = "/opengraph-image";
export const OG_IMAGE_ALT = "SmartShine Mobile Car Detailing in Overland Park, KS";
export const OG_IMAGES = [
  { url: OG_IMAGE_URL, width: 1200, height: 630, alt: OG_IMAGE_ALT },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map((s) => ({
      label: s.shortTitle,
      href: `/services/${s.slug}`,
    })),
  },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime: string;
  readingTime: string;
  excerpt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-often-should-you-detail-your-car",
    title: "How Often Should You Detail Your Car?",
    description:
      "Wondering how often to detail your car? It depends on your driving habits, environment, and vehicle. Here's a practical guide from Overland Park detailing pros.",
    publishedTime: "2024-12-15",
    modifiedTime: "2024-12-15",
    readingTime: "6 min read",
    excerpt:
      "The honest answer is: it depends. Most vehicles benefit from a full detail every 4-6 months, with basic washes in between. Here's how to decide what's right for your car.",
  },
  {
    slug: "ceramic-coating-worth-it",
    title: "Is Ceramic Coating Worth It? Pros, Cons & Cost",
    description:
      "Is ceramic coating worth the investment? We break down the real pros, cons, cost, and how long it lasts — from a detailing team that applies it every week.",
    publishedTime: "2024-11-28",
    modifiedTime: "2024-11-28",
    readingTime: "8 min read",
    excerpt:
      "Ceramic coating is everywhere right now, and the marketing claims are all over the map. Here's a straight answer on whether it's worth the money for your vehicle.",
  },
];
