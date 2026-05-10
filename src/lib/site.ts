import rawSiteConfig from "@/content/site";
import { SiteConfigSchema, type SiteConfig } from "@/lib/schema";

const siteConfig: SiteConfig = SiteConfigSchema.parse(rawSiteConfig);

export async function getSiteConfig(): Promise<SiteConfig> {
  return siteConfig;
}