import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import { getAllProjects } from '@/lib/projects';
import { getProjectsSeoConfig } from '@/lib/project-seo';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getProjectsSeoConfig();

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : undefined,
    },
  };
}

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="bg-white min-h-screen">
      <section className="py-24 md:py-44 px-6 border-b border-zinc-100 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-[9px] md:text-[10px] text-zinc-400 mb-8 md:mb-16 hover:text-[#FF4D00] transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            BACK_TO_HOME
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-12">
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 md:w-12 bg-[#FF4D00]" />
                <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">
                  //_PROJECT_ARCHIVE
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.75] text-black">
                Selected <br />
                <span
                  className="text-transparent opacity-20 italic font-light"
                  style={{ WebkitTextStroke: '1px black' }}
                >
                  Works_
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-zinc-500 text-lg md:text-xl font-medium leading-relaxed">
                Case studies and project work across service business websites, custom systems,
                landing page implementation, and technical recovery.
              </p>
            </div>

            <div className="flex gap-8 md:gap-12 border-l border-zinc-100 pl-8 md:pl-12">
              <div className="space-y-1">
                <p className="font-mono text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-tighter">
                  Capacity
                </p>
                <p className="text-xl md:text-2xl font-black uppercase tracking-tighter text-black">
                  {projects.length < 10 ? `0${projects.length}` : projects.length}
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-mono text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-tighter">
                  Status
                </p>
                <p className="text-xl md:text-2xl font-black uppercase tracking-tighter text-[#FF4D00] italic underline underline-offset-4 decoration-[#FF4D00]/30">
                  Live_v26
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-100 border border-zinc-100">
          {projects.map((project) => (
            <article key={project.slug} className="bg-white p-8 md:p-10 hover:bg-zinc-50 transition-colors group">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[8px] md:text-[9px] px-2 md:px-3 py-1 bg-white border border-zinc-100 font-bold uppercase tracking-widest text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] text-black">
                {project.title.replaceAll('_', ' ')}
              </h2>

              <p className="mt-4 text-zinc-500 text-base md:text-lg leading-relaxed font-medium max-w-xl">
                {'summary' in project && project.summary
                  ? project.summary
                  : project.challenge.substring(0, 140) + '...'}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <span className="font-mono text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-widest">
                  {project.metric}
                </span>
                <span className="font-mono text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-widest">
                  {project.duration}
                </span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-3 px-5 py-4 bg-black text-white font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.25em] hover:bg-[#FF4D00] transition-colors"
                >
                  View_Project
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                {'serviceSlug' in project && project.serviceSlug ? (
                  <Link
                    href={`/services/${project.serviceSlug}`}
                    className="inline-flex items-center gap-3 px-5 py-4 border border-zinc-200 text-black font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.25em] hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors"
                  >
                    View_Service
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}