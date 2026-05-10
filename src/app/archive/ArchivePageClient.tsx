'use client';

import { useMemo, useState } from 'react';
import { ArrowLeft, ExternalLink, FolderArchive, Terminal } from 'lucide-react';
import Link from 'next/link';
import { SearchInput } from '@/components/SearchInput';
import type { ArchivePageContent } from '@/lib/schema';

export default function ArchivePageClient({
  content,
}: {
  content: ArchivePageContent;
}) {
  const [query, setQuery] = useState('');

const filteredData = useMemo(() => {
  const normalized = query.toLowerCase().trim();

  const results = !normalized
    ? content.items
    : content.items.filter((item) => {
        const searchString =
          `${item.title} ${item.client} ${item.tech.join(' ')}`.toLowerCase();

        return searchString.includes(normalized);
      });

  return results.slice(0, 15);
}, [content.items, query]);

  return (
    <main className="min-h-screen bg-white px-4 pt-32 pb-20 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 border-b border-zinc-100 pb-12 md:flex-row">
          <div className="w-full max-w-3xl">
            <Link
              href="/"
              className="group mb-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 transition-colors hover:text-[#FF4D00]"
            >
              <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
              Return_to_Root
            </Link>

            <h1 className="mb-6 text-6xl font-black uppercase leading-none tracking-tighter text-black md:text-9xl">
              {content.title}
            </h1>

            <p className="mb-10 max-w-2xl text-sm leading-relaxed text-zinc-500 md:text-base">
              {content.description}
            </p>

            <SearchInput
              query={query}
              setQuery={setQuery}
              placeholder={content.searchPlaceholder}
            />
          </div>

          <div className="flex items-center gap-4 border border-zinc-100 bg-zinc-50 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            <FolderArchive className="h-3 w-3 text-[#FF4D00]" />
            Records_Found: {filteredData.length}
          </div>
        </div>

        <div className="min-h-[400px] overflow-x-auto">
          {filteredData.length > 0 ? (
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-zinc-200 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                  <th className="px-2 py-4 font-medium">Year</th>
                  <th className="px-2 py-4 font-medium">System_Record</th>
                  <th className="hidden px-2 py-4 font-medium md:table-cell">Context</th>
                  <th className="hidden px-2 py-4 font-medium lg:table-cell">Stack</th>
                  <th className="px-2 py-4 text-right font-medium">Open</th>
                </tr>
              </thead>

              <tbody className="group/table">
                {filteredData.map((item, i) => {
                  const hasLink = Boolean(item.link && item.link !== '#');

                  return (
                    <tr
                      key={`${item.title}-${i}`}
                      className="group/row animate-in fade-in slide-in-from-bottom-2 border-b border-zinc-100 transition-all duration-300 hover:bg-zinc-50/80"
                    >
                      <td className="px-2 py-6 font-mono text-xs text-zinc-400 group-hover/row:text-[#FF4D00]">
                        {item.year}
                      </td>

                      <td className="px-2 py-6">
                        <span className="text-lg font-black uppercase tracking-tight text-black transition-all duration-300 group-hover/row:pl-2 md:text-xl">
                          {item.title}
                        </span>
                      </td>

                      <td className="hidden px-2 py-6 md:table-cell">
                        <span className="bg-zinc-100 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                          {item.client}
                        </span>
                      </td>

                      <td className="hidden px-2 py-6 lg:table-cell">
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {item.tech.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[10px] uppercase text-zinc-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="px-2 py-6 text-right">
                        {hasLink ? (
                          <Link
                            href={item.link}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 transition-all hover:border-black hover:bg-black hover:text-white"
                            aria-label={`Open ${item.title}`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        ) : (
                          <span
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-100 text-zinc-200"
                            aria-hidden="true"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="border border-dashed border-zinc-200 bg-zinc-50/30 py-32 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-400">
                {content.emptyStateLabel}
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 flex items-center justify-between border border-zinc-100 bg-zinc-50/50 p-6">
          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-widest text-zinc-400">
            <Terminal className="h-3 w-3 animate-pulse text-[#FF4D00]" />
            {query
              ? `${content.footerFilterPrefix} "${query}"`
              : content.footerIdleLabel}
          </div>

          <span className="font-mono text-[9px] uppercase italic text-zinc-300">
            last_sync: {content.lastSync}
          </span>
        </div>
      </div>
    </main>
  );
}