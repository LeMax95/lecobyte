const moviqLink = "/projects/moviq";
const localServiceFrameworkLink = "/projects/local-service-framework";
const bronzoraLink = "/projects/bronzora";
const agencyLandingSystemLink = "/projects/landing-page-ghl-integration";
const cheapMoversGlendaleLink = "/projects/cheap-movers-glendale";

const archivePage = {
  title: "Archive",
  description:
    "A structured index of flagship systems, deployable frameworks, landing page funnels, rebuilds, and operational platforms behind Lecobyte work.",
  searchPlaceholder: "SEARCH_ARCHIVE: (PROJECT, STACK, CLIENT, OR_FUNCTION)",
  emptyStateLabel: "//_NO_MATCHING_RECORDS_FOUND",
  footerIdleLabel: "Archive_Ready",
  footerFilterPrefix: "Filter_Active:",
  lastSync: "2026.04.05",
  items: [
    // Moviq
    {
      year: "2026",
      title: "Moviq_Operations_System",
      client: "Private Moving Company Deployment",
      tech: [
        "Node.js",
        "PostgreSQL",
        "Express API",
        "Scheduling Logic",
        "Crew Assignment",
        "Operational Workflow",
      ],
      link: moviqLink,
    },
    {
      year: "2026",
      title: "Job_Lifecycle_And_Dispatch_Layer",
      client: "Private Moving Company Deployment",
      tech: ["Job States", "Dispatch Flow", "Assignments", "Operational Tracking"],
      link: moviqLink,
    },
    {
      year: "2026",
      title: "Contracts_Damages_And_Notifications",
      client: "Private Moving Company Deployment",
      tech: ["Document Rendering", "Damage Tracking", "Notifications", "Telegram"],
      link: moviqLink,
    },

    // Local Service Framework
    {
      year: "2026",
      title: "Local_Service_Framework",
      client: "Internal Framework",
      tech: [
        "Next.js",
        "TypeScript",
        "Programmatic SEO",
        "Section Variants",
        "Site Profiles",
        "CLI Scaffolding",
      ],
      link: localServiceFrameworkLink,
    },
    {
      year: "2026",
      title: "Multi_City_Page_Generation_System",
      client: "Internal Framework",
      tech: ["Programmatic SEO", "City Config", "Reusable Sections", "Lead Flow"],
      link: localServiceFrameworkLink,
    },
    {
      year: "2026",
      title: "Theme_Profile_And_Deployment_Model",
      client: "Internal Framework",
      tech: ["Themes", "Profiles", "CLI Workflow", "Multi-Site Structure"],
      link: localServiceFrameworkLink,
    },

    // Bronzora
    {
      year: "2026",
      title: "Bronzora_Content_Booking_SEO_System",
      client: "Bronzora Studio",
      tech: [
        "Next.js",
        "TypeScript",
        "Structured Content",
        "Booking Logic",
        "SEO Architecture",
      ],
      link: bronzoraLink,
    },
    {
      year: "2026",
      title: "Structured_Content_And_Page_Builder",
      client: "Bronzora Studio",
      tech: ["MDX", "Reusable Blocks", "Admin Builder", "Live Preview"],
      link: bronzoraLink,
    },
    {
      year: "2026",
      title: "Rule_Based_Booking_And_Resolver_SEO",
      client: "Bronzora Studio",
      tech: ["Scheduling Rules", "Capacity Logic", "Metadata", "JSON-LD"],
      link: bronzoraLink,
    },

    // Agency landing system
    {
      year: "2026",
      title: "Agency_Landing_System",
      client: "Performance Marketing Agency",
      tech: [
        "WordPress",
        "Elementor",
        "GoHighLevel",
        "Webhook Forms",
        "Tracking Scripts",
      ],
      link: agencyLandingSystemLink,
    },
    {
      year: "2026",
      title: "GHL_Attribution_And_Lead_Routing",
      client: "Performance Marketing Agency",
      tech: ["GHL Tags", "Webhook Integration", "Lead Routing", "Source Tracking"],
      link: agencyLandingSystemLink,
    },
    {
      year: "2026",
      title: "DNS_Hosting_And_Conversion_Setup",
      client: "Performance Marketing Agency",
      tech: ["DNS Setup", "Hostinger", "Custom Plugin", "Conversion Path"],
      link: agencyLandingSystemLink,
    },

    // Cheap Movers Glendale
    {
      year: "2026",
      title: "Cheap_Movers_Glendale_Rebuild",
      client: "Cheap Movers Glendale",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "Cloudflare",
        "Static Deployment",
      ],
      link: cheapMoversGlendaleLink,
    },
    {
      year: "2026",
      title: "WordPress_To_Static_Migration",
      client: "Cheap Movers Glendale",
      tech: ["Static Rebuild", "Performance Cleanup", "Hosting Simplification"],
      link: cheapMoversGlendaleLink,
    },
  ],
} as const;

export default archivePage;