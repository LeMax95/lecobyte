'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronRight } from 'lucide-react';
import type { Faq } from '@/lib/schema';

export default function FAQ({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-44 px-6 bg-white overflow-hidden border-t border-zinc-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-10 md:gap-12">
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 md:w-12 bg-[#FF4D00]" />
              <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">
                //_CORE_PARAMETERS
              </span>
            </div>
            <h2 className="text-6xl sm:text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.75] text-black">
              System <br />
              <span
                className="text-transparent stroke-black stroke-1 opacity-20 italic font-light"
                style={{ WebkitTextStroke: '1px black' }}
              >
                FAQ_
              </span>
            </h2>
          </div>

          <div className="text-left md:text-right">
            <p className="font-mono text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-[0.2em] leading-relaxed md:leading-loose">
              [SCANNING_QUERIES...] <br />
              TOTAL_RECORDS: {faqs.length.toString().padStart(3, '0')} <br />
              STATUS: ONLINE
            </p>
          </div>
        </div>

        <div className="border-t border-zinc-100">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-zinc-100 group transition-colors hover:bg-zinc-50/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-10 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center text-left gap-6 md:gap-8 px-2 md:px-4 transition-all"
              >
                <div className="flex items-center gap-6 md:gap-8 md:w-1/3">
                  <span className="font-mono text-[10px] text-[#FF4D00] font-black">
                    0{i + 1}_
                  </span>
                  <span className="font-mono text-[8px] md:text-[9px] px-2 py-0.5 bg-zinc-100 text-zinc-400 font-bold tracking-widest uppercase">
                    {faq.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter text-black md:w-1/2 md:group-hover:translate-x-2 transition-transform duration-500">
                  {faq.q}
                </h3>

                <div className="w-full md:w-1/6 flex justify-end">
                  <div
                    className={`h-10 w-10 md:h-12 md:w-12 rounded-full border border-zinc-200 flex items-center justify-center transition-all duration-500 ${
                      openIndex === i
                        ? 'bg-black border-black rotate-180'
                        : 'md:group-hover:border-[#FF4D00]'
                    }`}
                  >
                    {openIndex === i ? (
                      <Minus className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 md:w-5 md:h-5 text-black md:group-hover:text-[#FF4D00]" />
                    )}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 md:pb-16 px-4 md:pl-[12.5rem] md:pr-12 flex flex-col lg:flex-row gap-10 md:gap-12">
                      <div className="flex-1">
                        <p className="text-lg md:text-2xl text-zinc-500 font-medium leading-relaxed max-w-2xl italic">
                          {faq.a}
                        </p>
                      </div>

                      <div className="w-full lg:w-1/4 pt-8 border-t border-zinc-100 lg:border-t-0 lg:border-l lg:pl-8">
                        <p className="font-mono text-[8px] md:text-[9px] text-[#FF4D00] font-bold uppercase mb-4 tracking-widest">
                          //_TECH_RESOURCES
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-2">
                          {['Documentation_v1', 'API_Endpoints', 'Security_Protocol'].map((link) => (
                            <li
                              key={link}
                              className="flex items-center gap-2 font-mono text-[8px] md:text-[9px] text-zinc-400 hover:text-black cursor-pointer transition-colors uppercase group/link"
                            >
                              <ChevronRight className="w-2 h-2 text-[#FF4D00]" />
                              <span className="border-b border-transparent group-hover/link:border-black">
                                {link}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}