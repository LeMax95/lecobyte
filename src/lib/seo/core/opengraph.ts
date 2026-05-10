import type { ResolvedSeoPage, SeoSiteIdentity } from "./types";

export function buildOpenGraph(
  site: SeoSiteIdentity,
  page: Pick<ResolvedSeoPage, "title" | "description" | "canonical" | "openGraph">
) {
  return {
    type: page.openGraph?.type ?? "website",
    title: page.openGraph?.title ?? page.title,
    description: page.openGraph?.description ?? page.description,
    url: page.openGraph?.url ?? page.canonical,
    siteName: page.openGraph?.siteName ?? site.name,
    locale: page.openGraph?.locale ?? site.defaultLocale,
    images:
      page.openGraph?.images && page.openGraph.images.length > 0
        ? page.openGraph.images
        : site.defaultOgImage
          ? [site.defaultOgImage]
          : undefined,
  };
}