'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import type { VisualArchiveItem } from '@/lib/schema';

export default function VisualArchive({ archive }: { archive: VisualArchiveItem[] }) {
  const [selectedImg, setSelectedImg] = useState<VisualArchiveItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImg(null);
    };

    if (selectedImg) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImg]);

  return (
    <section className="w-full overflow-hidden border-t border-zinc-100 bg-white px-6 py-24 md:py-44">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:mb-24 md:flex-row md:items-end md:gap-12">
          <div className="relative w-full md:w-auto">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-[#FF4D00] md:w-12" />
              <span className="font-mono text-[9px] font-black uppercase tracking-[0.4em] text-[#FF4D00] md:text-[10px] md:tracking-[0.6em]">
                //_SYSTEM_LAB_ARCHIVE
              </span>
            </div>

            <h2 className="text-5xl font-black uppercase leading-[0.85] tracking-tighter text-black sm:text-7xl md:text-[9rem] md:leading-[0.75]">
              The <br className="hidden md:block" />
              <span
                className="inline-block italic font-light text-transparent opacity-20 md:block"
                style={{ WebkitTextStroke: '1px black' }}
              >
                Lab_
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-500 md:text-base">
              Selected deployment outputs, live implementations, and system views that connect
              Lecobyte’s featured work to the underlying framework and archive.
            </p>
          </div>

          <div className="text-left md:text-right">
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] leading-relaxed text-zinc-400 md:text-[9px] md:leading-loose">
              STATUS: DEEP_SCAN_ACTIVE <br className="hidden md:block" />
              INDEX: {archive.length}_MODULES_LOADED <br className="hidden md:block" />
              SECURITY: LEVEL_4
            </p>
          </div>
        </div>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[320px] md:gap-6">
          {archive.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              layoutId={`card-${item.id}`}
              onClick={() => setSelectedImg(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden border border-zinc-100 bg-zinc-50 text-left transition-all duration-500 hover:border-[#FF4D00]/40 ${item.size}`}
            >
              <div className="absolute inset-0 h-full w-full">
                <img
                  src={item.img}
                  className="h-full w-full object-cover grayscale transition-all duration-[1.2s] ease-out group-hover:scale-105 group-hover:grayscale-0"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-70 md:opacity-40" />
              </div>

              <div className="absolute left-6 right-6 top-6 z-10 flex items-start justify-between">
                <span className="border border-zinc-100 bg-white px-2 py-1 font-mono text-[9px] font-black uppercase tracking-widest text-black">
                  {item.tag}
                </span>
                <ArrowUpRight className="h-4 w-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </div>

              <div className="pointer-events-none absolute bottom-8 left-8 z-10">
                <h3 className="mb-2 text-2xl font-black uppercase tracking-tighter text-white transition-colors group-hover:text-[#FF4D00] md:text-3xl">
                  {item.title}
                </h3>
                <p className="max-w-[220px] translate-y-2 font-mono text-[9px] uppercase tracking-widest text-white/60 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.desc}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="absolute inset-0 cursor-zoom-out bg-black/95 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.15 }}
              className="fixed right-6 top-[max(120px,env(safe-area-inset-top))] z-[10001] md:right-12 md:top-12"
            >
              <button
                className="group rounded-full border border-white/10 bg-white/5 p-4 text-white transition-all duration-300 hover:bg-[#FF4D00] active:scale-90"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImg(null);
                }}
              >
                <X className="h-8 w-8 transition-transform duration-300 group-hover:rotate-90 md:h-10 md:w-10" />
              </button>
            </motion.div>

            <motion.div
              layoutId={`card-${selectedImg.id}`}
              transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.8 }}
              className="relative z-[10000] h-full w-full overflow-hidden bg-zinc-900 shadow-2xl md:h-auto md:max-w-[1200px] md:aspect-video md:border md:border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.img}
                className="h-full w-full select-none object-cover"
                alt={selectedImg.title}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-8 md:p-12">
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                  <div className="max-w-xl">
                    <span className="mb-4 block font-mono text-[10px] font-black uppercase tracking-[0.4em] text-[#FF4D00] underline decoration-[#FF4D00]/30 underline-offset-8 md:text-xs">
                      //_METADATA: {selectedImg.tag}
                    </span>

                    <h3 className="text-4xl font-black uppercase leading-none tracking-tighter text-white sm:text-6xl md:text-8xl">
                      {selectedImg.title}
                    </h3>
                  </div>

                  <div className="flex w-full flex-col items-start md:w-auto md:items-end">
                    <p className="mb-6 max-w-xs text-left font-mono text-[10px] uppercase tracking-widest text-white/60 md:text-right">
                      {selectedImg.desc}
                    </p>

                    {selectedImg.href ? (
                      selectedImg.linkType === 'external' ? (
                        <a
                          href={selectedImg.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-[#FF4D00] px-10 py-5 text-center font-mono text-xs font-black uppercase tracking-[0.2em] text-white shadow-[0_0_30px_rgba(255,77,0,0.2)] transition-all hover:bg-white hover:text-black md:w-auto"
                        >
                          {selectedImg.hrefLabel ?? 'Open_Link'}
                        </a>
                      ) : (
                        <Link
                          href={selectedImg.href}
                          className="w-full bg-[#FF4D00] px-10 py-5 text-center font-mono text-xs font-black uppercase tracking-[0.2em] text-white shadow-[0_0_30px_rgba(255,77,0,0.2)] transition-all hover:bg-white hover:text-black md:w-auto"
                        >
                          {selectedImg.hrefLabel ?? 'Open_Link'}
                        </Link>
                      )
                    ) : (
                      <button
                        className="w-full cursor-default bg-[#FF4D00] px-10 py-5 text-center font-mono text-xs font-black uppercase tracking-[0.2em] text-white shadow-[0_0_30px_rgba(255,77,0,0.2)] md:w-auto"
                        type="button"
                      >
                        System_View
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}