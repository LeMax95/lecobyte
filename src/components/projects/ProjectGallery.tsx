'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Cpu,
  FileText,
  FolderTree,
  Globe,
  Layers,
  Workflow,
  X,
} from 'lucide-react';
import type { ProjectGalleryItem } from '@/lib/schema';

function getKindLabel(kind?: ProjectGalleryItem['kind']) {
  switch (kind) {
    case 'deployment':
      return 'LIVE_DEPLOYMENT';
    case 'engine':
      return 'ENGINE_GLIMPSE';
    case 'architecture':
      return 'SYSTEM_STRUCTURE';
    case 'integration':
      return 'SYSTEM_INTEGRATION';
    case 'workflow':
      return 'WORKFLOW_VIEW';
    case 'document':
      return 'DOCUMENT_OUTPUT';
    default:
      return 'PROJECT_VIEW';
  }
}

function getKindIcon(kind?: ProjectGalleryItem['kind']) {
  switch (kind) {
    case 'deployment':
      return <Globe className="h-4 w-4 text-[#FF4D00]" />;
    case 'engine':
      return <Cpu className="h-4 w-4 text-[#FF4D00]" />;
    case 'architecture':
      return <FolderTree className="h-4 w-4 text-[#FF4D00]" />;
    case 'integration':
      return <Layers className="h-4 w-4 text-[#FF4D00]" />;
    case 'workflow':
      return <Workflow className="h-4 w-4 text-[#FF4D00]" />;
    case 'document':
      return <FileText className="h-4 w-4 text-[#FF4D00]" />;
    default:
      return <Globe className="h-4 w-4 text-[#FF4D00]" />;
  }
}

type ProjectGalleryProps = {
  items: ProjectGalleryItem[];
  title?: string;
  intro?: string;
};

type ModalState =
  | {
      mode: 'single';
      image: string;
      alt: string;
      title?: string;
      caption?: string;
      fit?: 'contain' | 'cover';
    }
  | {
      mode: 'composite';
      title: string;
      views: {
        label: string;
        image: string;
        alt: string;
        caption?: string;
      }[];
      activeIndex: number;
      fit?: 'contain' | 'cover';
    }
  | null;

function CompositeGalleryCard({
  item,
  onOpen,
}: {
  item: Extract<ProjectGalleryItem, { type: 'composite' }>;
  onOpen: (index: number) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeView = item.views[activeIndex];
  const fitClass = item.fit === 'cover' ? 'object-cover' : 'object-contain';
  const isPrimary = item.emphasis === 'primary';

  return (
    <figure
      className={`group overflow-hidden border border-zinc-100 bg-zinc-50 transition-all duration-300 hover:bg-white ${
        isPrimary ? 'md:col-span-2 xl:col-span-2 hover:border-[#FF4D00]/40' : 'hover:border-zinc-200'
      }`}
    >
      <div className="border-b border-zinc-100 p-4 md:p-5">
        <div className="mb-4 flex items-center gap-2">
          {getKindIcon(item.kind)}
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
            {getKindLabel(item.kind)}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {item.views.map((view, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={`${item.title}-${view.label}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`border px-3 py-2 font-mono text-[10px] font-black uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? 'border-[#FF4D00] bg-[#FF4D00] text-white'
                    : 'border-zinc-200 bg-white text-zinc-500 hover:border-[#FF4D00] hover:text-[#FF4D00]'
                }`}
              >
                {view.label}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={() => onOpen(activeIndex)}
        className="group/image relative block w-full overflow-hidden border-b border-zinc-100 bg-zinc-100 text-left"
        aria-label={`Open ${item.title} ${activeView.label}`}
      >
        <div className={`relative w-full ${isPrimary ? 'aspect-[16/10]' : 'aspect-[4/3]'} bg-zinc-100 p-3`}>
          <Image
            src={activeView.image}
            alt={activeView.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className={`${fitClass} p-3 transition-transform duration-500 group-hover/image:scale-[1.015]`}
          />
        </div>
      </button>

      <div className="p-5">
        <h4 className="text-base font-black uppercase tracking-tight text-black md:text-lg">
          {item.title}
        </h4>

        {item.intro ? (
          <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-600">
            {item.intro}
          </p>
        ) : null}

        {activeView.caption ? (
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            {activeView.caption}
          </p>
        ) : null}
      </div>
    </figure>
  );
}

function SingleGalleryCard({
  item,
  onOpen,
}: {
  item: Extract<ProjectGalleryItem, { type: 'single' }>;
  onOpen: () => void;
}) {
  const isPrimary = item.emphasis === 'primary';
  const fitClass = item.fit === 'cover' ? 'object-cover' : 'object-contain';

  return (
    <figure
      className={`group overflow-hidden border border-zinc-100 bg-zinc-50 transition-all duration-300 hover:bg-white ${
        isPrimary ? 'md:col-span-2 xl:col-span-2 hover:border-[#FF4D00]/40' : 'hover:border-zinc-200'
      }`}
    >
      <button
        type="button"
        onClick={onOpen}
        className="group/image relative block w-full overflow-hidden border-b border-zinc-100 bg-zinc-100 text-left"
        aria-label={`Open image: ${item.title ?? item.alt}`}
      >
        <div className={`relative w-full ${isPrimary ? 'aspect-[16/10]' : 'aspect-[4/3]'} bg-zinc-100 p-3`}>
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className={`${fitClass} p-3 transition-transform duration-500 group-hover/image:scale-[1.015]`}
          />
        </div>
      </button>

      <div className="p-5">
        <div className="mb-4 flex items-center gap-2">
          {getKindIcon(item.kind)}
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
            {getKindLabel(item.kind)}
          </span>
        </div>

        {item.title ? (
          <h4 className="text-base font-black uppercase tracking-tight text-black md:text-lg">
            {item.title}
          </h4>
        ) : null}

        {item.caption ? (
          <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-600">
            {item.caption}
          </p>
        ) : null}

        {item.href ? (
          <div className="mt-5">
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#FF4D00]"
            >
              {item.hrefLabel ?? 'OPEN_LINK'}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ) : null}
      </div>
    </figure>
  );
}

export default function ProjectGallery({
  items,
  title = 'System_Views_And_Implementation_Proof',
  intro = 'Selected screenshots and system views showing how the project is structured, operated, and delivered in practice.',
}: ProjectGalleryProps) {
  const [modal, setModal] = useState<ModalState>(null);

  const safeItems = useMemo(() => items.filter(Boolean), [items]);

  if (!safeItems.length) return null;

  function closeModal() {
    setModal(null);
  }

  function prevComposite() {
    if (!modal || modal.mode !== 'composite') return;
    setModal({
      ...modal,
      activeIndex: (modal.activeIndex - 1 + modal.views.length) % modal.views.length,
    });
  }

  function nextComposite() {
    if (!modal || modal.mode !== 'composite') return;
    setModal({
      ...modal,
      activeIndex: (modal.activeIndex + 1) % modal.views.length,
    });
  }

  return (
    <section className="border-t border-zinc-100 pt-16">
      <div className="mb-8 max-w-3xl">
        <h3 className="text-xl font-black uppercase tracking-tighter text-black md:text-2xl">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-zinc-500 md:text-base">
          {intro}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {safeItems.map((item, index) => {
          if (item.type === 'composite') {
            return (
              <CompositeGalleryCard
                key={`${item.title}-${index}`}
                item={item}
                onOpen={(activeIndex) =>
                  setModal({
                    mode: 'composite',
                    title: item.title,
                    views: item.views,
                    activeIndex,
                    fit: item.fit,
                  })
                }
              />
            );
          }

          return (
            <SingleGalleryCard
              key={`${item.image}-${index}`}
              item={item}
              onOpen={() =>
                setModal({
                  mode: 'single',
                  image: item.image,
                  alt: item.alt,
                  title: item.title,
                  caption: item.caption,
                  fit: item.fit,
                })
              }
            />
          );
        })}
      </div>

      {modal ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close gallery preview"
          >
            <X className="h-5 w-5" />
          </button>

          {modal.mode === 'composite' && modal.views.length > 1 ? (
            <>
              <button
                type="button"
                onClick={prevComposite}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={nextComposite}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          ) : null}

          <div className="mx-auto flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-sm border border-white/10 bg-zinc-950">
            <div className="relative aspect-[16/10] w-full bg-zinc-900">
              {modal.mode === 'single' ? (
                <Image
                  src={modal.image}
                  alt={modal.alt}
                  fill
                  sizes="100vw"
                  className={`${modal.fit === 'cover' ? 'object-cover' : 'object-contain'} p-4`}
                  priority
                />
              ) : (
                <Image
                  src={modal.views[modal.activeIndex].image}
                  alt={modal.views[modal.activeIndex].alt}
                  fill
                  sizes="100vw"
                  className={`${modal.fit === 'cover' ? 'object-cover' : 'object-contain'} p-4`}
                  priority
                />
              )}
            </div>

            <div className="border-t border-white/10 p-5 text-white">
              {modal.mode === 'single' ? (
                <>
                  {modal.title ? (
                    <h4 className="text-lg font-black uppercase tracking-tight">
                      {modal.title}
                    </h4>
                  ) : null}
                  {modal.caption ? (
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {modal.caption}
                    </p>
                  ) : null}
                </>
              ) : (
                <>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {modal.views.map((view, index) => {
                      const isActive = index === modal.activeIndex;
                      return (
                        <button
                          key={`${modal.title}-${view.label}-${index}`}
                          type="button"
                          onClick={() => setModal({ ...modal, activeIndex: index })}
                          className={`border px-3 py-2 font-mono text-[10px] font-black uppercase tracking-[0.18em] transition-colors ${
                            isActive
                              ? 'border-[#FF4D00] bg-[#FF4D00] text-white'
                              : 'border-white/20 bg-white/5 text-zinc-300 hover:border-[#FF4D00] hover:text-white'
                          }`}
                        >
                          {view.label}
                        </button>
                      );
                    })}
                  </div>

                  <h4 className="text-lg font-black uppercase tracking-tight">
                    {modal.title} — {modal.views[modal.activeIndex].label}
                  </h4>

                  {modal.views[modal.activeIndex].caption ? (
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {modal.views[modal.activeIndex].caption}
                    </p>
                  ) : null}
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}