import type { SitemapUrlEntry } from "../core/types";
import { buildSitemapXml } from "../core/sitemap";

export function buildSitemapResponse(entries: SitemapUrlEntry[]) {
  return new Response(buildSitemapXml(entries), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}