import Link from 'next/link';
import type { Project } from '@/lib/schema';

export default function ProjectRelevance({ project }: { project: Project }) {
  return (
    <section className="border-t border-zinc-100 bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-10 bg-[#FF4D00] md:w-12" />
          <span className="font-mono text-[9px] font-black uppercase tracking-[0.4em] text-[#FF4D00] md:text-[10px] md:tracking-[0.6em]">
            //_WHERE_THIS_FITS
          </span>
        </div>

        <h2 className="max-w-5xl text-3xl font-black uppercase leading-[0.95] tracking-tighter text-black md:text-5xl">
          {project.relevanceTitle}
        </h2>

        <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-zinc-500 md:text-xl">
          {project.relevanceBody}
        </p>

        <div className="mt-10">
          <Link
            href={`/services/${project.serviceSlug}`}
            className="inline-flex items-center gap-3 border border-zinc-200 px-6 py-4 font-mono text-[10px] font-black uppercase tracking-[0.25em] text-black transition-colors hover:border-[#FF4D00] hover:text-[#FF4D00] md:text-xs"
          >
            Explore_{project.serviceLabel.replaceAll(' ', '_')}
            <span className="text-[#FF4D00]">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}