'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { IntelPost } from '@/lib/schema';

export default function LatestIntel({ posts }: { posts: IntelPost[] }) {
  const previewPosts = posts.slice(0, 3);

  return (
    <section className="py-24 md:py-44 px-6 bg-white border-t border-zinc-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-10">
          <div className="relative min-w-0 max-w-full">
            <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black tracking-[0.35em] md:tracking-[0.6em] uppercase block mb-4 break-words">
              //_KNOWLEDGE_BASE_STREAM
            </span>

            <h2 className="max-w-full text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-black leading-none break-words">
              <span className="inline-block">Latest_</span>
              <span className="inline-block italic font-light text-zinc-300">
                Intel
              </span>
            </h2>
          </div>

          <Link
            href="/intel"
            className="group flex items-center gap-4 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-black border-b border-black pb-2 transition-all hover:border-[#FF4D00] hover:text-[#FF4D00] shrink-0"
          >
            Access_Full_Archive
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>

        {/* List Section */}
        <div className="border-t border-zinc-100">
          {previewPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/intel/${post.slug}`}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-12 md:py-16 border-b border-zinc-100 group cursor-pointer transition-all hover:bg-zinc-50/80 px-4 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-[#FF4D00] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />

              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-20 relative z-10 min-w-0 flex-1">
                <div className="space-y-1 shrink-0">
                  <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-tighter">
                    Entry_Date
                  </p>
                  <p className="font-mono text-xs font-black text-black">
                    {post.date}
                  </p>
                </div>

                <div className="space-y-3 min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[9px] font-black text-[#FF4D00] bg-[#FF4D00]/5 border border-[#FF4D00]/10 px-2 py-0.5 rounded-sm uppercase tracking-widest">
                      {post.category}
                    </span>

                    <span className="font-mono text-[9px] text-zinc-300 uppercase tracking-widest hidden md:block">
                      ID: {post.id}
                    </span>
                  </div>

                  <h4 className="min-w-0 max-w-full text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter text-black transition-transform duration-500 ease-out md:group-hover:translate-x-3 break-words leading-[0.95]">
                    {post.title.replaceAll('_', ' ')}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-10 mt-2 md:mt-0 relative z-10 shrink-0">
                <div className="hidden lg:block text-right">
                  <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest mb-1">
                    Load_Time
                  </p>
                  <p className="font-mono text-[11px] font-black text-black uppercase">
                    {post.readingTime}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-500">
                  <ArrowUpRight className="text-black group-hover:text-white transition-colors w-6 h-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}