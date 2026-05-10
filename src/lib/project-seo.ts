import rawProjectsSeo from '@/content/seo/projects/projects';
import rawBronzoraSeo from '@/content/seo/projects/project-bronzora';
import rawFpMoversSeo from '@/content/seo/projects/project-fp-movers';
import rawMoversNetworkSeo from '@/content/seo/projects/project-movers-network';
import rawLaProMovingLandingSeo from '@/content/seo/projects/project-lapromoving-landing-page';
import rawCheapMoversGlendaleSeo from '@/content/seo/projects/project-cheap-movers-glendale';

import {
  PageSeoConfigSchema,
  type PageSeoConfig,
} from '@/lib/schema';

const projectsSeo: PageSeoConfig = PageSeoConfigSchema.parse(rawProjectsSeo);

const projectSeoBySlug: Record<string, PageSeoConfig> = {
   bronzora: PageSeoConfigSchema.parse(rawBronzoraSeo),
  'fp-movers': PageSeoConfigSchema.parse(rawFpMoversSeo),
  'local-service-framework': PageSeoConfigSchema.parse(rawMoversNetworkSeo),
  'lapromoving-landing-page': PageSeoConfigSchema.parse(rawLaProMovingLandingSeo),
  'cheap-movers-glendale': PageSeoConfigSchema.parse(rawCheapMoversGlendaleSeo),
};

export async function getProjectsSeoConfig(): Promise<PageSeoConfig> {
  return projectsSeo;
}

export async function getProjectSeoConfigBySlug(
  slug: string
): Promise<PageSeoConfig | undefined> {
  return projectSeoBySlug[slug];
}