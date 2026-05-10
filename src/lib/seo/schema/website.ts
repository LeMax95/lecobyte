export function makeWebSiteSchema(input: {
  id: string;
  url: string;
  name: string;
  publisherId?: string;
}) {
  return {
    "@type": "WebSite",
    "@id": input.id,
    url: input.url,
    name: input.name,
    ...(input.publisherId
      ? {
          publisher: {
            "@id": input.publisherId,
          },
        }
      : {}),
  };
}