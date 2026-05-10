import siteConfig from "@/content/site";
import { getSiteSeoConfig } from "@/lib/seoContent";
import { makeSchemaId, toAbsoluteUrl } from "../core/urls";
import type { SeoSiteIdentity } from "../core/types";
import { makeLocalBusinessSchema } from "../schema/localBusiness";
import { makeOrganizationSchema } from "../schema/organization";
import { makeWebSiteSchema } from "../schema/website";

function getResolvedSiteUrl(configUrl: string): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/+$/, "");
  }

  return configUrl.replace(/\/+$/, "");
}

export async function getSiteIdentity(): Promise<SeoSiteIdentity> {
  const seoConfig = await getSiteSeoConfig();
  const siteUrl = getResolvedSiteUrl(seoConfig.siteUrl);

  const sameAs = [
    siteConfig.socialLinks.linkedin,
    siteConfig.socialLinks.github,
    siteConfig.socialLinks.x,
    siteConfig.socialLinks.instagram,
  ].filter(Boolean);

  return {
    name: seoConfig.siteName,
    url: siteUrl,
    defaultTitle: seoConfig.defaultTitle,
    titleTemplate: seoConfig.titleTemplate,
    defaultDescription: seoConfig.defaultDescription,
    defaultLocale: seoConfig.defaultLocale,
    defaultOgImage: {
      url: toAbsoluteUrl(siteUrl, seoConfig.defaultOgImage.url)!,
      width: seoConfig.defaultOgImage.width,
      height: seoConfig.defaultOgImage.height,
      alt: seoConfig.defaultOgImage.alt,
    },
    sameAs,
  };
}

export async function resolveSiteSeo() {
  const site = await getSiteIdentity();

  const organizationId = makeSchemaId(`${site.url}/`, "organization");
  const websiteId = makeSchemaId(`${site.url}/`, "website");
  const localBusinessId = makeSchemaId(`${site.url}/`, "localbusiness");

  const organization = makeOrganizationSchema({
    id: organizationId,
    name: site.name,
    url: site.url,
    logo: site.defaultOgImage?.url,
    sameAs: site.sameAs,
  });

  const localBusiness = makeLocalBusinessSchema({
    id: localBusinessId,
    organizationId,
    name: site.name,
    url: site.url,
    description: site.defaultDescription,
    email: siteConfig.email,
    image: site.defaultOgImage?.url,
    sameAs: site.sameAs,
  });

  const website = makeWebSiteSchema({
    id: websiteId,
    url: site.url,
    name: site.name,
    publisherId: organizationId,
  });

  return {
    site,
    ids: {
      organizationId,
      websiteId,
      localBusinessId,
    },
    schema: {
      organization,
      localBusiness,
      website,
    },
  };
}