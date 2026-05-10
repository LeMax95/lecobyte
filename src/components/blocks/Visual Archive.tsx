'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';

const archive = [
  { id: 1, title: "Quantum_Flow", size: "md:col-span-2 md:row-span-2", img: "/arch1.jpg", tag: "UI_UX" },
  { id: 2, title: "Neural_Link", size: "md:col-span-1 md:row-span-1", img: "/arch2.jpg", tag: "API" },
  { id: 3, title: "Data_Heavy", size: "md:col-span-1 md:row-span-1", img: "/arch3.jpg", tag: "GHL" },
  { id: 4, title: "Infrastructure_v4", size: "md:col-span-2 md:row-span-1", img: "/arch4.jpg", tag: "DEV" },
];

export default function VisualArchive() {
  const [selectedImg, setSelectedImg] = useState<typeof archive[0] | null>(null);

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto bg-white">
      {/* Header logic remains identical but sharpened */}
      <div className="flex justify-between items-end mb-16">
        <div className="space-y-4">
          <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-[0.4em]">
            //_VISUAL_ASSETS
          </span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            The_Lab<span className="text-accent">.</span>
          </h2>
        </div>
        <p className="hidden md:block font-mono text-[9px] text-muted uppercase text-right leading-loose max-w-[150px]">
          [CLICK_TO_EXPAND] <br/> VERSION_CONTROL: 2026.4
        </p>
      </div>

      {/* FIXED BENTO GRID LOGIC */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px] md:auto-rows-[250px]">
        {archive.map((item) => (
          <motion.div 
            key={item.id}
            layoutId={`card-${item.id}`}
            onClick={() => setSelectedImg(item)}
            className={`relative group overflow-hidden border border-border bg-neutral-50 cursor-zoom-in flex flex-col ${item.size}`}
          >
            {/* Image Container: Absolute fill is key for Bento */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
              />
              {/* Dark Gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            </div>
            
            {/* Hover Reticle */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
              <div className="bg-white/90 backdrop-blur-sm p-3 border border-accent shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <Search className="w-5 h-5 text-accent" />
              </div>
            </div>

            {/* Bottom Content: Aligned inside the box */}
            <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
              <span className="font-mono text-[9px] text-accent font-black mb-1 block uppercase tracking-widest">
                {item.tag}
              </span>
              <h3 className="text-white text-xl font-black uppercase tracking-tighter leading-none">
                {item.title}
              </h3>
            </div>

            {/* Top Right Corner Tag */}
            <div className="absolute top-4 right-4 z-10">
              <div className="h-1.5 w-1.5 bg-white/30 group-hover:bg-accent transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox logic - Adding a more robust background and fix */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 p-3 hover:bg-neutral-100 rounded-full transition-colors z-[110]">
              <X className="w-8 h-8 text-black" />
            </button>

            <motion.div 
              layoutId={`card-${selectedImg.id}`}
              className="max-w-6xl w-full aspect-video bg-neutral-100 relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border border-border overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg.img} 
                className="w-full h-full object-cover" 
                alt={selectedImg.title} 
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="font-mono text-[10px] text-accent font-black tracking-[0.3em] uppercase italic">
                      // {selectedImg.tag}
                    </span>
                    <h3 className="text-4xl font-black uppercase tracking-tighter mt-2">{selectedImg.title}</h3>
                  </div>
                  <div className="font-mono text-[10px] opacity-60 uppercase tracking-widest">
                    REF_ID: 00{selectedImg.id}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}