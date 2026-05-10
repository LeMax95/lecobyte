import { getProjectBySlug } from "@/lib/projects";
import { buildCanonical } from "../core/canonical";
import { buildJsonLdGraph } from "../jsonld";
import { makeIndexRobots } from "../core/robots";
import { makeSchemaId, toAbsoluteUrl } from "../core/urls";
import type { ResolvedSeoPage } from "../core/types";
import { makeArticleSchema } from "../schema/article";
import { makeBreadcrumbSchema } from "../schema/breadcrumb";
import { makeWebPageSchema } from "../schema/webpage";
import { resolveSiteSeo } from "./site";

export async function resolveProjectDetailSeo(
  slug: string
): Promise<ResolvedSeoPage | null> {
  const project = await getProjectBySlug(slug);

  if (!project) {
    return null;
  }

  const { site, ids, schema: siteSchema } = await resolveSiteSeo();
  const canonical = buildCanonical(site.url, `/projects/${project.slug}`);

  const title = project.title.replaceAll("_", " ");
  const description =
    project.challenge?.trim() ||
    project.solution?.trim() ||
    `${title} project case study from Lecobyte.`;

  const imageUrl =
    toAbsoluteUrl(site.url, project.mainImage) || site.defaultOgImage?.url;

  const breadcrumbs = [
    { name: "Home", url: buildCanonical(site.url, "/") },
    { name: "Projects", url: buildCanonical(site.url, "/#work") },
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
    image: imageUrl ? [imageUrl] : undefined,
    authorName: site.name,
    publisherName: site.name,
    publisherId: ids.organizationId,
    publisherLogo: site.defaultOgImage?.url,
    mainEntityOfPageId: webpageId,
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
      images: imageUrl
        ? [
            {
              url: imageUrl,
              alt: title,
            },
          ]
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