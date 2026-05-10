'use client';
import { motion } from 'framer-motion';
import type { Testimonial } from '@/lib/schema';

export default function Testimonials({ reviews }: { reviews: Testimonial[] }) {
  return (
    <section className="py-24 md:py-44 px-6 bg-white overflow-hidden border-t border-zinc-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-10 md:gap-12">
          <div className="relative">
            <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] block mb-4">
              //_SYSTEM_VALIDATION
            </span>
            <h2 className="text-6xl sm:text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.75] text-black">
              Client <br />
              <span
                className="text-transparent stroke-black stroke-1 opacity-20 italic font-light"
                style={{ WebkitTextStroke: '1px black' }}
              >
                Logs_
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-24">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative flex flex-col cursor-default"
              style={{ transform: 'translateZ(0)' }}
            >
              <div className="flex justify-between items-center mb-8 border-b border-zinc-100 pb-4 relative z-10">
                <span className="font-mono text-[9px] md:text-[10px] font-black text-black tracking-[0.2em] group-hover:text-[#FF4D00] transition-colors duration-300">
                  [RE_LOG: 00{i + 1}]
                </span>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#FF4D00] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity animate-pulse" />
                  <span className="font-mono text-[8px] md:text-[9px] text-zinc-400 uppercase tracking-widest italic opacity-60 md:opacity-40">
                    {r.tag}
                  </span>
                </div>
              </div>

              <div className="relative mb-12 md:mb-16 z-10">
                <p className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[1.1] text-black transition-all duration-500 md:group-hover:translate-x-2">
                  "{r.text}"
                </p>
              </div>

              <div className="mt-auto bg-zinc-50 border border-zinc-100 p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative z-10 transition-all duration-500 md:group-hover:bg-white md:group-hover:border-[#FF4D00]/20 md:group-hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-zinc-200 border border-zinc-300 flex items-center justify-center overflow-hidden grayscale md:group-hover:grayscale-0 transition-all duration-700">
                    <span className="font-mono text-[10px] md:text-xs font-black">
                      {r.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-black text-lg md:text-xl uppercase tracking-tighter leading-none text-black">
                      {r.name}
                    </p>
                    <p className="text-[9px] md:text-[10px] text-zinc-400 font-mono uppercase tracking-[0.2em] mt-1.5">
                      {r.role}
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-auto">
                  <div className="px-3 md:px-4 py-2 bg-white border border-zinc-200 shadow-sm font-mono text-[10px] md:text-[11px] text-black font-black uppercase tracking-tighter group-hover:border-[#FF4D00] group-hover:text-[#FF4D00] transition-all duration-500 text-center sm:text-right">
                    {r.metric}
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-[-10px] md:inset-x-[-20px] inset-y-[-10px] md:inset-y-[-20px] bg-[#FF4D00]/[0.02] opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-xl" />

              <div className="absolute inset-0 pointer-events-none opacity-5 md:opacity-0 md:group-hover:opacity-20 transition-opacity duration-700 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}