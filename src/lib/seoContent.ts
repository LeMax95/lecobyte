import rawSiteSeo from "@/content/seo/site";
import rawHomeSeo from "@/content/seo/home";
import rawIntelSeo from "@/content/seo/intel";
import rawCapabilitiesSeo from "@/content/seo/capabilities";
import rawArchiveSeo from "@/content/seo/archive";
import rawConnectSeo from "@/content/seo/connect";

import {
  SiteSeoConfigSchema,
  PageSeoConfigSchema,
  type SiteSeoConfig,
  type PageSeoConfig,
} from "@/lib/schema";

const siteSeo: SiteSeoConfig = SiteSeoConfigSchema.parse(rawSiteSeo);
const homeSeo: PageSeoConfig = PageSeoConfigSchema.parse(rawHomeSeo);
const intelSeo: PageSeoConfig = PageSeoConfigSchema.parse(rawIntelSeo);
const capabilitiesSeo: PageSeoConfig = PageSeoConfigSchema.parse(rawCapabilitiesSeo);
const archiveSeo: PageSeoConfig = PageSeoConfigSchema.parse(rawArchiveSeo);
const connectSeo: PageSeoConfig = PageSeoConfigSchema.parse(rawConnectSeo);

export async function getSiteSeoConfig(): Promise<SiteSeoConfig> {
  return siteSeo;
}

export async function getHomeSeoConfig(): Promise<PageSeoConfig> {
  return homeSeo;
}

export async function getIntelSeoConfig(): Promise<PageSeoConfig> {
  return intelSeo;
}

export async function getCapabilitiesSeoConfig(): Promise<PageSeoConfig> {
  return capabilitiesSeo;
}

export async function getArchiveSeoConfig(): Promise<PageSeoConfig> {
  return archiveSeo;
}

export async function getConnectSeoConfig(): Promise<PageSeoConfig> {
  return connectSeo;
}