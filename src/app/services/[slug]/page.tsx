import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ServiceHero from '@/components/blocks/ServiceHero';
import ServiceIntro from '@/components/blocks/ServiceIntro';
import ServiceGrid from '@/components/blocks/ServiceGrid';
import ServiceComparison from '@/components/blocks/ServiceComparison';
import ServiceProcess from '@/components/blocks/ServiceProcess';
import ServiceFaq from '@/components/blocks/ServiceFaq';
import ServiceCta from '@/components/blocks/ServiceCta';

import { getAllServices, getServiceBySlug } from '@/lib/services';
import { getServiceSeoConfigBySlug } from '@/lib/service-seo';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const services = await getAllServices();

  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const [service, seo] = await Promise.all([
    getServiceBySlug(slug),
    getServiceSeoConfigBySlug(slug),
  ]);

  if (!service) {
    return {
      title: 'Service Not Found | Lecobyte',
    };
  }

  const fallbackTitle = `${service.hero.titleLine1} ${service.hero.titleLine2} | Lecobyte`;
  const fallbackDescription = service.hero.description;

  return {
    title: seo?.title ?? fallbackTitle,
    description: seo?.description ?? fallbackDescription,
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.title ?? fallbackTitle,
      description: seo?.description ?? fallbackDescription,
      images: seo?.image ? [seo.image] : undefined,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const signItems = service.signs.map((item, index) => ({
    title: `Signal_${String(index + 1).padStart(2, '0')}`,
    desc: item,
  }));

  return (
    <main className="bg-white">
      <ServiceHero content={service.hero} />

      <ServiceIntro content={service.intro} />

      <ServiceGrid
        eyebrow="//_RECOGNITION_LAYER"
        title="When_It"
        accent="Starts_Breaking"
        items={signItems}
      />

      <div id="use-cases">
        <ServiceGrid
          eyebrow="//_USE_CASES"
          title="What_It"
          accent="Can_Be"
          items={service.useCases}
        />
      </div>

      <ServiceComparison content={service.comparison} />

      <ServiceProcess steps={service.process} />

      <ServiceFaq items={service.faq} />

      <ServiceCta content={service.cta} />
    </main>
  );
}