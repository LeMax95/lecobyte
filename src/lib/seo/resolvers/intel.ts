import { getAllIntel } from "@/lib/intel";
import { getIntelSeoConfig } from "@/lib/seoContent";
import { buildCanonical } from "../core/canonical";
import { buildJsonLdGraph } from "../jsonld";
import { makeIndexRobots } from "../core/robots";
import { makeSchemaId, toAbsoluteUrl } from "../core/urls";
import type { ResolvedSeoPage } from "../core/types";
import { makeBreadcrumbSchema } from "../schema/breadcrumb";
import { makeItemListSchema } from "../schema/itemList";
import { makeWebPageSchema } from "../schema/webpage";
import { resolveSiteSeo } from "./site";

export async function resolveIntelSeo(): Promise<ResolvedSeoPage> {
  const [{ site, ids, schema: siteSchema }, seoConfig, posts] = await Promise.all([
    resolveSiteSeo(),
    getIntelSeoConfig(),
    getAllIntel(),
  ]);

  const canonical = buildCanonical(site.url, "/intel");
  const title = seoConfig.title;
  const description = seoConfig.description;
  const imageUrl =
    toAbsoluteUrl(site.url, seoConfig.image) || site.defaultOgImage?.url;

  const breadcrumbs = [
    { name: "Home", url: buildCanonical(site.url, "/") },
    { name: "Intel", url: canonical },
  ];

  const breadcrumbId = makeSchemaId(canonical, "breadcrumb");
  const webpageId = makeSchemaId(canonical, "webpage");
  const itemListId = makeSchemaId(canonical, "itemlist");

  const webPage = makeWebPageSchema({
    id: webpageId,
    url: canonical,
    name: title,
    description,
    isPartOfId: ids.websiteId,
    breadcrumbId,
  });

  const breadcrumbSchema = makeBreadcrumbSchema(breadcrumbs, breadcrumbId);

  const itemListSchema = makeItemListSchema(
    posts.map((post) => ({
      name: post.title.replaceAll("_", " "),
      url: buildCanonical(site.url, `/intel/${post.slug}`),
    })),
    itemListId
  );

  const graph = buildJsonLdGraph([
    siteSchema.organization,
    siteSchema.localBusiness,
    siteSchema.website,
    webPage,
    breadcrumbSchema,
    itemListSchema,
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
        ? [{ url: imageUrl, alt: "Lecobyte Intel" }]
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