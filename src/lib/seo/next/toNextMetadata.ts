import type { Metadata } from "next";
import type { ResolvedSeoPage, SeoSiteIdentity } from "../core/types";
import { buildResolvedMetadata } from "../core/metadata";

export function toNextMetadata(
  site: SeoSiteIdentity,
  page: ResolvedSeoPage
): Metadata {
  const resolved = buildResolvedMetadata(site, page);

  return {
    title: resolved.title,
    description: resolved.description,
    alternates: resolved.alternates,
    robots: resolved.robots,
    keywords: resolved.keywords,
    openGraph: resolved.openGraph,
    twitter: resolved.twitter,
  };
}