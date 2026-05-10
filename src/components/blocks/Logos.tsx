'use client';
import { motion } from 'framer-motion';
import type { LogoItem } from '@/lib/schema';

export default function Logos({ logos }: { logos: LogoItem[] }) {
  return (
    <section className="py-12 bg-white overflow-hidden border-b border-zinc-100 flex items-center">
      <div className="relative flex overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex items-center"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...logos, ...logos, ...logos].map((p, i) => (
            <div key={i} className="flex items-center group">
              <span className="mx-8 md:mx-16 text-xl md:text-2xl font-black text-zinc-200 group-hover:text-[#FF4D00] transition-colors cursor-crosshair tracking-tighter select-none uppercase">
                {p}
              </span>
              <span className="text-[#FF4D00]/20 font-mono text-[10px] select-none tracking-widest">
                //_STABLE_PARTNER
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}