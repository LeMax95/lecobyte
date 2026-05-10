import type { ServiceIntroContent } from '@/lib/schema';

export default function ServiceIntro({ content }: { content: ServiceIntroContent }) {
  return (
    <section className="py-24 md:py-32 px-6 border-b border-zinc-100 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 md:w-12 bg-[#FF4D00]" />
          <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">
            {content.eyebrow}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-[0.95]">
          {content.title}
        </h2>

        <div className="mt-8 space-y-6 max-w-3xl">
          {content.body.map((paragraph) => (
            <p
              key={paragraph}
              className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}