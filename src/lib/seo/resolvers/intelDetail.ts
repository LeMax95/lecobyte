import { getIntelBySlug } from "@/lib/intel";
import { buildCanonical } from "../core/canonical";
import { buildJsonLdGraph } from "../jsonld";
import { makeIndexRobots } from "../core/robots";
import { makeSchemaId } from "../core/urls";
import type { ResolvedSeoPage } from "../core/types";
import { makeArticleSchema } from "../schema/article";
import { makeBreadcrumbSchema } from "../schema/breadcrumb";
import { makeWebPageSchema } from "../schema/webpage";
import { resolveSiteSeo } from "./site";

function toSchemaDateTime(value?: string | null): string | undefined {
  if (!value) return undefined;

  const normalized = value.includes(".") ? value.replace(/\./g, "-") : value;
  const date = new Date(normalized);

  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return date.toISOString();
}

export async function resolveIntelDetailSeo(
  slug: string
): Promise<ResolvedSeoPage | null> {
  const post = await getIntelBySlug(slug);

  if (!post) {
    return null;
  }

  const { site, ids, schema: siteSchema } = await resolveSiteSeo();
  const canonical = buildCanonical(site.url, `/intel/${post.slug}`);

  const title = post.title.replaceAll("_", " ");
  const description = post.summary;

  const breadcrumbs = [
    { name: "Home", url: buildCanonical(site.url, "/") },
    { name: "Intel", url: buildCanonical(site.url, "/intel") },
    { name: title, url: canonical },
  ];

  const breadcrumbId = makeSchemaId(canonical, "breadcrumb");
  const webpageId = makeSchemaId(canonical, "webpage");
  const articleId = makeSchemaId(canonical, "article");

  const webPage = makeWebPageSchema({
    id: webpageId,
    url: canonical,
    name: title,
    description,
    isPartOfId: ids.websiteId,
    breadcrumbId,
  });

  const breadcrumbSchema = makeBreadcrumbSchema(breadcrumbs, breadcrumbId);

  const articleSchema = makeArticleSchema({
    id: articleId,
    url: canonical,
    headline: title,
    description,
    image: site.defaultOgImage?.url ? [site.defaultOgImage.url] : undefined,
    authorName: post.author?.name || site.name,
    publisherName: site.name,
    publisherId: ids.organizationId,
    publisherLogo: site.defaultOgImage?.url,
    mainEntityOfPageId: webpageId,
    datePublished: toSchemaDateTime(post.date),
    dateModified: toSchemaDateTime(post.date),
  });

  const graph = buildJsonLdGraph([
    siteSchema.organization,
    siteSchema.localBusiness,
    siteSchema.website,
    webPage,
    breadcrumbSchema,
    articleSchema,
  ]);

  return {
    title,
    description,
    canonical,
    robots: makeIndexRobots(),
    breadcrumbs,
    openGraph: {
      type: "article",
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: site.defaultLocale,
      images: site.defaultOgImage ? [site.defaultOgImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: site.defaultOgImage ? [site.defaultOgImage.url] : undefined,
    },
    schema: [graph],
  };
}