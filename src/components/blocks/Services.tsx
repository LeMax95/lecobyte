'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Server, Zap, Smartphone, BarChart3, ChevronRight, ArrowUpRight } from 'lucide-react';
import type { Service } from '@/lib/schema';

function getIcon(icon: Service['icon']) {
  switch (icon) {
    case 'server':
      return <Server className="w-5 h-5" />;
    case 'zap':
      return <Zap className="w-5 h-5" />;
    case 'smartphone':
      return <Smartphone className="w-5 h-5" />;
    case 'barchart3':
      return <BarChart3 className="w-5 h-5" />;
  }
}

export default function Services({ services }: { services: Service[] }) {
  return (
    <section className="py-24 md:py-44 px-6 bg-white overflow-hidden border-t border-zinc-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-10 md:gap-12">
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 md:w-12 bg-[#FF4D00]" />
              <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">
                //_SERVICE_INDEX
              </span>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.75] text-black">
              What <br />
              <span
                className="text-transparent stroke-black stroke-1 opacity-20 italic font-light"
                style={{ WebkitTextStroke: '1px black' }}
              >
                I_Build
              </span>
            </h2>
          </div>

          <div className="max-w-xs space-y-4">
            <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest leading-relaxed">
              Focused service pages for specific systems, workflows, and technical problems.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-1 w-4 bg-zinc-100" />
                ))}
              </div>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 font-mono text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#FF4D00]"
              >
                View_All
                <ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-y border-zinc-100">
          {services.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative border-b lg:border-b-0 lg:border-r last:border-b-0 lg:last:border-r-0 border-zinc-100 bg-white transition-all duration-700 hover:bg-zinc-50 overflow-hidden"
            >
              <Link href={s.href} className="block p-10 md:p-16 h-full">
                <span className="absolute -top-4 -right-2 text-8xl md:text-9xl font-black text-zinc-50 group-hover:text-[#FF4D00]/5 transition-colors duration-700 pointer-events-none select-none">
                  0{i + 1}
                </span>

                <div className="flex justify-between items-center mb-16 md:mb-20 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-zinc-200 group-hover:bg-[#FF4D00] transition-all group-hover:animate-pulse" />
                    <span className="font-mono text-[9px] md:text-[10px] font-black text-black tracking-widest uppercase">
                      {s.code}
                    </span>
                  </div>

                  <div className="text-zinc-200 group-hover:text-[#FF4D00] transition-colors duration-500">
                    {getIcon(s.icon)}
                  </div>
                </div>

                <div className="relative z-10 space-y-4 md:space-y-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500 text-black">
                    {s.title.split('_').join(' ')}
                  </h3>

                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-medium max-w-[320px]">
                    {s.desc}
                  </p>

                  <div className="pt-6 md:pt-8 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0">
                    <div className="flex items-center gap-2 font-mono text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#FF4D00] group/btn">
                      Open_Service
                      <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-1 md:w-1.5 h-0 bg-[#FF4D00] group-hover:h-full transition-all duration-700" />
                <div className="absolute bottom-0 right-0 w-0 h-1 md:h-1.5 bg-[#FF4D00] group-hover:w-full transition-all duration-700" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}