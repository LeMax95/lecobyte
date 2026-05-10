import Link from 'next/link';
import type { Project } from '@/lib/schema';

export default function ProjectServiceCta({ project }: { project: Project }) {
  return (
    <section className="border-t border-zinc-100 bg-zinc-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] border border-zinc-100 bg-white p-8 md:p-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-10 bg-[#FF4D00]" />
          <span className="font-mono text-[9px] font-black uppercase tracking-[0.35em] text-[#FF4D00] md:text-[10px] md:tracking-[0.5em]">
            //_NEXT_STEP
          </span>
        </div>

        <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter text-black md:text-6xl">
          Similar <span className="italic font-light text-zinc-300">Problem?</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-zinc-500 md:text-xl">
          If your business is dealing with something similar, the closest service path is{' '}
          <span className="font-semibold text-black">{project.serviceLabel}</span>.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href={`/services/${project.serviceSlug}`}
            className="inline-flex items-center justify-center bg-black px-6 py-4 font-mono text-[10px] font-black uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#FF4D00] md:text-xs"
          >
            View_Service
          </Link>

          <Link
            href="/connect"
            className="inline-flex items-center justify-center border border-zinc-200 px-6 py-4 font-mono text-[10px] font-black uppercase tracking-[0.25em] text-black transition-colors hover:border-[#FF4D00] hover:text-[#FF4D00] md:text-xs"
          >
            Start_Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}