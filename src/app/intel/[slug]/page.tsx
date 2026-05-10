import type { Metadata } from 'next';
import { getIntelBySlug, getAllIntel } from '@/lib/intel';
import { notFound } from 'next/navigation';
import { ArrowLeft, Share2, ShieldAlert, Cpu } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import IntelRelatedLinks from '@/components/intel/IntelRelatedLinks';
import IntelArticleCta from '@/components/intel/IntelArticleCta';
import { intelLinkMap } from '@/content/intel/link-map';

import {
  RenderJsonLd,
  resolveIntelDetailSeo,
  resolveSiteSeo,
  toNextMetadata,
} from '@/lib/seo';

export async function generateStaticParams() {
  const posts = await getAllIntel();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;

  const [siteSeo, pageSeo] = await Promise.all([
    resolveSiteSeo(),
    resolveIntelDetailSeo(resolvedParams.slug),
  ]);

  if (!pageSeo) {
    return {};
  }

  return toNextMetadata(siteSeo.site, pageSeo);
}

export default async function IntelPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [post, seo] = await Promise.all([
    getIntelBySlug(slug),
    resolveIntelDetailSeo(slug),
  ]);

  if (!post || !seo) notFound();

  const linkedPaths = intelLinkMap[slug];

  const MarkdownComponents = {
    h2: ({ ...props }) => (
      <h2
        className="text-3xl md:text-5xl font-black uppercase tracking-tighter mt-20 mb-8 text-black border-l-4 border-[#FF4D00] pl-6"
        {...props}
      />
    ),
    h3: ({ ...props }) => (
      <h3
        className="text-xl md:text-2xl font-black uppercase tracking-tight mt-12 mb-4 text-black"
        {...props}
      />
    ),
    p: ({ ...props }) => (
      <p
        className="text-base md:text-xl leading-[1.8] text-zinc-700 mb-8"
        {...props}
      />
    ),
    ul: ({ ...props }) => (
      <ul
        className="space-y-4 mb-10 list-none font-mono text-sm md:text-base uppercase tracking-tight"
        {...props}
      />
    ),
    li: ({ ...props }) => (
      <li
        className="flex gap-3 before:content-['//'] before:text-[#FF4D00] before:font-black"
        {...props}
      />
    ),
    img: ({ ...props }) => (
      <div className="my-16 border border-zinc-100 p-2 bg-zinc-50">
        <img
          className="w-full grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
          {...props}
        />
        <p className="text-[10px] font-mono text-zinc-400 mt-4 uppercase tracking-[0.3em] text-center">
          //_VISUAL_DATA_RECON: {props.alt}
        </p>
      </div>
    ),
    strong: ({ ...props }) => (
      <strong className="font-black text-black" {...props} />
    ),
    blockquote: ({ ...props }) => (
      <div
        className="my-12 p-8 bg-zinc-900 text-white font-mono text-sm md:text-base border-l-4 border-[#FF4D00]"
        {...props}
      />
    ),
  };

  return (
    <>
      {seo.schema?.map((item, index) => (
        <RenderJsonLd
          key={`intel-detail-jsonld-${index}`}
          data={item}
        />
      ))}

      <main className="bg-white min-h-screen pb-20">
        <div className="fixed top-0 left-0 w-full h-10 md:h-12 bg-white/90 backdrop-blur-md border-b border-zinc-100 z-[100] flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-mono text-[8px] md:text-[9px] text-zinc-400">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF4D00] animate-pulse" />
            <span className="hidden sm:inline">SYSTEM_STATUS:</span> READ_MODE // {post.id}
          </div>
          <div className="font-mono text-[8px] md:text-[9px] text-zinc-400 uppercase tracking-widest">
            EST_TIME: {post.readingTime}
          </div>
        </div>

        <section className="pt-24 md:pt-48 px-4 md:px-6">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            <aside className="lg:col-span-3 lg:sticky lg:top-32 h-fit space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-6 border-t lg:border-t-0 pt-6 lg:pt-0 border-zinc-100">
                <div className="space-y-1">
                  <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-[0.3em]">
                    Written_By
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-[8px] text-white font-bold shrink-0">
                      SL
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase">{post.author.name}</p>
                      <p className="text-[10px] text-zinc-400 font-mono uppercase">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-6 bg-zinc-50 border border-zinc-100 rounded-sm">
                <p className="font-mono text-[10px] text-[#FF4D00] font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-3 h-3" /> System_Note
                </p>
                <p className="text-[10px] md:text-[11px] leading-relaxed text-zinc-500 uppercase font-mono">
                  This document contains high-level architectural intelligence. share only within authorized nodes.
                </p>
              </div>
            </aside>

            <div className="lg:col-span-8 lg:col-start-5 order-1 lg:order-2 overflow-hidden">
              <Link
                href="/intel"
                className="group inline-flex items-center gap-2 font-mono text-[9px] md:text-[10px] text-zinc-400 mb-8 md:mb-12 hover:text-[#FF4D00] transition-colors"
              >
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> BACK_TO_INTEL
              </Link>

              <header className="mb-12 md:mb-20">
                <span className="font-mono text-[#FF4D00] text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-4 md:mb-6">
                  //_INTEL_REPORT: {post.date}
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-black uppercase tracking-tighter leading-[0.85] text-black mb-10 break-words">
                  {post.title.replaceAll('_', ' ')}
                </h1>
                <p className="text-lg md:text-2xl font-medium text-zinc-500 leading-snug max-w-2xl">
                  {post.summary}
                </p>
              </header>

              <article className="max-w-none">
                <ReactMarkdown components={MarkdownComponents}>
                  {post.body}
                </ReactMarkdown>
              </article>

              <IntelRelatedLinks links={linkedPaths} />
              <IntelArticleCta />

              <div className="mt-20 md:mt-32 pt-10 border-t border-zinc-100 flex flex-row justify-between items-center gap-6">
                <button className="flex items-center gap-2 md:gap-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-widest hover:text-[#FF4D00] transition-colors">
                  <Share2 className="w-4 h-4" /> <span className="hidden sm:inline">Share_Intel</span>
                </button>
                <div className="flex items-center gap-2 font-mono text-[9px] md:text-[10px] text-zinc-400 uppercase">
                  <Cpu className="w-3 h-3" /> Node_Secure_2026
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}