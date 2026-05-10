import type { Metadata } from 'next';
import Link from 'next/link';

import { getAllServices } from '@/lib/services';
import { getServicesSeoConfig } from '@/lib/service-seo';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getServicesSeoConfig();

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : undefined,
    },
  };
}

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <main className="bg-white">
      <section className="py-24 md:py-44 px-6 border-b border-zinc-100 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-10 md:gap-12">
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 md:w-12 bg-[#FF4D00]" />
                <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">
                  //_SERVICE_INDEX
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.75] text-black">
                What <br />
                <span
                  className="text-transparent opacity-20 italic font-light"
                  style={{ WebkitTextStroke: '1px black' }}
                >
                  I_Build
                </span>
              </h1>
            </div>

            <div className="max-w-xs space-y-4">
              <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest leading-relaxed">
                Focused service pages for specific systems, workflows, and technical problems.
              </p>
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-1 w-4 bg-zinc-100" />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-100 border border-zinc-100">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white p-8 md:p-12 hover:bg-zinc-50 transition-colors group"
              >
                <span className="inline-block bg-zinc-50 text-[#FF4D00] border border-zinc-100 px-3 py-1 font-mono text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded-sm">
                  SERVICE
                </span>

                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-[0.95] group-hover:translate-x-2 transition-transform">
                  {service.hero.titleLine1}{' '}
                  <span className="italic font-light text-zinc-300">
                    {service.hero.titleLine2}
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-zinc-500 text-base md:text-lg leading-relaxed font-medium">
                  {service.hero.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}