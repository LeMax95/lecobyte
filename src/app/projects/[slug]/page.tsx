import type { Metadata } from 'next';
import Image from 'next/image';
import { getProjectBySlug, getAllProjects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  ChevronRight,
  Cpu,
} from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { MarkdownComponents } from '@/components/MarkdownConfig';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectOverview from '@/components/projects/ProjectOverview';
import ProjectRelevance from '@/components/projects/ProjectRelevance';
import ProjectServiceCta from '@/components/projects/ProjectServiceCta';

import {
  RenderJsonLd,
  resolveProjectDetailSeo,
  resolveSiteSeo,
  toNextMetadata,
} from '@/lib/seo';

export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;

  const [siteSeo, pageSeo] = await Promise.all([
    resolveSiteSeo(),
    resolveProjectDetailSeo(resolvedParams.slug),
  ]);

  if (!pageSeo) {
    return {};
  }

  return toNextMetadata(siteSeo.site, pageSeo);
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;

  const [project, allProjects, seo] = await Promise.all([
    getProjectBySlug(resolvedParams.slug),
    getAllProjects(),
    resolveProjectDetailSeo(resolvedParams.slug),
  ]);

  if (!project || !seo) notFound();

  const currentIndex = allProjects.findIndex((p) => p.slug === resolvedParams.slug);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;
  const nextProject = allProjects[(safeIndex + 1) % allProjects.length];

  return (
    <>
      {seo.schema?.map((item, index) => (
        <RenderJsonLd key={`project-detail-jsonld-${index}`} data={item} />
      ))}

      <main className="min-h-screen bg-white">
        <section className="border-b border-zinc-100 px-6 pb-12 pt-24 md:pb-24 md:pt-40">
          <div className="mx-auto max-w-[1440px]">
            <Link
              href="/projects"
              className="group mb-8 flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-zinc-400 transition-colors hover:text-[#FF4D00] md:mb-16 md:text-[10px]"
            >
              <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
              BACK_TO_LAB
            </Link>

            <div className="flex flex-col items-start justify-between gap-8 md:gap-12 lg:flex-row lg:items-end">
              <div className="max-w-5xl">
                <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.4em] text-[#FF4D00] md:mb-6 md:text-xs">
                  //_SYSTEM_DEBRIEF: {project.id}
                </span>

                <h1 className="break-words text-4xl font-black uppercase leading-[0.9] tracking-tighter text-black sm:text-6xl md:text-7xl lg:text-[8rem]">
                  {project.title.replaceAll('_', ' ')}
                </h1>

                {project.summary ? (
                  <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-zinc-500 md:text-xl">
                    {project.summary}
                  </p>
                ) : null}
              </div>

              <div className="flex w-full shrink-0 flex-col gap-8 border-t border-zinc-100 pt-8 md:gap-10 lg:w-auto lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <div>
                  <p className="mb-1 font-mono text-[8px] uppercase tracking-widest text-zinc-400 md:mb-2 md:text-[9px]">
                    Impact_Score
                  </p>
                  <p className="text-2xl font-black text-[#FF4D00] md:text-4xl">
                    {project.metric}
                  </p>
                </div>

                <div>
                  <p className="mb-1 font-mono text-[8px] uppercase tracking-widest text-zinc-400 md:mb-2 md:text-[9px]">
                    Timeline
                  </p>
                  <p className="text-xl font-bold uppercase text-black md:text-2xl">
                    {project.duration}
                  </p>
                </div>

                {'liveUrl' in project && project.liveUrl ? (
                  <div>
                    <p className="mb-1 font-mono text-[8px] uppercase tracking-widest text-zinc-400 md:mb-2 md:text-[9px]">
                      Live_System
                    </p>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel={
                        project.liveRel === 'nofollow'
                          ? 'nofollow noopener noreferrer'
                          : 'noopener noreferrer'
                      }
                      className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-tight text-black transition-colors hover:text-[#FF4D00] md:text-base"
                    >
                      {project.liveLabel ?? 'Open_Live_Site'}
                      <ArrowUpRight className="h-4 w-4 text-[#FF4D00] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="group relative aspect-video w-full overflow-hidden border-b border-zinc-100 bg-zinc-100 md:aspect-[21/9]">
          <div className="relative h-full w-full">
            <Image
              src={project.mainImage}
              alt={`${project.title.replaceAll('_', ' ')} main project visual`}
              fill
              priority
              sizes="100vw"
              className={[
                'transition-all duration-1000 ease-in-out group-hover:scale-[1.01]',
                project.heroImageFit === 'contain'
                  ? 'object-contain p-4 md:p-6'
                  : 'object-cover',
                project.heroImageMuted ? 'grayscale' : '',
              ].join(' ')}
            />
          </div>
          <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-black/0" />
        </section>

        <ProjectOverview project={project} />

        <section className="px-6 py-16 md:py-32">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 md:gap-20 lg:grid-cols-12">
            <div className="order-2 space-y-16 md:space-y-24 lg:order-1 lg:col-span-8">
              <div className="space-y-8">
                <h2 className="flex items-center gap-3 font-mono text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                  <ShieldCheck className="h-4 w-4 text-[#FF4D00]" />
                  01_MISSION_OBJECTIVE
                </h2>

                <div className="text-2xl font-medium leading-[1.1] tracking-tight text-zinc-900 md:text-5xl">
                  <ReactMarkdown components={MarkdownComponents}>
                    {project.challenge}
                  </ReactMarkdown>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-12 border-t border-zinc-100 pt-16 md:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="flex items-center gap-2 text-xl font-black uppercase tracking-tighter text-black md:text-2xl">
                    <Cpu className="h-5 w-5 text-[#FF4D00]" />
                    The_Solution
                  </h3>

                  <div className="prose-zinc max-w-none">
                    <ReactMarkdown components={MarkdownComponents}>
                      {project.solution}
                    </ReactMarkdown>
                  </div>
                </div>

                <div className="h-fit rounded-sm border border-zinc-100 bg-zinc-50 p-6 md:p-10">
                  <h3 className="mb-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black">
                    <Zap className="h-4 w-4 text-[#FF4D00]" />
                    Performance_Logs
                  </h3>

                  <ul className="space-y-5 font-mono text-[10px] uppercase tracking-wider text-zinc-600 md:text-[11px]">
                    {project.results.map((res, i) => (
                      <li
                        key={i}
                        className="flex justify-between gap-4 border-b border-zinc-200 pb-3 transition-colors hover:text-[#FF4D00]"
                      >
                        <span className="opacity-60">{res.label}</span>
                        <span className="text-right text-xs font-black text-black">
                          {res.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {'gallery' in project && project.gallery && project.gallery.length > 0 ? (
                <ProjectGallery
                  items={project.gallery}
                  title={project.galleryTitle}
                  intro={project.galleryIntro}
                />
              ) : null}
            </div>

            <aside className="order-1 h-fit space-y-8 md:space-y-12 lg:order-2 lg:sticky lg:top-32 lg:col-span-4">
              <div className="border border-zinc-100 bg-white p-8 shadow-sm">
                <p className="mb-6 font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                  //_SYSTEM_STACK
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="cursor-default border border-zinc-200 bg-zinc-100 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-tighter text-zinc-800 transition-all hover:bg-black hover:text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-l-2 border-[#FF4D00] bg-zinc-50/50 p-8">
                <p className="mb-4 font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                  //_CLIENT_DEBRIEF
                </p>

                <p className="mb-6 text-lg italic font-medium leading-relaxed text-zinc-800 md:text-xl">
                  "{project.testimonial}"
                </p>

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF4D00]">
                  — {project.clientName}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <ProjectRelevance project={project} />
        <ProjectServiceCta project={project} />

        <Link
          href={`/projects/${nextProject.slug}`}
          className="group relative block w-full overflow-hidden bg-black px-6 py-24 text-center md:py-44"
        >
          <div className="relative z-10">
            <span className="mb-8 block font-mono text-[10px] uppercase tracking-[0.5em] text-[#FF4D00] transition-all group-hover:tracking-[0.8em] md:text-xs">
              Next_Project_In_Queue
            </span>

            <h2 className="text-5xl font-black uppercase leading-none tracking-tighter text-white transition-transform duration-1000 group-hover:scale-105 md:text-[10rem]">
              {nextProject.title.replaceAll('_', ' ')}
            </h2>

            <div className="mt-12 inline-flex items-center gap-4 border border-white/20 px-8 py-4 font-mono text-xs uppercase tracking-widest text-white transition-all group-hover:border-[#FF4D00] group-hover:bg-[#FF4D00]">
              Initialize_System
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
            </div>
          </div>

          <span className="pointer-events-none absolute inset-0 flex select-none items-center justify-center text-[20rem] font-black uppercase text-white/[0.02] md:text-[40rem]">
            NEXT
          </span>
        </Link>
      </main>
    </>
  );
}