'use client';
import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Repeat } from 'lucide-react';
import type { ProcessStep } from '@/lib/schema';

function getIcon(icon: ProcessStep['icon']) {
  switch (icon) {
    case 'cpu':
      return <Cpu className="w-4 h-4" />;
    case 'zap':
      return <Zap className="w-4 h-4" />;
    case 'shield':
      return <Shield className="w-4 h-4" />;
    case 'repeat':
      return <Repeat className="w-4 h-4" />;
  }
}

export default function Process({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="py-24 md:py-44 px-6 bg-white overflow-hidden border-t border-zinc-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-10 md:gap-12">
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 md:w-12 bg-[#FF4D00]" />
              <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">
                //_EXECUTION_PIPELINE
              </span>
            </div>
            <h2 className="text-6xl sm:text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.75] text-black">
              The <br />
              <span className="text-transparent stroke-black stroke-1 opacity-20 italic font-light" style={{ WebkitTextStroke: '1px black' }}>
                Method_
              </span>
            </h2>
          </div>

          <div className="text-left md:text-right">
            <p className="font-mono text-[8px] md:text-[9px] text-zinc-400 uppercase tracking-[0.2em] leading-relaxed md:leading-loose max-w-[200px]">
              LOGIC_SEQUENCE: STABLE <br />
              ENCRYPTION: AES_256 <br />
              METHODOLOGY_V: 2026.4
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          <div className="absolute top-0 md:top-1/2 left-[31px] md:left-0 right-auto md:right-0 w-px md:w-full h-full md:h-px bg-zinc-100 md:-translate-y-1/2 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative bg-white p-8 sm:p-12 md:p-16 flex flex-col items-start z-10 hover:bg-zinc-50/80 transition-colors duration-500"
            >
              <div className="mb-10 md:mb-12 flex justify-between items-center w-full relative z-20">
                <span className="font-mono text-[10px] md:text-[11px] font-black text-black bg-white border border-zinc-100 px-3 py-1 group-hover:bg-[#FF4D00] group-hover:border-[#FF4D00] group-hover:text-white transition-all shadow-sm">
                  0{i + 1}
                </span>
                <div className="text-[#FF4D00] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  {getIcon(step.icon)}
                </div>
              </div>

              <div className="absolute top-1/2 left-[31px] md:left-0 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="h-2.5 w-2.5 rounded-full border-2 border-white bg-zinc-200 group-hover:bg-[#FF4D00] group-hover:scale-125 transition-all duration-500" />
              </div>

              <div className="space-y-4 md:space-y-6 pt-8 md:pt-12 border-t border-zinc-100 w-full group-hover:border-[#FF4D00]/30 transition-colors">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tighter leading-none text-black">
                  {step.title.split('_').join(' ')}
                </h3>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-medium max-w-[280px] md:max-w-[220px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}