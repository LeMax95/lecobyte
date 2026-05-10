'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/schema';
import { ArrowUpRight, Cpu, Layers } from 'lucide-react';
import Link from 'next/link';

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="w-full overflow-hidden bg-white px-6 py-24 md:py-44">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-24 flex flex-col items-start justify-between gap-10 md:mb-32 md:flex-row md:items-end md:gap-12">
          <div className="relative">
            <span className="mb-4 block font-mono text-[9px] font-black uppercase tracking-[0.4em] text-[#FF4D00] md:text-[10px] md:tracking-[0.6em]">
              //_CORE_SYSTEM_OUTPUTS
            </span>

            <h2 className="text-6xl font-black uppercase leading-[0.85] tracking-tighter text-black sm:text-8xl md:text-[10rem] md:leading-[0.75]">
              Selected <br />
              <span
                className="text-transparent opacity-20 italic font-light"
                style={{ WebkitTextStroke: '1px black' }}
              >
                Works_
              </span>
            </h2>
          </div>

          <div className="flex gap-8 border-l border-zinc-100 pl-8 md:gap-12 md:pl-12">
            <div className="space-y-1">
              <p className="font-mono text-[9px] uppercase tracking-tighter text-zinc-400 md:text-[10px]">
                Capacity
              </p>
              <p className="text-xl font-black uppercase tracking-tighter text-black md:text-2xl">
                {projects.length < 10 ? `0${projects.length}` : projects.length}
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-mono text-[9px] uppercase tracking-tighter text-zinc-400 md:text-[10px]">
                Status
              </p>
              <p className="text-xl font-black uppercase tracking-tighter text-[#FF4D00] italic underline decoration-[#FF4D00]/30 underline-offset-4 md:text-2xl">
                Live_v26
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-32 md:space-y-64">
          {projects.map((project, index) => {
            const isSystemImage = project.heroImageFit === 'contain';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col items-center gap-12 md:gap-24 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative w-full cursor-pointer lg:w-3/5"
                >
                  <div
                    className={`relative aspect-[16/10] overflow-hidden bg-zinc-50 transition-all duration-700 md:group-hover:-translate-y-2 md:group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] ${
                      isSystemImage ? 'p-4 md:p-6' : ''
                    }`}
                  >
                    <Image
                      src={project.mainImage}
                      alt={`${project.title.replaceAll('_', ' ')} project preview`}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 40vw"
                      className={
                        isSystemImage
                          ? 'object-contain transition-all duration-700 ease-out'
                          : 'object-cover grayscale transition-all duration-1000 ease-out scale-105 md:group-hover:scale-100 md:group-hover:grayscale-0'
                      }
                    />

                    <div className="absolute left-4 top-4 z-20 flex translate-x-0 items-center gap-2 border border-white/20 bg-black/60 px-3 py-1.5 opacity-100 backdrop-blur-xl transition-all duration-500 md:left-8 md:top-8 md:-translate-x-4 md:bg-white/10 md:px-4 md:py-2 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100">
                      <Cpu className="h-3 w-3 text-white" />
                      <span className="font-mono text-[8px] font-black uppercase tracking-[0.2em] text-white md:text-[9px]">
                        Deployment_Verified
                      </span>
                    </div>
                  </div>

                  <span className="pointer-events-none absolute -bottom-10 -left-4 -z-10 select-none text-[8rem] font-black leading-none text-zinc-100/60 md:-bottom-16 md:-left-16 md:text-[15rem]">
                    0{index + 1}
                  </span>
                </Link>

                <div className="w-full space-y-8 md:space-y-10 lg:w-2/5">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="border border-zinc-100 bg-white px-2 py-1 font-mono text-[8px] font-bold uppercase tracking-widest text-zinc-400 transition-colors hover:border-[#FF4D00] md:px-3 md:text-[9px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter text-black md:text-7xl md:leading-[0.85]">
                      {project.title.replaceAll('_', ' ')}
                    </h3>

                    <p className="max-w-md text-base font-medium leading-relaxed text-zinc-500 md:text-lg">
                      {'summary' in project && project.summary
                        ? project.summary
                        : project.challenge.substring(0, 140) + '...'}
                    </p>

                    {'serviceLabel' in project &&
                    project.serviceLabel &&
                    'serviceSlug' in project &&
                    project.serviceSlug ? (
                      <div className="pt-2">
                        <Link
                          href={`/services/${project.serviceSlug}`}
                          className="inline-flex items-center gap-2 font-mono text-[9px] font-black uppercase tracking-widest text-[#FF4D00] transition-opacity hover:opacity-70 md:text-[10px]"
                        >
                          Related_Service: {project.serviceLabel.replaceAll(' ', '_')}
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      </div>
                    ) : null}
                  </div>

                  <div className="grid grid-cols-2 gap-6 border-y border-zinc-100 py-8 md:gap-8 md:py-10">
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 font-mono text-[8px] font-black uppercase tracking-widest text-[#FF4D00] md:text-[9px]">
                        <Layers className="h-3 w-3" /> //_IMPACT
                      </p>
                      <p className="text-xl font-black uppercase italic tracking-tighter text-black md:text-2xl">
                        {project.metric}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="flex items-center gap-2 font-mono text-[8px] font-black uppercase tracking-widest text-[#FF4D00] md:text-[9px]">
                        <Cpu className="h-3 w-3" /> //_ARCH
                      </p>
                      <p className="text-xl font-black uppercase italic tracking-tighter text-black md:text-2xl">
                        {project.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link href={`/projects/${project.slug}`}>
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        className="group/btn flex w-full items-center gap-4 md:w-auto md:gap-6"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-black transition-all duration-500 group-hover/btn:border-[#FF4D00] group-hover/btn:bg-[#FF4D00] md:bg-transparent">
                          <ArrowUpRight className="h-5 w-5 text-white transition-colors group-hover/btn:text-white md:text-black" />
                        </div>
                        <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-black md:text-xs">
                          View_Full_Data_Sheet
                        </span>
                      </motion.button>
                    </Link>

                    {'serviceSlug' in project && project.serviceSlug ? (
                      <Link
                        href={`/services/${project.serviceSlug}`}
                        className="inline-flex items-center justify-center border border-zinc-200 px-5 py-4 font-mono text-[10px] font-black uppercase tracking-[0.25em] text-black transition-colors hover:border-[#FF4D00] hover:text-[#FF4D00] md:text-xs"
                      >
                        View_Service
                      </Link>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 flex justify-center md:mt-32">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 border border-zinc-200 px-6 py-4 font-mono text-[10px] font-black uppercase tracking-[0.25em] text-black transition-colors hover:border-[#FF4D00] hover:text-[#FF4D00] md:text-xs"
          >
            Open_Project_Archive
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}