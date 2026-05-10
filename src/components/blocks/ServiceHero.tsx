'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ServiceHeroContent } from '@/lib/schema';

export default function ServiceHero({ content }: { content: ServiceHeroContent }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-28 px-6 border-b border-zinc-100 bg-white overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#000 0.5px, transparent 0.5px), linear-gradient(to right, #000 0.5px, transparent 0.5px), linear-gradient(to bottom, #000 0.5px, transparent 0.5px)',
          backgroundSize: '40px 40px, 40px 40px, 40px 40px',
        }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 md:w-12 bg-[#FF4D00]" />
            <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">
              {content.eyebrow}
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.75] text-black">
            {content.titleLine1} <br />
            <span
              className="text-transparent opacity-20 italic font-light"
              style={{ WebkitTextStroke: '1px black' }}
            >
              {content.titleLine2}
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-zinc-500 text-lg md:text-xl font-medium leading-relaxed">
            {content.description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href={content.primaryCtaHref}
              className="group relative px-10 py-5 bg-black text-white font-black text-[10px] uppercase tracking-[0.25em] overflow-hidden transition-transform active:scale-95 text-center"
            >
              <span className="relative z-10">{content.primaryCtaLabel}</span>
              <div className="absolute inset-0 bg-[#FF4D00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </Link>

            <Link
              href={content.secondaryCtaHref}
              className="px-10 py-5 border border-zinc-200 font-black text-[10px] uppercase tracking-[0.25em] hover:bg-zinc-50 transition-all flex items-center justify-center gap-3 text-black active:scale-95"
            >
              {content.secondaryCtaLabel} <span className="text-[#FF4D00]">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}