'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SocialTicker() {
  const [time, setTime] = useState('');

  useEffect(() => {
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
    <div className="w-full bg-white border-t border-border py-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* The Live Data Stream */}
        <div className="flex items-center gap-6 overflow-hidden w-full md:w-2/3">
          <div className="flex items-center gap-2 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] font-black uppercase text-accent tracking-tighter">
              LIVE_LOGS [{time}]
            </span>
          </div>
          
          <div className="flex animate-marquee-slow whitespace-nowrap gap-12">
            {[...logs, ...logs].map((log, i) => (
              <span key={i} className="font-mono text-[10px] text-muted uppercase tracking-widest">
                {log}
              </span>
            ))}
          </div>
        </div>

        {/* Social Terminal Links */}
        <div className="flex gap-6 shrink-0">
          {[
            { label: "GH", href: "#" },
            { label: "LI", href: "#" },
            { label: "X", href: "#" }
          ].map((social) => (
            <a 
              key={social.label}
              href={social.href}
              className="font-mono text-[10px] font-black hover:text-accent transition-colors border-b border-transparent hover:border-accent"
            >
              [ {social.label} ]
            </a>
          ))}
        </div>
      </div>

      {/* Edge Fades for the ticker */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 hidden md:block" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 hidden md:block" />
    </div>
  );
}