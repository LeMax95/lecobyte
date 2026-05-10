export const bronzoraProject = {
  slug: "bronzora",
  id: "PRJ_001",
  title: "Bronzora",
  clientName: "Bronzora Studio",
  category: "Content, Booking & SEO Platform for Experience-Based Business",
  mainImage: "/projects/bronzora/bronzora-studio-homepage-hero-metal-clay-workshops.webp",

  liveUrl: "https://bronzora.com",
  liveLabel: "View_Live_System",

  summary:
    "A custom-built content, booking, and SEO system created from the ground up for a studio business, where pages, scheduling, and search visibility are generated from one structured system instead of being managed separately.",

  beforeState:
    "Before this project, the business had no real owned digital system — only a small WordPress page and third-party listings. That setup allowed basic visibility, but could not support structured content, scalable SEO, reliable booking logic, or long-term growth.\n\nContent, booking, and presentation were disconnected. This made it difficult to grow the website into something that could properly represent the business, support SEO, or scale without constant manual work.",

  builtFor:
    "Studio / experience-based service business with classes, products, and bookings",

  serviceSlug: "web-development",
  serviceLabel: "Web Development",

  relevanceTitle: "If the business needs more than a website — it needs a system.",
  relevanceBody:
    "This type of project becomes relevant when the business is no longer limited by demand, but by how its digital layer behaves. If content, booking, and SEO feel fragmented — and growth depends on multiple disconnected tools or manual work — the solution is not another redesign, but a structured system that can generate, manage, and scale everything together.",

  metric: "System built from scratch",
  duration: "Multi-phase system development",
  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "MDX Structured Content",
    "SEO Resolver System",
    "Rule-Based Booking Engine",
    "Admin Page Builder",
  ],

  challenge:
    "The challenge was not to improve an existing website, but to replace a fragmented setup with a complete digital system.\n\nThe business needed to support classes, products, and content, while also improving search visibility and creating a more credible online presence. Traditional approaches — CMS platforms, booking plugins, and template-based sites — could not handle the required structure.\n\nContent needed to be expandable and SEO-aligned, booking needed to support multi-session logic and real availability, and the system had to remain consistent without constant manual intervention.\n\nIn practice, this meant replacing not just a website, but the way the digital layer of the business was structured and maintained.",

  solution:
    "The solution was to build a system where the business no longer depends on separate tools for content, booking, and SEO.\n\nInstead, all parts of the website are generated from structured definitions.\n\nA block-based content architecture allows pages to be composed from reusable sections such as feature explanations, process steps, testimonials, and editorial content. This enables each page to naturally expand around real search intent instead of relying on rigid templates.\n\nAt the same time, the system introduces entity-based generation: classes, products, gift cards, and articles are created in the admin and automatically transformed into structured pages with correct URLs, metadata, and schema.\n\nBooking is handled through a rule-based engine where availability is defined through templates and constraints rather than manually created slots. The system generates valid schedules, manages capacity, and ensures consistency through transactional booking logic.\n\nA resolver-based SEO layer ensures that each page type — whether class, product, or article — produces the correct structured data, metadata, and internal linking signals. Combined with a controlled data pipeline, this creates a stable, predictable frontend that reflects real business data.\n\nInstead of a static website, the result is a system that continuously generates pages, availability, and search-ready content from a single structured foundation.",

  testimonial:
    "The site finally feels like a real system we can grow, not just something we maintain.",

  results: [
    { label: "Website_State", value: "System-Based" },
    { label: "Content_Model", value: "Structured" },
    { label: "Booking_System", value: "Rule-Driven" },
    { label: "SEO_Foundation", value: "Embedded" },
  ],

  heroImageFit: "cover",
  heroImageMuted: false,

  galleryTitle: "Content_Booking_And_SEO_System",
  galleryIntro:
    "Selected frontend and admin views showing how Bronzora combines structured content, rule-based booking, and system-driven SEO into one scalable platform.",

  gallery: [
    {
      type: "single",
      image: "/projects/bronzora/bronzora-studio-homepage-hero-metal-clay-workshops.webp",
      alt: "Bronzora studio homepage hero promoting metal clay jewelry workshops, handmade bronze pieces, and studio classes",
      title: "Homepage_Hero",
      caption:
        "Editorial homepage hero establishing brand, positioning, and conversion paths for classes and products.",
      href: "https://bronzora.com",
      hrefLabel: "Open_Live_Site",
      kind: "deployment",
      emphasis: "primary",
      fit: "cover",
    },

    {
      type: "composite",
      title: "Frontend_Content_System",
      intro:
        "How structured pages appear on the frontend, combining editorial presentation, informational depth, and conversion-oriented page architecture.",
      kind: "deployment",
      fit: "contain",
      views: [
        {
          label: "Class Landing",
          image:
            "/projects/bronzora/bronze-clay-class-landing-page-bronzora-workshop-details.webp",
          alt: "Bronze clay workshop landing page with class details, process explanation, benefits, and booking-focused page sections",
          caption:
            "Class landing pages combine educational content, section order, and conversion-focused structure before the booking flow begins.",
        },
        {
          label: "Article Page",
          image:
            "/projects/bronzora/bronzora-clay-craft-article-content-seo-page.webp",
          alt: "Editorial article page about clay craft techniques and studio knowledge designed for SEO content growth",
          caption:
            "Article pages are rendered as editorial content assets designed to expand topical authority and support internal SEO structure.",
        },
      ],
    },

    {
      type: "composite",
      title: "Booking_Engine",
      intro:
        "Rule-based booking flow supporting multiple scheduling models, structured attendee capture, and integrated payment.",
      kind: "workflow",
      emphasis: "secondary",
      fit: "contain",
      views: [
        {
          label: "Bundle Selection",
          image:
            "/projects/bronzora/multi-session-bundle-selection-booking-ui.webp",
          alt: "Workshop booking interface showing multi-session bundle options with predefined class schedules",
          caption:
            "For classes defined as bundled sessions, the system presents predefined date-and-time sets instead of generic availability.",
        },
        {
          label: "Date Selection",
          image:
            "/projects/bronzora/date-based-availability-selection-calendar-booking-ui.webp",
          alt: "Calendar availability picker for booking a studio class or workshop by date",
          caption:
            "For single-session flows, the engine exposes calendar-based availability rather than fixed bundles.",
        },
        {
          label: "Time Slots",
          image:
            "/projects/bronzora/single-session-time-slot-selection-booking-ui.webp",
          alt: "Time slot selection interface for flexible single-session workshop booking",
          caption:
            "When the booking rules allow flexible single-session selection, available times are generated as structured slot choices.",
        },
        {
          label: "Attendee Details",
          image:
            "/projects/bronzora/bronze-clay-class-booking-form-attendee-details.webp",
          alt: "Workshop booking form collecting attendee information, participant count, and promo or discount details",
          caption:
            "The booking flow captures attendee information, participant count, and discounts within the same structured checkout process.",
        },
        {
          label: "Payment",
          image:
            "/projects/bronzora/bronze-clay-class-checkout-payment-integration.webp",
          alt: "Secure checkout page for workshop booking with payment integration and final order confirmation step",
          caption:
            "Payment is handled as the final booking step, completing the flow without relying on disconnected third-party booking pages.",
        },
      ],
    },

    {
      type: "composite",
      title: "Admin_Control_System",
      intro:
        "Admin-side control layer for pages, booking rules, pricing, and content entities, allowing the business to evolve the system without rebuilding it.",
      kind: "engine",
      emphasis: "primary",
      fit: "contain",
      views: [
        {
          label: "Page Builder",
          image:
            "/projects/bronzora/modular-page-builder-sections-editor-bronzora-admin.webp",
          alt: "Admin page builder for composing structured website pages with modular content sections",
          caption:
            "Pages are assembled through a modular builder where reusable sections define structure instead of one-off layouts.",
        },
        {
          label: "Schedule Logic",
          image:
            "/projects/bronzora/class-scheduling-setup-bundle-mode-booking-rules-admin.webp",
          alt: "Admin booking setup for bundle-based class scheduling rules and session logic",
          caption:
            "Booking behavior is configured through rule logic such as bundle mode, session requirements, and scheduling constraints.",
        },
        {
          label: "Schedule Rules",
          image:
            "/projects/bronzora/class-scheduling-time-rules-capacity-week-pattern-admin.webp",
          alt: "Admin scheduling rules interface with time patterns, recurring availability, and class capacity settings",
          caption:
            "Recurring schedules, time rules, and capacity behavior are defined in the admin rather than hardcoded into the frontend.",
        },
        {
          label: "Pricing",
          image:
            "/projects/bronzora/class-pricing-duration-capacity-settings-admin.webp",
          alt: "Admin pricing settings for workshop duration, session count, package pricing, and class capacity",
          caption:
            "Business rules such as duration, sessions required, pricing, and capacity are managed as structured configuration.",
        },
        {
          label: "Content Config",
          image:
            "/projects/bronzora/class-content-features-images-configuration-admin.webp",
          alt: "Admin content configuration for workshop features, images, descriptions, and call-to-action settings",
          caption:
            "Class-specific features, media, and CTA content are maintained through the admin so frontend pages remain consistent and scalable.",
        },
      ],
    },
  ],

  seo: {
    title: "Bronzora Case Study | Content, Booking & SEO Platform",
    description:
      "How Lecobyte built Bronzora as a structured content, booking, and SEO system for a studio business, combining rule-based scheduling, admin-driven page generation, and scalable search architecture.",
    keywords: [
      "booking system case study",
      "seo website system",
      "structured content website",
      "class booking platform",
      "custom web platform",
      "studio website development",
      "service business website system",
      "Bronzora case study",
    ],
    image:
      "/projects/bronzora/bronzora-studio-homepage-hero-metal-clay-workshops.webp",
  },
} as const;

export default bronzoraProject;