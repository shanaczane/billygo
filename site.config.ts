// ─────────────────────────────────────────────────────────────
// THE ONLY FILE YOU NEED TO EDIT PER CLIENT.
// Paste the client's real content in here. Leave a field as ""
// or an empty array [] to hide that part of the page.
// Missing facts? Use a visible placeholder like "[RATING]".
// ─────────────────────────────────────────────────────────────

export const site = {
  // ── Brand ──────────────────────────────────────────────────
  name: "billyGO",
  // Split the name to color the second part with the accent. Leave logoAccent "" to skip.
  logoText: "billy",
  logoAccent: "GO",
  logoImage: "", // e.g. "https://client.com/logo.svg" — overrides the text logo
  url: "https://www.billygo.com",

  colors: {
    ink: "#0E1A26", // main text + dark sections
    paper: "#FFFFFF", // page background
    soft: "#F2F4F6", // alternate section background
    accent: "#FF7A33", // buttons + highlights (dark text sits on it)
    muted: "#46525F", // secondary text — keep 4.5:1 contrast on paper
  },

  // Font choices live in app/layout.tsx (next/font). Swap them there.

  // ── SEO (copy these from the client's current site!) ──────
  seo: {
    title: "HVAC & Plumbing Services in Dallas-Fort Worth | billyGO",
    description:
      "Same-day HVAC & plumbing service across Dallas-Fort Worth. No trip fee, one-hour appointments. Air conditioning, heating, plumbing and drains.",
  },

  // ── Contact ────────────────────────────────────────────────
  phone: "(833) 787-7188",
  email: "support@billygo.com",
  bookingUrl: "https://www.billygo.com/schedule/",
  bookingLabel: "Book online",

  topBar: "Techs available across DFW today. 24/7 emergency service.",
  topLinks: [
    { label: "Members", href: "https://billygo.schedule.online/login" },
    { label: "Financing", href: "https://www.billygo.com/financing-options-plans/" },
    { label: "Careers", href: "https://www.billygo.com/careers/" },
  ],

  nav: [
    { label: "AC & Heating", href: "#services" },
    { label: "Plumbing", href: "#services" },
    { label: "Drains", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ],

  // ── Hero ───────────────────────────────────────────────────
  hero: {
    badge: "Texas family-owned, serving Dallas-Fort Worth",
    title: "HVAC and plumbing, on your time.",
    subtitle:
      "Pick a one-hour window. A licensed tech shows up inside it, or you get $1 back for every minute we're late. No trip fee. No salespeople.",
    primaryCta: { label: "See open times", href: "https://www.billygo.com/schedule/" },
    secondaryCta: { label: "Call (833) 787-7188", href: "tel:+18337877188" },
    image: "https://www.billygo.com/wp-content/uploads/2026/06/billyGO-AC-and-Plumbing-DFW.webp",
    imageAlt: "billyGO technician van in Dallas-Fort Worth",
    highlights: [
      { value: "1-hour", label: "arrival window" },
      { value: "$0", label: "trip fee" },
      { value: "Flat", label: "upfront pricing" },
    ],
  },

  trust: [
    "BBB accredited",
    "Licensed & insured",
    "Background-checked techs",
    "5 local DFW offices",
    "0% financing available",
  ],

  // ── Services ───────────────────────────────────────────────
  servicesTitle: "What we fix",
  services: [
    {
      title: "AC & Heating",
      text: "Repairs, full installs, heat pumps, mini-splits, furnaces, ducts and indoor air quality.",
      image: "https://www.billygo.com/wp-content/uploads/2025/04/hvac.webp",
      href: "https://www.billygo.com/service-type/cooling/",
      tags: ["AC repair", "Heat pumps", "Mini-splits", "Air ducts"],
    },
    {
      title: "Plumbing",
      text: "Water heaters, tankless, repiping, gas and water lines, leak and slab-leak detection.",
      image: "https://www.billygo.com/wp-content/uploads/2025/04/garbage-disposal.webp",
      href: "https://www.billygo.com/service-type/plumbing-repair/",
      tags: ["Water heaters", "Tankless", "Leak detection", "Gas lines"],
    },
    {
      title: "Drains & Sewer",
      text: "Drain cleaning, rooter service, hydro jetting and camera inspections before anyone digs.",
      image: "https://www.billygo.com/wp-content/uploads/2025/04/clogged-drain-repair.webp",
      href: "https://www.billygo.com/drain-services/drain-cleaning-service/",
      tags: ["Drain cleaning", "Hydro jetting", "Camera inspection"],
    },
  ],

  // ── Process (only if it's a real sequence) ─────────────────
  stepsTitle: "Four steps. No waiting around.",
  steps: [
    { title: "Book your time", text: "See real appointment times online, or call and get booked in under 2 minutes." },
    { title: "We arrive on time", text: "A licensed tech arrives in your window, or we pay you $1 per minute late, up to $60." },
    { title: "Options, not a pitch", text: "Your tech explains the problem, your options and the exact cost before any work begins." },
    { title: "Fixed", text: "You approve, we get to work. No hidden fees, no hourly rates." },
  ],

  // ── Reviews (real ones only, short excerpts) ───────────────
  reviewsTitle: "What DFW homeowners say",
  reviewsLink: { label: "Read all reviews", href: "https://www.billygo.com/local-service-reviews/" },
  reviews: [
    { quote: "Robert was very knowledgeable, took his time explaining everything. Billy Go definitely sent the right technician.", name: "Linnaea V.", meta: "Google review" },
    { quote: "Cleanup was great and left the property looking like it was before they arrived.", name: "Steve C.", meta: "New HVAC system" },
    { quote: "I am a member and I am really happy. They help me with both plumbing and AC.", name: "Sudeep P.", meta: "Member" },
  ],

  // ── Offer / membership band (optional) ─────────────────────
  offer: {
    title: "Never pay retail again.",
    price: "$99",
    priceNote: "per year, HVAC + plumbing",
    cta: { label: "Become a member", href: "https://www.billygo.com/membership/" },
    perks: [
      { title: "15% off", text: "every repair or install" },
      { title: "Priority scheduling", text: "skip the line when it counts" },
      { title: "No dispatch fee", text: "weekends included" },
      { title: "AC Rejuvenation", text: "3 to 5 more years, guaranteed" },
    ],
  },

  // ── FAQ ────────────────────────────────────────────────────
  faqTitle: "Straight answers",
  faqs: [
    { q: "How fast can you come out?", a: "Usually the same day, with a guaranteed one-hour arrival window. If we're late, we pay you $1 for every minute, up to $60." },
    { q: "What does it cost to send a technician?", a: "Nothing, Monday through Saturday, 7am to 7pm. You get upfront pricing and free estimates." },
    { q: "Do you charge by the hour?", a: "No. Flat-rate pricing means you know the price of the job before work begins." },
    { q: "Do you offer financing?", a: "Yes, including 0% financing for 6 to 60 months." },
    { q: "Do you offer 24/7 emergency service?", a: "Yes, every day of the year, including weekends and holidays." },
  ],

  // ── Closing CTA ────────────────────────────────────────────
  closing: {
    title: "Fast. Fair. Fixed. It's about time.",
    text: "Book a one-hour window online in under two minutes.",
  },

  // ── Footer ─────────────────────────────────────────────────
  locations: [
    { name: "Grapevine", address: "923 Minters Chapel Rd, Grapevine, TX 76051", phone: "(817) 934-1619" },
    { name: "Flower Mound", address: "3861 Long Prairie Rd, Ste 202, Flower Mound, TX 75028", phone: "(817) 221-0914" },
    { name: "Dallas", address: "17430 Campbell Rd, Ste 207, Dallas, TX 75252", phone: "(214) 267-9944" },
    { name: "Keller", address: "200 N Rufe Snow Dr, Ste 124, Keller, TX 76248", phone: "(817) 318-7054" },
  ],
  legal: "© 2026 billyGO DFW LLC. TX Plumbing M-38424. TX HVAC TACLB41879E.",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/billyGO.DFW" },
    { label: "Instagram", href: "https://www.instagram.com/billygo.hvac.plumbing/" },
    { label: "YouTube", href: "https://www.youtube.com/@billyGOAirConditioningPlumbing" },
  ],
};

export type Site = typeof site;
