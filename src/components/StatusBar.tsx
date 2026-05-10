'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Activity, Command, Clock } from 'lucide-react';

export function StatusBar() {
  const pathname = usePathname();
  const [time, setTime] = useState('');

  // Update clock every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-t border-zinc-100 px-4 md:px-6 py-2">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between font-mono text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-widest">
        
        {/* Left Side: Path & Status */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="hidden sm:inline text-zinc-800 font-bold">System: Optimal</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-300">Path:</span>
            <span className="text-black font-medium">{pathname === '/' ? '/HOME' : pathname}</span>
          </div>
        </div>

        {/* Center: Command Hint (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-3 bg-zinc-50 px-3 py-1 border border-zinc-100 rounded-sm">
          <Command className="w-3 h-3" />
          <span>Press <span className="text-black font-bold">⌘K</span> for Command_Palette</span>
        </div>

        {/* Right Side: Clock & Availability */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2">
            <Activity className="w-3 h-3 text-[#FF4D00]" />
            <span className="text-zinc-800">Uplink_Active</span>
          </div>
          <div className="flex items-center gap-2 border-l border-zinc-100 pl-6">
            <Clock className="w-3 h-3" />
            <span className="text-black font-bold">{time} UTC</span>
          </div>
        </div>

      </div>
    </div>
  );
}