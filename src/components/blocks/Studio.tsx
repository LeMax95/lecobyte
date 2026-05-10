'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { StudioContent } from '@/lib/schema';

export default function Studio({ content }: { content: StudioContent }) {
  return (
    <section className="border-b border-zinc-100 bg-white px-6 py-20 md:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="relative">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#FF4D00]" />
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-zinc-500">
              {content.label}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="relative aspect-[16/11] overflow-hidden border border-zinc-200 bg-zinc-100 shadow-[0_28px_80px_rgba(0,0,0,0.08)]"
          >
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center brightness-[1.18] contrast-[0.88] saturate-[0.12] transition-all duration-1000 hover:brightness-[1.22] hover:contrast-[0.94] hover:saturate-[0.22]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.055)_50%),linear-gradient(90deg,rgba(255,0,0,0.018),rgba(0,255,0,0.008),rgba(0,0,255,0.018))] bg-[length:100%_2px,3px_100%] opacity-[0.08]" />
          </motion.div>
        </div>

        <div className="relative lg:pl-4">
          <motion.h2
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="mb-9 text-5xl font-black uppercase leading-[0.82] tracking-tighter text-black sm:text-6xl md:text-7xl xl:text-8xl"
          >
            {content.titleLine1} <br />
            <span className="font-light italic text-[#FF4D00] drop-shadow-sm">
              {content.titleLine2}
            </span>
          </motion.h2>

          <p className="max-w-md border-l-2 border-[#FF4D00]/25 pl-6 text-lg font-medium lowercase leading-tight text-zinc-400 md:text-xl">
            {content.description}
          </p>

          <div className="mt-9 flex gap-3 md:gap-4">
            {content.socialLinks.map((platform) => (
              <a
                key={platform.label}
                href={platform.href}
                aria-label={platform.label}
                className="flex h-12 w-12 items-center justify-center border border-zinc-200 font-mono text-[10px] font-black uppercase italic tracking-tighter text-black transition-all hover:border-[#FF4D00] hover:bg-[#FF4D00] hover:text-white"
              >
                {platform.shortLabel}
              </a>
            ))}
          </div>

          <div className="absolute bottom-0 right-0 hidden opacity-[0.04] md:block">
            <pre className="font-mono text-[8px] uppercase leading-none">
              {content.codeFragment}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}