'use client';
import { motion } from 'framer-motion';
import type { ArsenalItem } from '@/lib/schema';

export default function Arsenal({ tools }: { tools: ArsenalItem[] }) {
  return (
    <section className="relative py-12 md:py-16 border-b border-zinc-100 bg-white overflow-hidden group">
      <div className="absolute inset-y-0 left-0 w-24 md:w-44 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-44 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

      <div className="flex items-center overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex items-center"
          animate={{ x: [0, -1500] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          {[...tools, ...tools, ...tools, ...tools].map((tool, i) => (
            <div key={i} className="flex items-center px-8 md:px-12 group/item">
              <span className="font-mono text-xs md:text-sm font-black text-zinc-400 uppercase tracking-[0.2em] group-hover/item:text-[#FF4D00] transition-colors duration-300 italic select-none">
                {tool}
              </span>

              <div className="ml-16 md:ml-24 flex gap-1 items-center">
                <div className="h-[1px] w-3 md:w-6 bg-[#FF4D00]/20 group-hover/item:bg-[#FF4D00] transition-all duration-500" />
                <div className="h-[1px] w-1 bg-[#FF4D00]/40" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-2 left-4 md:left-10 opacity-30">
        <span className="font-mono text-[7px] md:text-[8px] uppercase tracking-widest text-zinc-400">
          System_Protocol: Stream_v2.0_Active
        </span>
      </div>
    </section>
  );
}