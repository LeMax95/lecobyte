import type { Metadata } from "next";
import {
  resolveConnectSeo,
  resolveSiteSeo,
  toNextMetadata,
  RenderJsonLd,
} from "@/lib/seo";
import { getConnectPage } from "@/lib/connect";
import ConnectPageClient from "./ConnectPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const [siteSeo, pageSeo] = await Promise.all([
    resolveSiteSeo(),
    resolveConnectSeo(),
  ]);

  return toNextMetadata(siteSeo.site, pageSeo);
}

export default async function ConnectPage() {
  const [seo, content] = await Promise.all([
    resolveConnectSeo(),
    getConnectPage(),
  ]);

  return (
    <>
      {seo.schema?.map((item, index) => (
        <RenderJsonLd key={`connect-jsonld-${index}`} data={item} />
      ))}
      <ConnectPageClient content={content} />
    </>
  );
}