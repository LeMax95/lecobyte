export function makeOrganizationSchema(input: {
  id: string;
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}) {
  return {
    "@type": "Organization",
    "@id": input.id,
    name: input.name,
    url: input.url,
    ...(input.logo
      ? {
          logo: {
            "@type": "ImageObject",
            url: input.logo,
          },
        }
      : {}),
    ...(input.sameAs?.length ? { sameAs: input.sameAs } : {}),
  };
}