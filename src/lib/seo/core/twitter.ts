import type { ResolvedSeoPage } from "./types";

export function buildTwitter(
  page: Pick<ResolvedSeoPage, "title" | "description" | "twitter" | "openGraph">
) {
  const images =
    page.twitter?.images && page.twitter.images.length > 0
      ? page.twitter.images
      : page.openGraph?.images?.map((item) => item.url);

  return {
    card: page.twitter?.card ?? "summary_large_image",
    title: page.twitter?.title ?? page.title,
    description: page.twitter?.description ?? page.description,
    images,
    creator: page.twitter?.creator,
    site: page.twitter?.site,
  };
}