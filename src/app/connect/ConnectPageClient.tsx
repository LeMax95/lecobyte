'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Terminal as TerminalIcon,
  Wifi,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import type { ConnectPageContent } from '@/lib/schema';

export default function ConnectPageClient({
  content,
}: {
  content: ConnectPageContent;
}) {
  const [booted, setBooted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brief: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('TRANS_INIT:', formData);
  };

  return (
    <main className="bg-white min-h-screen pt-32 pb-20 px-6 font-mono selection:bg-[#FF4D00] selection:text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-16 border-y border-zinc-100 py-4 text-[9px] text-zinc-400 uppercase tracking-[0.3em]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
              <span>{content.statusLabel}</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-3 h-3" />
              <span>{content.linkLabel}</span>
            </div>
          </div>
          <div className="hidden md:block italic">{content.latencyLabel}</div>
        </div>

        <div
          className={`transition-all duration-700 ${
            booted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <header className="mb-20">
            <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none mb-6">
              {content.title}
            </h1>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl font-medium">
              {content.description}
            </p>
          </header>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-zinc-100 pt-16"
          >
            <div className="md:col-span-4 space-y-8">
              <div className="p-6 bg-zinc-50 border border-zinc-100">
                <p className="text-[10px] text-zinc-400 uppercase mb-4 tracking-widest font-bold">
                  {content.instructionsTitle}
                </p>
                <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                  {content.instructionsBody}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {content.socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-[#FF4D00] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:col-span-8 space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="group">
                  <label className="text-[10px] font-black text-black uppercase tracking-widest block mb-2">
                    {content.identifierLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder={content.identifierPlaceholder}
                    className="w-full bg-transparent border-b-2 border-zinc-100 py-3 text-black font-bold focus:outline-none focus:border-[#FF4D00] transition-colors placeholder:text-zinc-200"
                  />
                </div>

                <div className="group">
                  <label className="text-[10px] font-black text-black uppercase tracking-widest block mb-2">
                    {content.emailLabel}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder={content.emailPlaceholder}
                    className="w-full bg-transparent border-b-2 border-zinc-100 py-3 text-black font-bold focus:outline-none focus:border-[#FF4D00] transition-colors placeholder:text-zinc-200"
                  />
                </div>
              </div>

              <div className="group">
                <label className="text-[10px] font-black text-black uppercase tracking-widest block mb-2">
                  {content.briefLabel}
                </label>
                <textarea
                  rows={4}
                  value={formData.brief}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, brief: e.target.value }))
                  }
                  placeholder={content.briefPlaceholder}
                  className="w-full bg-transparent border-b-2 border-zinc-100 py-3 text-black font-bold focus:outline-none focus:border-[#FF4D00] transition-colors placeholder:text-zinc-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-black text-white px-12 py-5 font-black uppercase text-xs tracking-[0.4em] hover:bg-[#FF4D00] transition-all flex items-center justify-center gap-4 group"
              >
                {content.submitLabel}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </form>

          <footer className="mt-32 pt-8 border-t border-zinc-100 flex justify-between items-center">
            <div className="flex items-center gap-3 font-mono text-[9px] text-zinc-300 uppercase tracking-widest">
              <TerminalIcon className="w-3 h-3" />
              {content.footerLabel} // {content.footerBuild}
            </div>
            <span className="text-[9px] text-zinc-300 uppercase">
              © {currentYear} // ALL_RIGHTS_RESERVED
            </span>
          </footer>
        </div>
      </div>
    </main>
  );
}