'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Optimized Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const onScroll = useCallback(() => {
    if (!isOpen) setScrolled(window.scrollY > 20);
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  // DYNAMIC LINK LOGIC: 
  // If we are NOT on the homepage, anchors must point to "/" + "#id"
  const navLinks = [
    { name: "Project_Logs", href: pathname === '/' ? "#work" : "/#work" },
    { name: "The_Method", href: pathname === '/' ? "#process" : "/#process" },
    { name: "Arsenal", href: pathname === '/' ? "#stack" : "/#stack" },
    { name: "Insights", href: "/blog" },
  ];

  const isLinkActive = (href: string) => {
    if (href === pathname) return true;
    if (href.startsWith('/#') && pathname === '/') return true;
    return false;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[120] transition-all duration-500 ${scrolled && !isOpen ? 'py-3' : 'py-6'}`}>
        <div className="max-w-[1440px] mx-auto px-6">
          <div className={`flex justify-between items-center transition-all duration-500 border px-6 py-3 rounded-sm ${
            scrolled || isOpen ? 'bg-white/95 backdrop-blur-xl border-zinc-200/50 shadow-sm' : 'bg-transparent border-transparent'
          }`}>
            
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group relative z-[130]">
              <span className="text-xl font-black tracking-tighter uppercase text-black">
                Leco<span className={scrolled || isOpen ? "text-[#FF4D00]" : "text-zinc-400 group-hover:text-[#FF4D00]"}>byte</span>
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-10">
              <div className="flex gap-10 font-mono text-[10px] font-black uppercase tracking-[0.2em]">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className={`transition-colors relative py-1 ${
                      isLinkActive(link.href) ? 'text-[#FF4D00]' : 'text-zinc-500 hover:text-[#FF4D00]'
                    }`}
                  >
                    //_{link.name}
                    {isLinkActive(link.href) && (
                      <motion.div layoutId="navUnderline" className="absolute bottom-0 left-0 w-full h-px bg-[#FF4D00]" />
                    )}
                  </Link>
                ))}
              </div>
              <Link 
                href="/connect" 
                className="bg-black text-white px-5 py-2.5 text-[10px] font-mono font-black uppercase tracking-widest hover:bg-[#FF4D00] transition-all"
              >
                Deploy_Request
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden relative z-[130] p-2 -mr-2 text-black transition-transform active:scale-95">
              <div className="relative h-6 w-6">
                <motion.div animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }} className="absolute inset-0">
                  <Menu className="w-6 h-6" />
                </motion.div>
                <motion.div animate={{ rotate: isOpen ? 0 : -90, opacity: isOpen ? 1 : 0 }} className="absolute inset-0">
                  <X className="w-6 h-6 text-[#FF4D00]" />
                </motion.div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-white z-[110] flex flex-col">
            <div className="flex-1 flex flex-col justify-center px-8 pt-20">
              <div className="space-y-4 mb-8">
                 <div className="h-px w-8 bg-[#FF4D00]" />
                 <p className="font-mono text-[9px] text-[#FF4D00] font-black uppercase tracking-[0.4em]">//_SYSTEM_ROOT</p>
              </div>

              <div className="flex flex-col items-start gap-4 max-w-full">
                {navLinks.map((link, i) => (
                  <motion.div key={link.name} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-[12vw] sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] transition-all block ${
                        isLinkActive(link.href) ? 'text-[#FF4D00]' : 'text-black hover:text-[#FF4D00]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-8 space-y-8 bg-zinc-50/80">
               <Link 
                href="/connect"
                onClick={() => setIsOpen(false)}
                className="w-full py-6 bg-black text-white flex justify-center items-center font-mono text-[10px] font-black uppercase tracking-[0.3em]"
              >
                EXECUTE_TRANSMISSION
              </Link>
              <div className="flex justify-between items-center opacity-40 font-mono text-[8px] uppercase tracking-widest">
                <span>Link_Active</span>
                <span>V.2026_STABLE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}