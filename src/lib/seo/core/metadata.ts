import { buildOpenGraph } from "./opengraph";
import { buildTwitter } from "./twitter";
import type { ResolvedSeoPage, SeoSiteIdentity } from "./types";

export function composeResolvedSeoPage(
  site: SeoSiteIdentity,
  page: Omit<ResolvedSeoPage, "title"> & { title?: string }
): ResolvedSeoPage {
  return {
    ...page,
    title: page.title?.trim() || site.defaultTitle,
  };
}

export function buildResolvedMetadata(site: SeoSiteIdentity, page: ResolvedSeoPage) {
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.canonical,
    },
    robots: page.robots,
    keywords: page.keywords,
    openGraph: buildOpenGraph(site, page),
    twitter: buildTwitter(page),
  };
}