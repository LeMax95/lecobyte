'use client';
import { motion } from 'framer-motion';
import type { ImpactContent } from '@/lib/schema';

export default function Impact({ content }: { content: ImpactContent }) {
  return (
    <section className="py-24 md:py-40 px-6 bg-white border-b border-zinc-100 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          <div className="lg:col-span-7 relative min-w-0">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <div className="h-px w-8 bg-[#FF4D00]" />
              <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.35em] md:tracking-[0.4em] break-words">
                {content.eyebrow}
              </span>
            </div>

            <div className="relative inline-block w-full">
              <h2 className="text-[18vw] sm:text-[15vw] lg:text-[11rem] xl:text-[12rem] font-black uppercase leading-[0.9] tracking-[-0.05em] text-black">
                {content.mainValue.replace('%', '')}
                {content.mainValue.includes('%') && (
                  <span className="text-[#FF4D00]">%</span>
                )}
              </h2>

              <div
                className="absolute top-0 left-0 text-[18vw] sm:text-[15vw] lg:text-[11rem] xl:text-[12rem] font-black uppercase leading-[0.9] tracking-[-0.05em] text-transparent hidden sm:block -z-10 translate-x-2 translate-y-2"
                style={{ WebkitTextStroke: '1px #e4e4e7' }}
              >
                {content.mainValue}
              </div>
            </div>

            <div className="mt-6 md:mt-5 max-w-md">
              <span className="inline-block bg-zinc-50 text-[#FF4D00] border border-zinc-100 px-3 py-1 font-mono text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-4 rounded-sm">
                {content.badge}
              </span>

              <p className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-[0.95] text-black">
                {content.title}
                <br className="hidden md:block" />
                <span className="italic text-zinc-300 font-light">
                  {content.subtitle}
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-px bg-zinc-100 border border-zinc-100 p-px">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-10 group hover:bg-zinc-50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest mb-4">
                    {content.metricOneLabel}
                  </p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter italic text-black">
                    {content.metricOneValue.split('/')[0]}
                    {content.metricOneValue.includes('/') && (
                      <span className="text-zinc-200">
                        /{content.metricOneValue.split('/')[1]}
                      </span>
                    )}
                  </h3>
                </div>
                <div className="h-2 w-2 bg-[#FF4D00] animate-pulse" />
              </div>

              <div className="w-full bg-zinc-50 h-[2px] mt-8 overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '0%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-[#FF4D00] h-full w-[98%]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 md:p-10 group hover:bg-zinc-50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest mb-4">
                    {content.metricTwoLabel}
                  </p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black">
                    {content.metricTwoValue.replace('%', '')}
                    {content.metricTwoValue.includes('%') && (
                      <span className="text-zinc-200">%</span>
                    )}
                  </h3>
                </div>
                <div className="h-2 w-2 bg-zinc-100" />
              </div>

              <div className="mt-8 flex items-center gap-2 font-mono text-[9px] text-[#FF4D00] font-black uppercase tracking-widest">
                <span className="flex h-1.5 w-1.5 rounded-full bg-[#FF4D00]" />
                {content.metricTwoStatus}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}