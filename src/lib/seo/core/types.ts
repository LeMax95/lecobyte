export type SeoImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

export type SeoRobots = {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nocache?: boolean;
  noimageindex?: boolean;
  nosnippet?: boolean;
  notranslate?: boolean;
  googleBot?: {
    index?: boolean;
    follow?: boolean;
    noimageindex?: boolean;
    "max-video-preview"?: number;
    "max-image-preview"?: "none" | "standard" | "large";
    "max-snippet"?: number;
  };
};

export type SeoBreadcrumbItem = {
  name: string;
  url: string;
};

export type SeoSiteIdentity = {
  name: string;
  url: string;
  defaultTitle: string;
  titleTemplate?: string;
  defaultDescription: string;
  defaultLocale: string;
  defaultOgImage?: SeoImage | null;
  sameAs?: string[];
};

export type ResolvedSeoPage = {
  title: string;
  description: string;
  canonical: string;
  robots?: SeoRobots;
  keywords?: string[];
  openGraph?: {
    type?: "website" | "article";
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    locale?: string;
    images?: SeoImage[];
  };
  twitter?: {
    card?: "summary" | "summary_large_image";
    title?: string;
    description?: string;
    images?: string[];
    creator?: string;
    site?: string;
  };
  breadcrumbs?: SeoBreadcrumbItem[];
  schema?: Array<Record<string, unknown>>;
};

export type SitemapUrlEntry = {
  url: string;
  lastModified?: string;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
};