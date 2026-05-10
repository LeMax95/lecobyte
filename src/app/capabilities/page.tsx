import type { Metadata } from 'next';
import {
  resolveCapabilitiesSeo,
  resolveSiteSeo,
  toNextMetadata,
  RenderJsonLd,
} from '@/lib/seo';
import { getCapabilitiesPage } from '@/lib/capabilities';
import {
  Shield,
  Cpu,
  Layers,
  Terminal,
  Activity,
  Globe,
  Lock,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

function getCardIcon(icon: 'layers' | 'cpu' | 'shield') {
  switch (icon) {
    case 'layers':
      return <Layers className="w-5 h-5" />;
    case 'cpu':
      return <Cpu className="w-5 h-5" />;
    case 'shield':
      return <Shield className="w-5 h-5" />;
  }
}

function getStatIcon(icon: 'activity' | 'globe' | 'lock') {
  switch (icon) {
    case 'activity':
      return <Activity className="w-4 h-4" />;
    case 'globe':
      return <Globe className="w-4 h-4" />;
    case 'lock':
      return <Lock className="w-4 h-4" />;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const [siteSeo, pageSeo] = await Promise.all([
    resolveSiteSeo(),
    resolveCapabilitiesSeo(),
  ]);

  return toNextMetadata(siteSeo.site, pageSeo);
}

export default async function CapabilitiesPage() {
  const [seo, content] = await Promise.all([
    resolveCapabilitiesSeo(),
    getCapabilitiesPage(),
  ]);

  return (
    <>
      {seo.schema?.map((item, index) => (
        <RenderJsonLd key={`capabilities-jsonld-${index}`} data={item} />
      ))}

      <main className="bg-white min-h-screen pt-24 md:pt-32 pb-10 md:pb-20 px-4 md:px-6 font-sans">
        <div className="max-w-[1440px] mx-auto">
          <header className="mb-16 md:mb-24 border-b border-zinc-100 pb-8 md:pb-12">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
              <span className="font-mono text-[#FF4D00] text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase">
                {content.eyebrow}
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.8] text-black mb-6 md:mb-8">
              {content.title}
            </h1>
            <p className="text-lg md:text-3xl text-zinc-500 max-w-3xl font-medium leading-tight">
              {content.description}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100 mb-20 md:mb-32">
            {content.cards.map((cap) => (
              <div key={cap.id} className="bg-white p-8 md:p-16 hover:bg-zinc-50 transition-colors group">
                <div className="flex justify-between items-start mb-10 md:mb-12">
                  <div className="p-3 bg-black text-white group-hover:bg-[#FF4D00] transition-colors">
                    {getCardIcon(cap.icon)}
                  </div>
                  <span className="font-mono text-[9px] md:text-[10px] text-zinc-300 font-bold tracking-widest">
                    REQ_MOD_{cap.id}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 md:mb-6 text-black">
                  {cap.title}
                </h3>
                <p className="text-sm md:text-base text-zinc-500 mb-6 md:mb-8 leading-relaxed font-medium">
                  {cap.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 md:pt-6 border-t border-zinc-100">
                  {cap.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[8px] md:text-[9px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-50 px-2 py-1">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <section className="mb-20 md:mb-32">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <Terminal className="w-4 h-4 text-[#FF4D00]" />
              <h2 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                {content.inventoryLabel}
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 md:gap-8">
              {content.stack.map((item) => (
                <div key={item.category} className="border-l-2 border-zinc-100 pl-4 md:pl-6 py-1">
                  <h4 className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] uppercase mb-3 md:mb-4 tracking-widest font-bold">
                    {item.category}
                  </h4>
                  <ul className="space-y-1 md:space-y-2">
                    {item.tools.map((tool) => (
                      <li key={tool} className="text-base md:text-lg font-black uppercase tracking-tighter text-black">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 md:mb-32 py-10 md:py-16 bg-zinc-50 border-y border-zinc-100 px-6 md:px-10">
            {content.stats.map((stat, i) => (
              <div key={i} className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start">
                <div className="flex items-center gap-4 md:block">
                  <div className="text-[#FF4D00] md:mb-4">{getStatIcon(stat.icon)}</div>
                  <span className="font-mono text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-widest md:mb-1">
                    {stat.label}
                  </span>
                </div>
                <span className="text-2xl md:text-4xl font-black text-black">{stat.val}</span>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 py-16 md:py-24 border-t border-zinc-100">
            <div className="lg:col-span-4">
              <h2 className="font-mono text-[10px] font-black text-[#FF4D00] tracking-[0.4em] uppercase mb-6 md:mb-8">
                {content.methodologyEyebrow}
              </h2>
              <p className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black leading-tight mb-4">
                {content.methodologyTitle}
              </p>
              <p className="text-sm md:text-base text-zinc-500 font-medium italic">
                {content.methodologyQuote}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {content.methodSteps.map((step, i) => (
                <div key={i} className="flex gap-4 md:gap-6 items-start group">
                  <span className="text-[#FF4D00] font-mono text-xs font-black">0{i + 1}—</span>
                  <div>
                    <h4 className="font-black uppercase tracking-tight text-black mb-1 md:mb-2">
                      {step.label}
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium uppercase tracking-tight">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 md:mt-32 p-8 md:p-24 bg-black text-white text-center relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter mb-8 md:mb-12 leading-none">
                {content.ctaTitle}
              </h2>
              <Link
                href="/connect"
                className="inline-flex items-center gap-3 bg-[#FF4D00] text-white font-mono text-[10px] md:text-xs font-black py-4 px-8 md:px-10 tracking-[0.2em] md:tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all"
              >
                {content.ctaLabel}
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <span className="absolute inset-0 flex items-center justify-center text-[8rem] md:text-[30rem] font-black text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.05] transition-all duration-1000">
              ACTION
            </span>
          </section>
        </div>
      </main>
    </>
  );
}