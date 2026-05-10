'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Terminal as TerminalIcon } from 'lucide-react';
import type { AboutContent } from '@/lib/schema';

export default function About({ content }: { content: AboutContent }) {
  return (
    <section id="about" className="py-24 md:py-44 px-6 bg-white overflow-hidden border-b border-zinc-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          <div className="lg:col-span-7 space-y-8 md:space-y-12">
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#FF4D00]" />
                <span className="font-mono text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">
                  {content.eyebrow}
                </span>
              </div>

              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9.5rem] font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.8] text-black lg:max-w-[95%]">
                {content.titleLine1} <br />
                <span
                  className="text-transparent stroke-black stroke-1 opacity-20 italic font-light"
                  style={{ WebkitTextStroke: '1px black' }}
                >
                  {content.titleLine2}
                </span>{' '}
                <br />
                {content.titleLine3}
              </h2>
            </div>

            <div className="space-y-6 md:space-y-8 text-lg md:text-2xl text-zinc-500 leading-relaxed max-w-2xl font-medium italic">
              <p>{content.intro}</p>
              <p className="not-italic text-zinc-400 text-base md:text-xl leading-relaxed border-l-2 border-zinc-100 pl-6 md:pl-8">
                {content.body}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-44 w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="relative p-8 md:p-14 bg-zinc-50 border border-zinc-100 group overflow-hidden will-change-transform shadow-sm"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-10 md:mb-16">
                  <h3 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 text-[#FF4D00]">
                    <TerminalIcon className="w-4 h-4" /> System_Specifications
                  </h3>
                  <Activity className="w-4 h-4 text-[#FF4D00] animate-pulse" />
                </div>

                <div className="space-y-8 md:space-y-12">
                  {content.stats.map((stat) => (
                    <div key={stat.label} className="group/stat relative">
                      <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-[0.2em] mb-2 md:mb-3">
                        {stat.label}_KEY
                      </p>
                      <div className="flex justify-between items-end gap-4">
                        <p className="text-xl md:text-2xl xl:text-3xl font-black uppercase tracking-tighter text-black group-hover/stat:text-[#FF4D00] transition-colors duration-300 break-words leading-none">
                          {stat.value}
                        </p>
                        <ShieldCheck className="w-4 h-4 flex-shrink-0 text-zinc-200 group-hover/stat:text-[#FF4D00] transition-colors" />
                      </div>
                      <div className="h-[1px] w-full bg-zinc-200 mt-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#FF4D00] transform translate-x-[-101%] group-hover/stat:translate-x-0 transition-transform duration-500 ease-out" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 right-0 p-2">
                <span className="font-mono text-[8px] text-zinc-200 uppercase tracking-tighter">SECURE_ID_v4</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}