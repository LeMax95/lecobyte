import rawServicesSeo from '@/content/seo/services';
import rawCustomSoftwareSeo from '@/content/seo/services-custom-software';
import rawWebDevelopmentSeo from '@/content/seo/services-web-development';
import rawLandingPageDevelopmentSeo from '@/content/seo/services-landing-page-development';
import rawSystemRecoverySeo from '@/content/seo/services-system-recovery';

import {
  PageSeoConfigSchema,
  type PageSeoConfig,
} from '@/lib/schema';

const servicesSeo: PageSeoConfig = PageSeoConfigSchema.parse(rawServicesSeo);

const serviceSeoBySlug: Record<string, PageSeoConfig> = {
  'custom-software': PageSeoConfigSchema.parse(rawCustomSoftwareSeo),
  'web-development': PageSeoConfigSchema.parse(rawWebDevelopmentSeo),
  'landing-page-development': PageSeoConfigSchema.parse(rawLandingPageDevelopmentSeo),
  'system-recovery': PageSeoConfigSchema.parse(rawSystemRecoverySeo),
};

export async function getServicesSeoConfig(): Promise<PageSeoConfig> {
  return servicesSeo;
}

export async function getServiceSeoConfigBySlug(
  slug: string
): Promise<PageSeoConfig | undefined> {
  return serviceSeoBySlug[slug];
}