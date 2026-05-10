import Link from 'next/link';
import type { Project } from '@/lib/schema';

export default function ProjectOverview({ project }: { project: Project }) {
  return (
    <section className="border-b border-zinc-100 bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-10 bg-[#FF4D00] md:w-12" />
            <span className="font-mono text-[9px] font-black uppercase tracking-[0.4em] text-[#FF4D00] md:text-[10px] md:tracking-[0.6em]">
              //_PROJECT_OVERVIEW
            </span>
          </div>

          <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-tighter text-black md:text-5xl">
            What_This <span className="italic font-light text-zinc-300">Was</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px border border-zinc-100 bg-zinc-100 lg:grid-cols-12">
          <div className="bg-white p-8 md:p-10 lg:col-span-3">
            <p className="mb-4 font-mono text-[9px] uppercase tracking-widest text-zinc-400">
              Business_Type
            </p>
            <p className="text-xl font-black uppercase tracking-tight text-black md:text-2xl">
              {project.builtFor}
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 lg:col-span-3">
            <p className="mb-4 font-mono text-[9px] uppercase tracking-widest text-zinc-400">
              Related_Service
            </p>
            <Link
              href={`/services/${project.serviceSlug}`}
              className="text-xl font-black uppercase tracking-tight text-black transition-colors hover:text-[#FF4D00] md:text-2xl"
            >
              {project.serviceLabel}
            </Link>
          </div>

          <div className="bg-white p-8 md:p-10 lg:col-span-6">
            <p className="mb-4 font-mono text-[9px] uppercase tracking-widest text-zinc-400">
              Before_State
            </p>
            <p className="max-w-3xl whitespace-pre-line text-base font-medium leading-relaxed text-zinc-500 md:text-lg">
              {project.beforeState}
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 lg:col-span-12">
            <p className="mb-4 font-mono text-[9px] uppercase tracking-widest text-zinc-400">
              Built_As
            </p>
            <p className="max-w-4xl whitespace-pre-line text-base font-medium leading-relaxed text-zinc-600 md:text-lg">
              {project.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}