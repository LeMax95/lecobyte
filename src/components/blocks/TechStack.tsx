'use client';
import { motion } from 'framer-motion';
import type { TechStackGroup } from '@/lib/schema';

export default function TechStack({ stack }: { stack: TechStackGroup[] }) {
  return (
    <section className="relative py-24 md:py-44 px-6 w-full bg-white overflow-hidden border-b border-zinc-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-10 md:gap-12">
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 md:w-12 bg-[#FF4D00]" />
              <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">
                //_STACK_SPECIFICATIONS
              </span>
            </div>
            <h2 className="text-6xl sm:text-8xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.75] text-black">
              The <br />
              <span
                className="text-transparent stroke-black stroke-1 opacity-20 italic font-light"
                style={{ WebkitTextStroke: '1px black' }}
              >
                Engine_
              </span>
            </h2>
          </div>

          <div className="text-left md:text-right">
            <p className="font-mono text-[8px] md:text-[9px] text-zinc-400 uppercase tracking-[0.2em] leading-relaxed md:leading-loose">
              STABILITY_RATING: 99.9% <br />
              CORE_LATENCY: 42MS <br />
              VERSION: 1.0.4
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 md:gap-16 lg:gap-20 relative z-10">
          {stack.map((item, i) => (
            <div key={i} className="flex flex-col gap-8 md:gap-10 group">
              <div className="flex flex-col gap-2">
                <span className="text-[9px] md:text-[10px] font-mono font-black uppercase tracking-[0.4em] text-[#FF4D00]">
                  {item.area}
                </span>
                <div className="h-[1px] w-full bg-zinc-100 relative overflow-hidden">
                  <motion.div
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '100%' }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                    className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#FF4D00]/20 to-transparent"
                  />
                </div>
              </div>

              <ul className="space-y-8 md:space-y-10">
                {item.tech.map((t, idx) => (
                  <li key={t} className="relative group/item cursor-default flex flex-col gap-3">
                    <div className="flex justify-between items-end">
                      <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-zinc-300 md:text-zinc-400 group-hover/item:text-black transition-colors duration-300">
                        {t}
                      </span>
                      <span className="font-mono text-[7px] md:text-[8px] text-[#FF4D00] opacity-100 md:opacity-0 md:group-hover/item:opacity-100 transition-opacity font-bold">
                        READY_0{idx + 1}
                      </span>
                    </div>

                    <div className="h-[2px] w-full bg-zinc-50 overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (i * 0.1) + (idx * 0.05) }}
                        className="absolute h-full bg-zinc-200 group-hover/item:bg-[#FF4D00] transition-all duration-500 ease-in-out"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <span className="absolute -bottom-10 -right-10 text-[12rem] md:text-[20rem] font-black text-zinc-50 pointer-events-none select-none -z-10 leading-none opacity-40 md:opacity-50">
        04
      </span>
    </section>
  );
}