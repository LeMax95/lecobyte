import Link from 'next/link';
import type { ServiceCtaContent } from '@/lib/schema';

export default function ServiceCta({ content }: { content: ServiceCtaContent }) {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto border border-zinc-100 bg-zinc-50 p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-[#FF4D00]" />
          <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.35em] md:tracking-[0.5em]">
            {content.eyebrow}
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black leading-[0.9]">
          {content.titleLine1}{' '}
          <span className="italic font-light text-zinc-300">
            {content.titleLine2}
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-zinc-500 text-lg md:text-xl font-medium leading-relaxed">
          {content.description}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href={content.primaryCtaHref}
            className="inline-flex items-center justify-center px-6 py-4 bg-black text-white font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.25em] hover:bg-[#FF4D00] transition-colors"
          >
            {content.primaryCtaLabel}
          </Link>

          {content.secondaryCtaLabel && content.secondaryCtaHref ? (
            <Link
              href={content.secondaryCtaHref}
              className="inline-flex items-center justify-center px-6 py-4 border border-zinc-200 text-black font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.25em] hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors"
            >
              {content.secondaryCtaLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}