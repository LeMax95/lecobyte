export const cheapMoversGlendaleProject = {
  slug: "cheap-movers-glendale",
  id: "PRJ_005",
  title: "Cheap_Movers_Glendale",
  clientName: "Cheap Movers Glendale",
  category: "Static Website Rebuild for Local Service Business",
  mainImage:  "/projects/cheap-movers-glendale/cheap-movers-glendale-homepage-hero-lead-generation.webp",

  liveUrl: "https://cheapmoversglendale.com",
  liveLabel: "Open_Live_Site",

  summary:
    "A performance-focused rebuild of a local moving company website, replacing a slow and unstable WordPress setup with a lightweight static system optimized for speed, reliability, and lead generation.\n\nThe project focused on stripping unnecessary complexity while preserving essential business functionality — resulting in a fast, stable, and conversion-oriented website.",

  beforeState:
    "The previous website was built on WordPress, but the setup was slow, partially broken, and unnecessarily heavy for a simple local service business.\n\nThis created multiple issues:\n- slow load times\n- unreliable behavior\n- unnecessary hosting costs\n- friction in the lead generation process\n\nInstead of supporting the business, the system itself became the bottleneck.",

  builtFor:
    "Local moving company / lightweight lead generation website",

  serviceSlug: "system-recovery",
  serviceLabel: "System Recovery",

  relevanceTitle:
    "When a simple business is held back by an overcomplicated website.",
  relevanceBody:
    "Many local service businesses don’t need complex platforms — they need fast, reliable websites that convert visitors into leads.\n\nIf the current setup is slow, fragile, or expensive without delivering real value, rebuilding it as a lightweight system can dramatically improve both performance and lead flow.",

  metric: "System simplified & optimized",
  duration: "Rebuild & migration",
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Cloudflare",
    "Static Deployment",
  ],

  challenge:
    "The challenge was not to build more — but to remove what wasn’t needed.\n\nThe existing WordPress setup introduced unnecessary complexity for a straightforward service website. It slowed down performance, increased maintenance overhead, and created instability.\n\nThe goal was to rebuild the system in a way that aligns with the actual business needs: fast loading, stable behavior, and clear lead capture.",

  solution:
    "The website was rebuilt as a static frontend using HTML, CSS, JavaScript, and Tailwind.\n\nThis eliminated the overhead of a CMS-based system and allowed the site to be deployed through Cloudflare, improving both speed and reliability while reducing hosting costs.\n\nThe structure was also refined to support lead generation more directly:\n- clear homepage messaging and CTAs\n- focused service pages\n- localized location pages for SEO\n- simple, accessible contact forms\n\nThe result is a system that is lighter, faster, and aligned with the business goal: generating leads without friction.",

  testimonial:
    "The new site is faster, cleaner, and finally just works the way it should.",

  results: [
    { label: "Website_State", value: "Rebuilt" },
    { label: "Performance", value: "Improved" },
    { label: "Hosting_Cost", value: "Reduced" },
    { label: "Lead_Flow", value: "More Direct" },
  ],

  gallery: [
    {
      type: "single",
      image: "/projects/cheap-movers-glendale/cheap-movers-glendale-homepage-hero-lead-generation.webp",
      alt: "Cheap Movers Glendale homepage with local moving services, clear call-to-action, and quote-focused layout",
      caption:
        "Homepage designed for clarity, fast loading, and immediate lead capture.",
      href: "https://cheapmoversglendale.com",
      hrefLabel: "Open_Live_Site",
      kind: "deployment",
    },
    {
      type: "single",
      image: "/projects/cheap-movers-glendale/cheap-movers-glendale-local-moving-service-page.webp",
      alt: "Local moving service page targeting residential moves in Glendale with structured content and service details",
      caption:
        "Service page structured to capture intent and guide users toward conversion.",
      kind: "workflow",
    },
    {
      type: "single",
      image: "/projects/cheap-movers-glendale/cheap-movers-glendale-burbank-location-page-local-seo.webp",
      alt: "Burbank movers location page optimized for local SEO with service coverage and area-specific content",
      caption:
        "Location page supporting local SEO with structured content and relevant sections.",
      kind: "deployment",
    },
    {
      type: "single",
      image: "/projects/cheap-movers-glendale/cheap-movers-glendale-contact-form-conversion.webp",
      alt: "Moving quote contact form for Cheap Movers Glendale designed for fast lead capture and minimal friction",
      caption:
        "Simple and direct contact form designed to reduce friction and increase lead submissions.",
      kind: "workflow",
    },
  ],

  seo: {
    title:
      "Static Website Rebuild Case Study | Cheap Movers Glendale | Lecobyte",
    description:
      "How Lecobyte transformed a slow and unstable WordPress site into a fast, reliable static website for Cheap Movers Glendale, improving performance, reducing costs, and streamlining lead generation.",
    keywords: [
      "wordpress to static website",
      "website performance optimization",
      "local service website rebuild",
      "moving company website case study",
      "static site lead generation",
      "cheap movers glendale website",
      "fast loading business website",
    ],
    image:  "/projects/cheap-movers-glendale/cheap-movers-glendale-homepage-hero-lead-generation.webp",
  },
} as const;

export default cheapMoversGlendaleProject;