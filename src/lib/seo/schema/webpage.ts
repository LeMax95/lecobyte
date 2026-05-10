export function makeWebPageSchema(input: {
  id: string;
  url: string;
  name: string;
  description?: string;
  isPartOfId?: string;
  breadcrumbId?: string;
}) {
  return {
    "@type": "WebPage",
    "@id": input.id,
    url: input.url,
    name: input.name,
    ...(input.description ? { description: input.description } : {}),
    ...(input.isPartOfId
      ? {
          isPartOf: {
            "@id": input.isPartOfId,
          },
        }
      : {}),
    ...(input.breadcrumbId
      ? {
          breadcrumb: {
            "@id": input.breadcrumbId,
          },
        }
      : {}),
  };
}