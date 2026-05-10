import { getConnectSeoConfig } from "@/lib/seoContent";
import { buildCanonical } from "../core/canonical";
import { buildJsonLdGraph } from "../jsonld";
import { makeIndexRobots } from "../core/robots";
import { toAbsoluteUrl } from "../core/urls";
import type { ResolvedSeoPage } from "../core/types";
import { makeBreadcrumbSchema } from "../schema/breadcrumb";
import { makeWebPageSchema } from "../schema/webpage";
import { resolveSiteSeo } from "./site";

export async function resolveConnectSeo(): Promise<ResolvedSeoPage> {
  const [{ site, ids, schema: siteSchema }, seoConfig] = await Promise.all([
    resolveSiteSeo(),
    getConnectSeoConfig(),
  ]);

  const canonical = buildCanonical(site.url, "/connect");
  const title = seoConfig.title;
  const description = seoConfig.description;
  const imageUrl =
    toAbsoluteUrl(site.url, seoConfig.image) || site.defaultOgImage?.url;

  const breadcrumbs = [
    { name: "Home", url: buildCanonical(site.url, "/") },
    { name: "Connect", url: canonical },
  ];

  const webPage = makeWebPageSchema({
    id: `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOfId: ids.websiteId,
    breadcrumbId: `${canonical}#breadcrumb`,
  });

  const breadcrumbSchema = makeBreadcrumbSchema(breadcrumbs, `${canonical}#breadcrumb`);

  const graph = buildJsonLdGraph([
    siteSchema.organization,
    siteSchema.localBusiness,
    siteSchema.website,
    webPage,
    breadcrumbSchema,
  ]);

  return {
    title,
    description,
    canonical,
    robots: makeIndexRobots(),
    keywords: seoConfig.keywords,
    breadcrumbs,
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: site.defaultLocale,
      images: imageUrl
        ? [{ url: imageUrl, alt: title }]
        : site.defaultOgImage
          ? [site.defaultOgImage]
          : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
    schema: [graph],
  };
}