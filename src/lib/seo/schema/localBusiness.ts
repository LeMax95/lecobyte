export function makeLocalBusinessSchema(input: {
  id: string;
  organizationId?: string;
  name: string;
  url: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  image?: string;
  sameAs?: string[];
}) {
  return {
    "@type": "LocalBusiness",
    "@id": input.id,
    ...(input.organizationId
      ? {
          parentOrganization: {
            "@id": input.organizationId,
          },
        }
      : {}),
    name: input.name,
    url: input.url,
    ...(input.description ? { description: input.description } : {}),
    ...(input.telephone ? { telephone: input.telephone } : {}),
    ...(input.email ? { email: input.email } : {}),
    ...(input.address
      ? {
          address: {
            "@type": "PostalAddress",
            ...(input.address.streetAddress ? { streetAddress: input.address.streetAddress } : {}),
            ...(input.address.addressLocality ? { addressLocality: input.address.addressLocality } : {}),
            ...(input.address.addressRegion ? { addressRegion: input.address.addressRegion } : {}),
            ...(input.address.postalCode ? { postalCode: input.address.postalCode } : {}),
            ...(input.address.addressCountry ? { addressCountry: input.address.addressCountry } : {}),
          },
        }
      : {}),
    ...(input.image ? { image: input.image } : {}),
    ...(input.sameAs?.length ? { sameAs: input.sameAs } : {}),
  };
}