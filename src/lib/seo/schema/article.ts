export function makeArticleSchema(input: {
  id: string;
  url: string;
  headline: string;
  description?: string;
  image?: string[];
  authorName?: string;
  authorUrl?: string;
  publisherName: string;
  publisherId?: string;
  publisherLogo?: string;
  mainEntityOfPageId?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@type": "Article",
    "@id": input.id,
    url: input.url,
    headline: input.headline,
    ...(input.description ? { description: input.description } : {}),
    ...(input.image?.length ? { image: input.image } : {}),
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    author: {
      "@type": "Person",
      name: input.authorName || "Lecobyte",
      ...(input.authorUrl ? { url: input.authorUrl } : {}),
    },
    publisher: input.publisherId
      ? { "@id": input.publisherId }
      : {
          "@type": "Organization",
          name: input.publisherName,
          ...(input.publisherLogo
            ? {
                logo: {
                  "@type": "ImageObject",
                  url: input.publisherLogo,
                },
              }
            : {}),
        },
    mainEntityOfPage: input.mainEntityOfPageId
      ? { "@id": input.mainEntityOfPageId }
      : input.url,
  };
}