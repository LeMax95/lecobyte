import type { Metadata } from "next";
import {
  resolveArchiveSeo,
  resolveSiteSeo,
  toNextMetadata,
  RenderJsonLd,
} from "@/lib/seo";
import { getArchivePage } from "@/lib/archive";
import ArchivePageClient from "./ArchivePageClient";

export async function generateMetadata(): Promise<Metadata> {
  const [siteSeo, pageSeo] = await Promise.all([
    resolveSiteSeo(),
    resolveArchiveSeo(),
  ]);

  return toNextMetadata(siteSeo.site, pageSeo);
}

export default async function ArchivePage() {
  const [seo, content] = await Promise.all([
    resolveArchiveSeo(),
    getArchivePage(),
  ]);

  return (
    <>
      {seo.schema?.map((item, index) => (
        <RenderJsonLd key={`archive-jsonld-${index}`} data={item} />
      ))}
      <ArchivePageClient content={content} />
    </>
  );
}