'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { HeroContent } from '@/lib/schema';
import HeroVisual from '@/components/home/HeroVisual';

export default function Hero({
  content,
  availabilityLabel,
}: {
  content: HeroContent;
  availabilityLabel: string;
}) {
  const normalizedDescription = content.description
    .split('\n')
    .map((line) => line.replace(/^\/\//, '').trim())
    .filter(Boolean)
    .join(' ');

  return (
    <section className="relative overflow-hidden border-b border-border bg-background px-6 pt-28 pb-16 sm:pt-32 md:pt-40 lg:min-h-screen lg:px-16 lg:pt-0 lg:pb-0">
      {/* background grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(#000 0.5px, transparent 0.5px), linear-gradient(to right, #000 0.5px, transparent 0.5px), linear-gradient(to bottom, #000 0.5px, transparent 0.5px)',
          backgroundSize: '40px 40px, 40px 40px, 40px 40px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:min-h-screen lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
          
          {/* LEFT CONTENT */}
          <div className="order-1 lg:order-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* status */}
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>

                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.15em] text-foreground">
                    STATUS: <span className="text-accent">{content.statusLabel}</span>
                  </span>
                </div>

                <div className="hidden h-[1px] w-8 bg-border xs:block" />

                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  {content.versionLabel}
                </span>
              </div>

              {/* title */}
              <h1 className="mb-6 text-[clamp(3.2rem,11vw,8.5rem)] font-black leading-[0.85] uppercase tracking-tighter text-foreground">
                {content.titleMain}
                <span className="text-zinc-200">{content.titleAccent}</span>
                <span className="animate-pulse text-accent">_</span>
              </h1>

              {/* description */}
              <p className="mb-10 max-w-xl text-lg font-medium leading-snug text-zinc-500 lowercase md:text-2xl xl:text-3xl">
                <span className="font-bold text-foreground">//</span> {normalizedDescription}
              </p>

              {/* CTA */}
              <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <Link
                  href={content.primaryCtaHref}
                  className="group relative overflow-hidden bg-foreground px-10 py-5 text-center font-black text-[10px] uppercase tracking-[0.25em] text-background transition-transform active:scale-95"
                >
                  <span className="relative z-10">{content.primaryCtaLabel}</span>
                  <div className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0" />
                </Link>

                <Link
                  href={content.secondaryCtaHref}
                  className="flex items-center justify-center gap-3 border border-border px-10 py-5 font-black text-[10px] uppercase tracking-[0.25em] text-foreground transition-all hover:bg-surface active:scale-95"
                >
                  {content.secondaryCtaLabel} <span className="text-accent">→</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="order-2 mt-10 flex justify-center lg:order-none lg:mt-0 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[380px] sm:max-w-[520px] lg:max-w-[820px] xl:max-w-[860px]"
            >
              <div className="relative aspect-[1.1/1] w-full sm:aspect-[1.2/1] lg:aspect-[1.28/1]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_50%,rgba(255,92,0,0.07),transparent_58%)]" />
                <HeroVisual />
                <span className="sr-only">{content.founderAlt}</span>
              </div>

              {/* BUILD QUEUE (desktop only) */}
              <div className="mt-6 hidden lg:block lg:pr-10">
                <div className="flex items-end justify-between">
                  <span className="font-mono text-[9px] font-black uppercase text-zinc-400">
                    BUILD_QUEUE
                  </span>
                  <span className="font-mono text-[10px] font-black uppercase text-accent">
                    {availabilityLabel}
                  </span>
                </div>

                <div className="mt-3 h-1 w-full bg-zinc-100">
                  <div className="h-full w-[20%] bg-accent" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}