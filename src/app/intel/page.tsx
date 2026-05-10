import type { Metadata } from 'next';

import { getAllIntel } from '@/lib/intel';
import IntelIndexClient from '@/components/blocks/IntelIndexClient';
import { RenderJsonLd, resolveIntelSeo, resolveSiteSeo, toNextMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const [siteSeo, pageSeo] = await Promise.all([
    resolveSiteSeo(),
    resolveIntelSeo(),
  ]);

  return toNextMetadata(siteSeo.site, pageSeo);
}

export default async function IntelPage() {
  const [posts, seo] = await Promise.all([
    getAllIntel(),
    resolveIntelSeo(),
  ]);

  return (
    <>
      {seo.schema?.map((item, index) => (
        <RenderJsonLd
          key={`intel-index-jsonld-${index}`}
          data={item}
        />
      ))}

      <IntelIndexClient posts={posts} />
    </>
  );
}