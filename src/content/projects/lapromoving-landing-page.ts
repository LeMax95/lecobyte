export const laProMovingLandingProject = {
  slug: "landing-page-ghl-integration",
  id: "PRJ_004",
  title: "Agency_Landing_System",
  clientName: "Performance Marketing Agency (Garage Doors Experts AU)",
  category: "Landing Page, Tracking & CRM Integration System",
  mainImage: "/projects/agency-landing/agency-landing-paid-traffic-hero.webp",

  liveUrl: "https://garagedoorsexpertsau.com/",
  liveLabel: "Open_Landing_Instance",
  liveRel: "nofollow",

  summary:
    "A lead acquisition system built for paid traffic campaigns, connecting landing page, tracking, and CRM into a single reliable pipeline.\n\nInstead of treating the landing page as a standalone asset, the project focused on ensuring that every visitor is captured, routed, and converted through a structured system designed for performance marketing.",

  beforeState:
    "The requirement was not simply to build a landing page, but to ensure that the entire lead flow works reliably.\n\nIn many paid traffic setups, issues appear across the system:\n- inconsistent lead capture\n- missing or unclear attribution\n- fragmented CRM integrations\n- lack of visibility into performance\n\nThe landing page becomes only one part of a disconnected pipeline, which limits scalability and reduces campaign efficiency.",

  builtFor:
    "Performance marketing agency / paid traffic campaigns (Google Ads, Facebook Ads)",

  serviceSlug: "landing-page-development",
  serviceLabel: "Lead System Engineering",

  relevanceTitle:
    "When traffic is coming in, but the system behind it is not structured to convert it reliably.",
  relevanceBody:
    "This type of system is critical for agencies and media buyers running paid traffic. If leads are not captured consistently or routed properly, scaling campaigns becomes difficult.\n\nA structured pipeline ensures that traffic, user actions, and lead data move together without loss, creating a more predictable and controllable acquisition process.",

  metric: "Lead acquisition pipeline established",
  duration: "Full system setup & deployment",
  tech: [
    "WordPress",
    "Elementor (Reusable Templates)",
    "GoHighLevel (GHL)",
    "Webhook Integration",
    "Tracking Scripts",
    "DNS & Hosting Setup",
    "Custom Plugin Development",
  ],

  challenge:
    "The core challenge was ensuring that the entire lead flow works reliably under real campaign conditions.\n\nPaid traffic introduces multiple variables: different sources, campaigns, and user behaviors. Without a structured system, leads can be lost, misattributed, or inconsistently handled.\n\nThe task was to align landing page structure, conversion paths, tracking, and CRM integration into a single working pipeline.",

  solution:
    "The project was implemented as a complete lead acquisition system rather than a standalone landing page.\n\nA WordPress-based landing page was built using reusable templates, allowing fast iteration and consistency across campaigns.\n\nMultiple conversion paths were introduced (call, booking, and form), enabling users to choose how they engage.\n\nTracking logic was implemented to capture traffic source and campaign context at the entry point, preserving attribution across the pipeline.\n\nLeads are then routed into the CRM through webhook integrations, ensuring structured intake and consistent handling.\n\nThe result is a unified system where traffic, conversion, and lead management operate as one continuous flow.",

  testimonial:
    "The system is simple to use, and leads come through clearly and consistently.",

  results: [
    { label: "Lead_Flow", value: "Structured" },
    { label: "Conversion_Paths", value: "Multiple" },
    { label: "Tracking", value: "Implemented" },
    { label: "System_Reliability", value: "Improved" },
  ],

  gallery: [
    {
      type: "single",
      image: "/projects/agency-landing/agency-landing-paid-traffic-hero.webp",
      alt: "High-converting landing page for garage door services with call, form, and booking CTAs optimized for paid traffic campaigns",
      caption:
        "Landing interface designed for paid traffic campaigns, with multiple conversion paths (call, booking, and form) to capture leads across different user behaviors.",
      kind: "conversion",
    },
  ],

  seo: {
    title:
      "Landing Page & Lead System Case Study | Paid Traffic Conversion Setup",
    description:
      "How Lecobyte built a lead acquisition system with landing page, tracking, and CRM integration for paid traffic campaigns.",
    keywords: [
      "landing page developer",
      "lead generation system",
      "conversion focused landing page",
      "paid traffic landing page",
      "crm integration landing page",
      "lead acquisition system",
      "conversion optimization website",
      "performance marketing landing page",
    ],
    image: "/projects/agency-landing/agency-landing-paid-traffic-hero.webp",
  },
} as const;

export default laProMovingLandingProject;