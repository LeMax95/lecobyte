export type IntelLinkItem = {
  label: string;
  href: string;
  kind: "service" | "project" | "article";
};

export type IntelLinkGroup = {
  primary?: IntelLinkItem;
  secondary?: IntelLinkItem[];
};

export const intelLinkMap: Record<string, IntelLinkGroup> = {
  "why-spreadsheets-break-service-business": {
    primary: {
      label: "Custom Software",
      href: "/services/custom-software",
      kind: "service",
    },
    secondary: [
      {
        label: "Moviq Case Study",
        href: "/projects/moviq",
        kind: "project",
      },
      {
        label: "Why Your Landing Page Is Not Converting",
        href: "/intel/why-your-landing-page-is-not-converting",
        kind: "article",
      },
    ],
  },

  "why-your-landing-page-is-not-converting": {
    primary: {
      label: "Landing Page Development",
      href: "/services/landing-page-development",
      kind: "service",
    },
    secondary: [
      {
        label: "Landing Page & GHL Integration Case Study",
        href: "/projects/landing-page-ghl-integration",
        kind: "project",
      },
      {
        label: "WordPress vs Static Website",
        href: "/intel/wordpress-vs-static-website",
        kind: "article",
      },
    ],
  },

  "why-local-seo-sites-fail": {
    primary: {
      label: "Web Development",
      href: "/services/web-development",
      kind: "service",
    },
    secondary: [
      {
        label: "Local Service Framework Case Study",
        href: "/projects/local-service-framework",
        kind: "project",
      },
      {
        label: "Bronzora Case Study",
        href: "/projects/bronzora",
        kind: "project",
      },
    ],
  },

  "wordpress-vs-static-website": {
    primary: {
      label: "System Recovery",
      href: "/services/system-recovery",
      kind: "service",
    },
    secondary: [
      {
        label: "Cheap Movers Glendale Case Study",
        href: "/projects/cheap-movers-glendale",
        kind: "project",
      },
      {
        label: "Why Local SEO Sites Fail",
        href: "/intel/why-local-seo-sites-fail",
        kind: "article",
      },
    ],
  },
};