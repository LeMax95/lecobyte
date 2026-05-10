'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Database, Terminal } from 'lucide-react';
import { SearchInput } from '@/components/SearchInput';
import type { IntelPost } from '@/lib/schema';

type IntelIndexClientProps = {
  posts: IntelPost[];
};

export default function IntelIndexClient({ posts }: IntelIndexClientProps) {
  const [query, setQuery] = useState('');

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();

    if (!normalizedQuery) return posts;

    return posts.filter((post) => {
      const searchStr = `${post.title} ${post.summary} ${post.category}`.toLowerCase();
      return searchStr.includes(normalizedQuery);
    });
  }, [posts, query]);

  return (
    <main className="bg-white pt-32 md:pt-44 px-6 min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        {/* Header: System Context */}
        <header className="mb-24 md:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-4 h-4 text-[#FF4D00]" />
            <span className="font-mono text-[#FF4D00] text-[10px] md:text-xs tracking-[0.4em] uppercase block">
              //_DATABASE_QUERY_RESULTS
            </span>
          </div>

          <h1 className="text-6xl sm:text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.8] mb-12 text-black">
            Latest_
            <br />
            <span
              className="text-transparent stroke-black"
              style={{ WebkitTextStroke: '1px black' }}
            >
              Intel
            </span>
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 mb-16">
<p className="text-xl md:text-3xl text-zinc-500 max-w-3xl leading-snug font-medium">
  Articles on service business systems, local SEO structure, landing page funnels, tracking, and the operational problems that appear when tools stop fitting the workflow.
</p>
            <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest bg-zinc-50 px-4 py-2 border border-zinc-100">
              {`Active_Nodes: ${filteredPosts.length} // Status: Online`}
            </div>
          </div>

          <div className="max-w-2xl">
            <SearchInput
              query={query}
              setQuery={setQuery}
              placeholder="FILTER_INTELLIGENCE_REPORTS..."
            />
          </div>
        </header>

        <div className="border-t border-zinc-100 mb-32 min-h-[400px]">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/intel/${post.slug}`}
                className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-16 border-b border-zinc-100 hover:bg-zinc-50 transition-all duration-500 px-4 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-[#FF4D00] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-20 relative z-10">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-zinc-400 block uppercase">
                      Log_Date
                    </span>
                    <span className="font-mono text-xs font-bold text-black">
                      {post.date}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Terminal className="w-3 h-3 text-[#FF4D00]" />
                      <span className="text-[10px] font-black text-[#FF4D00] uppercase tracking-widest block">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-700 ease-out text-black">
                      {post.title.replaceAll('_', ' ')}
                    </h2>
                    <p className="text-zinc-500 text-sm md:text-base max-w-xl line-clamp-1 font-medium italic">
                      "{post.summary}"
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-8 mt-8 md:mt-0 relative z-10">
                  <div className="text-right hidden md:block">
                    <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest mb-1">
                      Retrieval_Time
                    </p>
                    <p className="font-mono text-xs font-black uppercase text-black">
                      {post.readingTime}
                    </p>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-500">
                    <ArrowUpRight className="w-6 h-6 text-black group-hover:text-white transition-colors group-hover:rotate-45" />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="py-40 text-center border-b border-zinc-100">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-[0.5em] block mb-4">
                //_ZERO_MATCHES_FOUND_IN_INTEL_INDEX
              </span>
              <button
                onClick={() => setQuery('')}
                className="text-[10px] font-mono text-[#FF4D00] uppercase underline underline-offset-8 decoration-2"
              >
                Reset_Search_Protocol
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}