'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SocialTicker() {
  const [time, setTime] = useState('');

  useEffect(() => {
    // Set initial time immediately
    setTime(new Date().toLocaleTimeString('en-GB', { hour12: false }));
    
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const logs = [
    "Uptime: 99.998%",
    "Active_Sprints: 04",
    "GHL_API_Status: Operational",
    "Last_Commit: 2 hours ago",
    "Node_Version: 22.1.0",
    "Deployment_Origin: Dublin_Edge",
  ];

  return (
    <footer className="w-full bg-white border-t border-zinc-100 py-6 md:py-4 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
        
        {/* The Live Data Stream */}
        <div className="flex items-center gap-4 md:gap-6 overflow-hidden w-full md:w-2/3">
          <div className="flex items-center gap-2 shrink-0 bg-white z-20 pr-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF4D00] animate-pulse" />
            <span className="font-mono text-[9px] md:text-[10px] font-black uppercase text-[#FF4D00] tracking-tighter">
              LIVE_LOGS [{time}]
            </span>
          </div>
          
          {/* Marquee Container */}
          <div className="relative flex overflow-x-hidden">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex whitespace-nowrap gap-12"
            >
              {[...logs, ...logs, ...logs].map((log, i) => (
                <span key={i} className="font-mono text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-[0.2em]">
                  {log}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Social Terminal Links */}
        <div className="flex gap-8 md:gap-6 shrink-0 z-20 bg-white sm:pl-4">
          {[
            { label: "GH", href: "#" },
            { label: "LI", href: "#" },
            { label: "X", href: "#" }
          ].map((social) => (
            <a 
              key={social.label}
              href={social.href}
              className="font-mono text-[10px] font-black text-black hover:text-[#FF4D00] transition-colors border-b border-transparent hover:border-[#FF4D00] py-1"
            >
              [ {social.label} ]
            </a>
          ))}
        </div>
      </div>

      {/* Edge Fades for the ticker: Hidden on very small screens to save CPU */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10 hidden sm:block" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10 hidden sm:block" />
    </footer>
  );
}